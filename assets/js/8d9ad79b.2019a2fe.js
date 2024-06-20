(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[15063],{32012:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var i=n(74892),a=n(77672),l=n(84090),r=n(53053),o=n(4930);const d=n(33504).A.create({card_small:{fontSize:(0,o._6)(14),lineHeight:(0,o._6)(20)},card_medium:{fontSize:(0,o._6)(16),lineHeight:(0,o._6)(22)},card_large:{fontSize:(0,o._6)(18),lineHeight:(0,o._6)(26)},section_medium:{fontSize:(0,o._6)(20),lineHeight:(0,o._6)(28)},section_small:{fontSize:(0,o._6)(16),lineHeight:(0,o._6)(22)},section_large:{fontSize:(0,o._6)(24),lineHeight:(0,o._6)(34)},actionIcon:{borderRadius:o.TI.M,alignItems:"center",justifyContent:"center"},icon:{marginRight:o.Kz.S,borderRadius:o.TI.XS},wrapper:{flexDirection:"row"},margin:{marginTop:o.Kz.S},iconView:{marginRight:o.Kz.S},iconRight:{width:(0,o._6)(22),height:(0,o._6)(22),borderRadius:o.TI.M,alignItems:"center",justifyContent:"center",marginLeft:o.Kz.S},iconLeft:{width:(0,o._6)(18),height:(0,o._6)(18),borderRadius:o.TI.M,alignItems:"center",justifyContent:"center",marginHorizontal:o.Kz.XS},iconLeftView:{flexDirection:"row",alignItems:"center"},contentView:{marginRight:o.Kz.S,flex:1},title:{fontWeight:"bold"},badge:{marginLeft:o.Kz.XS},description:{marginTop:o.Kz.XS}});var s=function(e){var t=e.title,n=void 0===t?"Title":t,s=e.type,m=void 0===s?"section":s,g=e.size,c=void 0===g?"medium":g,p=e.icon,u=e.description,y=e.iconColor,h=void 0===y?null:y,f=e.iconAlign,N=void 0===f?"top":f,b=e.showRightAction,v=void 0!==b&&b,A=e.showTrailingAction,_=void 0!==A&&A,w=e.badgeLabel,C=e.buttonTitle,E=e.onPressRightAction,x=void 0===E?function(){}:E,T=e.onPressTrailingAction,S=void 0===T?function(){}:T,z=e.buttonSize,P=void 0===z?"small":z,R=e.textOnly,k=void 0!==R&&R,B=e.style,I=(0,i.useContext)(o.gD).theme,L=(0,i.useState)(0),D=L[0],O=L[1],V=(0,i.useState)(0),F=V[0],H=V[1],K=d,j=m+"_"+c,M="section"===m,X=_||w?1:2,U="small"===P?"action_xs_bold":"action_s_bold",W=_&&{maxWidth:"70%"},J=function(){return i.createElement(r.A,{onPress:S,style:d.iconLeftView},_&&!v&&i.createElement(a.A,{style:[d.iconLeft,{backgroundColor:M?o.Jy.black_06+"99":o.Jy.black_06+"4D"}]},i.createElement(o.In,{source:"arrow_chevron_right_small",size:(0,o._6)(18),color:I.colors.text.default})))};return k?i.createElement(a.A,{style:M&&d.margin},i.createElement(l.A,{numberOfLines:X,style:[K[j],d.title]},n)):i.createElement(a.A,{style:[B,d.wrapper,M&&d.margin]},function(){if(!p)return null;var e={justifyContent:"flex-start"};return"middle"===N&&(e={justifyContent:"center"}),"bottom"===N&&(e={justifyContent:"flex-end"}),i.createElement(a.A,{style:[d.iconView,e]},i.createElement(o.In,{color:h,source:p}))}(),i.createElement(a.A,{style:d.contentView},i.createElement(a.A,{onLayout:function(e){H(e.nativeEvent.layout.width)},style:[d.iconLeftView,W]},i.createElement(l.A,{numberOfLines:X,style:[K[j],d.title,{maxWidth:F-D}]},n),w&&i.createElement(a.A,{onLayout:function(e){O(e.nativeEvent.layout.width)},style:{alignItems:"center"}},i.createElement(o.Ex,{style:d.badge,label:w})),J()),u&&i.createElement(o.EY,{style:d.description,color:I.colors.text.secondary,typography:"description_default_regular"},u)),!(!v||_)&&i.createElement(a.A,null,C?i.createElement(r.A,{onPress:x},i.createElement(o.EY,{color:I.colors.primary,typography:U},C)):i.createElement(r.A,{onPress:x,style:[d.iconRight,{backgroundColor:I.colors.primary+"0F"}]},i.createElement(o.In,{source:"arrow_chevron_right_small",size:(0,o._6)(22),color:I.colors.primary}))))},m=n(95412),g=n(93884),c=n(4107);const p=function(){var e=(0,g.A)({componentName:"Title",props:{type:{value:"card",defaultValue:"card",options:{card:"card",section:"section"},type:c.B.Enum,description:"Defines the type of title component."},size:{value:"medium",defaultValue:"medium",options:{small:"small",medium:"medium",large:"large"},type:c.B.Enum,description:"Defines the size of the title."},title:{value:"Title",type:c.B.String,description:"Represents the text that will be displayed as the title."},icon:{value:void 0,type:c.B.String,description:"Specifies the name of the icon to be displayed with the title."},description:{value:void 0,type:c.B.String,description:"Provides additional context or information for the title."},iconColor:{value:void 0,type:c.B.String,description:"Customizes the color of the icon."},iconAlign:{value:"middle",defaultValue:"middle",options:{top:"top",middle:"middle",bottom:"bottom"},type:c.B.Enum,description:"Dictates the vertical alignment of the icon."},showRightAction:{value:!1,type:c.B.Boolean,description:"Flag to show or hide a right-aligned action button or icon."},showTrailingAction:{value:!1,type:c.B.Boolean,description:"Flag to show or hide a trailing action button or icon."},badgeLabel:{value:void 0,type:c.B.String,description:"A string for the badge label."},buttonTitle:{value:void 0,type:c.B.String,description:"A string for the button title."},buttonSize:{value:"large",defaultValue:"large",options:{small:"small",large:"large"},type:c.B.Enum,description:"Defines the size of the button."},onPressRightAction:{value:"() => {}",type:c.B.Function,description:"Handler function for the right action button press event."},textOnly:{value:!1,type:c.B.Boolean,description:"Flag to render the component as text only without icons or actions."}},scope:{Title:s},imports:{"@momo-kits/title":{named:["Title"]}}});return i.createElement(m.A,{params:e})}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var i=n(58168),a=n(74892),l=n(29813),r=n(91906),o=n(76482),d=n(5789),s=n(5641),m=n(10991),g=n(3533);const c=function(e){var t=e.params;return a.createElement(l.A,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement("div",null,a.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},a.createElement(r.A,(0,i.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),a.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),a.createElement(s.A,t.knobProps),a.createElement(m.A,t.editorProps),a.createElement(d.A,t.errorProps),a.createElement(g.w,t.actions))}))}},86697:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var i=n(58168),a=n(98587),l=(n(74892),n(77264)),r=n(32012),o=["components"],d={id:"title",title:"Title"},s=void 0,m={unversionedId:"components/title",id:"version-0.81.x/components/title",title:"Title",description:"Playground",source:"@site/versioned_docs/version-0.81.x/components/Title.mdx",sourceDirName:"components",slug:"/components/title",permalink:"/docs/0.81.x/components/title",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.x/components/Title.mdx",tags:[],version:"0.81.x",frontMatter:{id:"title",title:"Title"},sidebar:"version-0.81.x",previous:{title:"Text",permalink:"/docs/0.81.x/components/text"},next:{title:"ItemList",permalink:"/docs/0.81.x/components/itemlist"}},g={},c=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],p={toc:c},u="wrapper";function y(e){var t=e.components,n=(0,a.A)(e,o);return(0,l.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(r.A,{mdxType:"Play"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"actionTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Text for an action button associated with the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"description")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A description or subtitle that appears below the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"icon")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Represents the name or key of the icon to be displayed alongside the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressAction")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Function to be called when the action associated with the title is pressed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showAction")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", an action button or icon is displayed alongside the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"size")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"large")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"medium")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Defines the size of the Title component.'large' - A larger, more prominent title.'small' - A smaller, less prominent title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"title")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Title")),(0,l.yg)("td",{parentName:"tr",align:null},"Required. The text of the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"titleFlex")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the title will be flexible in its container, adjusting its width dynamically.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"type")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"screen")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"section")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"card")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"section")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Defines the type of Title component.'screen' - Used for screen titles.'section' - Used for section titles within a screen.'card' - Used for titles within a card component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"usePadding")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:null}))))))}y.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);