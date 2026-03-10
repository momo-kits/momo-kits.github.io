import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CPl6p-nG.js";import{A as ae,i as r,M as ce,z as ie,l as le,C as ne,I as k,j as f,T as pe,R as de}from"./index-CcPzXCq5.js";import{s as me,V as w}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const t=me.create({wrapper:{flexDirection:"row"},chip:{justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2},icon:{}}),ue=({label:s="Label",iconLeft:b,iconRight:S,selected:m=!1,style:J,onPress:K,size:Q="large",iconLeftColor:U,iconRightColor:Y,itemContainerStyle:Z,backgroundColor:ee,accessibilityLabel:u,accessibilityState:oe})=>{const{theme:e}=c.useContext(ae),h=r(de.L),x=r(f.S),re=r(32),se=r(24),y=r(16),L=r(f.XS),g=c.useContext(ce),R=c.useContext(ie),z="Chip",a=c.useMemo(()=>u||`${g.appId}/${g.code}/${R.screenName}/${z}/${s}`,[z,u,g,R,s]);let j=e.colors.text.default,D=ee??ne.black_03,I=U,F=Y;m&&(j=e.colors.primary,D=e.colors.background.selected,I=e.colors.primary,F=e.colors.primary);let W="label_default_medium",_=[t.chip,{borderRadius:h,paddingHorizontal:x,height:re}],C=20;Q==="small"&&(_=[t.chip,{borderRadius:h,paddingHorizontal:x,height:se}],C=16,W="label_s_medium");const te=()=>o.jsx(w,{style:[t.chipOverlay,{borderRadius:h},{borderColor:e.colors.secondary}]});return o.jsx(w,{style:[J,t.wrapper],accessibilityLabel:a,children:o.jsxs(le,{onPress:K,style:[Z,_,{backgroundColor:D,maxWidth:"100%",flexShrink:1}],accessibilityLabel:a+"|touch",accessibilityState:{checked:m,...oe},children:[!!b&&o.jsx(k,{source:b,color:I,size:C,style:{width:y,height:y,marginRight:s?f.XS:L}}),s&&o.jsx(pe,{typography:W,color:j,numberOfLines:1,style:{flexShrink:1},accessibilityLabel:a+"|text",children:s}),!!S&&o.jsx(k,{source:S,color:F,size:C,style:[t.icon,{marginLeft:L}],accessibilityLabel:a+"|icon"}),m&&te()]})})},xe={title:"Library/Chip",component:ue,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{label:"Default Chip"}},l={args:{label:"With Icons",iconLeft:"search",iconRight:"close"}},n={args:{label:"Selected Chip",selected:!0}},p={args:{label:"Small Chip",size:"small"}},d={args:{label:"Custom Colors",iconLeft:"star",iconRight:"star",iconLeftColor:"#FFD700",iconRightColor:"#FFD700"}};var O,H,M;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(M=(H=i.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var $,v,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    iconLeft: 'search',
    iconRight: 'close'
  }
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var E,T,N;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Selected Chip',
    selected: true
  }
}`,...(N=(T=n.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var V,X,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'small'
  }
}`,...(P=(X=p.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var q,B,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    iconLeft: 'star',
    iconRight: 'star',
    iconLeftColor: '#FFD700',
    iconRightColor: '#FFD700'
  }
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const ye=["Default","WithIcons","Selected","Small","WithCustomColors"];export{i as Default,n as Selected,p as Small,d as WithCustomColors,l as WithIcons,ye as __namedExportsOrder,xe as default};
