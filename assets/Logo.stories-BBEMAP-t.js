import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{s as H,V as J}from"./index-BzmpT3sc.js";import{C as K,b as M}from"./styles-DZKIi-Hd.js";import"./index-DI7CEG0L.js";const r=H.create({container:{width:28,height:28},image:{borderRadius:9},icon:{},logo:{width:"100%",height:"100%",borderRadius:7},shadow:{shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:2}}),N=({type:I="image",useShadow:R=!0,useBorder:O=!0,useBackground:_=!0,backgroundColor:D=K.black_01,shadowColor:E="#d9d9d9",borderColor:V="#e2e2e2",source:v,style:q})=>{const u=I==="icon",z=u?r.icon:r.image,A=R?[r.shadow,{shadowColor:E}]:{},F=_&&!u?{backgroundColor:D}:{},G=O&&!u?{borderColor:V,borderWidth:2}:{};return d.jsx(J,{style:[q,r.container,z,F,A,G],children:d.jsx(M,{source:{uri:v},style:r.logo})})},X={title:"Library/Logo",component:N,parameters:{layout:"centered"},tags:["autodocs"]},o="https://via.placeholder.com/100",e={args:{source:o}},s={args:{source:o,type:"icon"}},a={args:{source:o,useShadow:!1}},c={args:{source:o,useBorder:!1}},t={args:{source:o,useBackground:!1}},n={args:{source:o,backgroundColor:"#f0f0f0",shadowColor:"#999999",borderColor:"#cccccc"}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: sampleLogo
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    type: 'icon'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,w,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useShadow: false
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var y,b,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBorder: false
  }
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var L,k,B;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBackground: false
  }
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var W,x,j;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    backgroundColor: '#f0f0f0',
    shadowColor: '#999999',
    borderColor: '#cccccc'
  }
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Y=["Default","Icon","WithoutShadow","WithoutBorder","WithoutBackground","CustomColors"];export{n as CustomColors,e as Default,s as Icon,t as WithoutBackground,c as WithoutBorder,a as WithoutShadow,Y as __namedExportsOrder,X as default};
