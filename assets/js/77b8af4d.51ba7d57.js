(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[4806],{66283:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(51702),r=n(74183),l=n(54236),o=n(62964),i=n(53782);const p=function(){var t=(0,o.Z)({componentName:"InputOTP",props:{length:{value:void 0,type:i.n.Enum,options:{2:2,4:4,6:6,8:8},description:"Optional. Defines the length of the OTP (One Time Password) input. Can be 2, 4, 6, 8, or 10."},placeholder:{value:"placeholder",type:i.n.String,description:""},floatingValue:{value:void 0,type:i.n.String,description:"Optional. Represents the value for the floating title in the Input component."},floatingIcon:{value:void 0,type:i.n.String,description:"Optional. Represents the name or key of the floating icon to be displayed in the Input component."},errorMessage:{value:void 0,type:i.n.String,description:"Optional. Represents the error message to be displayed below the Input component when there is an error."},floatingIconColor:{value:void 0,type:i.n.String,description:"Optional. Represents the color of the floating icon in the Input component."},iconColor:{value:void 0,type:i.n.String,description:"Optional. Represents the color of the icon in the Input component."},errorSpacing:{value:!1,type:i.n.Boolean,description:"Optional. If `true`, include spacing when Input does not have an error message. Defaults to `false` if not provided."}},scope:{InputOTP:r.Zn},imports:{"@momo-kits/foundation":{named:["InputOTP"]}}});return a.createElement(a.Fragment,null,a.createElement(l.Z,{params:t}))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),r=n(51702),l=n(91262),o=n(180),i=n(85405),p=n(3389),d=n(84085),m=n(17099),s=n(25757);const u=function(t){var e=t.params;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(o.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(d.Z,e.knobProps),r.createElement(m.Z,e.editorProps),r.createElement(p.Z,e.errorProps),r.createElement(s.E,e.actions))}))}},54654:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var a=n(87462),r=n(63366),l=(n(51702),n(1037)),o=n(66283),i=["components"],p={id:"inputotp",title:"InputOTP"},d=void 0,m={unversionedId:"docs/components/inputotp",id:"version-0.89.1/docs/components/inputotp",title:"InputOTP",description:"Playground",source:"@site/versioned_docs/version-0.89.1/docs/components/InputOTP.mdx",sourceDirName:"docs/components",slug:"/docs/components/inputotp",permalink:"/docs/docs/components/inputotp",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/InputOTP.mdx",tags:[],version:"0.89.1",frontMatter:{id:"inputotp",title:"InputOTP"},sidebar:"version-0.89.1/docs",previous:{title:"InputDropDown",permalink:"/docs/docs/components/inputdropdown"},next:{title:"Screen",permalink:"/docs/docs/components/screen"}},s={},u=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],g={toc:u},k="wrapper";function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(k,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(o.Z,{mdxType:"Play"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"input#props"},"Input")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Defines the data type of the OTP input.'string' - The OTP input will be treated as a string.'number' - The OTP input will be treated as a number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user won't be able to interact with the Input component.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the error message to be displayed below the Input component when there is an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorSpacing")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),",include spacing when Input not have error message.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"floatingIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the name or key of the floating icon to be displayed in the Input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"floatingIconColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the color of the floating icon in the Input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"floatingValue")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the value for the floating title in the Input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Regular")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"Bold")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leadingIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the leading icon in the Input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leadingIconColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Represents the color of the leading icon in the Input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"length")),(0,l.kt)("td",{parentName:"tr",align:null},"OTPInputLength"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Defines the length of the OTP (One Time Password) input.Can be 2, 4, 6, 8, or 10.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the icon of input will use be show indicator loading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"(() => void)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the Input component is marked as required,indicating that the user must provide a value before submitting a form.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided."))))))}c.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);