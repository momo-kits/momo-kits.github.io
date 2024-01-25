(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[8955],{54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(87462),r=a(51702),o=a(91262),i=a(180),l=a(85405),p=a(3389),d=a(84085),s=a(17099),m=a(25757);const u=function(e){var t=e.params;return r.createElement(o.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:l.Z}))),r.createElement(p.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.Z,t.knobProps),r.createElement(s.Z,t.editorProps),r.createElement(p.Z,t.errorProps),r.createElement(m.E,t.actions))}))}},86286:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>C,frontMatter:()=>h,metadata:()=>N,toc:()=>b});var n=a(87462),r=a(63366),o=a(51702),i=a(1037),l=a(99370),p=a(25577);const d=a(81456).Z.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"}});const s=function(e){var t=e.size,a=void 0===t?32:t,n=e.name,r=e.rounded,i=void 0===r||r,s=e.showIconMomo,m=void 0!==s&&s,u=e.showIconSupport,c=void 0!==u&&u,g=e.iconSupport,k=void 0===g?"https://static.momocdn.net/app/img/kits/_indicator.png":g,h=e.image,v=(0,o.useContext)(p.Zz).theme,N=i?a/2:p.Ki.XS,f=function(){switch(a){case 24:case 32:default:return 16;case 40:return 24;case 48:case 56:return 32;case 72:return 40}},b=f(),y=m&&i,w=c&&i,C={width:f()/2,height:f()/2,borderRadius:f()/4};return o.createElement(l.Z,{style:[d.container,{width:(0,p.Vh)(a),height:(0,p.Vh)(a),backgroundColor:p.wL.pink_09,borderColor:v.colors.border.default,borderRadius:(0,p.Vh)(N)}]},y&&o.createElement(p.Ee,{source:{uri:"https://static.momocdn.net/app/img/kits/logo_momo_circle.png"},style:[d.icon,C,{top:-1,right:-1}]}),!!n&&!h&&o.createElement(p.xv,{color:p.wL.pink_03,typography:"description_xs"},function(e){return e.split(" ").slice(-2).map((function(e){return e.charAt(0).toUpperCase()})).join("")}(n)),!n&&!h&&o.createElement(p.JO,{size:b,source:"basic_person",color:p.wL.pink_03}),!!h&&o.createElement(p.Ee,{source:{uri:h},style:[d.image,{borderRadius:N}]}),w&&o.createElement(p.Ee,{source:{uri:k},style:[d.icon,C,{bottom:-1,right:-1}]}))};var m=a(54236),u=a(62964),c=a(53782);const g=function(){var e=(0,u.Z)({componentName:"Avatar",props:{size:{value:void 0,options:[24,32,40,56,72],type:c.n.Enum,description:"Size of the avatar."},rounded:{value:!1,type:c.n.Boolean,description:"If true, the avatar will have rounded corners."},showIconMomo:{value:!1,type:c.n.Boolean,description:'If true, display an icon representing "Momo".'},showIconSupport:{value:!1,type:c.n.Boolean,description:"If true, display a support icon for helpdesk representation."},iconSupport:{value:"",type:c.n.String,description:"Icon for support when showIconSupport is true."},name:{value:"",type:c.n.String,description:"Name associated with the avatar."},image:{value:"",type:c.n.String,description:"URL or local path of the image to be displayed as the avatar."}},scope:{Avatar:s},imports:{"@momo-kits/avatar":{named:["Avatar"]}}});return o.createElement(o.Fragment,null,o.createElement(m.Z,{params:e}))};var k=["components"],h={id:"avatar",title:"Avatar"},v=void 0,N={unversionedId:"components/avatar",id:"components/avatar",title:"Avatar",description:"Playground",source:"@site/docs/components/Avatar.mdx",sourceDirName:"components",slug:"/components/avatar",permalink:"/docs/components/avatar",draft:!1,editUrl:"https://github.com/docs/components/Avatar.mdx",tags:[],version:"current",frontMatter:{id:"avatar",title:"Avatar"},sidebar:"docs",previous:{title:"AutoComplete",permalink:"/docs/components/autocomplete"},next:{title:"Badge",permalink:"/docs/components/badge"}},f={},b=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],y={toc:b},w="wrapper";function C(e){var t=e.components,a=(0,r.Z)(e,k);return(0,i.kt)(w,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)(g,{mdxType:"Play"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iconSupport")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://static.momocdn.net/app/img/kits/_indicator.png")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the icon for support. This is used in conjunction with ",(0,i.kt)("inlineCode",{parentName:"td"},"showIconSupport"),".If ",(0,i.kt)("inlineCode",{parentName:"td"},"showIconSupport")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," but no ",(0,i.kt)("inlineCode",{parentName:"td"},"iconSupport")," is provided, a default icon may be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. The URL or local path of the image to be displayed as the avatar.If not provided, a placeholder or default avatar may be displayed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. The name associated with the avatar. This could be the user\u2019s full name,first name, or a username, depending on the implementation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rounded")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the avatar will have rounded corners, providing a circular appearance.Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," if not provided, resulting in a square or rectangular avatar.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showIconMomo")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),', an icon representing "Momo" will be displayed.This is specific to the use-case where the application requires a Momo icon.Defaults to ',(0,i.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showIconSupport")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", a support icon will be displayed, suggesting this avatar is for support or helpdesk representation.Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:null},"AvatarSize"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"32")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the avatar from a set of predefined sizes.If not provided, the component may use a default size."))))))}C.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);