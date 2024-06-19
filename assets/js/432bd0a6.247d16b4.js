"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[60777],{31405:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>d});var a=e(13024);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=a.createContext({}),p=function(n){var t=a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=p(n.components);return a.createElement(l.Provider,{value:t},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=p(e),g=o,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return e?a.createElement(d,i(i({ref:t},c),{},{components:e})):a.createElement(d,i({ref:t},c))}));function d(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s[u]="string"==typeof n?n:o,i[1]=s;for(var p=2;p<r;p++)i[p]=e[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},87311:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=e(87462),o=e(63366),r=(e(13024),e(31405)),i=["components"],s={id:"navigation",title:"Navigation",hide_table_of_contents:!0},l="NavigationContainer",p={unversionedId:"docs/navigation",id:"version-0.92.1/docs/navigation",title:"Navigation",description:"It serves as the root component that contains the navigation state and wraps all navigators (like stack, tab, modal, bottom sheet) you might use in your app:",source:"@site/versioned_docs/version-0.92.1/docs/navigation.mdx",sourceDirName:"docs",slug:"/docs/navigation",permalink:"/docs/docs/navigation",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.92.1/docs/navigation.mdx",tags:[],version:"0.92.1",frontMatter:{id:"navigation",title:"Navigation",hide_table_of_contents:!0},sidebar:"version-0.92.1/docs",previous:{title:"Theme",permalink:"/docs/docs/theme"},next:{title:"IconSources",permalink:"/docs/docs/iconSource"}},c={},u=[{value:"Properties",id:"properties",level:2}],m={toc:u},g="wrapper";function d(n){var t=n.components,e=(0,o.Z)(n,i);return(0,r.kt)(g,(0,a.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigationcontainer"},"NavigationContainer"),(0,r.kt)("p",null,"It serves as the root component that contains the navigation state and wraps all navigators (like stack, tab, modal, bottom sheet) you might use in your app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"localization"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"theme"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultTheme")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"screen"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Screen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackingInfo"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"TrackingInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxApi"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import MaxApi from '@momo-platform/api';\nimport {\n  ApplicationContext,\n  defaultTheme,\n  NavigationContainer,\n  NavigationScreenProps\n} from '@momo-kits/foundation';\nimport language from './localization/language.json';\n\nconst App = (props: any) => {\n  return (\n    <NavigationContainer\n          localization={language}\n          theme={defaultTheme}\n          screen={Screen} //Add screen component\n          trackingInfo={{\n            code: props.code,\n            appId: props.appId,\n            buildNumber: props.buildNumber,\n            flowPartnerId: 'viettel',\n          }}\n          maxApi={MaxApi}\n        />\n  );\n};\n\nconst Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n    const {translate, navigator} = useContext(ApplicationContext);\n    return <Text typography={'title_s'}>{translate?.('language_key')}</Text>;\n}\n")),(0,r.kt)("h1",{id:"navigator"},"Navigator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigator")," designed for use in Mini App. It acts as an interface for navigating between screens and managing modal or bottom sheet presentations. Key features include::"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"push"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('push_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.push({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"present"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('present_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.present({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"replace"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('replace_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.replace({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reset"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('reset_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.reset({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pop"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('pop_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.pop(2);\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showModal"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('showmodal')}\n      onPress={() => {\n        //ModalParams type\n        navigator?.showModal({\n          screen: Modal,\n          onDismiss: () => {\n             Alert.alert('onDismiss');\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showBottomSheet"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('show_bottomsheet')}\n      onPress={() => {\n        //ModalParams type\n        navigator?.showBottomSheet({\n          screen: BottomSheet,\n          onDismiss: () => {\n             Alert.alert('onDismiss');\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,r.kt)("h1",{id:"navigationoptions"},"NavigationOptions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavigationOptions")," is a type used to configure the navigation behavior and appearance in your application. Below are the properties:"),(0,r.kt)("p",null,"Our options are extended from StackNavigationOptions of React Navigation version 5.x ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/5.x/stack-navigator"},"https://reactnavigation.org/docs/5.x/stack-navigator")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"preventBack"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PopupNotifyProps"),"\nOptional. A popup show prevents going back, user will be back if choose primary action.")),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/document/prevent_back.gif"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const popup: PopupNotifyProps = {\n    buttonDirection: 'row',\n    primary: {\n        title: 'V\u1ec1 Trang Tr\u01b0\u1edbc',\n        onPress: () => {},\n    },\n    secondary: {\n        title: '\u1ede l\u1ea1i',\n        onPress: () => {},\n    },\n    description:\n        'Cell team t\xf9y \xfd custom n\u1ed9i dung text \u1edf title, description v\xe0 2 n\xfat CTA. Kh\xf4ng custom b\u1ea5t k\xec style n\xe0o trong popup',\n    title: 'Title',\n};\nnavigation.setOptions({preventBack: popup});\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPressLeftHeader"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"() => void"),"\nOptional. Function to be called when the left header is pressed.")),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/document/on_press_left_header.gif"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    onPressLeftHeader: () => {\n        alert('Back Event');\n    },\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"surface"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),"\nOptional. Determines whether the surface styling is applied.")),(0,r.kt)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/surface.png"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    surface: true,\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hiddenBack"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),"\nOptional. Hides the back button if set to true.")),(0,r.kt)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/hidden_back.png"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    hiddenBack: true,\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"customTitle"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"TitleCustomProps"),"\nOptional. Custom properties for the title.")),(0,r.kt)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/custom_title.png"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    customTitle: {\n        title: 'Nguy\u1ec5n V\u0103n A',\n        subTitle: 'developer',\n        dotColor: 'blue',\n        image: 'https://images.unsplash.com/',\n    },\n});\n")))}d.isMDXComponent=!0}}]);