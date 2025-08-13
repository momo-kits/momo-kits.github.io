import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-gG8jtkCA.js";import"./index-ThpmIpoF.js";import{M as s}from"./DocsRenderer-CFRXHY34-D3OyS5-C.js";import"./index-DI7CEG0L.js";import"./preview-CMZB6k2I.js";import"./iframe-B8Zj-3Uz.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Tracking Scope"}),`
`,e.jsx(n.h1,{id:"tracking-scope",children:"Tracking Scope"}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TrackingScope"})," lets you define a logical tracking prefix for all components inside it. Internally it provides a context value used by ",e.jsx(n.code,{children:"useComponentId"})," so generated ",e.jsx(n.code,{children:"componentId"}),"s include your ",e.jsx(n.code,{children:"scopeName"})," as a segment. This helps segment analytics by screen sections or groups."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"scopeName"}),": string. The logical name for this scope. Used as a prefix in ",e.jsx(n.code,{children:"componentId"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children"}),": React nodes rendered within the scope."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type TrackingScopeProps = {
  scopeName: string;
  children: React.ReactNode;
};
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["Wrap a section of UI so all components inside generate ",e.jsx(n.code,{children:"componentId"}),"s with the scope prefix."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import {Button} from '@momo-kits/foundation';

export default function PaymentScreen() {
  return (
    <TrackingScope scopeName="ButtonScope">
      <Button title = "Click me!"/>
      <Button title = "Click me!"/>
    </TrackingScope>
  );
}
`})}),`
`,e.jsx(n.p,{children:"It will define scopeName for 2 button inside using auto gen componentId"})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{u as default};
