import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{fn as z}from"./index-AyJqhRyE.js";import{r as s}from"./index-CPl6p-nG.js";import{y as fe,s as be,r as ae,C as Ne,a8 as we,V as D,J as Oe,T as qe,x as M,A as Be}from"./index-D9H9ZqTU.js";import{P as Ee}from"./index-D9ZpeYt-.js";const P=fe.create({controlsContainer:{flexDirection:"row",justifyContent:we.isRTL?"flex-end":"flex-start",alignItems:"center"},highThumbContainer:{position:"absolute"},railsContainer:{...fe.absoluteFillObject,flexDirection:"row",alignItems:"center"},labelFixedContainer:{alignItems:we.isRTL?"flex-end":"flex-start"},labelFloatingContainer:{position:"absolute",left:0,right:0,alignItems:we.isRTL?"flex-end":"flex-start"},touchableArea:{...fe.absoluteFillObject},label:{backgroundColor:Ne.black_01,paddingVertical:ae.XXS,paddingHorizontal:ae.XS,borderRadius:be.XS},thumb:{width:20,height:20,borderRadius:be.M,borderWidth:4},track:{width:"100%",height:4,borderRadius:be.L}}),Je=(e,t,n)=>{if(t===n)return e<t;const o=Math.abs(e-t),r=Math.abs(e-n);return o<r},I=(e,t,n)=>Math.min(Math.max(e,t),n),Ze=(e,t,n,o,r,c)=>{const p=t-n,i=c/(r-o);let a=(e-n/2)/p;const l=a%i;return a-=l,l/i>=.5&&(a+=i),I(o+Math.round(a/i)*c,o,r)},Ke=(e,t)=>{const[n,o]=s.useState(Number.NaN);s.useImperativeHandle(t,()=>({setValue:r}));const r=c=>{o(c)};return m.jsx(D,{...e,style:[P.label,Oe.Light],children:m.jsx(qe,{typography:"label_s_medium",children:n})})},Qe=s.forwardRef(Ke),Ue=(e,t,n,o,r)=>{const c=e===void 0?n:I(e,n,o),i=t!==void 0?I(t,n,o):o,a=s.useRef({low:c,high:i,step:r,min:c,max:i}),{low:l,high:u}=a.current,g={lowPrev:l,highPrev:u},f=I(e===void 0?l:e,n,o),w=I(t===void 0?u:t,n,o);return Object.assign(a.current,{low:f,high:w,min:n,max:o}),{inPropsRef:a,inPropsRefPrev:g,setLow:b=>a.current.low=b,setHigh:b=>a.current.high=b}},ze=(e,t)=>s.useCallback(({nativeEvent:n})=>{const{layout:{width:o}}=n,{current:r}=e;r!==o&&(e.current=o,t&&t(o))},[t,e]),Ye=(e,t,n,o,r,c)=>{const p=s.useRef(new M.Value(0)),i=s.useRef(0),a=s.useRef(null),{current:l}=p,u=s.useCallback((x,C)=>{var W;const{isLow:y}=t.current;if(y?r:c)return;const{current:H}=i,{current:L}=e,F=x-H/2;p.current.setValue(o?F:I(F,0,L-H)),(W=a.current)==null||W.setValue(C)},[i,e,o,r,c,t]),g=ze(i,()=>{u(t.current.lastPosition,t.current.lastValue)}),f={transform:[{translateX:l}]},R=t.current.isLow?!r:!c,b=n&&R?1:0;return[m.jsx(M.View,{style:[f,{opacity:b}],children:m.jsx(Qe,{onLayout:g,ref:a})}),u]},$e=(e,t,n,o)=>{const{current:r}=s.useRef(new M.Value(0)),{current:c}=s.useRef(new M.Value(0)),p=s.useCallback(()=>{const{low:a,high:l,min:u,max:g}=e.current,{current:f}=t,w=(g-u)/(f-n),R=(a-u)/w,h=(g-l)/w;r.setValue(o?0:R),c.setValue(o?f-n-R:h)},[e,t,o,n,r,c]);return[s.useMemo(()=>({position:"absolute",left:r,right:c}),[r,c]),p]},et=e=>{const[t,n]=s.useState(0),o=s.useCallback(({nativeEvent:p})=>{const{layout:{height:i}}=p;n(i)},[]),r=e?-(t+ae.XS):ae.XS;return{style:[e?P.labelFloatingContainer:P.labelFixedContainer,{top:r}],onLayout:o}},tt=2,ye=()=>!0,xe=()=>!1,nt=({pointerX:e,inPropsRef:t,thumbWidth:n,disableRange:o,disabledHigh:r,disabledLow:c,setLow:p,setHigh:i,labelUpdate:a,updateSelectedRail:l,minRange:u,onSliderTouchEnd:g,onSliderTouchStart:f,setPressed:w,containerWidthRef:R,gestureStateRef:h,lowThumbXRef:b,highThumbXRef:j,onValueChangedRef:x})=>s.useMemo(()=>Ee.create({onStartShouldSetPanResponderCapture:xe,onMoveShouldSetPanResponderCapture:xe,onPanResponderTerminationRequest:xe,onPanResponderTerminate:ye,onShouldBlockNativeResponder:ye,onMoveShouldSetPanResponder:(C,y)=>{const{dx:H,dy:L}=y;return Math.abs(H)>tt*Math.abs(L)},onPanResponderGrant:({nativeEvent:C},y)=>{const{numberActiveTouches:H}=y;if(H>1)return;w(!0);const{locationX:L,pageX:F}=C,W=F-L,{low:G,high:q,min:A,max:Z}=t.current;f==null||f(G,q);const B=R.current,S=B-n,V=(G-A)/(Z-A),ce=(q-A)/(Z-A),ie=n/2+V*S,_=n/2+ce*S,X=Je(L,ie,_),v=o||X;if(h.current.isLow=v,v&&c||!v&&r)return;const K=E=>{var d;const{low:N,high:Q,min:O,max:J,step:U}=t.current,le=v?O:N+u,ue=v?Q-u:J,k=I(Ze(E,B,n,O,J,U),le,ue);if(h.current.lastValue===k)return;const he=B-n,me=(k-O)/(J-O)*he,pe=me+n/2;h.current.lastValue=k,h.current.lastPosition=pe,(v?b:j).current.setValue(me),(d=x.current)==null||d.call(x,v?k:N,v?Q:k,!0),(v?p:i)(k),typeof a=="function"&&a(h.current.lastPosition,k),typeof l=="function"&&l()};K(L),e.removeAllListeners(),e.addListener(({value:E})=>{const N=E-W;K(N)})},onPanResponderMove:(C,y)=>{(h.current.isLow?c:r)||M.event([null,{moveX:e}],{useNativeDriver:!1})(C,y)},onPanResponderRelease:()=>{w(!1);const{low:C,high:y}=t.current;(h.current.isLow?c:r)||g==null||g(C,y)}}),[e,t,n,o,r,c,p,i,a,l,u,g,f,w,R,h,b,j,x]),st=s.memo(({min:e,max:t,minRange:n=0,step:o,low:r,high:c,floatingLabel:p=!1,allowLabelOverflow:i=!1,disableRange:a=!1,disabledHigh:l=!1,disabledLow:u=!1,onValueChanged:g,onSliderTouchStart:f,onSliderTouchEnd:w,...R})=>{const{theme:h}=s.useContext(Be),b=h.colors,j=s.useRef(g);j.current=g;const{inPropsRef:x,inPropsRefPrev:C,setLow:y,setHigh:H}=Ue(r,a?t:c,e,t,o),L=s.useRef(new M.Value(0)),F=s.useRef(new M.Value(0)),W=s.useRef(new M.Value(0)).current,{current:G}=L,{current:q}=F,A=s.useRef({isLow:!0,lastValue:0,lastPosition:0}),[Z,B]=s.useState(!1),S=s.useRef(0),[V,ce]=s.useState(0),[ie,_]=$e(x,S,V,a),X=s.useCallback(()=>{var Ce;const{current:d}=S;if(!V||!d)return;const{low:T,high:Y}=x.current,$=d-V;if(!a){const Ge=(Y-e)/(t-e)*$;F.current.setValue(Ge)}const ge=(T-e)/(t-e)*$;L.current.setValue(ge),typeof _=="function"&&_(),(Ce=j.current)==null||Ce.call(j,T,Y,!1)},[a,x,t,e,V,_]);s.useEffect(()=>{const{lowPrev:d,highPrev:T}=C;(r!==void 0&&r!==d||c!==void 0&&c!==T)&&X()},[c,C,r,X]),s.useEffect(()=>{X()},[X]);const v=ze(S,X),K=s.useCallback(({nativeEvent:d})=>{const{layout:{width:T}}=d;V!==T&&ce(T)},[V]),E=s.useMemo(()=>({transform:[{translateX:G}]}),[G]),N=s.useMemo(()=>{const d=[{translateX:q}];return a?null:[P.highThumbContainer,{transform:d}]},[a,q]),Q=s.useMemo(()=>[P.railsContainer,{marginHorizontal:V/2}],[V]),[O,J]=Ye(S,A,Z,i,u,l),U=d=>{const ge=d==="low"&&u||d==="high"&&l?b.text.disable:b.primary;return m.jsx(D,{style:[Oe.Light,P.thumb,{borderColor:h.colors.background.surface,backgroundColor:ge}]})},le=U("low"),ue=U("high"),k=et(p),{panHandlers:he}=nt({pointerX:W,inPropsRef:x,thumbWidth:V,disableRange:a,disabledHigh:l,disabledLow:u,setLow:y,setHigh:H,labelUpdate:J,updateSelectedRail:_,minRange:n,onSliderTouchEnd:w,onSliderTouchStart:f,setPressed:B,containerWidthRef:S,gestureStateRef:A,lowThumbXRef:L,highThumbXRef:F,onValueChangedRef:j}),de=d=>m.jsx(D,{style:[P.track,{backgroundColor:d}]}),pe=l&&u?b.text.disable:b.primary;return m.jsxs(D,{...R,children:[m.jsx(D,{...k,children:O}),m.jsxs(D,{onLayout:v,style:P.controlsContainer,children:[m.jsxs(D,{style:Q,children:[de(h.colors.background.default),m.jsx(M.View,{style:ie,children:de(pe)})]}),m.jsx(M.View,{style:E,onLayout:K,children:le}),!a&&m.jsx(M.View,{style:N,children:ue}),m.jsx(D,{...he,style:P.touchableArea,collapsable:!1})]})]})}),lt={title:"Library/Slider",component:st,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>m.jsx(D,{style:{width:375,height:40,backgroundColor:Ne.black_03,borderRadius:12},children:m.jsx(e,{})})]},ee={args:{min:0,max:100,step:1,onValueChanged:z()}},te={args:{min:0,max:100,step:1,low:20,high:80,onValueChanged:z()}},ne={args:{min:0,max:100,step:1,low:20,high:80,minRange:20,onValueChanged:z()}},se={args:{min:0,max:100,step:1,floatingLabel:!0,onValueChanged:z()}},oe={args:{min:0,max:100,step:1,disableRange:!0,onValueChanged:z()}},re={args:{min:0,max:100,step:1,low:20,high:80,disabledLow:!0,disabledHigh:!0,onValueChanged:z()}};var Le,Ve,ve;ee.parameters={...ee.parameters,docs:{...(Le=ee.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    onValueChanged: fn()
  }
}`,...(ve=(Ve=ee.parameters)==null?void 0:Ve.docs)==null?void 0:ve.source}}};var Me,Re,je;te.parameters={...te.parameters,docs:{...(Me=te.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    low: 20,
    high: 80,
    onValueChanged: fn()
  }
}`,...(je=(Re=te.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var ke,De,Pe;ne.parameters={...ne.parameters,docs:{...(ke=ne.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    low: 20,
    high: 80,
    minRange: 20,
    onValueChanged: fn()
  }
}`,...(Pe=(De=ne.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var He,Fe,Se;se.parameters={...se.parameters,docs:{...(He=se.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    floatingLabel: true,
    onValueChanged: fn()
  }
}`,...(Se=(Fe=se.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Te,Ae,Xe;oe.parameters={...oe.parameters,docs:{...(Te=oe.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    disableRange: true,
    onValueChanged: fn()
  }
}`,...(Xe=(Ae=oe.parameters)==null?void 0:Ae.docs)==null?void 0:Xe.source}}};var Ie,We,_e;re.parameters={...re.parameters,docs:{...(Ie=re.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    low: 20,
    high: 80,
    disabledLow: true,
    disabledHigh: true,
    onValueChanged: fn()
  }
}`,...(_e=(We=re.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};const ut=["Default","WithRange","WithMinRange","WithFloatingLabels","WithDisabledRange","WithDisabledHandles"];export{ee as Default,re as WithDisabledHandles,oe as WithDisabledRange,se as WithFloatingLabels,ne as WithMinRange,te as WithRange,ut as __namedExportsOrder,lt as default};
