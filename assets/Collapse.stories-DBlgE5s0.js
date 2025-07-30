import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as fe,r as l}from"./index-DI7CEG0L.js";import{G as xe,R as u,i as c,A as be,x as Se,y as je,M as ve,b as Ce,J as Ie,T as V,N as Te,z as $,I as N,H as s}from"./styles-BFdRcqeG.js";import{T as We}from"./index-D7keAcYs.js";import{U as we,s as Oe,V as d}from"./index-BzmpT3sc.js";function h(a,t){xe.isTesting||we.configureNextLayoutAnimation(a,t??function(){},function(){})}function w(a,t,p){return{duration:a,create:{type:t,property:p},update:{type:t},delete:{type:t,property:p}}}var m={easeInEaseOut:w(300,"easeInEaseOut","opacity"),linear:w(500,"linear","opacity"),spring:{duration:700,create:{type:"linear",property:"opacity"},update:{type:"spring",springDamping:.4},delete:{type:"linear",property:"opacity"}}},g={configureNext:h,create:w,Types:Object.freeze({spring:"spring",linear:"linear",easeInEaseOut:"easeInEaseOut",easeIn:"easeIn",easeOut:"easeOut",keyboard:"keyboard"}),Properties:Object.freeze({opacity:"opacity",scaleX:"scaleX",scaleY:"scaleY",scaleXY:"scaleXY"}),checkConfig(){console.error("LayoutAnimation.checkConfig(...) has been disabled.")},Presets:m,easeInEaseOut:h.bind(null,m.easeInEaseOut),linear:h.bind(null,m.linear),spring:h.bind(null,m.spring)};const i=Oe.create({image:{borderRadius:u.XS,marginRight:c.S},header:{flexDirection:"row",paddingHorizontal:c.M,paddingVertical:c.S,borderRadius:u.S},headerContent:{flex:1,flexDirection:"row",justifyContent:"space-between"},infoWrap:{maxWidth:200,alignItems:"flex-end",marginLeft:c.S},flex2:{flex:2},iconWrapper:{width:24,height:24,borderRadius:u.M,justifyContent:"center",alignItems:"center",marginLeft:c.S},icon:{marginLeft:c.S},root:{borderRadius:u.S,overflow:"hidden"}}),Le=fe.forwardRef(({image:a,title:t="Title",description:p,onPress:j,showBorder:ne,children:O,imageSize:L=24,subTitle:_,tagProps:H,scrollEnabled:v=!1,scrollContentMaxHeight:se=240,titleSize:ie="medium",useBackgroundCollapseButton:ae=!1,headerAlign:k="flex-start",expandDefault:oe=!1,disabledAnimated:z=!1,accessibilityLabel:C},le)=>{const{theme:o}=l.useContext(be),[r,E]=l.useState(oe),I=l.useContext(Se),D=l.useContext(je),M="Collapse",n=l.useMemo(()=>C||`${I.appId}/${I.code}/${D.screenName}/${M}/${t}`,[M,C,I,D]),R=r?"arrow_chevron_up_small":"arrow_chevron_down_small",T=ne?1:0,W=o.colors.border.default,ce=o.colors.background.surface,de=()=>{switch(ie){case"small":return{fontSize:s(14),lineHeight:s(20)};case"medium":return{fontSize:s(16),lineHeight:s(22)};case"large":return{fontSize:s(18),lineHeight:s(26)};default:return{fontSize:s(14),lineHeight:s(20)}}};l.useImperativeHandle(le,()=>({setExpanded:E,expanded:r}));const pe=()=>_?e.jsx(V,{numberOfLines:1,typography:"body_default_regular",accessibilityLabel:n+"|sub-title-text",children:_}):H?e.jsx(We,{...H}):null,ue=()=>{j==null||j(r),g.configureNext({duration:300,create:{type:g.Types.easeInEaseOut,property:g.Properties.opacity},update:{type:g.Types.easeInEaseOut}}),E(!r)},he=()=>ae?e.jsx(d,{style:[i.iconWrapper,{backgroundColor:o.colors.background.tonal}],children:e.jsx(N,{color:o.colors.primary,source:R,accessibilityLabel:n+"|icon"})}):e.jsx(N,{source:R,style:i.icon,accessibilityLabel:n+"|icon"}),me=()=>e.jsxs(ve,{activeOpacity:1,onPress:ue,style:[i.header,{alignItems:k}],accessibilityLabel:n+"|touch",accessibilityState:{checked:r},children:[!!a&&e.jsx(Ce,{source:{uri:a},style:[i.image,{width:L,height:L}],accessibilityLabel:n+"|img"}),e.jsxs(d,{style:[i.headerContent],children:[e.jsxs(d,{style:i.flex2,children:[e.jsx(Ie,{style:[de(),{fontFamily:`${o.font}-Semibold`,color:o.colors.text.default}],accessibilityLabel:n+"|text",children:t}),!!p&&e.jsx(V,{numberOfLines:2,typography:"body_default_regular",accessibilityLabel:n+"|description-text",children:p})]}),e.jsx(d,{style:[i.infoWrap,{justifyContent:k}],children:pe()})]}),he()]}),ge=()=>{if(v){const ye=z?Te:$.ScrollView;return e.jsx(ye,{scrollEnabled:v,showsVerticalScrollIndicator:!1,style:[v&&{maxHeight:se},r&&{borderTopWidth:T,borderColor:W}],children:r&&O})}const B=z?d:$.View;return e.jsx(B,{style:[r&&{borderTopWidth:T,borderColor:W}],children:r&&O})};return e.jsxs(d,{style:[i.root,{borderWidth:T,borderColor:W,backgroundColor:ce}],accessibilityLabel:n,children:[me(),ge()]})}),De={title:"Library/Collapse",component:Le,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{title:"Default Collapse",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},f={args:{title:"With Description",description:"This is a description for the collapse component",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},x={args:{title:"With Image",image:"https://via.placeholder.com/40",imageSize:40,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},b={args:{title:"With Border",showBorder:!0,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},S={args:{title:"With Scroll",scrollEnabled:!0,scrollContentMaxHeight:200,children:e.jsx("div",{style:{padding:"20px"},children:Array.from({length:10},(a,t)=>e.jsxs("div",{style:{marginBottom:"10px"},children:["Scrollable content ",t+1]},t))})}};var A,X,Y;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Default Collapse',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var P,F,U;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'With Description',
    description: 'This is a description for the collapse component',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,J,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'With Image',
    image: 'https://via.placeholder.com/40',
    imageSize: 40,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var K,Q,Z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'With Border',
    showBorder: true,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(Z=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: 'With Scroll',
    scrollEnabled: true,
    scrollContentMaxHeight: 200,
    children: <div style={{
      padding: '20px'
    }}>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} style={{
        marginBottom: '10px'
      }}>
            Scrollable content {i + 1}
          </div>)}
      </div>
  }
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Me=["Default","WithDescription","WithImage","WithBorder","WithScroll"];export{y as Default,b as WithBorder,f as WithDescription,x as WithImage,S as WithScroll,Me as __namedExportsOrder,De as default};
