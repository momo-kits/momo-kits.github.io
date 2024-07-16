"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[71858],{77264:(n,e,t)=>{t.d(e,{xA:()=>g,yg:()=>y});var a=t(74892);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),p=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},g=function(n){var e=p(n.components);return a.createElement(l.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,g=s(n,["components","mdxType","originalType","parentName"]),c=p(t),m=r,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(y,i(i({ref:e},g),{},{components:t})):a.createElement(y,i({ref:e},g))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[c]="string"==typeof n?n:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11664:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(58168),r=t(98587),o=(t(74892),t(77264)),i=["components"],s={id:"navigation",title:"Navigation",hide_table_of_contents:!0},l="NavigationContainer",p={unversionedId:"navigation",id:"version-0.89.1-rc.5/navigation",title:"Navigation",description:"It serves as the root component that contains the navigation state and wraps all navigators (like stack, tab, modal, bottom sheet) you might use in your app:",source:"@site/versioned_docs/version-0.89.1-rc.5/navigation.mdx",sourceDirName:".",slug:"/navigation",permalink:"/docs/0.89.1-rc.5/navigation",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1-rc.5/navigation.mdx",tags:[],version:"0.89.1-rc.5",frontMatter:{id:"navigation",title:"Navigation",hide_table_of_contents:!0},sidebar:"version-0.89.1-rc.5",previous:{title:"Theme",permalink:"/docs/0.89.1-rc.5/theme"},next:{title:"IconSources",permalink:"/docs/0.89.1-rc.5/iconSource"}},g={},c=[{value:"Properties",id:"properties",level:2}],u={toc:c},m="wrapper";function y(n){var e=n.components,t=(0,r.A)(n,i);return(0,o.yg)(m,(0,a.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"navigationcontainer"},"NavigationContainer"),(0,o.yg)("p",null,"It serves as the root component that contains the navigation state and wraps all navigators (like stack, tab, modal, bottom sheet) you might use in your app:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"localization"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"language")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"theme"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"defaultTheme")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"screen"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"Screen")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"trackingInfo"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"TrackingInfo")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"maxApi"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import MaxApi from '@momo-platform/api';\nimport {\n  ApplicationContext,\n  defaultTheme,\n  NavigationContainer,\n  NavigationScreenProps\n} from '@momo-kits/foundation';\nimport language from './localization/language.json';\n\nconst App = (props: any) => {\n  return (\n    <NavigationContainer\n          localization={language}\n          theme={defaultTheme}\n          screen={Screen} //Add screen component\n          trackingInfo={{\n            code: props.code,\n            appId: props.appId,\n            buildNumber: props.buildNumber,\n            flowPartnerId: 'viettel',\n          }}\n          maxApi={MaxApi}\n        />\n  );\n};\n\nconst Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n    const {translate, navigator} = useContext(ApplicationContext);\n    return <Text typography={'title_s'}>{translate?.('language_key')}</Text>;\n}\n")),(0,o.yg)("h1",{id:"navigator"},"Navigator"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"navigator")," designed for use in Mini App. It acts as an interface for navigating between screens and managing modal or bottom sheet presentations. Key features include::"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"push"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('push_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.push({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"present"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('present_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.present({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"replace"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('replace_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.replace({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"reset"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('reset_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.reset({\n          screen: () => <View style={{flex: 1}} />,\n          options: {\n            //NavigationOptions type\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"pop"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('pop_screen')}\n      onPress={() => {\n        //ScreenParams type\n        navigator?.pop(2);\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"showModal"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('showmodal')}\n      onPress={() => {\n        //ModalParams type\n        navigator?.showModal({\n          screen: Modal,\n          onDismiss: () => {\n             Alert.alert('onDismiss');\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"showBottomSheet"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const Screen: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {translate, navigator} = useContext(ApplicationContext);\n  return (\n    <Button\n      title={translate?.('show_bottomsheet')}\n      onPress={() => {\n        //ModalParams type\n        navigator?.showBottomSheet({\n          screen: BottomSheet,\n          onDismiss: () => {\n             Alert.alert('onDismiss');\n          },\n          params: {},\n        });\n      }}\n    />\n  );\n};\n")),(0,o.yg)("h1",{id:"navigationoptions"},"NavigationOptions"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"NavigationOptions")," is a type used to configure the navigation behavior and appearance in your application. Below are the properties:"),(0,o.yg)("p",null,"Our options are extended from StackNavigationOptions of React Navigation version 5.x ",(0,o.yg)("a",{parentName:"p",href:"https://reactnavigation.org/docs/5.x/stack-navigator"},"https://reactnavigation.org/docs/5.x/stack-navigator")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"preventBack"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"PopupNotifyProps"),"\nOptional. A popup show prevents going back, user will be back if choose primary action.")),(0,o.yg)("img",{src:"https://static.momocdn.net/app/img/kits/document/prevent_back.gif"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const popup: PopupNotifyProps = {\n    buttonDirection: 'row',\n    primary: {\n        title: 'V\u1ec1 Trang Tr\u01b0\u1edbc',\n        onPress: () => {},\n    },\n    secondary: {\n        title: '\u1ede l\u1ea1i',\n        onPress: () => {},\n    },\n    description:\n        'Cell team t\xf9y \xfd custom n\u1ed9i dung text \u1edf title, description v\xe0 2 n\xfat CTA. Kh\xf4ng custom b\u1ea5t k\xec style n\xe0o trong popup',\n    title: 'Title',\n};\nnavigation.setOptions({preventBack: popup});\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"onPressLeftHeader"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"() => void"),"\nOptional. Function to be called when the left header is pressed.")),(0,o.yg)("img",{src:"https://static.momocdn.net/app/img/kits/document/on_press_left_header.gif"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    onPressLeftHeader: () => {\n        alert('Back Event');\n    },\n});\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"surface"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"boolean"),"\nOptional. Determines whether the surface styling is applied.")),(0,o.yg)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/surface.png"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    surface: true,\n});\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"hiddenBack"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"boolean"),"\nOptional. Hides the back button if set to true.")),(0,o.yg)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/hidden_back.png"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    hiddenBack: true,\n});\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"customTitle"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"TitleCustomProps"),"\nOptional. Custom properties for the title.")),(0,o.yg)("img",{width:250,src:"https://static.momocdn.net/app/img/kits/document/custom_title.png"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"navigation.setOptions({\n    customTitle: {\n        title: 'Nguy\u1ec5n V\u0103n A',\n        subTitle: 'developer',\n        dotColor: 'blue',\n        image: 'https://images.unsplash.com/',\n    },\n});\n")))}y.isMDXComponent=!0}}]);