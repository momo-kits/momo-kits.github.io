import{fn as fe}from"./index-AyJqhRyE.js";import{y as qe,r,C as v,s as g,A as We,N as i,U as De,M as Fe,K as Oe,V as o,W as E,X as M,I as R,B as Pe,T as X,F as z}from"./index-D9H9ZqTU.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-CPl6p-nG.js";const t=qe.create({actionIcon:{borderRadius:g.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:r.S,borderRadius:g.XS},wrapper:{flexDirection:"row"},margin:{marginTop:r.S},iconView:{marginRight:r.S},iconRight:{width:22,height:22,borderRadius:g.M,alignItems:"center",justifyContent:"center",marginLeft:r.S},iconLeft:{width:18,height:18,borderRadius:g.M,alignItems:"center",justifyContent:"center",marginHorizontal:r.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:r.S,flex:1},title:{color:v.black_17},badge:{marginLeft:r.XS},badgeView:{alignItems:"center"},actionRightView:{justifyContent:"center"},description:{marginTop:r.XS}}),L=({accessibilityLabel:d,title:u="Title",type:I="section",size:be="medium",icon:q,description:W,iconColor:xe=null,iconAlign:D="top",showRightAction:F=!1,showTrailingAction:m=!1,badgeLabel:_,buttonTitle:O,onPressRightAction:P=()=>{},onPressTrailingAction:we=()=>{},buttonSize:Te="small",textOnly:Se=!1,style:ve})=>{const{theme:l}=s.useContext(We),[k,_e]=s.useState(0),[V,Ve]=s.useState(0),Ce={card_small:{fontSize:i(14),lineHeight:i(20)},card_medium:{fontSize:i(16),lineHeight:i(22)},card_large:{fontSize:i(18),lineHeight:i(26)},section_medium:{fontSize:i(20),lineHeight:i(28)},section_small:{fontSize:i(16),lineHeight:i(22)},section_large:{fontSize:i(24),lineHeight:i(34)}},C={...t,...Ce},A=`${I}_${be}`,H=De("bold"),j=I==="section",B=m||_?1:2;let N="action_s_bold";Te==="small"&&(N="action_xs_bold");const Ae=m?{width:"70%"}:void 0,je="Title",p=s.useContext(Fe),$=s.useContext(Oe),n=s.useMemo(()=>d||`${p.appId}/${p.code}/${$.screenName}/${je}/${u}`,[d,p.appId,p.code,$.screenName,u]),Re=()=>{if(!q)return null;let a={justifyContent:"flex-start"};return D==="middle"&&(a={justifyContent:"center"}),D==="bottom"&&(a={justifyContent:"flex-end"}),e.jsx(o,{accessibilityLabel:n+"|icon",style:[t.iconView,a],children:e.jsx(R,{color:xe,source:q})})},ze=()=>{const a=V>0?V-k:void 0;return e.jsxs(o,{style:t.contentView,children:[e.jsxs(o,{onLayout:c=>{c.nativeEvent.layout.width!==V&&Ve(c.nativeEvent.layout.width)},style:[t.iconLeftView,Ae],children:[e.jsx(E,{...M(n+"|title-text"),allowFontScaling:!1,numberOfLines:B,style:[C[A],{fontFamily:H},t.title,{maxWidth:a}],children:u}),_&&e.jsx(o,{onLayout:c=>{c.nativeEvent.layout.width!==k&&_e(c.nativeEvent.layout.width)},style:t.badgeView,children:e.jsx(Pe,{style:t.badge,label:_,accessibilityLabel:n+"|badge"})}),Le()]}),W&&e.jsx(X,{accessibilityLabel:n+"|description-text",style:t.description,color:l.colors.text.secondary,typography:"description_default_regular",children:W})]})},Le=()=>{const a=v.black_06+(j?"99":"4D");return e.jsx(z,{accessibilityLabel:n+"|trailing-touch",onPress:we,style:t.iconLeftView,hitSlop:{top:10,bottom:10,left:50,right:10},children:m&&!F&&e.jsx(o,{style:[t.iconLeft,{backgroundColor:a}],children:e.jsx(R,{source:"arrow_chevron_right_small",size:18,color:l.colors.text.default})})})},Ie=()=>{if(!F||m)return!1;const a=C[A].lineHeight;return e.jsx(o,{style:[t.actionRightView,{height:a}],children:O?e.jsx(z,{onPress:P,accessibilityLabel:n+"|label-right-action-touch",children:e.jsx(X,{color:l.colors.primary,typography:N,children:O})}):e.jsx(z,{onPress:P,style:[t.iconRight,{backgroundColor:l.colors.primary+"0F"}],accessibilityLabel:n+"|label-right-action-touch",children:e.jsx(R,{source:"arrow_chevron_right_small",size:22,color:l.colors.primary})})})};return Se?e.jsx(o,{style:j&&t.margin,children:e.jsx(E,{...M(n+"|title-text"),allowFontScaling:!1,numberOfLines:B,style:[C[A],{fontFamily:H},t.title],children:u})}):e.jsxs(o,{style:[ve,t.wrapper,j&&t.margin],accessibilityLabel:n,children:[Re(),ze(),Ie()]})};try{L.displayName="Title",L.__docgenInfo={description:`Section or card heading with optional icon, badge, description and either a
right action (chevron or text button) or a trailing chevron after the title.`,displayName:"Title",props:{type:{defaultValue:{value:"section"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"section"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"null"},description:"",name:"iconColor",required:!1,type:{name:"string"}},iconAlign:{defaultValue:{value:"top"},description:"",name:"iconAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"middle"'},{value:'"bottom"'}]}},showRightAction:{defaultValue:{value:"false"},description:"",name:"showRightAction",required:!1,type:{name:"boolean"}},showTrailingAction:{defaultValue:{value:"false"},description:"",name:"showTrailingAction",required:!1,type:{name:"boolean"}},badgeLabel:{defaultValue:null,description:"",name:"badgeLabel",required:!1,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonSize:{defaultValue:{value:"small"},description:"",name:"buttonSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},onPressRightAction:{defaultValue:{value:"() => {}"},description:"",name:"onPressRightAction",required:!1,type:{name:"() => void"}},onPressTrailingAction:{defaultValue:{value:"() => {}"},description:"",name:"onPressTrailingAction",required:!1,type:{name:"() => void"}},textOnly:{defaultValue:{value:"false"},description:"",name:"textOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}}}}}catch{}const Ee={title:"Library/Title",component:L,parameters:{layout:"centered"},tags:["autodocs"]},h={args:{title:"Default Title",type:"section",size:"medium"}},y={args:{title:"Title with Icon",icon:"star",iconColor:v.yellow_03,iconAlign:"middle"}},f={args:{title:"Title with Description",description:"This is a description text that appears below the title",type:"section",size:"large"}},b={args:{title:"Title with Badge",badgeLabel:"New",type:"card",size:"medium"}},x={args:{title:"Title with Right Action",showRightAction:!0,buttonTitle:"View All",onPressRightAction:fe()}},w={args:{title:"Title with Trailing Action",showTrailingAction:!0,onPressTrailingAction:fe()}},T={args:{title:"Text Only Title",textOnly:!0,size:"large"}},S={args:{title:"Custom Styled Title",style:{backgroundColor:v.black_02,padding:16,borderRadius:8}}};var K,U,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    type: 'section',
    size: 'medium'
  }
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Title with Icon',
    icon: 'star',
    iconColor: Colors.yellow_03,
    iconAlign: 'middle'
  }
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    description: 'This is a description text that appears below the title',
    type: 'section',
    size: 'large'
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,ae;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Title with Badge',
    badgeLabel: 'New',
    type: 'card',
    size: 'medium'
  }
}`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Title with Right Action',
    showRightAction: true,
    buttonTitle: 'View All',
    onPressRightAction: fn()
  }
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,de;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: 'Title with Trailing Action',
    showTrailingAction: true,
    onPressTrailingAction: fn()
  }
}`,...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: 'Text Only Title',
    textOnly: true,
    size: 'large'
  }
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,ye;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Title',
    style: {
      backgroundColor: Colors.black_02,
      padding: 16,
      borderRadius: 8
    }
  }
}`,...(ye=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const Me=["Default","WithIcon","WithDescription","WithBadge","WithRightAction","WithTrailingAction","TextOnly","CustomStyle"];export{S as CustomStyle,h as Default,T as TextOnly,b as WithBadge,f as WithDescription,y as WithIcon,x as WithRightAction,w as WithTrailingAction,Me as __namedExportsOrder,Ee as default};
