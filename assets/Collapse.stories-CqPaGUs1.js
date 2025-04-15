import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as he,r as O}from"./index-DI7CEG0L.js";import{x as me,s as d,r as l,A as fe,M as ge,e as ye,z as be,T as z,E as xe,w as D,I as _,y as a,q as ve}from"./styles-CyDUY6mG.js";import{U as Te,s as we,V as o}from"./index-BzmpT3sc.js";function p(i,t){me.isTesting||Te.configureNextLayoutAnimation(i,t??function(){},function(){})}function S(i,t,c){return{duration:i,create:{type:t,property:c},update:{type:t},delete:{type:t,property:c}}}var u={easeInEaseOut:S(300,"easeInEaseOut","opacity"),linear:S(500,"linear","opacity"),spring:{duration:700,create:{type:"linear",property:"opacity"},update:{type:"spring",springDamping:.4},delete:{type:"linear",property:"opacity"}}},h={configureNext:p,create:S,Types:Object.freeze({spring:"spring",linear:"linear",easeInEaseOut:"easeInEaseOut",easeIn:"easeIn",easeOut:"easeOut",keyboard:"keyboard"}),Properties:Object.freeze({opacity:"opacity",scaleX:"scaleX",scaleY:"scaleY",scaleXY:"scaleXY"}),checkConfig(){console.error("LayoutAnimation.checkConfig(...) has been disabled.")},Presets:u,easeInEaseOut:p.bind(null,u.easeInEaseOut),linear:p.bind(null,u.linear),spring:p.bind(null,u.spring)};const r=we.create({image:{borderRadius:d.XS,marginRight:l.S},header:{flexDirection:"row",paddingHorizontal:l.M,paddingVertical:l.S,borderRadius:d.S},headerContent:{flex:1,flexDirection:"row",justifyContent:"space-between"},infoWrap:{maxWidth:200,alignItems:"flex-end",marginLeft:l.S},flex2:{flex:2},iconWrapper:{width:24,height:24,borderRadius:d.M,justifyContent:"center",alignItems:"center",marginLeft:l.S},icon:{marginLeft:l.S},root:{borderRadius:d.S,overflow:"hidden"}}),K=he.forwardRef(({image:i,title:t="Title",description:c,onPress:x,showBorder:Q,children:C,imageSize:j=24,subTitle:I,tagProps:q,scrollEnabled:v=!1,scrollContentMaxHeight:Z=240,titleSize:ee="medium",useBackgroundCollapseButton:te=!1,headerAlign:W="flex-start",expandDefault:ne=!1,disabledAnimated:k=!1},ae)=>{const{theme:s}=O.useContext(fe),[n,V]=O.useState(ne),R=n?"arrow_chevron_up_small":"arrow_chevron_down_small",T=Q?1:0,w=s.colors.border.default,re=s.colors.background.surface,ie=()=>{switch(ee){case"small":return{fontSize:a(14),lineHeight:a(20)};case"medium":return{fontSize:a(16),lineHeight:a(22)};case"large":return{fontSize:a(18),lineHeight:a(26)};default:return{fontSize:a(14),lineHeight:a(20)}}};O.useImperativeHandle(ae,()=>({setExpanded:V,expanded:n}));const se=()=>I?e.jsx(z,{numberOfLines:1,typography:"body_default_regular",children:I}):q?e.jsx(ve,{...q}):null,le=()=>{x==null||x(n),h.configureNext({duration:300,create:{type:h.Types.easeInEaseOut,property:h.Properties.opacity},update:{type:h.Types.easeInEaseOut}}),V(!n)},oe=()=>te?e.jsx(o,{style:[r.iconWrapper,{backgroundColor:s.colors.background.tonal}],children:e.jsx(_,{color:s.colors.primary,source:R})}):e.jsx(_,{source:R,style:r.icon}),ce=()=>e.jsxs(ge,{activeOpacity:1,onPress:le,style:[r.header,{alignItems:W}],children:[!!i&&e.jsx(ye,{source:{uri:i},style:[r.image,{width:j,height:j}]}),e.jsxs(o,{style:[r.headerContent],children:[e.jsxs(o,{style:r.flex2,children:[e.jsx(be,{style:[ie(),{fontFamily:`${s.font}-Semibold`,color:s.colors.text.default}],children:t}),!!c&&e.jsx(z,{numberOfLines:2,typography:"body_default_regular",children:c})]}),e.jsx(o,{style:[r.infoWrap,{justifyContent:W}],children:se()})]}),oe()]}),de=()=>{if(v){const ue=k?xe:D.ScrollView;return e.jsx(ue,{scrollEnabled:v,showsVerticalScrollIndicator:!1,style:[v&&{maxHeight:Z},n&&{borderTopWidth:T,borderColor:w}],children:n&&C})}const pe=k?o:D.View;return e.jsx(pe,{style:[n&&{borderTopWidth:T,borderColor:w}],children:n&&C})};return e.jsxs(o,{style:[r.root,{borderWidth:T,borderColor:w,backgroundColor:re}],children:[ce(),de()]})});K.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{title:{required:!1,tsType:{name:"string"},description:`The title represents what is being collapsed or expanded. It is usually a summary or
a brief heading corresponding to the detailed content that gets revealed.`,defaultValue:{value:"'Title'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:`Optional. A more detailed explanation or continuation of the title. This text provides
additional context or information, which is particularly useful when the collapsed content
is not immediately visible or requires extra explanation.`},image:{required:!1,tsType:{name:"string"},description:`Optional. The URL or local file path of an image to be displayed. This feature is often
used to provide a visual context or decoration, enhancing user engagement or understanding
of the information being toggled.`},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(isExpanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isExpanded"}],return:{name:"void"}}},description:`Optional. A callback function that is triggered when the collapse component is pressed or
selected. This function is typically used to toggle the view state of the collapsible content.
Add isExpanded as a parameter to know the current state of the collapse, for tracking.`},showBorder:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, a border is displayed around the collapse component, visually separating\nit from other UI elements. This is particularly useful in densely packed interfaces to delineate\nbetween different sections.\nDefaults to `false` if not provided."},imageSize:{required:!1,tsType:{name:"union",raw:"24 | 32 | 40",elements:[{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"40"}]},description:"",defaultValue:{value:"24",computed:!1}},subTitle:{required:!1,tsType:{name:"string"},description:""},tagProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * \`label\`: Represents the text label displayed on the Tag component.
   */
  label: string;

  /**
   * \`size\`: Optional. Defines the size of the Tag component.
   * Defaults to 'medium' if not provided.
   */
  size?: 'medium' | 'large';

  /**
   * \`icon\`: Optional. Represents the name or key of the icon to be displayed in the Tag component.
   */
  icon?: string;

  /**
   * \`color\`: Optional. Defines the color style of the Tag component.
   */
  color?: 'default' | 'orange' | 'green' | 'red' | 'blue' | 'grey';

  /**
   * \`style\`: Optional. Used to apply custom styling to the Tag component.
   * Accepts an object of style properties.
   */
  style?: ViewStyle;

  /**
   * \`customColor\`: Optional. Represents a custom color string (e.g., hex, rgb, rgba, etc.)
   * that can be applied to the Tag component.
   */
  customColor?: string;

  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
   * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
   */
  accessibilityLabelContainer?: string;

  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
   * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
   */
  accessibilityLabelText?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"`label`: Represents the text label displayed on the Tag component."},{key:"size",value:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},description:"`size`: Optional. Defines the size of the Tag component.\nDefaults to 'medium' if not provided."},{key:"icon",value:{name:"string",required:!1},description:"`icon`: Optional. Represents the name or key of the icon to be displayed in the Tag component."},{key:"color",value:{name:"union",raw:"'default' | 'orange' | 'green' | 'red' | 'blue' | 'grey'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'grey'"}],required:!1},description:"`color`: Optional. Defines the color style of the Tag component."},{key:"style",value:{name:"ViewStyle",required:!1},description:"`style`: Optional. Used to apply custom styling to the Tag component.\nAccepts an object of style properties."},{key:"customColor",value:{name:"string",required:!1},description:"`customColor`: Optional. Represents a custom color string (e.g., hex, rgb, rgba, etc.)\nthat can be applied to the Tag component."},{key:"accessibilityLabelContainer",value:{name:"string",required:!1},description:`Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.`},{key:"accessibilityLabelText",value:{name:"string",required:!1},description:`Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.`}]}},description:""},scrollEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},scrollContentMaxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},titleSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},useBackgroundCollapseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},headerAlign:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'flex-end' | 'center'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'flex-start'",computed:!1}},expandDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabledAnimated:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, the collapse component will not use Animated.View for the transition\neffect when expanding or collapsing. This is useful when the component is nested within\nanother collapsible component that already has an animated transition effect.\nCan be use to fix the iseue: If WebView is the children of Collapse, the WebView will be blank when collapse is expanded.\nDefaults to `false` if not provided.",defaultValue:{value:"false",computed:!1}}}};const Ie={title:"Library/Collapse",component:K,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{title:"Default Collapse",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},f={args:{title:"With Description",description:"This is a description for the collapse component",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},g={args:{title:"With Image",image:"https://via.placeholder.com/40",imageSize:40,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},y={args:{title:"With Border",showBorder:!0,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},b={args:{title:"With Scroll",scrollEnabled:!0,scrollContentMaxHeight:200,children:e.jsx("div",{style:{padding:"20px"},children:Array.from({length:10},(i,t)=>e.jsxs("div",{style:{marginBottom:"10px"},children:["Scrollable content ",t+1]},t))})}};var B,E,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Default Collapse',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,H,M;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'With Description',
    description: 'This is a description for the collapse component',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,U,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'With Image',
    image: 'https://via.placeholder.com/40',
    imageSize: 40,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var X,Y,F;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'With Border',
    showBorder: true,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(F=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var $,G,J;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'With Scroll',
    scrollEnabled: true,
    scrollContentMaxHeight: 200,
    children: <div style={{
      padding: '20px'
    }}>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} style={{
        marginBottom: '10px'
      }}>
            Scrollable content {i + 1}
          </div>)}
      </div>
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const qe=["Default","WithDescription","WithImage","WithBorder","WithScroll"];export{m as Default,y as WithBorder,f as WithDescription,g as WithImage,b as WithScroll,qe as __namedExportsOrder,Ie as default};
