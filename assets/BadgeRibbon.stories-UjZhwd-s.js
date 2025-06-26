import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{V as r}from"./index-BzmpT3sc.js";import{b as d,s as e,A as N,T as h,C as x}from"./styles-D3fpLuwk.js";import{r as P}from"./index-DI7CEG0L.js";const V=()=>t.jsx(d,{resizeMode:"stretch",source:{uri:"https://static.momocdn.net/app/img/kits/utils/Head_down_4x.png"},style:[e.tail,{transform:[{rotate:"180deg"}]}]}),I=()=>t.jsx(d,{resizeMode:"stretch",source:{uri:"https://static.momocdn.net/app/img/kits/utils/Head_4x.png"},style:e.tail}),O=({position:o="top_right",label:p="Label",isRound:A=!1,style:D={}})=>{const{theme:m}=P.useContext(N);let u="0deg",c="0deg",g=t.jsx(I,{}),b=0,f=0;(o==="top_right"||o==="bottom_right")&&(u="180deg",c="180deg"),(o==="bottom_left"||o==="top_right")&&(b=4,g=t.jsx(V,{}),f=4);const H=A?t.jsx(r,{style:[e.ribbonContent,{backgroundColor:m.colors.warning.primary,marginTop:b}],children:t.jsx(h,{style:[e.ribbonLabel,{transform:[{rotate:c}]}],color:x.black_01,typography:"label_xs_medium",children:p})}):t.jsxs(r,{style:{flexDirection:"row",marginTop:f},children:[t.jsx(r,{style:[e.ribbonSkewContent,{backgroundColor:m.colors.warning.primary}],children:t.jsx(h,{style:[e.ribbonLabel,{transform:[{rotate:c}]}],color:x.black_01,typography:"label_xs_medium",children:p})}),t.jsx(d,{source:{uri:"https://static.momocdn.net/app/img/kits/utils/Tail_4x.png"},style:e.skew})]});return t.jsxs(r,{style:[D,e.ribbon,{transform:[{rotate:u}]}],children:[g,H]})},Q={title:"Foundation/BadgeRibbon",component:O,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>t.jsx(r,{style:{width:40,height:40,backgroundColor:"#f0f0f0",borderRadius:12},children:t.jsx(o,{})})]},s={args:{label:"Featured",position:"top_right",isRound:!1}},a={args:{label:"New",position:"top_left",isRound:!1}},n={args:{label:"Sale",position:"bottom_right",isRound:!1}},i={args:{label:"Popular",position:"bottom_left",isRound:!1}},l={args:{label:"Featured",position:"top_right",isRound:!0}};var _,R,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Featured',
    position: 'top_right',
    isRound: false
  }
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var j,w,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'New',
    position: 'top_left',
    isRound: false
  }
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,T,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Sale',
    position: 'bottom_right',
    isRound: false
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var L,B,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Popular',
    position: 'bottom_left',
    isRound: false
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,M,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Featured',
    position: 'top_right',
    isRound: true
  }
}`,...(z=(M=l.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const W=["TopRight","TopLeft","BottomRight","BottomLeft","RoundedEdges"];export{i as BottomLeft,n as BottomRight,l as RoundedEdges,a as TopLeft,s as TopRight,W as __namedExportsOrder,Q as default};
