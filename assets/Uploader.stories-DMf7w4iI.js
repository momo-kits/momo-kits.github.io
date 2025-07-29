import{fn as e}from"./index-BgJgh-x_.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DI7CEG0L.js";import{_ as re,i as W,R as D,A as ae,N as se,M as w,I as E,T as ne,b as oe}from"./styles-DZKIi-Hd.js";import{_ as te,V as v,s as k}from"./index-BzmpT3sc.js";var ie=["animating","color","hidesWhenStopped","size","style"],L=r=>l.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:r}),Z=l.forwardRef((r,_)=>{var d=r.animating,t=d===void 0?!0:d,u=r.color,m=u===void 0?"#1976D2":u,p=r.hidesWhenStopped,h=p===void 0?!0:p,n=r.size,i=n===void 0?"small":n,j=r.style,P=te(r,ie),A=l.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},L({stroke:m,opacity:.2}),L({stroke:m,strokeDasharray:80,strokeDashoffset:60}));return l.createElement(v,re({},P,{"aria-valuemax":1,"aria-valuemin":0,ref:_,role:"progressbar",style:[f.container,j]}),l.createElement(v,{children:A,style:[typeof i=="number"?{height:i,width:i}:ce[i],f.animation,!t&&f.animationPause,!t&&h&&f.hidesWhenStopped]}))});Z.displayName="ActivityIndicator";var f=k.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),ce=k.create({small:{width:20,height:20},large:{width:36,height:36}});const c=k.create({picker:{borderWidth:1,alignItems:"center",justifyContent:"center",borderRadius:D.XS,borderStyle:"dashed"},image:{borderRadius:D.XS},uploader:{flexDirection:"row"},cancelIcon:{position:"absolute",top:W.XXS,right:W.XXS},imageWrapper:{marginLeft:W.S},loading:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(255,255,255,0.4)",alignItems:"center",justifyContent:"center"}}),le=({images:r=[],onAdd:_,onCancel:d,onPressImage:t,numberOfImages:u=1,disabled:m,width:p=64,height:h=64})=>{const{theme:n}=l.useContext(ae),i=()=>{let s=n.colors.text.hint,o=n.colors.border.default;return m&&(s=n.colors.text.disable,o=n.colors.border.disable),a.jsxs(w,{onPress:_,disabled:m,style:[c.picker,{borderColor:o,width:p,height:h}],children:[a.jsx(E,{source:"16_navigation_plus",color:s}),a.jsx(ne,{typography:"description_xs_regular",color:s,children:"Thêm hình"})]})},j=()=>a.jsx(v,{style:c.loading,children:a.jsx(Z,{color:n.colors.primary})}),P=(s,o)=>{const{uri:ee,loading:z}=s;return a.jsxs(w,{onPress:()=>t==null?void 0:t(s,o),style:c.imageWrapper,children:[a.jsx(oe,{source:{uri:ee},style:[c.image,{width:p,height:h}]}),d&&!z&&a.jsx(w,{onPress:()=>d(s,o),style:c.cancelIcon,children:a.jsx(E,{size:16,source:"navigation_close_circle_full"})}),z&&j()]},`Uploader image ${o}`)},A=r.length<u;return a.jsxs(v,{style:c.uploader,children:[A&&i(),a.jsx(se,{showsHorizontalScrollIndicator:!1,horizontal:!0,children:r==null?void 0:r.map((s,o)=>P(s,o))})]})},he={title:"Library/Uploader",component:le,parameters:{layout:"centered"},tags:["autodocs"]},g=[{uri:"https://picsum.photos/200/200?random=1",loading:!1},{uri:"https://picsum.photos/200/200?random=2",loading:!1}],y={args:{images:[],onAdd:e(),onCancel:e(),onPressImage:e()}},I={args:{images:g,onAdd:e(),onCancel:e(),onPressImage:e()}},S={args:{images:[...g,{uri:"https://picsum.photos/200/200?random=3",loading:!0}],onAdd:e(),onCancel:e(),onPressImage:e()}},b={args:{images:g,numberOfImages:5,onAdd:e(),onCancel:e(),onPressImage:e()}},x={args:{images:g,width:100,height:100,onAdd:e(),onCancel:e(),onPressImage:e()}},C={args:{images:g,disabled:!0,onAdd:e(),onCancel:e(),onPressImage:e()}};var R,X,$;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    images: [],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var T,M,O;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(O=(M=I.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var U,V,F;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    images: [...sampleImages, {
      uri: 'https://picsum.photos/200/200?random=3',
      loading: true
    }],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(F=(V=S.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var N,B,H;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    numberOfImages: 5,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var K,q,G;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    width: 100,
    height: 100,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    disabled: true,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(Y=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const fe=["Default","WithImages","WithLoadingImage","MultipleImages","CustomSize","Disabled"];export{x as CustomSize,y as Default,C as Disabled,b as MultipleImages,I as WithImages,S as WithLoadingImage,fe as __namedExportsOrder,he as default};
