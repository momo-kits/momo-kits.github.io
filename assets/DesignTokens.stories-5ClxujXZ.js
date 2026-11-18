import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as t,r as n,s as a,T as B}from"./index-D9H9ZqTU.js";import"./index-CPl6p-nG.js";const G={title:"Guides/DesignTokens",parameters:{docs:{description:{component:"Design tokens documentation for Momo Kits. See DesignTokens.mdx for complete details."}}}},T=({color:s,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"8px"},children:[e.jsx("div",{style:{backgroundColor:s,width:"40px",height:"40px",marginRight:"12px",borderRadius:"4px",border:s==="#ffffff"?"1px solid #e8e8e8":"none"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsx("div",{style:{fontSize:"12px",opacity:.7},children:s})]})]}),r=({size:s,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:`${s}px`,height:"20px",backgroundColor:"#a50064",marginRight:"12px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsxs("div",{style:{fontSize:"12px",opacity:.7},children:[s,"px"]})]})]}),o=({radius:s,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#a50064",borderRadius:`${s}px`,marginRight:"12px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:i}),e.jsxs("div",{style:{fontSize:"12px",opacity:.7},children:[s,"px"]})]})]}),l=()=>{const s={Black:Object.keys(t).filter(i=>i.startsWith("black_")),Pink:Object.keys(t).filter(i=>i.startsWith("pink_")),Violet:Object.keys(t).filter(i=>i.startsWith("violet_")),Indigo:Object.keys(t).filter(i=>i.startsWith("indigo_")),Blue:Object.keys(t).filter(i=>i.startsWith("blue_")),Mint:Object.keys(t).filter(i=>i.startsWith("mint_")),Green:Object.keys(t).filter(i=>i.startsWith("green_")),Lime:Object.keys(t).filter(i=>i.startsWith("lime_")),Yellow:Object.keys(t).filter(i=>i.startsWith("yellow_")),Gold:Object.keys(t).filter(i=>i.startsWith("gold_")),Orange:Object.keys(t).filter(i=>i.startsWith("orange_")),Red:Object.keys(t).filter(i=>i.startsWith("red_"))};return e.jsxs("div",{children:[e.jsx("h2",{children:"Color Palette"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:Object.entries(s).map(([i,O])=>e.jsxs("div",{style:{width:"300px",margin:"0 16px 24px 0"},children:[e.jsx("h3",{children:i}),O.map(h=>e.jsx(T,{color:t[h],name:h},h))]},i))})]})},c=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Spacing Scale"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(r,{size:n.XXS,name:"XXS"}),e.jsx(r,{size:n.XS,name:"XS"}),e.jsx(r,{size:n.S,name:"S"}),e.jsx(r,{size:n.M,name:"M"}),e.jsx(r,{size:n.L,name:"L"}),e.jsx(r,{size:n.XL,name:"XL"}),e.jsx(r,{size:n.XXL,name:"XXL"}),e.jsx(r,{size:n.Size3XL,name:"Size3XL"}),e.jsx(r,{size:n.Size4XL,name:"Size4XL"}),e.jsx(r,{size:n.Size5XL,name:"Size5XL"})]})]}),p=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Border Radii"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx(o,{radius:a.XXS,name:"XXS"}),e.jsx(o,{radius:a.XS,name:"XS"}),e.jsx(o,{radius:a.S,name:"S"}),e.jsx(o,{radius:a.M,name:"M"}),e.jsx(o,{radius:a.L,name:"L"}),e.jsx(o,{radius:a.XL,name:"XL"})]})]}),x=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Shadows"}),e.jsxs("div",{style:{display:"flex",marginTop:"16px"},children:[e.jsx("div",{style:{width:"150px",height:"150px",backgroundColor:"white",borderRadius:"8px",marginRight:"24px",boxShadow:"0 2px 10px rgba(48, 50, 51, 0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Dark Shadow"}),e.jsx("div",{style:{width:"150px",height:"150px",backgroundColor:"white",borderRadius:"8px",marginRight:"24px",boxShadow:"0 2px 10px rgba(48, 50, 51, 0.07)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Light Shadow"}),e.jsx("div",{style:{width:"150px",height:"150px",backgroundColor:"white",borderRadius:"8px",marginRight:"24px",boxShadow:"0 6px 8px rgba(226, 126, 181, 0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Pink Shadow"})]}),e.jsx("div",{style:{marginTop:"16px",opacity:.7},children:"Note: Shadow appearance may vary between platforms. These are web representations."})]}),W=["headline_l_bold","headline_default_bold","header_m_bold","header_default_bold","header_s_semibold","header_xs_semibold","body_default_regular","description_default_regular","description_xs_regular","label_default_medium","label_s_medium","label_xs_medium","action_default_bold","action_s_bold","action_xs_bold","action_xxs_bold"],d=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Typography"}),e.jsx("div",{style:{marginTop:"16px"},children:W.map(s=>e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx(B,{typography:s,children:"The quick brown fox"}),e.jsx("div",{style:{fontSize:"12px",opacity:.7},children:s})]},s))})]});var m,y,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,S,u;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div>
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
  </div>`,...(u=(S=c.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var j,b,f;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div>
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
  </div>`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,_,w;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div>
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
      <div style={{
      width: '150px',
      height: '150px',
      backgroundColor: 'white',
      borderRadius: '8px',
      marginRight: '24px',
      // Pink shadow for web example
      boxShadow: '0 6px 8px rgba(226, 126, 181, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        Pink Shadow
      </div>
    </div>
    <div style={{
    marginTop: '16px',
    opacity: 0.7
  }}>
      Note: Shadow appearance may vary between platforms. These are web
      representations.
    </div>
  </div>`,...(w=(_=x.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var X,R,z,C,L;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`() => <div>
    <h2>Typography</h2>
    <div style={{
    marginTop: '16px'
  }}>
      {TYPOGRAPHY_TOKENS.map(name => <div key={name} style={{
      marginBottom: '12px'
    }}>
          <Text typography={name}>The quick brown fox</Text>
          <div style={{
        fontSize: '12px',
        opacity: 0.7
      }}>{name}</div>
        </div>)}
    </div>
  </div>`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"Renders each token with the kit `Text`, so sizes always match the source.",...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};const K=["ColorPalette","SpacingScale","BorderRadius","ShadowsExample","Typography"];export{p as BorderRadius,l as ColorPalette,x as ShadowsExample,c as SpacingScale,d as Typography,K as __namedExportsOrder,G as default};
