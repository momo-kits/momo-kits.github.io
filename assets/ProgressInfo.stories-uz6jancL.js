import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as ee,V as o}from"./index-BzmpT3sc.js";import{R as u,C as i,H as h,i as I,T as _,I as te,A as re}from"./styles-DZKIi-Hd.js";import{r as se}from"./index-DI7CEG0L.js";const a=ee.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:u.L},stepIconSmall:{width:h(16),height:h(16),borderWidth:2,borderRadius:h(u.M)},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:u.S,borderBottomLeftRadius:u.S},radiusRight:{borderTopRightRadius:u.S,borderBottomRightRadius:u.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{flexDirection:"row",alignItems:"center"},title:{marginBottom:I.XS},textCenter:{textAlign:"center"},largeText:{fontSize:h(12),lineHeight:h(16)},smallText:{fontSize:h(8),lineHeight:h(12)},currIcon:{backgroundColor:i.pink_MoMo_Branding,borderRadius:u.L,aspectRatio:1}}),Y=({size:s="large",backgroundColor:l,borderColor:S,style:y,useNumber:b,customIcon:n,index:j})=>{let g=a.stepIcon,p=16,r=8;s==="small"&&(g=a.stepIconSmall,p=12,r=6);const t=()=>b?e.jsx(_,{style:{position:"absolute"},typography:"header_xs_semibold",color:i.pink_MoMo_Branding,children:j+1}):n?e.jsx(te,{size:p,color:i.pink_MoMo_Branding,source:n}):e.jsx(o,{style:[a.currIcon,{width:r,aspectRatio:1}]});return e.jsx(o,{style:[g,a.center,{backgroundColor:l,borderColor:S},y],children:t()})},oe=({steps:s,size:l,useNumber:S=!1,showDescription:y=!0,showTitle:b=!0,align:n,customIcon:j})=>{const g=(r,t)=>{const{title:c,description:f}=s[t];let d="center",x="center";n==="left"?(d="flex-start",x="left"):n==="right"?(d="flex-end",x="right"):n==="stretch"&&(t===0?(d="flex-start",x="left"):t===s.length-1&&(x="right",d="flex-end"));const Z=t!==s.length-1&&n!=="center"&&n!=="stretch";return e.jsxs(o,{style:{flex:1,alignItems:d,marginRight:Z?I.XS:0},children:[p(r,t,n),!!c&&b&&e.jsx(_,{style:[a.title,{textAlign:x}],typography:"header_xs_semibold",children:c}),!!f&&y&&e.jsx(_,{style:{textAlign:x},color:i.black_12,typography:"description_default_regular",children:f})]},`Step ${t}`)},p=(r,t,c="center")=>{const f=c==="stretch"&&t===0||c==="left",d=c==="stretch"&&t===s.length-1||c==="right";return e.jsxs(o,{style:a.rowStep,children:[!f&&e.jsx(o,{style:[a.lineHorizontal,a.radiusRight,{backgroundColor:i.pink_08}]}),e.jsx(Y,{size:l,index:t,backgroundColor:i.pink_08,borderColor:i.pink_08,style:{marginVertical:I.XS},useNumber:S,customIcon:j}),!d&&e.jsx(o,{style:[a.lineHorizontal,a.radiusLeft,{backgroundColor:i.pink_08}]})]})};return e.jsx(o,{style:{flexDirection:"row"},children:s.map((r,t)=>g(r,t))})},ne=({steps:s,size:l,useNumber:S=!1,showDescription:y=!0,showTitle:b=!0,customIcon:n})=>{const{theme:j}=se.useContext(re),g=(p,r)=>{const{description:t,title:c}=s[r],f=j.colors.primary+"33";return e.jsxs(o,{style:{flexDirection:"row"},children:[e.jsxs(o,{style:{alignItems:"center",marginRight:I.M,minHeight:48},children:[e.jsx(Y,{size:l,backgroundColor:i.pink_08,borderColor:i.pink_08,useNumber:S,customIcon:n,index:r}),r!==s.length-1&&e.jsx(o,{style:[a.lineVertical,{backgroundColor:f}]})]}),e.jsxs(o,{style:{flex:1},children:[e.jsx(o,{style:[{flexDirection:"row",justifyContent:"space-between"}],children:b&&e.jsx(_,{numberOfLines:2,style:{marginRight:I.S,flex:1},typography:"header_xs_semibold",children:c})}),y&&e.jsx(_,{color:i.black_12,typography:"description_default_regular",children:t})]})]},`Step ${r}`)};return e.jsx(o,{style:{width:"100%"},children:s.map((p,r)=>g(p,r))})},ae=({horizontal:s=!1,...l})=>e.jsx(e.Fragment,{children:s?e.jsx(oe,{...l}):e.jsx(ne,{...l})}),de={title:"Library/ProgressInfo",component:ae,parameters:{layout:"centered"},tags:["autodocs"]},m=[{title:"Step 1",description:"This is the first step in the process"},{title:"Step 2",description:"This is the second step in the process"},{title:"Step 3",description:"This is the third step in the process"}],R={args:{steps:m}},k={args:{steps:m,horizontal:!0}},C={args:{steps:m,size:"small"}},w={args:{steps:m,useNumber:!0}},z={args:{steps:m,showDescription:!1}},H={args:{steps:m,showTitle:!1}},T={args:{steps:m,customIcon:"check"}};var D,L,M;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps
  }
}`,...(M=(L=R.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,B,P;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    horizontal: true
  }
}`,...(P=(B=k.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,A,N;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    size: 'small'
  }
}`,...(N=(A=C.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var E,X,O;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    useNumber: true
  }
}`,...(O=(X=w.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var $,v,F;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showDescription: false
  }
}`,...(F=(v=z.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var q,G,J;H.parameters={...H.parameters,docs:{...(q=H.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showTitle: false
  }
}`,...(J=(G=H.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    customIcon: 'check'
  }
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ue=["Default","Horizontal","Small","WithNumbers","WithoutDescription","WithoutTitle","CustomIcon"];export{T as CustomIcon,R as Default,k as Horizontal,C as Small,w as WithNumbers,z as WithoutDescription,H as WithoutTitle,ue as __namedExportsOrder,de as default};
