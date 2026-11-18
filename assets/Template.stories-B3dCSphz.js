import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as s}from"./index-AyJqhRyE.js";import{C as P}from"./index-BNR06vzY.js";import{y as p,x as n,P as B,r as a,F as E,f as M,s as d,C as k,V as G}from"./index-D9H9ZqTU.js";import"./index-CPl6p-nG.js";import"./react-native-gesture-handler-rwoKkCyM.js";import"./index-D9ZpeYt-.js";const r=p.create({container:{height:210},image:{width:"100%",height:"100%"},pagination:{position:"absolute",alignSelf:"center"}}),H=({animatedValue:t=new n.Value(0),paginationBottom:b=56,data:c=[],activeIndex:I=0,paginationProps:S,carouselProps:R,onSnapToItem:j,onPressItem:m,paginationType:T="black_white"})=>{const V=t.interpolate({inputRange:[-300,0,300],outputRange:[4,1,1],extrapolate:"clamp"}),C=t.interpolate({inputRange:[0,150,300],outputRange:[1,.5,0],extrapolate:"clamp"}),A=t.interpolate({inputRange:[-300,0],outputRange:[-80,-2],extrapolate:"clamp"}),D=t.interpolate({inputRange:[-40,0],outputRange:[0,1]}),_=v=>{const{item:l,index:L}=v;return e.jsx(E,{disabled:!m,onPress:m,children:e.jsx(M,{style:r.image,source:{uri:l}},`Header banner ${l}_${L}`)})};return e.jsxs(n.View,{style:[r.container,{opacity:C,transform:[{scale:V},{translateY:A}]}],children:[e.jsx(P,{...R,full:!0,data:c,onSnapToItem:j,renderItem:_}),e.jsx(n.View,{style:[r.pagination,{bottom:b-a.S,opacity:D}],children:e.jsx(B,{...S,activeIndex:I,dataLength:c.length,type:T})})]})};p.create({container:{flexDirection:"row",padding:a.M,borderRadius:d.S,backgroundColor:k.blue_10,width:"100%"},flex:{flex:1},momoImage:{width:64,height:64,marginRight:a.S},image:{width:52,height:20},imageList:{flexDirection:"row"},pciImage:{marginRight:a.XS,width:25,height:20},message:{marginBottom:a.S},footer:{flexDirection:"row",justifyContent:"space-between"},customAvatar:{width:24,height:24,borderWidth:1,borderRadius:d.L,alignItems:"center",justifyContent:"center",marginLeft:-6},iconList:{flexDirection:"row"},avatarImage:{width:"100%",height:"100%"}});p.create({footerContainer:{flexDirection:"row",justifyContent:"space-between"}});const y=["https://picsum.photos/id/10/750/400","https://picsum.photos/id/20/750/400","https://picsum.photos/id/30/750/400"],q={title:"Library/Template/HeaderSliderBanner",component:H,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(G,{style:{width:375},children:e.jsx(t,{})})]},o={args:{animatedValue:new n.Value(0),data:y,activeIndex:0,paginationType:"black_white",onSnapToItem:s(),onPressItem:s()}},i={args:{animatedValue:new n.Value(0),data:y,activeIndex:1,paginationType:"number",paginationBottom:24,onSnapToItem:s()}};var g,u,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    animatedValue: new Animated.Value(0),
    data: IMAGES,
    activeIndex: 0,
    paginationType: 'black_white',
    onSnapToItem: fn(),
    onPressItem: fn()
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,x,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    animatedValue: new Animated.Value(0),
    data: IMAGES,
    activeIndex: 1,
    paginationType: 'number',
    paginationBottom: 24,
    onSnapToItem: fn()
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const z=["Default","NumberPagination"];export{o as Default,i as NumberPagination,z as __namedExportsOrder,q as default};
