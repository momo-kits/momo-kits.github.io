"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[43404],{77264:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(74892);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),y=g(n),s=r,u=y["".concat(o,".").concat(s)]||y[s]||m[s]||l;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[y]="string"==typeof e?e:r,i[1]=d;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var a=n(58168),r=n(98587),l=(n(74892),n(77264)),i=["components"],d={id:"exportheaderright",title:"exportHeaderRight"},o=void 0,g={unversionedId:"components/exportheaderright",id:"version-0.109.x/components/exportheaderright",title:"exportHeaderRight",description:"Props",source:"@site/versioned_docs/version-0.109.x/components/exportHeaderRight.mdx",sourceDirName:"components",slug:"/components/exportheaderright",permalink:"/docs/components/exportheaderright",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.109.x/components/exportHeaderRight.mdx",tags:[],version:"0.109.x",frontMatter:{id:"exportheaderright",title:"exportHeaderRight"}},p={},y=[{value:"Props",id:"props",level:2}],m={toc:y},s="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,i);return(0,l.yg)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"navigationoptions#props"},"NavigationOptions")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"animationEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether transition animation should be enabled the screen.If you set it to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),", the screen won't animate when pushing or popping.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," on Android and iOS, ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," on Web.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"animationTypeForReplace")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pop")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"push")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The type of animation to use when this screen replaces another screen. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"push"),".When ",(0,l.yg)("inlineCode",{parentName:"td"},"pop")," is used, the ",(0,l.yg)("inlineCode",{parentName:"td"},"pop")," animation is applied to the screen being replaced.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cardOverlay")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"((props: { style: false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null; }) => ReactNode)")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function that returns a React Element to display as a overlay for the card.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cardOverlayEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to have a semi-transparent dark overlay visible under the card during transitions.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," on Android and ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," on iOS.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cardShadowEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether a shadow is visible for the card during transitions. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cardStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the card in stack.You can provide a custom background color to use instead of the default background here.You can also specify ",(0,l.yg)("inlineCode",{parentName:"td"},"{ backgroundColor: 'transparent' }")," to make the previous screen visible underneath.This is useful to implement things like modal dialogs.If you use ",(0,l.yg)("a",{parentName:"td",href:"https://github.com/kmagiera/react-native-screens"},(0,l.yg)("inlineCode",{parentName:"a"},"react-native-screens")),", you should also specify ",(0,l.yg)("inlineCode",{parentName:"td"},"mode: 'modal'"),"in the stack view config when using a transparent background so previous screens aren't detached.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cardStyleInterpolator")),(0,l.yg)("td",{parentName:"tr",align:null},"StackCardStyleInterpolator"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function which specifies interpolated styles for various parts of the card, e.g. the overlay, shadow etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"detachPreviousScreen")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to detach the previous screen from the view hierarchy to save memory.Set it to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if you need the previous screen to be seen through the active screen.Only applicable if ",(0,l.yg)("inlineCode",{parentName:"td"},"detachInactiveScreens")," isn't set to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),".Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," for the last screen when mode='modal', otherwise ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"gestureDirection")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureDirection"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The direction of swipe gestures, ",(0,l.yg)("inlineCode",{parentName:"td"},"horizontal")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"vertical"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"gestureEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you can use gestures to dismiss this screen. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," on iOS, ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," on Android.Not supported on Web.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"gestureResponseDistance")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{ vertical?: number; horizontal?: number; }")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"undefined")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Object to override the distance of touch start from the edge of the screen to recognize gestures.Not supported on Web.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"gestureVelocityImpact")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Number which determines the relevance of velocity for the gesture. Defaults to 0.3.Not supported on Web.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"header")),(0,l.yg)("td",{parentName:"tr",align:null},"((props: StackHeaderProps) => ReactNode)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function that given ",(0,l.yg)("inlineCode",{parentName:"td"},"HeaderProps")," returns a React Element to display as a header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackAccessibilityLabel")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Accessibility label for the header back button.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackAllowFontScaling")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether back button title font should scale to respect Text Size accessibility settings. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackImage")),(0,l.yg)("td",{parentName:"tr",align:null},"((props: { tintColor: string; }) => ReactNode)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function which returns a React Element to display custom image in header's back button.It receives the ",(0,l.yg)("inlineCode",{parentName:"td"},"tintColor")," in in the options object as an argument. object.Defaults to Image component with a the default back icon image for the platform (a chevron on iOS and an arrow on Android).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Title string used by the back button on iOS. Defaults to the previous scene's ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitle"),".Use ",(0,l.yg)("inlineCode",{parentName:"td"},"headerBackTitleVisible: false")," to hide it.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackTitleStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the back title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackTitleVisible")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A reasonable default is supplied for whether the back button title should be visible or not.But if you want to override that you can use ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," in this option.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerBackground")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function which returns a React Element to render as the background of the header.This is useful for using backgrounds such as an image or a gradient.You can use this with ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTransparent")," to render a blur view, for example, to create a translucent header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerLeft")),(0,l.yg)("td",{parentName:"tr",align:null},"((props: StackHeaderLeftButtonProps) => ReactNode)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function which returns a React Element to display on the left side of the header.It receives a number of arguments when rendered (",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"label"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"labelStyle")," and more.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerLeftContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the container of the ",(0,l.yg)("inlineCode",{parentName:"td"},"headerLeft")," component, for example to add padding.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerPressColorAndroid")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Color for material ripple (Android >= 5.0 only).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerRightContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the container of the ",(0,l.yg)("inlineCode",{parentName:"td"},"headerRight")," component, for example to add padding.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerShown")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to show the header. The header is shown by default unless ",(0,l.yg)("inlineCode",{parentName:"td"},"headerMode")," was set to ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),".Setting this to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," hides the header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerStatusBarHeight")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Extra padding to add at the top of header to account for translucent status bar.By default, it uses the top value from the safe area insets of the device.Pass 0 or a custom value to disable the default behaviour, and customize the height.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the header. You can specify a custom background color here, for example.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerStyleInterpolator")),(0,l.yg)("td",{parentName:"tr",align:null},"StackHeaderStyleInterpolator"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Function which specifies interpolated styles for various parts of the header, e.g. the title, left button etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTintColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Tint color for the header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleAlign")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"center")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"How to align the the header title.Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"center")," on iOS and ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," on Android.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleAllowFontScaling")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether header title font should scale to respect Text Size accessibility settings. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<ViewStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the container of the ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitle")," component, for example to add padding.By default, ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleContainerStyle")," is with an absolute position style and offsets both ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"right"),".This may lead to white space or overlap between ",(0,l.yg)("inlineCode",{parentName:"td"},"headerLeft")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitle")," if a customized ",(0,l.yg)("inlineCode",{parentName:"td"},"headerLeft")," is used.It can be solved by adjusting ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"right")," style in ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleContainerStyle")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"marginHorizontal")," in ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleStyle"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTitleStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Value")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"RegisteredStyle<TextStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"AnimatedInterpolation")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedObject<TextStyle>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"WithAnimatedArray<...>")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style object for the title component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTransparent")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),". If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the header will not have a background unless you explicitly provide it with ",(0,l.yg)("inlineCode",{parentName:"td"},"headerBackground"),".The header will also float over the screen so that it overlaps the content underneath.This is useful if you want to render a semi-transparent header or a blurred background.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"headerTruncatedBackTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Title string used by the back button when ",(0,l.yg)("inlineCode",{parentName:"td"},"headerBackTitle")," doesn't fit on the screen. ",(0,l.yg)("inlineCode",{parentName:"td"},'"Back"')," by default.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"safeAreaInsets")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{ top?: number; right?: number; bottom?: number")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"undefined; left?: number")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"undefined; }")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"undefined")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Safe area insets for the screen. This is used to avoid elements like notch and status bar.By default, the device's safe area insets are automatically detected. You can override the behavior with this option.For example, to remove the extra spacing for status bar, pass ",(0,l.yg)("inlineCode",{parentName:"td"},"safeAreaInsets: { top: 0 }"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"title")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"String that can be displayed in the header as a fallback for ",(0,l.yg)("inlineCode",{parentName:"td"},"headerTitle"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"transitionSpec")),(0,l.yg)("td",{parentName:"tr",align:null},"{ open: TransitionSpec; close: TransitionSpec; }"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Object which specifies the animation type (timing or spring) and their options (such as duration for timing)."))))))}u.isMDXComponent=!0}}]);