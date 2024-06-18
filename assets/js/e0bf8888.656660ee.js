(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[8640],{83931:(t,e,n)=>{"use strict";n.d(e,{A:()=>p});var a=n(74892),r=n(20177),o=n(95412),i=n(93884),l=n(4107);const p=function(){var t=(0,i.A)({componentName:"PopupNotify",props:{image:{value:"https://i.imgur.com/s70S9s9.png",type:l.B.String,description:""},title:{value:"Title",type:l.B.String,description:""},description:{value:"Check l\u1ea1i m\u1ed9t nh\u1ecbp auto chuy\u1ec3n sang d\u1ea1ng CTA.",type:l.B.String,description:""},information:{value:"M\xe3: 123456",type:l.B.String,description:""},primary:{value:"{title: 'Primary', onPress: () => {}}",type:l.B.Object,description:""},secondary:{value:"{title: 'Secondary', onPress: () => {}}",type:l.B.Object,description:""},buttonDirection:{value:"row",defaultValue:"row",options:{row:"row",column:"column",auto:"auto"},type:l.B.Enum,description:"Defines the visual style of the button."},onIconClose:{value:void 0,type:l.B.Function,description:""}},scope:{PopupNotify:r.Ci},imports:{"@momo-kits/foundation":{named:["PopupNotify"]}}});return a.createElement(a.Fragment,null,a.createElement(o.A,{params:t}))}},95412:(t,e,n)=>{"use strict";n.d(e,{A:()=>y});var a=n(58168),r=n(74892),o=n(29813),i=n(91906),l=n(76482),p=n(5789),d=n(5641),m=n(10991),g=n(3533);const y=function(t){var e=t.params;return r.createElement(o.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.A,(0,a.A)({},e.compilerProps,{minHeight:62,placeholder:l.A}))),r.createElement(p.A,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(d.A,e.knobProps),r.createElement(m.A,e.editorProps),r.createElement(p.A,e.errorProps),r.createElement(g.w,e.actions))}))}},23759:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var a=n(58168),r=n(98587),o=(n(74892),n(77264)),i=n(83931),l=["components"],p={id:"popupnotify",title:"PopupNotify"},d=void 0,m={unversionedId:"components/popupnotify",id:"components/popupnotify",title:"PopupNotify",description:"Playground",source:"@site/docs/components/PopupNotify.mdx",sourceDirName:"components",slug:"/components/popupnotify",permalink:"/docs/next/components/popupnotify",draft:!1,editUrl:"https://github.com/docs/components/PopupNotify.mdx",tags:[],version:"current",frontMatter:{id:"popupnotify",title:"PopupNotify"},sidebar:"docs",previous:{title:"PaginationScroll",permalink:"/docs/next/components/paginationscroll"},next:{title:"PopupPromotion",permalink:"/docs/next/components/popuppromotion"}},g={},y=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],s={toc:y},u="wrapper";function c(t){var e=t.components,n=(0,r.A)(t,l);return(0,o.yg)(u,(0,a.A)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(i.A,{mdxType:"Play"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"buttonDirection")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupActionDirection"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"row")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"buttonDirection"),": Optional. Represents the direction in which the action buttons are laid out.- 'row': Buttons are laid out horizontally.- 'column': Buttons are laid out vertically.- 'auto': The layout is automatically determined by title length.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"description")),(0,o.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Description")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"description"),": Represents the description text to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"error")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"error"),": Optional. Represents additional error text to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"id")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"id"),": Optional. id component_name for tracking component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"image")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"image"),": Optional. Represents the URL or path of the image to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onIconClose")),(0,o.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onIconClose"),": Optional. A callback function that is called when the close icon in the PopupNotify component is pressed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"primary")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"primary"),": Represents the primary action that can be performed from the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"secondary")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"secondary"),": Optional. Represents the secondary action that can be performed from the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Title")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title"),": Represents the title text to be displayed in the PopupNotify component."))))))}c.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);