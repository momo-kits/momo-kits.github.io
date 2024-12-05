"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[71248],{77611:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(49397);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(58168),o=t(98587),a=(t(49397),t(77611)),i=["components"],s={id:"shadow",title:"Shadow",hide_table_of_contents:!0},l=void 0,c={unversionedId:"shadow",id:"version-0.103.1/shadow",title:"Shadow",description:"Use this template of shadow to easily setup Shadow style with our system style with 3 style: Dark, Light and Pink",source:"@site/versioned_docs/version-0.103.1/shadow.mdx",sourceDirName:".",slug:"/shadow",permalink:"/docs/0.103.1/shadow",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.1/shadow.mdx",tags:[],version:"0.103.1",frontMatter:{id:"shadow",title:"Shadow",hide_table_of_contents:!0},sidebar:"version-0.103.1",previous:{title:"Bottom Tab Navigation",permalink:"/docs/0.103.1/bottomTab"},next:{title:"Toolkit",permalink:"/docs/0.103.1/toolkit"}},d={},u=[{value:"Use with Card",id:"use-with-card",level:2},{value:"Use manually",id:"use-manually",level:2},{value:"Demo code",id:"demo-code",level:3},{value:"Apply into your screen",id:"apply-into-your-screen",level:3}],p={toc:u},m="wrapper";function h(e){var n=e.components,t=(0,o.A)(e,i);return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Use this template of shadow to easily setup Shadow style with our system style with 3 style: Dark, Light and Pink"),(0,a.yg)("h2",{id:"use-with-card"},"Use with Card"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {Card} from '@momo-kits/foundation'\n\nreturn (\n    <Card useShadow = {true}>\n        <Item>\n            <View/>\n        </Item>\n    </Card>\n)\n")),(0,a.yg)("h2",{id:"use-manually"},"Use manually"),(0,a.yg)("h3",{id:"demo-code"},"Demo code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {Shadow} from '@momo-kits/foundation'\n\nreturn (\n    <>\n        <View style={Shadow.Light}/>\n        <View style={Shadow.Dark}/>\n        <View style={Shadow.Pink}/>\n    </>\n)\n")),(0,a.yg)("h3",{id:"apply-into-your-screen"},"Apply into your screen"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React, {useContext} from 'react';\nimport {\n  ApplicationContext,\n  Item,\n  Screen,\n  Section,\n  Shadow,\n  Spacing,\n  Text,\n} from '@momo-kits/foundation';\nimport {View} from 'react-native';\n\nconst ShadowUsage: React.FC<any> = props => {\n  const {theme} = useContext(ApplicationContext);\n\n  return (\n    <Screen scrollable={true}>\n      <Section>\n        <Item widthSpan={12}>\n          <View\n            style={[\n              {\n                width: '100%',\n                height: 120,\n                backgroundColor: theme.colors.background.surface,\n                borderRadius: Spacing.M,\n                alignItems: 'center',\n                justifyContent: 'center',\n                marginBottom: Spacing.M,\n              },\n            ]}>\n            <View\n              style={[\n                {\n                  width: 48,\n                  height: 48,\n                  borderRadius: 24,\n                  backgroundColor: theme.colors.background.surface,\n                  marginBottom: Spacing.M,\n                },\n                Shadow.Dark,\n              ]}\n            />\n            <Text typography={'label_default_medium'}>Dark</Text>\n          </View>\n          <View\n            style={[\n              {\n                width: '100%',\n                height: 120,\n                backgroundColor: theme.colors.background.surface,\n                borderRadius: Spacing.M,\n                alignItems: 'center',\n                justifyContent: 'center',\n                marginBottom: Spacing.M,\n              },\n            ]}>\n            <View\n              style={[\n                {\n                  width: 48,\n                  height: 48,\n                  borderRadius: 24,\n                  backgroundColor: theme.colors.background.surface,\n                  marginBottom: Spacing.M,\n                },\n                Shadow.Light,\n              ]}\n            />\n            <Text typography={'label_default_medium'}>Light</Text>\n          </View>\n          <View\n            style={[\n              {\n                width: '100%',\n                height: 120,\n                backgroundColor: theme.colors.background.surface,\n                borderRadius: Spacing.M,\n                alignItems: 'center',\n                justifyContent: 'center',\n                marginBottom: Spacing.M,\n              },\n            ]}>\n            <View\n              style={[\n                {\n                  width: 48,\n                  height: 48,\n                  borderRadius: 24,\n                  backgroundColor: theme.colors.background.surface,\n                  marginBottom: Spacing.M,\n                },\n                Shadow.Pink,\n              ]}\n            />\n            <Text typography={'label_default_medium'}>Pink</Text>\n          </View>\n        </Item>\n      </Section>\n    </Screen>\n  );\n};\n\nexport default ShadowUsage;\n\n")))}h.isMDXComponent=!0}}]);