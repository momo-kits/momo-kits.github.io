import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-gG8jtkCA.js";import"./index-Czlgpq96.js";import{M as o}from"./DocsRenderer-CFRXHY34-B9lqNX1s.js";import"./index-DI7CEG0L.js";import"./preview-D8XB7Mlg.js";import"./iframe-LXfXa6WE.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function s(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Migration/MoMo-CLI with Partner Mode"}),`
`,e.jsx(n.h1,{id:"-momo-cli-partner-mode-support",children:"🚀 MoMo-CLI: Partner Mode Support"}),`
`,e.jsxs(n.p,{children:["MoMo-CLI provides a special ",e.jsx(n.strong,{children:"Partner Mode"})," to streamline the development and migration process for partner projects. This mode automates several setup steps, ensuring your environment is ready for development with minimal manual intervention."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-what-is-partner-mode",children:"🤔 What is Partner Mode?"}),`
`,e.jsx(n.p,{children:"Partner Mode is designed for projects that require specific migration steps and dependency installations before starting the development server. By enabling this mode, MoMo-CLI will:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🔄 ",e.jsx(n.strong,{children:"Run the migration process"})," tailored for partner projects."]}),`
`,e.jsxs(n.li,{children:["📦 ",e.jsx(n.strong,{children:"Automatically install all required dependencies"})," using ",e.jsx(n.code,{children:"yarn install"}),"."]}),`
`,e.jsxs(n.li,{children:["🏁 ",e.jsx(n.strong,{children:"Proceed with the standard project startup flow"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-how-to-use-partner-mode",children:"🛠️ How to Use Partner Mode"}),`
`,e.jsxs(n.p,{children:["To start your project in Partner Mode, use the ",e.jsx(n.code,{children:"--partner"})," flag with the ",e.jsx(n.code,{children:"start"})," command:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`momo-cli start --partner --port <PORT> --mode <MODE>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--partner"}),": Enables Partner Mode."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--port"}),": (Required) The port number for the dev server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--mode"}),": (Optional) Server mode (",e.jsx(n.code,{children:"shared"})," or ",e.jsx(n.code,{children:"standalone"}),"). If not provided, you will be prompted to select one."]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`momo-cli start --partner --port 8181 --mode shared
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-what-happens-in-partner-mode",children:"⚙️ What Happens in Partner Mode?"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["🏗️ ",e.jsx(n.strong,{children:"Migration"}),": The CLI runs the migration process with partner-specific settings."]}),`
`,e.jsxs(n.li,{children:["📥 ",e.jsx(n.strong,{children:"Dependency Installation"}),": All dependencies are installed automatically."]}),`
`,e.jsxs(n.li,{children:["🚦 ",e.jsx(n.strong,{children:"Startup"}),": The CLI continues with the normal startup process, including configuration and server launch."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-when-should-i-use-partner-mode",children:"💡 When Should I Use Partner Mode?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"🆕 When setting up a new partner project (React Native new architecture)."}),`
`,e.jsx(n.li,{children:"🔄 When you need to ensure all migrations and dependencies are up to date before starting development."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Next Step:"}),e.jsx(n.br,{}),`
`,"If you have any questions or encounter any issues, please contact: ",e.jsx(n.a,{href:"mailto:le.nguyen4@mservice.com.vn",children:"le.nguyen4@mservice.com.vn"})]})]})}function x(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
