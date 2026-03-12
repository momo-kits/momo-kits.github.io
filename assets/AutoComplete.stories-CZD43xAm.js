import{fn as M}from"./index-BgJgh-x_.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DI7CEG0L.js";import{q as x,r as T,y as A,u as I,T as S}from"./index-BmJxoLT2.js";import{D as R}from"./index-D0He8eRi.js";import{s as k}from"./index-aTsR8gS4.js";import{F}from"./Animated-CU-m9YKj.js";const v=k.create({flatList:{backgroundColor:"white",borderRadius:T.S,paddingHorizontal:x.M},item:{paddingVertical:x.M,flexDirection:"row",justifyContent:"space-between"}}),K=({data:d=[],query:o="",onPressItem:i,maxItemShow:m=5,searchKey:f="title"})=>{const[j,g]=u.useState(!1),c=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),_=e=>e.replace(/[\\/*+?().{}[\]^$|]/g,""),p=u.useCallback(e=>{const t=_(e),a=c(t.trim().toLowerCase()),h=new RegExp(a,"i");return d.filter(r=>typeof r=="string"?h.test(c(r.toLowerCase())):h.test(c(r==null?void 0:r[f].toLowerCase()))).slice(0,m)},[d,m,f]);u.useEffect(()=>(g(!1),p(o),()=>{}),[o,p]);const E=(e,t)=>{g(!0),i==null||i(e,t)},z=({item:e})=>{const t=typeof e=="string"?e:e.title,a=typeof e=="string"?null:e.value;return n.jsxs(I,{onPress:()=>E(t,a),style:v.item,children:[n.jsx(S,{numberOfLines:1,typography:"body_default_regular",children:t}),!!a&&n.jsx(S,{numberOfLines:1,typography:"body_default_regular",children:a})]})},y=p(o);return y.length===0||o.length===0||j?null:n.jsx(F,{keyExtractor:(e,t)=>t.toString(),ItemSeparatorComponent:()=>n.jsx(R,{}),style:[v.flatList,A.Light],data:y,renderItem:z})},J={title:"Library/AutoComplete",component:K,parameters:{layout:"centered"},tags:["autodocs"],args:{onPressItem:M()}},s={args:{data:["Apple","Banana","Orange","Mango","Pineapple"],query:"",maxItemShow:5,searchKey:"title"}},l={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"",maxItemShow:3,searchKey:"title"}};var O,w,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
    query: '',
    maxItemShow: 5,
    searchKey: 'title'
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,D,L;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: [{
      title: 'Option 1',
      value: '1'
    }, {
      title: 'Option 2',
      value: '2'
    }, {
      title: 'Option 3',
      value: '3'
    }],
    query: '',
    maxItemShow: 3,
    searchKey: 'title'
  }
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const P=["Default","WithCustomData"];export{s as Default,l as WithCustomData,P as __namedExportsOrder,J as default};
