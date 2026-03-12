import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-gG8jtkCA.js";import"./index-zQGVDrK4.js";import{M as o}from"./DocsRenderer-CFRXHY34-D3_nS4vt.js";import"./index-DI7CEG0L.js";import"./preview-Blcfuwec.js";import"./iframe-CzGqGqnK.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function i(l){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Agent Skill/Cài đặt & Sử dụng"}),`
`,n.jsx(e.h1,{id:"cài-đặt--sử-dụng",children:"Cài đặt & Sử dụng"}),`
`,n.jsx(e.h2,{id:"cài-đặt",children:"Cài đặt"}),`
`,n.jsx(e.h3,{id:"install-locally-khuyên-dùng",children:"Install locally (khuyên dùng)"}),`
`,n.jsx(e.p,{children:"Chạy trực tiếp trong thư mục project, không cần cài global:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`cd <your-project>
sudo npx @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(e.h3,{id:"install-globally",children:"Install globally"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`sudo npm install -g @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(e.p,{children:"Sau đó chạy ở bất kỳ project nào:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-agent
`})}),`
`,n.jsx(e.h2,{id:"chạy-interactive",children:"Chạy interactive"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`momo-agent
`})}),`
`,n.jsx(e.p,{children:"Menu sẽ hiện ra:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`  __  __                            _                    _
 |  \\/  | ___  _ __ ___   ___      / \\   __ _  ___ _ __ | |_
 | |\\/| |/ _ \\| '_ \` _ \\ / _ \\    / _ \\ / _\` |/ _ \\ '_ \\| __|
 | |  | | (_) | | | | | | (_) |  / ___ \\ (_| |  __/ | | | |_
 |_|  |_|\\___/|_| |_| |_|\\___/  /_/   \\_\\__, |\\___|_| |_|\\__|
                                         |___/
                    AI Skills for React Native — v2.0.0

? What would you like to do?
❯  1. Install skills locally    — Install to this project
   2. Install skills globally   — Install to ~/.<platform>/skills/
   3. Update installed skills
   4. View versions
   5. Exit
`})}),`
`,n.jsx(e.p,{children:"Chọn bằng phím mũi tên, nhấn Enter để xác nhận."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"các-lựa-chọn",children:"Các lựa chọn"}),`
`,n.jsx(e.h3,{id:"1-install-skills-locally",children:"1. Install skills locally"}),`
`,n.jsx(e.p,{children:"Cài skill vào thư mục project hiện tại. CLI sẽ:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Tự động nhận diện platform (kiểm tra ",n.jsx(e.code,{children:".claude/"}),", ",n.jsx(e.code,{children:".cursor/"}),", ",n.jsx(e.code,{children:".agent/"})," trong project)"]}),`
`,n.jsx(e.li,{children:"Cho bạn chọn skill cần cài"}),`
`,n.jsxs(e.li,{children:["Copy và transform files vào ",n.jsx(e.code,{children:"<project>/<platform>/skills/"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-install-skills-globally",children:"2. Install skills globally"}),`
`,n.jsxs(e.p,{children:["Cài skill vào thư mục home của bạn (",n.jsx(e.code,{children:"~/.<platform>/skills/"}),"). Skill sẽ có hiệu lực cho tất cả project."]}),`
`,n.jsx(e.h3,{id:"3-update-installed-skills",children:"3. Update installed skills"}),`
`,n.jsxs(e.p,{children:["Cập nhật lại skill đã cài (đọc từ ",n.jsx(e.code,{children:".momo-agent.json"}),")."]}),`
`,n.jsx(e.h3,{id:"4-view-versions",children:"4. View versions"}),`
`,n.jsx(e.p,{children:"Xem skill có sẵn và skill đã cài. Xem xong sẽ quay lại menu."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"sử-dụng-bằng-flag-không-tương-tác",children:"Sử dụng bằng flag (không tương tác)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Cài skill cho Claude
momo-agent -p claude -s auto-chunk-full-screen

# Cài skill cho Cursor, ghi đè nếu đã có
momo-agent -p cursor -s auto-chunk-full-screen -f

# Cài global cho Antigravity
momo-agent -p antigravity -s auto-chunk-full-screen -g -f
`})}),`
`,n.jsx(e.h3,{id:"toàn-bộ-flag",children:"Toàn bộ flag"}),`
`,n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",margin:"16px 0"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#6366f1",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-p, --platform"}),n.jsx("span",{style:{color:"#6b7280",fontSize:"13px"},children:"<name>"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"claude, cursor, hoặc antigravity"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#8b5cf6",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-s, --skills"}),n.jsx("span",{style:{color:"#6b7280",fontSize:"13px"},children:"<list>"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"Danh sách skill (cách nhau bởi dấu phẩy)"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#a855f7",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-g, --global"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"Cài vào ~/<platform>/skills/ thay vì project"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#d946ef",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-f, --force"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"Ghi đè không hỏi"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#64748b",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-h, --help"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"Hiện trợ giúp"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#f8f9fa",border:"1px solid #e9ecef",borderRadius:"8px",padding:"10px 16px",gap:"12px"},children:[n.jsx("code",{style:{background:"#64748b",color:"white",padding:"4px 10px",borderRadius:"6px",fontWeight:600,fontSize:"13px",whiteSpace:"nowrap"},children:"-V, --version"}),n.jsx("span",{style:{flex:1,textAlign:"right",fontSize:"14px"},children:"Hiện phiên bản"})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"file-theo-dõi",children:"File theo dõi"}),`
`,n.jsxs(e.p,{children:["Sau khi cài, CLI tạo file ",n.jsx(e.code,{children:".momo-agent.json"})," tại thư mục gốc để theo dõi:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "version": "2.0.0",
  "platform": "claude",
  "installedAt": "2026-03-12T...",
  "skills": [
    { "id": "auto-chunk-full-screen", "version": "2.0.0", "installedAt": "...", "platform": "claude" }
  ]
}
`})}),`
`,n.jsxs(e.p,{children:["File này được dùng bởi lệnh ",n.jsx(e.code,{children:"update"})," và ",n.jsx(e.code,{children:"versions"}),"."]})]})}function f(l={}){const{wrapper:e}={...s(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(i,{...l})}):i(l)}export{f as default};
