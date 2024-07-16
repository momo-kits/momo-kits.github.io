"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[67475],{31597:(e,n,o)=>{o.d(n,{$:()=>t});var a=o(74892),r={primary:"#2089dc",secondary:"#ca71eb",error:"#ff190c",warning:"#faad14"},t=function(e){var n=e.spacing,o=void 0===n?void 0:n;return a.createElement("div",{style:{display:"flex",gap:(null!=o?o:4)+"px",flexWrap:"wrap",fontSize:"smaller"}},Object.entries(r).map((function(e){var n=e[0],o=e[1];return a.createElement("div",{key:n,style:{textAlign:"center",fontSize:"small"}},a.createElement("div",{style:{background:o,width:"85px",height:"50px",display:"block",borderRadius:"6px",border:"1px solid #e2e2e2"}}),a.createElement("div",null,o),n)})))}},10910:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>x,frontMatter:()=>g,metadata:()=>u,toc:()=>y});var a=o(58168),r=o(98587),t=o(74892),s=o(77264),i=o(52999),c={primary:"#2089dc",secondary:"#ca71eb",background:"#ffffff",white:"#ffffff",black:"#242424",grey0:"#393e42",grey1:"#43484d",grey2:"#5e6977",grey3:"#86939e",grey4:"#bdc6cf",grey5:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#52c41a",error:"#ff190c",warning:"#faad14",disabled:"hsl(208, 8%, 90%)"},l=function(e){var n=e.colors,o=void 0===n?void 0:n;return t.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontSize:"smaller"}},Object.entries(null!=o?o:c).map((function(e){var n=e[0],o=e[1];return t.createElement("div",{key:n,style:{textAlign:"center",fontSize:"small"}},t.createElement("div",{style:{background:o,width:"85px",height:"50px",display:"block",borderRadius:"6px",border:"1px solid #e2e2e2"}}),t.createElement("div",null,o),n)})))},d=o(31597),p=["components"],g={id:"theme",title:"Theme",hide_table_of_contents:!0},m=void 0,u={unversionedId:"theme",id:"theme",title:"Theme",description:"This code snippet showcases a theme for a mobile application. The theme includes color palettes, spacing options, and font choices. It offers various predefined color schemes for different UI elements, such as primary, secondary, background, text, border, and more. The theme's core components are configured, and it even supports dark mode.",source:"@site/docs/theme.mdx",sourceDirName:".",slug:"/theme",permalink:"/docs/next/theme",draft:!1,editUrl:"https://github.com/docs/theme.mdx",tags:[],version:"current",frontMatter:{id:"theme",title:"Theme",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/next/migration"},next:{title:"Navigation",permalink:"/docs/next/navigation"}},f={},y=[{value:"System Colors",id:"system-colors",level:4},{value:"Spacing",id:"spacing",level:3},{value:"Spacing.XXS",id:"spacingxxs",level:5},{value:"Spacing.XS",id:"spacingxs",level:5},{value:"Spacing.S",id:"spacings",level:5},{value:"Spacing.M",id:"spacingm",level:5},{value:"Spacing.L",id:"spacingl",level:5},{value:"Spacing.XL",id:"spacingxl",level:5}],h={toc:y},b="wrapper";function x(e){var n=e.components,o=(0,r.A)(e,p);return(0,s.yg)(b,(0,a.A)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This code snippet showcases a theme for a mobile application. The theme includes color palettes, spacing options, and font choices. It offers various predefined color schemes for different UI elements, such as primary, secondary, background, text, border, and more. The theme's core components are configured, and it even supports dark mode."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-tsx"},"const defaultTheme: Theme = {\n  dark: false,\n  colors: {\n    primary: Colors.pink_03,\n    secondary: Colors.pink_07,\n    background: {\n      default: '#f2f2f6',\n      surface: Colors.black_01,\n      tonal: Colors.pink_09,\n      pressed: '#dfdfe6',\n      selected: Colors.pink_10,\n      disable: '#ebebf2',\n    },\n    text: {\n      default: Colors.black_17,\n      secondary: Colors.black_15,\n      hint: Colors.black_12,\n      disable: Colors.black_08,\n    },\n    border: {\n      default: Colors.black_04,\n      disable: Colors.black_02,\n    },\n    success: {\n      primary: Colors.green_03,\n      secondary: Colors.green_07,\n      container: Colors.green_08,\n    },\n    warning: {\n      primary: Colors.orange_03,\n      secondary: Colors.orange_07,\n      container: Colors.orange_08,\n    },\n    error: {\n      primary: Colors.red_03,\n      secondary: Colors.red_07,\n      container: Colors.red_08,\n    },\n    highlight: {\n      primary: Colors.mint_03,\n      secondary: Colors.mint_07,\n      container: Colors.mint_08,\n    },\n    interactive: {\n      primary: Colors.blue_03,\n      secondary: Colors.blue_07,\n      container: Colors.blue_08,\n    },\n  },\n  font: 'SFProText',\n  assets: {\n    headerBackground:\n      'https://static.momocdn.net/app/img/app/img/header-background.png',\n  },\n};\n\nconst App = (props: any) => {\n    const {theme} = useContext(ApplicationContext)\n    const textColor = theme.colors.text.default\n    const backgroundColor = theme.colors.background.default\n\n  return (\n    <NavigationContainer\n      localization={language}\n      theme={defaultTheme} //Add theme\n      screen={Main}\n      trackingInfo={{\n        feature_code: props.code,\n        app_id: props.appId,\n        build_number: props.buildNumber,\n      }}\n      maxApi={MaxApi}\n    />\n  );\n};\n\n")),(0,s.yg)("h4",{id:"system-colors"},"System Colors"),(0,s.yg)(l,{colors:i.Jy,mdxType:"Palette"}),(0,s.yg)("h3",{id:"spacing"},"Spacing"),(0,s.yg)("h5",{id:"spacingxxs"},"Spacing.XXS"),(0,s.yg)(d.$,{spacing:i.Kz.XXS,mdxType:"Space"}),(0,s.yg)("h5",{id:"spacingxs"},"Spacing.XS"),(0,s.yg)(d.$,{spacing:i.Kz.XS,mdxType:"Space"}),(0,s.yg)("h5",{id:"spacings"},"Spacing.S"),(0,s.yg)(d.$,{spacing:i.Kz.S,mdxType:"Space"}),(0,s.yg)("h5",{id:"spacingm"},"Spacing.M"),(0,s.yg)(d.$,{spacing:i.Kz.M,mdxType:"Space"}),(0,s.yg)("h5",{id:"spacingl"},"Spacing.L"),(0,s.yg)(d.$,{spacing:i.Kz.L,mdxType:"Space"}),(0,s.yg)("h5",{id:"spacingxl"},"Spacing.XL"),(0,s.yg)(d.$,{spacing:i.Kz.XL,mdxType:"Space"}))}x.isMDXComponent=!0}}]);