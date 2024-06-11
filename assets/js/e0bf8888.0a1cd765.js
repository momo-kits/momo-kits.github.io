(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[2069],{34121:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(51702),r=n(74183),o=n(54236),i=n(62964),l=n(53782);const p=function(){var t=(0,i.Z)({componentName:"PopupNotify",props:{image:{value:"https://i.imgur.com/s70S9s9.png",type:l.n.String,description:""},title:{value:"Title",type:l.n.String,description:""},description:{value:"Check l\u1ea1i m\u1ed9t nh\u1ecbp auto chuy\u1ec3n sang d\u1ea1ng CTA.",type:l.n.String,description:""},information:{value:"M\xe3: 123456",type:l.n.String,description:""},primary:{value:"{title: 'Primary', onPress: () => {}}",type:l.n.Object,description:""},secondary:{value:"{title: 'Secondary', onPress: () => {}}",type:l.n.Object,description:""},buttonDirection:{value:"row",defaultValue:"row",options:{row:"row",column:"column",auto:"auto"},type:l.n.Enum,description:"Defines the visual style of the button."},onIconClose:{value:void 0,type:l.n.Function,description:""}},scope:{PopupNotify:r.Lf},imports:{"@momo-kits/foundation":{named:["PopupNotify"]}}});return a.createElement(a.Fragment,null,a.createElement(o.Z,{params:t}))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),r=n(51702),o=n(91262),i=n(180),l=n(85405),p=n(3389),d=n(84085),m=n(17099),s=n(25757);const u=function(t){var e=t.params;return r.createElement(o.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:l.Z}))),r.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(d.Z,e.knobProps),r.createElement(m.Z,e.editorProps),r.createElement(p.Z,e.errorProps),r.createElement(s.E,e.actions))}))}},30363:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var a=n(87462),r=n(63366),o=(n(51702),n(1037)),i=n(34121),l=["components"],p={id:"popupnotify",title:"PopupNotify"},d=void 0,m={unversionedId:"components/popupnotify",id:"components/popupnotify",title:"PopupNotify",description:"Playground",source:"@site/docs/components/PopupNotify.mdx",sourceDirName:"components",slug:"/components/popupnotify",permalink:"/docs/next/components/popupnotify",draft:!1,editUrl:"https://github.com/docs/components/PopupNotify.mdx",tags:[],version:"current",frontMatter:{id:"popupnotify",title:"PopupNotify"},sidebar:"docs",previous:{title:"PaginationScroll",permalink:"/docs/next/components/paginationscroll"},next:{title:"PopupPromotion",permalink:"/docs/next/components/popuppromotion"}},s={},u=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:u},k="wrapper";function N(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)(k,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(i.Z,{mdxType:"Play"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"buttonDirection")),(0,o.kt)("td",{parentName:"tr",align:null},"PopupActionDirection"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"row")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"buttonDirection"),": Optional. Represents the direction in which the action buttons are laid out.- 'row': Buttons are laid out horizontally.- 'column': Buttons are laid out vertically.- 'auto': The layout is automatically determined by title length.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"description")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"description"),": Represents the description text to be displayed in the PopupNotify component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"error"),": Optional. Represents additional error text to be displayed in the PopupNotify component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id"),": Optional. id component_name for tracking component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"image")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"image"),": Optional. Represents the URL or path of the image to be displayed in the PopupNotify component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onIconClose")),(0,o.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onIconClose"),": Optional. A callback function that is called when the close icon in the PopupNotify component is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"primary")),(0,o.kt)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"primary"),": Represents the primary action that can be performed from the PopupNotify component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"secondary")),(0,o.kt)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"secondary"),": Optional. Represents the secondary action that can be performed from the PopupNotify component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"title")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Title")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"title"),": Represents the title text to be displayed in the PopupNotify component."))))))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);