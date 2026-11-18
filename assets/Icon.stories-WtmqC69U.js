import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CPl6p-nG.js";import{I as d,t as S}from"./index-D9H9ZqTU.js";const E={title:"Guides/Icon",component:d,parameters:{docs:{description:{component:"Icons available in Momo Kits design system."}}}},z=({name:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"12px",width:"120px",height:"120px",padding:"8px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",background:"white"},children:[e.jsx("div",{style:{width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:e.jsx(d,{size:32,source:o})}),e.jsx("div",{style:{fontSize:"12px",textAlign:"center",wordBreak:"break-word",overflowWrap:"break-word",color:"#333"},children:o})]}),b=({category:o,icons:c})=>{const[s,a]=i.useState(!0);return e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",cursor:"pointer",padding:"8px",backgroundColor:"#f5f5f5",borderRadius:"4px"},onClick:()=>a(!s),children:[e.jsx("div",{style:{width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"8px"},children:s?"▼":"►"}),e.jsxs("h3",{style:{margin:0},children:[o," (",c.length,")"]})]}),s&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"16px"},children:c.map(r=>e.jsx(z,{name:r},r))})]})},C=({onSearch:o})=>{const[c,s]=i.useState(""),a=r=>{const l=r.target.value;s(l),o(l)};return e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx("input",{type:"text",placeholder:"Search icons...",value:c,onChange:a,style:{width:300,padding:"12px",fontSize:"16px",borderRadius:"4px",border:"1px solid #ddd"}})})},x=()=>{const[o,c]=i.useState(""),[s,a]=i.useState({}),[r,l]=i.useState(0);return i.useEffect(()=>{const t={};let p=0;Object.keys(S).forEach(n=>{if(o&&!n.toLowerCase().includes(o.toLowerCase()))return;p++;const h=n.includes("_")?n.split("_")[0]:"others";t[h]||(t[h]=[]),t[h].push(n)});const g={};Object.keys(t).sort().forEach(n=>{g[n]=t[n].sort()}),a(g),l(p)},[o]),e.jsxs("div",{children:[e.jsx("h2",{children:"Icon Gallery"}),e.jsxs("p",{children:["Total Icons: ",r]}),e.jsx(C,{onSearch:c}),Object.entries(s).map(([t,p])=>e.jsx(b,{category:t,icons:p},t)),r===0&&e.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#666"},children:"No icons found matching your search."})]})},u=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Icon color"}),e.jsxs("div",{style:{display:"flex",gap:"24px",marginTop:"16px"},children:[e.jsxs("div",{children:[e.jsx(d,{size:32,source:"pin_star"}),e.jsx("div",{style:{fontSize:"12px"},children:"default (theme text color)"})]}),e.jsxs("div",{children:[e.jsx(d,{size:32,source:"pin_star",color:"#f5222d"}),e.jsx("div",{style:{fontSize:"12px"},children:'color="#f5222d"'})]}),e.jsxs("div",{children:[e.jsx(d,{size:32,source:"pin_star",color:null}),e.jsx("div",{style:{fontSize:"12px"},children:"color={null} (keeps image colors)"})]})]})]});var y,f,m;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIcons, setFilteredIcons] = useState<Record<string, string[]>>({});
  const [totalIcons, setTotalIcons] = useState(0);
  useEffect(() => {
    // Group icons by their category (first part of the name before underscore)
    const categorizedIcons: Record<string, string[]> = {};
    let count = 0;
    Object.keys(iconData).forEach(iconName => {
      if (searchQuery && !iconName.toLowerCase().includes(searchQuery.toLowerCase())) {
        return;
      }
      count++;
      const category = iconName.includes('_') ? iconName.split('_')[0] : 'others';
      if (!categorizedIcons[category]) {
        categorizedIcons[category] = [];
      }
      categorizedIcons[category].push(iconName);
    });

    // Sort categories
    const sortedCategories: Record<string, string[]> = {};
    Object.keys(categorizedIcons).sort().forEach(category => {
      sortedCategories[category] = categorizedIcons[category].sort();
    });
    setFilteredIcons(sortedCategories);
    setTotalIcons(count);
  }, [searchQuery]);
  return <div>
      <h2>Icon Gallery</h2>
      <p>Total Icons: {totalIcons}</p>

      <IconSearch onSearch={setSearchQuery} />

      {Object.entries(filteredIcons).map(([category, icons]) => <IconCategory key={category} category={category} icons={icons} />)}

      {totalIcons === 0 && <div style={{
      padding: '24px',
      textAlign: 'center',
      color: '#666'
    }}>
          No icons found matching your search.
        </div>}
    </div>;
}`,...(m=(f=x.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var I,v,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div>
    <h2>Icon color</h2>
    <div style={{
    display: 'flex',
    gap: '24px',
    marginTop: '16px'
  }}>
      <div>
        <Icon size={32} source="pin_star" />
        <div style={{
        fontSize: '12px'
      }}>default (theme text color)</div>
      </div>
      <div>
        <Icon size={32} source="pin_star" color="#f5222d" />
        <div style={{
        fontSize: '12px'
      }}>color="#f5222d"</div>
      </div>
      <div>
        <Icon size={32} source="pin_star" color={null} />
        <div style={{
        fontSize: '12px'
      }}>color=&#123;null&#125; (keeps image colors)</div>
      </div>
    </div>
  </div>`,...(j=(v=u.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const Q=["IconGallery","IconColor"];export{u as IconColor,x as IconGallery,Q as __namedExportsOrder,E as default};
