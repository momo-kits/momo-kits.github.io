"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[14949],{31405:(t,o,e)=>{e.d(o,{Zo:()=>p,kt:()=>k});var n=e(13024);function i(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function r(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?r(Object(e),!0).forEach((function(o){i(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function a(t,o){if(null==t)return{};var e,n,i=function(t,o){if(null==t)return{};var e,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],o.indexOf(e)>=0||(i[e]=t[e]);return i}(t,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=n.createContext({}),c=function(t){var o=n.useContext(s),e=o;return t&&(e="function"==typeof t?t(o):l(l({},o),t)),e},p=function(t){var o=c(t.components);return n.createElement(s.Provider,{value:o},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var o=t.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(t,o){var e=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),u=c(e),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return e?n.createElement(k,l(l({ref:o},p),{},{components:e})):n.createElement(k,l({ref:o},p))}));function k(t,o){var e=arguments,i=o&&o.mdxType;if("string"==typeof t||i){var r=e.length,l=new Array(r);l[0]=m;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=t,a[u]="string"==typeof t?t:i,l[1]=a;for(var c=2;c<r;c++)l[c]=e[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},62739:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=e(87462),i=e(63366),r=(e(13024),e(31405)),l=["components"],a={id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},s=void 0,c={unversionedId:"docs/toolkit",id:"version-0.89.1/docs/toolkit",title:"Toolkit",description:"Template component of top navigation, you can view BA document for this component before implement DOCUMENT",source:"@site/versioned_docs/version-0.89.1/docs/toolkit.mdx",sourceDirName:"docs",slug:"/docs/toolkit",permalink:"/docs/0.89.1/docs/toolkit",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/toolkit.mdx",tags:[],version:"0.89.1",frontMatter:{id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},sidebar:"version-0.89.1/docs",previous:{title:"Shadow",permalink:"/docs/0.89.1/docs/shadow"},next:{title:"Button",permalink:"/docs/0.89.1/docs/components/button"}},p={},u=[{value:"Config web admin",id:"config-web-admin",level:2},{value:"Turn on toolkit",id:"turn-on-toolkit",level:3},{value:"Setup tools",id:"setup-tools",level:3},{value:"Setup pinned tool",id:"setup-pinned-tool",level:3},{value:"Setup run time tool",id:"setup-run-time-tool",level:2}],d={toc:u},m="wrapper";function k(t){var o=t.components,e=(0,i.Z)(t,l);return(0,r.kt)(m,(0,n.Z)({},d,e,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Template component of top navigation, you can view BA document for this component before implement ",(0,r.kt)("a",{href:"https://docs.google.com/document/d/18_FBVUA9z_F9KbLbb_o4rkXM1Q8CYqWnZPaWekicWLc/edit#heading=h.6hvhcs66qs4u"},"DOCUMENT")),(0,r.kt)("h2",{id:"config-web-admin"},"Config web admin"),(0,r.kt)("h3",{id:"turn-on-toolkit"},"Turn on toolkit"),(0,r.kt)("p",null,"To turn on toolkit in your mini app, add config"),(0,r.kt)("p",null,' "toolkitConfig": {\n"hidden": false\n}'),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_1.png"}),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_2.png"}),(0,r.kt)("h3",{id:"setup-tools"},"Setup tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default tools include addFavorite, addToDevice and share will always display in bottom sheet"),(0,r.kt)("li",{parentName:"ul"},"Template tools include onSupport, onIntroduction and onSetting, but onSetting is only used for merchant's mini app, to turn on these actions, pass their keys and data into tools config"),(0,r.kt)("li",{parentName:"ul"},"Custom tools are your free custom tool that you  can pass into tool config icon, title, ...")),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_3.2x.png"}),(0,r.kt)("h3",{id:"setup-pinned-tool"},"Setup pinned tool"),(0,r.kt)("p",null,"Pinned tool is the action button of toolkit (3)"),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/pinned_tool.png"}),(0,r.kt)("p",null,"Set config key, icon, badgeValue, badgeType (number, dot) of pinned tool on admin config"),(0,r.kt)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_4.png"}),(0,r.kt)("p",null,"or using navigation.setOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"navigation?.setOptions({\n    toolkitParams: {\n       pinnedTool: {\n         key: pin,\n         badgeValue,\n         badgeType,\n      },\n   },\n});\n")),(0,r.kt)("h2",{id:"setup-run-time-tool"},"Setup run time tool"),(0,r.kt)("p",null,"Run time tools are tools that show inside bottom sheet but it will be config in your code and show on screen that you config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"navigation.setOptions({\n      toolkitParams: {\n        runtimeTools: [\n          {\n            key: 'runtime test',\n            title: {\n              vi: 'toolkit screen tool',\n              en: 'toolkit screen tool',\n            },\n            icon: IconSources.file.uri,\n          },\n        ],\n      },\n    });\n")),(0,r.kt)("h1",{id:"setup-callback-of-custom-items"},"Setup callback of custom items"),(0,r.kt)("p",null,"To setup action of for your all custom, runtime tools, set toolkit callback and use item key return to manage your action for each item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"navigator?.setToolkitCallback?.(item => {\n  Alert.alert('Toolkit alert', JSON.stringify(item));\n  console.log(item);\n});\n")),(0,r.kt)("h1",{id:"prevent-close-of-toolkit-close-icon"},"Prevent close of toolkit close icon"),(0,r.kt)("p",null,"To prevent the icon close of toolkit to close your mini app you can pass into options preventClose props which is extended from PopupNotifyProps. This option will show the popup and you can do something to prevent close."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const popup: PopupNotifyProps = {\n    buttonDirection: 'row',\n    primary: {\n        title: 'Close miniapp',\n        onPress: () => {},\n    },\n    secondary: {\n        title: 'Stay',\n        onPress: () => {},\n    },\n    description:\n        'Anything you want, but you cannot custom style of popup',\n    title: 'Title',\n};\nnavigation.setOptions({preventClose: popup});\n")))}k.isMDXComponent=!0}}]);