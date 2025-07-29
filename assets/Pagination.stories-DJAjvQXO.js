import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as C,Q as r,z as d,i as N,C as b,T as P}from"./styles-DZKIi-Hd.js";import{r as u}from"./index-DI7CEG0L.js";import{V as s}from"./index-BzmpT3sc.js";const T=({active:t,style:n})=>{const{theme:a}=u.useContext(C),i=t?[r.activeDot]:[r.inactiveDot,{backgroundColor:a.colors.background.pressed}];return e.jsx(d.View,{style:[n,i]})},O=({dataLength:t=2,activeIndex:n=0,style:a})=>{const i=()=>{const c=[];for(let o=0;o<t;o++)c.push(e.jsx(T,{style:[o!==t-1?{marginRight:N.XS}:{},{backgroundColor:b.black_01}],active:n===o}));return c};return e.jsx(s,{style:[a,r.row],children:e.jsx(s,{style:r.paginationWhiteContainer,children:i()})})},H=({dataLength:t=2,activeIndex:n=0,style:a})=>{const{theme:i}=u.useContext(C),c=()=>{const o=[];for(let l=0;l<t;l++)o.push(e.jsx(T,{style:[l!==t-1?{marginRight:N.XS}:{},{backgroundColor:i.colors.primary}],active:n===l},`Dot${l}`));return o};return e.jsx(s,{style:[a,r.row],children:e.jsx(s,{style:r.paginationPinkContainer,children:c()})})},X=({activeIndex:t=0,dataLength:n=2,style:a})=>e.jsx(s,{style:[a,r.row],children:e.jsx(s,{style:r.paginationNumberContainer,children:e.jsx(P,{color:b.black_01,typography:"label_default_medium",children:`${t+1}/${n}`})})}),B=24,$=72,F=({style:t,children:n,scrollViewRef:a})=>{const{theme:i}=u.useContext(C),c=u.useRef(new d.Value(0)).current,[o,l]=u.useState(0),[y,A]=u.useState(0),E=()=>o&&y?{transform:[{translateX:c.interpolate({inputRange:[0,y-o],outputRange:[0,$-B],extrapolate:"clamp"})}]}:{},z=()=>e.jsx(d.ScrollView,{ref:a,onScroll:d.event([{nativeEvent:{contentOffset:{x:c}}}],{useNativeDriver:!0}),alwaysBounceHorizontal:!1,showsHorizontalScrollIndicator:!1,horizontal:!0,style:r.scrollView,onContentSizeChange:g=>{A(g)},onLayout:g=>{l(g.nativeEvent.layout.width)},children:n}),L=()=>e.jsx(s,{style:[r.indicatorContainer,{backgroundColor:i.colors.background.pressed}],children:e.jsx(d.View,{style:[r.indicator,{backgroundColor:i.colors.primary},E()]})});return e.jsxs(s,{style:[t,r.scrollContainer],children:[z(),y>o&&L()]})},Q=t=>{const{type:n}=t;return(()=>{switch(n){case"black_white":return e.jsx(O,{...t});case"number":return e.jsx(X,{...t});default:return e.jsx(H,{...t})}})()},M={title:"Foundation/Pagination",component:Q,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{activeIndex:1,dataLength:5}},h={args:{activeIndex:2,dataLength:5,type:"black_white"}},p={args:{activeIndex:0,dataLength:10,type:"number"}},x={render:()=>e.jsx(F,{children:Array.from({length:10},(t,n)=>n+1).map(t=>e.jsx(s,{style:{width:120,height:60,backgroundColor:b.blue_08,justifyContent:"center",alignItems:"center",marginRight:12},children:e.jsx(P,{typography:"body_default_regular",children:t})}))})};var f,j,w;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    activeIndex: 1,
    dataLength: 5
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,_,v;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activeIndex: 2,
    dataLength: 5,
    type: 'black_white'
  }
}`,...(v=(_=h.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,I,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    dataLength: 10,
    type: 'number'
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var V,W,R;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(W=x.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const U=["Default","BlackWhite","Number","WithScroll"];export{h as BlackWhite,m as Default,p as Number,x as WithScroll,U as __namedExportsOrder,M as default};
