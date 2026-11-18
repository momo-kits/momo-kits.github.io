import{y as pe,A as de,N as r,M as me,K as ue,V as H,F as he,C as S,I as M,r as y,T as ge,s as Ce}from"./index-D9H9ZqTU.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CPl6p-nG.js";const e=pe.create({wrapper:{flexDirection:"row"},chip:{justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2},icon:{},touchable:{maxWidth:"100%",flexShrink:1},label:{flexShrink:1}}),be=({label:t="Label",iconLeft:f,iconRight:x,selected:u=!1,style:Z,onPress:ee,size:oe="large",iconLeftColor:re,iconRightColor:se,itemContainerStyle:te,backgroundColor:ae,accessibilityLabel:h,accessibilityState:ce})=>{const{theme:o}=c.useContext(de),g=r(Ce.L),L=r(y.S),le=r(32),ie=r(24),R=r(16),z=r(y.XS),C=c.useContext(me),_=c.useContext(ue),w="Chip",a=c.useMemo(()=>h||`${C.appId}/${C.code}/${_.screenName}/${w}/${t}`,[w,h,C,_,t]);let I=o.colors.text.default,j=ae??S.black_03,W=re,k=se;u&&(I=o.colors.primary,j=o.colors.background.selected,W=o.colors.primary,k=o.colors.primary);let D="label_default_medium",O=[e.chip,{borderRadius:g,paddingHorizontal:L,height:le}],b=20;oe==="small"&&(O=[e.chip,{borderRadius:g,paddingHorizontal:L,height:ie}],b=16,D="label_s_medium");const ne=()=>s.jsx(H,{style:[e.chipOverlay,{borderRadius:g},{borderColor:o.colors.secondary}]});return s.jsx(H,{style:[Z,e.wrapper],accessibilityLabel:a,children:s.jsxs(he,{onPress:ee,style:[te,O,e.touchable,{backgroundColor:j}],accessibilityLabel:a+"|touch",accessibilityState:{checked:u,...ce},children:[!!f&&s.jsx(M,{source:f,color:W,size:b,style:{width:R,height:R,marginRight:t?y.XS:z}}),t&&s.jsx(ge,{typography:D,color:I,numberOfLines:1,style:e.label,accessibilityLabel:a+"|text",children:t}),!!x&&s.jsx(M,{source:x,color:k,size:b,style:[e.icon,{marginLeft:z}],accessibilityLabel:a+"|icon"}),u&&ne()]})})},Le={title:"Library/Chip",component:be,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{label:"Default Chip"}},i={args:{label:"With Icons",iconLeft:"search",iconRight:"close"}},n={args:{label:"Selected Chip",selected:!0}},p={args:{label:"Small Chip",size:"small"}},d={args:{label:"Custom Colors",iconLeft:"star",iconRight:"star",iconLeftColor:S.yellow_03,iconRightColor:S.yellow_03}},m={args:{label:"Large Chip",size:"large"}};var $,v,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var E,N,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    iconLeft: 'search',
    iconRight: 'close'
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,X,F;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Selected Chip',
    selected: true
  }
}`,...(F=(X=n.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var K,P,q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'small'
  }
}`,...(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,G,J;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    iconLeft: 'star',
    iconRight: 'star',
    iconLeftColor: Colors.yellow_03,
    iconRightColor: Colors.yellow_03
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Large Chip',
    size: 'large'
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const Re=["Default","WithIcons","Selected","Small","WithCustomColors","Large"];export{l as Default,m as Large,n as Selected,p as Small,d as WithCustomColors,i as WithIcons,Re as __namedExportsOrder,Le as default};
