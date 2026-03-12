import{fn as e}from"./index-BgJgh-x_.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{u as k,I as A,j as p}from"./index-BmJxoLT2.js";import"./index-DI7CEG0L.js";import{V as P,s as T}from"./index-aTsR8gS4.js";import"./Animated-CU-m9YKj.js";const f=({rating:n,numOfStars:g,onRatingChange:l,size:d,style:I,...L})=>{const r=typeof n=="string"?parseFloat(n.replace(",",".")):n,N=typeof g=="string"?parseFloat(g):g,E=a=>a<Math.floor(r)?"reaction_star_full":a===Math.floor(r)&&r%1!==0?"reaction_star_half":"reaction_star_non",F=a=>a<Math.floor(r)?p.yellow_03:a===Math.floor(r)&&r%1!==0?p.yellow_03:p.black_07,W=d==="small"?16:d==="medium"?20:24;return u.jsx(P,{style:[I,q.container],children:Array.from({length:N},(a,t)=>u.jsx(k,{onPress:()=>l&&l(t+1),disabled:!l,...L,children:u.jsx(A,{source:E(t),size:W,color:F(t)})},t))})},q=T.create({container:{flexDirection:"row"}});try{f.displayName="Rating",f.__docgenInfo={description:"",displayName:"Rating",props:{}}}catch{}const Q={title:"Library/Rating",component:f,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{rating:3.5,numOfStars:5,onRatingChange:e()}},o={args:{rating:4,numOfStars:5,size:"small",onRatingChange:e()}},i={args:{rating:3,numOfStars:5,size:"medium",onRatingChange:e()}},c={args:{rating:5,numOfStars:5,size:"large",onRatingChange:e()}},m={args:{rating:"4.5",numOfStars:"5",onRatingChange:e()}};var h,_,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    rating: 3.5,
    numOfStars: 5,
    onRatingChange: fn()
  }
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var y,R,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    rating: 4,
    numOfStars: 5,
    size: 'small',
    onRatingChange: fn()
  }
}`,...(O=(R=o.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var C,z,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rating: 3,
    numOfStars: 5,
    size: 'medium',
    onRatingChange: fn()
  }
}`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var j,b,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    rating: 5,
    numOfStars: 5,
    size: 'large',
    onRatingChange: fn()
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var V,x,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    rating: '4.5',
    numOfStars: '5',
    onRatingChange: fn()
  }
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const U=["Default","Small","Medium","Large","WithStringValues"];export{s as Default,c as Large,i as Medium,o as Small,m as WithStringValues,U as __namedExportsOrder,Q as default};
