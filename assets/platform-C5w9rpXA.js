import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-gG8jtkCA.js";import"./index-BkU_xJqV.js";import{M as l}from"./DocsRenderer-CFRXHY34-CsMVBM6W.js";import"./index-DI7CEG0L.js";import"./preview-Bd9SMSV2.js";import"./iframe-CrdZ9_Zc.js";import"./react-18-DjTew52g.js";import"./index-CXQShRbs.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Agent Skill/Platform Support"}),`
`,e.jsx(r.h1,{id:"platform-support",children:"Platform Support"}),`
`,e.jsx(r.p,{children:"Momo Agent CLI hỗ trợ 3 platform với cách xử lý file khác nhau:"}),`
`,e.jsxs(r.p,{children:[`| Platform | Thư mục | Frontmatter | Path rewrite |
|----------|---------|-------------|--------------|
| Claude Code | `,e.jsx(r.code,{children:".claude/skills/"}),` | Giữ nguyên | Không |
| Cursor | `,e.jsx(r.code,{children:".cursor/skills/"})," | Xoá hết | ",e.jsx(r.code,{children:".claude/skills/"})," → ",e.jsx(r.code,{children:".cursor/skills/"}),` |
| Antigravity | `,e.jsx(r.code,{children:".agent/skills/"})," | Rút gọn (name + 1 dòng) | ",e.jsx(r.code,{children:".claude/skills/"})," → ",e.jsx(r.code,{children:".agent/skills/"})," |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"claude-code",children:"Claude Code"}),`
`,e.jsxs(r.p,{children:["Skills được cài vào ",e.jsx(r.code,{children:".claude/skills/"})," với frontmatter đầy đủ. Đây là platform mặc định."]}),`
`,e.jsx(r.h2,{id:"cursor",children:"Cursor"}),`
`,e.jsxs(r.p,{children:["Skills được cài vào ",e.jsx(r.code,{children:".cursor/skills/"}),". CLI sẽ tự động xoá toàn bộ frontmatter và rewrite path references từ ",e.jsx(r.code,{children:".claude/skills/"})," sang ",e.jsx(r.code,{children:".cursor/skills/"}),"."]}),`
`,e.jsx(r.h2,{id:"antigravity",children:"Antigravity"}),`
`,e.jsxs(r.p,{children:["Skills được cài vào ",e.jsx(r.code,{children:".agent/skills/"}),". CLI sẽ rút gọn frontmatter (chỉ giữ name + 1 dòng mô tả) và rewrite path references sang ",e.jsx(r.code,{children:".agent/skills/"}),"."]})]})}function p(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
