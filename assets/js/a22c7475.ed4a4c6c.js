(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[28922],{80263:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(74892),l=n(20177),i=n(95412),r=n(93884),o=n(4107);const d=function(){var e=(0,r.A)({componentName:"Title",props:{type:{value:"screen",defaultValue:"screen",options:{screen:"screen",section:"section",card:"card"},type:o.B.Enum,description:""},title:{value:"Title",type:o.B.String,description:"Represents the text that will be displayed on the button."},description:{value:void 0,type:o.B.String,description:"Represents the text that will be displayed on the button."},size:{value:"large",defaultValue:"large",options:{large:"large",small:"small"},type:o.B.Enum,description:"Defines the size of the button."},icon:{value:void 0,type:o.B.String,description:"Specifies the name of the icon that should be placed on the left side of the button."},titleFlex:{value:!0,type:o.B.Boolean,description:"If true, the button will take the full width of its container."},actionTitle:{value:void 0,type:o.B.String,description:"Specifies the name of the icon that should be placed on the left side of the button."},showAction:{value:!0,type:o.B.Boolean,description:"If true, the button will take the full width of its container."},onPressAction:{value:"() => {}",type:o.B.Function,description:"A callback function that is called when the button is pressed."}},scope:{Title:l.hE},imports:{"@momo-kits/foundation":{named:["Title"]}}});return a.createElement(a.Fragment,null,a.createElement(i.A,{params:e}))}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(58168),l=n(74892),i=n(29813),r=n(91906),o=n(76482),d=n(5789),p=n(5641),s=n(10991),g=n(3533);const m=function(e){var t=e.params;return l.createElement(i.A,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement("div",null,l.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},l.createElement(r.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),l.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(p.A,t.knobProps),l.createElement(s.A,t.editorProps),l.createElement(d.A,t.errorProps),l.createElement(g.w,t.actions))}))}},75436:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(58168),l=n(98587),i=(n(74892),n(77264)),r=n(80263),o=["components"],d={id:"title",title:"Title"},p=void 0,s={unversionedId:"docs/components/title",id:"version-0.81.43/docs/components/title",title:"Title",description:"Playground",source:"@site/versioned_docs/version-0.81.43/docs/components/Title.mdx",sourceDirName:"docs/components",slug:"/docs/components/title",permalink:"/docs/0.81.43/docs/components/title",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.81.43/docs/components/Title.mdx",tags:[],version:"0.81.43",frontMatter:{id:"title",title:"Title"},sidebar:"version-0.81.43/docs",previous:{title:"Text",permalink:"/docs/0.81.43/docs/components/text"},next:{title:"ItemList",permalink:"/docs/0.81.43/docs/components/itemlist"}},g={},m=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:m},y="wrapper";function u(e){var t=e.components,n=(0,l.A)(e,o);return(0,i.yg)(y,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"playground"},"Playground"),(0,i.yg)(r.A,{mdxType:"Play"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"actionTitle")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Text for an action button associated with the title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"description")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. A description or subtitle that appears below the title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"icon")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Represents the name or key of the icon to be displayed alongside the title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"onPressAction")),(0,i.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Function to be called when the action associated with the title is pressed.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"showAction")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,i.yg)("inlineCode",{parentName:"td"},"true"),", an action button or icon is displayed alongside the title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"size")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"small")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"td"},"large")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"td"},"medium")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"large")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Defines the size of the Title component.'large' - A larger, more prominent title.'small' - A smaller, less prominent title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"title")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Title")),(0,i.yg)("td",{parentName:"tr",align:null},"Required. The text of the title.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"titleFlex")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,i.yg)("inlineCode",{parentName:"td"},"true"),", the title will be flexible in its container, adjusting its width dynamically.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"type")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"screen")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"td"},"section")," ","|"," ",(0,i.yg)("inlineCode",{parentName:"td"},"card")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"section")),(0,i.yg)("td",{parentName:"tr",align:null},"Optional. Defines the type of Title component.'screen' - Used for screen titles.'section' - Used for section titles within a screen.'card' - Used for titles within a card component.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"usePadding")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"true")),(0,i.yg)("td",{parentName:"tr",align:null}))))))}u.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);