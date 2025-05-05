import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-gG8jtkCA.js";import"./index-Da60wRUE.js";import{M as a}from"./DocsRenderer-CFRXHY34-1j0zFhmI.js";import"./index-DI7CEG0L.js";import"./preview-CvEyFzy5.js";import"./iframe-Ug56lka-.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Guides/HeaderLeft"}),`
`,n.jsx(e.h1,{id:"headerleft",children:"HeaderLeft"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"HeaderLeft"})," component is an internal UI component that provides back button functionality in navigation headers. It's configured through the ",n.jsx(e.code,{children:"navigation.setOptions"})," API in React Navigation. This component is not intended to be used directly by developers, but rather configured through navigation options."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-basic-usage-default-back-button",children:"📦 Basic Usage (Default Back Button)"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"HeaderLeft"})," component automatically renders a back button that navigates to the previous screen when pressed."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-preventing-accidental-navigation-confirm-back",children:"🔒 Preventing Accidental Navigation (Confirm Back)"}),`
`,n.jsx(e.p,{children:"You can add a confirmation popup when users attempt to navigate back, especially useful for forms with unsaved changes:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  preventBack: {
    title: 'Confirm Exit',
    description: 'You have unsaved changes. Are you sure you want to exit?',
    buttonDirection: 'row', // 'row' or 'column'
    primary: {
      title: 'Exit',
      onPress: () => {
        // Optional callback before exiting
        console.log('User confirmed exit');
      },
    },
    secondary: {
      title: 'Stay',
      onPress: () => {
        // Optional callback if user decides to stay
        console.log('User canceled exit');
      },
    },
  },
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-custom-back-handler",children:"🔄 Custom Back Handler"}),`
`,n.jsx(e.p,{children:"For scenarios where you need to perform actions before navigating back (like saving data):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  onBackHandler: (goBack) => {
    // Custom logic before going back
    saveFormData().then(() => {
      // Call goBack() when ready to navigate
      goBack();
    });
    
    // Don't call goBack() if you want to prevent navigation
  },
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-custom-left-header-press-handler",children:"👆 Custom Left Header Press Handler"}),`
`,n.jsx(e.p,{children:"If you need to track back button presses or perform additional actions:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`navigation.setOptions({
  onPressLeftHeader: () => {
    // This runs when the back button is pressed, before navigation occurs
    analytics.trackEvent('back_button_pressed');
    // Note: Navigation will still proceed after this callback
  },
});
`})}),`
`,n.jsx(e.h2,{id:"-implementation-notes",children:"📝 Implementation Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The component handles both software back button presses and Android hardware back button presses"}),`
`,n.jsx(e.li,{children:"It provides automatic dismissal of the miniapp when at the root of the navigation stack"}),`
`,n.jsxs(e.li,{children:["The component includes analytics tracking via ",n.jsx(e.code,{children:"autoTracking"})]}),`
`,n.jsx(e.li,{children:"Back button can be configured for different behaviors without modifying the component itself"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-related-components",children:"🔗 Related Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/?path=/docs/guides-navigationbutton--docs",children:"NavigationButton"})," - Used internally by HeaderLeft"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/?path=/docs/guides-popupnotify--docs",children:"PopupNotify"})," - Used for confirmation dialogs"]}),`
`]})]})}function g(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{g as default};
