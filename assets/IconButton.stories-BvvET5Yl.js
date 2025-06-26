import{fn as Q}from"./index-BgJgh-x_.js";import{A as U,j as V,M as X,I as Y,o as p,C as d}from"./styles-D3fpLuwk.js";import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./index-DI7CEG0L.js";import{s as $}from"./index-BzmpT3sc.js";const rr=({type:e="primary",icon:W,size:u,params:F,...N})=>{const{theme:r}=Z.useContext(U),R=()=>u==="small"?p.small:p.large,q=()=>{switch(e){case"disabled":return{backgroundColor:r.colors.background.disable};case"primary":return{backgroundColor:r.colors.primary};case"secondary":return{backgroundColor:r.colors.background.surface,borderWidth:1,borderColor:r.colors.border.default};case"outline":return{backgroundColor:r.colors.background.surface,borderWidth:1,borderColor:r.colors.primary};case"tonal":return{backgroundColor:r.colors.background.tonal};case"danger":return{backgroundColor:r.colors.error.primary};default:return{backgroundColor:r.colors.primary}}},G=()=>{switch(e){case"disabled":return r.colors.text.disable;case"primary":return d.black_01;case"danger":return d.black_01;case"tonal":return r.colors.primary;case"secondary":return r.colors.text.default;case"outline":return r.colors.primary;default:return d.black_01}},H=e==="disabled"?.75:.5,J=$.flatten([q(),R()]),K=u==="small"?16:24;return m.jsx(V.Provider,{value:{componentName:"IconButton",params:F,state:e==="disabled"?"disabled":"enabled",action:"click"},children:m.jsx(X,{...N,disabled:e==="disabled",activeOpacity:H,style:J,children:m.jsx(Y,{size:K,source:W,color:G()})})})},tr={title:"Foundation/IconButton",component:rr,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:Q()}},o={args:{icon:"home",type:"primary"}},a={args:{icon:"home",type:"secondary"}},s={args:{icon:"home",type:"tonal"}},n={args:{icon:"home",type:"outline"}},t={args:{icon:"home",type:"danger"}},c={args:{icon:"home",type:"disabled"}},l={args:{icon:"home",size:"small"}},i={args:{icon:"home",size:"large"}};var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'primary'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'secondary'
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,k,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'tonal'
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var j,z,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'outline'
  }
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var O,_,D;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'danger'
  }
}`,...(D=(_=t.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,T,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'disabled'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var B,E,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'small'
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,L,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'large'
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const cr=["Primary","Secondary","Tonal","Outline","Danger","Disabled","Small","Large"];export{t as Danger,c as Disabled,i as Large,n as Outline,o as Primary,a as Secondary,l as Small,s as Tonal,cr as __namedExportsOrder,tr as default};
