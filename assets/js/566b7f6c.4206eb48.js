(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[98124],{34515:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(74892),o=n(77672),r=n(53053),i=n(33504),l=n(20177);const s=i.A.create({container:{borderRadius:l.TI.S,borderWidth:.5,padding:l.Kz.M,width:"100%"},image:{width:40,height:40,borderRadius:l.TI.XS,marginRight:l.Kz.S},icon:{marginRight:l.Kz.S},row:{flexDirection:"row"},cta:{width:"100%",alignItems:"flex-end"},flex:{flex:1}});var d=function(e){var t=e.title,n=e.description,i=void 0===n?"Description":n,d=e.state,p=void 0===d?"default":d,m=e.image,g=e.onPressCTA,c=e.showIcon,y=void 0===c||c,u=e.CTA,f=e.style,h=e.showIconClose,N=void 0===h||h,b=e.onPressClose,v=((0,a.useContext)(l.gD).theme,function(){var e=l.Jy.blue_07,t=l.Jy.blue_10,n=l.Jy.blue_03,a="notifications_info";return"warning"===p&&(e=l.Jy.yellow_06,t=l.Jy.yellow_09,n=l.Jy.orange_03,a="24_notifications_alert_triangle"),"error"===p&&(e=l.Jy.red_07,t=l.Jy.red_10,n=l.Jy.red_03,a="24_notifications_alert_octagon"),{borderColor:e,backgroundColor:t,color:n,iconSource:a}}()),C=v.backgroundColor,w=v.borderColor,A=v.color,T=v.iconSource;return a.createElement(o.A,{style:[f,{backgroundColor:C,borderColor:w},s.container]},a.createElement(o.A,{style:s.row},!!m&&a.createElement(l._V,{source:{uri:m},style:s.image}),!m&&y&&a.createElement(l.In,{color:A,style:s.icon,size:16,source:T}),a.createElement(o.A,{style:s.flex},!!t&&a.createElement(l.EY,{typography:"label_default_medium"},t),a.createElement(l.EY,{typography:"description_default_regular"},i)),N&&a.createElement(r.A,{onPress:b},a.createElement(l.In,{size:16,source:"navigation_close"}))),!!u&&a.createElement(r.A,{style:s.cta,onPress:g},a.createElement(l.EY,{color:A,typography:"action_xs_bold"},u)))},p=n(95412),m=n(93884),g=n(4107);const c=function(){var e=(0,m.A)({componentName:"Information",props:{title:{value:"",type:g.B.String,description:"Title for the information block."},description:{value:"This is an important message.",type:g.B.String,description:"Main content text of the information block."},CTA:{value:"",type:g.B.String,description:"Text for the CTA button."},onPressCTA:{value:"() => console.log('CTA Pressed')",type:g.B.Function,description:"Callback for when the CTA button is pressed."},image:{value:"",type:g.B.String,description:"URL or path of an image to display."},state:{value:"default",options:{default:"default",warning:"warning",error:"error"},type:g.B.Enum,description:"State of the information block."},showIcon:{value:!1,type:g.B.Boolean,description:"If true, displays an icon within the block."},showIconClose:{value:!1,type:g.B.Boolean,description:"If true, displays a close icon."},onPressClose:{value:"() => console.log('Close Pressed')",type:g.B.Function,description:"Callback for when the close icon is pressed."},style:{value:"{}",type:g.B.Object,description:"Custom styles for the component."}},scope:{Information:d},imports:{"@momo-kits/information":{named:["Information"]}}});return a.createElement(a.Fragment,null,a.createElement(p.A,{params:e}))}},95412:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var a=n(58168),o=n(74892),r=n(29813),i=n(91906),l=n(76482),s=n(5789),d=n(5641),p=n(10991),m=n(3533);const g=function(e){var t=e.params;return o.createElement(r.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement("div",null,o.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},o.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:l.A}))),o.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(d.A,t.knobProps),o.createElement(p.A,t.editorProps),o.createElement(s.A,t.errorProps),o.createElement(m.w,t.actions))}))}},42998:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var a=n(58168),o=n(98587),r=(n(74892),n(77264)),i=n(34515),l=["components"],s={id:"information",title:"Information"},d=void 0,p={unversionedId:"docs/components/information",id:"version-0.89.1/docs/components/information",title:"Information",description:"Playground",source:"@site/versioned_docs/version-0.89.1/docs/components/Information.mdx",sourceDirName:"docs/components",slug:"/docs/components/information",permalink:"/docs/0.89.1/docs/components/information",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1/docs/components/Information.mdx",tags:[],version:"0.89.1",frontMatter:{id:"information",title:"Information"},sidebar:"version-0.89.1/docs",previous:{title:"Carousel",permalink:"/docs/0.89.1/docs/components/carousel"},next:{title:"Slider",permalink:"/docs/0.89.1/docs/components/slider"}},m={},g=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:g},y="wrapper";function u(e){var t=e.components,n=(0,o.A)(e,l);return(0,r.yg)(y,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(i.A,{mdxType:"Play"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CTA")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},'Optional. The text for the Call To Action (CTA) button. This is intended to prompt the userto take some specified action like "Retry", "Learn More", or "Dismiss".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"description")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Description")),(0,r.yg)("td",{parentName:"tr",align:null},"The main content text of the information block. This text provides the necessary detailsand is essential for understanding the context of the message.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"image")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. The URL or local file path of an image to be displayed. This is typically usedto provide visual context or support to the information being presented.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressCTA")),(0,r.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the CTA button is pressed. This isused to handle the user's response to the proposed call to action.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressClose")),(0,r.yg)("td",{parentName:"tr",align:null},"(() => void)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the close icon is pressed. This isused to handle the dismissal of the information block, often removing it from display.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showIcon")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", an icon is displayed within the information block, often used tovisually reinforce the state or content of the block. The type of icon is typicallyinfluenced by the ",(0,r.yg)("inlineCode",{parentName:"td"},"state")," prop.Defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showIconClose")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", a close icon is displayed, usually in the upper corner of the informationblock, indicating that the user can dismiss or remove the block from view.Defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"default")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"warning")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"default")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. Specifies the state of the information block, which may influence the block'sstyling, such as color coding. The 'default' state is neutral, while 'warning' and 'error'represent increasing levels of urgency or attention.Defaults to 'default' if not provided.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"style")),(0,r.yg)("td",{parentName:"tr",align:null},"ViewStyle"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the Information component. Can be used to adjustthe visual presentation or layout beyond the default and state-based styling.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"title")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. The title for the information block, often used to emphasize the main theme orto indicate the reason for the message. If not provided, only the description will be shown."))))))}u.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);