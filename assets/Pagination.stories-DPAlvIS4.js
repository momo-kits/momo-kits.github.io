import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as w,H as n,M as C,j as P,C as j,T}from"./index-CcPzXCq5.js";import{r as c}from"./index-CPl6p-nG.js";import{A as m}from"./Animated-DCPrhviD.js";import{V as u}from"./index-Bd3FPvDr.js";const E=({active:t,style:o})=>{const{theme:i}=c.useContext(w),r=t?[n.activeDot]:[n.inactiveDot,{backgroundColor:i.colors.background.pressed}];return e.jsx(m.View,{style:[o,r]})},$=({dataLength:t=2,activeIndex:o=0,style:i})=>{var d;const r=c.useContext(C),a=((d=r==null?void 0:r.features)==null?void 0:d.showBaseLineDebug)??!1,l=()=>{const g=[];for(let s=0;s<t;s++)g.push(e.jsx(E,{style:[s!==t-1?{marginRight:P.XS}:{},{backgroundColor:j.black_01}],active:o===s},`Dot${s}`));return g};return e.jsx(u,{style:[i,n.row,a&&n.debugBaseLine],children:e.jsx(u,{style:n.paginationWhiteContainer,children:l()})})},M=({dataLength:t=2,activeIndex:o=0,style:i})=>{var g;const{theme:r}=c.useContext(w),a=c.useContext(C),l=((g=a==null?void 0:a.features)==null?void 0:g.showBaseLineDebug)??!1,d=()=>{const s=[];for(let h=0;h<t;h++)s.push(e.jsx(E,{style:[h!==t-1?{marginRight:P.XS}:{},{backgroundColor:r.colors.primary}],active:o===h},`Dot${h}`));return s};return e.jsx(u,{style:[i,n.row,l&&n.debugBaseLine],children:e.jsx(u,{style:n.paginationPinkContainer,children:d()})})},F=({activeIndex:t=0,dataLength:o=2,style:i})=>{var l;const r=c.useContext(C),a=((l=r==null?void 0:r.features)==null?void 0:l.showBaseLineDebug)??!1;return e.jsx(u,{style:[i,n.row,a&&n.debugBaseLine],children:e.jsx(u,{style:n.paginationNumberContainer,children:e.jsx(T,{color:j.black_01,typography:"label_default_medium",children:`${t+1}/${o}`})})})},q=24,G=72,J=({style:t,children:o,scrollViewRef:i})=>{var D;const{theme:r}=c.useContext(w),a=c.useContext(C),l=c.useRef(new m.Value(0)).current,[d,g]=c.useState(0),[s,h]=c.useState(0),H=((D=a==null?void 0:a.features)==null?void 0:D.showBaseLineDebug)??!1,O=()=>d&&s?{transform:[{translateX:l.interpolate({inputRange:[0,s-d],outputRange:[0,G-q],extrapolate:"clamp"})}]}:{},z=()=>e.jsx(m.ScrollView,{ref:i,onScroll:m.event([{nativeEvent:{contentOffset:{x:l}}}],{useNativeDriver:!0}),alwaysBounceHorizontal:!1,showsHorizontalScrollIndicator:!1,horizontal:!0,style:n.scrollView,onContentSizeChange:p=>{h(p)},onLayout:p=>{g(p.nativeEvent.layout.width)},children:o}),X=()=>e.jsx(u,{style:[n.indicatorContainer,{backgroundColor:r.colors.background.pressed}],children:e.jsx(m.View,{style:[n.indicator,{backgroundColor:r.colors.primary},O()]})});return e.jsxs(u,{style:[t,n.scrollContainer,H&&n.debugBaseLine],children:[z(),s>d&&X()]})},K=t=>{const{type:o}=t;return(()=>{switch(o){case"black_white":return e.jsx($,{...t});case"number":return e.jsx(F,{...t});default:return e.jsx(M,{...t})}})()},te={title:"Foundation/Pagination",component:K,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{activeIndex:1,dataLength:5}},y={args:{activeIndex:2,dataLength:5,type:"black_white"}},b={args:{activeIndex:0,dataLength:10,type:"number"}},f={render:()=>e.jsx(J,{children:Array.from({length:10},(t,o)=>o+1).map(t=>e.jsx(u,{style:{width:120,height:60,backgroundColor:j.blue_08,justifyContent:"center",alignItems:"center",marginRight:12},children:e.jsx(T,{typography:"body_default_regular",children:t})}))})};var S,_,v;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activeIndex: 1,
    dataLength: 5
  }
}`,...(v=(_=x.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,I,L;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    activeIndex: 2,
    dataLength: 5,
    type: 'black_white'
  }
}`,...(L=(I=y.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var B,V,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    dataLength: 10,
    type: 'number'
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,A,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <PaginationScroll>
        {Array.from({
        length: 10
      }, (_, index) => index + 1).map(i => {
        return <View style={{
          width: 120,
          height: 60,
          backgroundColor: Colors.blue_08,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 12
        }}>
              <Text typography={'body_default_regular'}>{i}</Text>
            </View>;
      })}
      </PaginationScroll>;
  }
}`,...(N=(A=f.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const ne=["Default","BlackWhite","Number","WithScroll"];export{y as BlackWhite,x as Default,b as Number,f as WithScroll,ne as __namedExportsOrder,te as default};
