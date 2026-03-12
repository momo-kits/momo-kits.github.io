import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{j as H,d as J}from"./index-BmJxoLT2.js";import"./index-DI7CEG0L.js";import{s as K,V as M}from"./index-aTsR8gS4.js";import"./Animated-CU-m9YKj.js";const o=K.create({container:{width:28,height:28},image:{borderRadius:9},icon:{},logo:{width:"100%",height:"100%",borderRadius:7},shadow:{shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:2}}),d=({type:l="image",useShadow:x=!0,useBorder:j=!0,useBackground:I=!0,backgroundColor:R=H.black_01,shadowColor:O="#d9d9d9",borderColor:D="#e2e2e2",source:E,style:N})=>{const u=l==="icon",z=u?o.icon:o.image,A=x?[o.shadow,{shadowColor:O}]:{},F=I&&!u?{backgroundColor:R}:{},G=j&&!u?{borderColor:D,borderWidth:2}:{};return i.jsx(M,{style:[N,o.container,z,F,A,G],children:i.jsx(J,{source:{uri:E},style:o.logo})})};try{d.displayName="Logo",d.__docgenInfo={description:"",displayName:"Logo",props:{type:{defaultValue:{value:"image"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"image"'}]}},useShadow:{defaultValue:{value:"true"},description:"",name:"useShadow",required:!1,type:{name:"boolean"}},useBorder:{defaultValue:{value:"true"},description:"",name:"useBorder",required:!1,type:{name:"boolean"}},useBackground:{defaultValue:{value:"true"},description:"",name:"useBackground",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:{value:"#ffffff"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},shadowColor:{defaultValue:{value:"#d9d9d9"},description:"",name:"shadowColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"#e2e2e2"},description:"",name:"borderColor",required:!1,type:{name:"string"}},source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle | ViewStyle[]"}}}}}catch{}const Y={title:"Library/Logo",component:d,parameters:{layout:"centered"},tags:["autodocs"]},e="https://via.placeholder.com/100",r={args:{source:e}},a={args:{source:e,type:"icon"}},s={args:{source:e,useShadow:!1}},t={args:{source:e,useBorder:!1}},c={args:{source:e,useBackground:!1}},n={args:{source:e,backgroundColor:"#f0f0f0",shadowColor:"#999999",borderColor:"#cccccc"}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: sampleLogo
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    type: 'icon'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,b,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useShadow: false
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,V,k;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBorder: false
  }
}`,...(k=(V=t.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var B,L,v;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBackground: false
  }
}`,...(v=(L=c.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var _,q,W;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    backgroundColor: '#f0f0f0',
    shadowColor: '#999999',
    borderColor: '#cccccc'
  }
}`,...(W=(q=n.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const Z=["Default","Icon","WithoutShadow","WithoutBorder","WithoutBackground","CustomColors"];export{n as CustomColors,r as Default,a as Icon,c as WithoutBackground,t as WithoutBorder,s as WithoutShadow,Z as __namedExportsOrder,Y as default};
