(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[89097],{84657:(e,t,n)=>{"use strict";n.d(t,{A:()=>R});var a=n(49397),r=n(58168),l=n(98587),i=n(20462),o=n(14155),u=n(11854),s=n(88206),d=n(83253),g=n(83640);const m=s.A.create({controlsContainer:{flexDirection:"row",justifyContent:d.A.isRTL?"flex-end":"flex-start",alignItems:"center"},highThumbContainer:{position:"absolute"},railsContainer:Object.assign({},s.A.absoluteFillObject,{flexDirection:"row",alignItems:"center"}),labelFixedContainer:{alignItems:d.A.isRTL?"flex-end":"flex-start"},labelFloatingContainer:{position:"absolute",left:0,right:0,alignItems:d.A.isRTL?"flex-end":"flex-start"},touchableArea:Object.assign({},s.A.absoluteFillObject),label:{backgroundColor:g.Jy.black_01,paddingVertical:g.Kz.XXS,paddingHorizontal:g.Kz.XS,borderRadius:g.TI.XS}});var c=function(e,t,n){return Math.min(Math.max(e,t),n)},p=function(e,t){var n=(0,a.useState)(Number.NaN),l=n[0],i=n[1];(0,a.useImperativeHandle)(t,(function(){return{setValue:u}}));var u=function(e){i(e)};return a.createElement(o.A,(0,r.A)({},e,{style:[m.label,g.Vo.Light]}),a.createElement(g.EY,{typography:"label_s_medium"},l))};const h=(0,a.forwardRef)(p);var y=function(e,t){return(0,a.useCallback)((function(n){var a=n.nativeEvent.layout.width;e.current!==a&&(e.current=a,t&&t(a))}),[t,e])},f=["min","max","minRange","step","low","high","floatingLabel","allowLabelOverflow","disableRange","disabledHigh","disabledLow","onValueChanged","onSliderTouchStart","onSliderTouchEnd"],b=function(){return!0},v=function(){return!1},N=(0,a.memo)((function(e){var t=e.min,n=e.max,s=e.minRange,d=void 0===s?0:s,p=e.step,N=e.low,w=e.high,C=e.floatingLabel,A=void 0!==C&&C,R=e.allowLabelOverflow,S=void 0!==R&&R,x=e.disableRange,E=void 0!==x&&x,L=e.disabledHigh,P=void 0!==L&&L,T=e.disabledLow,k=void 0!==T&&T,V=e.onValueChanged,I=e.onSliderTouchStart,M=e.onSliderTouchEnd,B=(0,l.A)(e,f),O=(0,a.useContext)(g.gD).theme,D=function(e,t,n,r,l){var i=void 0===e?n:c(e,n,r),o=void 0===t?r:c(t,n,r),u=(0,a.useRef)({low:i,high:o,step:l,min:i,max:o}),s=u.current,d=s.low,g=s.high,m={lowPrev:d,highPrev:g},p=c(void 0===e?d:e,n,r),h=c(void 0===t?g:t,n,r);return Object.assign(u.current,{low:p,high:h,min:n,max:r}),{inPropsRef:u,inPropsRefPrev:m,setLow:function(e){return u.current.low=e},setHigh:function(e){return u.current.high=e}}}(N,E?n:w,t,n,p),X=D.inPropsRef,F=D.inPropsRefPrev,H=D.setLow,_=D.setHigh,j=(0,a.useRef)(new i.A.Value(0)),z=(0,a.useRef)(new i.A.Value(0)),U=(0,a.useRef)(new i.A.Value(0)).current,K=j.current,q=z.current,G=(0,a.useRef)({isLow:!0,lastValue:0,lastPosition:0}),J=(0,a.useState)(!1),W=J[0],Y=J[1],Q=(0,a.useRef)(0),Z=(0,a.useState)(0),$=Z[0],ee=Z[1],te=function(e,t,n,r){var l=(0,a.useRef)(new i.A.Value(0)).current,o=(0,a.useRef)(new i.A.Value(0)).current,u=(0,a.useCallback)((function(){var a=e.current,i=a.low,u=a.high,s=a.min,d=a.max,g=t.current,m=(d-s)/(g-n),c=(i-s)/m,p=(d-u)/m;l.setValue(r?0:c),o.setValue(r?g-n-c:p)}),[e,t,r,n,l,o]);return[(0,a.useMemo)((function(){return{position:"absolute",left:l,right:o}}),[l,o]),u]}(X,Q,$,E),ne=te[0],ae=te[1],re=(0,a.useCallback)((function(){var e=Q.current;if($&&e){var a=X.current,r=a.low,l=a.high;if(!E){var i=z.current,o=(l-t)/(n-t)*(e-$);i.setValue(o)}var u=j.current,s=(r-t)/(n-t)*(e-$);u.setValue(s),"function"==typeof ae&&ae(),null==V||V(r,l,!1)}}),[E,X,n,t,V,$,ae]);(0,a.useEffect)((function(){var e=F.lowPrev,t=F.highPrev;(void 0!==N&&N!==e||void 0!==w&&w!==t)&&re()}),[w,F.lowPrev,F.highPrev,N]),(0,a.useEffect)((function(){re()}),[re]);var le=y(Q,re),ie=(0,a.useCallback)((function(e){var t=e.nativeEvent.layout.width;$!==t&&ee(t)}),[$]),oe=(0,a.useMemo)((function(){return{transform:[{translateX:K}]}}),[K]),ue=(0,a.useMemo)((function(){return E?null:[m.highThumbContainer,{transform:[{translateX:q}]}]}),[E,q]),se=(0,a.useMemo)((function(){return[m.railsContainer,{marginHorizontal:$/2}]}),[$]),de=function(e,t,n,r,l,o){var u=(0,a.useRef)(new i.A.Value(0)),s=(0,a.useRef)(0),d=(0,a.useRef)(null),g=u.current,m=(0,a.useCallback)((function(n,a){var i;if(!(t.current.isLow&&l||!t.current.isLow&&o)){var g=s.current,m=e.current,p=n-g/2;u.current.setValue(r?p:c(p,0,m-g)),null==(i=d.current)||i.setValue(a)}}),[s,e,r,l,o]),p=y(s,(function(){m(t.current.lastPosition,t.current.lastValue)})),f={transform:[{translateX:g}]},b=n&&(t.current.isLow&&!l||!t.current.isLow&&!o);return[a.createElement(i.A.View,{style:[f,{opacity:b?1:0}]},a.createElement(h,{onLayout:p,ref:d})),m]}(Q,G,W,S,k,P),ge=de[0],me=de[1],ce=function(e){var t="low"===e&&k||"high"===e&&P?O.colors.text.disable:O.colors.primary;return a.createElement(o.A,{style:[g.Vo.Light,{width:20,height:20,borderRadius:g.TI.M,borderWidth:4,borderColor:O.colors.background.surface,backgroundColor:t}]})},pe=ce("low"),he=ce("high"),ye=function(e){var t=(0,a.useState)(0),n=t[0],r=t[1],l=(0,a.useCallback)((function(e){var t=e.nativeEvent.layout.height;r(t)}),[]),i=e?-(n+g.Kz.XS):g.Kz.XS;return{style:[e?m.labelFloatingContainer:m.labelFixedContainer,{top:i}],onLayout:l}}(A),fe=(0,a.useMemo)((function(){return u.A.create({onStartShouldSetPanResponderCapture:v,onMoveShouldSetPanResponderCapture:v,onPanResponderTerminationRequest:v,onPanResponderTerminate:b,onShouldBlockNativeResponder:b,onMoveShouldSetPanResponder:function(e,t){return Math.abs(t.dx)>2*Math.abs(t.dy)},onPanResponderGrant:function(e,t){var n=e.nativeEvent;if(!(t.numberActiveTouches>1)){Y(!0);var a=j.current,r=z.current,l=n.locationX,i=n.pageX-l,o=X.current,u=o.low,s=o.high,g=o.min,m=o.max;null==I||I(u,s);var p=Q.current,h=E||function(e,t,n){return t===n?e<t:Math.abs(e-t)<Math.abs(e-n)}(l,$/2+(u-g)/(m-g)*(p-$),$/2+(s-g)/(m-g)*(p-$));if(G.current.isLow=h,!(h&&k||!h&&P)){var y=function(e){var t=X.current,n=t.low,l=t.high,i=t.min,o=t.max,u=t.step,s=h?i:n+d,g=h?l-d:o,m=c(function(e,t,n,a,r,l){var i=l/(r-a),o=(e-n/2)/(t-n),u=o%i;return o-=u,u/i>=.5&&(o+=i),c(a+Math.round(o/i)*l,a,r)}(e,p,$,i,o,u),s,g);if(G.current.lastValue!==m){var y=(m-i)/(o-i)*(p-$);G.current.lastValue=m,G.current.lastPosition=y+$/2,(h?a:r).setValue(y),null==V||V(h?m:n,h?l:m,!0),(h?H:_)(m),me&&"function"==typeof me&&me(G.current.lastPosition,m),"function"==typeof ae&&ae()}};y(l),U.removeAllListeners(),U.addListener((function(e){var t=e.value;y(t-i)}))}}},onPanResponderMove:function(e,t){(G.current.isLow?k:P)||i.A.event([null,{moveX:U}],{useNativeDriver:!1})(e,t)},onPanResponderRelease:function(){Y(!1);var e=X.current,t=e.low,n=e.high;G.current.isLow&&k||!G.current.isLow&&P||null==M||M(t,n)}})}),[U,X,$,E,V,P,k,H,_,me,ae]),be=fe.panHandlers,ve=function(e){return a.createElement(o.A,{style:{width:"100%",height:4,borderRadius:g.TI.L,backgroundColor:e}})},Ne=P&&k?O.colors.text.disable:O.colors.primary;return a.createElement(o.A,B,a.createElement(o.A,ye,ge),a.createElement(o.A,{onLayout:le,style:m.controlsContainer},a.createElement(o.A,{style:se},ve(O.colors.background.default),a.createElement(i.A.View,{style:ne},ve(Ne))),a.createElement(i.A.View,{style:oe,onLayout:ie},pe),!E&&a.createElement(i.A.View,{style:ue},he),a.createElement(o.A,(0,r.A)({},be,{style:m.touchableArea,collapsable:!1}))))})),w=n(64775),C=n(44319),A=n(70172);const R=function(){var e=(0,C.A)({componentName:"Slider",props:{min:{value:0,type:A.B.Number,description:"Minimum value for the slider."},max:{value:100,type:A.B.Number,description:"Maximum value for the slider."},minRange:{value:void 0,type:A.B.Number,description:"Minimum range between low and high values."},step:{value:1,type:A.B.Number,description:"Step interval for the slider."},low:{value:void 0,type:A.B.Number,description:"Initial lower value for the range slider."},high:{value:void 0,type:A.B.Number,description:"Initial upper value for the range slider."},allowLabelOverflow:{value:!1,type:A.B.Boolean,description:"If true, allows the label to extend beyond the slider width."},disableRange:{value:!1,type:A.B.Boolean,description:"If true, disables the range functionality."},disabledHigh:{value:!1,type:A.B.Boolean,description:"If true, disables the high handle."},disabledLow:{value:!1,type:A.B.Boolean,description:"If true, disables the low handle."},floatingLabel:{value:!1,type:A.B.Boolean,description:"If true, displays floating labels above handles."},onValueChanged:{value:"(low, high, byUser) => console.log(low, high, byUser)",type:A.B.Function,description:"Callback for when the slider value changes."},onSliderTouchStart:{value:"(low, high) => console.log('Touch Start:', low, high)",type:A.B.Function,description:"Callback for when the slider is touched."},onSliderTouchEnd:{value:"(low, high) => console.log('Touch End:', low, high)",type:A.B.Function,description:"Callback for when the slider touch ends."}},scope:{Slider:N},imports:{"@momo-kits/slider":{named:["Slider"]}}});return a.createElement(a.Fragment,null,a.createElement(w.A,{params:e}))}},64775:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(58168),r=n(49397),l=n(78478),i=n(1905),o=n(86183),u=n(19080),s=n(29013),d=n(74177),g=n(25674);const m=function(e){var t=e.params;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative",paddingLeft:16,paddingRight:16,fontFamily:"SFProText"}},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(u.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.A,t.knobProps),r.createElement(d.A,t.editorProps),r.createElement(u.A,t.errorProps),r.createElement(g.w,t.actions))}))}},57785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(58168),r=n(98587),l=(n(49397),n(77611)),i=n(84657),o=["components"],u={id:"slider",title:"Slider"},s=void 0,d={unversionedId:"components/slider",id:"version-0.102.4/components/slider",title:"Slider",description:"Playground",source:"@site/versioned_docs/version-0.102.4/components/Slider.mdx",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/0.102.4/components/slider",draft:!1,editUrl:"https://github.com/versioned_docs/version-0.102.4/components/Slider.mdx",tags:[],version:"0.102.4",frontMatter:{id:"slider",title:"Slider"},sidebar:"version-0.102.4",previous:{title:"Information",permalink:"/docs/0.102.4/components/information"},next:{title:"Title",permalink:"/docs/0.102.4/components/title"}},g={},m=[{value:"Playground",id:"playground",level:2},{value:"Props",id:"props",level:2}],c={toc:m},p="wrapper";function h(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(i.A,{mdxType:"Play"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"allowLabelOverflow")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", allows the label to extend beyond the width of the Slider component itself,rather than being clipped at the component boundaries. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disableRange")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", disables the range functionality of the slider, turning it into a regularsingle-value slider. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabledHigh")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the 'high' handle of the slider will be disabled and cannot be moved.Useful for setting a maximum limit that users cannot increase. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabledLow")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the 'low' handle of the slider will be disabled and cannot be moved.Useful for setting a minimum limit that users cannot decrease. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"floatingLabel")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", labels will be displayed in a floating manner above the slider handles,typically used to display the current value. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"high")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Represents the initial upper value of the range when used as a range slider.This value is part of the selected range, between 'low' and 'max'.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"low")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Represents the initial lower value of the range when the component is used as a range slider.This value is part of the selected range, between 'min' and 'high'.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"max")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Specifies the maximum value allowed for selection. This value sets the upper bound for the component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"min")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Specifies the minimum value permitted for selection in the slider. This value sets the lowerbound for the component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"minRange")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. Defines the minimum permitted range between the low and high values of the slider.Particularly useful when 'low' and 'high' values both exist, ensuring a certain spread between them.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onSliderTouchEnd")),(0,l.yg)("td",{parentName:"tr",align:null},"((low: number, high: number) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the user releases the slider's draggable area.It receives the current low and high values of the slider.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onSliderTouchStart")),(0,l.yg)("td",{parentName:"tr",align:null},"((low: number, high: number) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the user starts touching the slider's draggable area.It receives the current low and high values of the slider.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onValueChanged")),(0,l.yg)("td",{parentName:"tr",align:null},"((low: number, high: number, byUser: boolean) => void)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. A callback function triggered when the slider value changes, either by the user or programmatically.It receives the new low and high values of the slider, as well as a boolean indicating if the change was made by the user.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"step")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Specifies the interval between individual step values. The slider's handle will move only in these increments."))))))}h.isMDXComponent=!0},52352:()=>{},18411:()=>{}}]);