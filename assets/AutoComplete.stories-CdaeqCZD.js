import{fn as z}from"./index-BgJgh-x_.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DI7CEG0L.js";import{i as g,R as I,v as R,w as T,M as A,T as h}from"./styles-DZKIi-Hd.js";import{D as K}from"./index-Bs8cPFM2.js";import{s as k}from"./index-BzmpT3sc.js";const y=k.create({flatList:{backgroundColor:"white",borderRadius:I.S,paddingHorizontal:g.M},item:{paddingVertical:g.M,flexDirection:"row",justifyContent:"space-between"}}),B=({data:D=[],query:o="",onPressItem:l,maxItemShow:L=5,searchKey:b="title"})=>{const[j,p]=f.useState(!1);f.useEffect(()=>(p(!1),u(o),()=>{}),[o]);const c=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),_=e=>e.replace(/[\\/*+?().{}[\]^$|]/g,""),u=e=>{const t=_(e),a=c(t.trim().toLowerCase()),m=new RegExp(a,"i");return D.filter(r=>typeof r=="string"?m.test(c(r.toLowerCase())):m.test(c(r==null?void 0:r[b].toLowerCase()))).slice(0,L)},E=(e,t)=>{p(!0),l==null||l(e,t)},M=({item:e})=>{const t=typeof e=="string"?e:e.title,a=typeof e=="string"?null:e.value;return n.jsxs(A,{onPress:()=>E(t,a),style:y.item,children:[n.jsx(h,{numberOfLines:1,typography:"body_default_regular",children:t}),!!a&&n.jsx(h,{numberOfLines:1,typography:"body_default_regular",children:a})]})},d=u(o);return d.length===0||o.length===0||j?null:n.jsx(R,{keyExtractor:(e,t)=>t.toString(),ItemSeparatorComponent:()=>n.jsx(K,{}),style:[y.flatList,T.Light],data:d,renderItem:M})},G={title:"Library/AutoComplete",component:B,parameters:{layout:"centered"},tags:["autodocs"],args:{onPressItem:z()}},s={args:{data:["Apple","Banana","Orange","Mango","Pineapple"],query:"",maxItemShow:5,searchKey:"title"}},i={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"",maxItemShow:3,searchKey:"title"}};var x,S,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
    query: '',
    maxItemShow: 5,
    searchKey: 'title'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,O,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(O=i.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const J=["Default","WithCustomData"];export{s as Default,i as WithCustomData,J as __namedExportsOrder,G as default};
