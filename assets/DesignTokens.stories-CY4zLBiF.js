import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as s,k as r,l as n}from"./styles-Dd_0X69m.js";import"./index-DI7CEG0L.js";import"./index-BzmpT3sc.js";const B={title:"Guides/DesignTokens",parameters:{docs:{description:{component:"Design tokens documentation for Momo Kits. See DesignTokens.mdx for complete details."}}}},L=({color:t,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"8px"},children:[e.jsx("div",{style:{backgroundColor:t,width:"40px",height:"40px",marginRight:"12px",borderRadius:"4px",border:t==="#ffffff"?"1px solid #e8e8e8":"none"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsx("div",{style:{fontSize:"12px",opacity:.7},children:t})]})]}),a=({size:t,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:`${t}px`,height:"20px",backgroundColor:"#a50064",marginRight:"12px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsxs("div",{style:{fontSize:"12px",opacity:.7},children:[t,"px"]})]})]}),o=({radius:t,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#a50064",borderRadius:`${t}px`,marginRight:"12px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsxs("div",{style:{fontSize:"12px",opacity:.7},children:[t,"px"]})]})]}),l=()=>{const t={Black:Object.keys(s).filter(i=>i.startsWith("black_")),Pink:Object.keys(s).filter(i=>i.startsWith("pink_")),Violet:Object.keys(s).filter(i=>i.startsWith("violet_")),Indigo:Object.keys(s).filter(i=>i.startsWith("indigo_")),Blue:Object.keys(s).filter(i=>i.startsWith("blue_")),Mint:Object.keys(s).filter(i=>i.startsWith("mint_")),Green:Object.keys(s).filter(i=>i.startsWith("green_")),Lime:Object.keys(s).filter(i=>i.startsWith("lime_")),Yellow:Object.keys(s).filter(i=>i.startsWith("yellow_")),Gold:Object.keys(s).filter(i=>i.startsWith("gold_")),Orange:Object.keys(s).filter(i=>i.startsWith("orange_")),Red:Object.keys(s).filter(i=>i.startsWith("red_"))};return e.jsxs("div",{children:[e.jsx("h2",{children:"Color Palette"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:Object.entries(t).map(([i,w])=>e.jsxs("div",{style:{width:"300px",margin:"0 16px 24px 0"},children:[e.jsx("h3",{children:i}),w.map(x=>e.jsx(L,{color:s[x],name:x},x))]},i))})]})},d=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Spacing Scale"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(a,{size:r.XXS,name:"XXS"}),e.jsx(a,{size:r.XS,name:"XS"}),e.jsx(a,{size:r.S,name:"S"}),e.jsx(a,{size:r.M,name:"M"}),e.jsx(a,{size:r.L,name:"L"}),e.jsx(a,{size:r.XL,name:"XL"}),e.jsx(a,{size:r.XXL,name:"XXL"}),e.jsx(a,{size:r.Size3XL,name:"Size3XL"}),e.jsx(a,{size:r.Size4XL,name:"Size4XL"}),e.jsx(a,{size:r.Size5XL,name:"Size5XL"})]})]}),c=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Border Radii"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(o,{radius:n.XXS,name:"XXS"}),e.jsx(o,{radius:n.XS,name:"XS"}),e.jsx(o,{radius:n.S,name:"S"}),e.jsx(o,{radius:n.M,name:"M"}),e.jsx(o,{radius:n.L,name:"L"}),e.jsx(o,{radius:n.XL,name:"XL"})]})]}),p=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Shadows"}),e.jsxs("div",{style:{display:"flex",marginTop:"16px"},children:[e.jsx("div",{style:{width:"150px",height:"150px",backgroundColor:"white",borderRadius:"8px",marginRight:"24px",boxShadow:"0 2px 10px rgba(48, 50, 51, 0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Dark Shadow"}),e.jsx("div",{style:{width:"150px",height:"150px",backgroundColor:"white",borderRadius:"8px",marginRight:"24px",boxShadow:"0 2px 10px rgba(48, 50, 51, 0.07)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Light Shadow"})]}),e.jsx("div",{style:{marginTop:"16px",opacity:.7},children:"Note: Shadow appearance may vary between platforms. These are web representations."})]});l.__docgenInfo={description:"",methods:[],displayName:"ColorPalette"};d.__docgenInfo={description:"",methods:[],displayName:"SpacingScale"};c.__docgenInfo={description:"",methods:[],displayName:"BorderRadius"};p.__docgenInfo={description:"",methods:[],displayName:"ShadowsExample"};var h,m,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const colorGroups: Record<string, string[]> = {
    Black: Object.keys(Colors).filter(key => key.startsWith('black_')),
    Pink: Object.keys(Colors).filter(key => key.startsWith('pink_')),
    Violet: Object.keys(Colors).filter(key => key.startsWith('violet_')),
    Indigo: Object.keys(Colors).filter(key => key.startsWith('indigo_')),
    Blue: Object.keys(Colors).filter(key => key.startsWith('blue_')),
    Mint: Object.keys(Colors).filter(key => key.startsWith('mint_')),
    Green: Object.keys(Colors).filter(key => key.startsWith('green_')),
    Lime: Object.keys(Colors).filter(key => key.startsWith('lime_')),
    Yellow: Object.keys(Colors).filter(key => key.startsWith('yellow_')),
    Gold: Object.keys(Colors).filter(key => key.startsWith('gold_')),
    Orange: Object.keys(Colors).filter(key => key.startsWith('orange_')),
    Red: Object.keys(Colors).filter(key => key.startsWith('red_'))
  };
  return <div>
      <h2>Color Palette</h2>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {Object.entries(colorGroups).map(([groupName, colorKeys]) => <div key={groupName} style={{
        width: '300px',
        margin: '0 16px 24px 0'
      }}>
            <h3>{groupName}</h3>
            {colorKeys.map(colorKey => <ColorBlock key={colorKey} color={Colors[colorKey as keyof typeof Colors]} name={colorKey} />)}
          </div>)}
      </div>
    </div>;
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,k,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div>
    <h2>Spacing Scale</h2>
    <div style={{
    marginTop: '16px'
  }}>
      <SpacingBlock size={Spacing.XXS} name="XXS" />
      <SpacingBlock size={Spacing.XS} name="XS" />
      <SpacingBlock size={Spacing.S} name="S" />
      <SpacingBlock size={Spacing.M} name="M" />
      <SpacingBlock size={Spacing.L} name="L" />
      <SpacingBlock size={Spacing.XL} name="XL" />
      <SpacingBlock size={Spacing.XXL} name="XXL" />
      <SpacingBlock size={Spacing.Size3XL} name="Size3XL" />
      <SpacingBlock size={Spacing.Size4XL} name="Size4XL" />
      <SpacingBlock size={Spacing.Size5XL} name="Size5XL" />
    </div>
  </div>`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,u,f;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div>
    <h2>Border Radii</h2>
    <div style={{
    marginTop: '16px'
  }}>
      <RadiusBlock radius={Radius.XXS} name="XXS" />
      <RadiusBlock radius={Radius.XS} name="XS" />
      <RadiusBlock radius={Radius.S} name="S" />
      <RadiusBlock radius={Radius.M} name="M" />
      <RadiusBlock radius={Radius.L} name="L" />
      <RadiusBlock radius={Radius.XL} name="XL" />
    </div>
  </div>`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,v,X;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div>
    <h2>Shadows</h2>
    <div style={{
    display: 'flex',
    marginTop: '16px'
  }}>
      <div style={{
      width: '150px',
      height: '150px',
      backgroundColor: 'white',
      borderRadius: '8px',
      marginRight: '24px',
      // iOS-like shadow for web example
      boxShadow: '0 2px 10px rgba(48, 50, 51, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Dark Shadow
      </div>
      <div style={{
      width: '150px',
      height: '150px',
      backgroundColor: 'white',
      borderRadius: '8px',
      marginRight: '24px',
      // Light shadow for web example
      boxShadow: '0 2px 10px rgba(48, 50, 51, 0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Light Shadow
      </div>
    </div>
    <div style={{
    marginTop: '16px',
    opacity: 0.7
  }}>
      Note: Shadow appearance may vary between platforms. These are web
      representations.
    </div>
  </div>`,...(X=(v=p.parameters)==null?void 0:v.docs)==null?void 0:X.source}}};const O=["ColorPalette","SpacingScale","BorderRadius","ShadowsExample"];export{c as BorderRadius,l as ColorPalette,p as ShadowsExample,d as SpacingScale,O as __namedExportsOrder,B as default};
