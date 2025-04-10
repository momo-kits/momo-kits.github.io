import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as J}from"./index-DI7CEG0L.js";import{r,y as a,s as m,A as K,M as Q,k as U,I as w,T as Y}from"./styles-B2Jwh0LJ.js";import{s as Z,V as T}from"./index-BzmpT3sc.js";const o=Z.create({chip:{borderRadius:m.L,paddingHorizontal:r.S,height:a(32),justifyContent:"center",alignItems:"center",flexDirection:"row"},smallChip:{borderRadius:m.L,paddingHorizontal:r.S,height:a(24),justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2,borderRadius:m.L},imageSmall:{width:a(16),height:a(16),marginRight:r.XS},icon:{marginLeft:r.XS},wrapper:{flexDirection:"row"}}),E=({label:d="Label",iconLeft:h,iconRight:u,selected:f=!1,style:X,onPress:H,size:M="large",iconLeftColor:N,iconRightColor:P,itemContainerStyle:B})=>{const{theme:e}=J.useContext(K);let g=e.colors.text.default,y=U.black_03,C=N,b=P;f&&(g=e.colors.primary,y=e.colors.background.selected,C=e.colors.primary,b=e.colors.primary);let S="label_default_medium",x=o.chip,p=20;M==="small"&&(x=o.smallChip,p=16,S="label_s_medium");const G=()=>t.jsx(T,{style:[o.chipOverlay,{borderColor:e.colors.secondary}]});return t.jsx(T,{style:[X,o.wrapper],children:t.jsxs(Q,{onPress:H,style:[B,x,{backgroundColor:y}],children:[!!h&&t.jsx(w,{source:h,color:C,size:p,style:{...o.imageSmall,marginRight:d?r.XS:0}}),d&&t.jsx(Y,{typography:S,color:g,children:d}),!!u&&t.jsx(w,{source:u,color:b,size:p,style:o.icon}),f&&G()]})})};E.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!1,tsType:{name:"string"},description:"The text to be displayed on the chip. This is typically a brief piece of information like a tag.",defaultValue:{value:"'Label'",computed:!1}},iconLeft:{required:!1,tsType:{name:"string"},description:`Optional. The name of the icon to be displayed on the left side of the chip's label.
If not provided, no icon is rendered on the left.`},iconRight:{required:!1,tsType:{name:"string"},description:`Optional. The name of the icon to be displayed on the right side of the chip's label.
If not provided, no icon is rendered on the right.`},selected:{required:!1,tsType:{name:"boolean"},description:"Optional. Indicates whether the chip is selected. A selected chip may have a different style or icon.\nDefaults to `false` if not provided.",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"ViewStyle | ViewStyle[]",elements:[{name:"ViewStyle"},{name:"Array",elements:[{name:"ViewStyle"}],raw:"ViewStyle[]"}]},description:"Optional. Custom styles to apply to the Chip component. Can be a single style or an array of styles."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional. A callback function triggered when the chip is pressed. This makes the chip act as a touchable element."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:`Optional. Specifies the size of the chip, influencing its padding and font size. Can be 'small' or 'large'.
If not provided, a standard size is used.`,defaultValue:{value:"'large'",computed:!1}},iconLeftColor:{required:!1,tsType:{name:"string"},description:"Optional. Specifies the color of the left icon. If not provided, a default icon color may be used."},iconRightColor:{required:!1,tsType:{name:"string"},description:"Optional. Specifies the color of the right icon. If not provided, a default icon color may be used."},itemContainerStyle:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const re={title:"Library/Chip",component:E,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{label:"Default Chip"}},i={args:{label:"With Icons",iconLeft:"search",iconRight:"close"}},l={args:{label:"Selected Chip",selected:!0}},n={args:{label:"Small Chip",size:"small"}},c={args:{label:"Custom Colors",iconLeft:"star",iconRight:"star",iconLeftColor:"#FFD700",iconRightColor:"#FFD700"}};var v,I,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,z,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    iconLeft: 'search',
    iconRight: 'close'
  }
}`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,V,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Selected Chip',
    selected: true
  }
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,_,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'small'
  }
}`,...(F=(_=n.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var k,W,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    iconLeft: 'star',
    iconRight: 'star',
    iconLeftColor: '#FFD700',
    iconRightColor: '#FFD700'
  }
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const ae=["Default","WithIcons","Selected","Small","WithCustomColors"];export{s as Default,l as Selected,n as Small,c as WithCustomColors,i as WithIcons,ae as __namedExportsOrder,re as default};
