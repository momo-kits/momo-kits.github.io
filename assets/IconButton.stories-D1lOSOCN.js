import{fn as Y}from"./index-AyJqhRyE.js";import{A as Z,M as $,k as rr,l as er,o as m,I as or,C as u}from"./index-CcPzXCq5.js";import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-CPl6p-nG.js";import{s as ar}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const sr=({type:e="primary",icon:R,size:g,params:q,...G})=>{var b;const{theme:r}=y.useContext(Z),d=y.useContext($),H=((b=d==null?void 0:d.features)==null?void 0:b.showBaseLineDebug)??!1,J=()=>g==="small"?m.small:m.large,K=()=>{switch(e){case"disabled":return{backgroundColor:r.colors.background.disable};case"primary":return{backgroundColor:r.colors.primary};case"secondary":return{backgroundColor:r.colors.background.surface,borderWidth:1,borderColor:r.colors.border.default};case"outline":return{backgroundColor:r.colors.background.surface,borderWidth:1,borderColor:r.colors.primary};case"tonal":return{backgroundColor:r.colors.background.tonal};case"danger":return{backgroundColor:r.colors.error.primary};default:return{backgroundColor:r.colors.primary}}},Q=()=>{switch(e){case"disabled":return r.colors.text.disable;case"primary":return u.black_01;case"danger":return u.black_01;case"tonal":return r.colors.primary;case"secondary":return r.colors.text.default;case"outline":return r.colors.primary;default:return u.black_01}},U=e==="disabled"?.75:.5,V=ar.flatten([K(),J()]),X=g==="small"?16:24;return p.jsx(rr.Provider,{value:{componentName:"IconButton",params:q,state:e==="disabled"?"disabled":"enabled",action:"click"},children:p.jsx(er,{...G,disabled:e==="disabled",activeOpacity:U,style:[V,H&&m.debugBaseLine],children:p.jsx(or,{size:X,source:R,color:Q()})})})},mr={title:"Foundation/IconButton",component:sr,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:Y()}},o={args:{icon:"home",type:"primary"}},a={args:{icon:"home",type:"secondary"}},s={args:{icon:"home",type:"tonal"}},n={args:{icon:"home",type:"outline"}},t={args:{icon:"home",type:"danger"}},c={args:{icon:"home",type:"disabled"}},l={args:{icon:"home",size:"small"}},i={args:{icon:"home",size:"large"}};var h,f,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'primary'
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,k,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'secondary'
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var z,B,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'tonal'
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,j,L;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'outline'
  }
}`,...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var O,_,w;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'danger'
  }
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var P,T,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'disabled'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var A,E,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'small'
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var W,F,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'large'
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const ur=["Primary","Secondary","Tonal","Outline","Danger","Disabled","Small","Large"];export{t as Danger,c as Disabled,i as Large,n as Outline,o as Primary,a as Secondary,l as Small,s as Tonal,ur as __namedExportsOrder,mr as default};
