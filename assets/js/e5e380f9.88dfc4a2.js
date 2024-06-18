(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[88026],{54680:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(74892),i=n(20177),l=n(77672),r=n(53053);const o=n(33504).A.create({chip:{borderRadius:i.TI.L,paddingHorizontal:i.Kz.S,height:32,justifyContent:"center",alignItems:"center",flexDirection:"row"},smallChip:{borderRadius:i.TI.L,paddingHorizontal:i.Kz.S,height:24,justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2,borderRadius:i.TI.L},image:{width:20,height:20,marginRight:i.Kz.XS},imageSmall:{width:16,height:16,marginRight:i.Kz.XS},icon:{marginLeft:i.Kz.XS},wrapper:{flexDirection:"row"}});var d=function(e){var t=e.label,n=void 0===t?"Label":t,d=e.iconLeft,p=e.iconRight,s=e.selected,g=void 0!==s&&s,c=e.style,m=e.onPress,y=e.size,h=void 0===y?"large":y,u=e.iconLeftColor,f=e.iconRightColor,N=(0,a.useContext)(i.gD).theme,b=g?N.colors.primary:N.colors.text.default,v=g?N.colors.background.tonal:N.colors.border.default,C="label_default_medium",A=o.chip,E=o.image,S=20;"small"===h&&(A=o.smallChip,E=o.imageSmall,S=16,C="label_s_medium");return a.createElement(l.A,{style:[c,o.wrapper]},a.createElement(r.A,{onPress:m,style:[A,{backgroundColor:v}]},!!d&&a.createElement(i._V,{source:{uri:d},tintColor:u,style:E}),a.createElement(i.EY,{typography:C,color:b},n),!!p&&a.createElement(i.In,{source:p,color:f,size:S,style:o.icon}),g&&a.createElement(l.A,{style:[o.chipOverlay,{borderColor:N.colors.secondary}]})))},p=n(95412),s=n(93884),g=n(4107);const c=function(){var e=(0,s.A)({componentName:"Chip",props:{label:{value:"Tag",type:g.B.String,description:"Text to be displayed on the chip."},iconLeft:{value:void 0,type:g.B.String,description:"Name of the icon to be displayed on the left side of the chip."},iconRight:{value:void 0,type:g.B.String,description:"Name of the icon to be displayed on the right side of the chip."},selected:{value:!1,type:g.B.Boolean,description:"Indicates whether the chip is selected."},style:{value:void 0,type:g.B.String,description:"Custom styles to apply to the Chip component."},onPress:{value:void 0,type:g.B.Function,description:"Callback function triggered when the chip is pressed."},size:{value:void 0,options:["small","large"],type:g.B.Enum,description:"Size of the chip."},iconLeftColor:{value:void 0,type:g.B.String,description:"Color of the left icon."},iconRightColor:{value:void 0,type:g.B.String,description:"Color of the right icon."}},scope:{Chip:d},imports:{"@momo-kits/chip":{named:["Chip"]}}});return a.createElement(a.Fragment,null,a.createElement(p.A,{params:e}))}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(58168),i=n(74892),l=n(29813),r=n(91906),o=n(76482),d=n(5789),p=n(5641),s=n(10991),g=n(3533);const c=function(e){var t=e.params;return i.createElement(l.A,{fallback:i.createElement(i.Fragment,null,"Loading...")},(function(){return i.createElement("div",null,i.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},i.createElement(r.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),i.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),i.createElement(p.A,t.knobProps),i.createElement(s.A,t.editorProps),i.createElement(d.A,t.errorProps),i.createElement(g.w,t.actions))}))}},84872:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var a=n(58168),i=n(98587),l=(n(74892),n(77264)),r=n(54680),o=["components"],d={id:"chip",title:"Chip"},p=void 0,s={unversionedId:"docs/components/chip",id:"version-0.89.1/docs/components/chip",title:"Chip",description:"Playground",source:"@site/versioned_docs/version-0.89.1/docs/components/Chip.mdx",sourceDirName:"docs/components",slug:"/docs/components/chip",permalink:"/docs/0.89.1/docs/components/chip",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/Chip.mdx",tags:[],version:"0.89.1",frontMatter:{id:"chip",title:"Chip"},sidebar:"version-0.89.1/docs",previous:{title:"BadgeDot",permalink:"/docs/0.89.1/docs/components/badgedot"},next:{title:"Collapse",permalink:"/docs/0.89.1/docs/components/collapse"}},g={},c=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],m={toc:c},y="wrapper";function h(e){var t=e.components,n=(0,i.A)(e,o);return(0,l.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(r.A,{mdxType:"Play"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconLeft")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. The name of the icon to be displayed on the left side of the chip's label.If not provided, no icon is rendered on the left.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconLeftColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the color of the left icon. If not provided, a default icon color may be used.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconRight")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. The name of the icon to be displayed on the right side of the chip's label.If not provided, no icon is rendered on the right.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconRightColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the color of the right icon. If not provided, a default icon color may be used.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"label")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Label")),(0,l.yg)("td",{parentName:"tr",align:null},"The text to be displayed on the chip. This is typically a brief piece of information like a tag.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the chip is pressed. This makes the chip act as a touchable element.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"selected")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Indicates whether the chip is selected. A selected chip may have a different style or icon.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"size")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"large")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the chip, influencing its padding and font size. Can be 'small' or 'large'.If not provided, a standard size is used.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"style")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the Chip component. Can be a single style or an array of styles."))))))}h.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);