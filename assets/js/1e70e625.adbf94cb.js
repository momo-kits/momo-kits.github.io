(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[89267],{15859:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(13024),l=n(70288),r=n(10755),o=n(65641),i=n(29543);const p=function(){var t=(0,o.Z)({componentName:"Switch",props:{value:{value:!1,type:i.n.Boolean,description:'Represents whether the Switch component is currently in the "on" (true) or "off" (false) state.'},onChange:{value:"(value) => {}",type:i.n.Function,description:"A callback function that is called when the value of the Switch component changes. It receives the new value of the Switch as a parameter."},disabled:{value:!1,type:i.n.Boolean,description:"If true, the user won't be able to interact with the Switch component."},style:{value:"{}",type:i.n.Object,description:"Used to apply custom styling to the Switch component. Accepts an object of style properties."}},scope:{Switch:l.rs},imports:{"@momo-kits/foundation":{named:["Switch"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},10755:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var a=n(87462),l=n(13024),r=n(10748),o=n(72997),i=n(9312),p=n(68170),s=n(78576),d=n(45217),m=n(46457);const c=function(t){var e=t.params;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement("div",null,l.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},l.createElement(o.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(s.Z,e.knobProps),l.createElement(d.Z,e.editorProps),l.createElement(p.Z,e.errorProps),l.createElement(m.E,e.actions))}))}},68108:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=n(87462),l=n(63366),r=(n(13024),n(31405)),o=n(15859),i=["components"],p={id:"switch",title:"Switch"},s=void 0,d={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"Playground",source:"@site/docs/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/next/components/switch",draft:!1,editUrl:"https://github.com/docs/components/Switch.mdx",tags:[],version:"current",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"Skeleton",permalink:"/docs/next/components/skeleton"},next:{title:"Tag",permalink:"/docs/next/components/tag"}},m={},c=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],u={toc:c},k="wrapper";function h(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(o.Z,{mdxType:"Play"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"componentId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled"),": Optional. If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the user won't be able to interact with the Switch component.Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChange")),(0,r.kt)("td",{parentName:"tr",align:null},"(value: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChange"),": A callback function that is called when the value of the Switch component changes.It receives the new value of the Switch as a parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"ViewStyle"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style"),": Optional. Used to apply custom styling to the Switch component.Accepts an object of style properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value"),": Represents whether the Switch component is currently in the 'on' (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or 'off' (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") state."))))))}h.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);