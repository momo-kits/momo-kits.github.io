import{fn as f}from"./index-BgJgh-x_.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DI7CEG0L.js";import{k as q,l as h,f as _,A as J,M as $,I as ee,u as ae}from"./styles-Dd_0X69m.js";import{s as te,V as K}from"./index-BzmpT3sc.js";const m=te.create({button:{width:36,height:36,borderRadius:h.XL,backgroundColor:_.black_03,justifyContent:"center",alignItems:"center"},smallButton:{width:28,height:28,borderRadius:h.L,backgroundColor:_.black_03,justifyContent:"center",alignItems:"center"},iconWrapper:{width:22,height:22,borderWidth:2,borderRadius:h.M,justifyContent:"center",alignItems:"center"},stepper:{flexDirection:"row",alignItems:"center"},numberView:{width:32,height:28,borderWidth:1,borderRadius:h.S,justifyContent:"center",alignItems:"center",marginHorizontal:q.S},numberViewSmall:{width:28,height:24,borderWidth:1,borderRadius:h.S,justifyContent:"center",alignItems:"center",marginHorizontal:q.S},input:{fontSize:12,paddingVertical:0,textAlign:"center"}}),I=({disabled:n=!1,sign:l="+",size:o="large",onPress:i})=>{const{theme:e}=c.useContext(J),t=o==="large"?m.button:m.smallButton,g=l==="-"?"24_navigation_minus_circle":"24_navigation_plus_circle",u=n?e.colors.text.disable:e.colors.primary;return s.jsx($,{disabled:n,onPress:i,style:[t],children:s.jsx(ee,{size:22,color:u,source:g})})};I.__docgenInfo={description:"",methods:[],displayName:"StepperButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the button is disabled and not interactive.\nDefaults to `false` if not provided.",defaultValue:{value:"false",computed:!1}},sign:{required:!1,tsType:{name:"union",raw:"'+' | '-'",elements:[{name:"literal",value:"'+'"},{name:"literal",value:"'-'"}]},description:"Determines the button's function in the stepper, either increment ('+') or decrement ('-').",defaultValue:{value:"'+'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"Optional. Specifies the size of the button. If not provided, a default size is used.",defaultValue:{value:"'large'",computed:!1}},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A callback function that is triggered when the button is pressed."}}};const Q=({value:n=0,size:l="large",editable:o=!1,onValueChange:i,disabled:e})=>{const{theme:t}=c.useContext(J),g=l==="large"?m.numberView:m.numberViewSmall,u=p=>isNaN(p)?"0":p.toString(),x=e?t.colors.text.disable:t.colors.text.default,d=e?t.colors.border.disable:t.colors.border.default;return s.jsx(K,{style:[g,{borderColor:d}],children:s.jsx(ae,{editable:o,style:[m.input,{color:x}],value:u(n),onChangeText:i,keyboardType:"number-pad",selectionColor:t.colors.primary})})};Q.__docgenInfo={description:"",methods:[],displayName:"NumberView",props:{value:{required:!1,tsType:{name:"number"},description:"The current numeric value displayed by the stepper.",defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the value display is disabled and not interactive.\nDefaults to `false` if not provided."},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"Optional. Specifies the size of the value display. If not provided, a default size is used.",defaultValue:{value:"'large'",computed:!1}},editable:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the value display is editable, and users can input values directly.\nDefaults to `false` if not provided.",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Optional. A callback function that is triggered when the value changes, receiving the new value as a parameter."}}};const U=c.forwardRef(({size:n="large",defaultValue:l=0,min:o=0,max:i=100,disabled:e=!1,step:t=1,editable:g=!1,onValueChange:u},x)=>{const[d,p]=c.useState(l);c.useImperativeHandle(x,()=>({setStepValue:a=>{p(a),b(a.toString())}})),c.useEffect(()=>{p(l)},[l]);const Y=()=>{let a=d+t;b(a.toString())},Z=()=>{let a=d-t;b(a.toString())},b=a=>{let r=parseInt(a);isNaN(r)&&(r=0),r>i&&(r=i),r<o&&(r=o),p(r),u==null||u(r)},T=(()=>{let a;return Array.isArray(e)?a={plus:e[1],minus:e[0],number:e[0]&&e[1]}:a={plus:e,minus:e,number:e},d===o&&(a.minus=!0),d===i&&(a.plus=!0),a})();return s.jsxs(K,{style:m.stepper,children:[s.jsx(I,{onPress:Z,sign:"-",size:n,disabled:T.minus}),s.jsx(Q,{onValueChange:b,size:n,value:d,disabled:T.number,editable:g}),s.jsx(I,{onPress:Y,size:n,disabled:T.plus})]})});U.__docgenInfo={description:"",methods:[{name:"setStepValue",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}],alias:"React.SetStateAction"}}],returns:null}],displayName:"Stepper",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"The initial value when the stepper is first rendered.",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Optional. The minimum allowable value for the stepper. If not provided, there is no minimum.",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Optional. The maximum allowable value for the stepper. If not provided, there is no maximum.",defaultValue:{value:"100",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | boolean[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:`Optional. Specifies whether the entire stepper control or specific parts are disabled.
Can be a single boolean (to disable all) or an array of booleans (to control individual components).`,defaultValue:{value:"false",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Optional. The step increment used for each button press. Defaults to 1 if not provided.",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"Optional. Specifies the size of the stepper components. If not provided, a default size is used.",defaultValue:{value:"'large'",computed:!1}},editable:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the value display is editable, and users can input values directly.\nDefaults to `false` if not provided.",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Optional. A callback function that is triggered when the stepper's value changes, receiving the new value as a parameter."},style:{required:!1,tsType:{name:"union",raw:"ViewStyle | ViewStyle[]",elements:[{name:"ViewStyle"},{name:"Array",elements:[{name:"ViewStyle"}],raw:"ViewStyle[]"}]},description:"Optional. Custom styles to apply to the Stepper component. Can be used to adjust the visual presentation or layout."}}};const ue={title:"Library/Stepper",component:U,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{defaultValue:0,onValueChange:f()}},v={args:{defaultValue:5,min:0,max:10,onValueChange:f()}},V={args:{defaultValue:0,step:2,onValueChange:f()}},S={args:{defaultValue:0,size:"small",onValueChange:f()}},w={args:{defaultValue:5,disabled:!0,onValueChange:f()}},C={args:{defaultValue:5,editable:!0,onValueChange:f()}};var j,O,z;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    onValueChange: fn()
  }
}`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var A,D,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    onValueChange: fn()
  }
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var k,N,M;V.parameters={...V.parameters,docs:{...(k=V.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    step: 2,
    onValueChange: fn()
  }
}`,...(M=(N=V.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var W,E,B;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    size: 'small',
    onValueChange: fn()
  }
}`,...(B=(E=S.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var P,H,L;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    disabled: true,
    onValueChange: fn()
  }
}`,...(L=(H=w.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var X,F,G;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    editable: true,
    onValueChange: fn()
  }
}`,...(G=(F=C.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const de=["Default","WithMinMax","WithCustomStep","Small","Disabled","Editable"];export{y as Default,w as Disabled,C as Editable,S as Small,V as WithCustomStep,v as WithMinMax,de as __namedExportsOrder,ue as default};
