(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[13567],{94653:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var n=a(74892),r=a(77672),o=a(20177);const i=a(33504).A.create({icon:{position:"absolute",overflow:"hidden"},container:{alignItems:"center",justifyContent:"center",borderWidth:1},image:{width:"100%",height:"100%"}});var l=function(e){var t=e.size,a=void 0===t?32:t,l=e.name,p=e.rounded,d=void 0===p||p,s=e.showIconMomo,m=void 0!==s&&s,c=e.showIconSupport,g=void 0!==c&&c,u=e.iconSupport,y=void 0===u?"https://static.momocdn.net/app/img/kits/_indicator.png":u,h=e.image,v=(0,n.useContext)(o.gD).theme,N=d?a/2:o.Kz.XS,f=function(){switch(a){case 24:case 32:default:return 16;case 40:return 24;case 48:case 56:return 32;case 72:return 40}},b=f(),C=m&&d,w=g&&d,A={width:f()/2,height:f()/2,borderRadius:f()/4};return n.createElement(r.A,{style:[i.container,{width:(0,o._6)(a),height:(0,o._6)(a),backgroundColor:o.Jy.pink_09,borderColor:v.colors.border.default,borderRadius:(0,o._6)(N)}]},C&&n.createElement(o._V,{source:{uri:"https://static.momocdn.net/app/img/kits/logo_momo_circle.png"},style:[i.icon,A,{top:-1,right:-1}]}),!!l&&!h&&n.createElement(o.EY,{color:o.Jy.pink_03,typography:"description_xs_regular"},function(e){return e.split(" ").slice(-2).map((function(e){return e.charAt(0).toUpperCase()})).join("")}(l)),!l&&!h&&n.createElement(o.In,{size:b,source:"basic_person",color:o.Jy.pink_03}),!!h&&n.createElement(o._V,{source:{uri:h},style:[i.image,{borderRadius:N}]}),w&&n.createElement(o._V,{source:{uri:y},style:[i.icon,A,{bottom:-1,right:-1}]}))},p=a(95412),d=a(93884),s=a(4107);const m=function(){var e=(0,d.A)({componentName:"Avatar",props:{size:{value:void 0,options:[24,32,40,56,72],type:s.B.Enum,description:"Size of the avatar."},rounded:{value:!1,type:s.B.Boolean,description:"If true, the avatar will have rounded corners."},showIconMomo:{value:!1,type:s.B.Boolean,description:'If true, display an icon representing "Momo".'},showIconSupport:{value:!1,type:s.B.Boolean,description:"If true, display a support icon for helpdesk representation."},iconSupport:{value:"",type:s.B.String,description:"Icon for support when showIconSupport is true."},name:{value:"",type:s.B.String,description:"Name associated with the avatar."},image:{value:"",type:s.B.String,description:"URL or local path of the image to be displayed as the avatar."}},scope:{Avatar:l},imports:{"@momo-kits/avatar":{named:["Avatar"]}}});return n.createElement(n.Fragment,null,n.createElement(p.A,{params:e}))}},95412:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(58168),r=a(74892),o=a(29813),i=a(91906),l=a(76482),p=a(5789),d=a(5641),s=a(10991),m=a(3533);const c=function(e){var t=e.params;return r.createElement(o.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),r.createElement(p.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(s.A,t.editorProps),r.createElement(p.A,t.errorProps),r.createElement(m.w,t.actions))}))}},71853:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=a(58168),r=a(98587),o=(a(74892),a(77264)),i=a(94653),l=["components"],p={id:"avatar",title:"Avatar"},d=void 0,s={unversionedId:"docs/components/avatar",id:"version-0.92.1/docs/components/avatar",title:"Avatar",description:"Playground",source:"@site/versioned_docs/version-0.92.1/docs/components/Avatar.mdx",sourceDirName:"docs/components",slug:"/docs/components/avatar",permalink:"/docs/docs/components/avatar",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.92.1/docs/components/Avatar.mdx",tags:[],version:"0.92.1",frontMatter:{id:"avatar",title:"Avatar"},sidebar:"version-0.92.1/docs",previous:{title:"AutoComplete",permalink:"/docs/docs/components/autocomplete"},next:{title:"Badge",permalink:"/docs/docs/components/badge"}},m={},c=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],g={toc:c},u="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,l);return(0,o.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(i.A,{mdxType:"Play"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"iconSupport")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"https://static.momocdn.net/app/img/kits/_indicator.png")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the icon for support. This is used in conjunction with ",(0,o.yg)("inlineCode",{parentName:"td"},"showIconSupport"),".If ",(0,o.yg)("inlineCode",{parentName:"td"},"showIconSupport")," is ",(0,o.yg)("inlineCode",{parentName:"td"},"true")," but no ",(0,o.yg)("inlineCode",{parentName:"td"},"iconSupport")," is provided, a default icon may be used.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"image")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. The URL or local path of the image to be displayed as the avatar.If not provided, a placeholder or default avatar may be displayed.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"name")),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. The name associated with the avatar. This could be the user\u2019s full name,first name, or a username, depending on the implementation.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"rounded")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"true")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.yg)("inlineCode",{parentName:"td"},"true"),", the avatar will have rounded corners, providing a circular appearance.Defaults to ",(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided, resulting in a square or rectangular avatar.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"showIconMomo")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.yg)("inlineCode",{parentName:"td"},"true"),', an icon representing "Momo" will be displayed.This is specific to the use-case where the application requires a Momo icon.Defaults to ',(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"showIconSupport")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,o.yg)("inlineCode",{parentName:"td"},"true"),", a support icon will be displayed, suggesting this avatar is for support or helpdesk representation.Defaults to ",(0,o.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"size")),(0,o.yg)("td",{parentName:"tr",align:null},"AvatarSize"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"32")),(0,o.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the size of the avatar from a set of predefined sizes.If not provided, the component may use a default size."))))))}y.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);