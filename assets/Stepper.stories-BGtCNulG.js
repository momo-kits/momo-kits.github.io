import{fn as f}from"./index-AyJqhRyE.js";import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CPl6p-nG.js";import{y as oe,r as le,s as w,C as v,A as re,F as ue,I as ie,N as R,U as ce,V as ne,a2 as de,M as pe,K as me}from"./index-D9H9ZqTU.js";const C=oe.create({button:{width:36,height:36,borderRadius:w.XL,backgroundColor:v.black_03,justifyContent:"center",alignItems:"center"},smallButton:{width:28,height:28,borderRadius:w.L,backgroundColor:v.black_03,justifyContent:"center",alignItems:"center"},iconWrapper:{width:22,height:22,borderWidth:2,borderRadius:w.M,justifyContent:"center",alignItems:"center"},stepper:{flexDirection:"row",alignItems:"center"},numberViewBase:{borderWidth:1,borderRadius:w.S,justifyContent:"center",alignItems:"center",marginHorizontal:le.S},numberViewInput:{paddingVertical:0,textAlign:"center",width:"100%"}}),A=({disabled:a=!1,sign:o="+",size:c="large",onPress:d,componentId:t})=>{const{theme:h}=n.useContext(re),b=h.colors,p=c==="large"?C.button:C.smallButton;let l="24_navigation_plus_circle";o==="-"&&(l="24_navigation_minus_circle");const S=a?b.text.disable:b.primary,s=o==="+"?"plus":"minus";return i.jsx(ue,{disabled:a,onPress:d,style:[p],accessibilityState:{disabled:a},accessibilityLabel:`${t}|${s}-touch`,children:i.jsx(ie,{size:22,color:S,source:l})})},ge=({value:a=0,size:o="large",editable:c=!1,onValueChange:d,disabled:t,componentId:h})=>{const{theme:b}=n.useContext(re),p=R(28),l=R(24),S=R(12),s=ce("regular"),V=g=>isNaN(g)?"0":g.toString(),{colors:r}=b,x=t?r.text.disable:r.text.default,y=t?r.border.disable:r.border.default,m=o==="large",F={height:m?p:l,width:m?32:28};return i.jsx(ne,{style:[C.numberViewBase,F,{borderColor:y}],children:i.jsx(de,{allowFontScaling:!1,editable:c,style:[C.numberViewInput,{fontSize:S,fontFamily:s},{color:x}],value:V(a),onChangeText:d,keyboardType:"number-pad",selectionColor:r.primary,accessibilityLabel:`${h}|input`,accessibilityState:{disabled:t}})})},fe=n.forwardRef(({size:a="large",defaultValue:o=0,min:c=0,max:d=100,disabled:t=!1,step:h=1,editable:b=!1,onValueChange:p,accessibilityLabel:l},S)=>{const[s,V]=n.useState(o),r=n.useContext(pe),x=n.useContext(me),y="Stepper",m=n.useMemo(()=>l||`${r.appId}/${r.code}/${x.screenName}/${y}`,[y,l,r,x]);n.useImperativeHandle(S,()=>({setStepValue:e=>{V(e),g(e.toString())}})),n.useEffect(()=>{V(o)},[o]);const $=()=>{let e=s+h;g(e.toString())},F=()=>{let e=s-h;g(e.toString())},g=e=>{let u=parseInt(e,10);isNaN(u)&&(u=0),u>d&&(u=d),u<c&&(u=c),V(u),p==null||p(u)},z=(()=>{let e;return Array.isArray(t)?e={plus:t[1],minus:t[0],number:t[0]&&t[1]}:e={plus:t,minus:t,number:t},s===c&&(e.minus=!0),s===d&&(e.plus=!0),e})();return i.jsxs(ne,{style:C.stepper,accessibilityLabel:m,children:[i.jsx(A,{onPress:F,sign:"-",size:a,disabled:z.minus,componentId:m}),i.jsx(ge,{onValueChange:g,size:a,value:s,disabled:z.number,editable:b,componentId:m}),i.jsx(A,{onPress:$,size:a,disabled:z.plus,componentId:m})]})}),xe={title:"Library/Stepper",component:fe,parameters:{layout:"centered"},tags:["autodocs"]},I={args:{defaultValue:0,onValueChange:f()}},j={args:{defaultValue:5,min:0,max:10,onValueChange:f()}},M={args:{defaultValue:0,step:2,onValueChange:f()}},N={args:{defaultValue:0,size:"small",onValueChange:f()}},_={args:{defaultValue:5,disabled:!0,onValueChange:f()}},D={args:{defaultValue:5,editable:!0,onValueChange:f()}},W={args:{defaultValue:5,disabled:[!0,!1],onValueChange:f()}};var E,k,B;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    onValueChange: fn()
  }
}`,...(B=(k=I.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var L,H,T;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    onValueChange: fn()
  }
}`,...(T=(H=j.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var P,O,K;M.parameters={...M.parameters,docs:{...(P=M.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    step: 2,
    onValueChange: fn()
  }
}`,...(K=(O=M.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var U,X,q;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    size: 'small',
    onValueChange: fn()
  }
}`,...(q=(X=N.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var G,J,Q;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    disabled: true,
    onValueChange: fn()
  }
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    editable: true,
    onValueChange: fn()
  }
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    disabled: [true, false],
    onValueChange: fn()
  }
}`,...(se=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ye=["Default","WithMinMax","WithCustomStep","Small","Disabled","Editable","DisabledMinus"];export{I as Default,_ as Disabled,W as DisabledMinus,D as Editable,N as Small,M as WithCustomStep,j as WithMinMax,ye as __namedExportsOrder,xe as default};
