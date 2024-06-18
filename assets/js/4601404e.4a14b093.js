"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[78081],{77264:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(74892);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,u=c["".concat(p,".").concat(s)]||c[s]||g[s]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(58168),r=n(98587),i=(n(74892),n(77264)),l=["components"],o={id:"datetimepicker",title:"DateTimePicker"},p=void 0,d={unversionedId:"docs/components/datetimepicker",id:"version-0.89.1/docs/components/datetimepicker",title:"DateTimePicker",description:"Props",source:"@site/versioned_docs/version-0.89.1/docs/components/DateTimePicker.mdx",sourceDirName:"docs/components",slug:"/docs/components/datetimepicker",permalink:"/docs/0.89.1/docs/components/datetimepicker",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/DateTimePicker.mdx",tags:[],version:"0.89.1",frontMatter:{id:"datetimepicker",title:"DateTimePicker"},sidebar:"version-0.89.1/docs",previous:{title:"SuggestAction",permalink:"/docs/0.89.1/docs/components/suggestaction"},next:{title:"TabView",permalink:"/docs/0.89.1/docs/components/tabview"}},m={},c=[{value:"Props",id:"props",level:2}],g={toc:c},s="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,l);return(0,i.yg)(s,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"format")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"DD-MM-YYYY")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the format for displaying the date and time.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"maxDate")),(0,i.yg)("td",{parentName:"tr",align:null},"Date"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"new Date(date)")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. The maximum date that can be selected.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"minDate")),(0,i.yg)("td",{parentName:"tr",align:null},"Date"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"new Date(date)")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. The minimum date that can be selected.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"minuteInterval")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"1")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. The interval between minutes in the picker. For example, '15' would show minute options 0, 15, 30, 45, etc.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"onChange")),(0,i.yg)("td",{parentName:"tr",align:null},"((data: Date) => void)"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the date or time value changes.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"selectedValue")),(0,i.yg)("td",{parentName:"tr",align:null},"Date"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"new Date()")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. The initially selected date and time value."))))))}u.isMDXComponent=!0}}]);