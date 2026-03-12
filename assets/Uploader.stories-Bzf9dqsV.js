import{fn as e}from"./index-BgJgh-x_.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DI7CEG0L.js";import{q as P,r as V,A as ne,u as U,I as z,T as oe,d as re}from"./index-BmJxoLT2.js";import{_ as te,V as S,s as W}from"./index-aTsR8gS4.js";import{_ as se,a as ie}from"./Animated-CU-m9YKj.js";var de=["animating","color","hidesWhenStopped","size","style"],D=a=>l.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:a}),ee=l.forwardRef((a,w)=>{var c=a.animating,s=c===void 0?!0:c,g=a.color,m=g===void 0?"#1976D2":g,p=a.hidesWhenStopped,h=p===void 0?!0:p,r=a.size,i=r===void 0?"small":r,C=a.style,A=te(a,de),j=l.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},D({stroke:m,opacity:.2}),D({stroke:m,strokeDasharray:80,strokeDashoffset:60}));return l.createElement(S,se({},A,{"aria-valuemax":1,"aria-valuemin":0,ref:w,role:"progressbar",style:[f.container,C]}),l.createElement(S,{children:j,style:[typeof i=="number"?{height:i,width:i}:le[i],f.animation,!s&&f.animationPause,!s&&h&&f.hidesWhenStopped]}))});ee.displayName="ActivityIndicator";var f=W.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),le=W.create({small:{width:20,height:20},large:{width:36,height:36}});const d=W.create({picker:{borderWidth:1,alignItems:"center",justifyContent:"center",borderRadius:V.XS,borderStyle:"dashed"},image:{borderRadius:V.XS},uploader:{flexDirection:"row"},cancelIcon:{position:"absolute",top:P.XXS,right:P.XXS},imageWrapper:{marginLeft:P.S},loading:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(255,255,255,0.4)",alignItems:"center",justifyContent:"center"}}),k=({images:a=[],onAdd:w,onCancel:c,onPressImage:s,numberOfImages:g=1,disabled:m,width:p=64,height:h=64})=>{const{theme:r}=l.useContext(ne),i=()=>{let o=r.colors.text.hint,t=r.colors.border.default;return m&&(o=r.colors.text.disable,t=r.colors.border.disable),n.jsxs(U,{onPress:w,disabled:m,style:[d.picker,{borderColor:t,width:p,height:h}],children:[n.jsx(z,{source:"16_navigation_plus",color:o}),n.jsx(oe,{typography:"description_xs_regular",color:o,children:"Thêm hình"})]})},C=()=>n.jsx(S,{style:d.loading,children:n.jsx(ee,{color:r.colors.primary})}),A=(o,t)=>{const{uri:ae,loading:O}=o;return n.jsxs(U,{onPress:()=>s==null?void 0:s(o,t),style:d.imageWrapper,children:[n.jsx(re,{source:{uri:ae},style:[d.image,{width:p,height:h}]}),c&&!O&&n.jsx(U,{onPress:()=>c(o,t),style:d.cancelIcon,children:n.jsx(z,{size:16,source:"navigation_close_circle_full"})}),O&&C()]},`Uploader image ${t}`)},j=a.length<g;return n.jsxs(S,{style:d.uploader,children:[j&&i(),n.jsx(ie,{showsHorizontalScrollIndicator:!1,horizontal:!0,children:a==null?void 0:a.map((o,t)=>A(o,t))})]})};try{k.displayName="Uploader",k.__docgenInfo={description:"",displayName:"Uploader",props:{images:{defaultValue:{value:"[]"},description:"An array of `UploadImage` objects, each representing an image to be uploaded.",name:"images",required:!1,type:{name:"UploadImage[]"}},numberOfImages:{defaultValue:{value:"1"},description:`Optional. Specifies the maximum number of images that can be uploaded.
If not provided, there is no limit by default.`,name:"numberOfImages",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Optional. If `true`, uploading new images is disabled, and any associated upload controls are not interactive.\nDefaults to `false` if not provided.",name:"disabled",required:!1,type:{name:"boolean"}},onAdd:{defaultValue:null,description:`Optional. A callback function that is called when the user initiates the addition of a new image.
Typically used to trigger the file selection dialog.`,name:"onAdd",required:!1,type:{name:"() => void"}},onCancel:{defaultValue:null,description:"Optional. A callback function invoked when the user cancels an ongoing upload.\nReceives the `UploadImage` object being canceled and its index in the images array as parameters.",name:"onCancel",required:!1,type:{name:"(image: UploadImage, index: number) => void"}},onPressImage:{defaultValue:null,description:"Optional. A callback function invoked when the user clicks or taps on an uploaded image.\nThis can be used to open a preview overlay, for example.\nReceives the `UploadImage` object being interacted with and its index in the images array as parameters.",name:"onPressImage",required:!1,type:{name:"(image: UploadImage, index: number) => void"}},width:{defaultValue:{value:"64"},description:`Optional. Specifies the width of the Uploader component's bounding box,
typically in pixels (px). If not provided, the width will adapt based on container or content.`,name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"64"},description:`Optional. Specifies the height of the Uploader component's bounding box,
typically in pixels (px). If not provided, the height will adapt based on container or content.`,name:"height",required:!1,type:{name:"number"}}}}}catch{}try{UploadImage.displayName="UploadImage",UploadImage.__docgenInfo={description:"Represents an individual image being uploaded, containing details about its source and loading state.",displayName:"UploadImage",props:{}}}catch{}const fe={title:"Library/Uploader",component:k,parameters:{layout:"centered"},tags:["autodocs"]},u=[{uri:"https://picsum.photos/200/200?random=1",loading:!1},{uri:"https://picsum.photos/200/200?random=2",loading:!1}],y={args:{images:[],onAdd:e(),onCancel:e(),onPressImage:e()}},b={args:{images:u,onAdd:e(),onCancel:e(),onPressImage:e()}},I={args:{images:[...u,{uri:"https://picsum.photos/200/200?random=3",loading:!0}],onAdd:e(),onCancel:e(),onPressImage:e()}},v={args:{images:u,numberOfImages:5,onAdd:e(),onCancel:e(),onPressImage:e()}},x={args:{images:u,width:100,height:100,onAdd:e(),onCancel:e(),onPressImage:e()}},_={args:{images:u,disabled:!0,onAdd:e(),onCancel:e(),onPressImage:e()}};var q,R,E;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    images: [],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,T,X;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(X=(T=b.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var $,N,M;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    images: [...sampleImages, {
      uri: 'https://picsum.photos/200/200?random=3',
      loading: true
    }],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(M=(N=I.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var F,B,H;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    numberOfImages: 5,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(H=(B=v.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var K,G,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    width: 100,
    height: 100,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    disabled: true,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ye=["Default","WithImages","WithLoadingImage","MultipleImages","CustomSize","Disabled"];export{x as CustomSize,y as Default,_ as Disabled,v as MultipleImages,b as WithImages,I as WithLoadingImage,ye as __namedExportsOrder,fe as default};
