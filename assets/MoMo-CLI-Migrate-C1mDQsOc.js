import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-gG8jtkCA.js";import"./index-Czlgpq96.js";import{M as o}from"./DocsRenderer-CFRXHY34-B9lqNX1s.js";import"./index-DI7CEG0L.js";import"./preview-D8XB7Mlg.js";import"./iframe-LXfXa6WE.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Migration/MoMo-CLI Migrate Mini App 5.0"}),`
`,n.jsx(e.h1,{id:"migrate-mini-app-50-with-momo-cli",children:"Migrate Mini App 5.0 with MoMo-CLI"}),`
`,n.jsx(e.p,{children:"This guide provides a step-by-step example of how to migrate your MiniApp React Native project to the new architecture running on the MoMo Platform using MoMo-CLI."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-table-of-contents",children:"📌 Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#prerequisites",children:"Prerequisites"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#install-momo-cli",children:"Install MoMo-CLI"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#migration-command",children:"Migration Command"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#start-with-momo-cli",children:"Start With MoMo-CLI"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#build-command",children:"Build Command"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#widget-chunking-support",children:"Widget Chunking Support"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#expose-configuration",children:"Expose Configuration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#error-handling",children:"Error Handling"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#common-errors",children:"Common Errors"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#useful-links",children:"Useful Links"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
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
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"MoMo-CLI"})}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["💡 ",n.jsx(e.strong,{children:"Note:"})," Make sure the versions in your mini app's ",n.jsx(e.code,{children:"package.json"})," and the platform version are the same to avoid unnecessary errors."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-install-momo-cli",children:"🛠 Install MoMo-CLI"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Open your terminal and run:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn global add @momo-platform/momo-cli@0.0.1-rc.1
# or
npm add -g @momo-platform/momo-cli@0.0.1-rc.1
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Verify installation:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`which momo-cli
# or
momo-cli
`})}),`
`,n.jsx(e.p,{children:"If the CLI is installed correctly, a file path will be printed."}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-migration-command-momo-cli",children:"🔄 Migration Command (MoMo-CLI)"}),`
`,n.jsx(e.p,{children:"To initiate the migration process, run the following command in your project directory:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli migrate
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
`,n.jsx(e.p,{children:"To start your project, use:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli start [--port <port_number>] [--mode <mode>]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Examples:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-cli start --port=8181 --mode=1
momo-cli start --port=8181 --mode=2
`})}),`
`,n.jsx(e.h3,{id:"options",children:"Options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--port"}),": (Optional) default ",n.jsx(e.code,{children:"8181"})]}),`
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
`,n.jsx(e.h2,{id:"️-widget-chunking-support",children:"⚙️ Widget Chunking Support"}),`
`,n.jsxs(e.p,{children:["Enable chunk support: In ",n.jsx(e.code,{children:"package.json"}),", add:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"chunk": true
`})}),`
`,n.jsx(e.p,{children:"Widget Code Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const WidgetMain = React.lazy(() => import('./src/widgets/index'));

export const MiniApp = props => {
  useEffect(() => () => alert("Unmount"), []);
  return <App {...props} />;
};

export const Widget = props => (
  <React.Suspense fallback={<View style={{ width: 300, height: 300, backgroundColor: 'red' }} />}>
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
`,n.jsx(e.h2,{id:"-expose-configuration",children:"📤 Expose Configuration"}),`
`,n.jsxs(e.p,{children:["Example ",n.jsx(e.code,{children:"exposes"})," config:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"exposes": [
  {
    "id": "vn$momo$demo:index",
    "name": "index",
    "assets": {
      "js": {
        "sync": [
          "vendors-node_modules...bundle",
          "__federation_expose_index.chunk.bundle"
        ],
        "async": [
          "src_widgets_index_js.chunk.bundle"
        ]
      },
      "css": { "sync": [], "async": [] }
    },
    "path": "./index"
  }
]
`})}),`
`,n.jsx(e.hr,{}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error Example:"}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cause:"})," TypeScript interface is used in a JavaScript file, which is not supported."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Solution:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Move the interface to a ",n.jsx(e.code,{children:".ts"})," file or remove it from JS files."]}),`
`,n.jsx(e.li,{children:"Make sure your Babel config is set up correctly."}),`
`,n.jsxs(e.li,{children:["If you use ",n.jsx(e.code,{children:"babel.config.js"})," (JavaScript):",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@enhance": "./src/enhance",
          "@app": "./src/app",
          "@context": "./src/context",
          "@views": "./src/views"
        }
      }
    ]
  ],
  excludes: [
    "@officialaccount"
  ]
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:["If you use ",n.jsx(e.code,{children:"babel.config.json"})," (JSON):",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "presets": [
    "module:@react-native/babel-preset"
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "extensions": [
          ".ts",
          ".tsx",
          ".js",
          ".json"
        ],
        "alias": {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@enhance": "./src/enhance",
          "@app": "./src/app",
          "@context": "./src/context",
          "@views": "./src/views"
        }
      }
    ]
  ],
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
`,n.jsx(e.h4,{id:"-3-failed-to-symbolicate--reanimated-ui-thread-error",children:"🌀 3. Failed to symbolicate / Reanimated UI thread error"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Error Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`✖ [20:35:28.745Z][Console] ReanimatedError: [Reanimated] Tried to synchronously call a non-worklet anonymous function on the UI thread.
See https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details., js engine: reanimated
✖ [20:35:29.066Z][DevServer] Failed to symbolicate {
  reqId: 'req-g',
  error: 'Source map for vn$momo$billpay.container.js.bundle for ios is missing'
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Fix:"})," Add ",n.jsx(e.code,{children:'"react-native-reanimated/plugin"'})," to your ",n.jsx(e.code,{children:"babel.config.js"})," or ",n.jsx(e.code,{children:"babel.config.json"})," plugins:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`plugins: [
  ...
  "react-native-reanimated/plugin"
]
`})}),`
`,n.jsx(e.p,{children:"Or in JSON:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "plugins": [
    ...,
    "react-native-reanimated/plugin"
  ]
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," To fix the error:"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ReanimatedError: [Reanimated] Tried to synchronously call a non-worklet anonymous function on the UI thread."}),`
And symbolication errors like `,n.jsx(e.code,{children:"Source map for vn$momo$billpay.container.js.bundle for ios is missing"}),`,
you must add `,n.jsx(e.code,{children:'"react-native-reanimated/plugin"'})," to your ",n.jsx(e.code,{children:"babel.config.js"})," or ",n.jsx(e.code,{children:"babel.config.json"})," plugins section."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"-4-babel-configuration-issue",children:"📝 4. Babel Configuration Issue"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Problem:"})," Using ",n.jsx(e.code,{children:"module.exports = function (api) { if (api.env('production')) { ... } }"})," in ",n.jsx(e.code,{children:"babel.config.js"})," causes build errors."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example of problematic JS config:"}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Solution:"})," Move your configuration to ",n.jsx(e.code,{children:"babel.config.json"})," and use the following format:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "env": {
    "production": {
      "presets": ["module:@react-native/babel-preset"],
      "plugins": [
        "react-native-reanimated/plugin",
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
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Note:"})," The JSON format is more compatible with the CLI and avoids build errors related to environment-based JS config."]}),`
`]}),`
`,n.jsxs(e.h4,{id:"-5-missing-indexjs-file",children:["🗂 5. Missing ",n.jsx(e.code,{children:"index.js"})," file"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error:"})," Index file is missing Error"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cause:"})," The ",n.jsx(e.code,{children:"index.js"})," file is missing in the project directory."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Solution:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`cd <project-folder>  # Ensure you are in the correct project directory
touch index.js       # Create the index.js file if it does not exist
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"-6-unable-to-retrieve-appid-from-appjson",children:"🆔 6. Unable to retrieve appId from app.json"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cause:"})," The ",n.jsx(e.code,{children:"app.json"})," file is missing or does not contain the ",n.jsx(e.code,{children:"appId"})," field."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Solution:"})," Check the ",n.jsx(e.code,{children:"app.json"})," file and ensure it contains the following:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "appId": "vn.momo.platform"
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"-7-invalid-loadsharesync-function-call-from-runtime-runtime-006",children:"🧩 7. Invalid loadShareSync function call from runtime (#RUNTIME-006)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Uncaught Error
Invalid loadShareSync function call from runtime
#RUNTIME-006
args: {"hostName":"vn$momo$suikits","sharedPkgName":"@shopify/flash-list"}
https://module-federation.io/guide/troubleshooting/runtime/RUNTIME-006
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cause:"})," The mini app is trying to use a shared package (e.g., ",n.jsx(e.code,{children:"@momo-kits/webview"})," or ",n.jsx(e.code,{children:"@shopify/flash-list"}),") that is not properly configured or available at runtime."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Solution:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Explicitly declare the shared package in your configuration"})}),`
`,n.jsxs(e.p,{children:["In your config file (e.g., ",n.jsx(e.code,{children:"webpack.config.mjs"})," or ",n.jsx(e.code,{children:"momo.config.js"}),"), add:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`shared: {
  "@shopify/flash-list": {
    singleton: true,
    requiredVersion: "^1.4.0" // Use the version you are using
  },
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Ensure ",n.jsx(e.code,{children:"@shopify/flash-list"})," is installed in both host and remote (suikits)"]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add @shopify/flash-list
# or
npm install @shopify/flash-list
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Do not call ",n.jsx(e.code,{children:"loadShareSync()"})," before ",n.jsx(e.code,{children:"initSharing"})," is done"]})}),`
`,n.jsx(e.p,{children:"If you are using dynamic loading or remote entry, make sure to call this before any load:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`await __webpack_init_sharing__('default');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["If the error is with ",n.jsx(e.code,{children:"@momo-kits/webview"}),", remove it and use the latest ",n.jsx(e.code,{children:"react-native-webview"})," instead:"]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn remove @momo-kits/webview
yarn add react-native-webview@latest
# or
npm uninstall @momo-kits/webview
npm install react-native-webview@latest
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-useful-links",children:"🔗 Useful Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://atlassiansuite.mservice.com.vn:8443/browse/MMAPP50-120",rel:"nofollow",children:"Common Error when migrate project mini app (Jira)"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://momo-kits.github.io/?path=/docs/migration-readme--docs",rel:"nofollow",children:"Document: Migrate kits/core to foundation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://store.momoapp.vn/ei4bj4Ml4CYOtS2TzcUK",rel:"nofollow",children:"Download App Platform Android UAT"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://store.momoapp.vn/8ivlvxhvwbsOoqnKoSue",rel:"nofollow",children:"Build Engine"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.google.com/spreadsheets/d/16GuFrY_vTABA0qUKUrj2aXPHVTf1xcEfcGyy25Kkx_w/edit?gid=1362542876#gid=1362542876",rel:"nofollow",children:"Mini App Migration Status (Google Sheet, Tab 2)"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Next Step:"})," Follow the ",n.jsx(e.a,{href:"/docs/migration-migration-guide--docs",children:"Migration Guide"})," to get started."]}),`
`,n.jsxs(e.p,{children:["If you have any questions or encounter any issues, please contact: ",n.jsx(e.a,{href:"mailto:le.nguyen4@mservice.com.vn",children:"le.nguyen4@mservice.com.vn"})]})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
