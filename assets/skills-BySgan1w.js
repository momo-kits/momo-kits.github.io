import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-Dw915X55.js";import"./index-BlikL4tB.js";import{M as l}from"./DocsRenderer-CFRXHY34-CodupoKR.js";import"./index-CPl6p-nG.js";import"./preview-Cw8gKeMe.js";import"./iframe-BP18qD3Z.js";import"./react-18-CZ42Sd-2.js";import"./index-DgH-xKnr.js";function c(i){const h={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Agent Skill/Danh sách Skills"}),`
`,n.jsx(h.h1,{id:"các-skills-có-sẵn",children:"Các Skills có sẵn"}),`
`,n.jsxs(h.h2,{id:"1-nav-graph--phân-tích-điều-hướng",children:["1. ",n.jsx(h.code,{children:"nav-graph"})," — Phân tích điều hướng"]}),`
`,n.jsxs(h.p,{children:["Quét toàn bộ source code bằng TypeScript AST, tìm tất cả lệnh ",n.jsx(h.code,{children:"push"}),", ",n.jsx(h.code,{children:"replace"}),", ",n.jsx(h.code,{children:"navigate"})," để xây dựng đồ thị điều hướng giữa các màn hình."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Khi nào dùng:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Muốn biết màn hình A điều hướng tới những màn hình nào"}),`
`,n.jsx(h.li,{children:"Muốn tìm ngược: ai navigate tới màn hình X"}),`
`,n.jsx(h.li,{children:"Cần rebuild lại đồ thị điều hướng sau khi thay đổi code"}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Cách dùng:"})," Sau khi cài skill, nói với AI:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"rebuild nav graph"'})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"phân tích điều hướng"'})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"tìm màn hình nào navigate tới PaymentScreen"'})}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Output:"})," File ",n.jsx(h.code,{children:"nav-flow.json"})," chứa toàn bộ đồ thị màn hình → màn hình, và file ",n.jsx(h.code,{children:"nav-flow.html"})," để xem trực quan trên browser."]}),`
`,n.jsx(h.hr,{}),`
`,n.jsxs(h.h2,{id:"2-chunk-toolkit--toolkit-tách-chunk-lazy-load",children:["2. ",n.jsx(h.code,{children:"chunk-toolkit"})," — Toolkit tách chunk (lazy-load)"]}),`
`,n.jsx(h.p,{children:"Hỗ trợ tách code (lazy-loading) cho React Native mini-app. Bao gồm: chunk màn hình, chunk component, chunk widget, tối ưu chunk, và giao diện chọn batch trên browser."}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Phụ thuộc:"})," ",n.jsx(h.code,{children:"nav-graph"})," (tự động cài kèm)"]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Khi nào dùng:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Muốn chunk (lazy-load) một màn hình hoặc component"}),`
`,n.jsx(h.li,{children:"Muốn chunk hàng loạt bằng giao diện web (All-in-One Selector)"}),`
`,n.jsx(h.li,{children:"Muốn phân tích và tối ưu các chunk đã có"}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Cách dùng:"})," Sau khi cài skill, nói với AI:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"chunk màn hình HomeScreen"'})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"chunk component PaymentCard"'})}),`
`,n.jsxs(h.li,{children:[n.jsx(h.em,{children:'"chunk widget"'})," — tự động chunk tất cả widget đăng ký qua ",n.jsx(h.code,{children:"registerWidget"})]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.em,{children:'"optimize chunk"'})," — phân tích bundle để tìm import thừa trong chunk"]}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Giao diện web:"})," AI sẽ mở browser tại ",n.jsx(h.code,{children:"localhost:3850"})," với 4 tab:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Screens"})," — chọn màn hình cần chunk"]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Components"})," — chọn component cần chunk (nhóm theo màn hình)"]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Widgets"})," — tự động chọn tất cả widget (force mode)"]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Optimize"})," — phân tích chunk bundle, tìm import có thể tối ưu"]}),`
`]}),`
`,n.jsx(h.hr,{}),`
`,n.jsxs(h.h2,{id:"3-flow-preload--chunk-và-preload-theo-luồng",children:["3. ",n.jsx(h.code,{children:"flow-preload"})," — Chunk và preload theo luồng"]}),`
`,n.jsx(h.p,{children:"Chunk tất cả màn hình đủ điều kiện, sau đó thêm preload chain theo luồng điều hướng. Gồm 4 phase: chọn → chunk → preload → verify."}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Phụ thuộc:"})," ",n.jsx(h.code,{children:"nav-graph"})," + ",n.jsx(h.code,{children:"chunk-toolkit"})," (tự động cài kèm cả 2)"]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Khi nào dùng:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Muốn chunk và preload toàn bộ một luồng (ví dụ: luồng thanh toán từ Home → Cart → Payment → Success)"}),`
`,n.jsx(h.li,{children:"Muốn cải thiện performance bằng cách preload màn hình tiếp theo trước khi user navigate"}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Cách dùng:"})," Sau khi cài skill, nói với AI:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.em,{children:'"flow preload"'})," hoặc ",n.jsx(h.em,{children:'"preload luồng"'})]}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:'"chunk và preload tất cả màn hình"'})}),`
`]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Quy trình:"})}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:["AI mở browser tại ",n.jsx(h.code,{children:"localhost:3851"})," — bạn chọn màn hình và luồng cần xử lý"]}),`
`,n.jsx(h.li,{children:"AI chunk song song các màn hình đã chọn (5-7 màn hình cùng lúc)"}),`
`,n.jsx(h.li,{children:"AI thêm code preload vào từng màn hình theo thứ tự luồng"}),`
`,n.jsx(h.li,{children:"Verify: chạy TypeScript check + ESLint + build để đảm bảo không lỗi"}),`
`]}),`
`,n.jsx(h.hr,{}),`
`,n.jsx(h.h2,{id:"tự-động-giải-quyết-phụ-thuộc",children:"Tự động giải quyết phụ thuộc"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Chọn ",n.jsx(h.code,{children:"chunk-toolkit"})," → tự động cài thêm ",n.jsx(h.code,{children:"nav-graph"})]}),`
`,n.jsxs(h.li,{children:["Chọn ",n.jsx(h.code,{children:"flow-preload"})," → tự động cài cả 3 skills"]}),`
`]})]})}function g(i={}){const{wrapper:h}={...e(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{g as default};
