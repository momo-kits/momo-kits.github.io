import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{P as b,m as _,V as S,C as k,T as I}from"./index-D9H9ZqTU.js";import"./index-CPl6p-nG.js";const P={title:"Foundation/Pagination",component:b,parameters:{layout:"centered",docs:{description:{component:"`type: 'scroll'` renders like `default`. Use `PaginationScroll` for the scroll indicator."}}},tags:["autodocs"]},e={args:{activeIndex:1,dataLength:5}},r={args:{activeIndex:2,dataLength:5,type:"black_white"}},t={args:{activeIndex:0,dataLength:10,type:"number"}},a={render:()=>o.jsx(_,{children:Array.from({length:10},(n,f)=>f+1).map(n=>o.jsx(S,{style:{width:120,height:60,backgroundColor:k.blue_08,justifyContent:"center",alignItems:"center",marginRight:12},children:o.jsx(I,{typography:"body_default_regular",children:n})},n))})};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    activeIndex: 1,
    dataLength: 5
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    activeIndex: 2,
    dataLength: 5,
    type: 'black_white'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,u,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    activeIndex: 0,
    dataLength: 10,
    type: 'number'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,y,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <PaginationScroll>
        {Array.from({
        length: 10
      }, (_, index) => index + 1).map(i => {
        return <View key={i} style={{
          width: 120,
          height: 60,
          backgroundColor: Colors.blue_08,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 12
        }}>
              <Text typography={'body_default_regular'}>{i}</Text>
            </View>;
      })}
      </PaginationScroll>;
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const v=["Default","BlackWhite","Number","WithScroll"];export{r as BlackWhite,e as Default,t as Number,a as WithScroll,v as __namedExportsOrder,P as default};
