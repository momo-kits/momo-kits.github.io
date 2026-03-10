import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as g,x as t,A as v,M as G,T as y,C as j}from"./index-CcPzXCq5.js";import{r}from"./index-CPl6p-nG.js";import{V as o}from"./index-Bd3FPvDr.js";import"./Animated-DCPrhviD.js";const J=()=>e.jsx(g,{resizeMode:"stretch",source:{uri:"https://static.momocdn.net/app/img/kits/utils/Head_down_4x.png"},style:[t.tail,{transform:[{rotate:"180deg"}]}]}),K=()=>e.jsx(g,{resizeMode:"stretch",source:{uri:"https://static.momocdn.net/app/img/kits/utils/Head_4x.png"},style:t.tail}),Q=({position:s="top_right",label:b="Label",isRound:N=!1,style:P={}})=>{var R;const{theme:f}=r.useContext(v),p=r.useContext(G),d=s==="top_right"||s==="bottom_right",m=s==="bottom_left"||s==="top_right",U=((R=p==null?void 0:p.features)==null?void 0:R.showBaseLineDebug)??!1,u=r.useMemo(()=>d?"180deg":"0deg",[d]),h=u,x=r.useMemo(()=>m?4:0,[m]),Z=x,I=r.useMemo(()=>[{rotateZ:u}],[u]),_=r.useMemo(()=>[{rotateZ:h}],[h]),O=m?e.jsx(J,{}):e.jsx(K,{}),q=N?e.jsx(o,{collapsable:!1,style:[t.ribbonContent,{backgroundColor:f.colors.warning.primary,marginTop:x}],children:e.jsx(o,{collapsable:!1,style:{transform:_,marginVertical:-2},children:e.jsx(y,{style:t.ribbonLabel,color:j.black_01,typography:"label_xs_medium",children:b})})}):e.jsxs(o,{style:{flexDirection:"row",marginTop:Z},children:[e.jsx(o,{collapsable:!1,style:[t.ribbonSkewContent,{backgroundColor:f.colors.warning.primary}],children:e.jsx(o,{collapsable:!1,style:{transform:_,marginVertical:-2},children:e.jsx(y,{style:t.ribbonLabel,color:j.black_01,typography:"label_xs_medium",children:b})})}),e.jsx(g,{source:{uri:"https://static.momocdn.net/app/img/kits/utils/Tail_4x.png"},style:t.skew})]});return e.jsxs(o,{collapsable:!1,style:[t.ribbon,P,{transform:I},U&&t.debugBaseLine],children:[O,q]},d?"right":"left")},se={title:"Foundation/BadgeRibbon",component:Q,parameters:{layout:"centered"},tags:["autodocs"],decorators:[s=>e.jsx(o,{style:{width:40,height:40,backgroundColor:"#f0f0f0",borderRadius:12},children:e.jsx(s,{})})]},a={args:{label:"Featured",position:"top_right",isRound:!1}},n={args:{label:"New",position:"top_left",isRound:!1}},i={args:{label:"Sale",position:"bottom_right",isRound:!1}},l={args:{label:"Popular",position:"bottom_left",isRound:!1}},c={args:{label:"Featured",position:"top_right",isRound:!0}};var w,C,T;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Featured',
    position: 'top_right',
    isRound: false
  }
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,L,M;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'New',
    position: 'top_left',
    isRound: false
  }
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var S,B,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Sale',
    position: 'bottom_right',
    isRound: false
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,D,V;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Popular',
    position: 'bottom_left',
    isRound: false
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var A,z,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Featured',
    position: 'top_right',
    isRound: true
  }
}`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const re=["TopRight","TopLeft","BottomRight","BottomLeft","RoundedEdges"];export{l as BottomLeft,i as BottomRight,c as RoundedEdges,n as TopLeft,a as TopRight,re as __namedExportsOrder,se as default};
