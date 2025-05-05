import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{fn as _}from"./index-BgJgh-x_.js";import{r as f}from"./index-DI7CEG0L.js";import{r as h,s as E,F as V,u as M,D as R,M as z,T as y}from"./styles-CyDUY6mG.js";import{s as K,V as k}from"./index-BzmpT3sc.js";const v=K.create({flatList:{backgroundColor:"white",borderRadius:E.S,paddingHorizontal:h.M},item:{paddingVertical:h.M,flexDirection:"row",justifyContent:"space-between"}}),O=({data:l=[],query:s="",onPressItem:u,maxItemShow:j=5,searchKey:C="title"})=>{const[q,m]=f.useState(!1);f.useEffect(()=>(m(!1),c(s),()=>{}),[s]);const d=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),A=e=>e.replace(/[\\/*+?().{}[\]^$|]/g,""),c=e=>{const t=A(e),n=d(t.trim().toLowerCase()),g=new RegExp(n,"i");return l.filter(r=>typeof r=="string"?g.test(d(r.toLowerCase())):g.test(d(r==null?void 0:r[C].toLowerCase()))).slice(0,j)},D=(e,t)=>{m(!0),u==null||u(e,t)},L=({item:e})=>{const t=typeof e=="string"?e:e.title,n=typeof e=="string"?null:e.value;return a.jsxs(z,{onPress:()=>D(t,n),style:v.item,children:[a.jsx(y,{numberOfLines:1,typography:"body_default_regular",children:t}),!!n&&a.jsx(y,{numberOfLines:1,typography:"body_default_regular",children:n})]})},p=c(s);return p.length===0||s.length===0||q?null:a.jsx(V,{keyExtractor:(e,t)=>t.toString(),ItemSeparatorComponent:()=>a.jsx(R,{}),style:[v.flatList,M.Light],data:p,renderItem:L})};O.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | SuggestItem",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  title: string; // The display text for a suggestion item.
  value: string; // The underlying value or identifier for this item.
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"Array<string | SuggestItem>"},description:"An array of strings or `SuggestItem` objects that will be used to create the\nautocomplete dropdown list.",defaultValue:{value:"[]",computed:!1}},query:{required:!1,tsType:{name:"string"},description:`The current text in the autocomplete input field. This is used to determine
which suggestions to display.`,defaultValue:{value:"''",computed:!1}},maxItemShow:{required:!1,tsType:{name:"number"},description:`Optional. The maximum number of items to display in the dropdown list. If not
provided, all matching items will be shown.`,defaultValue:{value:"5",computed:!1}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactElement"}}},description:`Optional. A function to render the UI of each item in the dropdown list.
This is useful for adding custom styling or formatting to the displayed items.`},onPressItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: string, value: null | string | undefined) => void",signature:{arguments:[{type:{name:"string"},name:"item"},{type:{name:"union",raw:"null | string | undefined",elements:[{name:"null"},{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:`A function that is called when a user selects an item from the autocomplete list.
It receives two arguments: the display text of the selected item and its corresponding value.`},searchKey:{required:!1,tsType:{name:"union",raw:"'title' | 'value'",elements:[{name:"literal",value:"'title'"},{name:"literal",value:"'value'"}]},description:"Indicates whether the 'title' or 'value' of a `SuggestItem` should be used for\nsearching. This affects which items are filtered into the dropdown list as the\nuser types in the input field.",defaultValue:{value:"'title'",computed:!1}}}};const U={title:"Library/AutoComplete",component:O,parameters:{layout:"centered"},tags:["autodocs"],args:{onPressItem:_()},decorators:[l=>a.jsx(k,{style:{minWidth:375},children:a.jsx(l,{})})]},i={args:{data:["Apple","Banana","Orange","Mango","Pineapple"],query:"a",maxItemShow:5,searchKey:"title"}},o={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"",maxItemShow:3,searchKey:"title"}};var w,x,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
    query: 'a',
    maxItemShow: 5,
    searchKey: 'title'
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,I,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const $=["Default","WithCustomData"];export{i as Default,o as WithCustomData,$ as __namedExportsOrder,U as default};
