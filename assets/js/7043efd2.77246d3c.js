(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[74332],{51067:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(13024),i=n(70288),l=n(93605),o=n(93353);const r=n(75944).Z.create({chip:{borderRadius:i.wU.L,paddingHorizontal:i.Ki.S,height:32,justifyContent:"center",alignItems:"center",flexDirection:"row"},smallChip:{borderRadius:i.wU.L,paddingHorizontal:i.Ki.S,height:24,justifyContent:"center",alignItems:"center",flexDirection:"row"},chipOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:-1,borderWidth:2,borderRadius:i.wU.L},image:{width:20,height:20,marginRight:i.Ki.XS},imageSmall:{width:16,height:16,marginRight:i.Ki.XS},icon:{marginLeft:i.Ki.XS},wrapper:{flexDirection:"row"}});var d=function(e){var t=e.label,n=void 0===t?"Label":t,d=e.iconLeft,p=e.iconRight,s=e.selected,c=void 0!==s&&s,m=e.style,h=e.onPress,u=e.size,g=void 0===u?"large":u,k=e.iconLeftColor,f=e.iconRightColor,N=(0,a.useContext)(i.Zz).theme,y=c?N.colors.primary:N.colors.text.default,b=c?N.colors.background.tonal:N.colors.border.default,v="label_default_medium",C=r.chip,w=r.image,E=20;"small"===g&&(C=r.smallChip,w=r.imageSmall,E=16,v="label_s_medium");return a.createElement(l.Z,{style:[m,r.wrapper]},a.createElement(o.Z,{onPress:h,style:[C,{backgroundColor:b}]},!!d&&a.createElement(i.Ee,{source:{uri:d},tintColor:k,style:w}),a.createElement(i.xv,{typography:v,color:y},n),!!p&&a.createElement(i.JO,{source:p,color:f,size:E,style:r.icon}),c&&a.createElement(l.Z,{style:[r.chipOverlay,{borderColor:N.colors.secondary}]})))},p=n(10755),s=n(65641),c=n(29543);const m=function(){var e=(0,s.Z)({componentName:"Chip",props:{label:{value:"Tag",type:c.n.String,description:"Text to be displayed on the chip."},iconLeft:{value:void 0,type:c.n.String,description:"Name of the icon to be displayed on the left side of the chip."},iconRight:{value:void 0,type:c.n.String,description:"Name of the icon to be displayed on the right side of the chip."},selected:{value:!1,type:c.n.Boolean,description:"Indicates whether the chip is selected."},style:{value:void 0,type:c.n.String,description:"Custom styles to apply to the Chip component."},onPress:{value:void 0,type:c.n.Function,description:"Callback function triggered when the chip is pressed."},size:{value:void 0,options:["small","large"],type:c.n.Enum,description:"Size of the chip."},iconLeftColor:{value:void 0,type:c.n.String,description:"Color of the left icon."},iconRightColor:{value:void 0,type:c.n.String,description:"Color of the right icon."}},scope:{Chip:d},imports:{"@momo-kits/chip":{named:["Chip"]}}});return a.createElement(a.Fragment,null,a.createElement(p.Z,{params:e}))}},10755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),i=n(13024),l=n(10748),o=n(72997),r=n(9312),d=n(68170),p=n(78576),s=n(45217),c=n(46457);const m=function(e){var t=e.params;return i.createElement(l.Z,{fallback:i.createElement(i.Fragment,null,"Loading...")},(function(){return i.createElement("div",null,i.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},i.createElement(o.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:r.Z}))),i.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),i.createElement(p.Z,t.knobProps),i.createElement(s.Z,t.editorProps),i.createElement(d.Z,t.errorProps),i.createElement(c.E,t.actions))}))}},32595:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(87462),i=n(63366),l=(n(13024),n(31405)),o=n(51067),r=["components"],d={id:"chip",title:"Chip"},p=void 0,s={unversionedId:"docs/components/chip",id:"version-0.81.43/docs/components/chip",title:"Chip",description:"Playground",source:"@site/versioned_docs/version-0.81.43/docs/components/Chip.mdx",sourceDirName:"docs/components",slug:"/docs/components/chip",permalink:"/docs/0.81.43/docs/components/chip",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.43/docs/components/Chip.mdx",tags:[],version:"0.81.43",frontMatter:{id:"chip",title:"Chip"},sidebar:"version-0.81.43/docs",previous:{title:"BadgeDot",permalink:"/docs/0.81.43/docs/components/badgedot"},next:{title:"Collapse",permalink:"/docs/0.81.43/docs/components/collapse"}},c={},m=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],h={toc:m},u="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(o.Z,{mdxType:"Play"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconLeft")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. The name of the icon to be displayed on the left side of the chip's label.If not provided, no icon is rendered on the left.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconLeftColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the color of the left icon. If not provided, a default icon color may be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconRight")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. The name of the icon to be displayed on the right side of the chip's label.If not provided, no icon is rendered on the right.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconRightColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the color of the right icon. If not provided, a default icon color may be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Label")),(0,l.kt)("td",{parentName:"tr",align:null},"The text to be displayed on the chip. This is typically a brief piece of information like a tag.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the chip is pressed. This makes the chip act as a touchable element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selected")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Indicates whether the chip is selected. A selected chip may have a different style or icon.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"large")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"large")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the chip, influencing its padding and font size. Can be 'small' or 'large'.If not provided, a standard size is used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewStyle")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"ViewStyle[]")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the Chip component. Can be a single style or an array of styles."))))))}g.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);