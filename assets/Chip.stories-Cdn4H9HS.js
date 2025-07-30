import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DI7CEG0L.js";import{i as t,H as i,R as f,A as Z,x as ee,y as oe,M as re,C as te,I as F,T as se}from"./styles-DZKIi-Hd.js";import{s as ae,V as w}from"./index-BzmpT3sc.js";const r=ae.create({chip:{borderRadius:f.L,paddingHorizontal:t.S,height:i(32),justifyContent:"center",alignItems:"center",flexDirection:"row"},smallChip:{borderRadius:f.L,paddingHorizontal:t.S,height:i(24),justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2,borderRadius:f.L},imageSmall:{width:i(16),height:i(16),marginRight:t.XS},icon:{marginLeft:t.XS},wrapper:{flexDirection:"row"}}),ce=({label:s="Label",iconLeft:S,iconRight:b,selected:u=!1,style:B,onPress:G,size:J="large",iconLeftColor:K,iconRightColor:P,itemContainerStyle:Q,accessibilityLabel:h,accessibilityState:U})=>{const{theme:e}=c.useContext(Z),g=c.useContext(ee),y=c.useContext(oe),x="Chip",a=c.useMemo(()=>h||`${g.appId}/${g.code}/${y.screenName}/${x}/${s}`,[x,h,g,y]);let L=e.colors.text.default,R=te.black_03,D=K,I=P;u&&(L=e.colors.primary,R=e.colors.background.selected,D=e.colors.primary,I=e.colors.primary);let j="label_default_medium",z=r.chip,C=20;J==="small"&&(z=r.smallChip,C=16,j="label_s_medium");const Y=()=>o.jsx(w,{style:[r.chipOverlay,{borderColor:e.colors.secondary}]});return o.jsx(w,{style:[B,r.wrapper],accessibilityLabel:a,children:o.jsxs(re,{onPress:G,style:[Q,z,{backgroundColor:R}],accessibilityLabel:a+"|touch",accessibilityState:{checked:u,...U},children:[!!S&&o.jsx(F,{source:S,color:D,size:C,style:{...r.imageSmall,marginRight:s?t.XS:0}}),s&&o.jsx(se,{typography:j,color:L,accessibilityLabel:a+"|text",children:s}),!!b&&o.jsx(F,{source:b,color:I,size:C,style:r.icon,accessibilityLabel:a+"|icon"}),u&&Y()]})})},de={title:"Library/Chip",component:ce,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{label:"Default Chip"}},n={args:{label:"With Icons",iconLeft:"search",iconRight:"close"}},p={args:{label:"Selected Chip",selected:!0}},m={args:{label:"Small Chip",size:"small"}},d={args:{label:"Custom Colors",iconLeft:"star",iconRight:"star",iconLeftColor:"#FFD700",iconRightColor:"#FFD700"}};var W,_,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var $,k,M;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    iconLeft: 'search',
    iconRight: 'close'
  }
}`,...(M=(k=n.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var v,A,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Selected Chip',
    selected: true
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,T,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'small'
  }
}`,...(X=(T=m.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var N,V,q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    iconLeft: 'star',
    iconRight: 'star',
    iconLeftColor: '#FFD700',
    iconRightColor: '#FFD700'
  }
}`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const ue=["Default","WithIcons","Selected","Small","WithCustomColors"];export{l as Default,p as Selected,m as Small,d as WithCustomColors,n as WithIcons,ue as __namedExportsOrder,de as default};
