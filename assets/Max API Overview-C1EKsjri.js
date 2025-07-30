import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-gG8jtkCA.js";import"./index-QrriH-vD.js";import{M as d}from"./DocsRenderer-CFRXHY34-BaBGAxSb.js";import"./index-DI7CEG0L.js";import"./preview-DTuhema_.js";import"./iframe-CsWOmb8x.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"maxApi/Max API Overview"}),`
`,n.jsx(e.h1,{id:"maxapi-document",children:"MaxApi Document"}),`
`,n.jsxs(e.p,{children:["This document highlights breaking changes between ",n.jsx(e.code,{children:"@momo-kits/core"})," and ",n.jsx(e.code,{children:"@momo-kits/foundation"}),". Use this as a reference when upgrading to ",n.jsx(e.code,{children:"foundation"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-global-changes",children:"🔁 Global Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components are fully typed with TypeScript"}),`
`,n.jsx(e.li,{children:"Removed support for prop-types and runtime prop validation"}),`
`,n.jsx(e.li,{children:"Component styling now follows a token-based design system"}),`
`,n.jsxs(e.li,{children:["Navigation has been redesigned and style-packaged using a new ",n.jsx(e.code,{children:"NavigationContainer"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-navigation",children:"🚨 Navigation"}),`
`,n.jsxs(e.p,{children:["Navigation setup and usage has been ",n.jsx(e.strong,{children:"completely redesigned"})," in ",n.jsx(e.code,{children:"@momo-kits/foundation"}),"."]}),`
`,n.jsx(e.h3,{id:"-breaking-changes-summary",children:"🔁 Breaking Changes Summary"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Feature / Concept"}),n.jsx("th",{children:n.jsx("code",{children:"@momo-kits/core"})}),n.jsx("th",{children:n.jsx("code",{children:"@momo-kits/foundation"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Navigation system"}),n.jsx("td",{children:n.jsx("code",{children:"Navigator"})}),n.jsx("td",{children:n.jsx("code",{children:"NavigationContainer"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Header / title components"}),n.jsxs("td",{children:[n.jsx("code",{children:"NavigationBar"}),", ",n.jsx("code",{children:"NavigationTitle"})]}),n.jsx("td",{children:"Already setup in system navigation"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Back button / nav buttons"}),n.jsxs("td",{children:[n.jsx("code",{children:"NavigationBackButton"}),", ",n.jsx("code",{children:"NavigationButton"})]}),n.jsx("td",{children:"Already setup in system navigation"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Global config (theme/localize/maxApi)"}),n.jsx("td",{children:"None"}),n.jsxs("td",{children:["Theme + localization + maxApi Passed as props to ",n.jsx("code",{children:"NavigationContainer"})]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Localization"}),n.jsx("td",{children:"LocalizedString"}),n.jsxs("td",{children:["using translate function in ",n.jsx("code",{children:"ApplicationContext"})]})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-layout-system",children:"🧩 Layout System"}),`
`,n.jsxs(e.p,{children:["The layout system in ",n.jsx(e.code,{children:"@momo-kits/foundation"})," replaces manual ",n.jsx(e.code,{children:"View"}),"-based structures."]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Core Approach"}),n.jsx("th",{children:"Foundation Equivalent"}),n.jsx("th",{children:"Notes"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsxs("td",{children:["Manual ",n.jsx(e.code,{children:"View"})," nesting"]}),n.jsx("td",{children:"Screen"}),n.jsx("td",{children:"Top-level wrapper with safe area & padding"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Flex, Row, etc."}),n.jsx("td",{children:"GridSystem"}),n.jsx("td",{children:"Standardized layout and spacing utilities"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Manual card UI"}),n.jsx("td",{children:"Card"}),n.jsx("td",{children:"Pre-styled container"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Settings-style rows"}),n.jsx("td",{children:"Item, ItemList"}),n.jsx("td",{children:"Consistent list row structure"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Form section blocks"}),n.jsx("td",{children:"Section, ItemSectionList"}),n.jsx("td",{children:"Grouped content blocks"})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-localization",children:"🌐 Localization"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Core Approach"}),n.jsx("th",{children:"Foundation Approach"}),n.jsx("th",{children:"Notes"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"SwitchLanguage"}),n.jsx("td",{children:"Removed"}),n.jsx("td",{children:"Handled in app logic"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Utility functions"}),n.jsx("td",{children:"translate() in ApplicationContext"}),n.jsx("td",{children:"Access via React Context"})]})]})]}),`
`,n.jsx(e.h3,{id:"-migration-notes",children:"🛠 Migration Notes"}),`
`,n.jsx(e.p,{children:"Use:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ApplicationContext } from '@momo-kits/foundation';
const { translate } = useContext(ApplicationContext);
translate('auth.login.button');
`})}),`
`,n.jsxs(e.p,{children:["Inject ",n.jsx(e.code,{children:"Localize"})," into ",n.jsx(e.code,{children:"NavigationContainer"}),"."]}),`
`,n.jsx(e.hr,{})]})}function m(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
