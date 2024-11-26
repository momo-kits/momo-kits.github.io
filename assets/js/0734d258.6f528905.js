"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[57772],{77264:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(74892);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,y=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},40970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(58168),a=n(98587),o=(n(74892),n(77264)),l=["components"],i={id:"trustbanner",title:"TrustBanner"},p=void 0,s={unversionedId:"components/trustbanner",id:"components/trustbanner",title:"TrustBanner",description:"Props",source:"@site/docs/components/TrustBanner.mdx",sourceDirName:"components",slug:"/components/trustbanner",permalink:"/docs/next/components/trustbanner",draft:!1,editUrl:"https://github.com/docs/components/TrustBanner.mdx",tags:[],version:"current",frontMatter:{id:"trustbanner",title:"TrustBanner"},sidebar:"docs",previous:{title:"Logo",permalink:"/docs/next/components/logo"}},c={},m=[{value:"Props",id:"props",level:2}],u={toc:m},g="wrapper";function y(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPress")),(0,o.yg)("td",{parentName:"tr",align:null},"((params: TrustBannerCallbackParams) => void)"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. A callback function can be openWeb or startFeatureCode,return params: service_name, screen_name, component_name, url_config, feature_code,")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"screenName")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. The name of the screen where the banner is displayed. This can beused to identify the context in which the banner appears.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"serviceName")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. The name of the service or feature the banner is associated with.This helps in providing contextual information within the banner content.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"style")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,o.yg)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Styles to customize the appearance of the banner. Can be a singlestyle object or an array of style objects.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"trackEvent")),(0,o.yg)("td",{parentName:"tr",align:null},"((eventName: string, params: TrustBannerCallbackParams) => void)"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. instance of maxApi trackEvent function."))))))}y.isMDXComponent=!0}}]);