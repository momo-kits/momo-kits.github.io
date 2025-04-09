import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-gG8jtkCA.js";import"./index-BLaM-zqO.js";import{M as s}from"./DocsRenderer-CFRXHY34-7yy41LSN.js";import"./index-DI7CEG0L.js";import"./preview-Dl_UtUpE.js";import"./iframe-DzvCShjd.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Guides/Theme"}),`
`,n.jsx(e.h1,{id:"-theme-usage-in-foundation",children:"🎨 Theme Usage in Foundation"}),`
`,n.jsxs(e.p,{children:["This document outlines how to work with theming in the ",n.jsx(e.code,{children:"@momo-kits/foundation"})," package, including how to apply themes dynamically and how components access theme values using context."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-theme-setup",children:"🧱 Theme Setup"}),`
`,n.jsxs(e.p,{children:["To apply theming globally, the ",n.jsx(e.code,{children:"theme"})," object (typically derived from ",n.jsx(e.code,{children:"defaultTheme"}),") is passed into the ",n.jsx(e.code,{children:"NavigationContainer"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useEffect, useState } from 'react';
import {
  defaultTheme,
  NavigationContainer,
  Theme,
  Localize
} from '@momo-kits/foundation';

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('onChangeTheme', (data: Theme) => {
      setTheme(data);
    });
    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer
      localize={new Localize(language)}
      theme={theme}
      screen={Main}
    />
  );
};

export default App;
`})}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"Note:"})," The theme can be updated at runtime via an event listener (e.g., ",n.jsx(e.code,{children:"DeviceEventEmitter"}),") allowing for dynamic theme switching."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"-accessing-theme-with-applicationcontext",children:["🧩 Accessing Theme with ",n.jsx(e.code,{children:"ApplicationContext"})]}),`
`,n.jsxs(e.p,{children:["Within component files, the theme is accessed via ",n.jsx(e.code,{children:"useContext(ApplicationContext)"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useContext } from 'react';
import { ApplicationContext } from '@momo-kits/foundation';

const MyComponent = () => {
  const { theme } = useContext(ApplicationContext);

  return (
    <View style={{ backgroundColor: theme.colors.background.default }}>
      <Text style={{ color: theme.colors.text.primary }}>Themed text</Text>
    </View>
  );
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-theme-structure-example",children:"📚 Theme Structure Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
    background: {
      default: string;
      surface: string;
      tonal: string;
      pressed: string;
      selected: string;
      disable: string;
    };
    text: {
      default: string;
      secondary: string;
      hint: string;
      disable: string;
    };
    border: {
      default: string;
      disable: string;
    };
    success: {
      primary: string;
      secondary: string;
      container: string;
    };
    warning: {
      primary: string;
      secondary: string;
      container: string;
    };
    error: {
      primary: string;
      secondary: string;
      container: string;
    };
    highlight: {
      primary: string;
      secondary: string;
      container: string;
    };
    interactive: {
      primary: string;
      secondary: string;
      container: string;
    };
  };
  font: string;
  assets?: {
    headerBackground?: string;
  };
};
`})})]})}function u(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{u as default};
