import{fn as e}from"./index-BgJgh-x_.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DI7CEG0L.js";import{_ as ae,k as O,l as _,A as ie,t as te,M as j,I as P,T as oe,c as re}from"./styles-Dd_0X69m.js";import{_ as se,V as S,s as k}from"./index-BzmpT3sc.js";var le=["animating","color","hidesWhenStopped","size","style"],D=n=>d.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:n}),Z=d.forwardRef((n,U)=>{var c=n.animating,r=c===void 0?!0:c,g=n.color,p=g===void 0?"#1976D2":g,m=n.hidesWhenStopped,h=m===void 0?!0:m,t=n.size,s=t===void 0?"small":t,T=n.style,R=se(n,le),C=d.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},D({stroke:p,opacity:.2}),D({stroke:p,strokeDasharray:80,strokeDashoffset:60}));return d.createElement(S,ae({},R,{"aria-valuemax":1,"aria-valuemin":0,ref:U,role:"progressbar",style:[f.container,T]}),d.createElement(S,{children:C,style:[typeof s=="number"?{height:s,width:s}:de[s],f.animation,!r&&f.animationPause,!r&&h&&f.hidesWhenStopped]}))});Z.displayName="ActivityIndicator";var f=k.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),de=k.create({small:{width:20,height:20},large:{width:36,height:36}});const l=k.create({picker:{borderWidth:1,alignItems:"center",justifyContent:"center",borderRadius:_.XS,borderStyle:"dashed"},image:{borderRadius:_.XS},uploader:{flexDirection:"row"},cancelIcon:{position:"absolute",top:O.XXS,right:O.XXS},imageWrapper:{marginLeft:O.S},loading:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(255,255,255,0.4)",alignItems:"center",justifyContent:"center"}}),ee=({images:n=[],onAdd:U,onCancel:c,onPressImage:r,numberOfImages:g=1,disabled:p,width:m=64,height:h=64})=>{const{theme:t}=d.useContext(ie),s=()=>{let i=t.colors.text.hint,o=t.colors.border.default;return p&&(i=t.colors.text.disable,o=t.colors.border.disable),a.jsxs(j,{onPress:U,disabled:p,style:[l.picker,{borderColor:o,width:m,height:h}],children:[a.jsx(P,{source:"16_navigation_plus",color:i}),a.jsx(oe,{typography:"description_xs_regular",color:i,children:"Thêm hình"})]})},T=()=>a.jsx(S,{style:l.loading,children:a.jsx(Z,{color:t.colors.primary})}),R=(i,o)=>{const{uri:ne,loading:A}=i;return a.jsxs(j,{onPress:()=>r==null?void 0:r(i,o),style:l.imageWrapper,children:[a.jsx(re,{source:{uri:ne},style:[l.image,{width:m,height:h}]}),c&&!A&&a.jsx(j,{onPress:()=>c(i,o),style:l.cancelIcon,children:a.jsx(P,{size:16,source:"navigation_close_circle_full"})}),A&&T()]},`Uploader image ${o}`)},C=n.length<g;return a.jsxs(S,{style:l.uploader,children:[C&&s(),a.jsx(te,{showsHorizontalScrollIndicator:!1,horizontal:!0,children:n==null?void 0:n.map((i,o)=>R(i,o))})]})};ee.__docgenInfo={description:"",methods:[],displayName:"Uploader",props:{images:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
   * local file path, or any other valid image source identifier.
   */
  uri?: string;

  /**
   * Optional. Indicates whether the image is currently being uploaded.
   * If \`true\`, the image is in the process of being uploaded. Defaults to \`false\` if not provided.
   */
  loading?: boolean;
}`,signature:{properties:[{key:"uri",value:{name:"string",required:!1},description:`Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
local file path, or any other valid image source identifier.`},{key:"loading",value:{name:"boolean",required:!1},description:"Optional. Indicates whether the image is currently being uploaded.\nIf `true`, the image is in the process of being uploaded. Defaults to `false` if not provided."}]}}],raw:"UploadImage[]"},description:"An array of `UploadImage` objects, each representing an image to be uploaded.",defaultValue:{value:"[]",computed:!1}},numberOfImages:{required:!1,tsType:{name:"number"},description:`Optional. Specifies the maximum number of images that can be uploaded.
If not provided, there is no limit by default.`,defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional. If `true`, uploading new images is disabled, and any associated upload controls are not interactive.\nDefaults to `false` if not provided."},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Optional. A callback function that is called when the user initiates the addition of a new image.
Typically used to trigger the file selection dialog.`},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(image: UploadImage, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
   * local file path, or any other valid image source identifier.
   */
  uri?: string;

  /**
   * Optional. Indicates whether the image is currently being uploaded.
   * If \`true\`, the image is in the process of being uploaded. Defaults to \`false\` if not provided.
   */
  loading?: boolean;
}`,signature:{properties:[{key:"uri",value:{name:"string",required:!1},description:`Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
local file path, or any other valid image source identifier.`},{key:"loading",value:{name:"boolean",required:!1},description:"Optional. Indicates whether the image is currently being uploaded.\nIf `true`, the image is in the process of being uploaded. Defaults to `false` if not provided."}]}},name:"image"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. A callback function invoked when the user cancels an ongoing upload.\nReceives the `UploadImage` object being canceled and its index in the images array as parameters."},onPressImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(image: UploadImage, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
   * local file path, or any other valid image source identifier.
   */
  uri?: string;

  /**
   * Optional. Indicates whether the image is currently being uploaded.
   * If \`true\`, the image is in the process of being uploaded. Defaults to \`false\` if not provided.
   */
  loading?: boolean;
}`,signature:{properties:[{key:"uri",value:{name:"string",required:!1},description:`Optional. The URI (Uniform Resource Identifier) pointing to the image's location. This can be a web URL,
local file path, or any other valid image source identifier.`},{key:"loading",value:{name:"boolean",required:!1},description:"Optional. Indicates whether the image is currently being uploaded.\nIf `true`, the image is in the process of being uploaded. Defaults to `false` if not provided."}]}},name:"image"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. A callback function invoked when the user clicks or taps on an uploaded image.\nThis can be used to open a preview overlay, for example.\nReceives the `UploadImage` object being interacted with and its index in the images array as parameters."},width:{required:!1,tsType:{name:"number"},description:`Optional. Specifies the width of the Uploader component's bounding box,
typically in pixels (px). If not provided, the width will adapt based on container or content.`,defaultValue:{value:"64",computed:!1}},height:{required:!1,tsType:{name:"number"},description:`Optional. Specifies the height of the Uploader component's bounding box,
typically in pixels (px). If not provided, the height will adapt based on container or content.`,defaultValue:{value:"64",computed:!1}}}};const he={title:"Library/Uploader",component:ee,parameters:{layout:"centered"},tags:["autodocs"]},u=[{uri:"https://picsum.photos/200/200?random=1",loading:!1},{uri:"https://picsum.photos/200/200?random=2",loading:!1}],b={args:{images:[],onAdd:e(),onCancel:e(),onPressImage:e()}},y={args:{images:u,onAdd:e(),onCancel:e(),onPressImage:e()}},I={args:{images:[...u,{uri:"https://picsum.photos/200/200?random=3",loading:!0}],onAdd:e(),onCancel:e(),onPressImage:e()}},v={args:{images:u,numberOfImages:5,onAdd:e(),onCancel:e(),onPressImage:e()}},w={args:{images:u,width:100,height:100,onAdd:e(),onCancel:e(),onPressImage:e()}},x={args:{images:u,disabled:!0,onAdd:e(),onCancel:e(),onPressImage:e()}};var W,q,L;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    images: [],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,E,V;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(V=(E=y.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var X,$,M;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    images: [...sampleImages, {
      uri: 'https://picsum.photos/200/200?random=3',
      loading: true
    }],
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(M=($=I.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var F,N,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    numberOfImages: 5,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(B=(N=v.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var H,K,G;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    width: 100,
    height: 100,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(G=(K=w.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,Y;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    disabled: true,
    onAdd: fn(),
    onCancel: fn(),
    onPressImage: fn()
  }
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const fe=["Default","WithImages","WithLoadingImage","MultipleImages","CustomSize","Disabled"];export{w as CustomSize,b as Default,x as Disabled,v as MultipleImages,y as WithImages,I as WithLoadingImage,fe as __namedExportsOrder,he as default};
