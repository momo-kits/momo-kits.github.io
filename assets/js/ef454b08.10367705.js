(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[97593],{83931:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(74892),o=n(16943),r=n(95412),i=n(93884),l=n(4107);const p=function(){var e=(0,i.A)({componentName:"PopupNotify",props:{image:{value:"https://i.imgur.com/s70S9s9.png",type:l.B.String,description:""},title:{value:"Title",type:l.B.String,description:""},description:{value:"Check l\u1ea1i m\u1ed9t nh\u1ecbp auto chuy\u1ec3n sang d\u1ea1ng CTA.",type:l.B.String,description:""},information:{value:"M\xe3: 123456",type:l.B.String,description:""},primary:{value:"{title: 'Primary', onPress: () => {}}",type:l.B.Object,description:""},secondary:{value:"{title: 'Secondary', onPress: () => {}}",type:l.B.Object,description:""},buttonDirection:{value:"row",defaultValue:"row",options:{row:"row",column:"column",auto:"auto"},type:l.B.Enum,description:"Defines the visual style of the button."},onIconClose:{value:void 0,type:l.B.Function,description:""}},scope:{PopupNotify:o.Ci},imports:{"@momo-kits/foundation":{named:["PopupNotify"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(58168),o=n(74892),r=n(29813),i=n(91906),l=n(76482),p=n(5789),d=n(5641),m=n(10991),g=n(3533);const y=function(e){var t=e.params;return o.createElement(r.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement("div",null,o.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},o.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),o.createElement(p.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(d.A,t.knobProps),o.createElement(m.A,t.editorProps),o.createElement(p.A,t.errorProps),o.createElement(g.w,t.actions))}))}},46310:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var a=n(58168),o=n(98587),r=(n(74892),n(77264)),i=n(83931),l=["components"],p={id:"popupnotify",title:"PopupNotify"},d=void 0,m={unversionedId:"components/popupnotify",id:"version-0.103.1/components/popupnotify",title:"PopupNotify",description:"Playground",source:"@site/versioned_docs/version-0.103.1/components/PopupNotify.mdx",sourceDirName:"components",slug:"/components/popupnotify",permalink:"/docs/0.103.1/components/popupnotify",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.103.1/components/PopupNotify.mdx",tags:[],version:"0.103.1",frontMatter:{id:"popupnotify",title:"PopupNotify"},sidebar:"version-0.103.1",previous:{title:"PaginationScroll",permalink:"/docs/0.103.1/components/paginationscroll"},next:{title:"PopupPromotion",permalink:"/docs/0.103.1/components/popuppromotion"}},g={},y=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],s={toc:y},u="wrapper";function c(e){var t=e.components,n=(0,o.A)(e,l);return(0,r.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(i.A,{mdxType:"Play"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buttonDirection")),(0,r.yg)("td",{parentName:"tr",align:null},"PopupActionDirection"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"row")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buttonDirection"),": Optional. Represents the direction in which the action buttons are laid out.- 'row': Buttons are laid out horizontally.- 'column': Buttons are laid out vertically.- 'auto': The layout is automatically determined by title length.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"description")),(0,r.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Description")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"description"),": Represents the description text to be displayed in the PopupNotify component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"error"),": Optional. Represents additional error text to be displayed in the PopupNotify component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"id"),": Optional. id component_name for tracking component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"image")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"image"),": Optional. Represents the URL or path of the image to be displayed in the PopupNotify component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onIconClose")),(0,r.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onIconClose"),": Optional. A callback function that is called when the close icon in the PopupNotify component is pressed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"primary")),(0,r.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"primary"),": Represents the primary action that can be performed from the PopupNotify component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"secondary")),(0,r.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"secondary"),": Optional. Represents the secondary action that can be performed from the PopupNotify component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"title")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Title")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"title"),": Represents the title text to be displayed in the PopupNotify component."))))))}c.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);