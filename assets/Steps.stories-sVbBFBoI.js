import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{s as be,V as m}from"./index-BzmpT3sc.js";import{s as O,y as R,r as x,T,k as v,I as X,A as $,M as de}from"./styles-B2Jwh0LJ.js";import{r as V}from"./index-DI7CEG0L.js";const b=be.create({stepIcon:{width:24,height:24,borderWidth:2,borderRadius:O.L},stepIconSmall:{width:R(16),height:R(16),borderWidth:2,borderRadius:R(O.M)},lineHorizontal:{height:2,flex:1},lineVertical:{width:2,minHeight:20,flex:1},radiusLeft:{borderTopLeftRadius:O.S,borderBottomLeftRadius:O.S},radiusRight:{borderTopRightRadius:O.S,borderBottomRightRadius:O.S},center:{alignItems:"center",justifyContent:"center"},rowStep:{flexDirection:"row",alignItems:"center"},title:{marginBottom:x.XS},textCenter:{textAlign:"center"},largeText:{fontSize:R(12),lineHeight:R(16)},smallText:{fontSize:R(8),lineHeight:R(12)},currIcon:{backgroundColor:"white",borderRadius:O.L,aspectRatio:1}}),E=({size:r="large",backgroundColor:e,borderColor:o,error:h,style:d,useNumber:n,index:u,isActive:a,customIcon:p})=>{let c=b.stepIcon,s=16,l=8;r==="small"&&(c=b.stepIconSmall,s=12,l=6);let t=h?"navigation_close":"notifications_check";const f=()=>n?i.jsx(T,{style:{position:"absolute"},typography:"header_xs_semibold",color:v.black_01,children:u+1}):a?p?i.jsx(X,{size:s,color:v.black_01,source:p}):i.jsx(m,{style:[b.currIcon,{width:l,aspectRatio:1}]}):i.jsx(X,{size:s,color:v.black_01,source:t});return i.jsx(m,{style:[c,b.center,{backgroundColor:e,borderColor:o},d],children:f()})};E.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Optional. Specifies the size of the step icon. If not provided, a default size is used.",defaultValue:{value:"'large'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:`Optional. The background color of the step icon.
If not provided, a default background color is used.`},borderColor:{required:!1,tsType:{name:"string"},description:`Optional. The border color of the step icon.
If not provided, a default border color is used.`},error:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step icon is marked as being in an error state,\ntypically displayed with an error icon and error styles.\nDefaults to `false` if not provided."},style:{required:!1,tsType:{name:"ViewStyle"},description:`Optional. Custom styles to apply to the StepIcon component.
Can be used to adjust the visual presentation or layout.`},useNumber:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step number is displayed within the step icon."},index:{required:!0,tsType:{name:"number"},description:"Optional. The number to display within the step icon."},isActive:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step icon is marked as active."},customIcon:{required:!1,tsType:{name:"string"},description:"Optional. Custom active icon"}}};const ue=(r,e,o,h)=>h?"disable":o?"error":r===e?"current":r>e?"completed":"incomplete",W=(r,e)=>r==="horizontal"||r==="vertical"&&e==="small",we=(r,e,o)=>{const h=e&&o==="vertical"?"body_default_regular":"description_default_regular";switch(r){case"current":case"error":return W(o,e)?"header_xs_semibold":"header_s_semibold";case"incomplete":case"completed":return W(o,e)?"description_default_regular":"body_default_regular";default:return h}},he=(r,e,o,h,d)=>{const{theme:n}=V.useContext($),u=ue(r,e,o);let a={color:n.colors.text.default,typography:we(u,h,d)},p={color:n.colors.text.hint,typography:h?"description_xs_regular":"description_default_regular"},c={color:n.colors.text.hint,typography:"description_xs_regular"};switch(u){case"current":{a.color=n.colors.primary;break}case"error":{a.color=n.colors.error.primary;break}}return{title:a,description:p,time:c}},me=(r,e,o,h=1,d)=>{const{theme:n}=V.useContext($),u=n.colors.background.default,a=n.colors.primary+"33";let p=v.black_06,c=n.colors.border.default,s=u,l=u;const t=ue(r,e,o,d);switch(r>e&&(s=a,l=a),r===e&&(s=a),e===0&&(s="transparent"),e===h-1&&(l="transparent"),t){case"current":{p=n.colors.primary,c=n.colors.background.tonal;break}case"completed":{p=n.colors.primary,c=n.colors.background.tonal;break}case"error":{p=n.colors.error.primary,c=n.colors.error.container;break}case"disable":{p=v.pink_08,c=v.pink_10;break}}return{backgroundColor:p,borderColor:c,lineColorLeft:s,lineColorRight:l,status:t}},fe=({steps:r,size:e,activeIndex:o,useNumber:h=!1,align:d="center",customIcon:n,onPress:u,disabled:a,accessibilityLabel:p="steps-horizontal"})=>{const c=(l,t)=>{const{title:f,description:S,error:_,time:g}=l;let w=he(o,t,_,e,"horizontal");const{theme:q}=V.useContext($);let I="center",y="center";d==="left"?(I="flex-start",y="left"):d==="right"?(I="flex-end",y="right"):d==="stretch"&&(t===0?(I="flex-start",y="left"):t===r.length-1&&(y="right",I="flex-end"));const C=t!==r.length-1&&d!=="center"&&d!=="stretch";return i.jsxs(de,{style:{flex:1,alignItems:I,marginRight:C?x.XS:0},disabled:a||!u,onPress:()=>u&&u(l,t),accessibilityLabel:`${p}-touch-${t}`,children:[!!g&&i.jsx(T,{style:{textAlign:y},color:a?q.colors.text.disable:w.time.color,typography:w.time.typography,accessibilityLabel:`${p}-time-${t}`,children:g}),s(l,t,d,a),!!f&&i.jsx(T,{style:[b.title,{textAlign:y}],color:a?q.colors.text.disable:w.title.color,typography:w.title.typography,accessibilityLabel:`${p}-title-${t}`,children:f}),!!S&&i.jsx(T,{style:{textAlign:y},color:a?q.colors.text.disable:w.description.color,typography:w.description.typography,accessibilityLabel:`${p}-description-${t}`,children:S})]},`Step ${t}`)},s=(l,t,f="center",S)=>{const{error:_}=l,g=me(o,t,_,r.length,S),{backgroundColor:w,borderColor:q,lineColorRight:I,lineColorLeft:y}=g,C=f==="stretch"&&t===0||f==="left",H=f==="stretch"&&t===r.length-1||f==="right";return i.jsxs(m,{style:b.rowStep,children:[!C&&i.jsx(m,{style:[b.lineHorizontal,b.radiusRight,{backgroundColor:y}]}),i.jsx(E,{size:e,error:_,backgroundColor:S?v.pink_08:w,borderColor:S?v.pink_10:q,style:{marginRight:H?0:x.XS,marginLeft:C?0:x.XS,marginVertical:x.XS},index:t,useNumber:h,isActive:o===t,customIcon:n}),!H&&i.jsx(m,{style:[b.lineHorizontal,b.radiusLeft,{backgroundColor:I}]})]})};return i.jsx(m,{style:{flexDirection:"row"},children:r.map((l,t)=>c(l,t))})};fe.__docgenInfo={description:"",methods:[],displayName:"StepsHorizontal",props:{horizontal:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the steps are laid out in a horizontal manner.\nIf `false`, the steps are laid out vertically.\nDefaults to `false` (vertical) if not provided."},steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}}],raw:"Step[]"},description:"An array of `Step` items representing each individual step in the sequence.\nEach `Step` has its own set of properties such as title, description, etc."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:`Optional. Specifies the size of the steps. Affects all step items within the component.
If not provided, a default size is used.`},activeIndex:{required:!0,tsType:{name:"number"},description:`The index of the currently active step within the steps sequence,
starting from 0 for the first step.`},useNumber:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step numbers are displayed within the step icons.",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Optional. Specifies the alignment of the steps within the component.",defaultValue:{value:"'center'",computed:!1}},customIcon:{required:!1,tsType:{name:"string"},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Step, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the user won't be able to interact with the Steps component."},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'steps-horizontal'",computed:!1}}}};const ge=({steps:r,activeIndex:e,size:o,useNumber:h=!1,onPress:d,disabled:n,accessibilityLabel:u="steps-vertical"})=>{const{theme:a}=V.useContext($),p=(c,s)=>{const{error:l,description:t,title:f,time:S}=c,_=me(e,s,l,r.length),g=he(e,s,l,o,"vertical"),{backgroundColor:w,borderColor:q}=_,I=e>s?a.colors.primary+"33":a.colors.background.default,y=()=>typeof t=="string"?i.jsx(T,{color:n?a.colors.text.disable:g.title.color,typography:g.description.typography,accessibilityLabel:`${u}-description-${s}`,children:t}):t;return i.jsxs(de,{style:{flexDirection:"row",marginBottom:x.XS},disabled:n||!d,onPress:()=>d&&d(c,s),accessibilityLabel:`${u}-touch-${s}`,children:[i.jsxs(m,{style:{alignItems:"center",marginRight:x.M,minHeight:48},children:[i.jsx(E,{size:o,error:l,backgroundColor:n?v.pink_08:w,borderColor:n?v.pink_10:q,useNumber:h,index:s,isActive:e===s}),s!==r.length-1&&i.jsx(m,{style:[b.lineVertical,{backgroundColor:I,marginVertical:x.XS}]})]}),i.jsxs(m,{style:{flex:1},children:[i.jsxs(m,{style:{flexDirection:"row",justifyContent:"space-between"},children:[i.jsx(T,{numberOfLines:2,style:{marginRight:x.S,flex:1},color:n?a.colors.text.disable:g.title.color,typography:g.title.typography,accessibilityLabel:`${u}-title-${s}`,children:f}),i.jsx(T,{color:n?a.colors.text.disable:g.time.color,typography:g.time.typography,accessibilityLabel:`${u}-time-${s}`,children:S})]}),y()]})]},`Step ${s}`)};return i.jsx(m,{style:{width:"100%"},children:r.map((c,s)=>p(c,s))})};ge.__docgenInfo={description:"",methods:[],displayName:"StepsVertical",props:{horizontal:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the steps are laid out in a horizontal manner.\nIf `false`, the steps are laid out vertically.\nDefaults to `false` (vertical) if not provided."},steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}}],raw:"Step[]"},description:"An array of `Step` items representing each individual step in the sequence.\nEach `Step` has its own set of properties such as title, description, etc."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:`Optional. Specifies the size of the steps. Affects all step items within the component.
If not provided, a default size is used.`},activeIndex:{required:!0,tsType:{name:"number"},description:`The index of the currently active step within the steps sequence,
starting from 0 for the first step.`},useNumber:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step numbers are displayed within the step icons.",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Optional. Specifies the alignment of the steps within the component."},customIcon:{required:!1,tsType:{name:"string"},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Step, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the user won't be able to interact with the Steps component."},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'steps-vertical'",computed:!1}}}};const ye=({horizontal:r=!1,...e})=>i.jsx(m,{children:r?i.jsx(fe,{...e}):i.jsx(ge,{...e})});ye.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{horizontal:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the steps are laid out in a horizontal manner.\nIf `false`, the steps are laid out vertically.\nDefaults to `false` (vertical) if not provided.",defaultValue:{value:"false",computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}}],raw:"Step[]"},description:"An array of `Step` items representing each individual step in the sequence.\nEach `Step` has its own set of properties such as title, description, etc."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:`Optional. Specifies the size of the steps. Affects all step items within the component.
If not provided, a default size is used.`},activeIndex:{required:!0,tsType:{name:"number"},description:`The index of the currently active step within the steps sequence,
starting from 0 for the first step.`},useNumber:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the step numbers are displayed within the step icons."},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'stretch'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Optional. Specifies the alignment of the steps within the component."},customIcon:{required:!1,tsType:{name:"string"},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Step, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * The title of the step, briefly describing the purpose or task of this stage.
   */
  title: string;

  /**
   * Optional. More detailed text about this particular step.
   * It can provide users with guidance on what to expect or what's required.
   */
  description?: string | React.ReactNode;

  /**
   * Optional. If \`true\`, the step is marked as having an error, typically displayed
   * with an error icon and error styles. Defaults to \`false\` if not provided.
   */
  error?: boolean;

  /**
   * Optional. A string representing the time associated with this step.
   * It could be the duration, a specific time, or date, depending on the context.
   */
  time?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the step, briefly describing the purpose or task of this stage."},{key:"description",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:`Optional. More detailed text about this particular step.
It can provide users with guidance on what to expect or what's required.`},{key:"error",value:{name:"boolean",required:!1},description:"Optional. If `true`, the step is marked as having an error, typically displayed\nwith an error icon and error styles. Defaults to `false` if not provided."},{key:"time",value:{name:"string",required:!1},description:`Optional. A string representing the time associated with this step.
It could be the duration, a specific time, or date, depending on the context.`}]}},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. If `true`, the step descriptions are displayed below the step titles."},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the user won't be able to interact with the Steps component."},accessibilityLabel:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Library/Steps",component:ye,parameters:{layout:"centered"},tags:["autodocs"]},k=[{title:"Step 1",description:"This is the first step",time:"10:00 AM"},{title:"Step 2",description:"This is the second step",time:"10:30 AM"},{title:"Step 3",description:"This is the third step",time:"11:00 AM"}],j={args:{steps:k,activeIndex:0}},N={args:{steps:k,activeIndex:1,horizontal:!0}},z={args:{steps:k,activeIndex:2,useNumber:!0}},A={args:{steps:k,activeIndex:0,size:"small"}},D={args:{steps:[...k.slice(0,2),{...k[2],error:!0}],activeIndex:2}},L={args:{steps:k,activeIndex:1,align:"center"}},M={args:{steps:k,activeIndex:0,disabled:!0}};var B,P,F;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0
  }
}`,...(F=(P=j.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var U,G,J;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    horizontal: true
  }
}`,...(J=(G=N.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 2,
    useNumber: true
  }
}`,...(Y=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0,
    size: 'small'
  }
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ie,ne;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    steps: [...defaultSteps.slice(0, 2), {
      ...defaultSteps[2],
      error: true
    }],
    activeIndex: 2
  }
}`,...(ne=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var se,ae,oe;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 1,
    align: 'center'
  }
}`,...(oe=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,pe,ce;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    activeIndex: 0,
    disabled: true
  }
}`,...(ce=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const qe=["Default","Horizontal","WithNumbers","Small","WithError","CenterAligned","Disabled"];export{L as CenterAligned,j as Default,M as Disabled,N as Horizontal,A as Small,D as WithError,z as WithNumbers,qe as __namedExportsOrder,ke as default};
