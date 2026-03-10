import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as Te,r as o}from"./index-CPl6p-nG.js";import{R as u,j as l,A as We,i as c,M as we,z as Oe,l as Le,b as He,T as V,I as A}from"./index-CcPzXCq5.js";import{T as ze}from"./index-hVCXVjWQ.js";import{U as _e,s as ke,V as d}from"./index-Bd3FPvDr.js";import{P as Ee,T as De,a as Me,A as N}from"./Animated-DCPrhviD.js";function h(i,t){Ee.isTesting||_e.configureNextLayoutAnimation(i,t??function(){},function(){})}function w(i,t,p){return{duration:i,create:{type:t,property:p},update:{type:t},delete:{type:t,property:p}}}var m={easeInEaseOut:w(300,"easeInEaseOut","opacity"),linear:w(500,"linear","opacity"),spring:{duration:700,create:{type:"linear",property:"opacity"},update:{type:"spring",springDamping:.4},delete:{type:"linear",property:"opacity"}}},g={configureNext:h,create:w,Types:Object.freeze({spring:"spring",linear:"linear",easeInEaseOut:"easeInEaseOut",easeIn:"easeIn",easeOut:"easeOut",keyboard:"keyboard"}),Properties:Object.freeze({opacity:"opacity",scaleX:"scaleX",scaleY:"scaleY",scaleXY:"scaleXY"}),checkConfig(){console.error("LayoutAnimation.checkConfig(...) has been disabled.")},Presets:m,easeInEaseOut:h.bind(null,m.easeInEaseOut),linear:h.bind(null,m.linear),spring:h.bind(null,m.spring)};const s=ke.create({image:{borderRadius:u.XS,marginRight:l.S},header:{flexDirection:"row",paddingHorizontal:l.M,paddingVertical:l.S,borderRadius:u.S},headerContent:{flex:1,flexDirection:"row",justifyContent:"space-between"},infoWrap:{maxWidth:200,alignItems:"flex-end",marginLeft:l.S},flex2:{flex:2},iconWrapper:{width:24,height:24,borderRadius:u.M,justifyContent:"center",alignItems:"center",marginLeft:l.S},icon:{marginLeft:l.S},root:{borderRadius:u.S,overflow:"hidden"}}),Re=Te.forwardRef(({image:i,title:t="Title",description:p,onPress:j,showBorder:se,children:O,imageSize:L=24,subTitle:H,tagProps:z,scrollEnabled:v=!1,scrollContentMaxHeight:ie=240,titleSize:ae="medium",useBackgroundCollapseButton:oe=!1,headerAlign:_="flex-start",expandDefault:le=!1,disabledAnimated:k=!1,accessibilityLabel:C,nestedScrollEnabled:ce=!1,backgroundColor:de,titleColor:pe},ue)=>{const{theme:a}=o.useContext(We),[r,E]=o.useState(le),D=c(14),M=c(20),he=c(16),me=c(22),ge=c(18),fe=c(26),I=o.useContext(we),R=o.useContext(Oe),B="Collapse",n=o.useMemo(()=>C||`${I.appId}/${I.code}/${R.screenName}/${B}/${t}`,[B,C,I,R,t]),$=`arrow_chevron_${r?"up":"down"}_small`,T=se?1:0,W=a.colors.border.default,ye=()=>{switch(ae){case"small":return{fontSize:D,lineHeight:M};case"medium":return{fontSize:he,lineHeight:me};case"large":return{fontSize:ge,lineHeight:fe};default:return{fontSize:D,lineHeight:M}}};o.useImperativeHandle(ue,()=>({setExpanded:E,expanded:r}));const xe=()=>H?e.jsx(V,{numberOfLines:1,typography:"body_default_regular",accessibilityLabel:n+"|sub-title-text",children:H}):z?e.jsx(ze,{...z}):null,be=()=>{j==null||j(r),g.configureNext({duration:300,create:{type:g.Types.easeInEaseOut,property:g.Properties.opacity},update:{type:g.Types.easeInEaseOut}}),E(!r)},Se=()=>oe?e.jsx(d,{style:[s.iconWrapper,{backgroundColor:a.colors.background.tonal}],children:e.jsx(A,{color:a.colors.primary,source:$,accessibilityLabel:n+"|icon"})}):e.jsx(A,{source:$,style:s.icon,accessibilityLabel:n+"|icon"}),je=()=>e.jsxs(Le,{activeOpacity:1,onPress:be,style:[s.header,{alignItems:_}],accessibilityLabel:n+"|touch",accessibilityState:{checked:r},children:[!!i&&e.jsx(He,{source:{uri:i},style:[s.image,{width:L,height:L}],accessibilityLabel:n+"|img"}),e.jsxs(d,{style:[s.headerContent],children:[e.jsxs(d,{style:s.flex2,children:[e.jsx(De,{style:[ye(),{fontFamily:`${a.font}-Semibold`,color:pe??a.colors.text.default}],allowFontScaling:!1,accessibilityLabel:n+"|text",children:t}),!!p&&e.jsx(V,{numberOfLines:2,typography:"body_default_regular",accessibilityLabel:n+"|description-text",children:p})]}),e.jsx(d,{style:[s.infoWrap,{justifyContent:_}],children:xe()})]}),Se()]}),ve=()=>{if(v){const Ie=k?Me:N.ScrollView;return e.jsx(Ie,{scrollEnabled:v,showsVerticalScrollIndicator:!1,nestedScrollEnabled:ce,style:[v&&{maxHeight:ie},r&&{borderTopWidth:T,borderColor:W}],children:r&&O})}const Ce=k?d:N.View;return e.jsx(Ce,{style:[r&&{borderTopWidth:T,borderColor:W}],children:r&&O})};return e.jsxs(d,{style:[s.root,{borderWidth:T,borderColor:W,backgroundColor:de??a.colors.background.surface}],accessibilityLabel:n,children:[je(),ve()]})}),Pe={title:"Library/Collapse",component:Re,parameters:{layout:"centered"},tags:["autodocs"]},f={args:{title:"Default Collapse",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},y={args:{title:"With Description",description:"This is a description for the collapse component",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},x={args:{title:"With Image",image:"https://via.placeholder.com/40",imageSize:40,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},b={args:{title:"With Border",showBorder:!0,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},S={args:{title:"With Scroll",scrollEnabled:!0,scrollContentMaxHeight:200,children:e.jsx("div",{style:{padding:"20px"},children:Array.from({length:10},(i,t)=>e.jsxs("div",{style:{marginBottom:"10px"},children:["Scrollable content ",t+1]},t))})}};var X,P,Y;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Default Collapse',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(Y=(P=f.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var F,U,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'With Description',
    description: 'This is a description for the collapse component',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'With Image',
    image: 'https://via.placeholder.com/40',
    imageSize: 40,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'With Border',
    showBorder: true,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ye=["Default","WithDescription","WithImage","WithBorder","WithScroll"];export{f as Default,b as WithBorder,y as WithDescription,x as WithImage,S as WithScroll,Ye as __namedExportsOrder,Pe as default};
