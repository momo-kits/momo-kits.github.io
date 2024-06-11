"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[9186],{1037:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(51702);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3824:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(87462),r=n(63366),l=(n(51702),n(1037)),i=["components"],o={id:"swipe",title:"Swipe"},p=void 0,d={unversionedId:"components/swipe",id:"components/swipe",title:"Swipe",description:"Props",source:"@site/docs/components/Swipe.mdx",sourceDirName:"components",slug:"/components/swipe",permalink:"/docs/next/components/swipe",draft:!1,editUrl:"https://github.com/docs/components/Swipe.mdx",tags:[],version:"current",frontMatter:{id:"swipe",title:"Swipe"},sidebar:"docs",previous:{title:"ItemList",permalink:"/docs/next/components/itemlist"},next:{title:"AutoComplete",permalink:"/docs/next/components/autocomplete"}},c={},s=[{value:"Props",id:"props",level:2}],u={toc:s},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftActions")),(0,l.kt)("td",{parentName:"tr",align:null},"SwipeAction[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"SwipeAction")," items representing the actions availableon swiping to the left. Each action is rendered as a button on the swipeable surface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableClose")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface hasreturned to its original position and is closed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableLeftOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isfully opened on the left side.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableLeftWillOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isabout to open on the left side.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isfully opened, either from the left or the right.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableRightOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isfully opened on the right side.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableRightWillOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isabout to open on the right side.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableWillClose")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isabout to close and return to its original position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeableWillOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the swipeable surface isabout to open, either from the left or the right.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightActions")),(0,l.kt)("td",{parentName:"tr",align:null},"SwipeAction[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"SwipeAction")," items representing the actions availableon swiping to the right. Each action is rendered as a button on the swipeable surface."))))))}g.isMDXComponent=!0}}]);