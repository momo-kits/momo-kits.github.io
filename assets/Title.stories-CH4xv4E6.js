import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as le}from"./index-BgJgh-x_.js";import{r as v}from"./index-DI7CEG0L.js";import{r as s,k as A,s as c,y as i,A as je,z as O,I as j,B as _e,T as H,M as _}from"./styles-CyDUY6mG.js";import{s as Ae,V as n}from"./index-BzmpT3sc.js";const t=Ae.create({card_small:{fontSize:i(14),lineHeight:i(20)},card_medium:{fontSize:i(16),lineHeight:i(22)},card_large:{fontSize:i(18),lineHeight:i(26)},section_medium:{fontSize:i(20),lineHeight:i(28)},section_small:{fontSize:i(16),lineHeight:i(22)},section_large:{fontSize:i(24),lineHeight:i(34)},actionIcon:{borderRadius:c.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:s.S,borderRadius:c.XS},wrapper:{flexDirection:"row"},margin:{marginTop:s.S},iconView:{marginRight:s.S},iconRight:{width:22,height:22,borderRadius:c.M,alignItems:"center",justifyContent:"center",marginLeft:s.S},iconLeft:{width:18,height:18,borderRadius:c.M,alignItems:"center",justifyContent:"center",marginHorizontal:s.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:s.S,flex:1},title:{fontWeight:"bold",color:A.black_17},badge:{marginLeft:s.XS},description:{marginTop:s.XS}}),ce=({title:o="Title",type:C="section",size:de="medium",icon:V,description:R,iconColor:ue=null,iconAlign:z="top",showRightAction:W=!1,showTrailingAction:l=!1,badgeLabel:T,buttonTitle:q,onPressRightAction:I=()=>{},onPressTrailingAction:me=()=>{},buttonSize:pe="small",textOnly:ge=!1,style:fe})=>{const{theme:a}=v.useContext(je),[D,he]=v.useState(0),[x,ye]=v.useState(0),w=t,b=`${C}_${de}`,S=C==="section",L=l||T?1:2,Te=pe==="small"?"action_xs_bold":"action_s_bold",xe=l&&{maxWidth:"70%"},we=()=>{if(!V)return null;let r={justifyContent:"flex-start"};return z==="middle"&&(r={justifyContent:"center"}),z==="bottom"&&(r={justifyContent:"flex-end"}),e.jsx(n,{style:[t.iconView,r],children:e.jsx(j,{color:ue,source:V})})},be=()=>e.jsxs(n,{style:t.contentView,children:[e.jsxs(n,{onLayout:r=>{r.nativeEvent.layout.width!==x&&ye(r.nativeEvent.layout.width)},style:[t.iconLeftView,xe],children:[e.jsx(O,{numberOfLines:L,style:[w[b],t.title,{maxWidth:x>0?x-D:void 0}],children:o}),T&&e.jsx(n,{onLayout:r=>{r.nativeEvent.layout.width!==D&&he(r.nativeEvent.layout.width)},style:{alignItems:"center"},children:e.jsx(_e,{style:t.badge,label:T})}),Se()]}),!!R&&e.jsx(H,{style:t.description,color:a.colors.text.secondary,typography:"description_default_regular",children:R})]}),Se=()=>e.jsx(_,{onPress:me,style:t.iconLeftView,children:l&&!W&&e.jsx(n,{style:[t.iconLeft,{backgroundColor:S?A.black_06+"99":A.black_06+"4D"}],children:e.jsx(j,{source:"arrow_chevron_right_small",size:18,color:a.colors.text.default})})}),ve=()=>{if(!W||l)return!1;const r=w[b].lineHeight;return e.jsx(n,{style:{height:r,justifyContent:"center"},children:q?e.jsx(_,{onPress:I,children:e.jsx(H,{color:a.colors.primary,typography:Te,children:q})}):e.jsx(_,{onPress:I,style:[t.iconRight,{backgroundColor:a.colors.primary+"0F"}],children:e.jsx(j,{source:"arrow_chevron_right_small",size:22,color:a.colors.primary})})})};return ge?e.jsx(n,{style:S&&t.margin,children:e.jsx(O,{numberOfLines:L,style:[w[b],t.title],children:o})}):e.jsxs(n,{style:[fe,t.wrapper,S&&t.margin],children:[we(),be(),ve()]})};ce.__docgenInfo={description:"",methods:[],displayName:"Title",props:{type:{required:!1,tsType:{name:"union",raw:"'card' | 'section'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'section'"}]},description:"",defaultValue:{value:"'section'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},iconAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},showRightAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTrailingAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},buttonTitle:{required:!1,tsType:{name:"string"},description:""},buttonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},onPressRightAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onPressTrailingAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},textOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const qe={title:"Library/Title",component:ce,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>e.jsx(n,{style:{width:375},children:e.jsx(o,{})})]},d={args:{title:"Default Title",type:"section",size:"medium"}},u={args:{title:"Title with Icon",icon:"star",iconColor:"#FFD700",iconAlign:"middle"}},m={args:{title:"Title with Description",description:"This is a description text that appears below the title",type:"section",size:"large"}},p={args:{title:"Title with Badge",badgeLabel:"New",type:"card",size:"medium"}},g={args:{title:"Title with Right Action",showRightAction:!0,buttonTitle:"View All",onPressRightAction:le()}},f={args:{title:"Title with Trailing Action",showTrailingAction:!0,onPressTrailingAction:le()}},h={args:{title:"Text Only Title",textOnly:!0,size:"large"}},y={args:{title:"Custom Styled Title",style:{backgroundColor:"#f5f5f5",padding:16,borderRadius:8}}};var k,P,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    type: 'section',
    size: 'medium'
  }
}`,...(B=(P=d.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,F,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Title with Icon',
    icon: 'star',
    iconColor: '#FFD700',
    iconAlign: 'middle'
  }
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var X,N,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    description: 'This is a description text that appears below the title',
    type: 'section',
    size: 'large'
  }
}`,...($=(N=m.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Title with Badge',
    badgeLabel: 'New',
    type: 'card',
    size: 'medium'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Title with Right Action',
    showRightAction: true,
    buttonTitle: 'View All',
    onPressRightAction: fn()
  }
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Title with Trailing Action',
    showTrailingAction: true,
    onPressTrailingAction: fn()
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,re,ne;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Text Only Title',
    textOnly: true,
    size: 'large'
  }
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Title',
    style: {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 8
    }
  }
}`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ie=["Default","WithIcon","WithDescription","WithBadge","WithRightAction","WithTrailingAction","TextOnly","CustomStyle"];export{y as CustomStyle,d as Default,h as TextOnly,p as WithBadge,m as WithDescription,u as WithIcon,g as WithRightAction,f as WithTrailingAction,Ie as __namedExportsOrder,qe as default};
