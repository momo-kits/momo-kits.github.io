import{fn as e}from"./index-BgJgh-x_.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{M as k,I as A,C as f}from"./styles-DZKIi-Hd.js";import"./index-DI7CEG0L.js";import{V as N,s as P}from"./index-BzmpT3sc.js";const T=({rating:m,numOfStars:l,onRatingChange:g,size:p,style:D},L)=>{const r=typeof m=="string"?parseFloat(m.replace(",",".")):m,E=typeof l=="string"?parseFloat(l):l,F=a=>a<Math.floor(r)?"reaction_star_full":a===Math.floor(r)&&r%1!==0?"reaction_star_half":"reaction_star_non",I=a=>a<Math.floor(r)?f.yellow_03:a===Math.floor(r)&&r%1!==0?f.yellow_03:f.black_07,W=p==="small"?16:p==="medium"?20:24;return u.jsx(N,{style:[D,q.container],children:Array.from({length:E},(a,n)=>u.jsx(k,{onPress:()=>g&&g(n+1),disabled:!g,...L,children:u.jsx(A,{source:F(n),size:W,color:I(n)})},n))})},q=P.create({container:{flexDirection:"row"}}),K={title:"Library/Rating",component:T,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{rating:3.5,numOfStars:5,onRatingChange:e()}},t={args:{rating:4,numOfStars:5,size:"small",onRatingChange:e()}},o={args:{rating:3,numOfStars:5,size:"medium",onRatingChange:e()}},i={args:{rating:5,numOfStars:5,size:"large",onRatingChange:e()}},c={args:{rating:"4.5",numOfStars:"5",onRatingChange:e()}};var d,h,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    rating: 3.5,
    numOfStars: 5,
    onRatingChange: fn()
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var R,_,y;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rating: 4,
    numOfStars: 5,
    size: 'small',
    onRatingChange: fn()
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var C,O,z;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rating: 3,
    numOfStars: 5,
    size: 'medium',
    onRatingChange: fn()
  }
}`,...(z=(O=o.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var M,j,b;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    rating: 5,
    numOfStars: 5,
    size: 'large',
    onRatingChange: fn()
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,V,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    rating: '4.5',
    numOfStars: '5',
    onRatingChange: fn()
  }
}`,...(x=(V=c.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const Q=["Default","Small","Medium","Large","WithStringValues"];export{s as Default,i as Large,o as Medium,t as Small,c as WithStringValues,Q as __namedExportsOrder,K as default};
