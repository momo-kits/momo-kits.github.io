import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-gG8jtkCA.js";import"./index-Czlgpq96.js";import{M as r}from"./DocsRenderer-CFRXHY34-B9lqNX1s.js";import"./index-DI7CEG0L.js";import"./preview-D8XB7Mlg.js";import"./iframe-LXfXa6WE.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function s(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Migration/Migration Guide"}),`
`,n.jsx(e.h1,{id:"migration-guide",children:"Migration Guide"}),`
`,n.jsxs(e.p,{children:["This guide walks you through the process of migrating your project from ",n.jsx(e.code,{children:"@momo-kits/core"})," to ",n.jsx(e.code,{children:"@momo-kits/foundation"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"minimum-requirements",children:"Minimum Requirements"}),`
`,n.jsx(e.p,{children:"Deployment target: 81"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"1-install-the-new-package",children:"1. Install the new package"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add @momo-kits/foundation
# or
npm install @momo-kits/foundation
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"2-update-imports",children:"2. Update imports"}),`
`,n.jsxs(e.p,{children:["Find all imports from ",n.jsx(e.code,{children:"@momo-kits/core"})," and update them to use ",n.jsx(e.code,{children:"@momo-kits/foundation"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Before:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Button } from '@momo-kits/core';
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"After:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Button } from '@momo-kits/foundation';
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["✅ Use the ",n.jsx(e.a,{href:"/docs/migration-component-mapping--docs",children:"component-mapping"})," file to verify if any component names or structures have changed."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"3-adjust-props-if-needed",children:"3. Adjust props if needed"}),`
`,n.jsx(e.p,{children:"Some components have updated, renamed, or removed props."}),`
`,n.jsxs(e.p,{children:["Refer to ",n.jsx(e.a,{href:"/docs/migration-breaking-changes--docs",children:"breaking-changes"})," for detailed guidance on necessary updates."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"4-test-components-in-your-app",children:"4. Test components in your app"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Confirm visual appearance and interaction are consistent"}),`
`,n.jsx(e.li,{children:"Check for accessibility behavior"}),`
`,n.jsx(e.li,{children:"Resolve any console warnings or TypeScript errors"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"5-clean-up-and-refactor",children:"5. Clean up and refactor"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Remove unused imports"}),`
`,n.jsx(e.li,{children:"Delete legacy code related to deprecated components"}),`
`,n.jsxs(e.li,{children:["Align styles and spacing with ",n.jsx(e.code,{children:"foundation"})," tokens"]}),`
`,n.jsxs(e.li,{children:["Remove ",n.jsx(e.code,{children:"@momo-kits/core"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn remove @momo-kits/core
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"next-steps",children:"Next Steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["📦 ",n.jsx(e.a,{href:"/docs/migration-component-mapping--docs",children:"Component Mapping"})]}),`
`,n.jsxs(e.li,{children:["⚠️ ",n.jsx(e.a,{href:"/docs/migration-breaking-changes--docs",children:"Breaking Changes"})]}),`
`]})]})}function j(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{j as default};
