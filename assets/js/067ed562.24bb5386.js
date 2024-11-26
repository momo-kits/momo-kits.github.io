"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[70752],{77264:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(74892);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(u,i(i({ref:t},g),{},{components:n})):a.createElement(u,i({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(58168),r=n(98587),l=(n(74892),n(77264)),i=["components"],o={id:"uploader",title:"Uploader"},p=void 0,d={unversionedId:"components/uploader",id:"version-0.103.1/components/uploader",title:"Uploader",description:"Props",source:"@site/versioned_docs/version-0.103.1/components/Uploader.mdx",sourceDirName:"components",slug:"/components/uploader",permalink:"/docs/0.103.1/components/uploader",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.1/components/Uploader.mdx",tags:[],version:"0.103.1",frontMatter:{id:"uploader",title:"Uploader"},sidebar:"version-0.103.1",previous:{title:"Stepper",permalink:"/docs/0.103.1/components/stepper"},next:{title:"Steps",permalink:"/docs/0.103.1/components/steps"}},g={},m=[{value:"Props",id:"props",level:2}],s={toc:m},c="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,i);return(0,l.yg)(c,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", uploading new images is disabled, and any associated upload controls are not interactive.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"height")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"64")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the height of the Uploader component's bounding box,typically in pixels (px). If not provided, the height will adapt based on container or content.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"images")),(0,l.yg)("td",{parentName:"tr",align:null},"UploadImage[]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"[]")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of ",(0,l.yg)("inlineCode",{parentName:"td"},"UploadImage")," objects, each representing an image to be uploaded.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"numberOfImages")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"1")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the maximum number of images that can be uploaded.If not provided, there is no limit by default.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onAdd")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is called when the user initiates the addition of a new image.Typically used to trigger the file selection dialog.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onCancel")),(0,l.yg)("td",{parentName:"tr",align:null},"((image: UploadImage, index: number) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function invoked when the user cancels an ongoing upload.Receives the ",(0,l.yg)("inlineCode",{parentName:"td"},"UploadImage")," object being canceled and its index in the images array as parameters.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressImage")),(0,l.yg)("td",{parentName:"tr",align:null},"((image: UploadImage, index: number) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function invoked when the user clicks or taps on an uploaded image.This can be used to open a preview overlay, for example.Receives the ",(0,l.yg)("inlineCode",{parentName:"td"},"UploadImage")," object being interacted with and its index in the images array as parameters.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"width")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"64")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the width of the Uploader component's bounding box,typically in pixels (px). If not provided, the width will adapt based on container or content."))))))}u.isMDXComponent=!0}}]);