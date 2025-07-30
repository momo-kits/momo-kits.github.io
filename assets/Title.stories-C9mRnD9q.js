import{fn as ge}from"./index-BgJgh-x_.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DI7CEG0L.js";import{i as s,C as V,R as d,H as n,A as ze,x as Le,y as qe,J as B,K as E,I as A,T as M,M as R}from"./styles-BFdRcqeG.js";import{B as Ie}from"./Badge-17Q-Jzw8.js";import{s as We,V as a}from"./index-BzmpT3sc.js";const t=We.create({card_small:{fontSize:n(14),lineHeight:n(20)},card_medium:{fontSize:n(16),lineHeight:n(22)},card_large:{fontSize:n(18),lineHeight:n(26)},section_medium:{fontSize:n(20),lineHeight:n(28)},section_small:{fontSize:n(16),lineHeight:n(22)},section_large:{fontSize:n(24),lineHeight:n(34)},actionIcon:{borderRadius:d.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:s.S,borderRadius:d.XS},wrapper:{flexDirection:"row"},margin:{marginTop:s.S},iconView:{marginRight:s.S},iconRight:{width:22,height:22,borderRadius:d.M,alignItems:"center",justifyContent:"center",marginLeft:s.S},iconLeft:{width:18,height:18,borderRadius:d.M,alignItems:"center",justifyContent:"center",marginHorizontal:s.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:s.S,flex:1},title:{fontWeight:"bold",color:V.black_17},badge:{marginLeft:s.XS},description:{marginTop:s.XS}}),fe=({accessibilityLabel:x,title:b="Title",type:z="section",size:he="medium",icon:L,description:q,iconColor:ye=null,iconAlign:I="top",showRightAction:W=!1,showTrailingAction:c=!1,badgeLabel:w,buttonTitle:D,onPressRightAction:H=()=>{},onPressTrailingAction:Te=()=>{},buttonSize:xe="small",textOnly:be=!1,style:we})=>{const{theme:l}=o.useContext(ze),[O,Se]=o.useState(0),[S,ve]=o.useState(0),v=t,j=`${z}_${he}`,C=z==="section",P=c||w?1:2,je=xe==="small"?"action_xs_bold":"action_s_bold",Ce=c&&{maxWidth:"70%"},$="Title",_=o.useContext(Le),k=o.useContext(qe),r=o.useMemo(()=>x||`${_.appId}/${_.code}/${k.screenName}/${$}/${b}`,[$,x,_,k]),_e=()=>{if(!L)return null;let i={justifyContent:"flex-start"};return I==="middle"&&(i={justifyContent:"center"}),I==="bottom"&&(i={justifyContent:"flex-end"}),e.jsx(a,{accessibilityLabel:r+"|icon",style:[t.iconView,i],children:e.jsx(A,{color:ye,source:L})})},Ae=()=>e.jsxs(a,{style:t.contentView,children:[e.jsxs(a,{onLayout:i=>{i.nativeEvent.layout.width!==S&&ve(i.nativeEvent.layout.width)},style:[t.iconLeftView,Ce],children:[e.jsx(B,{...E(r+"|title-text"),numberOfLines:P,style:[v[j],t.title,{maxWidth:S>0?S-O:void 0}],children:b}),w&&e.jsx(a,{onLayout:i=>{i.nativeEvent.layout.width!==O&&Se(i.nativeEvent.layout.width)},style:{alignItems:"center"},children:e.jsx(Ie,{style:t.badge,label:w,accessibilityLabel:r+"|badge"})}),Re()]}),q&&e.jsx(M,{accessibilityLabel:r+"|description-text",style:t.description,color:l.colors.text.secondary,typography:"description_default_regular",children:q})]}),Re=()=>e.jsx(R,{accessibilityLabel:r+"|trailing-touch",onPress:Te,style:t.iconLeftView,hitSlop:{top:10,bottom:10,left:50,right:10},children:c&&!W&&e.jsx(a,{style:[t.iconLeft,{backgroundColor:C?V.black_06+"99":V.black_06+"4D"}],children:e.jsx(A,{source:"arrow_chevron_right_small",size:18,color:l.colors.text.default})})}),Ve=()=>{if(!W||c)return!1;const i=v[j].lineHeight;return e.jsx(a,{style:{height:i,justifyContent:"center"},children:D?e.jsx(R,{onPress:H,accessibilityLabel:r+"|label-right-action-touch",children:e.jsx(M,{color:l.colors.primary,typography:je,children:D})}):e.jsx(R,{onPress:H,style:[t.iconRight,{backgroundColor:l.colors.primary+"0F"}],accessibilityLabel:r+"|label-right-action-touch",children:e.jsx(A,{source:"arrow_chevron_right_small",size:22,color:l.colors.primary})})})};return be?e.jsx(a,{style:C&&t.margin,children:e.jsx(B,{...E(r+"|title-text"),numberOfLines:P,style:[v[j],t.title],children:b})}):e.jsxs(a,{style:[we,t.wrapper,C&&t.margin],accessibilityLabel:r,children:[_e(),Ae(),Ve()]})};fe.__docgenInfo={description:"",methods:[],displayName:"Title",props:{type:{required:!1,tsType:{name:"union",raw:"'card' | 'section'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'section'"}]},description:"",defaultValue:{value:"'section'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},iconAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},showRightAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTrailingAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},buttonTitle:{required:!1,tsType:{name:"string"},description:""},buttonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},onPressRightAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onPressTrailingAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},textOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ViewStyle"},description:""},accessibilityLabel:{required:!1,tsType:{name:"string"},description:""}}};const Be={title:"Library/Title",component:fe,parameters:{layout:"centered"},tags:["autodocs"]},u={args:{title:"Default Title",type:"section",size:"medium"}},m={args:{title:"Title with Icon",icon:"star",iconColor:"#FFD700",iconAlign:"middle"}},p={args:{title:"Title with Description",description:"This is a description text that appears below the title",type:"section",size:"large"}},g={args:{title:"Title with Badge",badgeLabel:"New",type:"card",size:"medium"}},f={args:{title:"Title with Right Action",showRightAction:!0,buttonTitle:"View All",onPressRightAction:ge()}},h={args:{title:"Title with Trailing Action",showTrailingAction:!0,onPressTrailingAction:ge()}},y={args:{title:"Text Only Title",textOnly:!0,size:"large"}},T={args:{title:"Custom Styled Title",style:{backgroundColor:"#f5f5f5",padding:16,borderRadius:8}}};var F,N,X;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    type: 'section',
    size: 'medium'
  }
}`,...(X=(N=u.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var J,K,G;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Title with Icon',
    icon: 'star',
    iconColor: '#FFD700',
    iconAlign: 'middle'
  }
}`,...(G=(K=m.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Q,U,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    description: 'This is a description text that appears below the title',
    type: 'section',
    size: 'large'
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Title with Badge',
    badgeLabel: 'New',
    type: 'card',
    size: 'medium'
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,re;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Title with Right Action',
    showRightAction: true,
    buttonTitle: 'View All',
    onPressRightAction: fn()
  }
}`,...(re=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ae,oe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    title: 'Title with Trailing Action',
    showTrailingAction: true,
    onPressTrailingAction: fn()
  }
}`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,ce,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: 'Text Only Title',
    textOnly: true,
    size: 'large'
  }
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Title',
    style: {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 8
    }
  }
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ee=["Default","WithIcon","WithDescription","WithBadge","WithRightAction","WithTrailingAction","TextOnly","CustomStyle"];export{T as CustomStyle,u as Default,y as TextOnly,g as WithBadge,p as WithDescription,m as WithIcon,f as WithRightAction,h as WithTrailingAction,Ee as __namedExportsOrder,Be as default};
