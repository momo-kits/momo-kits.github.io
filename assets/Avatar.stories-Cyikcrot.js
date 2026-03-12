import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DI7CEG0L.js";import{M as R,z as V,A as q,q as B,j as d,T as O,I as U,d as g}from"./index-BmJxoLT2.js";import{s as X,V as F}from"./index-aTsR8gS4.js";import"./Animated-CU-m9YKj.js";const c=X.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"}}),G="https://static.momocdn.net/app/img/kits/logo_momo_circle.png",H="https://static.momocdn.net/app/img/kits/_indicator.png",K=({size:s=32,name:o,rounded:u=!0,showIconMomo:M=!1,showIconSupport:W=!1,iconSupport:k=H,image:r,accessibilityLabel:l})=>{const h=a.useContext(R),x=a.useContext(V),b="Avatar",e=a.useMemo(()=>l||`${h.appId}/${h.code}/${x.screenName}/${b}${o?`/${o}`:""}`,[b,l,h,x,o]),{theme:J}=a.useContext(q),I=u?s/2:B.XS,$=E=>E.split(" ").slice(-2).map(N=>N.charAt(0).toUpperCase()).join(""),n=()=>{switch(s){case 24:return 16;case 32:return 16;case 40:return 24;case 48:return 32;case 56:return 32;case 72:return 40;default:return 16}},L=n(),T=M&&u,v=W&&u,f={width:n()/2,height:n()/2,borderRadius:n()/4};return t.jsxs(F,{style:[c.container,{width:s,height:s,backgroundColor:d.pink_09,borderColor:J.colors.border.default,borderRadius:I}],accessibilityLabel:e,children:[!!o&&!r&&t.jsx(O,{color:d.pink_03,typography:"description_xs_regular",accessibilityLabel:e+"|text",children:$(o)}),!o&&!r&&t.jsx(U,{size:L,source:"basic_person",color:d.pink_03,accessibilityLabel:e+"|icon"}),!!r&&t.jsx(g,{source:{uri:r},style:[c.image,{borderRadius:I}],accessibilityLabel:e+"|img"}),T&&t.jsx(g,{source:{uri:G},style:[c.icon,f,{top:-1,right:-1}],accessibilityLabel:e+"|top-icon"}),v&&t.jsx(g,{source:{uri:k},style:[c.icon,f,{bottom:-1,right:-1}],accessibilityLabel:e+"|bottom-icon"})]})},so={title:"Library/Avatar",component:K,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{name:"John Doe",size:32}},p={args:{name:"John Doe",size:32,image:"https://picsum.photos/200"}},m={args:{name:"John Doe",size:32,showIconMomo:!0}};var y,w,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,C,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    image: 'https://picsum.photos/200'
  }
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var D,z,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    showIconMomo: true
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const ro=["Default","WithImage","WithMomoIcon"];export{i as Default,p as WithImage,m as WithMomoIcon,ro as __namedExportsOrder,so as default};
