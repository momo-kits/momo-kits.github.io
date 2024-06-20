(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[53409],{82891:(e,t,n)=>{"use strict";n.d(t,{A:()=>N});var a=n(74892),r=n(77672),l=n(58168),i=n(53053),o=n(33504),d=n(4930);const p=o.A.create({button:{width:36,height:36,borderRadius:d.TI.XL,backgroundColor:d.Jy.black_03,justifyContent:"center",alignItems:"center"},smallButton:{width:28,height:28,borderRadius:d.TI.L,backgroundColor:d.Jy.black_03,justifyContent:"center",alignItems:"center"},iconWrapper:{width:22,height:22,borderWidth:2,borderRadius:d.TI.M,justifyContent:"center",alignItems:"center"},stepper:{flexDirection:"row",alignItems:"center"},numberView:{width:32,height:28,borderWidth:1,borderRadius:d.TI.S,justifyContent:"center",alignItems:"center",marginHorizontal:d.Kz.S},numberViewSmall:{width:28,height:24,borderWidth:1,borderRadius:d.TI.S,justifyContent:"center",alignItems:"center",marginHorizontal:d.Kz.S},input:{fontSize:12,paddingVertical:0,textAlign:"center"}});const s=function(e){var t=e.disabled,n=void 0!==t&&t,r=e.sign,o=void 0===r?"+":r,s=e.size,m=void 0===s?"large":s,u=e.onPress,g=e.accessibilityID,c=(0,a.useContext)(d.gD).theme,y="large"===m?p.button:p.smallButton,b="-"===o?"24_navigation_minus_circle":"24_navigation_plus_circle",N=n?c.colors.text.disable:c.colors.primary;return a.createElement(i.A,(0,l.A)({},g,{disabled:n,onPress:u,style:[y]}),a.createElement(d.In,{size:22,color:N,source:b}))};var m=n(86870);const u=function(e){var t=e.value,n=void 0===t?0:t,l=e.size,i=void 0===l?"large":l,o=e.editable,s=void 0!==o&&o,u=e.onValueChange,g=e.disabled,c=(0,a.useContext)(d.gD).theme,y="large"===i?p.numberView:p.numberViewSmall,b=g?c.colors.text.disable:c.colors.text.default,N=g?c.colors.border.disable:c.colors.border.default;return a.createElement(r.A,{style:[y,{borderColor:N}]},a.createElement(m.A,{editable:s,style:[p.input,{color:b}],value:function(e){return isNaN(e)?"0":e.toString()}(n),onChangeText:u,keyboardType:"number-pad",selectionColor:c.colors.primary}))};var g=function(e){var t,n=e.size,l=void 0===n?"large":n,i=e.defaultValue,o=void 0===i?0:i,m=e.min,g=void 0===m?0:m,c=e.max,y=void 0===c?100:c,b=e.disabled,N=void 0!==b&&b,h=e.step,v=void 0===h?1:h,f=e.editable,C=void 0!==f&&f,w=e.onValueChange,S=(0,a.useState)(o),A=S[0],x=S[1],k=function(e){var t=parseInt(e);isNaN(t)&&(t=0),t>y&&(t=y),t<g&&(t=g),x(t),null==w||w(t)},I=(t=Array.isArray(N)?{plus:N[1],minus:N[0],number:N[0]&&N[1]}:{plus:N,minus:N,number:N},A===g&&(t.minus=!0),A===y&&(t.plus=!0),t),E=null==d.kF?void 0:(0,d.kF)("ic_stepper_"+A+"_plus"),_=null==d.kF?void 0:(0,d.kF)("ic_stepper_"+A+"_subtract");return a.createElement(r.A,{style:p.stepper},a.createElement(s,{accessibilityID:_,onPress:function(){k((A-v).toString())},sign:"-",size:l,disabled:I.minus}),a.createElement(u,{onValueChange:k,size:l,value:A,disabled:I.number,editable:C}),a.createElement(s,{accessibilityID:E,onPress:function(){k((A+v).toString())},size:l,disabled:I.plus}))},c=n(95412),y=n(93884),b=n(4107);const N=function(){var e=(0,y.A)({componentName:"Stepper",props:{defaultValue:{value:0,type:b.B.Number,description:"Initial value when the stepper is first rendered."},min:{value:void 0,type:b.B.Number,description:"Minimum allowable value for the stepper."},max:{value:void 0,type:b.B.Number,description:"Maximum allowable value for the stepper."},disabled:{value:!1,type:b.B.Boolean,description:"Specifies whether the entire stepper control is disabled."},step:{value:1,type:b.B.Number,description:"Step increment used for each button press."},size:{value:"small",options:["large","small"],type:b.B.Enum,description:"Size of the stepper components."},editable:{value:!1,type:b.B.Boolean,description:"If true, the value display is editable."},onValueChange:{value:"(value) => console.log('Value Changed:', value)",type:b.B.Function,description:"Callback for when the stepper value changes."},style:{value:"{}",type:b.B.Object,description:"Custom styles for the component."}},scope:{Stepper:g},imports:{"@momo-kits/stepper":{named:["Stepper"]}}});return a.createElement(a.Fragment,null,a.createElement(c.A,{params:e}))}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(58168),r=n(74892),l=n(29813),i=n(91906),o=n(76482),d=n(5789),p=n(5641),s=n(10991),m=n(3533);const u=function(e){var t=e.params;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(p.A,t.knobProps),r.createElement(s.A,t.editorProps),r.createElement(d.A,t.errorProps),r.createElement(m.w,t.actions))}))}},87697:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var a=n(58168),r=n(98587),l=(n(74892),n(77264)),i=n(82891),o=["components"],d={id:"stepper",title:"Stepper"},p=void 0,s={unversionedId:"components/stepper",id:"components/stepper",title:"Stepper",description:"Playground",source:"@site/docs/components/Stepper.mdx",sourceDirName:"components",slug:"/components/stepper",permalink:"/docs/next/components/stepper",draft:!1,editUrl:"https://github.com/docs/components/Stepper.mdx",tags:[],version:"current",frontMatter:{id:"stepper",title:"Stepper"},sidebar:"docs",previous:{title:"Slider",permalink:"/docs/next/components/slider"},next:{title:"Uploader",permalink:"/docs/next/components/uploader"}},m={},u=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],g={toc:u},c="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(i.A,{mdxType:"Play"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"defaultValue")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"0")),(0,l.yg)("td",{parentName:"tr",align:null},"The initial value when the stepper is first rendered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabled")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"boolean[]")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies whether the entire stepper control or specific parts are disabled.Can be a single boolean (to disable all) or an array of booleans (to control individual components).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"editable")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the value display is editable, and users can input values directly.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"max")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"100")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. The maximum allowable value for the stepper. If not provided, there is no maximum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"min")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"0")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. The minimum allowable value for the stepper. If not provided, there is no minimum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onValueChange")),(0,l.yg)("td",{parentName:"tr",align:null},"((value: number) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the stepper's value changes, receiving the new value as a parameter.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"size")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the stepper components. If not provided, a default size is used.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"step")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"1")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. The step increment used for each button press. Defaults to 1 if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"style")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the Stepper component. Can be used to adjust the visual presentation or layout."))))))}y.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);