(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[8955],{37987:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(51702),r=a(99370),o=a(74183);const i=a(81456).Z.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"}});var l=function(e){var t=e.size,a=void 0===t?32:t,l=e.name,p=e.rounded,d=void 0===p||p,s=e.showIconMomo,m=void 0!==s&&s,u=e.showIconSupport,c=void 0!==u&&u,g=e.iconSupport,k=void 0===g?"https://static.momocdn.net/app/img/kits/_indicator.png":g,h=e.image,v=(0,n.useContext)(o.Zz).theme,N=d?a/2:o.Ki.XS,f=function(){switch(a){case 24:case 32:default:return 16;case 40:return 24;case 48:case 56:return 32;case 72:return 40}},b=f(),y=m&&d,w=c&&d,C={width:f()/2,height:f()/2,borderRadius:f()/4};return n.createElement(r.Z,{style:[i.container,{width:(0,o.Vh)(a),height:(0,o.Vh)(a),backgroundColor:o.wL.pink_09,borderColor:v.colors.border.default,borderRadius:(0,o.Vh)(N)}]},y&&n.createElement(o.Ee,{source:{uri:"https://static.momocdn.net/app/img/kits/logo_momo_circle.png"},style:[i.icon,C,{top:-1,right:-1}]}),!!l&&!h&&n.createElement(o.xv,{color:o.wL.pink_03,typography:"description_xs_regular"},function(e){return e.split(" ").slice(-2).map((function(e){return e.charAt(0).toUpperCase()})).join("")}(l)),!l&&!h&&n.createElement(o.JO,{size:b,source:"basic_person",color:o.wL.pink_03}),!!h&&n.createElement(o.Ee,{source:{uri:h},style:[i.image,{borderRadius:N}]}),w&&n.createElement(o.Ee,{source:{uri:k},style:[i.icon,C,{bottom:-1,right:-1}]}))},p=a(54236),d=a(62964),s=a(53782);const m=function(){var e=(0,d.Z)({componentName:"Avatar",props:{size:{value:void 0,options:[24,32,40,56,72],type:s.n.Enum,description:"Size of the avatar."},rounded:{value:!1,type:s.n.Boolean,description:"If true, the avatar will have rounded corners."},showIconMomo:{value:!1,type:s.n.Boolean,description:'If true, display an icon representing "Momo".'},showIconSupport:{value:!1,type:s.n.Boolean,description:"If true, display a support icon for helpdesk representation."},iconSupport:{value:"",type:s.n.String,description:"Icon for support when showIconSupport is true."},name:{value:"",type:s.n.String,description:"Name associated with the avatar."},image:{value:"",type:s.n.String,description:"URL or local path of the image to be displayed as the avatar."}},scope:{Avatar:l},imports:{"@momo-kits/avatar":{named:["Avatar"]}}});return n.createElement(n.Fragment,null,n.createElement(p.Z,{params:e}))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(87462),r=a(51702),o=a(91262),i=a(180),l=a(85405),p=a(3389),d=a(84085),s=a(17099),m=a(25757);const u=function(e){var t=e.params;return r.createElement(o.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:l.Z}))),r.createElement(p.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.Z,t.knobProps),r.createElement(s.Z,t.editorProps),r.createElement(p.Z,t.errorProps),r.createElement(m.E,t.actions))}))}},67091:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=a(87462),r=a(63366),o=(a(51702),a(1037)),i=a(37987),l=["components"],p={id:"avatar",title:"Avatar"},d=void 0,s={unversionedId:"components/avatar",id:"components/avatar",title:"Avatar",description:"Playground",source:"@site/docs/components/Avatar.mdx",sourceDirName:"components",slug:"/components/avatar",permalink:"/docs/next/components/avatar",draft:!1,editUrl:"https://github.com/docs/components/Avatar.mdx",tags:[],version:"current",frontMatter:{id:"avatar",title:"Avatar"},sidebar:"docs",previous:{title:"AutoComplete",permalink:"/docs/next/components/autocomplete"},next:{title:"Badge",permalink:"/docs/next/components/badge"}},m={},u=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:u},g="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(g,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(i.Z,{mdxType:"Play"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"iconSupport")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://static.momocdn.net/app/img/kits/_indicator.png")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the icon for support. This is used in conjunction with ",(0,o.kt)("inlineCode",{parentName:"td"},"showIconSupport"),".If ",(0,o.kt)("inlineCode",{parentName:"td"},"showIconSupport")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," but no ",(0,o.kt)("inlineCode",{parentName:"td"},"iconSupport")," is provided, a default icon may be used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"image")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. The URL or local path of the image to be displayed as the avatar.If not provided, a placeholder or default avatar may be displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. The name associated with the avatar. This could be the user\u2019s full name,first name, or a username, depending on the implementation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rounded")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the avatar will have rounded corners, providing a circular appearance.Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," if not provided, resulting in a square or rectangular avatar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"showIconMomo")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),', an icon representing "Momo" will be displayed.This is specific to the use-case where the application requires a Momo icon.Defaults to ',(0,o.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"showIconSupport")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", a support icon will be displayed, suggesting this avatar is for support or helpdesk representation.Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"size")),(0,o.kt)("td",{parentName:"tr",align:null},"AvatarSize"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"32")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the avatar from a set of predefined sizes.If not provided, the component may use a default size."))))))}k.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);