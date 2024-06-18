"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[95335],{77264:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var o=r(74892);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),a=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,s[1]=c;for(var a=2;a<l;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var o=r(58168),n=r(98587),l=(r(74892),r(77264)),s=["components"],c={id:"usethumbfollower",title:"useThumbFollower"},i=void 0,a={unversionedId:"docs/components/usethumbfollower",id:"version-0.89.1/docs/components/usethumbfollower",title:"useThumbFollower",description:"This hook creates a component which follows the thumb.",source:"@site/versioned_docs/version-0.89.1/docs/components/useThumbFollower.mdx",sourceDirName:"docs/components",slug:"/docs/components/usethumbfollower",permalink:"/docs/0.89.1/docs/components/usethumbfollower",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/useThumbFollower.mdx",tags:[],version:"0.89.1",frontMatter:{id:"usethumbfollower",title:"useThumbFollower"}},u={},p=[{value:"Props",id:"props",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,r=(0,n.A)(e,s);return(0,l.yg)(d,(0,o.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This hook creates a component which follows the thumb.\nContent renderer is passed to FollowerContainer which re-renders only it's content with setValue method.\nThis allows to re-render only follower, instead of the whole slider with all children (thumb, rail, etc.).\nReturned update function should be called every time follower should be updated."),(0,l.yg)("h2",{id:"props"},"Props"))}f.isMDXComponent=!0}}]);