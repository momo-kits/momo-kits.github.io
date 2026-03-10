import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-Dw915X55.js";import"./index-BlikL4tB.js";import{M as c}from"./DocsRenderer-CFRXHY34-CodupoKR.js";import"./index-CPl6p-nG.js";import"./preview-Cw8gKeMe.js";import"./iframe-BP18qD3Z.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function s(i){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Agent Skill/Cài đặt & Sử dụng"}),`
`,n.jsx(l.h1,{id:"cài-đặt--sử-dụng",children:"Cài đặt & Sử dụng"}),`
`,n.jsx(l.h2,{id:"cài-đặt",children:"Cài đặt"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`npm install -g @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(l.p,{children:"Hoặc dùng npx (không cần cài đặt):"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`npx @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(l.h2,{id:"chạy-interactive",children:"Chạy interactive"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`momo-agent
`})}),`
`,n.jsx(l.p,{children:"Menu sẽ hiện ra:"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{children:`  __  __                            _                    _
 |  \\/  | ___  _ __ ___   ___      / \\   __ _  ___ _ __ | |_
 | |\\/| |/ _ \\| '_ \` _ \\ / _ \\    / _ \\ / _\` |/ _ \\ '_ \\| __|
 | |  | | (_) | | | | | | (_) |  / ___ \\ (_| |  __/ | | | |_
 |_|  |_|\\___/|_| |_| |_|\\___/  /_/   \\_\\__, |\\___|_| |_|\\__|
                                         |___/
                    AI Skills for React Native — v1.0.0

? What would you like to do?
❯  1. Install skills locally    — Install to this project
   2. Install skills globally   — Install to ~/.<platform>/skills/
   3. Update installed skills
   4. View versions
   5. Exit
`})}),`
`,n.jsx(l.p,{children:"Chọn bằng phím mũi tên, nhấn Enter để xác nhận."}),`
`,n.jsx(l.hr,{}),`
`,n.jsx(l.h2,{id:"các-lựa-chọn",children:"Các lựa chọn"}),`
`,n.jsx(l.h3,{id:"1-install-skills-locally",children:"1. Install skills locally"}),`
`,n.jsx(l.p,{children:"Cài skills vào thư mục project hiện tại. CLI sẽ:"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsxs(l.li,{children:["Tự động nhận diện platform (kiểm tra ",n.jsx(l.code,{children:".claude/"}),", ",n.jsx(l.code,{children:".cursor/"}),", ",n.jsx(l.code,{children:".agent/"})," trong project)"]}),`
`,n.jsx(l.li,{children:"Cho bạn chọn skill cần cài"}),`
`,n.jsx(l.li,{children:"Tự động cài thêm các skill phụ thuộc"}),`
`,n.jsxs(l.li,{children:["Copy và transform files vào ",n.jsx(l.code,{children:"<project>/<platform>/skills/"})]}),`
`]}),`
`,n.jsx(l.h3,{id:"2-install-skills-globally",children:"2. Install skills globally"}),`
`,n.jsxs(l.p,{children:["Cài skills vào thư mục home của bạn (",n.jsx(l.code,{children:"~/.<platform>/skills/"}),"). Các skill sẽ có hiệu lực cho tất cả project."]}),`
`,n.jsx(l.h3,{id:"3-update-installed-skills",children:"3. Update installed skills"}),`
`,n.jsxs(l.p,{children:["Cập nhật lại các skills đã cài (đọc từ ",n.jsx(l.code,{children:".momo-agent.json"}),")."]}),`
`,n.jsx(l.h3,{id:"4-view-versions",children:"4. View versions"}),`
`,n.jsx(l.p,{children:"Xem danh sách skills có sẵn và skills đã cài. Xem xong sẽ quay lại menu."}),`
`,n.jsx(l.hr,{}),`
`,n.jsx(l.h2,{id:"sử-dụng-bằng-flag-không-tương-tác",children:"Sử dụng bằng flag (không tương tác)"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`# Cài 1 skill cho Claude
momo-agent -p claude -s nav-graph

# Cài nhiều skills cho Cursor, ghi đè nếu đã có
momo-agent -p cursor -s chunk-toolkit,flow-preload -f

# Cài global cho Antigravity
momo-agent -p antigravity -s flow-preload -g -f
`})}),`
`,n.jsx(l.h3,{id:"toàn-bộ-flag",children:"Toàn bộ flag"}),`
`,n.jsxs(l.p,{children:[`| Flag | Mô tả |
|------|-------|
| `,n.jsx(l.code,{children:"-p, --platform <name>"})," | ",n.jsx(l.code,{children:"claude"}),", ",n.jsx(l.code,{children:"cursor"}),", hoặc ",n.jsx(l.code,{children:"antigravity"}),` |
| `,n.jsx(l.code,{children:"-s, --skills <list>"}),` | Danh sách skill (cách nhau bởi dấu phẩy) |
| `,n.jsx(l.code,{children:"-g, --global"})," | Cài vào ",n.jsx(l.code,{children:"~/.<platform>/skills/"}),` thay vì project |
| `,n.jsx(l.code,{children:"-f, --force"}),` | Ghi đè không hỏi |
| `,n.jsx(l.code,{children:"-h, --help"}),` | Hiện trợ giúp |
| `,n.jsx(l.code,{children:"-V, --version"})," | Hiện phiên bản |"]}),`
`,n.jsx(l.hr,{}),`
`,n.jsx(l.h2,{id:"file-theo-dõi",children:"File theo dõi"}),`
`,n.jsxs(l.p,{children:["Sau khi cài, CLI tạo file ",n.jsx(l.code,{children:".momo-agent.json"})," tại thư mục gốc để theo dõi:"]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-json",children:`{
  "version": "1.0.0",
  "platform": "claude",
  "installedAt": "2026-03-05T...",
  "skills": [
    { "id": "nav-graph", "version": "1.0.0", "installedAt": "...", "platform": "claude" }
  ]
}
`})}),`
`,n.jsxs(l.p,{children:["File này được dùng bởi lệnh ",n.jsx(l.code,{children:"update"})," và ",n.jsx(l.code,{children:"versions"}),"."]})]})}function p(i={}){const{wrapper:l}={...e(),...i.components};return l?n.jsx(l,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
