import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{f as G,c as H}from"./styles-Dd_0X69m.js";import"./index-DI7CEG0L.js";import{s as J,V as K}from"./index-BzmpT3sc.js";const o=J.create({container:{width:28,height:28},image:{borderRadius:9},icon:{},logo:{width:"100%",height:"100%",borderRadius:7},shadow:{shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:2}}),T=({type:W="image",useShadow:x=!0,useBorder:I=!0,useBackground:_=!0,backgroundColor:j=G.black_01,shadowColor:R="#d9d9d9",borderColor:O="#e2e2e2",source:D,style:E})=>{const u=W==="icon",A=u?o.icon:o.image,N=x?[o.shadow,{shadowColor:R}]:{},z=_&&!u?{backgroundColor:j}:{},F=I&&!u?{borderColor:O,borderWidth:2}:{};return d.jsx(K,{style:[E,o.container,A,z,N,F],children:d.jsx(H,{source:{uri:D},style:o.logo})})};T.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{type:{required:!1,tsType:{name:"union",raw:"'icon' | 'image'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'image'"}]},description:"",defaultValue:{value:"'image'",computed:!1}},useShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},useBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},useBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#ffffff'",computed:!1}},shadowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#d9d9d9'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e2e2e2'",computed:!1}},source:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"union",raw:"ViewStyle | ViewStyle[]",elements:[{name:"ViewStyle"},{name:"Array",elements:[{name:"ViewStyle"}],raw:"ViewStyle[]"}]},description:""}}};const X={title:"Library/Logo",component:T,parameters:{layout:"centered"},tags:["autodocs"]},e="https://via.placeholder.com/100",r={args:{source:e}},s={args:{source:e,type:"icon"}},a={args:{source:e,useShadow:!1}},t={args:{source:e,useBorder:!1}},c={args:{source:e,useBackground:!1}},n={args:{source:e,backgroundColor:"#f0f0f0",shadowColor:"#999999",borderColor:"#cccccc"}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: sampleLogo
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    type: 'icon'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useShadow: false
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,b,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBorder: false
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var V,L,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBackground: false
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var v,B,q;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    backgroundColor: '#f0f0f0',
    shadowColor: '#999999',
    borderColor: '#cccccc'
  }
}`,...(q=(B=n.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const Y=["Default","Icon","WithoutShadow","WithoutBorder","WithoutBackground","CustomColors"];export{n as CustomColors,r as Default,s as Icon,c as WithoutBackground,t as WithoutBorder,a as WithoutShadow,Y as __namedExportsOrder,X as default};
