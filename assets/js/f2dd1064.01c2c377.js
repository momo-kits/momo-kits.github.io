"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[52678],{77611:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(49397);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(58168),a=n(98587),o=(n(49397),n(77611)),i=["components"],l={id:"stepperbutton",title:"StepperButton"},p=void 0,d={unversionedId:"components/stepperbutton",id:"version-0.81.32/components/stepperbutton",title:"StepperButton",description:"Props",source:"@site/versioned_docs/version-0.81.32/components/StepperButton.mdx",sourceDirName:"components",slug:"/components/stepperbutton",permalink:"/docs/0.81.32/components/stepperbutton",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.32/components/StepperButton.mdx",tags:[],version:"0.81.32",frontMatter:{id:"stepperbutton",title:"StepperButton"}},s={},u=[{value:"Props",id:"props",level:2}],m={toc:u},c="wrapper";function g(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"disabled")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.yg)("inlineCode",{parentName:"td"},"true"),", the button is disabled and not interactive.Defaults to ",(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPress")),(0,o.yg)("td",{parentName:"tr",align:null},"Function"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"A callback function that is triggered when the button is pressed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"sign")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"+")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"-")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"+")),(0,o.yg)("td",{parentName:"tr",align:null},"Determines the button's function in the stepper, either increment ('+') or decrement ('-').")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"size")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"large")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"large")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the button. If not provided, a default size is used."))))))}g.isMDXComponent=!0}}]);