import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./index-D9H9ZqTU.js";import"./index-CPl6p-nG.js";import{C as b}from"./index-BNR06vzY.js";import"./react-native-gesture-handler-rwoKkCyM.js";import"./index-D9ZpeYt-.js";const P={title:"Library/Carousel",component:b,parameters:{layout:"centered"},tags:["autodocs"]},e=[{id:"1",title:"Item 1",color:l.red_03},{id:"2",title:"Item 2",color:l.green_03},{id:"3",title:"Item 3",color:l.blue_03}],t=({item:a})=>D.jsx("div",{style:{width:"200px",height:"200px",backgroundColor:a.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px"},children:a.title}),r={args:{data:e,renderItem:t,itemSize:200,loop:!0,snapMode:"page",style:{width:200,height:200}}},o={args:{data:e,renderItem:t,itemSize:200,loop:!0,autoplay:!0,autoplayInterval:3e3,style:{width:200,height:200}}},n={args:{data:e,renderItem:t,itemSize:200,loop:!0,layout:{type:"parallax"},style:{width:200,height:200}}},s={args:{data:e,renderItem:t,itemSize:200,layout:{type:"horizontal-stack",visibleCount:3},style:{width:200,height:200}}},i={args:{data:e,renderItem:t,itemSize:200,itemAnimation:a=>({opacity:1-Math.min(Math.abs(a),1)*.5}),style:{width:200,height:200}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    renderItem,
    itemSize: 200,
    loop: true,
    snapMode: 'page',
    style: {
      width: 200,
      height: 200
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    renderItem,
    itemSize: 200,
    loop: true,
    autoplay: true,
    autoplayInterval: 3000,
    style: {
      width: 200,
      height: 200
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    renderItem,
    itemSize: 200,
    loop: true,
    layout: {
      type: 'parallax'
    },
    style: {
      width: 200,
      height: 200
    }
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,I,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    renderItem,
    itemSize: 200,
    layout: {
      type: 'horizontal-stack',
      visibleCount: 3
    },
    style: {
      width: 200,
      height: 200
    }
  }
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var w,f,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    renderItem,
    itemSize: 200,
    itemAnimation: relativeProgress => ({
      opacity: 1 - Math.min(Math.abs(relativeProgress), 1) * 0.5
    }),
    style: {
      width: 200,
      height: 200
    }
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const E=["Default","WithAutoplay","Parallax","HorizontalStack","ItemAnimation"];export{r as Default,s as HorizontalStack,i as ItemAnimation,n as Parallax,o as WithAutoplay,E as __namedExportsOrder,P as default};
