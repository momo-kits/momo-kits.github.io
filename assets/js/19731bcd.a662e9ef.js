"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[75491],{77611:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var r=n(49397);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=m(n),y=a,u=d["".concat(p,".").concat(y)]||d[y]||c[y]||l;return n?r.createElement(u,i(i({ref:t},g),{},{components:n})):r.createElement(u,i({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},55616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var r=n(58168),a=n(98587),l=(n(49397),n(77611)),i=["components"],o={id:"tabitem",title:"TabItem"},p=void 0,m={unversionedId:"components/tabitem",id:"version-0.102.4/components/tabitem",title:"TabItem",description:"Props",source:"@site/versioned_docs/version-0.102.4/components/TabItem.mdx",sourceDirName:"components",slug:"/components/tabitem",permalink:"/docs/0.102.4/components/tabitem",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.102.4/components/TabItem.mdx",tags:[],version:"0.102.4",frontMatter:{id:"tabitem",title:"TabItem"}},g={},d=[{value:"Props",id:"props",level:2}],c={toc:d},y="wrapper";function u(e){var t=e.components,n=(0,a.A)(e,i);return(0,l.yg)(y,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"active")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Indicates if this tab item is currently active or selected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"direction")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"row")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"column")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the layout direction for the tab's content, either in a row or column format.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressTabItem")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when this tab item is pressed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"selectedColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"tab")),(0,l.yg)("td",{parentName:"tr",align:null},"Tab"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The Tab object containing the details and content of this tab item.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"unselectedColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"width")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the width of the tab item. Useful for customizing layout and appearance."))))))}u.isMDXComponent=!0}}]);