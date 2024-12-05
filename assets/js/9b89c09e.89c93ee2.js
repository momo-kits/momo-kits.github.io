"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[38920],{77611:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var o=r(49397);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),a=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=a(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return r?o.createElement(d,s(s({ref:t},u),{},{components:r})):o.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var a=2;a<l;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(58168),n=r(98587),l=(r(49397),r(77611)),s=["components"],i={id:"usethumbfollower",title:"useThumbFollower"},c=void 0,a={unversionedId:"components/usethumbfollower",id:"version-0.103.2/components/usethumbfollower",title:"useThumbFollower",description:"This hook creates a component which follows the thumb.",source:"@site/versioned_docs/version-0.103.2/components/useThumbFollower.mdx",sourceDirName:"components",slug:"/components/usethumbfollower",permalink:"/docs/0.103.2/components/usethumbfollower",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.2/components/useThumbFollower.mdx",tags:[],version:"0.103.2",frontMatter:{id:"usethumbfollower",title:"useThumbFollower"}},u={},p=[{value:"Props",id:"props",level:2}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,n.A)(e,s);return(0,l.yg)(f,(0,o.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This hook creates a component which follows the thumb.\nContent renderer is passed to FollowerContainer which re-renders only it's content with setValue method.\nThis allows to re-render only follower, instead of the whole slider with all children (thumb, rail, etc.).\nReturned update function should be called every time follower should be updated."),(0,l.yg)("h2",{id:"props"},"Props"))}d.isMDXComponent=!0}}]);