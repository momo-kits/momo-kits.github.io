"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[776],{1037:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(51702);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),b=a,u=c["".concat(p,".").concat(b)]||c[b]||m[b]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},13085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(63366),o=(n(51702),n(1037)),i=["components"],l={id:"badgeribbon",title:"BadgeRibbon"},p=void 0,d={unversionedId:"docs/components/badgeribbon",id:"version-0.89.1/docs/components/badgeribbon",title:"BadgeRibbon",description:"Props",source:"@site/versioned_docs/version-0.89.1/docs/components/BadgeRibbon.mdx",sourceDirName:"docs/components",slug:"/docs/components/badgeribbon",permalink:"/docs/docs/components/badgeribbon",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/BadgeRibbon.mdx",tags:[],version:"0.89.1",frontMatter:{id:"badgeribbon",title:"BadgeRibbon"},sidebar:"version-0.89.1/docs",previous:{title:"Badge",permalink:"/docs/docs/components/badge"},next:{title:"BadgeDot",permalink:"/docs/docs/components/badgedot"}},s={},c=[{value:"Props",id:"props",level:2}],m={toc:c},b="wrapper";function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isRound")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. If true, the edges of the ribbon badge will be rounded. This is purely a stylistic choice.Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," if not provided, resulting in a flat-edged ribbon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"label")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Label")),(0,o.kt)("td",{parentName:"tr",align:null},"The text to display on the ribbon-style badge. Unlike other badges, ribbons typically carry more descriptive text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"position")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"top_right")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"top_left")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"bottom_right")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"bottom_left")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"top_right")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Determines the placement of the ribbon on its parent container. The position can be any corner of the container.Defaults to 'top_right' if not specified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"style")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the ribbon badge component. Can be a single style or an array of styles."))))))}u.isMDXComponent=!0}}]);