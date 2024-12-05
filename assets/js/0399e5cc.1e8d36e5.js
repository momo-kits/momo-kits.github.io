(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[50082],{5980:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(49397),r=n(83640),o=n(64775),i=n(44319),l=n(70172);const p=function(){var e=(0,i.A)({componentName:"PopupNotify",props:{image:{value:"https://i.imgur.com/s70S9s9.png",type:l.B.String,description:""},title:{value:"Title",type:l.B.String,description:""},description:{value:"Check l\u1ea1i m\u1ed9t nh\u1ecbp auto chuy\u1ec3n sang d\u1ea1ng CTA.",type:l.B.String,description:""},information:{value:"M\xe3: 123456",type:l.B.String,description:""},primary:{value:"{title: 'Primary', onPress: () => {}}",type:l.B.Object,description:""},secondary:{value:"{title: 'Secondary', onPress: () => {}}",type:l.B.Object,description:""},buttonDirection:{value:"row",defaultValue:"row",options:{row:"row",column:"column",auto:"auto"},type:l.B.Enum,description:"Defines the visual style of the button."},onIconClose:{value:void 0,type:l.B.Function,description:""}},scope:{PopupNotify:r.Ci},imports:{"@momo-kits/foundation":{named:["PopupNotify"]}}});return a.createElement(a.Fragment,null,a.createElement(o.A,{params:e}))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(58168),r=n(49397),o=n(78478),i=n(1905),l=n(86183),p=n(19080),d=n(29013),m=n(74177),g=n(25674);const y=function(e){var t=e.params;return r.createElement(o.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),r.createElement(p.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(m.A,t.editorProps),r.createElement(p.A,t.errorProps),r.createElement(g.w,t.actions))}))}},59789:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var a=n(58168),r=n(98587),o=(n(49397),n(77611)),i=n(5980),l=["components"],p={id:"popupnotify",title:"PopupNotify"},d=void 0,m={unversionedId:"components/popupnotify",id:"version-0.89.1-rc.5/components/popupnotify",title:"PopupNotify",description:"Playground",source:"@site/versioned_docs/version-0.89.1-rc.5/components/PopupNotify.mdx",sourceDirName:"components",slug:"/components/popupnotify",permalink:"/docs/0.89.1-rc.5/components/popupnotify",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1-rc.5/components/PopupNotify.mdx",tags:[],version:"0.89.1-rc.5",frontMatter:{id:"popupnotify",title:"PopupNotify"},sidebar:"version-0.89.1-rc.5",previous:{title:"PaginationScroll",permalink:"/docs/0.89.1-rc.5/components/paginationscroll"},next:{title:"PopupPromotion",permalink:"/docs/0.89.1-rc.5/components/popuppromotion"}},g={},y=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],s={toc:y},u="wrapper";function c(e){var t=e.components,n=(0,r.A)(e,l);return(0,o.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(i.A,{mdxType:"Play"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"buttonDirection")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupActionDirection"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"row")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"buttonDirection"),": Optional. Represents the direction in which the action buttons are laid out.- 'row': Buttons are laid out horizontally.- 'column': Buttons are laid out vertically.- 'auto': The layout is automatically determined by title length.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"description")),(0,o.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Description")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"description"),": Represents the description text to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"error")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"error"),": Optional. Represents additional error text to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"id")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"id"),": Optional. id component_name for tracking component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"image")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"image"),": Optional. Represents the URL or path of the image to be displayed in the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onIconClose")),(0,o.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onIconClose"),": Optional. A callback function that is called when the close icon in the PopupNotify component is pressed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"primary")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"primary"),": Represents the primary action that can be performed from the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"secondary")),(0,o.yg)("td",{parentName:"tr",align:null},"PopupAction"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"secondary"),": Optional. Represents the secondary action that can be performed from the PopupNotify component.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Title")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"title"),": Represents the title text to be displayed in the PopupNotify component."))))))}c.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);