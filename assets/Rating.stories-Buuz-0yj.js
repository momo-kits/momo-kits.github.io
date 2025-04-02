import{fn as r}from"./index-BgJgh-x_.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{M as A,I as E,f as p}from"./styles-Dd_0X69m.js";import"./index-DI7CEG0L.js";import{V as F,s as N}from"./index-BzmpT3sc.js";const q=({rating:c,numOfStars:l,onRatingChange:g,size:f,style:D},I)=>{const e=typeof c=="string"?parseFloat(c.replace(",",".")):c,V=typeof l=="string"?parseFloat(l):l,x=n=>n<Math.floor(e)?"reaction_star_full":n===Math.floor(e)&&e%1!==0?"reaction_star_half":"reaction_star_non",L=n=>n<Math.floor(e)?p.yellow_03:n===Math.floor(e)&&e%1!==0?p.yellow_03:p.black_07,k=f==="small"?16:f==="medium"?20:24;return u.jsx(F,{style:[D,P.container],children:Array.from({length:V},(n,a)=>u.jsx(A,{onPress:()=>g&&g(a+1),disabled:!g,...I,children:u.jsx(E,{source:x(a),size:k,color:L(a)})},a))})},P=N.create({container:{flexDirection:"row"}});q.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{numOfStars:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"`numOfStars`: Represents the number of stars in the Rating component."},rating:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"`rating`: Represents the rating value of the Rating component."},onRatingChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(rating: number) => void",signature:{arguments:[{type:{name:"number"},name:"rating"}],return:{name:"void"}}},description:"`onRatingChange`: A callback function that is called when the rating value of the Rating component changes.\nIt is triggered when the user interacts with the Rating component."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"`size`: Optional. Represents the size of the Rating component.\nDefaults to `large` is 24 if not provided."}},composes:["TouchableOpacityProps"]};const K={title:"Library/Rating",component:q,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{rating:3.5,numOfStars:5,onRatingChange:r()}},s={args:{rating:4,numOfStars:5,size:"small",onRatingChange:r()}},o={args:{rating:3,numOfStars:5,size:"medium",onRatingChange:r()}},i={args:{rating:5,numOfStars:5,size:"large",onRatingChange:r()}},m={args:{rating:"4.5",numOfStars:"5",onRatingChange:r()}};var d,h,R;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    rating: 3.5,
    numOfStars: 5,
    onRatingChange: fn()
  }
}`,...(R=(h=t.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var S,y,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    rating: 4,
    numOfStars: 5,
    size: 'small',
    onRatingChange: fn()
  }
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var _,b,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    rating: 3,
    numOfStars: 5,
    size: 'medium',
    onRatingChange: fn()
  }
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var C,w,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rating: 5,
    numOfStars: 5,
    size: 'large',
    onRatingChange: fn()
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var M,T,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    rating: '4.5',
    numOfStars: '5',
    onRatingChange: fn()
  }
}`,...(j=(T=m.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Q=["Default","Small","Medium","Large","WithStringValues"];export{t as Default,i as Large,o as Medium,s as Small,m as WithStringValues,Q as __namedExportsOrder,K as default};
