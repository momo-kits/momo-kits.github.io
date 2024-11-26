"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[36113],{77264:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(74892);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(58168),r=n(98587),l=(n(74892),n(77264)),a=["components"],i={id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},s=void 0,p={unversionedId:"toolkit",id:"version-0.109.x/toolkit",title:"Toolkit",description:"Features",source:"@site/versioned_docs/version-0.109.x/toolkit.mdx",sourceDirName:".",slug:"/toolkit",permalink:"/docs/toolkit",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.109.x/toolkit.mdx",tags:[],version:"0.109.x",frontMatter:{id:"toolkit",title:"Toolkit",hide_table_of_contents:!0},sidebar:"version-0.109.x",previous:{title:"Shadow",permalink:"/docs/shadow"},next:{title:"Button",permalink:"/docs/components/button"}},c={},u=[{value:"Features",id:"features",level:2},{value:"Example Usage",id:"example-usage",level:2}],g={toc:u},m="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,a);return(0,l.yg)(m,(0,o.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"features"},"Features"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Shortcut Button"),":")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Displays a customizable shortcut icon (",(0,l.yg)("inlineCode",{parentName:"li"},"pin_star")," or ",(0,l.yg)("inlineCode",{parentName:"li"},"pin_star_checked")," by default)."),(0,l.yg)("li",{parentName:"ul"},'Toggles the "favorite" state using the ',(0,l.yg)("inlineCode",{parentName:"li"},"onPressShortcut")," handler.")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Help Center Button"),":")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Launches the help center using ",(0,l.yg)("inlineCode",{parentName:"li"},"onPressHelpCenter"),".")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Close Button"),":")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Closes the current modal or screen with ",(0,l.yg)("inlineCode",{parentName:"li"},"onClose"),"."),(0,l.yg)("li",{parentName:"ul"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"preventClose")," is provided, shows a confirmation popup before closing.")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Dynamic Tools"),":")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Supports multiple tools that can be grouped."),(0,l.yg)("li",{parentName:"ul"},'Displays a "more" icon (',(0,l.yg)("inlineCode",{parentName:"li"},"navigation_more_icon"),") for accessing additional tools if there are multiple items.")),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Badge Support"),":")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Shows a badge on the shortcut button if any tool has ",(0,l.yg)("inlineCode",{parentName:"li"},"showBadge: true"),".")),(0,l.yg)("h2",{id:"example-usage"},"Example Usage"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\n\nconst ExampleHeaderToolkit = ({navigation}) => {\n  const tools = [\n    {\n      title: 'Group 1',\n      items: [\n        {\n          key: 'tool1',\n          icon: 'icon_tool1',\n          onPress: () => console.log('Tool 1 pressed'),\n        },\n        {\n          key: 'tool2',\n          icon: 'icon_tool2',\n          onPress: () => console.log('Tool 2 pressed'),\n        },\n      ],\n    },\n    {\n      title: 'Group 2',\n      items: [\n        {\n          key: 'tool3',\n          icon: 'icon_tool3',\n          onPress: () => console.log('Tool 3 pressed'),\n          showBadge: true,\n        },\n      ],\n    },\n  ];\n\n  useEffect(() => {\n    navigation?.setOptions({\n      headerRight: {\n        useShortcut: true,\n        tools\n      },\n    });\n  }, []);\n};\n\nexport default ExampleHeaderToolkit;\n")))}y.isMDXComponent=!0}}]);