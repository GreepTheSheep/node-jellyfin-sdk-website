import{d as t,k as e,f as n,M as a,o as s,c as o,b as r,q as l}from"./vendor.b9103371.js";import{u as p}from"./index.64c4f874.js";import{_ as i,m as u}from"./SourceButton.vue_vue&type=script&setup=true&lang.aa6d8a38.js";const c={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tmx-auto\n\t\t\tpy-16\n\t\t\tpx-4\n\t\t\tbreak-words-legacy\n\t\t\tsm:px-8\n\t\t\tlg:py-8\n\t\t\tw-full\n\t\t\tmax-w-4xl\n\t\t\tlg:max-w-full\n\t\t"};var m=t({setup(t){const m=e(),d=p(),f=n((()=>d.state.docs)),v=n((()=>d.state.file)),y=n((()=>{var t;const e=null==(t=f.value)?void 0:t.custom[m.params.category].files[m.params.file];if(!e)return;let n;return d.commit({type:"setFile",file:e}),n="md"===e.type?e.content:`# ${e.name}\n\`\`\`${e.type}\n${e.content}\n\`\`\``,u(n)}));return a((()=>{const t=document.getElementById("container");t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"})})),(t,e)=>{var n;return s(),o("div",c,[r(i,{class:"float-right mt-2",path:null==(n=l(v))?void 0:n.path},null,8,["path"]),r("div",{innerHTML:l(y)},null,8,["innerHTML"])])}}});export{m as default};