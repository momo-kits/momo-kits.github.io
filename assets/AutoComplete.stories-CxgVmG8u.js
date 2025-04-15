import{fn as _}from"./index-BgJgh-x_.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DI7CEG0L.js";import{r as f,s as E,F as M,u as R,D as z,M as K,T as h}from"./styles-CyDUY6mG.js";import{s as V}from"./index-BzmpT3sc.js";const y=V.create({flatList:{backgroundColor:"white",borderRadius:E.S,paddingHorizontal:f.M},item:{paddingVertical:f.M,flexDirection:"row",justifyContent:"space-between"}}),b=({data:O=[],query:s="",onPressItem:l,maxItemShow:C=5,searchKey:j="title"})=>{const[q,d]=g.useState(!1);g.useEffect(()=>(d(!1),m(s),()=>{}),[s]);const u=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),A=e=>e.replace(/[\\/*+?().{}[\]^$|]/g,""),m=e=>{const t=A(e),a=u(t.trim().toLowerCase()),c=new RegExp(a,"i");return O.filter(n=>typeof n=="string"?c.test(u(n.toLowerCase())):c.test(u(n==null?void 0:n[j].toLowerCase()))).slice(0,C)},D=(e,t)=>{d(!0),l==null||l(e,t)},L=({item:e})=>{const t=typeof e=="string"?e:e.title,a=typeof e=="string"?null:e.value;return r.jsxs(K,{onPress:()=>D(t,a),style:y.item,children:[r.jsx(h,{numberOfLines:1,typography:"body_default_regular",children:t}),!!a&&r.jsx(h,{numberOfLines:1,typography:"body_default_regular",children:a})]})},p=m(s);return p.length===0||s.length===0||q?null:r.jsx(M,{keyExtractor:(e,t)=>t.toString(),ItemSeparatorComponent:()=>r.jsx(z,{}),style:[y.flatList,R.Light],data:p,renderItem:L})};b.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | SuggestItem",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  title: string; // The display text for a suggestion item.
  value: string; // The underlying value or identifier for this item.
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"Array<string | SuggestItem>"},description:"An array of strings or `SuggestItem` objects that will be used to create the\nautocomplete dropdown list.",defaultValue:{value:"[]",computed:!1}},query:{required:!1,tsType:{name:"string"},description:`The current text in the autocomplete input field. This is used to determine
which suggestions to display.`,defaultValue:{value:"''",computed:!1}},maxItemShow:{required:!1,tsType:{name:"number"},description:`Optional. The maximum number of items to display in the dropdown list. If not
provided, all matching items will be shown.`,defaultValue:{value:"5",computed:!1}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"ReactElement"}}},description:`Optional. A function to render the UI of each item in the dropdown list.
This is useful for adding custom styling or formatting to the displayed items.`},onPressItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: string, value: null | string | undefined) => void",signature:{arguments:[{type:{name:"string"},name:"item"},{type:{name:"union",raw:"null | string | undefined",elements:[{name:"null"},{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:`A function that is called when a user selects an item from the autocomplete list.
It receives two arguments: the display text of the selected item and its corresponding value.`},searchKey:{required:!1,tsType:{name:"union",raw:"'title' | 'value'",elements:[{name:"literal",value:"'title'"},{name:"literal",value:"'value'"}]},description:"Indicates whether the 'title' or 'value' of a `SuggestItem` should be used for\nsearching. This affects which items are filtered into the dropdown list as the\nuser types in the input field.",defaultValue:{value:"'title'",computed:!1}}}};const P={title:"Library/AutoComplete",component:b,parameters:{layout:"centered"},tags:["autodocs"],args:{onPressItem:_()}},i={args:{data:["Apple","Banana","Orange","Mango","Pineapple"],query:"",maxItemShow:5,searchKey:"title"}},o={args:{data:[{title:"Option 1",value:"1"},{title:"Option 2",value:"2"},{title:"Option 3",value:"3"}],query:"",maxItemShow:3,searchKey:"title"}};var v,w,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
    query: '',
    maxItemShow: 5,
    searchKey: 'title'
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,T,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const U=["Default","WithCustomData"];export{i as Default,o as WithCustomData,U as __namedExportsOrder,P as default};
