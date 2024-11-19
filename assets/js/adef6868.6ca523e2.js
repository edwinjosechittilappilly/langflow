"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8953],{29:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=s(4848),r=s(8453);const d={title:"Loaders",sidebar_position:10,slug:"/components-loaders"},i="Loaders",l={id:"Components/components-loaders",title:"Loaders",description:"Loaders are components used to load documents from various sources, such as databases, websites, and local files. They can be used to fetch data from external sources and convert it into a format that can be processed by other components.",source:"@site/docs/Components/components-loaders.md",sourceDirName:"Components",slug:"/components-loaders",permalink:"/components-loaders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Loaders",sidebar_position:10,slug:"/components-loaders"},sidebar:"defaultSidebar",previous:{title:"RAG",permalink:"/components-rag"},next:{title:"Types of agents in Langflow",permalink:"/components-agents"}},a={},o=[{value:"Confluence",id:"confluence",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs:",id:"inputs",level:4},{value:"Outputs:",id:"outputs",level:4},{value:"GitLoader",id:"gitloader",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs:",id:"inputs-1",level:4},{value:"Outputs:",id:"outputs-1",level:4},{value:"Unstructured",id:"unstructured",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Inputs:",id:"inputs-2",level:4},{value:"Outputs:",id:"outputs-2",level:4}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"loaders",children:"Loaders"})}),"\n",(0,n.jsx)(t.p,{children:"Loaders are components used to load documents from various sources, such as databases, websites, and local files. They can be used to fetch data from external sources and convert it into a format that can be processed by other components."}),"\n",(0,n.jsx)(t.h2,{id:"confluence",children:"Confluence"}),"\n",(0,n.jsx)(t.p,{children:"The Confluence component integrates with the Confluence wiki collaboration platform to load and process documents. It utilizes the ConfluenceLoader from LangChain to fetch content from a specified Confluence space."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.h4,{id:"inputs",children:"Inputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"Site URL"}),(0,n.jsxs)(t.td,{children:["The base URL of the Confluence Space (e.g., ",(0,n.jsx)(t.a,{href:"https://company.atlassian.net/wiki",children:"https://company.atlassian.net/wiki"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"username"}),(0,n.jsx)(t.td,{children:"Username"}),(0,n.jsxs)(t.td,{children:["Atlassian User E-mail (e.g., ",(0,n.jsx)(t.a,{href:"mailto:email@example.com",children:"email@example.com"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"api_key"}),(0,n.jsx)(t.td,{children:"API Key"}),(0,n.jsxs)(t.td,{children:["Atlassian API Key (Create at: ",(0,n.jsx)(t.a,{href:"https://id.atlassian.com/manage-profile/security/api-tokens",children:"https://id.atlassian.com/manage-profile/security/api-tokens"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"space_key"}),(0,n.jsx)(t.td,{children:"Space Key"}),(0,n.jsx)(t.td,{children:"The key of the Confluence space to access"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cloud"}),(0,n.jsx)(t.td,{children:"Use Cloud?"}),(0,n.jsx)(t.td,{children:"Whether to use Confluence Cloud (default: true)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"content_format"}),(0,n.jsx)(t.td,{children:"Content Format"}),(0,n.jsx)(t.td,{children:"Specify content format (default: STORAGE)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_pages"}),(0,n.jsx)(t.td,{children:"Max Pages"}),(0,n.jsx)(t.td,{children:"Maximum number of pages to retrieve (default: 1000)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"outputs",children:"Outputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Data"}),(0,n.jsx)(t.td,{children:"List of Data objects containing the loaded Confluence documents"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"gitloader",children:"GitLoader"}),"\n",(0,n.jsx)(t.p,{children:"The GitLoader component uses the GitLoader from LangChain to fetch and load documents from a specified Git repository."}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(t.h4,{id:"inputs-1",children:"Inputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"repo_path"}),(0,n.jsx)(t.td,{children:"Repository Path"}),(0,n.jsx)(t.td,{children:"The local path to the Git repository"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clone_url"}),(0,n.jsx)(t.td,{children:"Clone URL"}),(0,n.jsx)(t.td,{children:"The URL to clone the Git repository from (optional)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"branch"}),(0,n.jsx)(t.td,{children:"Branch"}),(0,n.jsx)(t.td,{children:"The branch to load files from (default: 'main')"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file_filter"}),(0,n.jsx)(t.td,{children:"File Filter"}),(0,n.jsx)(t.td,{children:"Patterns to filter files (e.g., '.py' to include only .py files, '!.py' to exclude .py files)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"content_filter"}),(0,n.jsx)(t.td,{children:"Content Filter"}),(0,n.jsx)(t.td,{children:"A regex pattern to filter files based on their content"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"outputs-1",children:"Outputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Data"}),(0,n.jsx)(t.td,{children:"List of Data objects containing the loaded Git repository documents"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"unstructured",children:"Unstructured"}),"\n",(0,n.jsxs)(t.p,{children:["This component uses the ",(0,n.jsx)(t.a,{href:"https://unstructured.io/",children:"Unstructured"})," library to load and parse PDF, DOCX, and TXT files into structured data. This component works with both the open-source library and the Unstructured API."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(t.h4,{id:"inputs-2",children:"Inputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file"}),(0,n.jsx)(t.td,{children:"File"}),(0,n.jsx)(t.td,{children:"The path to the file to be parsed (supported types: pdf, docx, txt)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"api_key"}),(0,n.jsx)(t.td,{children:"API Key"}),(0,n.jsx)(t.td,{children:"Unstructured API Key (optional, if not provided, open-source library will be used)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"outputs-2",children:"Outputs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Data"}),(0,n.jsx)(t.td,{children:"List of Data objects containing the parsed content from the input file"})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(6540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);