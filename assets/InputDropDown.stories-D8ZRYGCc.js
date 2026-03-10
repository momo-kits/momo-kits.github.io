import{fn as ce}from"./index-AyJqhRyE.js";import{A as pe,M as ue,i as de,u as ge,k as me,l as fe,p as o,E as he,q as Se,r as xe,F as ye,j,I as z,T as Ve}from"./index-CcPzXCq5.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CPl6p-nG.js";import{V as n}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const be=({value:h,floatingValue:U,floatingIcon:X,onPressFloatingIcon:Y,size:m="small",placeholder:S,errorMessage:x,disabled:r=!1,floatingIconColor:Z,required:ee=!1,errorSpacing:oe,leadingIcon:y,leadingIconColor:ae,style:re,params:te,hintText:ne,multiline:s,...V})=>{var D;const{theme:t}=v.useContext(pe),f=v.useContext(ue),se=de(m==="small"?48:56,1.1),b="InputDropDown",le=((D=f==null?void 0:f.features)==null?void 0:D.showBaseLineDebug)??!1,{componentId:a}=ge(`${b}/${S}`,V.accessibilityLabel),ie=()=>{const w=t.colors.text.disable;let C=t.colors.text.default,I=t.colors.text.hint;return r&&(C=w,I=w),e.jsxs(n,{style:[o.inputDropDownWrapper,{backgroundColor:t.colors.background.surface},Se(m,s,se),xe(t,!1,x,r)],children:[e.jsx(ye,{floatingValue:U,floatingIconColor:Z,disabled:r,required:ee,floatingIcon:X,onPress:Y,componentId:a}),e.jsxs(n,{style:o.inputDropDownView,children:[!!y&&e.jsx(n,{style:[o.leadingIconContainerDropDown,{marginRight:j.S}],children:e.jsx(z,{color:ae,source:y,size:m==="small"?24:32,accessibilityLabel:`${a}|leading-icon`})}),e.jsx(n,{style:o.textViewDropDown,children:e.jsx(Ve,{numberOfLines:s?void 0:1,typography:"body_default_regular",color:h?C:I,accessibilityState:{disabled:r},accessibilityLabel:`${a}`,children:h||S})})]}),e.jsx(n,{style:[o.iconViewDropDown,{alignItems:s?"flex-start":"center",paddingTop:s?j.M:0}],children:e.jsx(z,{source:"arrow_chevron_down_small"})})]})};return e.jsx(me.Provider,{value:{componentName:b,componentId:a,params:te,state:"enabled"},children:e.jsxs(fe,{...V,accessibilityLabel:`${a}|touch`,accessibilityState:{disabled:r},activeOpacity:.6,style:[re,o.wrapper,le&&o.debugBaseLine],children:[ie(),e.jsx(he,{errorMessage:x,errorSpacing:oe,hintText:ne,componentId:a})]})})},ve={title:"Foundation/InputDropDown",component:be,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:ce()}},l={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",size:"large"}},i={args:{placeholder:"Select a country",floatingValue:"Country",value:"Vietnam",leadingIcon:"globe",size:"large"}},c={args:{placeholder:"Select a category",floatingValue:"Category",value:"Electronics",floatingIcon:"info",size:"large"}},p={args:{placeholder:"Select an option",floatingValue:"Required Field",errorMessage:"Please select an option",size:"large"}},u={args:{placeholder:"Select an option",floatingValue:"Options",required:!0,size:"large"}},d={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",size:"small"}},g={args:{placeholder:"Select an option",floatingValue:"Options",value:"Selected option",disabled:!0,size:"large"}};var O,L,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    size: 'large'
  }
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var q,F,W;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a country',
    floatingValue: 'Country',
    value: 'Vietnam',
    leadingIcon: 'globe',
    size: 'large'
  }
}`,...(W=(F=i.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var _,R,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a category',
    floatingValue: 'Category',
    value: 'Electronics',
    floatingIcon: 'info',
    size: 'large'
  }
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var P,$,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Required Field',
    errorMessage: 'Please select an option',
    size: 'large'
  }
}`,...(B=($=p.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var T,k,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    required: true,
    size: 'large'
  }
}`,...(A=(k=u.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var H,N,G;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    size: 'small'
  }
}`,...(G=(N=d.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    floatingValue: 'Options',
    value: 'Selected option',
    disabled: true,
    size: 'large'
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Oe=["Default","WithLeadingIcon","WithFloatingIcon","WithError","Required","Small","Disabled"];export{l as Default,g as Disabled,u as Required,d as Small,p as WithError,c as WithFloatingIcon,i as WithLeadingIcon,Oe as __namedExportsOrder,ve as default};
