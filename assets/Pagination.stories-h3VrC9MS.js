import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{P as b,e as _,f as S,T as I}from"./styles-Dd_0X69m.js";import"./index-DI7CEG0L.js";import{V as j}from"./index-BzmpT3sc.js";const L={title:"Foundation/Pagination",component:b,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{activeIndex:1,dataLength:5}},r={args:{activeIndex:2,dataLength:5,type:"black_white"}},t={args:{activeIndex:0,dataLength:10,type:"number"}},a={render:()=>n.jsx(_,{children:Array.from({length:10},(o,f)=>f+1).map(o=>n.jsx(j,{style:{width:120,height:60,backgroundColor:S.blue_08,justifyContent:"center",alignItems:"center",marginRight:12},children:n.jsx(I,{typography:"body_default_regular",children:o})}))})};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,x,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <PaginationScroll>
        {Array.from({
        length: 10
      }, (_, index) => index + 1).map(i => {
        return <View style={{
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
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const P=["Default","BlackWhite","Number","WithScroll"];export{r as BlackWhite,e as Default,t as Number,a as WithScroll,P as __namedExportsOrder,L as default};
