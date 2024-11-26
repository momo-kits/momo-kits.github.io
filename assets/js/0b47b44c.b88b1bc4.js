"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[27067],{77264:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(74892);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(p,".").concat(m)]||s[m]||y[m]||o;return n?r.createElement(c,i(i({ref:t},g),{},{components:n})):r.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(58168),a=n(98587),o=(n(74892),n(77264)),i=["components"],l={id:"badgeribbon",title:"BadgeRibbon"},p=void 0,d={unversionedId:"components/badgeribbon",id:"version-0.103.1/components/badgeribbon",title:"BadgeRibbon",description:"Props",source:"@site/versioned_docs/version-0.103.1/components/BadgeRibbon.mdx",sourceDirName:"components",slug:"/components/badgeribbon",permalink:"/docs/0.103.1/components/badgeribbon",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.1/components/BadgeRibbon.mdx",tags:[],version:"0.103.1",frontMatter:{id:"badgeribbon",title:"BadgeRibbon"},sidebar:"version-0.103.1",previous:{title:"Badge",permalink:"/docs/0.103.1/components/badge"},next:{title:"BadgeDot",permalink:"/docs/0.103.1/components/badgedot"}},g={},s=[{value:"Props",id:"props",level:2}],y={toc:s},m="wrapper";function c(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.yg)(m,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"isRound")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If true, the edges of the ribbon badge will be rounded. This is purely a stylistic choice.Defaults to ",(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided, resulting in a flat-edged ribbon.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"label")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Label")),(0,o.yg)("td",{parentName:"tr",align:null},"The text to display on the ribbon-style badge. Unlike other badges, ribbons typically carry more descriptive text.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"position")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"top_right")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"top_left")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"bottom_right")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"bottom_left")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"top_right")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Determines the placement of the ribbon on its parent container. The position can be any corner of the container.Defaults to 'top_right' if not specified.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"style")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"{}")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the ribbon badge component. Can be a single style or an array of styles."))))))}c.isMDXComponent=!0}}]);