import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-gG8jtkCA.js";import"./index-Da60wRUE.js";import{M as s}from"./DocsRenderer-CFRXHY34-1j0zFhmI.js";import"./index-DI7CEG0L.js";import"./preview-CvEyFzy5.js";import"./iframe-Ug56lka-.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function a(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Navigator"}),`
`,e.jsx(n.h1,{id:"navigator",children:"Navigator"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Navigator"})," is a core utility class that provides navigation controls for the application. It serves as a wrapper around React Navigation's navigation functionality, offering a simplified and consistent API for navigating between screens."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," You don't need to create Navigator instances directly. Use the navigator object from ApplicationContext instead."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-accessing-the-navigator",children:"🔍 Accessing the Navigator"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {useContext} from 'react';
import {ApplicationContext} from '@momo-kits/foundation';

function MyComponent() {
  const {navigator} = useContext(ApplicationContext);
  
  // Now you can use navigator methods
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-available-navigation-methods",children:"📡 Available Navigation Methods"}),`
`,e.jsx(n.h3,{id:"stack-navigation",children:"Stack Navigation"}),`
`,e.jsxs(n.h4,{id:"push---navigate-to-a-new-screen",children:[e.jsx(n.code,{children:"push"})," - Navigate to a new screen"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Pushes a new screen onto the navigation stack
navigator.push({
  screen: ProductDetailScreen,
  options: {
    headerTitle: 'Product Details',
    // Any other navigation options
  },
  // Additional parameters to pass to the screen
  productId: '12345',
});
`})}),`
`,e.jsxs(n.h4,{id:"pop---go-back-to-the-previous-screen",children:[e.jsx(n.code,{children:"pop"})," - Go back to the previous screen"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Go back one screen
navigator.pop();

// Go back multiple screens (optional count parameter)
navigator.pop(2); // Go back 2 screens
`})}),`
`,e.jsxs(n.h4,{id:"poptotop---go-back-to-the-first-screen",children:[e.jsx(n.code,{children:"popToTop"})," - Go back to the first screen"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Navigate to the first screen in the stack
navigator.popToTop();
`})}),`
`,e.jsxs(n.h4,{id:"replace---replace-the-current-screen",children:[e.jsx(n.code,{children:"replace"})," - Replace the current screen"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Replace the current screen with a new one
navigator.replace({
  screen: NewScreen,
  options: {
    headerTitle: 'New Screen',
  },
});
`})}),`
`,e.jsxs(n.h4,{id:"reset---reset-the-navigation-stack",children:[e.jsx(n.code,{children:"reset"})," - Reset the navigation stack"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Reset entire navigation state and set a new root screen
navigator.reset({
  screen: HomeScreen,
  options: {
    headerTitle: 'Home',
  },
});
`})}),`
`,e.jsx(n.h3,{id:"modal-navigation",children:"Modal Navigation"}),`
`,e.jsxs(n.h4,{id:"present---present-a-screen-as-a-modal-ios-style-bottom-sheet",children:[e.jsx(n.code,{children:"present"})," - Present a screen as a modal (iOS-style bottom sheet)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Present a screen from the bottom (iOS style)
navigator.present({
  screen: ModalScreen,
  options: {
    headerTitle: 'Modal Screen',
  },
});
`})}),`
`,e.jsxs(n.h4,{id:"showmodal---show-a-modal-dialog",children:[e.jsx(n.code,{children:"showModal"})," - Show a modal dialog"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Show a custom modal
navigator.showModal({
  screen: props => <CustomModal {...props} />,
  onDismiss: () => console.log('Modal dismissed'),
  barrierDismissible: true, // Allow tapping outside to dismiss
});
`})}),`
`,e.jsxs(n.h4,{id:"showbottomsheet---show-a-bottom-sheet",children:[e.jsx(n.code,{children:"showBottomSheet"})," - Show a bottom sheet"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Show a bottom sheet
navigator.showBottomSheet({
  screen: props => <BottomSheetContent {...props} />,
  options: {
    title: 'Bottom Sheet Title',
  },
  draggable: true,
  useBottomInset: true,
});
`})}),`
`,e.jsx(n.h3,{id:"tab-navigation",children:"Tab Navigation"}),`
`,e.jsxs(n.h4,{id:"navigate---navigate-to-a-tab-for-bottom-tab-navigation",children:[e.jsx(n.code,{children:"navigate"})," - Navigate to a tab (for bottom tab navigation)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Navigate to a specific tab by name
navigator.navigate('ProfileTab');

#### \`setDismissData\` - Set data to pass when dismissing the app

\`\`\`tsx
// Set data to be returned when the app is dismissed
navigator.setDismissData({
  result: 'success',
  data: {
    selectedItem: item,
    timestamp: Date.now()
  }
});
`})}),`
`,e.jsxs(n.h4,{id:"setcurrentcontext---set-app-context-data",children:[e.jsx(n.code,{children:"setCurrentContext"})," - Set app context data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Set context information for the current app
navigator.setCurrentContext({
  code: 'payment_flow',
  name: {
    vi: 'Thanh toán',
    en: 'Payment'
  },
  description: {
    vi: 'Luồng thanh toán',
    en: 'Payment flow'
  },
  icon: 'payment_icon'
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-related-components",children:"🔗 Related Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/guides-navigation--docs",children:"Navigation"})," - Main navigation guide"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/guides-headerleft--docs",children:"HeaderLeft"})," - Back button component that uses the navigator for back navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/guides-screen--docs",children:"Screen"})," - Screen component that integrates with navigation"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-implementation-notes",children:"📝 Implementation Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Navigator instance is automatically created and provided through the ApplicationContext"}),`
`,e.jsx(n.li,{children:"Navigation actions are queued until the navigation container is ready"}),`
`,e.jsx(n.li,{children:"The Navigator provides a consistent API that works with React Navigation under the hood"}),`
`,e.jsx(n.li,{children:"For platform integration (like dismissing the app), use the maxApi object which is automatically injected into the navigator"}),`
`]})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{m as default};
