(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{8123:function(e,t,n){Promise.resolve().then(n.bind(n,5634))},5634:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var a=n(7437),o=n(6463),l=n(2265),r=n(4038),i=n(4883),c=n(6232),s=n(2627);let d=r.IR.withNestedSelectors().create(e=>{let{theme:t}=e;return{table:{textAlign:"left","& .column":{verticalAlign:"top",padding:10},"& tr":{borderBottom:"1pt solid ".concat(t.primary.container.alpha(.2).hexa())},"& tbody :last-child":{borderBottom:"none"}},header:{fontWeight:"bold",color:t.secondary.accent.hex(),position:"relative",zIndex:10,"& th":{backdropFilter:"blur(8px)"}},row:{position:"relative"}}});function h(e){let{className:t,children:n,...o}=e,{cx:r,classes:i}=d({});return(0,a.jsx)("tr",{className:r(i.row,t),...o,children:l.Children.map(n,(e,t)=>(0,a.jsx)("td",{className:"column column-".concat(t),children:e},"column-".concat(t)))})}function m(e){let{className:t,headers:n,children:o,...l}=e,{cx:r,classes:i}=d({});return(0,a.jsxs)("table",{className:r(i.table,t),...l,children:[n?(0,a.jsx)("thead",{className:i.header,children:(0,a.jsx)("tr",{children:n.map((e,t)=>(0,a.jsx)("th",{className:"column column-".concat(t),children:e},"column-".concat(t)))})}):"",(0,a.jsx)("tbody",{children:o})]})}var u=n(4887),p=n(7875),x=n(5271),j=n(9844);let g=(0,p.F4)({"0%":{opacity:0}}),f=(0,p.F4)({"100%":{opacity:0}}),b=(0,p.F4)({"0%":{transform:"translate(0, 1000px)"}}),y=(0,p.F4)({"100%":{transform:"translate(0, 1000px)"}}),w=(0,p.F4)({"0%":{transform:"scale(0.95)"}}),k=(0,p.F4)({"100%":{transform:"scale(0.95)"}}),v=r.IR.create(e=>{let{theme:t,role:n,elevation:a,delay:o}=e;return{modal:{position:"absolute",zIndex:1e3},scrim:{position:"fixed",width:"100%",height:"100%",inset:0,opacity:.75,backgroundColor:t.neutral.shadow.hex()},content:{position:"fixed",width:"80%",height:"80%",padding:40,borderRadius:20,overflowX:"hidden",overflowY:"auto",clip:"inset(0 0 0 0 20px)",backgroundColor:t[n]["container".concat("normal"===a?"":a[0].toUpperCase()+a.slice(1))].hex()},fadeIn:{animation:"".concat(g," ").concat(o,"ms ease-out forwards")},fadeOut:{animation:"".concat(f," ").concat(o,"ms ease-in forwards")},slideUp:{animation:"".concat(b," ").concat(o,"ms ease-in-out forwards")},slideDown:{animation:"".concat(y," ").concat(o,"ms ease-in forwards")},zoomIn:{animation:"".concat(w," ").concat(o,"ms ease-in-out forwards")},zoomOut:{animation:"".concat(k," ").concat(o,"ms ease-in forwards"),overflow:"hidden"},lockScroll:{overflow:"hidden"}}});function _(e){let{className:t,role:n="neutral",elevation:o="normal",open:r,setOpen:i,delay:c=300,children:s,...d}=e;"neutral"!=n&&(o="normal");let[h,m]=(0,l.useState)(!1);(0,l.useEffect)(()=>{h&&!r?(document.getElementById("root").classList.remove(g.zoomOut),document.getElementById("root").classList.add(g.zoomIn),document.body.classList.remove(g.lockScroll),document.documentElement.classList.remove(g.lockScroll),setTimeout(()=>m(!1)||document.getElementById("root").classList.remove(g.zoomIn),c)):!h&&r&&(document.getElementById("root").classList.add(g.zoomOut),document.body.classList.add(g.lockScroll),document.documentElement.classList.add(g.lockScroll),m(!0))},[r]);let{cx:p,classes:g}=v({role:n,elevation:o,delay:c});return h&&(0,u.createPortal)((0,a.jsx)(j.r,{role:n,type:"container",children:(0,a.jsxs)("div",{className:g.modal,children:[(0,a.jsx)(x.u,{show:r,enter:g.fadeIn,exit:g.fadeOut,duration:c,children:(0,a.jsx)("div",{className:g.scrim,onClick:()=>i(!1)})}),(0,a.jsx)(x.u,{show:r,enter:p(g.fadeIn,g.slideUp),exit:p(g.fadeOut,g.slideDown),duration:c,children:(0,a.jsx)("div",{className:p(g.content,t),...d,children:s})})]})}),document.body)}var N=n(8904),C=n(5968);let I=r.IR.create(e=>{let{theme:t}=e;return{codeContainer:{margin:0,width:"100%",overflowX:"scroll",padding:20,borderRadius:20,backgroundColor:t.primary.container.lightness(10).hex(),color:t.primary.accent.lightness(90).hex(),fontFamily:"var(--code-font)",fontSize:"0.75rem",lineHeight:1.5,scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},"\n            & .hljs-doctag,\n            & .hljs-keyword,\n            & .hljs-meta .hljs-keyword,\n            & .hljs-template-tag,\n            & .hljs-template-variable,\n            & .hljs-type,\n            & .hljs-variable.language_ \n        ":{color:t.primary.accent.lightness(60).hex()},"\n            & .hljs-title,\n            & .hljs-title.class_,\n            & .hljs-title.class_.inherited__,\n            & .hljs-title.function_ \n        ":{color:t.secondary.accent.lightness(70).hex()},"\n            .hljs-attr,\n            .hljs-attribute,\n            .hljs-literal,\n            .hljs-meta,\n            .hljs-number,\n            .hljs-operator,\n            .hljs-variable,\n            .hljs-selector-attr,\n            .hljs-selector-class,\n            .hljs-selector-id\n        ":{color:t.secondary.accent.lightness(60).hex()},"\n            & .hljs-regexp,\n            & .hljs-string,\n            & .hljs-meta .hljs-string\n        ":{color:t.tertiary.accent.lightness(60).hex()},"\n            & .hljs-built_in,\n            & .hljs-symbol\n        ":{color:t.tertiary.accent.lightness(90).hex()},"\n            & .hljs-comment\n        ":{color:t.primary.accent.lightness(30).hex()},"\n            & .hljs-subst,\n            & .hljs-punctuation\n        ":{color:t.tertiary.accent.lightness(30).hex()}}}});function S(e){let{className:t,language:n,children:o}=e,[r,i]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{r&&(r.innerHTML=C.Z.highlight(o,{language:n}).value)},[r]);let{cx:c,classes:s}=I();return(0,a.jsx)("pre",{className:c(s.codeContainer,t),children:(0,a.jsx)("code",{ref:e=>i(e)})})}let B=r.IR.create(e=>{let{theme:t}=e;return{title:{marginBottom:20,color:t.primary.accent.hex()},subtitle:{marginBottom:20,color:t.tertiary.accent.hex()},heading:{marginBottom:10,color:t.primary.onContainer.hex()},subheading:{marginBottom:10,color:t.tertiary.onContainer.hex()},button:{display:"inline-flex"},body:{marginBottom:15,lineHeight:1.5,opacity:.75},image:{marginBottom:10,width:"100%",height:"100%"},code:{marginBottom:10}}});function E(e){let{children:t}=e,{classes:n}=B();return(0,a.jsx)(N.U,{components:{h1(e){let{children:t}=e;return(0,a.jsx)(i.Dx,{className:n.title,children:t})},h2(e){let{children:t}=e;return(0,a.jsx)(i.X6,{className:n.subtitle,children:t})},h3(e){let{children:t}=e;return(0,a.jsx)(i.QE,{className:n.heading,children:t})},h4(e){let{children:t}=e;return(0,a.jsx)(i.pm,{className:n.subheading,children:t})},h5(e){let{children:t}=e,o=t.split(",");return(0,a.jsx)(s.Z,{className:n.button,appearance:"outlined",onClick:()=>setTimeout(()=>window.open(o[1],"_blank"),300),children:(0,a.jsx)(i.__,{children:o[0]})})},p(e){let{children:t}=e;return(0,a.jsx)(i.uT,{className:n.body,children:t})},img(e){let{src:t,alt:o}=e;return t?(0,a.jsx)("img",{className:n.image,src:t,alt:o}):""},code(e){let{className:t,children:o}=e;return(0,a.jsx)(S,{className:n.code,language:t.replace("language-",""),children:o})},pre(e){let{children:t}=e;return t}},children:t})}let z=r.IR.create(e=>{let{theme:t,role:n,active:a}=e;return{chip:{minWidth:"fit-content",minHeight:"fit-content",maxWidth:"fit-content",maxHeight:"fit-content",position:"relative",overflow:"hidden",padding:"5px 10px",borderRadius:2e3,display:"flex",alignItems:"center",justifyContent:"center",gap:5,fontSize:"0.9rem",backgroundColor:t[a?n:"neutral"][a?"container":"containerHigh"].hex(),"&::after":{content:"''",width:"100%",height:"100%",position:"absolute",inset:0,backgroundColor:t[a?n:"neutral"].onContainer.hex(),opacity:0,transition:"opacity 300ms ease"},"&:hover::after":{opacity:.2}}}});function L(e){let{className:t,role:n="primary",activeDefault:o=!1,onClick:r,children:c,...s}=e,[d,h]=(0,l.useState)(o),m=(0,l.useCallback)(e=>{null==r||r(e),h(!d)},[d]),{cx:u,classes:p}=z({role:n,active:d});return(0,a.jsx)(j.r,{role:d?n:"neutral",type:"container",children:(0,a.jsx)(i.__,{className:u(p.chip,t),onClick:m,...s,children:c})})}var R=n(6545),F=n(6417);let O=r.IR.create(e=>{let{theme:t}=e;return{projects:{padding:40,margin:"auto",width:"100%",maxWidth:1280},backLink:{marginBottom:10},list:{width:"100%",marginTop:50,borderCollapse:"collapse","& .column-3":{maxWidth:150},["@media (max-width: ".concat(1e3,"px)")]:{"& .column-3":{display:"none"}},["@media (max-width: ".concat(1200,"px)")]:{"& .column-2":{display:"none"}}},openModal:{cursor:"pointer","&:hover":{color:t.primary.accent.hex(),"& i":{color:t.primary.accent.hex()}},"& i":{display:"inline-block",fontSize:"1rem"}},technologies:{display:"flex",flexWrap:"wrap",gap:5},links:{display:"flex",gap:5,["@media (max-width: ".concat(600,"px)")]:{flexDirection:"column"}},modal:{maxWidth:1e3,height:"fit-content",maxHeight:"80%",top:"10%",left:"calc((100% - min(80%, 1000px)) / 2)"}}});function W(e){let{}=e,[t,n]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),u=(0,l.useCallback)(async e=>{d(await fetch("./projects/".concat(e,".md")).then(e=>e.text())),n(!0)},[]),p=(0,o.useRouter)(),j=(0,l.useCallback)(e=>{e||p.push("/"),n(e)},[t]),g=(0,o.useSearchParams)();(0,l.useEffect)(()=>{let e=g.get("open");e?u(e):n(!1)},[g.get("open")]);let{fadeInactive:f,fadeIn:b,fadeActive:y}=(0,F.s)(),w=(0,l.useRef)({}),[k,v]=(0,l.useState)(!1);(0,l.useEffect)(()=>{(async()=>{w.current=await fetch("./projects.json").then(e=>e.json()),v(!0)})()},[]);let{classes:N}=O();return k?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R.Z,{}),(0,a.jsx)(x.Q,{start:!0,inactive:f,begin:b,active:y,children:(0,a.jsxs)("section",{className:N.projects,children:[(0,a.jsxs)(s.Z,{role:"tertiary",appearance:"text",className:N.backLink,onClick:()=>setTimeout(()=>window.location.href="https://www.kalvingarcia.com/",300),children:[(0,a.jsx)(c.J,{icon:"arrow_back"}),(0,a.jsx)(i.__,{children:"kalvingarcia.com"})]}),(0,a.jsx)(i.sS,{children:"Projects"}),(0,a.jsx)(m,{className:N.list,headers:w.current.columns,children:w.current.rows.map((e,t)=>e.display?(0,a.jsxs)(h,{children:[(0,a.jsx)(i.__,{children:e.completionDate}),(0,a.jsxs)(i.__,{className:N.openModal,onClick:()=>p.push("?open=".concat(e.directory)),children:[e.name," ",(0,a.jsx)(c.J,{icon:"open_in_new"})]}),(0,a.jsx)(i.__,{children:e.madeFor}),(0,a.jsx)("div",{className:N.technologies,children:e.technologiesUsed.map((e,t)=>(0,a.jsx)(L,{children:e},e))}),(0,a.jsx)("div",{className:N.links,children:Object.entries(e.links).map(e=>{let[t,n]=e;return(0,a.jsx)(c.Z,{appearance:"text",icon:t,iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open(n,"_blank"),300)},t)})})]},"row-".concat(t)):"")}),(0,a.jsx)(_,{className:N.modal,elevation:"highest",open:t,setOpen:j,children:(0,a.jsx)(E,{children:r})})]})})]}):""}}},function(e){e.O(0,[921,945,123,853,971,23,744],function(){return e(e.s=8123)}),_N_E=e.O()}]);