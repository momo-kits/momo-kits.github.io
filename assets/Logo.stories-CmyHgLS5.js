import{y as J,C as o,V as K,f as M}from"./index-D9H9ZqTU.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import"./index-CPl6p-nG.js";const s=J.create({container:{width:28,height:28},image:{borderRadius:9},icon:{},logo:{width:"100%",height:"100%",borderRadius:7},shadow:{shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:2}}),N=({type:I="image",useShadow:R=!0,useBorder:O=!0,useBackground:D=!0,backgroundColor:E=o.black_01,shadowColor:V=o.black_06,borderColor:q=o.black_05,source:v,style:z})=>{const d=I==="icon",A=d?s.icon:s.image,F=R?[s.shadow,{shadowColor:V}]:{},G=D&&!d?{backgroundColor:E}:{},H=O&&!d?{borderColor:q,borderWidth:2}:{};return l.jsx(K,{style:[z,s.container,A,G,F,H],children:l.jsx(M,{source:{uri:v},style:s.logo})})},X={title:"Library/Logo",component:N,parameters:{layout:"centered"},tags:["autodocs"]},r="https://picsum.photos/100",e={args:{source:r}},a={args:{source:r,type:"icon"}},t={args:{source:r,useShadow:!1}},c={args:{source:r,useBorder:!1}},n={args:{source:r,useBackground:!1}},u={args:{source:r,backgroundColor:o.black_03,shadowColor:o.black_10,borderColor:o.black_07}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: sampleLogo
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    type: 'icon'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,k,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useShadow: false
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,y,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBorder: false
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var _,B,L;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    useBackground: false
  }
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,x,j;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    source: sampleLogo,
    backgroundColor: Colors.black_03,
    shadowColor: Colors.black_10,
    borderColor: Colors.black_07
  }
}`,...(j=(x=u.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Y=["Default","Icon","WithoutShadow","WithoutBorder","WithoutBackground","CustomColors"];export{u as CustomColors,e as Default,a as Icon,n as WithoutBackground,c as WithoutBorder,t as WithoutShadow,Y as __namedExportsOrder,X as default};
