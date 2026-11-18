import{fn as de}from"./index-AyJqhRyE.js";import{A as ue,M as pe,y as ge,z as r,E as be,F as he,I as ye,C as h}from"./index-D9H9ZqTU.js";import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-CPl6p-nG.js";const Se=({type:o="primary",icon:$,size:g,shape:ee="circle",params:re,...oe})=>{var S;const{theme:e}=C.useContext(ue),b=C.useContext(pe),ae=((S=b==null?void 0:b.features)==null?void 0:S.showBaseLineDebug)??!1,se=()=>{switch(g){case"small":return r.small;case"medium":return r.medium;default:return r.large}},ne=()=>ee==="square"?r.square:r.circle,ce=()=>{switch(o){case"disabled":return{backgroundColor:e.colors.background.disable};case"primary":return{backgroundColor:e.colors.primary};case"secondary":return{backgroundColor:e.colors.background.surface,borderWidth:1,borderColor:e.colors.border.default};case"outline":return{backgroundColor:e.colors.background.surface,borderWidth:1,borderColor:e.colors.primary};case"tonal":return{backgroundColor:e.colors.background.tonal};case"danger":return{backgroundColor:e.colors.error.primary};default:return{backgroundColor:e.colors.primary}}},te=()=>{switch(o){case"disabled":return e.colors.text.disable;case"primary":return h.black_01;case"danger":return h.black_01;case"tonal":return e.colors.primary;case"secondary":return e.colors.text.default;case"outline":return e.colors.primary;default:return h.black_01}},ie=o==="disabled"?.75:.5,me=ge.flatten([ce(),r.base,se(),ne()]),le=g==="small"||g==="medium"?16:24;return y.jsx(be.Provider,{value:{componentName:"IconButton",params:re,state:o==="disabled"?"disabled":"enabled",action:"click"},children:y.jsx(he,{...oe,disabled:o==="disabled",activeOpacity:ie,style:[me,ae&&r.debugBaseLine],children:y.jsx(ye,{size:le,source:$,color:te()})})})},ze={title:"Foundation/IconButton",component:Se,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:de()}},a={args:{icon:"home",type:"primary"}},s={args:{icon:"home",type:"secondary"}},n={args:{icon:"home",type:"tonal"}},c={args:{icon:"home",type:"outline"}},t={args:{icon:"home",type:"danger"}},i={args:{icon:"home",type:"disabled"}},m={args:{icon:"home",size:"small"}},l={args:{icon:"home",size:"medium"}},d={args:{icon:"home",size:"large"}},u={args:{icon:"home",shape:"circle"}},p={args:{icon:"home",shape:"square"}};var f,k,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'primary'
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var z,q,B;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'secondary'
  }
}`,...(B=(q=s.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var D,I,j;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'tonal'
  }
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,L,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'outline'
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,_,E;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'danger'
  }
}`,...(E=(_=t.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var P,T,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    type: 'disabled'
  }
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var A,F,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'small'
  }
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var N,R,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'medium'
  }
}`,...(G=(R=l.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'large'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    shape: 'circle'
  }
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    shape: 'square'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const qe=["Primary","Secondary","Tonal","Outline","Danger","Disabled","Small","Medium","Large","Circle","Square"];export{u as Circle,t as Danger,i as Disabled,d as Large,l as Medium,c as Outline,a as Primary,s as Secondary,m as Small,p as Square,n as Tonal,qe as __namedExportsOrder,ze as default};
