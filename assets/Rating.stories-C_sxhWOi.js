import{fn as e}from"./index-AyJqhRyE.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{V as F,y as N,F as W,I as k,C as f}from"./index-D9H9ZqTU.js";import"./index-CPl6p-nG.js";const G=24,P=20,U=16,S=n=>typeof n=="string"?parseFloat(n.replace(",",".")):n,q=({rating:n,numOfStars:w,onRatingChange:g,size:p,style:D,...T})=>{const r=S(n),V=S(w),x=a=>a<Math.floor(r)?"reaction_star_full":a===Math.floor(r)&&r%1!==0?"reaction_star_half":"reaction_star_non",Z=a=>a<Math.floor(r)?f.yellow_03:a===Math.floor(r)&&r%1!==0?f.yellow_03:f.black_07;let l=G;return p==="small"?l=U:p==="medium"&&(l=P),u.jsx(F,{style:[D,B.container],children:Array.from({length:V},(a,t)=>u.jsx(W,{onPress:()=>g&&g(t+1),disabled:!g,...T,children:u.jsx(k,{source:x(t),size:l,color:Z(t)})},t))})},B=N.create({container:{flexDirection:"row"}}),X={title:"Library/Rating",component:q,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{rating:3.5,numOfStars:5,onRatingChange:e()}},o={args:{rating:4,numOfStars:5,size:"small",onRatingChange:e()}},i={args:{rating:3,numOfStars:5,size:"medium",onRatingChange:e()}},c={args:{rating:5,numOfStars:5,size:"large",onRatingChange:e()}},m={args:{rating:"4.5",numOfStars:"5",onRatingChange:e()}};var d,h,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    rating: 3.5,
    numOfStars: 5,
    onRatingChange: fn()
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var R,O,y;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rating: 4,
    numOfStars: 5,
    size: 'small',
    onRatingChange: fn()
  }
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var C,M,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rating: 3,
    numOfStars: 5,
    size: 'medium',
    onRatingChange: fn()
  }
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var E,A,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    rating: 5,
    numOfStars: 5,
    size: 'large',
    onRatingChange: fn()
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,b,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    rating: '4.5',
    numOfStars: '5',
    onRatingChange: fn()
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const Y=["Default","Small","Medium","Large","WithStringValues"];export{s as Default,c as Large,i as Medium,o as Small,m as WithStringValues,Y as __namedExportsOrder,X as default};
