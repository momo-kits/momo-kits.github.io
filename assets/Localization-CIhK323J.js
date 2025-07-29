import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-gG8jtkCA.js";import"./index-Czlgpq96.js";import{M as t}from"./DocsRenderer-CFRXHY34-B9lqNX1s.js";import"./index-DI7CEG0L.js";import"./preview-D8XB7Mlg.js";import"./iframe-LXfXa6WE.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function a(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Guides/Localization"}),`
`,n.jsx(e.h1,{id:"-localization-in-foundation",children:"🌐 Localization in Foundation"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Localize"})," class from ",n.jsx(e.code,{children:"@momo-kits/foundation"})," provides a lightweight utility for handling multilingual support (Vietnamese and English)."]}),`
`,n.jsxs(e.p,{children:["This document outlines the actual API based on source code in ",n.jsx(e.code,{children:"Application/Localize.ts"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-initialization",children:"🧱 Initialization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Localize } from '@momo-kits/foundation';
import language from './localization/language.json';

const localize = new Localize(language);
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-public-api",children:"🛠️ Public API"}),`
`,n.jsx(e.h3,{id:"constructorassets-localizationobject",children:n.jsx(e.code,{children:"constructor(assets: LocalizationObject)"})}),`
`,n.jsx(e.p,{children:"Initializes the localization system with provided language mappings. Also merges defaults from Foundation."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"translatekey-string-string",children:n.jsx(e.code,{children:"translate(key: string): string"})}),`
`,n.jsx(e.p,{children:"Translates a string key using the active language."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`localize.translate('home.title');
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"translatedatadata--vi-string-en-string--string",children:n.jsx(e.code,{children:"translateData(data: { vi: string; en: string }): string"})}),`
`,n.jsxs(e.p,{children:["Translates from a direct ",n.jsx(e.code,{children:"{vi, en}"})," mapping."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`localize.translateData({ vi: 'Xin chào', en: 'Hello' });
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"addtranslationstranslations-localizationobject-void",children:n.jsx(e.code,{children:"addTranslations(translations: LocalizationObject): void"})}),`
`,n.jsx(e.p,{children:"Dynamically merges new or updated translation keys into the current asset set."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`localize.addTranslations({
  vi: { welcome: 'Chào mừng' },
  en: { welcome: 'Welcome' }
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"get-getcurrentlanguage-vi--en",children:n.jsx(e.code,{children:"get getCurrentLanguage: 'vi' | 'en'"})}),`
`,n.jsxs(e.p,{children:["Returns the current active language. Derived from ",n.jsx(e.code,{children:"NativeModules.RNResource.language"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const lang = localize.getCurrentLanguage;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"get-getassets-localizationobject",children:n.jsx(e.code,{children:"get getAssets: LocalizationObject"})}),`
`,n.jsxs(e.p,{children:["Returns the full language map for both ",n.jsx(e.code,{children:"vi"})," and ",n.jsx(e.code,{children:"en"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const allAssets = localize.getAssets;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-integration-example",children:"🧩 Integration Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<NavigationContainer
  localize={localize}
  theme={theme}
  screen={Main}
/>
`})})]})}function u(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{u as default};
