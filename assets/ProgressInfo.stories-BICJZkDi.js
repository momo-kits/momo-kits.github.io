import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{l as u,f as o,s as m,k as T,T as S,I as se,A as ne}from"./styles-Dd_0X69m.js";import{r as ae}from"./index-DI7CEG0L.js";import{s as ie,V as n}from"./index-BzmpT3sc.js";const i=ie.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:u.L},stepIconSmall:{width:m(16),height:m(16),borderWidth:2,borderRadius:m(u.M)},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:u.S,borderBottomLeftRadius:u.S},radiusRight:{borderTopRightRadius:u.S,borderBottomRightRadius:u.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{flexDirection:"row",alignItems:"center"},title:{marginBottom:T.XS},textCenter:{textAlign:"center"},largeText:{fontSize:m(12),lineHeight:m(16)},smallText:{fontSize:m(8),lineHeight:m(12)},currIcon:{backgroundColor:o.pink_MoMo_Branding,borderRadius:u.L,aspectRatio:1}}),R=({size:s="large",backgroundColor:c,borderColor:b,style:x,useNumber:I,customIcon:a,index:w})=>{let f=i.stepIcon,p=16,r=8;s==="small"&&(f=i.stepIconSmall,p=12,r=6);const t=()=>I?e.jsx(S,{style:{position:"absolute"},typography:"header_xs_semibold",color:o.pink_MoMo_Branding,children:w+1}):a?e.jsx(se,{size:p,color:o.pink_MoMo_Branding,source:a}):e.jsx(n,{style:[i.currIcon,{width:r,aspectRatio:1}]});return e.jsx(n,{style:[f,i.center,{backgroundColor:c,borderColor:b},x],children:t()})};R.__docgenInfo={description:"",methods:[],displayName:"ProgressInfoIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Optional. Specifies the size of the step icon. If not provided, a default size is used.",defaultValue:{value:"'large'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:`Optional. The background color of the step icon.
If not provided, a default background color is used.`},borderColor:{required:!1,tsType:{name:"string"},description:`Optional. The border color of the step icon.
If not provided, a default border color is used.`},style:{required:!1,tsType:{name:"ViewStyle"},description:`Optional. Custom styles to apply to the StepIcon component.
Can be used to adjust the visual presentation or layout.`},index:{required:!0,tsType:{name:"number"},description:""},useNumber:{required:!1,tsType:{name:"boolean"},description:""},customIcon:{required:!1,tsType:{name:"string"},description:""}}};const Z=({steps:s,size:c,useNumber:b=!1,showDescription:x=!0,showTitle:I=!0,align:a,customIcon:w})=>{const f=(r,t)=>{const{title:l,description:g}=s[t];let d="center",y="center";a==="left"?(d="flex-start",y="left"):a==="right"?(d="flex-end",y="right"):a==="stretch"&&(t===0?(d="flex-start",y="left"):t===s.length-1&&(y="right",d="flex-end"));const re=t!==s.length-1&&a!=="center"&&a!=="stretch";return e.jsxs(n,{style:{flex:1,alignItems:d,marginRight:re?T.XS:0},children:[p(r,t,a),!!l&&I&&e.jsx(S,{style:[i.title,{textAlign:y}],typography:"header_xs_semibold",children:l}),!!g&&x&&e.jsx(S,{style:{textAlign:y},color:o.black_12,typography:"description_default_regular",children:g})]},`Step ${t}`)},p=(r,t,l="center")=>{const g=l==="stretch"&&t===0||l==="left",d=l==="stretch"&&t===s.length-1||l==="right";return e.jsxs(n,{style:i.rowStep,children:[!g&&e.jsx(n,{style:[i.lineHorizontal,i.radiusRight,{backgroundColor:o.pink_08}]}),e.jsx(R,{size:c,index:t,backgroundColor:o.pink_08,borderColor:o.pink_08,style:{marginVertical:T.XS},useNumber:b,customIcon:w}),!d&&e.jsx(n,{style:[i.lineHorizontal,i.radiusLeft,{backgroundColor:o.pink_08}]})]})};return e.jsx(n,{style:{flexDirection:"row"},children:s.map((r,t)=>f(r,t))})};Z.__docgenInfo={description:"",methods:[],displayName:"ProgressInfoHorizontal",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"string",required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`}]}}],raw:"ProgressInfoItem[]"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""},useNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch' | undefined",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"undefined"}]},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customIcon:{required:!1,tsType:{name:"string"},description:""}}};const ee=({steps:s,size:c,useNumber:b=!1,showDescription:x=!0,showTitle:I=!0,customIcon:a})=>{const{theme:w}=ae.useContext(ne),f=(p,r)=>{const{description:t,title:l}=s[r],g=w.colors.primary+"33";return e.jsxs(n,{style:{flexDirection:"row"},children:[e.jsxs(n,{style:{alignItems:"center",marginRight:T.M,minHeight:48},children:[e.jsx(R,{size:c,backgroundColor:o.pink_08,borderColor:o.pink_08,useNumber:b,customIcon:a,index:r}),r!==s.length-1&&e.jsx(n,{style:[i.lineVertical,{backgroundColor:g}]})]}),e.jsxs(n,{style:{flex:1},children:[e.jsx(n,{style:[{flexDirection:"row",justifyContent:"space-between"}],children:I&&e.jsx(S,{numberOfLines:2,style:{marginRight:T.S,flex:1},typography:"header_xs_semibold",children:l})}),x&&e.jsx(S,{color:o.black_12,typography:"description_default_regular",children:t})]})]},`Step ${r}`)};return e.jsx(n,{style:{width:"100%"},children:s.map((p,r)=>f(p,r))})};ee.__docgenInfo={description:"",methods:[],displayName:"ProgressInfoVertical",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"string",required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`}]}}],raw:"ProgressInfoItem[]"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""},useNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch' | undefined",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"undefined"}]},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customIcon:{required:!1,tsType:{name:"string"},description:""}}};const te=({horizontal:s=!1,...c})=>e.jsx(e.Fragment,{children:s?e.jsx(Z,{...c}):e.jsx(ee,{...c})});te.__docgenInfo={description:"",methods:[],displayName:"ProgressInfo",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"string",required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`}]}}],raw:"ProgressInfoItem[]"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""},useNumber:{required:!1,tsType:{name:"boolean"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch' | undefined",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"undefined"}]},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:""},showTitle:{required:!1,tsType:{name:"boolean"},description:""},customIcon:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Library/ProgressInfo",component:te,parameters:{layout:"centered"},tags:["autodocs"]},h=[{title:"Step 1",description:"This is the first step in the process"},{title:"Step 2",description:"This is the second step in the process"},{title:"Step 3",description:"This is the third step in the process"}],v={args:{steps:h}},q={args:{steps:h,horizontal:!0}},k={args:{steps:h,size:"small"}},_={args:{steps:h,useNumber:!0}},j={args:{steps:h,showDescription:!1}},z={args:{steps:h,showTitle:!1}},C={args:{steps:h,customIcon:"check"}};var V,M,D;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps
  }
}`,...(D=(M=v.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,P,N;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    horizontal: true
  }
}`,...(N=(P=q.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var O,L,W;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    size: 'small'
  }
}`,...(W=(L=k.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var A,B,E;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    useNumber: true
  }
}`,...(E=(B=_.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var X,$,F;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showDescription: false
  }
}`,...(F=($=j.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,J,K;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    showTitle: false
  }
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    customIcon: 'check'
  }
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const ue=["Default","Horizontal","Small","WithNumbers","WithoutDescription","WithoutTitle","CustomIcon"];export{C as CustomIcon,v as Default,q as Horizontal,k as Small,_ as WithNumbers,j as WithoutDescription,z as WithoutTitle,ue as __namedExportsOrder,de as default};
