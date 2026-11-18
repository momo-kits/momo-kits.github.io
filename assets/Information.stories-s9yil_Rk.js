import{fn as D}from"./index-AyJqhRyE.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-CPl6p-nG.js";import{y as oe,r as g,s as R,M as se,K as ie,V as T,f as ae,I as A,T as m,F as E,C as o}from"./index-D9H9ZqTU.js";const c=oe.create({container:{borderRadius:R.S,borderWidth:.5,padding:g.M,width:"100%"},image:{width:40,height:40,borderRadius:R.XS,marginRight:g.S},icon:{marginRight:g.S,marginTop:g.XXS},closeIcon:{marginTop:g.XXS},row:{flexDirection:"row"},cta:{width:"100%",alignItems:"flex-end"},flex:{flex:1}}),P=r=>r?r.toLowerCase()!==r.toUpperCase()||/[0-9_]/.test(r):!1,ce=({title:r,description:s="Description",state:w="default",image:_,onPressCTA:q,showIcon:G=!0,CTA:L,style:J,showIconClose:Q=!0,onPressClose:Y,accessibilityLabel:C,highlightText:S})=>{const j=I.useContext(se),W=I.useContext(ie),$="Information",i=I.useMemo(()=>{if(C)return C;const n=r?`/${r}`:"";return`${j.appId}/${j.code}/${W.screenName}/${$}${n}`},[$,C,j,W,r]),Z=()=>{let n=o.blue_07,d=o.blue_10,l=o.blue_03,a="notifications_info";return w==="warning"&&(n=o.yellow_06,d=o.yellow_09,l=o.orange_03,a="24_notifications_alert_triangle"),w==="error"&&(n=o.red_07,d=o.red_10,l=o.red_03,a="24_notifications_alert_octagon"),{borderColor:n,backgroundColor:d,color:l,iconSource:a}},{backgroundColor:ee,borderColor:te,color:k,iconSource:re}=Z(),ne=()=>{const n=S==null?void 0:S.filter(e=>typeof e=="string"&&e);if(!(n!=null&&n.length)||typeof s!="string")return s;const d=[...n].sort((e,h)=>h.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),l=new RegExp(d,"g"),a=[];let p=0,u;for(;u=l.exec(s);){const e=u.index,h=e+u[0].length;if(P(s[e-1])||P(s[h])){l.lastIndex=e+1;continue}e>p&&a.push(s.slice(p,e)),a.push(t.jsx(m,{typography:"header_xs_semibold",children:u[0]},e)),p=h}return a.push(s.slice(p)),a};return t.jsxs(T,{style:[J,{backgroundColor:ee,borderColor:te},c.container],accessibilityLabel:i,children:[t.jsxs(T,{style:c.row,children:[!!_&&t.jsx(ae,{source:{uri:_},style:c.image,accessibilityLabel:i+"|img"}),!_&&G&&t.jsx(A,{color:k,style:c.icon,size:16,source:re,accessibilityLabel:i+"|icon"}),t.jsxs(T,{style:c.flex,children:[!!r&&t.jsx(m,{typography:"label_default_medium",accessibilityLabel:i+"|title-text",children:r}),t.jsx(m,{typography:"description_default_regular",accessibilityLabel:i+"|description-text",children:ne()})]}),Q&&t.jsx(E,{onPress:Y,accessibilityLabel:i+"|close-icon-touch",children:t.jsx(A,{size:16,source:"navigation_close",style:c.closeIcon})})]}),!!L&&t.jsx(E,{style:c.cta,onPress:q,accessibilityLabel:i+"|cta-touch",children:t.jsx(m,{color:k,typography:"action_xs_bold",accessibilityLabel:i+"|cta-text",children:L})})]})},ue={title:"Library/Information",component:ce,parameters:{layout:"centered"},tags:["autodocs"]},f={args:{title:"Default Information",description:"This is a default information message"}},x={args:{title:"Ưu đãi sắp hết hạn",description:"Voucher giảm 50.000đ sẽ hết hạn vào ngày 30/11.",highlightText:["50.000đ","30/11"]}},y={args:{title:"Sắp đạt hạn mức",description:"Bạn đã dùng 90% hạn mức giao dịch trong tháng.",state:"warning"}},b={args:{title:"Liên kết thất bại",description:"Không thể kết nối tài khoản ngân hàng.",state:"error",CTA:"Thử lại",onPressCTA:D(),onPressClose:D()}};var M,X,V;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Default Information',
    description: 'This is a default information message'
  }
}`,...(V=(X=f.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var v,K,z;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Ưu đãi sắp hết hạn',
    description: 'Voucher giảm 50.000đ sẽ hết hạn vào ngày 30/11.',
    highlightText: ['50.000đ', '30/11']
  }
}`,...(z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var B,H,N;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Sắp đạt hạn mức',
    description: 'Bạn đã dùng 90% hạn mức giao dịch trong tháng.',
    state: 'warning'
  }
}`,...(N=(H=y.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var O,F,U;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Liên kết thất bại',
    description: 'Không thể kết nối tài khoản ngân hàng.',
    state: 'error',
    CTA: 'Thử lại',
    onPressCTA: fn(),
    onPressClose: fn()
  }
}`,...(U=(F=b.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const he=["Default","WithHighlightText","Warning","ErrorWithCTA"];export{f as Default,b as ErrorWithCTA,y as Warning,x as WithHighlightText,he as __namedExportsOrder,ue as default};
