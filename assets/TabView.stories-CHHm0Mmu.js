import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as E}from"./index-BgJgh-x_.js";import{r as h,g as Le,e as _e}from"./index-DI7CEG0L.js";import{k as a,f as De,l as P,M as ee,s as re,I as F,T as G,x as U,B as $,A as Y,p as O,q as We,t as je,o as Xe}from"./styles-Dd_0X69m.js";import{s as Me,V as R,c as Be}from"./index-BzmpT3sc.js";const o=Me.create({pagerView:{flex:1},textCenter:{textAlign:"center"},tabView:{width:"100%"},tabBar:{flexDirection:"row",borderBottomWidth:1},tabItem:{alignItems:"center",justifyContent:"center"},indicator:{height:2,borderTopLeftRadius:P.XXS,borderTopRightRadius:P.XXS,position:"absolute",bottom:0},icon:{borderRadius:P.XS},iconHolder:{marginRight:a.XS,width:24,height:24,justifyContent:"center",alignItems:"center",overflow:"hidden"},tabItemWrapper:{paddingHorizontal:a.XS,alignItems:"center"},cardTabBar:{flexDirection:"row",marginTop:a.XS,alignItems:"flex-end"},cardTabItem:{borderTopLeftRadius:a.M,borderTopRightRadius:a.M,height:40,backgroundColor:De.black_02,flexDirection:"row",justifyContent:"center",alignItems:"center",paddingHorizontal:a.S,paddingTop:a.S,paddingBottom:a.M},cardTabOverlay:{flexDirection:"row",height:44,position:"absolute",top:-4,borderTopLeftRadius:a.M,borderTopRightRadius:a.M},overlayTextWrapper:{height:"100%",alignItems:"center",justifyContent:"center",paddingVertical:a.M,paddingHorizontal:a.S,flexDirection:"row"},dotSmall:{position:"absolute",top:-4,right:-4,zIndex:2},dot:{position:"absolute",top:-8,right:-8,zIndex:2},badge:{position:"absolute",top:-8,left:a.S,zIndex:2}}),ne=({tab:n,active:i,onPressTabItem:r,width:t,direction:f,selectedColor:l,unselectedColor:g})=>{const{title:y,icon:c,showDot:s=!1,dotSize:x="small",badgeValue:m,renderIcon:p,accessibilityLabel:d}=n,w=i?"header_s_semibold":"body_default_regular",j=i?l:g,V=x==="large"?o.dot:o.dotSmall;return f==="row"?e.jsxs(ee,{accessibilityLabel:d,style:[o.tabItem,{width:t,height:re(48),flexDirection:"row",overflow:"hidden",paddingVertical:a.M,paddingHorizontal:a.M}],onPress:r,children:[p&&typeof p=="function"&&e.jsx(R,{style:[o.icon,o.iconHolder,{marginRight:a.S}],children:p(i)}),!p&&!!c&&e.jsx(F,{style:[o.icon,{marginRight:a.S}],source:c,color:j}),e.jsx(G,{numberOfLines:1,typography:w,color:j,style:{flexShrink:1},children:y}),s&&e.jsx(U,{size:x,style:{marginLeft:a.XS}}),!s&&m&&e.jsx(R,{children:e.jsx($,{label:m,style:{marginLeft:a.XS}})})]}):e.jsxs(ee,{style:[o.tabItem,{width:t,height:re(68),flexDirection:"column",overflow:"hidden",paddingHorizontal:a.M,paddingVertical:a.M}],onPress:r,accessibilityLabel:d,children:[e.jsxs(R,{children:[p&&typeof p=="function"&&e.jsx(R,{style:[o.icon,o.iconHolder,{marginBottom:a.XS}],children:p(i)}),!p&&!!c&&e.jsx(F,{style:[o.icon,{marginBottom:a.XS}],source:c,color:j}),(p||!!c)&&s&&e.jsx(U,{style:V,size:x}),(p||!!c)&&!s&&m&&e.jsx($,{label:m,style:o.badge})]}),e.jsx(G,{numberOfLines:1,typography:w,color:j,children:y})]})};ne.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{tab:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The title of the tab.
   */
  title: string;

  /**
   * Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path.
   */
  icon?: string;

  renderIcon?: (active: boolean) => ReactElement;

  /**
   * The main component or content to be displayed when this tab is active.
   */
  component: ReactElement;

  /**
   * Optional. If \`true\`, shows a dot indicator on the tab, often used to signal notifications or updates.
   */
  showDot?: boolean;

  /**
   * Optional. Specifies the size of the dot indicator, either 'small' or 'large'.
   */
  dotSize?: 'small' | 'large';

  badgeValue?: string | number;

  accessibilityLabel?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the tab."},{key:"icon",value:{name:"string",required:!1},description:"Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path."},{key:"renderIcon",value:{name:"signature",type:"function",raw:"(active: boolean) => ReactElement",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"ReactElement"}},required:!1}},{key:"component",value:{name:"ReactElement",required:!0},description:"The main component or content to be displayed when this tab is active."},{key:"showDot",value:{name:"boolean",required:!1},description:"Optional. If `true`, shows a dot indicator on the tab, often used to signal notifications or updates."},{key:"dotSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1},description:"Optional. Specifies the size of the dot indicator, either 'small' or 'large'."},{key:"badgeValue",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"accessibilityLabel",value:{name:"string",required:!1}}]}},description:"The Tab object containing the details and content of this tab item."},active:{required:!0,tsType:{name:"boolean"},description:"Indicates if this tab item is currently active or selected."},onPressTabItem:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional. A callback function that is triggered when this tab item is pressed."},width:{required:!1,tsType:{name:"number"},description:"Optional. Specifies the width of the tab item. Useful for customizing layout and appearance."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Optional. Specifies the layout direction for the tab's content, either in a row or column format."},selectedColor:{required:!1,tsType:{name:"string"},description:""},unselectedColor:{required:!1,tsType:{name:"string"},description:""}}};const Ce=({tabs:n=[],selectedIndex:i,onPressTabItem:r,containerWidth:t=0,scrollX:f,direction:l,selectedColor:g,unselectedColor:y})=>{const{theme:c}=h.useContext(Y),s=t/n.length;return e.jsxs(R,{style:[o.tabBar,{borderColor:c.colors.border.default,backgroundColor:c.colors.background.surface}],children:[n.map((x,m)=>e.jsx(ne,{width:s,onPressTabItem:()=>{r==null||r(m)},active:i===m,tab:x,direction:l,selectedColor:g,unselectedColor:y},`Tab View Item ${x.title}-${m}`)),e.jsx(O.View,{style:[o.indicator,{left:f.interpolate({inputRange:[0,n.length-1],outputRange:[a.XS,(n.length-1)*s+a.XS],extrapolate:"clamp"}),width:s-a.XS*2,backgroundColor:g}]})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the tab.
   */
  title: string;

  /**
   * Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path.
   */
  icon?: string;

  renderIcon?: (active: boolean) => ReactElement;

  /**
   * The main component or content to be displayed when this tab is active.
   */
  component: ReactElement;

  /**
   * Optional. If \`true\`, shows a dot indicator on the tab, often used to signal notifications or updates.
   */
  showDot?: boolean;

  /**
   * Optional. Specifies the size of the dot indicator, either 'small' or 'large'.
   */
  dotSize?: 'small' | 'large';

  badgeValue?: string | number;

  accessibilityLabel?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the tab."},{key:"icon",value:{name:"string",required:!1},description:"Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path."},{key:"renderIcon",value:{name:"signature",type:"function",raw:"(active: boolean) => ReactElement",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"ReactElement"}},required:!1}},{key:"component",value:{name:"ReactElement",required:!0},description:"The main component or content to be displayed when this tab is active."},{key:"showDot",value:{name:"boolean",required:!1},description:"Optional. If `true`, shows a dot indicator on the tab, often used to signal notifications or updates."},{key:"dotSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1},description:"Optional. Specifies the size of the dot indicator, either 'small' or 'large'."},{key:"badgeValue",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"accessibilityLabel",value:{name:"string",required:!1}}]}}],raw:"Tab[]"},description:"An array of Tab objects representing each tab in the tab bar.",defaultValue:{value:"[]",computed:!1}},selectedIndex:{required:!0,tsType:{name:"number"},description:"The index of the currently selected or active tab."},onPressTabItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. A callback function that is triggered when a tab item is pressed, receiving the index of the tab as a parameter."},containerWidth:{required:!1,tsType:{name:"number"},description:"The width of the container in which the tab bar is placed. Useful for layout calculations.",defaultValue:{value:"0",computed:!1}},scrollX:{required:!0,tsType:{name:"Animated.Value"},description:"Represents the horizontal scroll position in a scrollable tab bar."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Optional. Specifies the layout direction for the tab's content, either in a row or column format."},selectedColor:{required:!1,tsType:{name:"string"},description:""},unselectedColor:{required:!1,tsType:{name:"string"},description:""}}};const ke=({tab:n,active:i,onPressTabItem:r,width:t,selectedColor:f,unselectedColor:l})=>{const{title:g,icon:y,renderIcon:c,showDot:s=!1,dotSize:x="small",badgeValue:m,accessibilityLabel:p}=n,d=i?f:l;return e.jsxs(ee,{onPress:r,style:[o.cardTabItem,{width:t}],accessibilityLabel:p,children:[c&&!["string","boolean","number"].includes(typeof c)&&e.jsx(R,{style:[o.icon,o.iconHolder,{marginRight:a.XS}],children:c}),!c&&!!y&&e.jsx(F,{color:d,style:[o.icon,{marginRight:a.XS}],source:y}),e.jsx(G,{numberOfLines:1,style:[o.textCenter,{flexShrink:1}],typography:"body_default_regular",children:g}),s&&e.jsx(U,{size:x,style:{marginLeft:a.XS}}),!s&&m&&e.jsx(R,{children:e.jsx($,{label:m,style:{marginLeft:a.XS}})})]})};ke.__docgenInfo={description:"",methods:[],displayName:"CardTabItem",props:{tab:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The title of the tab.
   */
  title: string;

  /**
   * Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path.
   */
  icon?: string;

  renderIcon?: (active: boolean) => ReactElement;

  /**
   * The main component or content to be displayed when this tab is active.
   */
  component: ReactElement;

  /**
   * Optional. If \`true\`, shows a dot indicator on the tab, often used to signal notifications or updates.
   */
  showDot?: boolean;

  /**
   * Optional. Specifies the size of the dot indicator, either 'small' or 'large'.
   */
  dotSize?: 'small' | 'large';

  badgeValue?: string | number;

  accessibilityLabel?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the tab."},{key:"icon",value:{name:"string",required:!1},description:"Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path."},{key:"renderIcon",value:{name:"signature",type:"function",raw:"(active: boolean) => ReactElement",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"ReactElement"}},required:!1}},{key:"component",value:{name:"ReactElement",required:!0},description:"The main component or content to be displayed when this tab is active."},{key:"showDot",value:{name:"boolean",required:!1},description:"Optional. If `true`, shows a dot indicator on the tab, often used to signal notifications or updates."},{key:"dotSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1},description:"Optional. Specifies the size of the dot indicator, either 'small' or 'large'."},{key:"badgeValue",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"accessibilityLabel",value:{name:"string",required:!1}}]}},description:"The Tab object containing the details and content of this tab item."},active:{required:!0,tsType:{name:"boolean"},description:"Indicates if this tab item is currently active or selected."},onPressTabItem:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional. A callback function that is triggered when this tab item is pressed."},width:{required:!1,tsType:{name:"number"},description:"Optional. Specifies the width of the tab item. Useful for customizing layout and appearance."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Optional. Specifies the layout direction for the tab's content, either in a row or column format."},selectedColor:{required:!1,tsType:{name:"string"},description:""},unselectedColor:{required:!1,tsType:{name:"string"},description:""}}};var J={exports:{}},K,ie;function Ae(){if(ie)return K;ie=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return K=n,K}var Q,oe;function He(){if(oe)return Q;oe=1;var n=Ae();function i(){}function r(){}return r.resetWarningCache=i,Q=function(){function t(g,y,c,s,x,m){if(m!==n){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function f(){return t}var l={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:f,element:t,elementType:t,instanceOf:f,node:t,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:r,resetWarningCache:i};return l.PropTypes=l,l},Q}var se;function Ne(){return se||(se=1,J.exports=He()()),J.exports}var Fe=Ne();const Ge=Le(Fe),Ue=Be||h.createElement;function b(n,i){class r extends h.Component{render(){return Ue(i,this.props,this.props.children)}}return r.displayName=n,r.propTypes={children:Ge.node},r.defaultProps={children:void 0},r}const u=b("Svg","svg");u.Svg=u;const $e=b("Circle","circle");u.Circle=$e;const Ye=b("ClipPath","clipPath");u.ClipPath=Ye;const Ze=b("Defs","defs");u.Defs=Ze;const Je=b("Ellipse","ellipse");u.Ellipse=Je;const Ke=b("ForeignObject","foreignObject");u.ForeignObject=Ke;const Qe=b("G","g");u.G=Qe;const et=b("Image","image");u.Image=et;const tt=b("Line","line");u.Line=tt;const nt=b("LinearGradient","linearGradient");u.LinearGradient=nt;const at=b("Marker","marker");u.Marker=at;const rt=b("Mask","mask");u.Mask=rt;const Ie=b("Path","path");u.Path=Ie;const it=b("Pattern","pattern");u.Pattern=it;const ot=b("Polygon","polygon");u.Polygon=ot;const st=b("Polyline","polyline");u.Polyline=st;const lt=b("RadialGradient","radialGradient");u.RadialGradient=lt;const ct=b("Rect","rect");u.Rect=ct;const dt=b("Stop","stop");u.Stop=dt;const ut=b("Symbol","symbol");u.Symbol=ut;const mt=b("Text","text");u.Text=mt;const pt=b("TextPath","textPath");u.TextPath=pt;const ht=b("TSpan","tspan");u.TSpan=ht;const ft=b("Use","use");u.Use=ft;const te=({style:n})=>e.jsx(u,{width:"28",height:"44",viewBox:"0 0 28 44",fill:"none",style:n,children:e.jsx(Ie,{d:"M0 0H0.60765C6.47582 0 11.4819 4.23831 12.4602 10.0244C13.9248 18.6872 15.9294 30.37 16.6925 34C17.9536 40 22.259 44 27.9996 44H0V0Z",fill:"white"})});te.__docgenInfo={description:"",methods:[],displayName:"PathSvg"};const Oe=({tabs:n,onPressTabItem:i,containerWidth:r,selectedIndex:t,selectedColor:f,unselectedColor:l})=>{var m,p,d,w,j,V,T,S,q,k,I,L,_,z;const{theme:g}=h.useContext(Y),y=r/n.length,c=t===0,s=t===n.length-1,x=c?0:28;return e.jsxs(R,{style:o.cardTabBar,children:[n.map((Z,D)=>e.jsx(ke,{tab:Z,active:t===D,onPressTabItem:()=>{i==null||i(D)},width:y,selectedColor:f,unselectedColor:l})),e.jsxs(R,{style:[o.cardTabOverlay,We.OS==="ios",{width:r/n.length,left:y*t-x}],children:[!c&&e.jsx(te,{style:{transform:[{rotateY:"180deg"}],left:8}}),e.jsxs(R,{accessibilityLabel:(m=n[t])==null?void 0:m.accessibilityLabel,style:[o.overlayTextWrapper,{backgroundColor:g.colors.background.surface,width:r/n.length,borderTopRightRadius:P.M,borderTopLeftRadius:P.M,paddingHorizontal:n.length===3?a.S:a.M}],children:[!!((p=n[t])!=null&&p.renderIcon)&&typeof((d=n[t])==null?void 0:d.renderIcon)=="function"&&e.jsx(R,{style:[o.icon,o.iconHolder,{marginRight:a.XS}],children:(j=(w=n[t])==null?void 0:w.renderIcon)==null?void 0:j.call(w,!0)}),!((V=n[t])!=null&&V.renderIcon)&&!!((T=n[t])!=null&&T.icon)&&e.jsx(F,{color:f,source:(S=n[t])==null?void 0:S.icon,style:[o.icon,{marginRight:a.XS}]}),e.jsx(G,{color:f,numberOfLines:1,style:[o.textCenter,{flexShrink:1}],typography:"header_s_semibold",children:((q=n[t])==null?void 0:q.title)||""}),((k=n[t])==null?void 0:k.showDot)&&e.jsx(U,{size:((I=n[t])==null?void 0:I.dotSize)??"small",style:{marginLeft:a.XS}}),!((L=n[t])!=null&&L.showDot)&&((_=n[t])==null?void 0:_.badgeValue)&&e.jsx(R,{children:e.jsx($,{label:(z=n[t])==null?void 0:z.badgeValue,style:{marginLeft:a.XS}})})]}),!s&&e.jsx(te,{style:{right:8}})]})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"CardTabBar",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the tab.
   */
  title: string;

  /**
   * Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path.
   */
  icon?: string;

  renderIcon?: (active: boolean) => ReactElement;

  /**
   * The main component or content to be displayed when this tab is active.
   */
  component: ReactElement;

  /**
   * Optional. If \`true\`, shows a dot indicator on the tab, often used to signal notifications or updates.
   */
  showDot?: boolean;

  /**
   * Optional. Specifies the size of the dot indicator, either 'small' or 'large'.
   */
  dotSize?: 'small' | 'large';

  badgeValue?: string | number;

  accessibilityLabel?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the tab."},{key:"icon",value:{name:"string",required:!1},description:"Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path."},{key:"renderIcon",value:{name:"signature",type:"function",raw:"(active: boolean) => ReactElement",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"ReactElement"}},required:!1}},{key:"component",value:{name:"ReactElement",required:!0},description:"The main component or content to be displayed when this tab is active."},{key:"showDot",value:{name:"boolean",required:!1},description:"Optional. If `true`, shows a dot indicator on the tab, often used to signal notifications or updates."},{key:"dotSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1},description:"Optional. Specifies the size of the dot indicator, either 'small' or 'large'."},{key:"badgeValue",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"accessibilityLabel",value:{name:"string",required:!1}}]}}],raw:"Tab[]"},description:"An array of Tab objects representing each tab in the tab bar."},selectedIndex:{required:!0,tsType:{name:"number"},description:"The index of the currently selected or active tab."},onPressTabItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. A callback function that is triggered when a tab item is pressed, receiving the index of the tab as a parameter."},containerWidth:{required:!0,tsType:{name:"number"},description:"The width of the container in which the tab bar is placed. Useful for layout calculations."},scrollX:{required:!0,tsType:{name:"Animated.Value"},description:"Represents the horizontal scroll position in a scrollable tab bar."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Optional. Specifies the layout direction for the tab's content, either in a row or column format."},selectedColor:{required:!1,tsType:{name:"string"},description:""},unselectedColor:{required:!1,tsType:{name:"string"},description:""}}};const Ve=({tabs:n=[],onPressTabItem:i,selectedIndex:r,selectedColor:t,unselectedColor:f,direction:l})=>{const{theme:g}=h.useContext(Y),[y,c]=h.useState([]),s=h.useRef(new O.Value(0)).current,x=h.useRef(new O.Value(0)).current,m=h.useRef(null);h.useEffect(()=>{p(),w(r)},[r,y]);const p=()=>{var T,S;O.parallel([O.timing(s,{toValue:((T=y[r])==null?void 0:T.width)||0,duration:250,useNativeDriver:!1}),O.timing(x,{toValue:((S=y[r])==null?void 0:S.x)||0,duration:250,useNativeDriver:!1})]).start()},d=(T,S)=>{const{width:q,x:k}=T.nativeEvent.layout,I=[...y];I[S]={width:q,x:k},c(I)},w=T=>{var S,q;(q=m.current)==null||q.scrollTo({x:((S=y[T])==null?void 0:S.x)||0,animated:!0})},j=T=>{w(T),i==null||i(T)},V=T=>{const{item:S,index:q}=T,k=r===q;return e.jsx(R,{onLayout:I=>d(I,q),style:o.tabItemWrapper,children:e.jsx(ne,{onPressTabItem:()=>{j(q)},active:k,tab:S,selectedColor:t,unselectedColor:f,direction:l},`Tab View Item ${S.title}-${q}`)})};return e.jsxs(je,{ref:m,showsHorizontalScrollIndicator:!1,style:[o.tabBar,{borderColor:g.colors.border.default,backgroundColor:g.colors.background.surface}],horizontal:!0,children:[n.map((T,S)=>V({item:T,index:S})),e.jsx(O.View,{style:[o.indicator,{left:x,width:s,backgroundColor:t}]})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"ScrollableTabBar",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The title of the tab.
   */
  title: string;

  /**
   * Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path.
   */
  icon?: string;

  renderIcon?: (active: boolean) => ReactElement;

  /**
   * The main component or content to be displayed when this tab is active.
   */
  component: ReactElement;

  /**
   * Optional. If \`true\`, shows a dot indicator on the tab, often used to signal notifications or updates.
   */
  showDot?: boolean;

  /**
   * Optional. Specifies the size of the dot indicator, either 'small' or 'large'.
   */
  dotSize?: 'small' | 'large';

  badgeValue?: string | number;

  accessibilityLabel?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0},description:"The title of the tab."},{key:"icon",value:{name:"string",required:!1},description:"Optional. The icon associated with the tab, usually represented by a string referencing the icon's name or path."},{key:"renderIcon",value:{name:"signature",type:"function",raw:"(active: boolean) => ReactElement",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"ReactElement"}},required:!1}},{key:"component",value:{name:"ReactElement",required:!0},description:"The main component or content to be displayed when this tab is active."},{key:"showDot",value:{name:"boolean",required:!1},description:"Optional. If `true`, shows a dot indicator on the tab, often used to signal notifications or updates."},{key:"dotSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1},description:"Optional. Specifies the size of the dot indicator, either 'small' or 'large'."},{key:"badgeValue",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"accessibilityLabel",value:{name:"string",required:!1}}]}}],raw:"Tab[]"},description:"An array of Tab objects representing each tab in the tab bar.",defaultValue:{value:"[]",computed:!1}},selectedIndex:{required:!0,tsType:{name:"number"},description:"The index of the currently selected or active tab."},onPressTabItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Optional. A callback function that is triggered when a tab item is pressed, receiving the index of the tab as a parameter."},containerWidth:{required:!0,tsType:{name:"number"},description:"The width of the container in which the tab bar is placed. Useful for layout calculations."},scrollX:{required:!0,tsType:{name:"Animated.Value"},description:"Represents the horizontal scroll position in a scrollable tab bar."},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Optional. Specifies the layout direction for the tab's content, either in a row or column format."},selectedColor:{required:!1,tsType:{name:"string"},description:""},unselectedColor:{required:!1,tsType:{name:"string"},description:""}}};const Ee=h.forwardRef(({children:n,style:i,initialPage:r=0,onPageSelected:t,...f},l)=>{const g=h.useRef(null),[y,c]=h.useState(r),[s,x]=h.useState(Xe.get("window").width);h.useEffect(()=>{g.current&&s&&g.current.scrollTo({x:r*s,animated:!1})},[r,s]);const m=d=>{const{width:w}=d.nativeEvent.layout;w!==s&&x(w)},p=d=>{const w=d.nativeEvent.contentOffset.x,j=Math.round(w/s);j!==y&&(c(j),t&&t({nativeEvent:{position:j}}))};return h.useImperativeHandle(l,()=>({setPage:d=>{g.current&&(g.current.scrollTo({x:d*s,animated:!0}),c(d),t&&t({nativeEvent:{position:d}}))},setPageWithoutAnimation:d=>{g.current&&(g.current.scrollTo({x:d*s,animated:!1}),c(d),t&&t({nativeEvent:{position:d}}))}})),e.jsx(je,{horizontal:!0,pagingEnabled:!0,ref:g,onLayout:m,showsHorizontalScrollIndicator:!1,onMomentumScrollEnd:p,style:i,...f,children:_e.Children.map(n,(d,w)=>e.jsx(R,{style:{width:s},children:d},w))})});Ee.__docgenInfo={description:"",methods:[{name:"setPage",docblock:null,modifiers:[],params:[{name:"page",optional:!1,type:{name:"number"}}],returns:null},{name:"setPageWithoutAnimation",docblock:null,modifiers:[],params:[{name:"page",optional:!1,type:{name:"number"}}],returns:null}],displayName:"PagerView",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},initialPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onPageSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: {nativeEvent: {position: number}}) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{nativeEvent: {position: number}}",signature:{properties:[{key:"nativeEvent",value:{name:"signature",type:"object",raw:"{position: number}",signature:{properties:[{key:"position",value:{name:"number",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"void"}}},description:""}}};const bt=({scrollable:n=!1,tabs:i=[],onPressTabItem:r,type:t="default",initialPage:f=0,pagerProps:l,direction:g,selectedColor:y,unselectedColor:c,style:s},x)=>{const m=f>i.length-1?i.length-1:f,[p,d]=h.useState(m),[w,j]=h.useState(0),V=t==="card",T=h.useRef(null),S=h.useRef(new O.Value(m)),q=h.useRef([p]).current,{theme:k}=h.useContext(Y),I=v=>{var C;r==null||r(v),(C=T.current)==null||C.setPage(v),q.includes(v)||q.push(v),d(v)},L=v=>{j(v.nativeEvent.layout.width)},_=v=>{var W;const{position:C}=v.nativeEvent;q.includes(C)||q.push(C),d(C),(W=l==null?void 0:l.onPageSelected)==null||W.call(l,v)};let z=n?Ve:Ce;V&&(z=Oe);const Z=v=>{var ae;const{position:C,offset:W}=v.nativeEvent;S.current.setValue(C+W),(ae=l==null?void 0:l.onPageScroll)==null||ae.call(l,v)},D=h.useCallback((v,C)=>q.includes(C)?e.jsx(R,{children:v.component}):e.jsx(R,{}),[i]);return h.useImperativeHandle(x,()=>({goToPage:v=>{var C;v>=0&&v<=i.length&&((C=T.current)==null||C.setPage(v))}})),e.jsxs(R,{onLayout:L,style:[o.tabView,{flex:1}],children:[e.jsx(O.View,{style:s,children:e.jsx(z,{onPressTabItem:I,selectedIndex:p,tabs:i,containerWidth:w,scrollX:S.current,direction:g,selectedColor:y??k.colors.primary,unselectedColor:c??k.colors.text.default})}),e.jsx(Ee,{...l,onPageScroll:Z,ref:T,onPageSelected:_,style:o.pagerView,initialPage:m,children:i.map((v,C)=>D(v,C))})]})},ze=h.forwardRef(bt);ze.__docgenInfo={description:"",methods:[{name:"goToPage",docblock:null,modifiers:[],params:[{name:"page",optional:!1,type:{name:"number"}}],returns:null}],displayName:"TabView",props:{scrollable:{defaultValue:{value:"false",computed:!1},required:!1},tabs:{defaultValue:{value:"[]",computed:!1},required:!1},type:{defaultValue:{value:"'default'",computed:!1},required:!1},initialPage:{defaultValue:{value:"0",computed:!1},required:!1}}};const St={title:"Library/TabView",component:ze,parameters:{layout:"centered"},tags:["autodocs"]},Pe=[{title:"Tab 1",component:e.jsx("div",{children:"Content for Tab 1"})},{title:"Tab 2",component:e.jsx("div",{children:"Content for Tab 2"})},{title:"Tab 3",component:e.jsx("div",{children:"Content for Tab 3"})}],X={args:{tabs:Pe,onPressTabItem:E()}},M={args:{tabs:[{title:"Home",icon:"home",component:e.jsx("div",{children:"Home Content"})},{title:"Profile",icon:"profile",component:e.jsx("div",{children:"Profile Content"})},{title:"Settings",icon:"settings",component:e.jsx("div",{children:"Settings Content"})}],onPressTabItem:E()}},B={args:{tabs:Array.from({length:10},(n,i)=>({title:`Tab ${i+1}`,component:e.jsxs("div",{children:["Content for Tab ",i+1]})})),scrollable:!0,onPressTabItem:E()}},A={args:{tabs:Pe,type:"card",onPressTabItem:E()}},H={args:{tabs:[{title:"Tab 1",component:e.jsx("div",{children:"Content for Tab 1"}),showDot:!0,dotSize:"small"},{title:"Tab 2",component:e.jsx("div",{children:"Content for Tab 2"}),showDot:!0,dotSize:"large"},{title:"Tab 3",component:e.jsx("div",{children:"Content for Tab 3"})}],onPressTabItem:E()}},N={args:{tabs:[{title:"Tab 1",component:e.jsx("div",{children:"Content for Tab 1"}),badgeValue:"3"},{title:"Tab 2",component:e.jsx("div",{children:"Content for Tab 2"}),badgeValue:"99+"},{title:"Tab 3",component:e.jsx("div",{children:"Content for Tab 3"})}],onPressTabItem:E()}};var le,ce,de;X.parameters={...X.parameters,docs:{...(le=X.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    onPressTabItem: fn()
  }
}`,...(de=(ce=X.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    tabs: [{
      title: 'Home',
      icon: 'home',
      component: <div>Home Content</div>
    }, {
      title: 'Profile',
      icon: 'profile',
      component: <div>Profile Content</div>
    }, {
      title: 'Settings',
      icon: 'settings',
      component: <div>Settings Content</div>
    }],
    onPressTabItem: fn()
  }
}`,...(pe=(me=M.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,fe,be;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 10
    }, (_, i) => ({
      title: \`Tab \${i + 1}\`,
      component: <div>Content for Tab {i + 1}</div>
    })),
    scrollable: true,
    onPressTabItem: fn()
  }
}`,...(be=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ge,ye,Te;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    type: 'card',
    onPressTabItem: fn()
  }
}`,...(Te=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var ve,we,Se;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    tabs: [{
      title: 'Tab 1',
      component: <div>Content for Tab 1</div>,
      showDot: true,
      dotSize: 'small'
    }, {
      title: 'Tab 2',
      component: <div>Content for Tab 2</div>,
      showDot: true,
      dotSize: 'large'
    }, {
      title: 'Tab 3',
      component: <div>Content for Tab 3</div>
    }],
    onPressTabItem: fn()
  }
}`,...(Se=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var xe,qe,Re;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    tabs: [{
      title: 'Tab 1',
      component: <div>Content for Tab 1</div>,
      badgeValue: '3'
    }, {
      title: 'Tab 2',
      component: <div>Content for Tab 2</div>,
      badgeValue: '99+'
    }, {
      title: 'Tab 3',
      component: <div>Content for Tab 3</div>
    }],
    onPressTabItem: fn()
  }
}`,...(Re=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Re.source}}};const xt=["Default","WithIcons","Scrollable","CardType","WithDots","WithBadges"];export{A as CardType,X as Default,B as Scrollable,N as WithBadges,H as WithDots,M as WithIcons,xt as __namedExportsOrder,St as default};
