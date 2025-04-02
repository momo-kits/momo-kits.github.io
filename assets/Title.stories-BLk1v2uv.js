import{fn as le}from"./index-BgJgh-x_.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DI7CEG0L.js";import{k as n,f as _,l,s as i,A as je,r as O,I as v,B as _e,T as H,M as j}from"./styles-Dd_0X69m.js";import{s as Ae,V as s}from"./index-BzmpT3sc.js";const t=Ae.create({card_small:{fontSize:i(14),lineHeight:i(20)},card_medium:{fontSize:i(16),lineHeight:i(22)},card_large:{fontSize:i(18),lineHeight:i(26)},section_medium:{fontSize:i(20),lineHeight:i(28)},section_small:{fontSize:i(16),lineHeight:i(22)},section_large:{fontSize:i(24),lineHeight:i(34)},actionIcon:{borderRadius:l.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:n.S,borderRadius:l.XS},wrapper:{flexDirection:"row"},margin:{marginTop:n.S},iconView:{marginRight:n.S},iconRight:{width:22,height:22,borderRadius:l.M,alignItems:"center",justifyContent:"center",marginLeft:n.S},iconLeft:{width:18,height:18,borderRadius:l.M,alignItems:"center",justifyContent:"center",marginHorizontal:n.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:n.S,flex:1},title:{fontWeight:"bold",color:_.black_17},badge:{marginLeft:n.XS},description:{marginTop:n.XS}}),ce=({title:A="Title",type:C="section",size:de="medium",icon:V,description:R,iconColor:ue=null,iconAlign:z="top",showRightAction:W=!1,showTrailingAction:o=!1,badgeLabel:y,buttonTitle:q,onPressRightAction:I=()=>{},onPressTrailingAction:me=()=>{},buttonSize:pe="small",textOnly:ge=!1,style:fe})=>{const{theme:a}=S.useContext(je),[D,he]=S.useState(0),[T,ye]=S.useState(0),x=t,w=`${C}_${de}`,b=C==="section",L=o||y?1:2,Te=pe==="small"?"action_xs_bold":"action_s_bold",xe=o&&{maxWidth:"70%"},we=()=>{if(!V)return null;let r={justifyContent:"flex-start"};return z==="middle"&&(r={justifyContent:"center"}),z==="bottom"&&(r={justifyContent:"flex-end"}),e.jsx(s,{style:[t.iconView,r],children:e.jsx(v,{color:ue,source:V})})},be=()=>e.jsxs(s,{style:t.contentView,children:[e.jsxs(s,{onLayout:r=>{r.nativeEvent.layout.width!==T&&ye(r.nativeEvent.layout.width)},style:[t.iconLeftView,xe],children:[e.jsx(O,{numberOfLines:L,style:[x[w],t.title,{maxWidth:T>0?T-D:void 0}],children:A}),y&&e.jsx(s,{onLayout:r=>{r.nativeEvent.layout.width!==D&&he(r.nativeEvent.layout.width)},style:{alignItems:"center"},children:e.jsx(_e,{style:t.badge,label:y})}),Se()]}),!!R&&e.jsx(H,{style:t.description,color:a.colors.text.secondary,typography:"description_default_regular",children:R})]}),Se=()=>e.jsx(j,{onPress:me,style:t.iconLeftView,children:o&&!W&&e.jsx(s,{style:[t.iconLeft,{backgroundColor:b?_.black_06+"99":_.black_06+"4D"}],children:e.jsx(v,{source:"arrow_chevron_right_small",size:18,color:a.colors.text.default})})}),ve=()=>{if(!W||o)return!1;const r=x[w].lineHeight;return e.jsx(s,{style:{height:r,justifyContent:"center"},children:q?e.jsx(j,{onPress:I,children:e.jsx(H,{color:a.colors.primary,typography:Te,children:q})}):e.jsx(j,{onPress:I,style:[t.iconRight,{backgroundColor:a.colors.primary+"0F"}],children:e.jsx(v,{source:"arrow_chevron_right_small",size:22,color:a.colors.primary})})})};return ge?e.jsx(s,{style:b&&t.margin,children:e.jsx(O,{numberOfLines:L,style:[x[w],t.title],children:A})}):e.jsxs(s,{style:[fe,t.wrapper,b&&t.margin],children:[we(),be(),ve()]})};ce.__docgenInfo={description:"",methods:[],displayName:"Title",props:{type:{required:!1,tsType:{name:"union",raw:"'card' | 'section'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'section'"}]},description:"",defaultValue:{value:"'section'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},iconAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},showRightAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTrailingAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},buttonTitle:{required:!1,tsType:{name:"string"},description:""},buttonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},onPressRightAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onPressTrailingAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},textOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const qe={title:"Library/Title",component:ce,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{title:"Default Title",type:"section",size:"medium"}},d={args:{title:"Title with Icon",icon:"star",iconColor:"#FFD700",iconAlign:"middle"}},u={args:{title:"Title with Description",description:"This is a description text that appears below the title",type:"section",size:"large"}},m={args:{title:"Title with Badge",badgeLabel:"New",type:"card",size:"medium"}},p={args:{title:"Title with Right Action",showRightAction:!0,buttonTitle:"View All",onPressRightAction:le()}},g={args:{title:"Title with Trailing Action",showTrailingAction:!0,onPressTrailingAction:le()}},f={args:{title:"Text Only Title",textOnly:!0,size:"large"}},h={args:{title:"Custom Styled Title",style:{backgroundColor:"#f5f5f5",padding:16,borderRadius:8}}};var k,P,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    type: 'section',
    size: 'medium'
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,F,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Title with Icon',
    icon: 'star',
    iconColor: '#FFD700',
    iconAlign: 'middle'
  }
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var X,N,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    description: 'This is a description text that appears below the title',
    type: 'section',
    size: 'large'
  }
}`,...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Title with Badge',
    badgeLabel: 'New',
    type: 'card',
    size: 'medium'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Title with Right Action',
    showRightAction: true,
    buttonTitle: 'View All',
    onPressRightAction: fn()
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Title with Trailing Action',
    showTrailingAction: true,
    onPressTrailingAction: fn()
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,re,ne;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Text Only Title',
    textOnly: true,
    size: 'large'
  }
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,oe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Title',
    style: {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 8
    }
  }
}`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ie=["Default","WithIcon","WithDescription","WithBadge","WithRightAction","WithTrailingAction","TextOnly","CustomStyle"];export{h as CustomStyle,c as Default,f as TextOnly,m as WithBadge,u as WithDescription,d as WithIcon,p as WithRightAction,g as WithTrailingAction,Ie as __namedExportsOrder,qe as default};
