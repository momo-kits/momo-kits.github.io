import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-gG8jtkCA.js";import"./index-DRTswfvy.js";import{M as i}from"./DocsRenderer-CFRXHY34-JJxnsxMx.js";import"./index-DI7CEG0L.js";import"./preview-qBf4vtDU.js";import"./iframe-BssrehfN.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"maxApi/Worklet"}),`
`,n.jsx(e.h1,{id:"worklet-api-documentation",children:"Worklet API Documentation"}),`
`,n.jsxs(e.p,{children:["This document provides detailed usage and examples for the three core functions of the ",n.jsx(e.code,{children:"IMaxWorklets"})," interface. These functions allow you to run code on different threads, improving performance and responsiveness in your React Native applications."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-runonui",children:"🖥️ runOnUI"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Run a worklet on the UI thread."})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Signature:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`runOnUI<Args extends unknown[], ReturnValue>(
  worklet: (...args: Args) => ReturnValue
): (...args: Args) => void
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Parameters:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"worklet"}),": A function to be executed on the UI thread."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"A new function that, when called, runs the worklet on the UI thread."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const updateUI = maxWorklets.runOnUI((x: number) => {
  // Update UI logic here
});
updateUI(5);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use case:"}),`
Use this for UI updates or animations that must run on the UI thread for smooth performance.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-runonjsthreadasync",children:"⚡ runOnJSThreadAsync"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Run a function asynchronously on the JavaScript thread."})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Signature:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`runOnJSThreadAsync<Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue
): (...args: Args) => Promise<ReturnValue>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Parameters:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"func"}),": A function to be executed on the JS thread."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["A new function that returns a Promise resolving to the result of ",n.jsx(e.code,{children:"func"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const fetchData = maxWorklets.runOnJSThreadAsync(async (id: string) => {
  // Fetch or process data
  return await api.getData(id);
});
fetchData('123').then(data => {
  // Handle result
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use case:"}),`
Use for asynchronous logic, data fetching, or computations that should not block the UI.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-runonbackgroundasync",children:"🛠️ runOnBackgroundAsync"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Run a worklet asynchronously on a background thread with priority."})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Signature:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`runOnBackgroundAsync<
  PriorityType extends BackgroundPriority,
  Args extends unknown[],
  ReturnValue
>(
  priority: PriorityType,
  worklet: (...args: Args) => ReturnValue
): (...args: Args) => Promise<ReturnValue>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Parameters:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"priority"}),": Thread priority (",n.jsx(e.code,{children:"'low'"}),", ",n.jsx(e.code,{children:"'medium'"}),", or ",n.jsx(e.code,{children:"'high'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"worklet"}),": A function to be executed on a background thread."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["A new function that returns a Promise resolving to the result of ",n.jsx(e.code,{children:"worklet"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const processHeavyTask = maxWorklets.runOnBackgroundAsync('high', (data) => {
  // Heavy computation
  return process(data);
});
processHeavyTask(bigData).then(result => {
  // Handle result
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use case:"}),`
Use for heavy computations or tasks that should not affect UI responsiveness. Choose the appropriate priority for your use case.`]}),`
`]}),`
`,n.jsx(e.hr,{})]})}function g(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{g as default};
