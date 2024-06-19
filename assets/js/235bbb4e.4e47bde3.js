"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[4609],{31405:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>d});var n=o(13024);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),m=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},l="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=m(o),u=r,d=l["".concat(c,".").concat(u)]||l[u]||b[u]||a;return o?n.createElement(d,i(i({ref:e},p),{},{components:o})):n.createElement(d,i({ref:e},p))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:r,i[1]=s;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},82325:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var n=o(87462),r=o(63366),a=(o(13024),o(31405)),i=["components"],s={id:"bottomTab",title:"Bottom Tab Navigation",hide_table_of_contents:!0},c="Bottom Tab Navigation",m={unversionedId:"docs/bottomTab",id:"version-0.81.43/docs/bottomTab",title:"Bottom Tab Navigation",description:"The BottomTab component is a custom bottom tab navigator built using React Navigation. It allows you to create a bottom tab bar with customizable options and nested stack navigators.",source:"@site/versioned_docs/version-0.81.43/docs/bottomTab.mdx",sourceDirName:"docs",slug:"/docs/bottomTab",permalink:"/docs/0.81.43/docs/bottomTab",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.43/docs/bottomTab.mdx",tags:[],version:"0.81.43",frontMatter:{id:"bottomTab",title:"Bottom Tab Navigation",hide_table_of_contents:!0},sidebar:"version-0.81.43/docs",previous:{title:"IconSources",permalink:"/docs/0.81.43/docs/iconSource"},next:{title:"Shadow",permalink:"/docs/0.81.43/docs/shadow"}},p={},l=[{value:"Usage Example",id:"usage-example",level:2}],b={toc:l},u="wrapper";function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,a.kt)(u,(0,n.Z)({},b,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bottom-tab-navigation"},"Bottom Tab Navigation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomTab")," component is a custom bottom tab navigator built using React Navigation. It allows you to create a bottom tab bar with customizable options and nested stack navigators."),(0,a.kt)("h2",{id:"usage-example"},"Usage Example"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomTab")," component in your application, import and render it with the required props."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport BottomTab from './BottomTab';\nimport {BottomTabProps} from './types';\n\nconst tabs: BottomTabProps['tabs'] = [\n  {\n    name: 'Home',\n    label: 'Home',\n    icon: require('./assets/home.png'),\n  },\n  {\n    name: 'Settings',\n    label: 'Settings',\n    icon: require('./assets/settings.png'),\n  },\n];\n\nconst DemoScreen = ({navigation}) => {\n  return (\n    <BottomTab\n      tabs={tabs}\n      navigation={navigation}\n      initialRouteName=\"Home\"\n    />\n  );\n};\n\nexport default App;\n")))}d.isMDXComponent=!0}}]);