import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dw915X55.js";import"./index-Cuay236k.js";import{M as t}from"./DocsRenderer-CFRXHY34-BZXUv6EV.js";import"./index-CPl6p-nG.js";import"./preview-Bbp7vrnW.js";import"./iframe-TEDt8-8D.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/HeaderRight"}),`
`,e.jsx(n.h1,{id:"headerright",children:"HeaderRight"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"HeaderRight"})," component is an internal UI component used in navigation headers. It is configured via the ",e.jsx(n.code,{children:"navigation.setOptions"})," API in React Navigation. Developers ",e.jsx(n.strong,{children:"do not use this component directly"})," but instead configure its behavior through props."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-basic-usage-prevent-close-popup",children:"📦 Basic Usage (Prevent Close Popup)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`navigation.setOptions({
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-onboarding-button",children:"🚀 Onboarding Button"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    useOnBoarding: true,
    buttonOnBoarding: 'Guide',
    onPress: () => {
      Alert.alert('Onboarding pressed');
    },
  },
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-tools-shortcut",children:"🛠 Tools Shortcut"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    useShortcut: true,
    tools: [
      {
        title: {vi: 'Công cụ', en: 'Tools'},
        items: [
          {
            key: 'favorite',
            icon: 'favorite',
            name: {vi: 'Yêu thích', en: 'Favorite'},
            onPress: () => Alert.alert('Favorite tool pressed'),
          },
          {
            key: 'notification',
            icon: 'notifications',
            name: {vi: 'Thông báo', en: 'Notifications'},
            showBadge: true,
            onPress: () => Alert.alert('Notification tool pressed'),
          },
        ],
      },
    ],
  },
});
`})}),`
`,e.jsx(n.p,{children:"The shortcut button depends on how many tools are given:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No tools: the pin (favorite) shortcut."}),`
`,e.jsxs(n.li,{children:["Exactly one tool: the tool's own icon, which runs its ",e.jsx(n.code,{children:"onPress"})," directly."]}),`
`,e.jsxs(n.li,{children:["More than one tool, or ",e.jsx(n.code,{children:"useMore: true"}),': the "more" icon, which opens the tools list.']}),`
`]}),`
`,e.jsxs(n.p,{children:["The shortcut shows a badge when any tool has ",e.jsx(n.code,{children:"showBadge: true"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-close-icon",children:"❌ Close Icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`navigation.setOptions({
  headerRight: {
    useCloseIcon: true,
  },
});
`})}),`
`,e.jsxs(n.p,{children:["By default the right capsule ends with a home icon that calls ",e.jsx(n.code,{children:"maxApi"})," ",e.jsx(n.code,{children:"dismissAll"}),". With ",e.jsx(n.code,{children:"useCloseIcon: true"})," it shows a close icon that calls ",e.jsx(n.code,{children:"maxApi"})," ",e.jsx(n.code,{children:"dismiss"}),", passing the data set by ",e.jsx(n.code,{children:"navigator.setDismissData"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-props-summary",children:"⚙️ Props Summary"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useOnBoarding"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["Show the onboarding button. Needs ",e.jsx("code",{children:"onPress"})," as well."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onPress"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"Called when the onboarding button is pressed."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"buttonOnBoarding"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsxs("td",{children:["Label of the onboarding button. Falls back to the localized ",e.jsx("code",{children:"skip"})," text."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"preventClose"})}),e.jsx("td",{children:e.jsx("code",{children:"PopupNotifyProps"})}),e.jsx("td",{children:"Show confirmation popup when closing."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useShortcut"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Show the header shortcut button next to the capsule."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useMore"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:'Use the "more" icon for the shortcut, which opens the tools list.'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"useCloseIcon"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Show a close icon instead of the home icon in the capsule."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tools"})}),e.jsx("td",{children:e.jsx("code",{children:"ToolGroup[]"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Groups of tools, each with a localized ",e.jsx("code",{children:"title"})," and an ",e.jsx("code",{children:"items"})," array. Each tool has ",e.jsx("code",{children:"key"}),", ",e.jsx("code",{children:"icon"}),", a localized ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"onPress"})," and optional ",e.jsx("code",{children:"showBadge"}),"."]})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-notes",children:"📝 Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["These options are passed via ",e.jsx(n.code,{children:"navigation.setOptions"}),"."]}),`
`,e.jsxs(n.li,{children:["If a ",e.jsx(n.code,{children:"headerRight"})," render function is provided, it overrides all configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preventClose"})," requires ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"primary"})," and optionally ",e.jsx(n.code,{children:"secondary"}),"; pressing ",e.jsx(n.code,{children:"primary"})," runs its ",e.jsx(n.code,{children:"onPress"})," and then closes."]}),`
`,e.jsx(n.li,{children:"The help center button is hidden inside the help center mini app."}),`
`,e.jsxs(n.li,{children:["Internally uses ",e.jsx(n.code,{children:"ApplicationContext"}),", ",e.jsx(n.code,{children:"PopupNotify"})," and ",e.jsx(n.code,{children:"maxApi"})," calls for the help center, favorites and tools list."]}),`
`]}),`
`,e.jsx(n.hr,{})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{u as default};
