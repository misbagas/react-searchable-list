import{j as r,r as C}from"./index-BYK3XXYy.js";import{r as d}from"./index-Bi6L2ga8.js";import"./index-D1UQZLgm.js";function N({options:n=[],placeholder:q="Search...",multiple:a=!1,searchable:x=!0,usePortal:b=!1,renderOption:S,maxVisibleOptions:c=100,enableLimit:g=!0,enableSelection:y=!0,showFooter:V=!0}){const[u,k]=d.useState(""),[t,w]=d.useState(a?[]:null),l=d.useMemo(()=>{if(!x)return n;const e=u.trim().toLowerCase();return e?n.filter(s=>s.toLowerCase().includes(e)):n},[n,u,x]),j=d.useMemo(()=>g?l.slice(0,c):l,[l,g,c]),P=e=>a?t.includes(e):t===e,L=e=>{y&&w(a?s=>s.includes(e)?s.filter(o=>o!==e):[...s,e]:e)},v=r.jsxs("div",{className:"w-80 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden flex flex-col",style:{zIndex:9999,position:b?"fixed":"relative"},children:[x&&r.jsx("div",{className:"border-b bg-gray-50/50 p-3",children:r.jsx("input",{value:u,onChange:e=>k(e.target.value),placeholder:q,className:`w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all`})}),r.jsxs("ul",{className:"max-h-72 overflow-y-auto p-1 custom-scrollbar",children:[j.length>0?j.map((e,s)=>{const o=P(e);return r.jsx("li",{onClick:()=>L(e),className:`cursor-pointer rounded-md px-4 py-2 text-sm transition-colors mb-0.5 last:mb-0
                  ${o?"bg-blue-100 text-blue-800 font-semibold":"text-gray-700 hover:bg-gray-100"}`,children:S?S(e,{selected:o,index:s,query:u}):r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{children:e}),o&&r.jsx("span",{className:"text-blue-600 font-bold",children:"✓"})]})},`${e}-${s}`)}):r.jsx("li",{className:"py-10 text-center text-sm text-gray-400",children:"No results found"}),g&&l.length>c&&r.jsxs("li",{className:"px-4 py-2 text-center text-xs text-gray-400 bg-gray-50 italic",children:["Showing first ",c," of ",l.length]})]}),V&&y&&(a&&t.length>0||!a&&t)&&r.jsxs("div",{className:"border-t bg-gray-50 px-4 py-2.5 text-xs text-gray-600",children:[r.jsx("span",{className:"font-semibold text-gray-400 uppercase tracking-wider",children:"Selected:"})," ",r.jsx("span",{className:"text-blue-700",children:a?t.join(", "):t})]})]});return b?C.createPortal(r.jsx("div",{className:"fixed inset-0 flex justify-center items-center pointer-events-none",children:r.jsx("div",{className:"pointer-events-auto",children:v})}),document.body):v}N.__docgenInfo={description:"",methods:[],displayName:"SearchableList",props:{options:{defaultValue:{value:"[]",computed:!1},required:!1},placeholder:{defaultValue:{value:'"Search..."',computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},searchable:{defaultValue:{value:"true",computed:!1},required:!1},usePortal:{defaultValue:{value:"false",computed:!1},required:!1},maxVisibleOptions:{defaultValue:{value:"100",computed:!1},required:!1},enableLimit:{defaultValue:{value:"true",computed:!1},required:!1},enableSelection:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1}}};const D={title:"Components/SearchableList",component:N,parameters:{layout:"centered"},tags:["autodocs"]},h=["JavaScript","React","Next.js","TypeScript","Node.js","Vue.js","Angular"],i={args:{options:h,multiple:!0,searchable:!0,usePortal:!1,enableLimit:!0,enableSelection:!0,showFooter:!0,placeholder:"Search frameworks..."}},f={args:{options:h,multiple:!1,searchable:!0,showFooter:!0}},p={args:{options:h,searchable:!1}},m={args:{options:h,usePortal:!1,multiple:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    multiple: true,
    searchable: true,
    usePortal: false,
    enableLimit: true,
    enableSelection: true,
    showFooter: true,
    placeholder: "Search frameworks..."
  }
}`,...i.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    multiple: false,
    searchable: true,
    showFooter: true
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    searchable: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    usePortal: false,
    // Tests createPortal logic
    multiple: true
  }
}`,...m.parameters?.docs?.source}}};const I=["Default","SingleSelect","NoSearch","PortalView"];export{i as Default,p as NoSearch,m as PortalView,f as SingleSelect,I as __namedExportsOrder,D as default};
