import{fn as te}from"./index-BgJgh-x_.js";import{A as ne,u as se,j as le,M as ce,p as a,E as ie,q as pe,r as de,F as ue,i as m,I as j,T as ge}from"./styles-DZKIi-Hd.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as me}from"./index-DI7CEG0L.js";import{V as n}from"./index-BzmpT3sc.js";const fe=({value:f,floatingValue:J,floatingIcon:K,onPressFloatingIcon:Q,size:h="small",placeholder:S,errorMessage:y,disabled:r=!1,floatingIconColor:U,required:X=!1,errorSpacing:Y,leadingIcon:x,leadingIconColor:Z,style:ee,params:oe,hintText:ae,multiline:s,...V})=>{const{theme:t}=me.useContext(ne),b="InputDropDown",{componentId:o}=se(`${b}/${S}`,V.accessibilityLabel),re=()=>{const D=t.colors.text.disable;let w=t.colors.text.default,I=t.colors.text.hint;return r&&(w=D,I=D),e.jsxs(n,{style:[a.inputDropDownWrapper,{backgroundColor:t.colors.background.surface},pe(h,s),de(t,!1,y,r)],children:[e.jsx(ue,{floatingValue:J,floatingIconColor:U,disabled:r,required:X,floatingIcon:K,onPress:Q,componentId:o}),e.jsxs(n,{style:a.inputDropDownView,children:[!!x&&e.jsx(n,{style:[a.leadingIconContainerDropDown,{marginTop:m.M,marginRight:m.S}],children:e.jsx(j,{color:Z,source:x,size:h==="small"?24:32,accessibilityLabel:`${o}|leading-icon`})}),e.jsx(n,{style:a.textViewDropDown,children:e.jsx(ge,{numberOfLines:s?void 0:1,typography:"body_default_regular",color:f?w:I,accessibilityState:{disabled:r},accessibilityLabel:`${o}`,children:f||S})})]}),e.jsx(n,{style:[a.iconViewDropDown,{alignItems:s?"flex-start":"center",paddingTop:s?m.M:0}],children:e.jsx(j,{source:"arrow_chevron_down_small"})})]})};return e.jsx(le.Provider,{value:{componentName:b,componentId:o,params:oe,state:"enabled"},children:e.jsxs(ce,{...V,accessibilityLabel:`${o}|touch`,accessibilityState:{disabled:r},activeOpacity:.6,style:[ee,a.wrapper],children:[re(),e.jsx(ie,{errorMessage:y,errorSpacing:Y,hintText:ae,componentId:o})]})})},be={title:"Foundation/InputDropDown",component:fe,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:te()}},l={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",size:"large"}},c={args:{placeholder:"Select a country",floatingValue:"Country",value:"Vietnam",leadingIcon:"globe",size:"large"}},i={args:{placeholder:"Select a category",floatingValue:"Category",value:"Electronics",floatingIcon:"info",size:"large"}},p={args:{placeholder:"Select an option",floatingValue:"Required Field",errorMessage:"Please select an option",size:"large"}},d={args:{placeholder:"Select an option",floatingValue:"Options",required:!0,size:"large"}},u={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",size:"small"}},g={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",disabled:!0,size:"large"}};var z,C,v;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    size: 'large'
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var O,E,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a country',
    floatingValue: 'Country',
    value: 'Vietnam',
    leadingIcon: 'globe',
    size: 'large'
  }
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var F,L,W;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a category',
    floatingValue: 'Category',
    value: 'Electronics',
    floatingIcon: 'info',
    size: 'large'
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,R,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Required Field',
    errorMessage: 'Please select an option',
    size: 'large'
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var P,T,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    required: true,
    size: 'large'
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var k,A,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    size: 'small'
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var N,G,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    disabled: true,
    size: 'large'
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const De=["Default","WithLeadingIcon","WithFloatingIcon","WithError","Required","Small","Disabled"];export{l as Default,g as Disabled,d as Required,u as Small,p as WithError,i as WithFloatingIcon,c as WithLeadingIcon,De as __namedExportsOrder,be as default};
