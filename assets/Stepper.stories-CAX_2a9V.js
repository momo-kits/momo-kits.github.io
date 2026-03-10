import{fn as g}from"./index-AyJqhRyE.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CPl6p-nG.js";import{j as re,R as x,C as D,A as Y,l as se,I as ae,i as R,G as ne,M as oe,z as le}from"./index-CcPzXCq5.js";import{s as ie,V as Z}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const S=ie.create({button:{width:36,height:36,borderRadius:x.XL,backgroundColor:D.black_03,justifyContent:"center",alignItems:"center"},smallButton:{width:28,height:28,borderRadius:x.L,backgroundColor:D.black_03,justifyContent:"center",alignItems:"center"},iconWrapper:{width:22,height:22,borderWidth:2,borderRadius:x.M,justifyContent:"center",alignItems:"center"},stepper:{flexDirection:"row",alignItems:"center"},numberViewBase:{borderWidth:1,borderRadius:x.S,justifyContent:"center",alignItems:"center",marginHorizontal:re.S},numberViewInput:{paddingVertical:0,textAlign:"center"}}),$=({disabled:r=!1,sign:n="+",size:i="large",onPress:u,componentId:t})=>{const{theme:c}=a.useContext(Y),s=i==="large"?S.button:S.smallButton,m=n==="-"?"24_navigation_minus_circle":"24_navigation_plus_circle",p=r?c.colors.text.disable:c.colors.primary;return l.jsx(se,{disabled:r,onPress:u,style:[s],accessibilityState:{disabled:r},accessibilityLabel:`${t}|${n==="+"?"plus":"minus"}-touch`,children:l.jsx(ae,{size:22,color:p,source:m})})},ue=({value:r=0,size:n="large",editable:i=!1,onValueChange:u,disabled:t,componentId:c})=>{const{theme:s}=a.useContext(Y),m=R(28),p=R(24),W=R(12),d=b=>isNaN(b)?"0":b.toString(),f=t?s.colors.text.disable:s.colors.text.default,h=t?s.colors.border.disable:s.colors.border.default;return l.jsx(Z,{style:[S.numberViewBase,n==="large"?{minWidth:32,height:m}:{minWidth:28,height:p},{borderColor:h}],children:l.jsx(ne,{allowFontScaling:!1,editable:i,style:[S.numberViewInput,{fontSize:W},{color:f}],value:d(r),onChangeText:u,keyboardType:"number-pad",selectionColor:s.colors.primary,accessibilityLabel:`${c}|input`,accessibilityState:{disabled:t}})})},ce=a.forwardRef(({size:r="large",defaultValue:n=0,min:i=0,max:u=100,disabled:t=!1,step:c=1,editable:s=!1,onValueChange:m,accessibilityLabel:p},W)=>{const[d,f]=a.useState(n),h=a.useContext(oe),b=a.useContext(le),z="Stepper",V=a.useMemo(()=>p||`${h.appId}/${h.code}/${b.screenName}/${z}`,[z,p,h,b]);a.useImperativeHandle(W,()=>({setStepValue:e=>{f(e),C(e.toString())}})),a.useEffect(()=>{f(n)},[n]);const ee=()=>{let e=d+c;C(e.toString())},te=()=>{let e=d-c;C(e.toString())},C=e=>{let o=parseInt(e);isNaN(o)&&(o=0),o>u&&(o=u),o<i&&(o=i),f(o),m==null||m(o)},N=(()=>{let e;return Array.isArray(t)?e={plus:t[1],minus:t[0],number:t[0]&&t[1]}:e={plus:t,minus:t,number:t},d===i&&(e.minus=!0),d===u&&(e.plus=!0),e})();return l.jsxs(Z,{style:S.stepper,accessibilityLabel:V,children:[l.jsx($,{onPress:te,sign:"-",size:r,disabled:N.minus,componentId:V}),l.jsx(ue,{onValueChange:C,size:r,value:d,disabled:N.number,editable:s,componentId:V}),l.jsx($,{onPress:ee,size:r,disabled:N.plus,componentId:V})]})}),Se={title:"Library/Stepper",component:ce,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{defaultValue:0,onValueChange:g()}},w={args:{defaultValue:5,min:0,max:10,onValueChange:g()}},j={args:{defaultValue:0,step:2,onValueChange:g()}},I={args:{defaultValue:0,size:"small",onValueChange:g()}},_={args:{defaultValue:5,disabled:!0,onValueChange:g()}},M={args:{defaultValue:5,editable:!0,onValueChange:g()}};var A,E,k;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    onValueChange: fn()
  }
}`,...(k=(E=y.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var B,v,H;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    onValueChange: fn()
  }
}`,...(H=(v=w.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var L,T,P;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    step: 2,
    onValueChange: fn()
  }
}`,...(P=(T=j.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var F,O,G;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    size: 'small',
    onValueChange: fn()
  }
}`,...(G=(O=I.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var X,q,J;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    disabled: true,
    onValueChange: fn()
  }
}`,...(J=(q=_.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    editable: true,
    onValueChange: fn()
  }
}`,...(U=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ve=["Default","WithMinMax","WithCustomStep","Small","Disabled","Editable"];export{y as Default,_ as Disabled,M as Editable,I as Small,j as WithCustomStep,w as WithMinMax,Ve as __namedExportsOrder,Se as default};
