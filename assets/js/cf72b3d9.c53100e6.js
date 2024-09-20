(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[92567],{32012:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(74892),i=n(77672),l=n(84090),r=n(53053),o=n(32264);const d=n(33504).A.create({card_small:{fontSize:(0,o._6)(14),lineHeight:(0,o._6)(20)},card_medium:{fontSize:(0,o._6)(16),lineHeight:(0,o._6)(22)},card_large:{fontSize:(0,o._6)(18),lineHeight:(0,o._6)(26)},section_medium:{fontSize:(0,o._6)(20),lineHeight:(0,o._6)(28)},section_small:{fontSize:(0,o._6)(16),lineHeight:(0,o._6)(22)},section_large:{fontSize:(0,o._6)(24),lineHeight:(0,o._6)(34)},actionIcon:{borderRadius:o.TI.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:o.Kz.S,borderRadius:o.TI.XS},wrapper:{flexDirection:"row"},margin:{marginTop:o.Kz.S},iconView:{marginRight:o.Kz.S},iconRight:{width:22,height:22,borderRadius:o.TI.M,alignItems:"center",justifyContent:"center",marginLeft:o.Kz.S},iconLeft:{width:18,height:18,borderRadius:o.TI.M,alignItems:"center",justifyContent:"center",marginHorizontal:o.Kz.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:o.Kz.S,flex:1},title:{fontWeight:"bold",color:o.Jy.black_17},badge:{marginLeft:o.Kz.XS},description:{marginTop:o.Kz.XS}});var g=function(e){var t=e.title,n=void 0===t?"Title":t,g=e.type,m=void 0===g?"section":g,p=e.size,s=void 0===p?"medium":p,y=e.icon,c=e.description,u=e.iconColor,N=void 0===u?null:u,h=e.iconAlign,f=void 0===h?"top":h,b=e.showRightAction,v=void 0!==b&&b,C=e.showTrailingAction,A=void 0!==C&&C,E=e.badgeLabel,_=e.buttonTitle,w=e.onPressRightAction,S=void 0===w?function(){}:w,T=e.onPressTrailingAction,z=void 0===T?function(){}:T,x=e.buttonSize,P=void 0===x?"small":x,R=e.textOnly,k=void 0!==R&&R,B=e.style,L=(0,a.useContext)(o.gD).theme,I=(0,a.useState)(0),D=I[0],V=I[1],F=(0,a.useState)(0),H=F[0],K=F[1],j=d,M=m+"_"+s,X="section"===m,O=A||E?1:2,J="small"===P?"action_xs_bold":"action_s_bold",W=A&&{maxWidth:"70%"},Y=function(){return a.createElement(r.A,{onPress:z,style:d.iconLeftView},A&&!v&&a.createElement(i.A,{style:[d.iconLeft,{backgroundColor:X?o.Jy.black_06+"99":o.Jy.black_06+"4D"}]},a.createElement(o.In,{source:"arrow_chevron_right_small",size:18,color:L.colors.text.default})))};return k?a.createElement(i.A,{style:X&&d.margin},a.createElement(l.A,{numberOfLines:O,style:[j[M],d.title]},n)):a.createElement(i.A,{style:[B,d.wrapper,X&&d.margin]},function(){if(!y)return null;var e={justifyContent:"flex-start"};return"middle"===f&&(e={justifyContent:"center"}),"bottom"===f&&(e={justifyContent:"flex-end"}),a.createElement(i.A,{style:[d.iconView,e]},a.createElement(o.In,{color:N,source:y}))}(),a.createElement(i.A,{style:d.contentView},a.createElement(i.A,{onLayout:function(e){e.nativeEvent.layout.width!==H&&K(e.nativeEvent.layout.width)},style:[d.iconLeftView,W]},a.createElement(l.A,{numberOfLines:O,style:[j[M],d.title,{maxWidth:H>0?H-D:void 0}]},n),E&&a.createElement(i.A,{onLayout:function(e){e.nativeEvent.layout.width!==D&&V(e.nativeEvent.layout.width)},style:{alignItems:"center"}},a.createElement(o.Ex,{style:d.badge,label:E})),Y()),!!c&&a.createElement(o.EY,{style:d.description,color:L.colors.text.secondary,typography:"description_default_regular"},c)),function(){if(!v||A)return!1;var e=j[M].lineHeight;return a.createElement(i.A,{style:{height:e,justifyContent:"center"}},_?a.createElement(r.A,{onPress:S},a.createElement(o.EY,{color:L.colors.primary,typography:J},_)):a.createElement(r.A,{onPress:S,style:[d.iconRight,{backgroundColor:L.colors.primary+"0F"}]},a.createElement(o.In,{source:"arrow_chevron_right_small",size:22,color:L.colors.primary})))}())},m=n(95412),p=n(93884),s=n(4107);const y=function(){var e=(0,p.A)({componentName:"Title",props:{type:{value:"card",defaultValue:"card",options:{card:"card",section:"section"},type:s.B.Enum,description:"Defines the type of title component."},size:{value:"medium",defaultValue:"medium",options:{small:"small",medium:"medium",large:"large"},type:s.B.Enum,description:"Defines the size of the title."},title:{value:"Title",type:s.B.String,description:"Represents the text that will be displayed as the title."},icon:{value:void 0,type:s.B.String,description:"Specifies the name of the icon to be displayed with the title."},description:{value:void 0,type:s.B.String,description:"Provides additional context or information for the title."},iconColor:{value:void 0,type:s.B.String,description:"Customizes the color of the icon."},iconAlign:{value:"middle",defaultValue:"middle",options:{top:"top",middle:"middle",bottom:"bottom"},type:s.B.Enum,description:"Dictates the vertical alignment of the icon."},showRightAction:{value:!1,type:s.B.Boolean,description:"Flag to show or hide a right-aligned action button or icon."},showTrailingAction:{value:!1,type:s.B.Boolean,description:"Flag to show or hide a trailing action button or icon."},badgeLabel:{value:void 0,type:s.B.String,description:"A string for the badge label."},buttonTitle:{value:void 0,type:s.B.String,description:"A string for the button title."},buttonSize:{value:"large",defaultValue:"large",options:{small:"small",large:"large"},type:s.B.Enum,description:"Defines the size of the button."},onPressRightAction:{value:"() => {}",type:s.B.Function,description:"Handler function for the right action button press event."},textOnly:{value:!1,type:s.B.Boolean,description:"Flag to render the component as text only without icons or actions."}},scope:{Title:g},imports:{"@momo-kits/title":{named:["Title"]}}});return a.createElement(m.A,{params:e})}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(58168),i=n(74892),l=n(29813),r=n(91906),o=n(76482),d=n(5789),g=n(5641),m=n(10991),p=n(3533);const s=function(e){var t=e.params;return i.createElement(l.A,{fallback:i.createElement(i.Fragment,null,"Loading...")},(function(){return i.createElement("div",null,i.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},i.createElement(r.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),i.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),i.createElement(g.A,t.knobProps),i.createElement(m.A,t.editorProps),i.createElement(d.A,t.errorProps),i.createElement(p.w,t.actions))}))}},86053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var a=n(58168),i=n(98587),l=(n(74892),n(77264)),r=n(32012),o=["components"],d={id:"title",title:"Title"},g=void 0,m={unversionedId:"components/title",id:"version-0.103.1/components/title",title:"Title",description:"Playground",source:"@site/versioned_docs/version-0.103.1/components/Title.mdx",sourceDirName:"components",slug:"/components/title",permalink:"/docs/components/title",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.1/components/Title.mdx",tags:[],version:"0.103.1",frontMatter:{id:"title",title:"Title"},sidebar:"version-0.103.1",previous:{title:"Slider",permalink:"/docs/components/slider"},next:{title:"Stepper",permalink:"/docs/components/stepper"}},p={},s=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],y={toc:s},c="wrapper";function u(e){var t=e.components,n=(0,i.A)(e,o);return(0,l.yg)(c,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(r.A,{mdxType:"Play"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"badgeLabel")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"buttonSize")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"buttonTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"description")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"icon")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconAlign")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bottom")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"top")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"middle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"top")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressRightAction")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressTrailingAction")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showRightAction")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showTrailingAction")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"size")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"large")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"medium")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"medium")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"style")),(0,l.yg)("td",{parentName:"tr",align:null},"ViewStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"textOnly")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"title")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Title")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"type")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"card")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"section")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"section")),(0,l.yg)("td",{parentName:"tr",align:null}))))))}u.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);