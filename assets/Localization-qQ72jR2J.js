import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dw915X55.js";import"./index-Cuay236k.js";import{M as a}from"./DocsRenderer-CFRXHY34-BZXUv6EV.js";import"./index-CPl6p-nG.js";import"./preview-Bbp7vrnW.js";import"./iframe-TEDt8-8D.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Localization"}),`
`,e.jsx(n.h1,{id:"-localization-in-foundation",children:"🌐 Localization in Foundation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Localize"})," class from ",e.jsx(n.code,{children:"@momo-kits/foundation"})," provides a lightweight utility for handling multilingual support (Vietnamese and English)."]}),`
`,e.jsxs(n.p,{children:["This document outlines the actual API based on source code in ",e.jsx(n.code,{children:"Application/Localize.ts"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-initialization",children:"🧱 Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Localize } from '@momo-kits/foundation';
import language from './localization/language.json';

const localize = new Localize(language);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-public-api",children:"🛠️ Public API"}),`
`,e.jsx(n.h3,{id:"constructorassets-localizationobject",children:e.jsx(n.code,{children:"constructor(assets: LocalizationObject)"})}),`
`,e.jsxs(n.p,{children:["Initializes the localization system with provided language mappings. Also merges defaults from Foundation. The language is read once here: ",e.jsx(n.code,{children:"en"})," when ",e.jsx(n.code,{children:"NativeModules.RNResource.getResourceSync('language')"})," returns ",e.jsx(n.code,{children:"en"}),", otherwise ",e.jsx(n.code,{children:"vi"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"translatekey-string-string",children:e.jsx(n.code,{children:"translate(key: string): string"})}),`
`,e.jsx(n.p,{children:"Translates a string key using the active language. Returns the key itself when it is missing."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`localize.translate('home.title');
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"translatedatadata--vi-string-en-string--string",children:e.jsx(n.code,{children:"translateData(data: { vi: string; en: string }): string"})}),`
`,e.jsxs(n.p,{children:["Translates from a direct ",e.jsx(n.code,{children:"{vi, en}"})," mapping. If the active language is missing from the object, returns the JSON string of the object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`localize.translateData({ vi: 'Xin chào', en: 'Hello' });
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"addtranslationstranslations-localizationobject-void",children:e.jsx(n.code,{children:"addTranslations(translations: LocalizationObject): void"})}),`
`,e.jsx(n.p,{children:"Dynamically merges new translation keys into the current asset set. Keys that already exist keep their current text."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`localize.addTranslations({
  vi: { welcome: 'Chào mừng' },
  en: { welcome: 'Welcome' }
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"get-getcurrentlanguage-vi--en",children:e.jsx(n.code,{children:"get getCurrentLanguage: 'vi' | 'en'"})}),`
`,e.jsxs(n.p,{children:["Returns the current active language, fixed when the ",e.jsx(n.code,{children:"Localize"})," instance is created."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const lang = localize.getCurrentLanguage;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"get-getassets-localizationobject",children:e.jsx(n.code,{children:"get getAssets: LocalizationObject"})}),`
`,e.jsxs(n.p,{children:["Returns the full language map for both ",e.jsx(n.code,{children:"vi"})," and ",e.jsx(n.code,{children:"en"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const allAssets = localize.getAssets;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-integration-example",children:"🧩 Integration Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NavigationContainer
  localize={localize}
  theme={theme}
  screen={Main}
  maxApi={MaxApi}
/>
`})}),`
`,e.jsxs(n.p,{children:["Inside screens, ",e.jsx(n.code,{children:"ApplicationContext"})," exposes ",e.jsx(n.code,{children:"translate"}),", which accepts either a key or a ",e.jsx(n.code,{children:"{vi, en}"})," object:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const {translate} = useContext(ApplicationContext);

translate('home.title');
translate({vi: 'Xin chào', en: 'Hello'});
`})})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{u as default};
