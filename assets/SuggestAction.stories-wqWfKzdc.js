import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{fn as h}from"./index-AyJqhRyE.js";import{r}from"./index-CPl6p-nG.js";import{y as W,r as o,s as y,A as z,O as M,x as l,Q as b,J as F,f as P,c as H,F as J,I as Q,T as p,V as U}from"./index-D9H9ZqTU.js";const a=W.create({image:{width:32,height:32,borderRadius:y.XS,marginRight:o.S},container:{flexDirection:"row",marginHorizontal:o.M,padding:o.M,borderRadius:y.S,alignItems:"center",position:"absolute",zIndex:10},content:{flex:1,marginRight:o.M},closeIcon:{marginLeft:o.S}}),w=200,X=({image:e,onPressButton:s=()=>{},onClose:n,bottom:D=72,message:i="Message",buttonTitle:E="Button",boldMessage:c},L)=>{const{theme:v}=r.useContext(z),{width:C}=M(),m=r.useRef(new l.Value(0)).current;r.useImperativeHandle(L,()=>({show:V}));const V=()=>{l.timing(m,{toValue:1,duration:w,useNativeDriver:!1,easing:b.linear}).start()},x=()=>{l.timing(m,{toValue:0,duration:w,easing:b.linear,useNativeDriver:!1}).start()},O=()=>{n==null||n(),x()},k=()=>{s==null||s(),x()},N=()=>{if(c){let u=[],f=i.toLowerCase().indexOf(c.toLowerCase());if(f!==-1)return u=[i.substring(0,f),c,i.substring(f+c.length)],t.jsxs(p,{style:a.content,typography:"body_default_regular",children:[u[0],t.jsx(p,{typography:"action_s_bold",children:u[1]}),u[2]]})}return t.jsx(p,{style:a.content,typography:"description_default_regular",children:i})};return t.jsxs(l.View,{style:[a.container,{backgroundColor:v.colors.background.surface,opacity:m,bottom:D,width:C-o.M*2},F.Light],children:[!!e&&t.jsx(P,{source:{uri:e},style:a.image}),N(),t.jsx(H,{type:"tonal",title:E,onPress:k,size:"small",full:!1}),t.jsx(J,{style:a.closeIcon,onPress:O,children:t.jsx(Q,{source:"navigation_close"})})]})},_=r.forwardRef(X),$=24,q=({children:e})=>{const{width:s}=M();return t.jsx(U,{style:{width:s-$,height:200},children:e})},tt={title:"Library/SuggestAction",component:_,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>t.jsx(q,{children:t.jsx(e,{})})]},T=e=>{const s=r.useRef(null);return r.useEffect(()=>{var n;(n=s.current)==null||n.show()},[]),t.jsx(_,{...e,ref:s})},g={render:e=>t.jsx(T,{...e}),args:{message:"Bạn có muốn lưu thẻ này cho lần thanh toán sau?",buttonTitle:"Lưu thẻ",bottom:16,onPressButton:h(),onClose:h()}},d={render:e=>t.jsx(T,{...e}),args:{message:"Bật thông báo để không bỏ lỡ ưu đãi",boldMessage:"ưu đãi",buttonTitle:"Bật ngay",bottom:16,onPressButton:h(),onClose:h()}};var S,j,A;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ShownSuggestAction {...args} />,
  args: {
    message: 'Bạn có muốn lưu thẻ này cho lần thanh toán sau?',
    buttonTitle: 'Lưu thẻ',
    bottom: 16,
    onPressButton: fn(),
    onClose: fn()
  }
}`,...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,R,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ShownSuggestAction {...args} />,
  args: {
    message: 'Bật thông báo để không bỏ lỡ ưu đãi',
    boldMessage: 'ưu đãi',
    buttonTitle: 'Bật ngay',
    bottom: 16,
    onPressButton: fn(),
    onClose: fn()
  }
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const et=["Default","WithBoldMessage"];export{g as Default,d as WithBoldMessage,et as __namedExportsOrder,tt as default};
