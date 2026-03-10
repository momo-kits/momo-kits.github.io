import{fn as ge}from"./index-AyJqhRyE.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CPl6p-nG.js";import{j as r,C as R,R as p,A as Le,i,M as Ie,z as qe,D as B,I as C,T as E,l as V}from"./index-CcPzXCq5.js";import{B as We}from"./Badge-pVzx-Z4K.js";import{s as De,V as s}from"./index-Bd3FPvDr.js";import{T as F}from"./Animated-DCPrhviD.js";const t=De.create({actionIcon:{borderRadius:p.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:r.S,borderRadius:p.XS},wrapper:{flexDirection:"row"},margin:{marginTop:r.S},iconView:{marginRight:r.S},iconRight:{width:22,height:22,borderRadius:p.M,alignItems:"center",justifyContent:"center",marginLeft:r.S},iconLeft:{width:18,height:18,borderRadius:p.M,alignItems:"center",justifyContent:"center",marginHorizontal:r.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:r.S,flex:1},title:{fontWeight:"bold",color:R.black_17},badge:{marginLeft:r.XS},description:{marginTop:r.XS}}),z=({accessibilityLabel:c,title:d="Title",type:L="section",size:he="medium",icon:I,description:q,iconColor:fe=null,iconAlign:W="top",showRightAction:D=!1,showTrailingAction:u=!1,badgeLabel:S,buttonTitle:O,onPressRightAction:P=()=>{},onPressTrailingAction:ye=()=>{},buttonSize:be="small",textOnly:xe=!1,style:Te})=>{const{theme:l}=o.useContext(Le),[H,we]=o.useState(0),[v,Se]=o.useState(0),ve={card_small:{fontSize:i(14),lineHeight:i(20)},card_medium:{fontSize:i(16),lineHeight:i(22)},card_large:{fontSize:i(18),lineHeight:i(26)},section_medium:{fontSize:i(20),lineHeight:i(28)},section_small:{fontSize:i(16),lineHeight:i(22)},section_large:{fontSize:i(24),lineHeight:i(34)}},_={...t,...ve},A=`${L}_${he}`,j=L==="section",$=u||S?1:2,_e=be==="small"?"action_xs_bold":"action_s_bold",Ae=u?{width:"70%"}:void 0,je="Title",m=o.useContext(Ie),k=o.useContext(qe),a=o.useMemo(()=>c||`${m.appId}/${m.code}/${k.screenName}/${je}/${d}`,[c,m.appId,m.code,k.screenName,d]),Ce=()=>{if(!I)return null;let n={justifyContent:"flex-start"};return W==="middle"&&(n={justifyContent:"center"}),W==="bottom"&&(n={justifyContent:"flex-end"}),e.jsx(s,{accessibilityLabel:a+"|icon",style:[t.iconView,n],children:e.jsx(C,{color:fe,source:I})})},Ve=()=>e.jsxs(s,{style:t.contentView,children:[e.jsxs(s,{onLayout:n=>{n.nativeEvent.layout.width!==v&&Se(n.nativeEvent.layout.width)},style:[t.iconLeftView,Ae],children:[e.jsx(F,{...B(a+"|title-text"),allowFontScaling:!1,numberOfLines:$,style:[_[A],t.title,{maxWidth:v>0?v-H:void 0}],children:d}),S&&e.jsx(s,{onLayout:n=>{n.nativeEvent.layout.width!==H&&we(n.nativeEvent.layout.width)},style:{alignItems:"center"},children:e.jsx(We,{style:t.badge,label:S,accessibilityLabel:a+"|badge"})}),Re()]}),q&&e.jsx(E,{accessibilityLabel:a+"|description-text",style:t.description,color:l.colors.text.secondary,typography:"description_default_regular",children:q})]}),Re=()=>e.jsx(V,{accessibilityLabel:a+"|trailing-touch",onPress:ye,style:t.iconLeftView,hitSlop:{top:10,bottom:10,left:50,right:10},children:u&&!D&&e.jsx(s,{style:[t.iconLeft,{backgroundColor:j?R.black_06+"99":R.black_06+"4D"}],children:e.jsx(C,{source:"arrow_chevron_right_small",size:18,color:l.colors.text.default})})}),ze=()=>{if(!D||u)return!1;const n=_[A].lineHeight;return e.jsx(s,{style:{height:n,justifyContent:"center"},children:O?e.jsx(V,{onPress:P,accessibilityLabel:a+"|label-right-action-touch",children:e.jsx(E,{color:l.colors.primary,typography:_e,children:O})}):e.jsx(V,{onPress:P,style:[t.iconRight,{backgroundColor:l.colors.primary+"0F"}],accessibilityLabel:a+"|label-right-action-touch",children:e.jsx(C,{source:"arrow_chevron_right_small",size:22,color:l.colors.primary})})})};return xe?e.jsx(s,{style:j&&t.margin,children:e.jsx(F,{...B(a+"|title-text"),allowFontScaling:!1,numberOfLines:$,style:[_[A],t.title],children:d})}):e.jsxs(s,{style:[Te,t.wrapper,j&&t.margin],accessibilityLabel:a,children:[Ce(),Ve(),ze()]})};try{z.displayName="Title",z.__docgenInfo={description:"",displayName:"Title",props:{type:{defaultValue:{value:"section"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"section"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"null"},description:"",name:"iconColor",required:!1,type:{name:"string"}},iconAlign:{defaultValue:{value:"top"},description:"",name:"iconAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"middle"'},{value:'"bottom"'}]}},showRightAction:{defaultValue:{value:"false"},description:"",name:"showRightAction",required:!1,type:{name:"boolean"}},showTrailingAction:{defaultValue:{value:"false"},description:"",name:"showTrailingAction",required:!1,type:{name:"boolean"}},badgeLabel:{defaultValue:null,description:"",name:"badgeLabel",required:!1,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonSize:{defaultValue:{value:"small"},description:"",name:"buttonSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},onPressRightAction:{defaultValue:{value:"() => {}"},description:"",name:"onPressRightAction",required:!1,type:{name:"() => void"}},onPressTrailingAction:{defaultValue:{value:"() => {}"},description:"",name:"onPressTrailingAction",required:!1,type:{name:"() => void"}},textOnly:{defaultValue:{value:"false"},description:"",name:"textOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}}}}}catch{}const Fe={title:"Library/Title",component:z,parameters:{layout:"centered"},tags:["autodocs"]},g={args:{title:"Default Title",type:"section",size:"medium"}},h={args:{title:"Title with Icon",icon:"star",iconColor:"#FFD700",iconAlign:"middle"}},f={args:{title:"Title with Description",description:"This is a description text that appears below the title",type:"section",size:"large"}},y={args:{title:"Title with Badge",badgeLabel:"New",type:"card",size:"medium"}},b={args:{title:"Title with Right Action",showRightAction:!0,buttonTitle:"View All",onPressRightAction:ge()}},x={args:{title:"Title with Trailing Action",showTrailingAction:!0,onPressTrailingAction:ge()}},T={args:{title:"Text Only Title",textOnly:!0,size:"large"}},w={args:{title:"Custom Styled Title",style:{backgroundColor:"#f5f5f5",padding:16,borderRadius:8}}};var M,N,X;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    type: 'section',
    size: 'medium'
  }
}`,...(X=(N=g.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Title with Icon',
    icon: 'star',
    iconColor: '#FFD700',
    iconAlign: 'middle'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    description: 'This is a description text that appears below the title',
    type: 'section',
    size: 'large'
  }
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Title with Badge',
    badgeLabel: 'New',
    type: 'card',
    size: 'medium'
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,ae;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Title with Right Action',
    showRightAction: true,
    buttonTitle: 'View All',
    onPressRightAction: fn()
  }
}`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Title with Trailing Action',
    showTrailingAction: true,
    onPressTrailingAction: fn()
  }
}`,...(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ce,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: 'Text Only Title',
    textOnly: true,
    size: 'large'
  }
}`,...(de=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Title',
    style: {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 8
    }
  }
}`,...(pe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Me=["Default","WithIcon","WithDescription","WithBadge","WithRightAction","WithTrailingAction","TextOnly","CustomStyle"];export{w as CustomStyle,g as Default,T as TextOnly,y as WithBadge,f as WithDescription,h as WithIcon,b as WithRightAction,x as WithTrailingAction,Me as __namedExportsOrder,Fe as default};
