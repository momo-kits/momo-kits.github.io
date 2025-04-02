import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-gG8jtkCA.js";import"./index-DI2gBUGJ.js";import{M as a}from"./DocsRenderer-CFRXHY34-BX-DiTcR.js";import"./index-DI7CEG0L.js";import"./preview-Ct52NfJZ.js";import"./iframe-DcJsKy_w.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Guides/Navigation"}),`
`,n.jsx(e.h1,{id:"navigation-guide",children:"Navigation Guide"}),`
`,n.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,n.jsx(e.p,{children:"The Navigation system in Momo Kits provides a flexible and powerful way to navigate between screens in your application. It is built on top of React Navigation and provides additional features tailored for Momo applications."}),`
`,n.jsx(e.h2,{id:"navigation-container",children:"Navigation Container"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"NavigationContainer"})," is the root component that manages navigation state and links navigation with the app environment."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {MaxApi} from '@momo-platform/api';
import {
  defaultTheme,
  Localize,
  NavigationContainer,
} from '@momo-kits/foundation';

// Basic usage
<NavigationContainer
  screen={HomeScreen}
  theme={defaultTheme}
  maxApi={MaxApi}
  initialParams={{someParam: 'value'}}
  localize={new Localize({vi: {}, en: {}})}
/>;
`})}),`
`,n.jsx(e.h2,{id:"navigation-methods",children:"Navigation Methods"}),`
`,n.jsx(e.p,{children:"The Navigation system provides a set of methods to navigate between screens:"}),`
`,n.jsx(e.h3,{id:"basic-navigation",children:"Basic Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {ApplicationContext} from '@momo-kits/foundation';
import {useContext} from 'react';

const {navigator} = useContext(ApplicationContext);
// Push a new screen to the stack
navigator.push({
  screen: ScreenComponent,
  options: {
    headerTitle: 'Screen Title',
  },
});

// Replace the current screen
navigator.replace({
  screen: NewScreenComponent,
});

// Go back to the previous screen
navigator.pop();

// Go back to the first screen in the stack
navigator.popToTop();
`})}),`
`,n.jsx(e.h3,{id:"modal-navigation",children:"Modal Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {ApplicationContext} from '@momo-kits/foundation';
import {useContext} from 'react';

const {navigator} = useContext(ApplicationContext);
// Show a modal
navigator.showModal({
  screen: ModalComponent,
  onDismiss: () => console.log('Modal dismissed'),
  barrierDismissible: true,
});
`})}),`
`,n.jsx(e.h3,{id:"bottom-modal-navigation",children:"Bottom Modal Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {ApplicationContext} from '@momo-kits/foundation';
import {useContext} from 'react';

const {navigator} = useContext(ApplicationContext);

// Show a bottom sheet
navigator.showBottomSheet({
  screen: BottomSheetComponent,
  options: {
    title: 'Bottom Sheet Title',
  },
  draggable: true,
  useBottomInset: true,
});
`})}),`
`,n.jsx(e.h2,{id:"navigation-options",children:"Navigation Options"}),`
`,n.jsx(e.p,{children:"The Navigation system supports a variety of options to customize the appearance and behavior of screens:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const screenOptions = {
  // Customize header
  headerTitle: 'Screen Title',
  headerTintColor: '#FFFFFF',

  // Prevent back action with confirmation
  preventBack: {
    title: 'Are you sure?',
    message: 'Your changes will be lost.',
    positiveText: 'Yes',
    negativeText: 'No',
  },

  // Hide back button
  hiddenBack: false,

  // Header right items
  headerRight: {
    useShortcut: true,
    tools: [
      {
        title: {vi: 'Tools', en: 'Tools'},
        items: [
          {
            icon: 'icon-name',
            name: {vi: 'Tool Name', en: 'Tool Name'},
            key: 'tool-key',
            onPress: () => console.log('Tool pressed'),
          },
        ],
      },
    ],
  },

  // Custom back handler
  onBackHandler: goBack => {
    // Custom logic
    goBack();
  },
};
`})}),`
`,n.jsx(e.h2,{id:"bottom-tab-navigation",children:"Bottom Tab Navigation"}),`
`,n.jsx(e.p,{children:"Bottom Tab Navigation allows users to switch between different screens with a tab bar at the bottom:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  ApplicationContext,
  BottomTab,
  NavigationScreenProps,
} from '@momo-kits/foundation';
import {useContext} from 'react';

const BottomTabUsage: React.FC<NavigationScreenProps> = ({navigation}) => {
  const {navigator} = useContext(ApplicationContext);

  // Navigate to a specific tab
  //navigator.navigate('TabName');

  // Reset the navigation stack with a new screen
  //navigator.reset({
  //  screen: HomeScreen,
  //});
  return (
    <BottomTab
      tabs={[
        {
          name: 'home',
          label: 'Home',
          icon: 'home-icon',
          screen: HomeScreen,
          options: {headerTitle: 'Home'},
        },
        {
          name: 'profile',
          label: 'Profile',
          icon: 'profile-icon',
          screen: ProfileScreen,
          options: {headerTitle: 'Profile'},
          showDot: true, // Show notification dot
          badgeLabel: '3', // Show badge with count
        },
      ]}
      initialRouteName="home"
      navigation={navigation}
      floatingButton={{
        icon: 'plus-icon',
        label: 'Add',
        onPress: () => console.log('Floating button pressed'),
      }}
    />
  );
};
`})}),`
`,n.jsx(e.h2,{id:"advanced-header-customization",children:"Advanced Header Customization"}),`
`,n.jsx(e.h3,{id:"custom-title-types",children:"Custom Title Types"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// User title
const userTitleOptions = {
  headerTitle: {
    type: 'user',
    data: {
      title: 'User Name',
      subTitle: 'User Status',
      image: 'https://example.com/avatar.png',
      verify: true,
      onPress: () => console.log('User title pressed'),
    },
  },
};

// Location title
const locationTitleOptions = {
  headerTitle: {
    type: 'location',
    data: {
      location: 'Current Location',
      description: 'Address details',
      onPress: () => console.log('Location title pressed'),
    },
  },
};

// Journey title
const journeyTitleOptions = {
  headerTitle: {
    type: 'journey',
    data: {
      start: 'Start Point',
      end: 'End Point',
      description: 'Journey details',
      icon: 'journey-icon',
      onPress: () => console.log('Journey title pressed'),
    },
  },
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use the Navigator object"})," from the ApplicationContext to perform navigation actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Configure proper header options"})," for consistent UI across screens"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Handle back navigation"})," with appropriate confirmation dialogs when needed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use localization"})," for all user-facing text to support multiple languages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Follow Momo design guidelines"})," when customizing navigation components"]}),`
`]})]})}function u(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{u as default};
