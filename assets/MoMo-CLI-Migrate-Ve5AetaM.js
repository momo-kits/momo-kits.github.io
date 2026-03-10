import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Dw915X55.js";import"./index-BlikL4tB.js";import{M as i}from"./DocsRenderer-CFRXHY34-CodupoKR.js";import"./index-CPl6p-nG.js";import"./preview-Cw8gKeMe.js";import"./iframe-BP18qD3Z.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function r(s){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Migration/Migrate Mini App 5.0"}),`
`,n.jsx(e.h1,{id:"migrate-mini-app-50",children:"Migrate Mini App 5.0"}),`
`,n.jsx(e.p,{children:"This guide provides a step-by-step example of how to migrate your MiniApp React Native project to the new architecture running on the MoMo Platform using MoMo-CLI."}),`
`,n.jsx(e.h2,{id:"-prerequisites",children:"✅ Prerequisites"}),`
`,n.jsx(e.p,{children:"Before starting, ensure you have the following installed on your local machine:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Node.js"}),": v20.19.0",`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["⚠️ ",n.jsx(e.strong,{children:"Strict Requirement:"})," You must use exactly Node.js version 20 (other versions are not supported)."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Yarn"})," or ",n.jsx(e.strong,{children:"npm"})," (for managing packages)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"A custom version of npm"})," (if required by your team)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"@momo-platform/momo-migration"})," A CLI Tool to migration mini app from 4.2 to 5.0"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"@momo-platform/momo-cli"})," A CLI Tool to start, build mini app 5.0"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-install-cli-tools",children:"🛠 Install cli tools"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Open your terminal and run the following command:"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["💡 ",n.jsx(e.strong,{children:"Note:"}),n.jsx(e.br,{}),`
`,"If you are using ",n.jsx(e.strong,{children:"momo-cli version 0.0.18 or higher"}),", when running on ",n.jsx(e.strong,{children:"Bridge Mode 2"}),", the console logs (",n.jsx(e.code,{children:"console.log"}),", ",n.jsx(e.code,{children:"console.info"}),", etc.) will automatically appear in your Mini App project terminal during debugging."]}),`
`,n.jsxs(e.p,{children:["Additionally, you can run the command ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"yarn doctor"})})," to analyze all installed packages and their sizes.",n.jsx(e.br,{}),`
`,"This helps you identify which dependencies or source files are taking up the most space — allowing you to optimize your Mini App for better performance."]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["💡 ",n.jsx(e.strong,{children:"Before proceeding"}),", ensure your global ",n.jsx(e.code,{children:".npmrc"})," file is correctly configured with the following content."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If the file doesn’t exist, create it:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["On macOS/Linux: ",n.jsx(e.code,{children:"~/.npmrc"})]}),`
`,n.jsxs(e.li,{children:["On Windows: ",n.jsx(e.code,{children:"%USERPROFILE%\\.npmrc"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`Then, copy and paste the content below into the file: if you want to retrieve the content of npmrc.
Please contact `,n.jsx(e.a,{href:"mailto:le.nguyen4@mservice.com.vn",children:"le.nguyen4@mservice.com.vn"})," or ",n.jsx(e.a,{href:"vinh.le2@mservice.com.vn",children:"vinh.le2@mservice.com.vn"})," or ",n.jsx(e.a,{href:"trinh.ho2@mservice.com.vn",children:"trinh.ho2@mservice.com.vn"})]}),`
`,n.jsx(e.li,{children:"Due to security concerns, I cannot share it on this document page."}),`
`]}),`
`]}),`
`,n.jsx(e.h1,{id:""}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn global add @momo-platform/momo-migration@latest @momo-platform/momo-cli@latest
`})}),`
`,n.jsx(e.h4,{id:"or",children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm add -g @momo-platform/momo-migration@latest @momo-platform/momo-cli@latest
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Verify installation:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`which momo-migration
`})}),`
`,n.jsx(e.h1,{id:"-1"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`which momo-cli
`})}),`
`,n.jsx(e.p,{children:"If the CLI is installed correctly, a file path will be printed."}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-migration-command",children:"🔄 Migration Command"}),`
`,n.jsx(e.p,{children:"To initiate the migration process, run the following command in your mini app project directory:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-migration
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If all required files are found and valid, you will see:",`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`Migrate Done. Please run yarn to install all package.
After that please type `,n.jsx(e.code,{children:"yarn install"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-start-with-momo-cli",children:"🚀 Start With MoMo-CLI"}),`
`,n.jsxs(e.p,{children:[`Download the debugging tool for the mini app. Please get the latest build of the v50/master branch.
`,n.jsx(e.a,{href:"https://store.momoapp.vn/?s=v50%2Fmaster",rel:"nofollow",children:"Link download engine"})]}),`
`,n.jsx(e.p,{children:"To start your project, use:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli start [--host <host>] [--port <port_number>] [--mode <mode>]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Examples:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli start --host=0.0.0.0 --port=8181 --mode=1
momo-cli start --port=8181 --mode=2
`})}),`
`,n.jsx(e.h3,{id:"options",children:"Options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--host"}),": (Optional) Default is ",n.jsx(e.code,{children:"localhost"}),".",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tip:"})," Use ",n.jsx(e.code,{children:"--host 0.0.0.0"})," to allow the server to be accessible from all IP addresses (localhost, LAN, etc). You do not need to specify your machine's exact IP address."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--port"}),": (Require) Default is ",n.jsx(e.code,{children:"8181"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--mode"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"1"}),": shared"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"2"}),": standalone (Metro)"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-build-command-momo-cli",children:"🏗 Build Command (MoMo-CLI)"}),`
`,n.jsx(e.p,{children:"Bundle your React Native project for a specific platform and mode:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli build --platform <android|ios> --mode <1|2> [--entry <entry-file>]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Options:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--platform"}),": Target platform (",n.jsx(e.code,{children:"android"})," or ",n.jsx(e.code,{children:"ios"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--mode"}),": Build mode (",n.jsx(e.code,{children:"1"})," for shared, ",n.jsx(e.code,{children:"2"})," for standalone)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--entry"}),": Entry file path (default: ",n.jsx(e.code,{children:"index.js"}),")"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Examples:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli build --platform ios --mode 1
momo-cli build --platform android --mode 1
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-experimental-configuration",children:"⚙️ [Experimental Configuration]"}),`
`,n.jsx(e.h2,{id:"-widget-chunking-support---chunk-split-rule",children:"🧩 Widget Chunking Support - Chunk-Split Rule"}),`
`,n.jsx(e.p,{children:"To ensure that the module is split into its own chunk and loaded asynchronously:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"NOTE"}),":",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`Chunk must not import any where exclude in import('./src/widgets/index') else => It not split into a chunk
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Enable chunk support: In ",n.jsx(e.code,{children:"app.json"}),", add:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"chunk": true
`})}),`
`,n.jsx(e.p,{children:"Widget Code Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const WidgetMain = React.lazy(() => import('./src/widgets/index'));

export const MiniApp = props => {
  useEffect(() => () => alert('Unmount'), []);
  return <App {...props} />;
};

export const Widget = props => (
  <React.Suspense
    fallback={
      <View style={{width: 300, height: 300, backgroundColor: 'red'}} />
    }>
    <WidgetMain {...props} />
  </React.Suspense>
);

MaxApi.registerApp(AppJson, () => MiniApp);
MaxApi.registerWidget('Widget', () => Widget);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example exposes config:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"exposes": [
    {
      "id": "vn$momo$demo:index",
      "name": "index",
      "assets": {
        "js": {
          "sync": [
            "vendors-node_modules_react_jsx-runtime_js-node_modules_swc_helpers_cjs__interop_require_wildc-73e3d3.chunk.bundle",
            "vendors-node_modules_momo-platform_utils_index_js-node_modules_swc_helpers_cjs__object_withou-c2bd39.chunk.bundle",
            "__federation_expose_index.chunk.bundle"
          ],
          "async": [
            "src_widgets_index_js.chunk.bundle"
          ]
        },
        "css": {
          "sync": [],
          "async": []
        }
      },
      "path": "./index"
    }
  ]
`})}),`
`,n.jsx(e.h2,{id:"-worklets---runonbackgroundasync",children:"🧩 Worklets - runOnBackgroundAsync"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const heavySumWorklet = MaxApi.worklet.runOnBackgroundAsync(
  'high',
  (numbers: number[]) => {
    'worklet';
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
);

const numbers = Array.from({length: 100000}, () =>
  Math.floor(Math.random() * 1000),
);
heavySumWorklet(numbers).then(result => {
  console.log('Total sum computed on background thread:', result);
});
`})}),`
`,n.jsx(e.h2,{id:"error-handling--troubleshooting",children:"Error Handling & Troubleshooting"}),`
`,n.jsx(e.h3,{id:"-common-errors",children:"🐞 Common Errors"}),`
`,n.jsxs(e.h4,{id:"️-1-missing-appjson",children:["⚠️ 1. Missing ",n.jsx(e.code,{children:"app.json"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error Message:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`*********** Missing app.json ***********
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description:"})," File not found in the project directory."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Resolution:"})," Ensure ",n.jsx(e.code,{children:"app.json"})," exists in the specified path and try again."]}),`
`]}),`
`,n.jsx(e.h4,{id:"-2-babel-syntax-error-typescript-interface-in-js-file",children:"🚫 2. Babel Syntax Error: TypeScript interface in JS file"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Error Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`✖ [03:07:34.698Z][LoggerPlugin] Failed to build bundle due to errors
✖ [03:07:34.698Z][LoggerPlugin] Error in "./node_modules/@officialaccount/components/components/BadgeTage.js":
  × Module build failed:
  ├─▶   ×
  │     │   × Expression expected
  │     │     ╭─[/Users/trinhhcse/momo/v50/mini-app-1/node_modules/@officialaccount/components/components/BadgeTage.js:46:1]
  │     │  43 │   },
  │     │  44 │ ];
  │     │  45 │
  │     │  46 │ interface GetBadgeInfoRes {
  │     │     · ─────────
  │     │  47 │   icon: string;
  │     │  48 │   text: string;
  │     │  49 │   textColor: string;
  │     │     ╰────
  │     │
  │
  ╰─▶ Syntax Error

✖ [03:07:34.739Z][LoggerPlugin] Failed to build bundle due to errors
✖ [03:07:34.739Z][LoggerPlugin] Error in "./node_modules/@officialaccount/components/components/BadgeTage.js":
  × Module build failed:
  ├─▶   ×
  │     │   × Expression expected
  │     │     ╭─[/Users/trinhhcse/momo/v50/mini-app-1/node_modules/@officialaccount/components/components/BadgeTage.js:46:1]
  │     │  43 │   },
  │     │  44 │ ];
  │     │  45 │
  │     │  46 │ interface GetBadgeInfoRes {
  │     │     · ─────────
  │     │  47 │   icon: string;
  │     │  48 │   text: string;
  │     │  49 │   textColor: string;
  │     │     ╰────
  │     │
  │
  ╰─▶ Syntax Error
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Cause:"})," TypeScript interface is used in a JavaScript file, which is not supported."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Solution:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Move the interface to a ",n.jsx(e.code,{children:".ts"})," file or remove it from JS files."]}),`
`,n.jsxs(e.li,{children:["If you use ",n.jsx(e.code,{children:"package.jsson"})," (JavaScript):",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  "excludes": [
    "@officialaccount"
  ]
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Note:"})," The ",n.jsx(e.code,{children:"excludes"})," field helps to exclude problematic packages (like ",n.jsx(e.code,{children:"@officialaccount"}),") from Babel processing if needed."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"-3-babel-configuration-issue",children:"📝 3. Babel Configuration Issue"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Problem:"})," Using ",n.jsx(e.code,{children:"module.exports = function (api) { if (api.env('production')) { ... } }"})," in ",n.jsx(e.code,{children:"babel.config.js"})," causes build errors."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example of problematic JS config:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const alias = {
  '@assets': './src/assets',
  '@components': './src/components',
  '@screens': './src/screens',
  '@utils': './src/utils',
  '@i18n': './src/i18n',
  '@core': './src/core',
  '@widgets': './src/widgets',
};

module.exports = function (api) {
  if (api.env('production')) {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: ['.ts', '.tsx', '.js', '.json'],
            alias,
          },
        ],
        ['transform-remove-console'],
      ],
    };
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias,
        },
      ],
    ],
  };
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Solution:"})," Move your configuration to ",n.jsx(e.code,{children:"babel.config.json"})," and use the following format:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "env": {
    "production": {
      "presets": ["module:@react-native/babel-preset"],
      "plugins": [
        "react-native-worklets/plugin",
        [
          "module-resolver",
          {
            "root": ["./src"],
            "extensions": [".ts", ".tsx", ".js", ".json"],
            "alias": {
              "@assets": "./src/assets",
              "@components": "./src/components",
              "@screens": "./src/screens",
              "@utils": "./src/utils",
              "@i18n": "./src/i18n",
              "@core": "./src/core",
              "@widgets": "./src/widgets"
            }
          }
        ],
        ["transform-remove-console"]
      ]
    }
  },
  "presets": ["module:@react-native/babel-preset"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [".ts", ".tsx", ".js", ".json"],
        "alias": {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@i18n": "./src/i18n",
          "@core": "./src/core",
          "@widgets": "./src/widgets"
        }
      }
    ]
  ]
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," The JSON format is more compatible with the CLI and avoids build errors related to environment-based JS config."]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"-useful-links",children:"🔗 Useful Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://momo-kits.github.io/?path=/docs/migration-readme--docs",rel:"nofollow",children:"Document: Migrate kits/core to foundation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://store.momoapp.vn/ei4bj4Ml4CYOtS2TzcUK",rel:"nofollow",children:"Download App Platform Android UAT"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://store.momoapp.vn/?s=v50%2Fmaster",rel:"nofollow",children:"Build Engine"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.google.com/spreadsheets/d/16GuFrY_vTABA0qUKUrj2aXPHVTf1xcEfcGyy25Kkx_w/edit?gid=1362542876#gid=1362542876",rel:"nofollow",children:"Mini App Migration Status (Google Sheet, Tab 2)"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Next Step:"})," Follow the ",n.jsx(e.a,{href:"/docs/migration-migration-guide--docs",children:"Migration Guide"})," to get started."]}),`
`,n.jsxs(e.p,{children:["If you have any questions or encounter any issues, please contact: ",n.jsx(e.a,{href:"mailto:le.nguyen4@mservice.com.vn",children:"le.nguyen4@mservice.com.vn"})]})]})}function j(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
