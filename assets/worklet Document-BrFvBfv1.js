import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-gG8jtkCA.js";import"./index-B04HXFyf.js";import{M as a}from"./DocsRenderer-CFRXHY34-BkYYF8hA.js";import"./index-DI7CEG0L.js";import"./preview-CgMC775b.js";import"./iframe-BGyCcbkj.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"maxApi/Worklet"}),`
`,n.jsx(e.h1,{id:"worklet-api-documentation",children:"Worklet API Documentation"}),`
`,n.jsxs(e.p,{children:["This document provides detailed usage and examples for the three core functions of the ",n.jsx(e.code,{children:"IMaxWorklets"})," interface. These functions allow you to run code on different threads, improving performance and responsiveness in your React Native applications."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-basic-worklet-examples",children:"🧪 Basic Worklet Examples"}),`
`,n.jsxs(e.p,{children:["This section provides practical examples demonstrating how to use the ",n.jsx(e.code,{children:"runOnBackgroundAsync"})," API to offload computation-heavy tasks from the JS main thread to background threads using different priorities."]}),`
`,n.jsx(e.h3,{id:"-fibonacci-calculation-background-thread",children:"🧮 Fibonacci Calculation (Background Thread)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const computeFibonacci = maxWorklets.runOnBackgroundAsync('high', (n: number) => {
  'worklet';
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
});

computeFibonacci(10).then(result => {
  console.log('Fibonacci result:', result);
});
`})}),`
`,n.jsx(e.h3,{id:"-on-performance-comparison-js-vs-background",children:"📊 O(n²) Performance Comparison (JS vs Background)"}),`
`,n.jsxs(e.p,{children:["Compare ",n.jsx(e.code,{children:"twoSumSearch"})," on the JS thread and using a background worklet:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const backgroundWorklet = maxWorklets.runOnBackgroundAsync('high', (data: number[], target: number) => {
  'worklet';
  const pairs: Array<[number, number]> = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === target) {
        pairs.push([data[i], data[j]]);
      }
    }
  }
  return pairs;
});

const dummyData = Array.from({ length: 500 }, (_, i) => Math.floor(Math.random() * 1000) + i);
backgroundWorklet(dummyData, 500).then(pairs => {
  console.log('Pairs found:', pairs.length);
});
`})}),`
`,n.jsx(e.h3,{id:"-regex-benchmark-text-matching",children:"🔍 Regex Benchmark (Text Matching)"}),`
`,n.jsx(e.p,{children:"Example of matching complex patterns in a large text block:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const regexWorklet = maxWorklets.runOnBackgroundAsync('high', (text: string, patterns: string[]) => {
  'worklet';
  const results: { [pattern: string]: number } = {};
  patterns.forEach((patternStr, index) => {
    const pattern = new RegExp(patternStr, 'g');
    const matches = text.match(pattern) || [];
    results[\`Pattern\${index + 1}\`] = matches.length;
  });
  return results;
});

const text = "Sample email: test@example.com, phone: +1-234-567-8900, date: 2024-01-15.";
const patterns = [
  '\\\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}\\\\b',
  '\\\\+?1?[-.\\\\s]?\\\\(?[0-9]{3}\\\\)?[-.\\\\s]?[0-9]{3}[-.\\\\s]?[0-9]{4}',
  '\\\\b\\\\d{4}-\\\\d{2}-\\\\d{2}\\\\b'
];

regexWorklet(text, patterns).then(results => {
  console.log('Regex match counts:', results);
});
`})}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const showAlertOnUI = maxWorklets.runOnUI((message: string) => {
  'worklet';
  // Replace this with your UI framework's alert function
  console.log('UI Alert:', message);
});

showAlertOnUI('This is a message from the UI thread!');
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const runHeavyTaskOnJSThread = maxWorklets.runOnJSThreadAsync(async (input: number) => {
  // Simulate a heavy computation
  let result = 0;
  for (let i = 0; i < input * 100000; i++) {
    result += Math.sqrt(i);
  }
  return result;
});

runHeavyTaskOnJSThread(100).then(output => {
  console.log('Result of heavy task on JS thread:', output);
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use case:"}),`
Use for asynchronous logic, data fetching, or computations that should not block the UI.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-runonbackgroundasync",children:"🛠️ runOnBackgroundAsync"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const heavySumWorklet = maxWorklets.runOnBackgroundAsync('high', (numbers: number[]) => {
  'worklet';
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
});

const numbers = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
heavySumWorklet(numbers).then(result => {
  console.log('Total sum computed on background thread:', result);
});
`})}),`
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
`,n.jsx(e.hr,{})]})}function m(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
