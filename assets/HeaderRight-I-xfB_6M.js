import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dw915X55.js";import"./index-BlikL4tB.js";import{M as s}from"./DocsRenderer-CFRXHY34-CodupoKR.js";import"./index-CPl6p-nG.js";import"./preview-Cw8gKeMe.js";import"./iframe-BP18qD3Z.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Guides/HeaderRight"}),`
`,n.jsx(e.h1,{id:"headerright",children:"HeaderRight"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"HeaderRight"})," component is an internal UI component used in navigation headers. It is configured via the ",n.jsx(e.code,{children:"navigation.setOptions"})," API in React Navigation. Developers ",n.jsx(e.strong,{children:"do not use this component directly"})," but instead configure its behavior through props."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-basic-usage-prevent-close-popup",children:"📦 Basic Usage (Prevent Close Popup)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    preventClose: {
      title: 'Title',
      description: 'Custom description for popup.',
      buttonDirection: 'row',
      primary: {
        title: 'Go Back',
        onPress: () => {},
      },
      secondary: {
        title: 'Stay',
        onPress: () => {},
      },
    },
  },
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-onboarding-button",children:"🚀 Onboarding Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    useOnBoarding: true,
    buttonOnBoarding: {
      icon: 'info',
      text: 'Guide',
    },
    onPress: () => {
      Alert.alert('Onboarding pressed');
    },
  },
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-tools-shortcut",children:"🛠 Tools Shortcut"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    useShortcut: true,
    tools: [
      {
        id: 'favorite',
        icon: 'favorite',
        onPress: () => Alert.alert('Favorite tool pressed'),
      },
      {
        id: 'notification',
        icon: 'notifications',
        badge: true,
        onPress: () => Alert.alert('Notification tool pressed'),
      },
    ],
  },
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-props-summary",children:"⚙️ Props Summary"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Key"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"useOnBoarding"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"Show onboarding action."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onPress"})}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"Called on onboarding/help icon press."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"buttonOnBoarding"})}),n.jsx("td",{children:n.jsx("code",{children:" icon: string; text?: string "})}),n.jsx("td",{children:"Icon and optional text for onboarding."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"preventClose"})}),n.jsx("td",{children:n.jsx("code",{children:"PopupNotifyProps"})}),n.jsx("td",{children:"Show confirmation popup when closing."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"useShortcut"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"Show header shortcut icon."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"useMore"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"Show header more icon."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"tools"})}),n.jsx("td",{children:n.jsx("code",{children:"Tool[]"})}),n.jsx("td",{children:n.jsxs(e.p,{children:["Array of shortcut tools. Each tool can have ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"icon"}),", ",n.jsx("code",{children:"badge"}),", ",n.jsx("code",{children:"onPress"}),"."]})})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-notes",children:"📝 Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["These options are passed via ",n.jsx(e.code,{children:"navigation.setOptions"}),"."]}),`
`,n.jsxs(e.li,{children:["If a ",n.jsx(e.code,{children:"headerRight"})," render function is provided, it overrides all configuration."]}),`
`,n.jsxs(e.li,{children:["Internally uses contexts and components like ",n.jsx(e.code,{children:"PopupNotify"}),", ",n.jsx(e.code,{children:"BottomSheetHelpCenter"}),", and ",n.jsx(e.code,{children:"Tool"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{})]})}function u(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{u as default};
