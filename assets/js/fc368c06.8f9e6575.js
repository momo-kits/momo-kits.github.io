"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[92676],{77264:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var r=n(74892);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,c=s["".concat(p,".").concat(u)]||s[u]||g[u]||o;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=n(58168),a=n(98587),o=(n(74892),n(77264)),l=["components"],i={id:"autocomplete",title:"AutoComplete"},p=void 0,m={unversionedId:"components/autocomplete",id:"version-0.89.1-rc.5/components/autocomplete",title:"AutoComplete",description:"Props",source:"@site/versioned_docs/version-0.89.1-rc.5/components/AutoComplete.mdx",sourceDirName:"components",slug:"/components/autocomplete",permalink:"/docs/0.89.1-rc.5/components/autocomplete",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1-rc.5/components/AutoComplete.mdx",tags:[],version:"0.89.1-rc.5",frontMatter:{id:"autocomplete",title:"AutoComplete"},sidebar:"version-0.89.1-rc.5",previous:{title:"Swipe",permalink:"/docs/0.89.1-rc.5/components/swipe"},next:{title:"Avatar",permalink:"/docs/0.89.1-rc.5/components/avatar"}},d={},s=[{value:"Props",id:"props",level:2}],g={toc:s},u="wrapper";function c(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"data")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"(string")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"SuggestItem)[]")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"[]")),(0,o.yg)("td",{parentName:"tr",align:null},"An array of strings or ",(0,o.yg)("inlineCode",{parentName:"td"},"SuggestItem")," objects that will be used to create theautocomplete dropdown list.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"maxItemShow")),(0,o.yg)("td",{parentName:"tr",align:null},"number"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"5")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. The maximum number of items to display in the dropdown list. If notprovided, all matching items will be shown.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPressItem")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"((item: string, value: string")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"null) => void)")),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"A function that is called when a user selects an item from the autocomplete list.It receives two arguments: the display text of the selected item and its corresponding value.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"query")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"The current text in the autocomplete input field. This is used to determinewhich suggestions to display.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"renderItem")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"((data: string) => ReactElement<any, string")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>)")),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. A function to render the UI of each item in the dropdown list.This is useful for adding custom styling or formatting to the displayed items.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"searchKey")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"value")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title")),(0,o.yg)("td",{parentName:"tr",align:null},"Indicates whether the 'title' or 'value' of a ",(0,o.yg)("inlineCode",{parentName:"td"},"SuggestItem")," should be used forsearching. This affects which items are filtered into the dropdown list as theuser types in the input field."))))))}c.isMDXComponent=!0}}]);