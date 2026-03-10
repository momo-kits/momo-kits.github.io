import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as u,C as c,j,i as D,T as I,I as te,A as re}from"./index-CcPzXCq5.js";import{r as se}from"./index-CPl6p-nG.js";import{s as Y,V as o}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const i=Y.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:u.L},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:u.S,borderBottomLeftRadius:u.S},radiusRight:{borderTopRightRadius:u.S,borderBottomRightRadius:u.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{flexDirection:"row",alignItems:"center"},title:{marginBottom:j.XS},textCenter:{textAlign:"center"},currIcon:{backgroundColor:c.pink_MoMo_Branding,borderRadius:u.L,aspectRatio:1}}),Z=({size:s="large",backgroundColor:l,borderColor:x,style:S,useNumber:y,customIcon:a,index:b})=>{const h=D(16),g=D(u.M);let r=i.stepIcon,t=16,n=8;s==="small"&&(r=Y.flatten([i.stepIcon,{width:h,height:h,borderRadius:g}]),t=12,n=6);const p=()=>y?e.jsx(I,{style:{position:"absolute"},typography:"header_xs_semibold",color:c.pink_MoMo_Branding,children:b+1}):a?e.jsx(te,{size:t,color:c.pink_MoMo_Branding,source:a}):e.jsx(o,{style:[i.currIcon,{width:n,aspectRatio:1}]});return e.jsx(o,{style:[r,i.center,{backgroundColor:l,borderColor:x},S],children:p()})},oe=({steps:s,size:l,useNumber:x=!1,showDescription:S=!0,showTitle:y=!0,align:a,customIcon:b})=>{const h=(r,t)=>{const{title:n,description:p}=s[t];let d="center",f="center";a==="left"?(d="flex-start",f="left"):a==="right"?(d="flex-end",f="right"):a==="stretch"&&(t===0?(d="flex-start",f="left"):t===s.length-1&&(f="right",d="flex-end"));const ee=t!==s.length-1&&a!=="center"&&a!=="stretch";return e.jsxs(o,{style:{flex:1,alignItems:d,marginRight:ee?j.XS:0},children:[g(r,t,a),!!n&&y&&e.jsx(I,{style:[i.title,{textAlign:f}],typography:"header_xs_semibold",children:n}),!!p&&S&&e.jsx(I,{style:{textAlign:f},color:c.black_12,typography:"description_default_regular",children:p})]},`Step ${t}`)},g=(r,t,n="center")=>{const p=n==="stretch"&&t===0||n==="left",d=n==="stretch"&&t===s.length-1||n==="right";return e.jsxs(o,{style:i.rowStep,children:[!p&&e.jsx(o,{style:[i.lineHorizontal,i.radiusRight,{backgroundColor:c.pink_08}]}),e.jsx(Z,{size:l,index:t,backgroundColor:c.pink_08,borderColor:c.pink_08,style:{marginVertical:j.XS},useNumber:x,customIcon:b}),!d&&e.jsx(o,{style:[i.lineHorizontal,i.radiusLeft,{backgroundColor:c.pink_08}]})]})};return e.jsx(o,{style:{flexDirection:"row"},children:s.map((r,t)=>h(r,t))})},ne=({steps:s,size:l,useNumber:x=!1,showDescription:S=!0,showTitle:y=!0,customIcon:a})=>{const{theme:b}=se.useContext(re),h=(g,r)=>{const{description:t,title:n}=s[r],p=b.colors.primary+"33";return e.jsxs(o,{style:{flexDirection:"row"},children:[e.jsxs(o,{style:{alignItems:"center",marginRight:j.M,minHeight:48},children:[e.jsx(Z,{size:l,backgroundColor:c.pink_08,borderColor:c.pink_08,useNumber:x,customIcon:a,index:r}),r!==s.length-1&&e.jsx(o,{style:[i.lineVertical,{backgroundColor:p}]})]}),e.jsxs(o,{style:{flex:1},children:[e.jsx(o,{style:[{flexDirection:"row",justifyContent:"space-between"}],children:y&&e.jsx(I,{numberOfLines:2,style:{marginRight:j.S,flex:1},typography:"header_xs_semibold",children:n})}),S&&e.jsx(I,{color:c.black_12,typography:"description_default_regular",children:t})]})]},`Step ${r}`)};return e.jsx(o,{style:{width:"100%"},children:s.map((g,r)=>h(g,r))})},ae=({horizontal:s=!1,...l})=>e.jsx(e.Fragment,{children:s?e.jsx(oe,{...l}):e.jsx(ne,{...l})}),ue={title:"Library/ProgressInfo",component:ae,parameters:{layout:"centered"},tags:["autodocs"]},m=[{title:"Step 1",description:"This is the first step in the process"},{title:"Step 2",description:"This is the second step in the process"},{title:"Step 3",description:"This is the third step in the process"}],_={args:{steps:m}},R={args:{steps:m,horizontal:!0}},k={args:{steps:m,size:"small"}},C={args:{steps:m,useNumber:!0}},w={args:{steps:m,showDescription:!1}},z={args:{steps:m,showTitle:!1}},T={args:{steps:m,customIcon:"check"}};var H,M,L;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps
  }
}`,...(L=(M=_.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var W,B,P;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    horizontal: true
  }
}`,...(P=(B=R.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,A,N;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    size: 'small'
  }
}`,...(N=(A=k.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var E,X,O;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    useNumber: true
  }
}`,...(O=(X=C.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var $,v,F;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showDescription: false
  }
}`,...(F=(v=w.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var q,G,J;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showTitle: false
  }
}`,...(J=(G=z.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    customIcon: 'check'
  }
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const me=["Default","Horizontal","Small","WithNumbers","WithoutDescription","WithoutTitle","CustomIcon"];export{T as CustomIcon,_ as Default,R as Horizontal,k as Small,C as WithNumbers,w as WithoutDescription,z as WithoutTitle,me as __namedExportsOrder,ue as default};
