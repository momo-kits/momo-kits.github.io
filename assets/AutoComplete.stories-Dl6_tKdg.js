import{fn as A}from"./index-AyJqhRyE.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CPl6p-nG.js";import{y as B,r as v,s as I,H as R,J as k,D as F,F as H,T as O}from"./index-D9H9ZqTU.js";const S=B.create({flatList:{backgroundColor:"white",borderRadius:I.S,paddingHorizontal:v.M},item:{paddingVertical:v.M,flexDirection:"row",justifyContent:"space-between"}}),V=({data:m=[],query:s="",onPressItem:c,maxItemShow:g=5,searchKey:y="title"})=>{const[T,f]=d.useState(!1),u=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),z=e=>e.replace(/[\\/*+?().{}[\]^$|]/g,""),p=d.useCallback(e=>{const t=z(e),a=u(t.trim().toLowerCase()),x=new RegExp(a,"i");return m.filter(r=>typeof r=="string"?x.test(u(r.toLowerCase())):x.test(u(r==null?void 0:r[y].toLowerCase()))).slice(0,g)},[m,g,y]);d.useEffect(()=>(f(!1),p(s),()=>{}),[s,p]);const K=(e,t)=>{f(!0),c==null||c(e,t)},q=({item:e})=>{const t=typeof e=="string"?e:e.title,a=typeof e=="string"?null:e.value;return n.jsxs(H,{onPress:()=>K(t,a),style:S.item,children:[n.jsx(O,{numberOfLines:1,typography:"body_default_regular",children:t}),!!a&&n.jsx(O,{numberOfLines:1,typography:"body_default_regular",children:a})]})},h=p(s);return h.length===0||s.length===0||T?null:n.jsx(R,{keyExtractor:(e,t)=>t.toString(),ItemSeparatorComponent:()=>n.jsx(F,{}),style:[S.flatList,k.Light],data:h,renderItem:q})},G={title:"Library/AutoComplete",component:V,parameters:{layout:"centered",docs:{description:{component:"The list is empty until `query` has text. Shows 5 items by default; change it with `maxItemShow`."}}},tags:["autodocs"],args:{onPressItem:A()}},o={args:{data:["Apple","Banana","Orange","Mango","Pineapple","Papaya"],query:"a",searchKey:"title"}},l={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"option",maxItemShow:2,searchKey:"title"}},i={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"2",searchKey:"value"}};var w,b,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Papaya'],
    query: 'a',
    searchKey: 'title'
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,L,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    query: 'option',
    maxItemShow: 2,
    searchKey: 'title'
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,E,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    query: '2',
    searchKey: 'value'
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const Q=["Default","WithCustomData","SearchByValue"];export{o as Default,i as SearchByValue,l as WithCustomData,Q as __namedExportsOrder,G as default};
