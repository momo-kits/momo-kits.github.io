import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DI7CEG0L.js";import{I as m,t as I}from"./styles-B2Jwh0LJ.js";import"./index-BzmpT3sc.js";const k={title:"Guides/Icon",component:m,parameters:{docs:{description:{component:"Icons available in Momo Kits design system."}}}},f=({name:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"12px",width:"120px",height:"120px",padding:"8px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",background:"white"},children:[e.jsx("div",{style:{width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:e.jsx(m,{size:32,source:t})}),e.jsx("div",{style:{fontSize:"12px",textAlign:"center",wordBreak:"break-word",overflowWrap:"break-word",color:"#333"},children:t})]}),j=({category:t,icons:c})=>{const[o,i]=a.useState(!0);return e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",cursor:"pointer",padding:"8px",backgroundColor:"#f5f5f5",borderRadius:"4px"},onClick:()=>i(!o),children:[e.jsx("div",{style:{width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"8px"},children:o?"▼":"►"}),e.jsxs("h3",{style:{margin:0},children:[t," (",c.length,")"]})]}),o&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"16px"},children:c.map(r=>e.jsx(f,{name:r},r))})]})},S=({onSearch:t})=>{const[c,o]=a.useState(""),i=r=>{const l=r.target.value;o(l),t(l)};return e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx("input",{type:"text",placeholder:"Search icons...",value:c,onChange:i,style:{width:300,padding:"12px",fontSize:"16px",borderRadius:"4px",border:"1px solid #ddd"}})})},d=()=>{const[t,c]=a.useState(""),[o,i]=a.useState({}),[r,l]=a.useState(0);return a.useEffect(()=>{const n={};let p=0;Object.keys(I).forEach(s=>{if(t&&!s.toLowerCase().includes(t.toLowerCase()))return;p++;const g=s.includes("_")?s.split("_")[0]:"others";n[g]||(n[g]=[]),n[g].push(s)});const u={};Object.keys(n).sort().forEach(s=>{u[s]=n[s].sort()}),i(u),l(p)},[t]),e.jsxs("div",{children:[e.jsx("h2",{children:"Icon Gallery"}),e.jsxs("p",{children:["Total Icons: ",r]}),e.jsx(S,{onSearch:c}),Object.entries(o).map(([n,p])=>e.jsx(j,{category:n,icons:p},n)),r===0&&e.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#666"},children:"No icons found matching your search."})]})};d.__docgenInfo={description:"",methods:[],displayName:"IconGallery"};var h,x,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const z=["IconGallery"];export{d as IconGallery,z as __namedExportsOrder,k as default};
