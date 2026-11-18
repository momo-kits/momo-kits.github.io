import{fn as we}from"./index-AyJqhRyE.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{y as $e,r as k,s as R,N as J,V as f,T as v,C,I as K,A as P,F as je}from"./index-D9H9ZqTU.js";import{r as T}from"./index-CPl6p-nG.js";const c=$e.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:R.L},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:R.S,borderBottomLeftRadius:R.S},radiusRight:{borderTopRightRadius:R.S,borderBottomRightRadius:R.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{alignSelf:"stretch",flexDirection:"row",alignItems:"center"},title:{marginBottom:k.XS},textCenter:{textAlign:"center"},currIcon:{backgroundColor:"white",borderRadius:R.L,aspectRatio:1},row:{flexDirection:"row"},flex1:{flex:1},fullWidth:{width:"100%"},numberLabel:{position:"absolute"},timeContainer:{justifyContent:"flex-end"},verticalItem:{flexDirection:"row",marginBottom:k.XS},stepIconColumn:{alignItems:"center",marginRight:k.M,minHeight:48},titleRow:{flexDirection:"row",justifyContent:"space-between"},verticalTitle:{marginRight:k.S,flex:1}}),ke=({size:r="large",backgroundColor:e,borderColor:p,error:m,style:i,useNumber:o,index:d,isActive:a,customIcon:u})=>{const l=J(16),s=J(R.M);let h=c.stepIcon,y=16,w=8;r==="small"&&(h=[c.stepIcon,{width:l,height:l,borderWidth:2,borderRadius:s}],y=12,w=6);let S=m?"navigation_close":"notifications_check";const n=()=>o?t.jsx(v,{style:c.numberLabel,typography:"header_xs_semibold",color:C.black_01,children:d+1}):a?u?t.jsx(K,{size:y,color:C.black_01,source:u}):t.jsx(f,{style:[c.currIcon,{width:w}]}):t.jsx(K,{size:y,color:C.black_01,source:S});return t.jsx(f,{style:[h,c.center,{backgroundColor:e,borderColor:p},i],children:n()})},ze="33",Ie=(r,e,p,m)=>m?"disable":p?"error":r===e?"current":r>e?"completed":"incomplete",Te=(r,e)=>r==="horizontal"||r==="vertical"&&e==="small",Ae=(r,e,p)=>{let m="description_default_regular";e&&p==="vertical"&&(m="body_default_regular");const i=Te(p,e);switch(r){case"current":case"error":return i?"header_xs_semibold":"header_s_semibold";case"incomplete":case"completed":return i?"description_default_regular":"body_default_regular";default:return m}},Le=(r,e,p,m,i)=>{const{theme:o}=T.useContext(P),d=Ie(r,e,p);let a={color:o.colors.text.default,typography:Ae(d,m,i)},u={color:o.colors.text.hint,typography:m?"description_xs_regular":"description_default_regular"},l={color:o.colors.text.hint,typography:"description_xs_regular"};switch(d){case"current":{a.color=o.colors.primary;break}case"error":{a.color=o.colors.error.primary;break}}return{title:a,description:u,time:l}},Re=(r,e,p,m=1,i)=>{const{theme:o}=T.useContext(P),d=o.colors.border.default,a=o.colors.primary+ze;let u=C.black_06,l=o.colors.border.default,s=d,h=d;const y=Ie(r,e,p,i);switch(r>e&&(s=a,h=a),r===e&&(s=a),e===0&&(s="transparent"),e===m-1&&(h="transparent"),y){case"current":{u=o.colors.primary,l=o.colors.background.tonal;break}case"completed":{u=o.colors.primary,l=o.colors.background.tonal;break}case"error":{u=o.colors.error.primary,l=o.colors.error.container;break}case"disable":{u=C.pink_08,l=C.pink_10;break}}return{backgroundColor:u,borderColor:l,lineColorLeft:s,lineColorRight:h,status:y}},He=({steps:r,size:e,activeIndex:p,useNumber:m=!1,align:i="center",customIcon:o,onPress:d,disabled:a,accessibilityLabel:u="steps-horizontal"})=>{const[l,s]=T.useState(0),{theme:h}=T.useContext(P),y=(S,n)=>{const{title:g,description:I,error:$,time:L}=S;let x=Le(p,n,$,e,"horizontal"),j="center",b="center";i==="left"?(j="flex-start",b="left"):i==="right"?(j="flex-end",b="right"):i==="stretch"&&(n===0?(j="flex-start",b="left"):n===r.length-1&&(b="right",j="flex-end"));const G=H=>{const{height:z}=H.nativeEvent.layout;z!==l&&z>l&&s(z)},A=!(n===r.length-1)&&(i!=="center"&&i!=="stretch")?k.XS:0;return t.jsxs(je,{style:[c.flex1,{alignItems:j,marginRight:A}],disabled:a||!d,onPress:()=>d&&d(S,n),accessibilityLabel:`${u}-touch-${n}`,children:[t.jsx(f,{style:[c.timeContainer,{minHeight:l}],children:!!L&&t.jsx(v,{onLayout:G,style:{textAlign:b},color:a?h.colors.text.disable:x.time.color,typography:x.time.typography,accessibilityLabel:`${u}-time-${n}`,children:L})}),w(S,n,i,a),!!g&&t.jsx(v,{style:[c.title,{textAlign:b}],color:a?h.colors.text.disable:x.title.color,typography:x.title.typography,accessibilityLabel:`${u}-title-${n}`,children:g}),!!I&&t.jsx(v,{style:{textAlign:b},color:a?h.colors.text.disable:x.description.color,typography:x.description.typography,accessibilityLabel:`${u}-description-${n}`,children:I})]},`Step ${n}`)},w=(S,n,g="center",I)=>{const{error:$}=S,L=Re(p,n,$,r.length,I),{backgroundColor:x,borderColor:j}=L,{lineColorRight:b,lineColorLeft:G}=L,F=g==="stretch",q=n===r.length-1,A=F&&n===0||g==="left",H=F&&q||g==="right",z=H?0:k.XS,ve=A?0:k.XS;return t.jsxs(f,{style:c.rowStep,children:[!A&&t.jsx(f,{style:[c.lineHorizontal,c.radiusRight,{backgroundColor:G}]}),t.jsx(ke,{size:e,error:$,backgroundColor:I?C.pink_08:x,borderColor:I?C.pink_10:j,style:{marginRight:z,marginLeft:ve,marginVertical:k.XS},index:n,useNumber:m,isActive:p===n,customIcon:o}),!H&&t.jsx(f,{style:[c.lineHorizontal,c.radiusLeft,{backgroundColor:b}]})]})};return t.jsx(f,{style:c.row,children:r.map((S,n)=>y(S,n))})},Ee=({steps:r,activeIndex:e,size:p,useNumber:m=!1,onPress:i,disabled:o,accessibilityLabel:d="steps-vertical"})=>{const{theme:a}=T.useContext(P),u=(l,s)=>{const{error:h,description:y,title:w,time:S}=l,n=Re(e,s,h,r.length),g=Le(e,s,h,p,"vertical"),{backgroundColor:I,borderColor:$}=n,{primary:L,border:x}=a.colors,j=e>s?L+"33":x.default,b=()=>typeof y=="string"?t.jsx(v,{color:o?a.colors.text.disable:g.title.color,typography:g.description.typography,accessibilityLabel:`${d}-description-${s}`,children:y}):y;return t.jsxs(je,{style:c.verticalItem,disabled:o||!i,onPress:()=>i&&i(l,s),accessibilityLabel:`${d}-touch-${s}`,children:[t.jsxs(f,{style:c.stepIconColumn,children:[t.jsx(ke,{size:p,error:h,backgroundColor:o?C.pink_08:I,borderColor:o?C.pink_10:$,useNumber:m,index:s,isActive:e===s}),s!==r.length-1&&t.jsx(f,{style:[c.lineVertical,{backgroundColor:j,marginVertical:k.XS}]})]}),t.jsxs(f,{style:c.flex1,children:[t.jsxs(f,{style:c.titleRow,children:[t.jsx(v,{numberOfLines:2,style:c.verticalTitle,color:o?a.colors.text.disable:g.title.color,typography:g.title.typography,accessibilityLabel:`${d}-title-${s}`,children:w}),t.jsx(v,{color:o?a.colors.text.disable:g.time.color,typography:g.time.typography,accessibilityLabel:`${d}-time-${s}`,children:S})]}),b()]})]},`Step ${s}`)};return t.jsx(f,{style:c.fullWidth,children:r.map((l,s)=>u(l,s))})},Me=({horizontal:r=!1,...e})=>t.jsx(f,{children:r?t.jsx(He,{...e}):t.jsx(Ee,{...e})}),Ne={title:"Library/Steps",component:Me,parameters:{layout:"centered"},tags:["autodocs"]},_=[{title:"Step 1",description:"This is the first step",time:"10:00 AM"},{title:"Step 2",description:"This is the second step",time:"10:30 AM"},{title:"Step 3",description:"This is the third step",time:"11:00 AM"}],E={args:{steps:_,activeIndex:0}},M={args:{steps:_,activeIndex:1,horizontal:!0}},W={args:{steps:_,activeIndex:2,useNumber:!0}},D={args:{steps:_,activeIndex:0,size:"small"}},V={args:{steps:[..._.slice(0,2),{..._[2],error:!0}],activeIndex:2}},X={args:{steps:_,activeIndex:1,align:"center"}},N={args:{steps:_,activeIndex:0,disabled:!0}},B={args:{steps:_,activeIndex:1,customIcon:"check"}},O={args:{steps:_,activeIndex:1,onPress:we()}};var Q,U,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0
  }
}`,...(Y=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    horizontal: true
  }
}`,...(te=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,se;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 2,
    useNumber: true
  }
}`,...(se=(oe=W.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ce,ae;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0,
    size: 'small'
  }
}`,...(ae=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var ie,le,pe;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    steps: [...defaultSteps.slice(0, 2), {
      ...defaultSteps[2],
      error: true
    }],
    activeIndex: 2
  }
}`,...(pe=(le=V.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,de,me;X.parameters={...X.parameters,docs:{...(ue=X.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    align: 'center'
  }
}`,...(me=(de=X.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,ge,fe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0,
    disabled: true
  }
}`,...(fe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,Se,be;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    customIcon: 'check'
  }
}`,...(be=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var xe,Ce,_e;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    onPress: fn()
  }
}`,...(_e=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:_e.source}}};const Be=["Default","Horizontal","WithNumbers","Small","WithError","CenterAligned","Disabled","WithCustomIcon","Pressable"];export{X as CenterAligned,E as Default,N as Disabled,M as Horizontal,O as Pressable,D as Small,B as WithCustomIcon,V as WithError,W as WithNumbers,Be as __namedExportsOrder,Ne as default};
