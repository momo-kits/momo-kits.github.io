import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-gG8jtkCA.js";import"./index-BkU_xJqV.js";import{M as c}from"./DocsRenderer-CFRXHY34-CsMVBM6W.js";import"./index-DI7CEG0L.js";import"./preview-Bd9SMSV2.js";import"./iframe-CrdZ9_Zc.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function i(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Agent Skill/Cài đặt & Sử dụng"}),`
`,n.jsx(l.h1,{id:"cài-đặt--sử-dụng",children:"Cài đặt & Sử dụng"}),`
`,n.jsx(l.h2,{id:"cài-đặt",children:"Cài đặt"}),`
`,n.jsx(l.h3,{id:"install-locally-khuyên-dùng",children:"Install locally (khuyên dùng)"}),`
`,n.jsx(l.p,{children:"Chạy trực tiếp trong thư mục project, không cần cài global:"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`cd <your-project>
sudo npx @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(l.h3,{id:"install-globally",children:"Install globally"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`sudo npm install -g @momo-platform/momo-agent-cli
`})}),`
`,n.jsx(l.p,{children:"Sau đó chạy ở bất kỳ project nào:"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`momo-agent
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
                    AI Skills for React Native — v2.0.0

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
`,n.jsx(l.p,{children:"Cài skill vào thư mục project hiện tại. CLI sẽ:"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsxs(l.li,{children:["Tự động nhận diện platform (kiểm tra ",n.jsx(l.code,{children:".claude/"}),", ",n.jsx(l.code,{children:".cursor/"}),", ",n.jsx(l.code,{children:".agent/"})," trong project)"]}),`
`,n.jsx(l.li,{children:"Cho bạn chọn skill cần cài"}),`
`,n.jsxs(l.li,{children:["Copy và transform files vào ",n.jsx(l.code,{children:"<project>/<platform>/skills/"})]}),`
`]}),`
`,n.jsx(l.h3,{id:"2-install-skills-globally",children:"2. Install skills globally"}),`
`,n.jsxs(l.p,{children:["Cài skill vào thư mục home của bạn (",n.jsx(l.code,{children:"~/.<platform>/skills/"}),"). Skill sẽ có hiệu lực cho tất cả project."]}),`
`,n.jsx(l.h3,{id:"3-update-installed-skills",children:"3. Update installed skills"}),`
`,n.jsxs(l.p,{children:["Cập nhật lại skill đã cài (đọc từ ",n.jsx(l.code,{children:".momo-agent.json"}),")."]}),`
`,n.jsx(l.h3,{id:"4-view-versions",children:"4. View versions"}),`
`,n.jsx(l.p,{children:"Xem skill có sẵn và skill đã cài. Xem xong sẽ quay lại menu."}),`
`,n.jsx(l.hr,{}),`
`,n.jsx(l.h2,{id:"sử-dụng-bằng-flag-không-tương-tác",children:"Sử dụng bằng flag (không tương tác)"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-bash",children:`# Cài skill cho Claude
momo-agent -p claude -s auto-chunk-full-screen

# Cài skill cho Cursor, ghi đè nếu đã có
momo-agent -p cursor -s auto-chunk-full-screen -f

# Cài global cho Antigravity
momo-agent -p antigravity -s auto-chunk-full-screen -g -f
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
  "version": "2.0.0",
  "platform": "claude",
  "installedAt": "2026-03-12T...",
  "skills": [
    { "id": "auto-chunk-full-screen", "version": "2.0.0", "installedAt": "...", "platform": "claude" }
  ]
}
`})}),`
`,n.jsxs(l.p,{children:["File này được dùng bởi lệnh ",n.jsx(l.code,{children:"update"})," và ",n.jsx(l.code,{children:"versions"}),"."]})]})}function m(e={}){const{wrapper:l}={...s(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
