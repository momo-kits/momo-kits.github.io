"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[51679],{77264:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(74892);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(58168),a=n(98587),o=(n(74892),n(77264)),l=["components"],i={id:"stepperbutton",title:"StepperButton"},p=void 0,d={unversionedId:"docs/components/stepperbutton",id:"version-0.81.43/docs/components/stepperbutton",title:"StepperButton",description:"Props",source:"@site/versioned_docs/version-0.81.43/docs/components/StepperButton.mdx",sourceDirName:"docs/components",slug:"/docs/components/stepperbutton",permalink:"/docs/0.81.43/docs/components/stepperbutton",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.43/docs/components/StepperButton.mdx",tags:[],version:"0.81.43",frontMatter:{id:"stepperbutton",title:"StepperButton"}},s={},c=[{value:"Props",id:"props",level:2}],u={toc:c},g="wrapper";function m(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"disabled")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.yg)("inlineCode",{parentName:"td"},"true"),", the button is disabled and not interactive.Defaults to ",(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPress")),(0,o.yg)("td",{parentName:"tr",align:null},"Function"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"A callback function that is triggered when the button is pressed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"sign")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"+")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"-")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"+")),(0,o.yg)("td",{parentName:"tr",align:null},"Determines the button's function in the stepper, either increment ('+') or decrement ('-').")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"size")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"large")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"large")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the button. If not provided, a default size is used."))))))}m.isMDXComponent=!0}}]);