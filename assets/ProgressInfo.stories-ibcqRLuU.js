import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{y as se,r as j,s as h,C as c,N as D,V as n,T as I,I as ae,A as ie}from"./index-D9H9ZqTU.js";import{r as ce}from"./index-CPl6p-nG.js";const t=se.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:h.L},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:h.S,borderBottomLeftRadius:h.S},radiusRight:{borderTopRightRadius:h.S,borderBottomRightRadius:h.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{flexDirection:"row",alignItems:"center"},title:{marginBottom:j.XS},textCenter:{textAlign:"center"},currIcon:{backgroundColor:c.pink_MoMo_Branding,borderRadius:h.L,aspectRatio:1},row:{flexDirection:"row"},flex1:{flex:1},fullWidth:{width:"100%"},numberLabel:{position:"absolute"},stepIconColumn:{alignItems:"center",marginRight:j.M,minHeight:48},titleRow:{flexDirection:"row",justifyContent:"space-between"},verticalTitle:{marginRight:j.S,flex:1}}),oe=({size:o="large",backgroundColor:p,borderColor:x,style:S,useNumber:y,customIcon:a,index:b})=>{const g=D(16),f=D(h.M);let s=t.stepIcon,r=16,i=8;o==="small"&&(s=se.flatten([t.stepIcon,{width:g,height:g,borderRadius:f}]),r=12,i=6);const l=()=>y?e.jsx(I,{style:t.numberLabel,typography:"header_xs_semibold",color:c.pink_MoMo_Branding,children:b+1}):a?e.jsx(ae,{size:r,color:c.pink_MoMo_Branding,source:a}):e.jsx(n,{style:[t.currIcon,{width:i}]});return e.jsx(n,{style:[s,t.center,{backgroundColor:p,borderColor:x},S],children:l()})},le=({steps:o,size:p,useNumber:x=!1,showDescription:S=!0,showTitle:y=!0,align:a,customIcon:b})=>{const g=(s,r)=>{const{title:i,description:l}=o[r];let m="center",d="center";a==="left"?(m="flex-start",d="left"):a==="right"?(m="flex-end",d="right"):a==="stretch"&&(r===0?(m="flex-start",d="left"):r===o.length-1&&(d="right",m="flex-end"));const ne=!(r===o.length-1)&&(a!=="center"&&a!=="stretch")?j.XS:0;return e.jsxs(n,{style:[t.flex1,{alignItems:m,marginRight:ne}],children:[f(s,r,a),!!i&&y&&e.jsx(I,{style:[t.title,{textAlign:d}],typography:"header_xs_semibold",children:i}),!!l&&S&&e.jsx(I,{style:{textAlign:d},color:c.black_12,typography:"description_default_regular",children:l})]},`Step ${r}`)},f=(s,r,i="center")=>{const l=i==="stretch",m=r===o.length-1,d=l&&r===0||i==="left",H=l&&m||i==="right";return e.jsxs(n,{style:t.rowStep,children:[!d&&e.jsx(n,{style:[t.lineHorizontal,t.radiusRight,{backgroundColor:c.pink_08}]}),e.jsx(oe,{size:p,index:r,backgroundColor:c.pink_08,borderColor:c.pink_08,style:{marginVertical:j.XS},useNumber:x,customIcon:b}),!H&&e.jsx(n,{style:[t.lineHorizontal,t.radiusLeft,{backgroundColor:c.pink_08}]})]})};return e.jsx(n,{style:t.row,children:o.map((s,r)=>g(s,r))})},pe=({steps:o,size:p,useNumber:x=!1,showDescription:S=!0,showTitle:y=!0,customIcon:a})=>{const{theme:b}=ce.useContext(ie),g=(f,s)=>{const{description:r,title:i}=o[s],l=b.colors.primary+"33";return e.jsxs(n,{style:t.row,children:[e.jsxs(n,{style:t.stepIconColumn,children:[e.jsx(oe,{size:p,backgroundColor:c.pink_08,borderColor:c.pink_08,useNumber:x,customIcon:a,index:s}),s!==o.length-1&&e.jsx(n,{style:[t.lineVertical,{backgroundColor:l}]})]}),e.jsxs(n,{style:t.flex1,children:[e.jsx(n,{style:t.titleRow,children:y&&e.jsx(I,{numberOfLines:2,style:t.verticalTitle,typography:"header_xs_semibold",children:i})}),S&&e.jsx(I,{color:c.black_12,typography:"description_default_regular",children:r})]})]},`Step ${s}`)};return e.jsx(n,{style:t.fullWidth,children:o.map((f,s)=>g(f,s))})},de=({horizontal:o=!1,...p})=>e.jsx(e.Fragment,{children:o?e.jsx(le,{...p}):e.jsx(pe,{...p})}),fe={title:"Library/ProgressInfo",component:de,parameters:{layout:"centered"},tags:["autodocs"]},u=[{title:"Step 1",description:"This is the first step in the process"},{title:"Step 2",description:"This is the second step in the process"},{title:"Step 3",description:"This is the third step in the process"}],_={args:{steps:u}},C={args:{steps:u,horizontal:!0}},w={args:{steps:u,size:"small"}},R={args:{steps:u,useNumber:!0}},k={args:{steps:u,showDescription:!1}},z={args:{steps:u,showTitle:!1}},L={args:{steps:u,customIcon:"check"}},T={args:{steps:u,horizontal:!0,align:"center"}};var M,W,A;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps
  }
}`,...(A=(W=_.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,P,V;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    horizontal: true
  }
}`,...(V=(P=C.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var E,N,X;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    size: 'small'
  }
}`,...(X=(N=w.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var v,O,$;R.parameters={...R.parameters,docs:{...(v=R.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    useNumber: true
  }
}`,...($=(O=R.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var F,q,G;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showDescription: false
  }
}`,...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showTitle: false
  }
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    customIcon: 'check'
  }
}`,...(Z=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    horizontal: true,
    align: 'center'
  }
}`,...(re=(te=T.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const xe=["Default","Horizontal","Small","WithNumbers","WithoutDescription","WithoutTitle","CustomIcon","CenterAligned"];export{T as CenterAligned,L as CustomIcon,_ as Default,C as Horizontal,w as Small,R as WithNumbers,k as WithoutDescription,z as WithoutTitle,xe as __namedExportsOrder,fe as default};
