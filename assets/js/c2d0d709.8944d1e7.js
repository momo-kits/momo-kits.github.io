"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[28150],{77611:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var o=n(49397);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(u,".").concat(g)]||p[g]||y[g]||l;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(58168),r=n(98587),l=(n(49397),n(77611)),i=["components"],a={id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},u=void 0,s={unversionedId:"overview",id:"version-0.81.32/overview",title:"Overview",description:"To use the new Design System, you need to pay attention to the following requirements:",source:"@site/versioned_docs/version-0.81.32/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/0.81.32/",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.32/index.mdx",tags:[],version:"0.81.32",frontMatter:{id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},sidebar:"version-0.81.32",next:{title:"Change Log",permalink:"/docs/0.81.32/changelog"}},c={},p=[{value:"Installation",id:"installation",level:2}],y={toc:p},g="wrapper";function m(e){var t=e.components,n=(0,r.A)(e,i);return(0,l.yg)(g,(0,o.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",null,"To use the new Design System, you need to pay attention to the following requirements:"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Ensure that your deployment target for the platform is set to 77 and App version should be 4.1.7 or higher."),(0,l.yg)("li",null,"The component uses version 0.77.x of the ",(0,l.yg)("b",null,"@momo-kits/foundation")," package."))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",null,(0,l.yg)("b",null,"Theme & Layout:")),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Revamped the main color across various components."),(0,l.yg)("li",null,"The design system applies a component layout mechanism based on columns.."),(0,l.yg)("li",null,"Dark mode support")),(0,l.yg)("p",null,(0,l.yg)("b",null,"Navigation:")),(0,l.yg)("ul",null,(0,l.yg)("ul",null,(0,l.yg)("li",null,"Back button action on the screen is not allowed to be modified."),(0,l.yg)("li",null,"Back action event after returning to the previous screen."),(0,l.yg)("li",null,"Support for a popup alert to inform the user when navigating back to the previous screen."),(0,l.yg)("li",null,"Header right button rule has been modified, updating and synchronizing the style."),(0,l.yg)("li",null,"Update UI/UX transition screen and bottom sheet."))),(0,l.yg)("p",null,"New package ",(0,l.yg)("b",null,"@momo-kits/foundation & libs")),(0,l.yg)("ul",null,(0,l.yg)("ul",null,(0,l.yg)("li",null,"Automatically calculate the Adoption Rate of component kits for mini apps on the app building system."),(0,l.yg)("li",null,"Alerts and guidance for error correction when violating rules or using the wrong component during development."),(0,l.yg)("li",null,"Support for TypeScript."),(0,l.yg)("li",null,"Reduce app size when migrating completely from @momo-kits/core to @momo-kits/foundation.")))),(0,l.yg)("h2",{id:"installation"},"Installation"),(0,l.yg)("p",null,"Stable version of foundations"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @momo-kits/foundation --lasted\n")))}m.isMDXComponent=!0}}]);