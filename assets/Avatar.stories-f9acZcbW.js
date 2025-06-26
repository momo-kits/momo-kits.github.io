import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DI7CEG0L.js";import{s as R,V}from"./index-BzmpT3sc.js";import{x as B,y as O,A as U,i as X,C as d,T as q,I as F,b as g}from"./styles-D3fpLuwk.js";const c=R.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"}}),G="https://static.momocdn.net/app/img/kits/logo_momo_circle.png",H="https://static.momocdn.net/app/img/kits/_indicator.png",K=({size:s=32,name:t,rounded:u=!0,showIconMomo:W=!1,showIconSupport:k=!1,iconSupport:J=H,image:r,accessibilityLabel:l})=>{const h=a.useContext(B),x=a.useContext(O),b="Avatar",o=a.useMemo(()=>l||`${h.appId}/${h.code}/${x.screenName}/${b}${t?`/${t}`:""}`,[b,l,h,x]),{theme:M}=a.useContext(U),y=u?s/2:X.XS,$=E=>E.split(" ").slice(-2).map(N=>N.charAt(0).toUpperCase()).join(""),n=()=>{switch(s){case 24:return 16;case 32:return 16;case 40:return 24;case 48:return 32;case 56:return 32;case 72:return 40;default:return 16}},L=n(),T=W&&u,v=k&&u,I={width:n()/2,height:n()/2,borderRadius:n()/4};return e.jsxs(V,{style:[c.container,{width:s,height:s,backgroundColor:d.pink_09,borderColor:M.colors.border.default,borderRadius:y}],accessibilityLabel:o,children:[!!t&&!r&&e.jsx(q,{color:d.pink_03,typography:"description_xs_regular",accessibilityLabel:o+"|text",children:$(t)}),!t&&!r&&e.jsx(F,{size:L,source:"basic_person",color:d.pink_03,accessibilityLabel:o+"|icon"}),!!r&&e.jsx(g,{source:{uri:r},style:[c.image,{borderRadius:y}],accessibilityLabel:o+"|img"}),T&&e.jsx(g,{source:{uri:G},style:[c.icon,I,{top:-1,right:-1}],accessibilityLabel:o+"|top-icon"}),v&&e.jsx(g,{source:{uri:J},style:[c.icon,I,{bottom:-1,right:-1}],accessibilityLabel:o+"|bottom-icon"})]})},to={title:"Library/Avatar",component:K,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{name:"John Doe",size:32}},p={args:{name:"John Doe",size:32,image:"https://picsum.photos/200"}},m={args:{name:"John Doe",size:32,showIconMomo:!0}};var f,w,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,_,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    image: 'https://picsum.photos/200'
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var D,z,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    showIconMomo: true
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const so=["Default","WithImage","WithMomoIcon"];export{i as Default,p as WithImage,m as WithMomoIcon,so as __namedExportsOrder,to as default};
