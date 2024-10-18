import { INVALID_FILE_SIZE_ALERT } from "@/constants/alerts_constants";
import { useDeleteBuilds } from "@/controllers/API/queries/_builds";
import { usePostUploadFile } from "@/controllers/API/queries/files/use-post-upload-file";
import { track } from "@/customization/utils/analytics";
import { useMessagesStore } from "@/stores/messagesStore";
import { useUtilityStore } from "@/stores/utilityStore";
import { useEffect, useRef, useState } from "react";
import ShortUniqueId from "short-unique-id";
import IconComponent from "../../../../components/genericIconComponent";
import {
  ALLOWED_IMAGE_INPUT_EXTENSIONS,
  FS_ERROR_TEXT,
  SN_ERROR_TEXT,
} from "../../../../constants/constants";
import useAlertStore from "../../../../stores/alertStore";
import useFlowStore from "../../../../stores/flowStore";
import useFlowsManagerStore from "../../../../stores/flowsManagerStore";
import { ChatMessageType } from "../../../../types/chat";
import { FilePreviewType, chatViewProps } from "../../../../types/components";
import useDragAndDrop from "./chatInput/hooks/use-drag-and-drop";
import ChatInput from "./chatInput/newChatInput";
import ChatMessage from "./chatMessage";

export default function ChatView({
  sendMessage,
  chatValue,
  setChatValue,
  lockChat,
  setLockChat,
  visibleSession,
  focusChat,
}: chatViewProps): JSX.Element {
  const { flowPool, outputs, inputs, CleanFlowPool } = useFlowStore();
  const { setErrorData } = useAlertStore();
  const currentFlowId = useFlowsManagerStore((state) => state.currentFlowId);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const messages = useMessagesStore((state) => state.messages);

  const inputTypes = inputs.map((obj) => obj.type);
  const updateFlowPool = useFlowStore((state) => state.updateFlowPool);
  const [id, setId] = useState<string>("");
  const { mutate: mutateDeleteFlowPool } = useDeleteBuilds();
  const maxFileSizeUpload = useUtilityStore((state) => state.maxFileSizeUpload);

  //build chat history
  useEffect(() => {
    const messagesFromMessagesStore: ChatMessageType[] = messages
      .filter(
        (message) =>
          message.flow_id === currentFlowId &&
          (visibleSession === message.session_id ?? true),
      )
      .map((message) => {
        let files = message.files;
        //HANDLE THE "[]" case
        if (typeof files === "string") {
          files = JSON.parse(files);
        }
        return {
          isSend: message.sender === "User",
          message: message.text,
          sender_name: message.sender_name,
          files: files,
          id: message.id,
          timestamp: message.timestamp,
          session: message.session_id,
          edit: message.edit,
        };
      });
    const finalChatHistory = [...messagesFromMessagesStore].sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });

    setChatHistory(finalChatHistory);
  }, [flowPool, messages, visibleSession]);
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    // trigger focus on chat when new session is set
  }, [focusChat]);

  function clearChat(): void {
    setChatHistory([]);

    mutateDeleteFlowPool(
      { flowId: currentFlowId },
      {
        onSuccess: () => {
          CleanFlowPool();
        },
      },
    );
    //TODO tell backend to clear chat session
    if (lockChat) setLockChat(false);
  }

  function updateChat(
    chat: ChatMessageType,
    message: string,
    stream_url?: string,
  ) {
    chat.message = message;
    if (chat.componentId)
      updateFlowPool(chat.componentId, {
        message,
        sender_name: chat.sender_name ?? "Bot",
        sender: chat.isSend ? "User" : "Machine",
      });
  }
  const [files, setFiles] = useState<FilePreviewType[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const { dragOver, dragEnter, dragLeave } = useDragAndDrop(setIsDragging);

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files, setFiles, currentFlowId, setErrorData);
      e.dataTransfer.clearData();
    }
    setIsDragging(false);
  };

  const { mutate } = usePostUploadFile();

  const handleFiles = (files, setFiles, currentFlowId, setErrorData) => {
    if (files) {
      const file = files?.[0];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (file.size > maxFileSizeUpload) {
        setErrorData({
          title: INVALID_FILE_SIZE_ALERT(maxFileSizeUpload / 1024 / 1024),
        });
        return;
      }

      if (
        !fileExtension ||
        !ALLOWED_IMAGE_INPUT_EXTENSIONS.includes(fileExtension)
      ) {
        console.log("Error uploading file");
        setErrorData({
          title: "Error uploading file",
          list: [FS_ERROR_TEXT, SN_ERROR_TEXT],
        });
        return;
      }
      const uid = new ShortUniqueId();
      const id = uid.randomUUID(3);
      setId(id);

      const type = files[0].type.split("/")[0];
      const blob = files[0];

      setFiles((prevFiles) => [
        ...prevFiles,
        { file: blob, loading: true, error: false, id, type },
      ]);

      mutate(
        { file: blob, id: currentFlowId },
        {
          onSuccess: (data) => {
            setFiles((prev) => {
              const newFiles = [...prev];
              const updatedIndex = newFiles.findIndex((file) => file.id === id);
              newFiles[updatedIndex].loading = false;
              newFiles[updatedIndex].path = data.file_path;
              return newFiles;
            });
          },
          onError: (error) => {
            setFiles((prev) => {
              const newFiles = [...prev];
              const updatedIndex = newFiles.findIndex((file) => file.id === id);
              newFiles[updatedIndex].loading = false;
              newFiles[updatedIndex].error = true;
              return newFiles;
            });
            setErrorData({
              title: "Error uploading file",
              list: [error.response?.data?.detail],
            });
          },
        },
      );
    }
  };

    return (

        <div className="flex w-full flex-col rounded-md background h-[95%]"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={onDrop}>
            <div ref={messagesRef} className="chat-message-div">
                {chatHistory?.length > 0 ? (
                    chatHistory.map((chat, index) => (
                        <ChatMessage
                            setLockChat={setLockChat}
                            lockChat={lockChat}
                            chat={chat}
                            lastMessage={chatHistory.length - 1 === index ? true : false}
                            key={`${chat.id}-${index}`}
                            updateChat={updateChat}
                        />
                    ))
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center bg-background p-8">
                            <span className="text-4xl pb-5">⛓️</span>
                            <h3 className="mt-2 text-2xl font-semibold text-primary pb-2">New chat</h3>
                            <p className="text-muted-foreground text-lg">Test your flow with a chat prompt</p>
                        </div>
                    </div>
                )}
                <div className={lockChat ? "form-modal-chat-position" : ""} ref={ref}>
                {lockChat && (
                    <div className="flex w-full px-8">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                            <span className="text-4xl">⛓️</span>
                            <span className="animate-pulse">Flow running...</span>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div className="w-5/6 m-auto">
                    <ChatInput
                        chatValue={chatValue}
                        noInput={!inputTypes.includes("ChatInput")}
                        lockChat={lockChat}
                        sendMessage={({ repeat, files }) => {
                            sendMessage({ repeat, files });
                            track("Playground Message Sent");
                        }}
                        setChatValue={(value) => {
                            setChatValue(value);
                        }}
                        inputRef={ref}
                        files={files}
                        setFiles={setFiles}
                        isDragging={isDragging}
                    />
            </div>
        </div>
    );
}
