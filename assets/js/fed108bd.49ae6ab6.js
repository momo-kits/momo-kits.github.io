"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[31446],{31405:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var o=n(13024);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),m=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=m(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=m(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||b[u]||r;return n?o.createElement(d,i(i({ref:e},l),{},{components:n})):o.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97345:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var o=n(87462),a=n(63366),r=(n(13024),n(31405)),i=["components"],s={id:"bottomTab",title:"Bottom Tab Navigation",hide_table_of_contents:!0},c="Bottom Tab Navigation",m={unversionedId:"bottomTab",id:"bottomTab",title:"Bottom Tab Navigation",description:"The BottomTab component is a custom bottom tab navigator built using React Navigation. It allows you to create a bottom tab bar with customizable options and nested stack navigators.",source:"@site/docs/bottomTab.mdx",sourceDirName:".",slug:"/bottomTab",permalink:"/docs/next/bottomTab",draft:!1,editUrl:"https://github.com/docs/bottomTab.mdx",tags:[],version:"current",frontMatter:{id:"bottomTab",title:"Bottom Tab Navigation",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"IconSources",permalink:"/docs/next/iconSource"},next:{title:"Shadow",permalink:"/docs/next/shadow"}},l={},p=[{value:"Usage Example",id:"usage-example",level:2}],b={toc:p},u="wrapper";function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(u,(0,o.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bottom-tab-navigation"},"Bottom Tab Navigation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTab")," component is a custom bottom tab navigator built using React Navigation. It allows you to create a bottom tab bar with customizable options and nested stack navigators."),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTab")," component in your application, import and render it with the required props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport BottomTab from './BottomTab';\nimport {BottomTabProps} from './types';\n\nconst tabs: BottomTabProps['tabs'] = [\n  {\n    name: 'Home',\n    label: 'Home',\n    icon: require('./assets/home.png'),\n  },\n  {\n    name: 'Settings',\n    label: 'Settings',\n    icon: require('./assets/settings.png'),\n  },\n];\n\nconst DemoScreen = ({navigation}) => {\n  return (\n    <BottomTab\n      nested={false}\n      tabs={tabs}\n      navigation={navigation}\n      initialRouteName=\"Home\"\n    />\n  );\n};\n\nexport default App;\n")))}d.isMDXComponent=!0}}]);