"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[38216],{53485:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>g,toc:()=>p});var n=t(58168),o=t(98587),i=(t(74892),t(77264)),r=(t(32264),["components"]),s={id:"migration",title:"Migration Guide"},l="Migration Guide:",g={unversionedId:"migration",id:"version-0.102.4/migration",title:"Migration Guide",description:"Table of Contents",source:"@site/versioned_docs/version-0.102.4/migration_guide.mdx",sourceDirName:".",slug:"/migration",permalink:"/docs/0.102.4/migration",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.102.4/migration_guide.mdx",tags:[],version:"0.102.4",frontMatter:{id:"migration",title:"Migration Guide"},sidebar:"version-0.102.4",previous:{title:"Common Issues",permalink:"/docs/0.102.4/troubleshooting"},next:{title:"Theme",permalink:"/docs/0.102.4/theme"}},d={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Code Changes",id:"code-changes",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Text",id:"text",level:3},{value:"Shadow",id:"shadow",level:3},{value:"Assets",id:"assets",level:3}],u={toc:p},m="wrapper";function y(e){var a=e.components,t=(0,o.A)(e,r);return(0,i.yg)(m,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"migration-guide"},"Migration Guide:"),(0,i.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#code-changes"},"Code Changes"))),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In this guide, we'll walk you through the necessary changes to migrate from ",(0,i.yg)("strong",{parentName:"p"},"@momo-kits/core")," to ",(0,i.yg)("strong",{parentName:"p"},"@momo-kits/foundation"),"."),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("p",null,"First, install the ",(0,i.yg)("strong",{parentName:"p"},"@momo-kits/foundation")," by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @momo-kits/foundation\n")),(0,i.yg)("h2",{id:"code-changes"},"Code Changes"),(0,i.yg)("h3",{id:"navigation"},"Navigation"),(0,i.yg)("p",null,"See how to use new ",(0,i.yg)("a",{parentName:"p",href:"../navigation"},"Navigation")),(0,i.yg)("h3",{id:"text"},"Text"),(0,i.yg)("p",null,"Instead of using name alias, we use prop ",(0,i.yg)("strong",{parentName:"p"},"typography")," to choose typography style for ",(0,i.yg)("a",{parentName:"p",href:"../components/text"},"Text")," component."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'//Old Typography usage\n<Text.Paragraph>Old typography</Text.Paragraph>\n\n//New Typography usage\n<Text typography="body_default_regular">New Typography usage</Text>\n')),(0,i.yg)("h3",{id:"shadow"},"Shadow"),(0,i.yg)("p",null,"In new design system, we have already defined ",(0,i.yg)("a",{parentName:"p",href:"../shadow"},"Shadow")," style, you do not need to styling."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"<View style={[Shadow.Light]}/>\n")),(0,i.yg)("h3",{id:"assets"},"Assets"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"../theme"},"Theme"),", ",(0,i.yg)("a",{parentName:"p",href:"../iconSource"},"Icon")," and ",(0,i.yg)("a",{parentName:"p",href:"../iconBankSource"},"IconBank")," sources are listed here."))}y.isMDXComponent=!0}}]);