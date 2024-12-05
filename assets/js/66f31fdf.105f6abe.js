"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[90025],{65507:(e,n,r)=>{r.d(n,{$:()=>s});var o=r(49397),a={primary:"#2089dc",secondary:"#ca71eb",error:"#ff190c",warning:"#faad14"},s=function(e){var n=e.spacing,r=void 0===n?void 0:n;return o.createElement("div",{style:{display:"flex",gap:(null!=r?r:4)+"px",flexWrap:"wrap",fontSize:"smaller"}},Object.entries(a).map((function(e){var n=e[0],r=e[1];return o.createElement("div",{key:n,style:{textAlign:"center",fontSize:"small"}},o.createElement("div",{style:{background:r,width:"85px",height:"50px",display:"block",borderRadius:"6px",border:"1px solid #e2e2e2"}}),o.createElement("div",null,r),n)})))}},98685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>g,metadata:()=>u,toc:()=>y});var o=r(58168),a=r(98587),s=r(49397),i=r(77611),t=r(83640),c={primary:"#2089dc",secondary:"#ca71eb",background:"#ffffff",white:"#ffffff",black:"#242424",grey0:"#393e42",grey1:"#43484d",grey2:"#5e6977",grey3:"#86939e",grey4:"#bdc6cf",grey5:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#52c41a",error:"#ff190c",warning:"#faad14",disabled:"hsl(208, 8%, 90%)"},l=function(e){var n=e.colors,r=void 0===n?void 0:n;return s.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontSize:"smaller"}},Object.entries(null!=r?r:c).map((function(e){var n=e[0],r=e[1];return s.createElement("div",{key:n,style:{textAlign:"center",fontSize:"small"}},s.createElement("div",{style:{background:r,width:"85px",height:"50px",display:"block",borderRadius:"6px",border:"1px solid #e2e2e2"}}),s.createElement("div",null,r),n)})))},d=r(65507),p=["components"],g={id:"theme",title:"Theme",hide_table_of_contents:!0},m=void 0,u={unversionedId:"theme",id:"version-0.89.1-rc.5/theme",title:"Theme",description:"This code snippet showcases a theme for a mobile application. The theme includes color palettes, spacing options, and font choices. It offers various predefined color schemes for different UI elements, such as primary, secondary, background, text, border, and more. The theme's core components are configured, and it even supports dark mode.",source:"@site/versioned_docs/version-0.89.1-rc.5/theme.mdx",sourceDirName:".",slug:"/theme",permalink:"/docs/0.89.1-rc.5/theme",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.89.1-rc.5/theme.mdx",tags:[],version:"0.89.1-rc.5",frontMatter:{id:"theme",title:"Theme",hide_table_of_contents:!0},sidebar:"version-0.89.1-rc.5",previous:{title:"Migration Guide",permalink:"/docs/0.89.1-rc.5/migration"},next:{title:"Navigation",permalink:"/docs/0.89.1-rc.5/navigation"}},f={},y=[{value:"System Colors",id:"system-colors",level:4},{value:"Spacing",id:"spacing",level:3},{value:"Spacing.XXS",id:"spacingxxs",level:5},{value:"Spacing.XS",id:"spacingxs",level:5},{value:"Spacing.S",id:"spacings",level:5},{value:"Spacing.M",id:"spacingm",level:5},{value:"Spacing.L",id:"spacingl",level:5},{value:"Spacing.XL",id:"spacingxl",level:5}],h={toc:y},b="wrapper";function v(e){var n=e.components,r=(0,a.A)(e,p);return(0,i.yg)(b,(0,o.A)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This code snippet showcases a theme for a mobile application. The theme includes color palettes, spacing options, and font choices. It offers various predefined color schemes for different UI elements, such as primary, secondary, background, text, border, and more. The theme's core components are configured, and it even supports dark mode."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"const defaultTheme: Theme = {\n  dark: false,\n  colors: {\n    primary: Colors.pink_03,\n    secondary: Colors.pink_07,\n    background: {\n      default: '#f2f2f6',\n      surface: Colors.black_01,\n      tonal: Colors.pink_09,\n      pressed: '#dfdfe6',\n      selected: Colors.pink_10,\n      disable: '#ebebf2',\n    },\n    text: {\n      default: Colors.black_17,\n      secondary: Colors.black_15,\n      hint: Colors.black_12,\n      disable: Colors.black_08,\n    },\n    border: {\n      default: Colors.black_04,\n      disable: Colors.black_02,\n    },\n    success: {\n      primary: Colors.green_03,\n      secondary: Colors.green_07,\n      container: Colors.green_08,\n    },\n    warning: {\n      primary: Colors.orange_03,\n      secondary: Colors.orange_07,\n      container: Colors.orange_08,\n    },\n    error: {\n      primary: Colors.red_03,\n      secondary: Colors.red_07,\n      container: Colors.red_08,\n    },\n    highlight: {\n      primary: Colors.mint_03,\n      secondary: Colors.mint_07,\n      container: Colors.mint_08,\n    },\n    interactive: {\n      primary: Colors.blue_03,\n      secondary: Colors.blue_07,\n      container: Colors.blue_08,\n    },\n  },\n  font: 'SFProText',\n  assets: {\n    headerBackground:\n      'https://static.momocdn.net/app/img/app/img/header-background.png',\n  },\n};\n\nconst App = (props: any) => {\n    const {theme} = useContext(ApplicationContext)\n    const textColor = theme.colors.text.default\n    const backgroundColor = theme.colors.background.default\n\n  return (\n    <NavigationContainer\n      localization={language}\n      theme={defaultTheme} //Add theme\n      screen={Main}\n      trackingInfo={{\n        feature_code: props.code,\n        app_id: props.appId,\n        build_number: props.buildNumber,\n      }}\n      maxApi={MaxApi}\n    />\n  );\n};\n\n")),(0,i.yg)("h4",{id:"system-colors"},"System Colors"),(0,i.yg)(l,{colors:t.Jy,mdxType:"Palette"}),(0,i.yg)("h3",{id:"spacing"},"Spacing"),(0,i.yg)("h5",{id:"spacingxxs"},"Spacing.XXS"),(0,i.yg)(d.$,{spacing:t.Kz.XXS,mdxType:"Space"}),(0,i.yg)("h5",{id:"spacingxs"},"Spacing.XS"),(0,i.yg)(d.$,{spacing:t.Kz.XS,mdxType:"Space"}),(0,i.yg)("h5",{id:"spacings"},"Spacing.S"),(0,i.yg)(d.$,{spacing:t.Kz.S,mdxType:"Space"}),(0,i.yg)("h5",{id:"spacingm"},"Spacing.M"),(0,i.yg)(d.$,{spacing:t.Kz.M,mdxType:"Space"}),(0,i.yg)("h5",{id:"spacingl"},"Spacing.L"),(0,i.yg)(d.$,{spacing:t.Kz.L,mdxType:"Space"}),(0,i.yg)("h5",{id:"spacingxl"},"Spacing.XL"),(0,i.yg)(d.$,{spacing:t.Kz.XL,mdxType:"Space"}))}v.isMDXComponent=!0}}]);