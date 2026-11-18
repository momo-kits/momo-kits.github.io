import{fn as e}from"./index-AyJqhRyE.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CPl6p-nG.js";import{$ as ae,V as v,a0 as re,y as O,r as A,s as z,A as ne,_ as se,F as W,I as D,T as oe,f as te}from"./index-D9H9ZqTU.js";var ie=["animating","color","hidesWhenStopped","size","style"],E=a=>m.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:a}),Z=m.forwardRef((a,j)=>{var l=a.animating,t=l===void 0?!0:l,u=a.color,d=u===void 0?"#1976D2":u,g=a.hidesWhenStopped,h=g===void 0?!0:g,s=a.size,i=s===void 0?"small":s,P=a.style,_=ae(a,ie),w=m.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},E({stroke:d,opacity:.2}),E({stroke:d,strokeDasharray:80,strokeDashoffset:60}));return m.createElement(v,re({},_,{"aria-valuemax":1,"aria-valuemin":0,ref:j,role:"progressbar",style:[f.container,P]}),m.createElement(v,{children:w,style:[typeof i=="number"?{height:i,width:i}:ce[i],f.animation,!t&&f.animationPause,!t&&h&&f.hidesWhenStopped]}))});Z.displayName="ActivityIndicator";var f=O.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),ce=O.create({small:{width:20,height:20},large:{width:36,height:36}});const c=O.create({picker:{borderWidth:1,alignItems:"center",justifyContent:"center",borderRadius:z.XS,borderStyle:"dashed"},image:{borderRadius:z.XS},uploader:{flexDirection:"row"},cancelIcon:{position:"absolute",top:A.XXS,right:A.XXS},imageWrapper:{marginLeft:A.S},loading:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(255,255,255,0.4)",alignItems:"center",justifyContent:"center"}}),me=({images:a=[],onAdd:j,onCancel:l,onPressImage:t,numberOfImages:u=1,disabled:d,width:g=64,height:h=64})=>{const{theme:s}=m.useContext(ne),i=()=>{let n=s.colors.text.hint,o=s.colors.border.default;return d&&(n=s.colors.text.disable,o=s.colors.border.disable),r.jsxs(W,{onPress:j,disabled:d,style:[c.picker,{borderColor:o,width:g,height:h}],children:[r.jsx(D,{source:"16_navigation_plus",color:n}),r.jsx(oe,{typography:"description_xs_regular",color:n,children:"Thêm hình"})]})},P=()=>r.jsx(v,{style:c.loading,children:r.jsx(Z,{color:s.colors.primary})}),_=(n,o)=>{const{uri:ee,loading:k}=n;return r.jsxs(W,{onPress:()=>t==null?void 0:t(n,o),style:c.imageWrapper,children:[r.jsx(te,{source:{uri:ee},style:[c.image,{width:g,height:h}]}),l&&!k&&r.jsx(W,{onPress:()=>l(n,o),style:c.cancelIcon,children:r.jsx(D,{size:16,source:"navigation_close_circle_full"})}),k&&P()]},`Uploader image ${o}`)},w=a.length<u;return r.jsxs(v,{style:c.uploader,children:[w&&i(),r.jsx(se,{showsHorizontalScrollIndicator:!1,horizontal:!0,children:a==null?void 0:a.map((n,o)=>_(n,o))})]})},ue={title:"Library/Uploader",component:me,parameters:{layout:"centered",docs:{description:{component:"Shows one image by default. Raise `numberOfImages` to allow more; the add tile hides when the limit is reached."}}},tags:["autodocs"]},p=[{uri:"https://picsum.photos/200/200?random=1",loading:!1},{uri:"https://picsum.photos/200/200?random=2",loading:!1}],I={args:{images:[],onAdd:e(),onCancel:e(),onPressImage:e()}},y={args:{numberOfImages:5,images:p,onAdd:e(),onCancel:e(),onPressImage:e()}},b={args:{numberOfImages:5,images:[...p,{uri:"https://picsum.photos/200/200?random=3",loading:!0}],onAdd:e(),onCancel:e(),onPressImage:e()}},S={args:{images:p,numberOfImages:5,onAdd:e(),onCancel:e(),onPressImage:e()}},x={args:{numberOfImages:5,images:p,width:100,height:100,onAdd:e(),onCancel:e(),onPressImage:e()}},C={args:{numberOfImages:5,images:p,disabled:!0,onAdd:e(),onCancel:e(),onPressImage:e()}};var L,$,R;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    images: [],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(R=($=I.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var X,T,F;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    numberOfImages: 5,
    images: sampleImages,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(F=(T=y.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var M,U,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    numberOfImages: 5,
    images: [...sampleImages, {
      uri: 'https://picsum.photos/200/200?random=3',
      loading: true
    }],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var B,H,K;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    numberOfImages: 5,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(K=(H=S.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var N,q,G;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    numberOfImages: 5,
    images: sampleImages,
    width: 100,
    height: 100,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    numberOfImages: 5,
    images: sampleImages,
    disabled: true,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(Y=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const he=["Default","WithImages","WithLoadingImage","MultipleImages","CustomSize","Disabled"];export{x as CustomSize,I as Default,C as Disabled,S as MultipleImages,y as WithImages,b as WithLoadingImage,he as __namedExportsOrder,ue as default};
