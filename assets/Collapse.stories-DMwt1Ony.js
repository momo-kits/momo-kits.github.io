import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as Le,r as a}from"./index-CPl6p-nG.js";import{Y as He,Z as _e,y as Be,s as p,r as o,A as ze,U as ke,N as M,M as Ne,K as Re,V as l,F as Fe,f as Me,W as Ae,T as A,_ as Ve,x as V,I as Y,q as Ye}from"./index-D9H9ZqTU.js";function u(i,t){He.isTesting||_e.configureNextLayoutAnimation(i,t??function(){},function(){})}function O(i,t,c){return{duration:i,create:{type:t,property:c},update:{type:t},delete:{type:t,property:c}}}var h={easeInEaseOut:O(300,"easeInEaseOut","opacity"),linear:O(500,"linear","opacity"),spring:{duration:700,create:{type:"linear",property:"opacity"},update:{type:"spring",springDamping:.4},delete:{type:"linear",property:"opacity"}}},g={configureNext:u,create:O,Types:Object.freeze({spring:"spring",linear:"linear",easeInEaseOut:"easeInEaseOut",easeIn:"easeIn",easeOut:"easeOut",keyboard:"keyboard"}),Properties:Object.freeze({opacity:"opacity",scaleX:"scaleX",scaleY:"scaleY",scaleXY:"scaleXY"}),checkConfig(){console.error("LayoutAnimation.checkConfig(...) has been disabled.")},Presets:h,easeInEaseOut:u.bind(null,h.easeInEaseOut),linear:u.bind(null,h.linear),spring:u.bind(null,h.spring)};const r=Be.create({image:{borderRadius:p.XS,marginRight:o.S},header:{flexDirection:"row",paddingHorizontal:o.M,paddingVertical:o.S,borderRadius:p.S},headerContent:{flex:1,flexDirection:"row",justifyContent:"space-between"},infoWrap:{maxWidth:200,alignItems:"flex-end",marginLeft:o.S},flex2:{flex:2},iconWrapper:{width:24,height:24,borderRadius:p.M,justifyContent:"center",alignItems:"center",marginLeft:o.S},icon:{marginLeft:o.S},root:{borderRadius:p.S,overflow:"hidden"}}),$e=300,$={small:{fontSize:14,lineHeight:20},medium:{fontSize:16,lineHeight:22},large:{fontSize:18,lineHeight:26}},Pe=Le.forwardRef(({image:i,title:t="Title",description:c,onPress:v,showBorder:ue,children:E,imageSize:D=24,subTitle:L,tagProps:H,scrollEnabled:j=!1,scrollContentMaxHeight:he=240,titleSize:ge="medium",useBackgroundCollapseButton:me=!1,headerAlign:_="flex-start",expandDefault:xe=!1,disabledAnimated:B=!1,accessibilityLabel:I,nestedScrollEnabled:ye=!1,backgroundColor:fe,titleColor:be},Se)=>{const{theme:d}=a.useContext(ze),[n,z]=a.useState(xe),Te=ke("semibold"),k=$[ge]??$.small,ve=M(k.fontSize),je=M(k.lineHeight),W=a.useContext(Ne),N=a.useContext(Re),R="Collapse",s=a.useMemo(()=>I||`${W.appId}/${W.code}/${N.screenName}/${R}/${t}`,[R,I,W,N,t]),F=`arrow_chevron_${n?"up":"down"}_small`,C=ue?1:0,w=d.colors.border.default;a.useImperativeHandle(Se,()=>({setExpanded:z,expanded:n}));const Ie=()=>L?e.jsx(A,{numberOfLines:1,typography:"body_default_regular",accessibilityLabel:s+"|sub-title-text",children:L}):H?e.jsx(Ye,{...H}):null,We=()=>{v==null||v(n),g.configureNext({duration:$e,create:{type:g.Types.easeInEaseOut,property:g.Properties.opacity},update:{type:g.Types.easeInEaseOut}}),z(!n)},Ce=()=>me?e.jsx(l,{style:[r.iconWrapper,{backgroundColor:d.colors.background.tonal}],children:e.jsx(Y,{color:d.colors.primary,source:F,accessibilityLabel:s+"|icon"})}):e.jsx(Y,{source:F,style:r.icon,accessibilityLabel:s+"|icon"}),we=()=>e.jsxs(Fe,{activeOpacity:1,onPress:We,style:[r.header,{alignItems:_}],accessibilityLabel:s+"|touch",accessibilityState:{checked:n},children:[!!i&&e.jsx(Me,{source:{uri:i},style:[r.image,{width:D,height:D}],accessibilityLabel:s+"|img"}),e.jsxs(l,{style:[r.headerContent],children:[e.jsxs(l,{style:r.flex2,children:[e.jsx(Ae,{style:[{fontSize:ve,lineHeight:je,fontFamily:Te,color:be??d.colors.text.default}],allowFontScaling:!1,accessibilityLabel:s+"|text",children:t}),!!c&&e.jsx(A,{numberOfLines:2,typography:"body_default_regular",accessibilityLabel:s+"|description-text",children:c})]}),e.jsx(l,{style:[r.infoWrap,{justifyContent:_}],children:Ie()})]}),Ce()]}),Oe=()=>{if(j){const De=B?Ve:V.ScrollView;return e.jsx(De,{scrollEnabled:j,showsVerticalScrollIndicator:!1,nestedScrollEnabled:ye,style:[j&&{maxHeight:he},n&&{borderTopWidth:C,borderColor:w}],children:n&&E})}const Ee=B?l:V.View;return e.jsx(Ee,{style:[n&&{borderTopWidth:C,borderColor:w}],children:n&&E})};return e.jsxs(l,{style:[r.root,{borderWidth:C,borderColor:w,backgroundColor:fe??d.colors.background.surface}],accessibilityLabel:s,children:[we(),Oe()]})}),Ge={title:"Library/Collapse",component:Pe,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{title:"Default Collapse",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},x={args:{title:"With Description",description:"This is a description for the collapse component",children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},y={args:{title:"With Image",image:"https://picsum.photos/40",imageSize:40,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},f={args:{title:"With Border",showBorder:!0,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},b={args:{title:"With Scroll",scrollEnabled:!0,scrollContentMaxHeight:200,children:e.jsx("div",{style:{padding:"20px"},children:Array.from({length:10},(i,t)=>e.jsxs("div",{style:{marginBottom:"10px"},children:["Scrollable content ",t+1]},t))})}},S={args:{title:"Expanded By Default",expandDefault:!0,children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}},T={args:{title:"With Tag",subTitle:"Sub title",tagProps:{label:"New",color:"green"},children:e.jsx("div",{style:{padding:"20px"},children:"This is the collapsible content"})}};var P,X,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Default Collapse',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(U=(X=m.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var q,G,K;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'With Description',
    description: 'This is a description for the collapse component',
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Z,J,Q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'With Image',
    image: 'https://picsum.photos/40',
    imageSize: 40,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: 'With Border',
    showBorder: true,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ie;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ae,oe,le;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    title: 'Expanded By Default',
    expandDefault: true,
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    title: 'With Tag',
    subTitle: 'Sub title',
    tagProps: {
      label: 'New',
      color: 'green'
    },
    children: <div style={{
      padding: '20px'
    }}>This is the collapsible content</div>
  }
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Ke=["Default","WithDescription","WithImage","WithBorder","WithScroll","ExpandedByDefault","WithTag"];export{m as Default,S as ExpandedByDefault,f as WithBorder,x as WithDescription,y as WithImage,b as WithScroll,T as WithTag,Ke as __namedExportsOrder,Ge as default};
