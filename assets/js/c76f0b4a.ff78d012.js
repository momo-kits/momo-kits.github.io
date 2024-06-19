(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[9949],{6899:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(13024),o=n(70288),r=n(10755),i=n(65641),l=n(29543);const p=function(){var t=(0,i.Z)({componentName:"PopupNotify",props:{image:{value:"https://i.imgur.com/s70S9s9.png",type:l.n.String,description:""},title:{value:"Title",type:l.n.String,description:""},description:{value:"Check l\u1ea1i m\u1ed9t nh\u1ecbp auto chuy\u1ec3n sang d\u1ea1ng CTA.",type:l.n.String,description:""},information:{value:"M\xe3: 123456",type:l.n.String,description:""},primary:{value:"{title: 'Primary', onPress: () => {}}",type:l.n.Object,description:""},secondary:{value:"{title: 'Secondary', onPress: () => {}}",type:l.n.Object,description:""},buttonDirection:{value:"row",defaultValue:"row",options:{row:"row",column:"column",auto:"auto"},type:l.n.Enum,description:"Defines the visual style of the button."},onIconClose:{value:void 0,type:l.n.Function,description:""}},scope:{PopupNotify:o.Lf},imports:{"@momo-kits/foundation":{named:["PopupNotify"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},10755:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),o=n(13024),r=n(10748),i=n(72997),l=n(9312),p=n(68170),d=n(78576),m=n(45217),s=n(46457);const u=function(t){var e=t.params;return o.createElement(r.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement("div",null,o.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},o.createElement(i.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:l.Z}))),o.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),o.createElement(d.Z,e.knobProps),o.createElement(m.Z,e.editorProps),o.createElement(p.Z,e.errorProps),o.createElement(s.E,e.actions))}))}},29001:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var a=n(87462),o=n(63366),r=(n(13024),n(31405)),i=n(6899),l=["components"],p={id:"popupnotify",title:"PopupNotify"},d=void 0,m={unversionedId:"docs/components/popupnotify",id:"version-0.89.1/docs/components/popupnotify",title:"PopupNotify",description:"Playground",source:"@site/versioned_docs/version-0.89.1/docs/components/PopupNotify.mdx",sourceDirName:"docs/components",slug:"/docs/components/popupnotify",permalink:"/docs/0.89.1/docs/components/popupnotify",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/PopupNotify.mdx",tags:[],version:"0.89.1",frontMatter:{id:"popupnotify",title:"PopupNotify"},sidebar:"version-0.89.1/docs",previous:{title:"PaginationScroll",permalink:"/docs/0.89.1/docs/components/paginationscroll"},next:{title:"PopupPromotion",permalink:"/docs/0.89.1/docs/components/popuppromotion"}},s={},u=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:u},k="wrapper";function N(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)(k,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(i.Z,{mdxType:"Play"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buttonDirection")),(0,r.kt)("td",{parentName:"tr",align:null},"PopupActionDirection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"row")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buttonDirection"),": Optional. Represents the direction in which the action buttons are laid out.- 'row': Buttons are laid out horizontally.- 'column': Buttons are laid out vertically.- 'auto': The layout is automatically determined by title length.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description"),": Represents the description text to be displayed in the PopupNotify component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error"),": Optional. Represents additional error text to be displayed in the PopupNotify component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),": Optional. id component_name for tracking component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image"),": Optional. Represents the URL or path of the image to be displayed in the PopupNotify component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onIconClose")),(0,r.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onIconClose"),": Optional. A callback function that is called when the close icon in the PopupNotify component is pressed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary")),(0,r.kt)("td",{parentName:"tr",align:null},"PopupAction"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary"),": Represents the primary action that can be performed from the PopupNotify component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"PopupAction"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondary"),": Optional. Represents the secondary action that can be performed from the PopupNotify component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title"),": Represents the title text to be displayed in the PopupNotify component."))))))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);