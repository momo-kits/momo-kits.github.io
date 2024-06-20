"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[857],{77264:(t,e,o)=>{o.d(e,{xA:()=>c,yg:()=>g});var n=o(74892);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=p(o),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return o?n.createElement(g,r(r({ref:e},c),{},{components:o})):n.createElement(g,r({ref:e},c))}));function g(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=o.length,r=new Array(l);r[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[u]="string"==typeof t?t:i,r[1]=a;for(var p=2;p<l;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},95629:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=o(58168),i=o(98587),l=(o(74892),o(77264)),r=["components"],a={id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},s=void 0,p={unversionedId:"toolkit",id:"toolkit",title:"Toolkit",description:"Template component of top navigation, you can view BA document for this component before implement DOCUMENT",source:"@site/docs/toolkit.mdx",sourceDirName:".",slug:"/toolkit",permalink:"/docs/next/toolkit",draft:!1,editUrl:"https://github.com/docs/toolkit.mdx",tags:[],version:"current",frontMatter:{id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Shadow",permalink:"/docs/next/shadow"},next:{title:"Button",permalink:"/docs/next/components/button"}},c={},u=[{value:"Config web admin",id:"config-web-admin",level:2},{value:"Turn on toolkit",id:"turn-on-toolkit",level:3},{value:"Setup tools",id:"setup-tools",level:3},{value:"Setup pinned tool",id:"setup-pinned-tool",level:3},{value:"Setup run time tool",id:"setup-run-time-tool",level:2}],m={toc:u},d="wrapper";function g(t){var e=t.components,o=(0,i.A)(t,r);return(0,l.yg)(d,(0,n.A)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Template component of top navigation, you can view BA document for this component before implement ",(0,l.yg)("a",{href:"https://docs.google.com/document/d/18_FBVUA9z_F9KbLbb_o4rkXM1Q8CYqWnZPaWekicWLc/edit#heading=h.6hvhcs66qs4u"},"DOCUMENT")),(0,l.yg)("h2",{id:"config-web-admin"},"Config web admin"),(0,l.yg)("h3",{id:"turn-on-toolkit"},"Turn on toolkit"),(0,l.yg)("p",null,"To turn on toolkit in your mini app, add config"),(0,l.yg)("p",null,' "toolkitConfig": {\n"hidden": false\n}'),(0,l.yg)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_1.png"}),(0,l.yg)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_2.png"}),(0,l.yg)("h3",{id:"setup-tools"},"Setup tools"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Default tools include addFavorite, addToDevice and share will always display in bottom sheet"),(0,l.yg)("li",{parentName:"ul"},"Template tools include onSupport, onIntroduction and onSetting, but onSetting is only used for merchant's mini app, to turn on these actions, pass their keys and data into tools config"),(0,l.yg)("li",{parentName:"ul"},"Custom tools are your free custom tool that you  can pass into tool config icon, title, ...")),(0,l.yg)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_3.2x.png"}),(0,l.yg)("h3",{id:"setup-pinned-tool"},"Setup pinned tool"),(0,l.yg)("p",null,"Pinned tool is the action button of toolkit (3)"),(0,l.yg)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/pinned_tool.png"}),(0,l.yg)("p",null,"Set config key, icon, badgeValue, badgeType (number, dot) of pinned tool on admin config"),(0,l.yg)("img",{src:"https://static.momocdn.net/app/img/kits/doc/toolkit/toolkit_config_step_4.png"}),(0,l.yg)("p",null,"or using navigation.setOptions"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"navigation?.setOptions({\n    toolkitParams: {\n       pinnedTool: {\n         key: pin,\n         badgeValue,\n         badgeType,\n      },\n   },\n});\n")),(0,l.yg)("h2",{id:"setup-run-time-tool"},"Setup run time tool"),(0,l.yg)("p",null,"Run time tools are tools that show inside bottom sheet but it will be config in your code and show on screen that you config"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"navigation.setOptions({\n      toolkitParams: {\n        runtimeTools: [\n          {\n            key: 'runtime test',\n            title: {\n              vi: 'toolkit screen tool',\n              en: 'toolkit screen tool',\n            },\n            icon: IconSources.file.uri,\n          },\n        ],\n      },\n    });\n")),(0,l.yg)("h1",{id:"setup-callback-of-custom-items"},"Setup callback of custom items"),(0,l.yg)("p",null,"To setup action of for your all custom, runtime tools, set toolkit callback and use item key return to manage your action for each item"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"navigator?.setToolkitCallback?.(item => {\n  Alert.alert('Toolkit alert', JSON.stringify(item));\n  console.log(item);\n});\n")),(0,l.yg)("h1",{id:"prevent-close-of-toolkit-close-icon"},"Prevent close of toolkit close icon"),(0,l.yg)("p",null,"To prevent the icon close of toolkit to close your mini app you can pass into options preventClose props which is extended from PopupNotifyProps. This option will show the popup and you can do something to prevent close."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"const popup: PopupNotifyProps = {\n    buttonDirection: 'row',\n    primary: {\n        title: 'Close miniapp',\n        onPress: () => {},\n    },\n    secondary: {\n        title: 'Stay',\n        onPress: () => {},\n    },\n    description:\n        'Anything you want, but you cannot custom style of popup',\n    title: 'Title',\n};\nnavigation.setOptions({preventClose: popup});\n")))}g.isMDXComponent=!0}}]);