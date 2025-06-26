import{fn as b}from"./index-BgJgh-x_.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DI7CEG0L.js";import{s as re,V as Y}from"./index-BzmpT3sc.js";import{i as D,R as h,C as $,A as Z,M as se,I as ae,O as ne,x as oe,y as le}from"./styles-D3fpLuwk.js";const f=re.create({button:{width:36,height:36,borderRadius:h.XL,backgroundColor:$.black_03,justifyContent:"center",alignItems:"center"},smallButton:{width:28,height:28,borderRadius:h.L,backgroundColor:$.black_03,justifyContent:"center",alignItems:"center"},iconWrapper:{width:22,height:22,borderWidth:2,borderRadius:h.M,justifyContent:"center",alignItems:"center"},stepper:{flexDirection:"row",alignItems:"center"},numberView:{width:32,height:28,borderWidth:1,borderRadius:h.S,justifyContent:"center",alignItems:"center",marginHorizontal:D.S},numberViewSmall:{width:28,height:24,borderWidth:1,borderRadius:h.S,justifyContent:"center",alignItems:"center",marginHorizontal:D.S},input:{fontSize:12,paddingVertical:0,textAlign:"center"}}),z=({disabled:r=!1,sign:n="+",size:i="large",onPress:u,componentId:t})=>{const{theme:c}=a.useContext(Z),s=i==="large"?f.button:f.smallButton,m=n==="-"?"24_navigation_minus_circle":"24_navigation_plus_circle",p=r?c.colors.text.disable:c.colors.primary;return l.jsx(se,{disabled:r,onPress:u,style:[s],accessibilityState:{disabled:r},accessibilityLabel:`${t}|${n==="+"?"plus":"minus"}-touch`,children:l.jsx(ae,{size:22,color:p,source:m})})},ie=({value:r=0,size:n="large",editable:i=!1,onValueChange:u,disabled:t,componentId:c})=>{const{theme:s}=a.useContext(Z),m=n==="large"?f.numberView:f.numberViewSmall,p=g=>isNaN(g)?"0":g.toString(),_=t?s.colors.text.disable:s.colors.text.default,d=t?s.colors.border.disable:s.colors.border.default;return l.jsx(Y,{style:[m,{borderColor:d}],children:l.jsx(ne,{editable:i,style:[f.input,{color:_}],value:p(r),onChangeText:u,keyboardType:"number-pad",selectionColor:s.colors.primary,accessibilityLabel:`${c}|input`,accessibilityState:{disabled:t}})})},ue=a.forwardRef(({size:r="large",defaultValue:n=0,min:i=0,max:u=100,disabled:t=!1,step:c=1,editable:s=!1,onValueChange:m,accessibilityLabel:p},_)=>{const[d,g]=a.useState(n),M=a.useContext(oe),N=a.useContext(le),W="Stepper",S=a.useMemo(()=>p||`${M.appId}/${M.code}/${N.screenName}/${W}`,[W,p,M,N]);a.useImperativeHandle(_,()=>({setStepValue:e=>{g(e),V(e.toString())}})),a.useEffect(()=>{g(n)},[n]);const ee=()=>{let e=d+c;V(e.toString())},te=()=>{let e=d-c;V(e.toString())},V=e=>{let o=parseInt(e);isNaN(o)&&(o=0),o>u&&(o=u),o<i&&(o=i),g(o),m==null||m(o)},R=(()=>{let e;return Array.isArray(t)?e={plus:t[1],minus:t[0],number:t[0]&&t[1]}:e={plus:t,minus:t,number:t},d===i&&(e.minus=!0),d===u&&(e.plus=!0),e})();return l.jsxs(Y,{style:f.stepper,accessibilityLabel:S,children:[l.jsx(z,{onPress:te,sign:"-",size:r,disabled:R.minus,componentId:S}),l.jsx(ie,{onValueChange:V,size:r,value:d,disabled:R.number,editable:s,componentId:S}),l.jsx(z,{onPress:ee,size:r,disabled:R.plus,componentId:S})]})}),be={title:"Library/Stepper",component:ue,parameters:{layout:"centered"},tags:["autodocs"]},C={args:{defaultValue:0,onValueChange:b()}},x={args:{defaultValue:5,min:0,max:10,onValueChange:b()}},y={args:{defaultValue:0,step:2,onValueChange:b()}},w={args:{defaultValue:0,size:"small",onValueChange:b()}},j={args:{defaultValue:5,disabled:!0,onValueChange:b()}},I={args:{defaultValue:5,editable:!0,onValueChange:b()}};var A,E,k;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    onValueChange: fn()
  }
}`,...(k=(E=C.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var v,L,T;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    onValueChange: fn()
  }
}`,...(T=(L=x.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var B,H,O;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    step: 2,
    onValueChange: fn()
  }
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var P,X,q;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    size: 'small',
    onValueChange: fn()
  }
}`,...(q=(X=w.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var F,G,J;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    disabled: true,
    onValueChange: fn()
  }
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    editable: true,
    onValueChange: fn()
  }
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const he=["Default","WithMinMax","WithCustomStep","Small","Disabled","Editable"];export{C as Default,j as Disabled,I as Editable,w as Small,y as WithCustomStep,x as WithMinMax,he as __namedExportsOrder,be as default};
