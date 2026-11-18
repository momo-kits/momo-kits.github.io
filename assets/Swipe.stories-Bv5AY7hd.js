import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{fn as i}from"./index-AyJqhRyE.js";import{$ as re,w as se,u as te,V as w,a0 as oe,y as Y,A as ae,a1 as le,C as L,x as ie,I as ce,T as de,W as ue}from"./index-D9H9ZqTU.js";import{r as t}from"./index-CPl6p-nG.js";import{S as he}from"./react-native-gesture-handler-rwoKkCyM.js";import"./index-D9ZpeYt-.js";var ye=["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"];function D(e,h){return{child:{opacity:e??.85},underlay:{backgroundColor:h===void 0?"black":h}}}function G(e){return e.onPress!=null||e.onPressIn!=null||e.onPressOut!=null||e.onLongPress!=null}function fe(e,h){var f=e.activeOpacity,T=e.children,S=e.delayPressIn,p=e.delayPressOut,A=e.delayLongPress,a=e.disabled,k=e.focusable,s=e.onHideUnderlay,C=e.onLongPress,g=e.onPress,n=e.onPressIn,r=e.onPressOut,l=e.onShowUnderlay,c=e.rejectResponderTermination,m=e.style,d=e.testOnly_pressed,y=e.underlayColor,E=re(e,ye),j=t.useRef(null),v=se(h,j),b=t.useState(d===!0?D(f,y):null),u=b[0],O=b[1],V=t.useCallback(()=>{G(e)&&(O(D(f,y)),l!=null&&l())},[f,l,e,y]),X=t.useCallback(()=>{d!==!0&&G(e)&&(O(null),s!=null&&s())},[s,e,d]),ee=t.useMemo(()=>({cancelable:!c,disabled:a,delayLongPress:A,delayPressStart:S,delayPressEnd:p,onLongPress:C,onPress:g,onPressStart(H){V(),n!=null&&n(H)},onPressEnd(H){X(),r!=null&&r(H)}}),[A,S,p,a,C,g,n,r,c,V,X]),ne=te(j,ee),$=t.Children.only(T);return t.createElement(w,oe({},E,ne,{accessibilityDisabled:a,focusable:!a&&k!==!1,pointerEvents:a?"box-none":void 0,ref:v,style:[M.root,m,!a&&M.actionable,u&&u.underlay]}),t.cloneElement($,{style:[$.props.style,u&&u.child]}))}var M=Y.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),Z=t.memo(t.forwardRef(fe));Z.displayName="TouchableHighlight";const P=Y.create({action:{height:"100%",alignItems:"center",justifyContent:"center"},row:{flexDirection:"row"},textCenter:{textAlign:"center"},container:{width:"100%"},overlay:{height:"100%",zIndex:-10,position:"absolute"}}),x=56,ge=3,me=({children:e,leftActions:h,rightActions:f,height:T=56,itemRadius:S,...p},A)=>{const{theme:a}=t.useContext(ae),k=le.get("window").width,s=t.useRef(null),C=(n,r,l,c,m)=>{const{label:d,icon:y,onPress:E,backgroundColor:j=a.colors.highlight.primary}=n;let v=[0,x*l],b=[-x*(r+1),0],u=-r;c==="right"&&(v=[-x*l,0],b=[0,x*(l-r)],u=r);const O=m.interpolate({inputRange:v,outputRange:b,extrapolate:"clamp"});return o.jsx(Z,{underlayColor:L.black_01,activeOpacity:.8,style:{zIndex:u},onPress:E,children:o.jsxs(ie.View,{style:[P.action,{backgroundColor:j,transform:[{translateX:O}],width:x,borderRadius:S}],children:[!!y&&o.jsx(ce,{source:y,color:L.black_01}),o.jsx(de,{style:P.textCenter,numberOfLines:1,color:L.black_01,typography:"label_s_medium",children:d})]})},`swipe-action-${c}-${r}`)},g=(n=[],r,l)=>{let c={left:0};return r==="right"&&(c={right:0}),o.jsxs(w,{style:P.row,children:[o.jsx(w,{style:[P.overlay,{width:k,backgroundColor:a.colors.background.surface},c]}),n==null?void 0:n.map((m,d)=>{if(d<ge)return C(m,d,n==null?void 0:n.length,r,l)})]})};return t.useImperativeHandle(A,()=>({openLeft:()=>{var n;return(n=s==null?void 0:s.current)==null?void 0:n.openLeft()},openRight:()=>{var n;return(n=s==null?void 0:s.current)==null?void 0:n.openRight()},close:()=>{var n;return(n=s==null?void 0:s.current)==null?void 0:n.close()}})),o.jsx(he,{...p,containerStyle:[P.container,{height:T}],ref:s,renderRightActions:(n,r)=>g(f,"right",r),renderLeftActions:(n,r)=>g(h,"left",r),children:e})},be=t.forwardRef(me),Ce={title:"Library/Swipe",component:be,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>o.jsx(w,{style:{width:375,height:80},children:o.jsx(e,{})})]},U=()=>o.jsx(w,{style:{height:56,justifyContent:"center",paddingHorizontal:16},children:o.jsx(ue,{children:"Chuyển tiền cho Nguyễn Văn A"})}),R={args:{children:o.jsx(U,{}),rightActions:[{label:"Ghim",icon:"star",onPress:i()},{label:"Xóa",icon:"close",backgroundColor:L.red_03,onPress:i()}],onSwipeableRightOpen:i()}},_={args:{children:o.jsx(U,{}),leftActions:[{label:"Tìm",icon:"search",onPress:i()}],onSwipeableLeftOpen:i()}},I={args:{children:o.jsx(U,{}),height:64,itemRadius:8,leftActions:[{label:"Ghim",icon:"star",onPress:i()}],rightActions:[{label:"Xóa",icon:"close",onPress:i()}],onSwipeableOpen:i(),onSwipeableClose:i()}};var N,W,z;R.parameters={...R.parameters,docs:{...(N=R.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <Row />,
    rightActions: [{
      label: 'Ghim',
      icon: 'star',
      onPress: fn()
    }, {
      label: 'Xóa',
      icon: 'close',
      backgroundColor: Colors.red_03,
      onPress: fn()
    }],
    onSwipeableRightOpen: fn()
  }
}`,...(z=(W=R.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,q,F;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <Row />,
    leftActions: [{
      label: 'Tìm',
      icon: 'search',
      onPress: fn()
    }],
    onSwipeableLeftOpen: fn()
  }
}`,...(F=(q=_.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <Row />,
    height: 64,
    itemRadius: 8,
    leftActions: [{
      label: 'Ghim',
      icon: 'star',
      onPress: fn()
    }],
    rightActions: [{
      label: 'Xóa',
      icon: 'close',
      onPress: fn()
    }],
    onSwipeableOpen: fn(),
    onSwipeableClose: fn()
  }
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const je=["RightActions","LeftActions","BothSides"];export{I as BothSides,_ as LeftActions,R as RightActions,je as __namedExportsOrder,Ce as default};
