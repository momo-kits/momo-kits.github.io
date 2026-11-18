import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CPl6p-nG.js";import{y as Y,M as Z,K as oo,A as eo,V as so,r as ro,C as I,T as to,I as no,f as b}from"./index-D9H9ZqTU.js";const o=Y.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"},webOverflow:{overflow:"hidden"},iconTop:{top:-1,right:-1},iconBottom:{bottom:-1,right:-1}}),q="https://static.momocdn.net/app/img/kits",ao=`${q}/logo_momo_circle.png`,co=`${q}/_indicator.png`,io=({size:t=32,name:e,rounded:h=!0,showIconMomo:K=!1,showIconSupport:U=!1,iconSupport:V=co,image:n,accessibilityLabel:g})=>{const S=c.useContext(Z),w=c.useContext(oo),x="Avatar",s=c.useMemo(()=>{if(g)return g;const f=e?`/${e}`:"";return`${S.appId}/${S.code}/${w.screenName}/${x}${f}`},[x,g,S,w,e]),{theme:G}=c.useContext(eo),y=h?t/2:ro.XS,X=f=>f.split(" ").slice(-2).map(Q=>Q.charAt(0).toUpperCase()).join(""),a=()=>{switch(t){case 24:return 16;case 32:return 16;case 40:return 24;case 48:return 32;case 56:return 32;case 72:return 40;default:return 16}},F=a(),H=K&&h,P=U&&h,D={width:a()/2,height:a()/2,borderRadius:a()/4};return r.jsxs(so,{style:[o.container,{width:t,height:t,backgroundColor:I.pink_09,borderColor:G.colors.border.default,borderRadius:y},o.webOverflow],accessibilityLabel:s,children:[!!e&&!n&&r.jsx(to,{color:I.pink_03,typography:"description_xs_regular",accessibilityLabel:s+"|text",children:X(e)}),!e&&!n&&r.jsx(no,{size:F,source:"basic_person",color:I.pink_03,accessibilityLabel:s+"|icon"}),!!n&&r.jsx(b,{source:{uri:n},style:[o.image,{borderRadius:y}],accessibilityLabel:s+"|img"}),H&&r.jsx(b,{source:{uri:ao},style:[o.icon,D,o.iconTop],accessibilityLabel:s+"|top-icon"}),P&&r.jsx(b,{source:{uri:V},style:[o.icon,D,o.iconBottom],accessibilityLabel:s+"|bottom-icon"})]})},go={title:"Library/Avatar",component:io,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{name:"John Doe"}},p={args:{name:"John Doe",size:32,image:"https://picsum.photos/200"}},m={args:{name:"John Doe",size:32,showIconMomo:!0}},u={args:{name:"John Doe",rounded:!1}},l={args:{name:"John Doe",size:72}},d={args:{name:"John Doe",showIconSupport:!0}};var _,C,J;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...(J=(C=i.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var j,W,L;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    image: 'https://picsum.photos/200'
  }
}`,...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,T,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 32,
    showIconMomo: true
  }
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var v,z,A;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    rounded: false
  }
}`,...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var k,R,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 72
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var E,N,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    showIconSupport: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const So=["Default","WithImage","WithMomoIcon","Square","Large","WithSupportIcon"];export{i as Default,l as Large,u as Square,p as WithImage,m as WithMomoIcon,d as WithSupportIcon,So as __namedExportsOrder,go as default};
