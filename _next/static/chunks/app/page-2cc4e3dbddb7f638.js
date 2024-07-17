(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3278:function(e,t,n){Promise.resolve().then(n.bind(n,9961))},9961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var o=n(7437),a=n(2265),i=n(4038),r=n(6232);let l=i.IR.create(e=>{let{theme:t}=e;return{overlay:{pointerEvents:"none",height:"100%",width:"100%",maxWidth:1280,position:"fixed",right:"calc((100% - min(1280px, 100%)) / 2)",zIndex:100,"& *":{pointerEvents:"auto"}},socials:{position:"absolute",bottom:0,right:10,"& .line":{margin:"auto",height:100,width:"1pt",backgroundColor:t.primary.accent.hex()}}}});function c(e){let{}=e,{classes:t}=l();return(0,o.jsx)("section",{className:t.overlay,children:(0,o.jsxs)("div",{className:t.socials,children:[(0,o.jsx)(r.Z,{appearance:"text",icon:"github",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://github.com/kalvingarcia/","_blank"),300)}),(0,o.jsx)(r.Z,{appearance:"text",icon:"linkedin",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://linkedin.com/in/kalvin-garcia/","_blank"),300)}),(0,o.jsx)(r.Z,{appearance:"text",icon:"itchio",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://kalvingarcia.itch.io/","_blank"),300)}),(0,o.jsx)("div",{className:"line"})]})})}var s=n(6545);let d=i.IR.create(e=>{let{theme:t,percentage:n}=e;return{container:{padding:5},slider:{margin:0,marginLeft:-2,boxSizing:"border-box",WebkitAppearance:"none",position:"relative",backgroundColor:t.primary.container.alpha(.5).hexa(),width:"100%",height:10,borderRadius:20,transition:"background-color 300ms ease-in-out","&:hover":{backgroundColor:t.primary.container.alpha(.75).hexa()},"&::-webkit-slider-thumb":{WebkitAppearance:"none",position:"relative",backgroundColor:t.primary.accent.hex(),width:20,height:20,borderRadius:"100%",transition:"box-shadow 300ms ease-in-out","&:hover":{boxShadow:"0px 0px 0px 10px ".concat(t.primary.onContainer.alpha(.25).hexa())}},"&::before":{content:"''",position:"absolute",inset:0,width:"calc(".concat(n," * 100%)"),height:10,borderRadius:20,backgroundColor:t.primary.accent.alpha(.75).hexa(),transition:"background-color 300ms ease-in-out"},"&:hover::before":{backgroundColor:t.primary.accent.alpha(.8).hexa()}}}});function h(e){let{className:t,min:n=0,max:i=100,value:r=(n+i)/2,onChange:l,...c}=e,[s,h]=(0,a.useState)((r-n)/(i-n)),u=(0,a.useCallback)(e=>{let t=e.target.value;h((t-n)/(i-n)),null==l||l(t)},[n,i]),{cx:m,classes:p}=d({percentage:s});return(0,o.jsx)("div",{className:p.container,children:(0,o.jsx)("input",{type:"range",min:n,max:i,className:m(p.slider,t),onChange:u,...c})})}var u=n(4883),m=n(2627),p=n(5271),x=n(7875);let g=(0,x.F4)({from:{opacity:0}}),f=(0,x.F4)({to:{opacity:0}}),b=i.IR.create(e=>{let{theme:t,duration:n}=e;return{fadeActive:{opacity:1},fadeInactive:{opacity:0},fadeIn:{animation:"".concat(g," ").concat(n,"ms ease-in forwards")},fadeOut:{animation:"".concat(f," ").concat(n,"ms ease-in forwards")}}});function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,{classes:{fadeInactive:t,fadeIn:n,fadeActive:o,fadeOut:a}}=b({duration:e});return{fadeInactive:t,fadeIn:n,fadeActive:o,fadeOut:a}}let y=i.IR.create(e=>{let{theme:t}=e;return{text:{float:"right",padding:40,display:"flex",flexDirection:"column",gap:20,width:"100%",maxWidth:640,height:"fit-content"},headline:{fontSize:"5rem"},bio:{height:200,overflow:"auto"},buttons:{display:"flex",gap:10,alignSelf:"flex-end"}}}),w=["I make websites look pretty and computers learn lots.","I’m a Frontend Developer dedicated to creative problem-solving and innovative thinking.","I am a Frontend Developer with expertise in design, React, Next, and AI development. I am dedicated to creative problem-solving and innovative thinking.","I am a Frontend Developer skilled in React, Next, and AI development. I bring a diverse skill set including mobile and web design, front-end development, machine learning, and natural language processing. My projects, like Urban Archaeology's Website and Comensal, reflect my dedication to creative problem-solving and innovative thinking.","I am a Frontend Developer with extensive experience in React, Next, and AI development. I am always searching for opportunities to apply my diverse skill set, which includes web design, front-end development, machine learning, and natural language processing. My projects, like Urban Archaeology's Website and Comensal, reflect my dedication to creative problem-solving and innovative thinking. When I'm not coding, I'm fantasizing about how to make my office space cooler. I enjoy long walks in the park with my partner, where we discuss the profound mysteries of life (the plot lines of whatever show we're watching). Also, I firmly believe all offices should have emotional support cats, and I'm willing to die on that hill."];function j(e){let{show:t}=e,{fadeInactive:n,fadeIn:i,fadeActive:l}=v(),[c,s]=(0,a.useState)("I am a Frontend Developer with expertise in design, React, Next, and AI development. I am dedicated to creative problem-solving and innovative thinking."),d=(0,a.useCallback)(e=>{s(w[e])},[]),{classes:x}=y();return(0,o.jsx)(p.Q,{start:t,inactive:n,begin:i,active:l,children:(0,o.jsxs)("div",{className:x.text,children:[(0,o.jsx)(u.Dx,{className:x.headline,children:"About me..."}),(0,o.jsx)(u.uT,{className:x.bio,children:c}),(0,o.jsx)(h,{min:0,max:4,value:2,onChange:d,step:1}),(0,o.jsx)(p.Q,{start:t,inactive:n,begin:i,active:l,children:(0,o.jsxs)("div",{className:x.buttons,children:[(0,o.jsxs)(m.Z,{role:"primary",appearance:"filled",onClick:()=>window.location.href="#contact",children:[(0,o.jsx)(r.J,{icon:"alternate_email"}),(0,o.jsx)(u.__,{children:"Contact Me!"})]}),(0,o.jsx)(m.Z,{className:x.projectsButton,role:"secondary",appearance:"text",onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com/",300),children:(0,o.jsx)(u.__,{children:"My Projects"})})]})})]})})}var k=n(9844),C=n(8998);let N=i.IR.create(e=>{let{theme:t,rippleClass:n}=e;return{card:{display:"flex",position:"relative",backgroundColor:t.neutral.containerLow.hex(),borderRadius:20,overflow:"hidden",clipPath:"inset(0 0 0 0 round 20px)",width:"100%",height:200,flexDirection:"row",["@media (max-width: ".concat(640,"px)")]:{flexDirection:"column",height:500},"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",inset:0,backgroundColor:t.neutral.onContainer.hex(),opacity:0},"&:hover::before":{opacity:.2},["& .".concat(n)]:{backgroundColor:t.neutral.onContainer.hex()}},image:{borderRadius:20,overflow:"hidden",clipPath:"inset(0 0 0 0 round 20px)",width:"40%",height:"100%",["@media (max-width: ".concat(640,"px)")]:{width:"100%",height:"60%"},"& img":{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},"&::after":{content:"''",position:"absolute",width:"100%",height:"100%",inset:0,backgroundColor:t.neutral.onContainer.hex(),opacity:0},"&:hover::after":{opacity:.2},["& .".concat(n)]:{backgroundColor:t.neutral.onContainer.hex()}},text:{display:"flex",flexDirection:"column",gap:20,padding:20,overflow:"hidden",width:"60%",height:"100%",["@media (max-width: ".concat(640,"px)")]:{width:"100%",height:"40%"},"& p":{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",width:"100%",overflow:"hidden",textOverflow:"ellipsis"}},title:{fontSize:"2.5rem"}}});function I(e){let{className:t,image:n,heading:a,body:i,directory:r}=e,{rippleClass:l,rippleExpand:c,rippleFade:s}=(0,C.Z)(),{cx:d,classes:h}=N({rippleClass:l});return(0,o.jsx)("div",{className:d(h.card,t),onMouseDown:c,onMouseUp:s,onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com?open=".concat(r),300),children:(0,o.jsxs)(k.r,{role:"secondary",type:"container",children:[(0,o.jsx)("figure",{className:h.image,onMouseDown:c,onMouseUp:s,children:(0,o.jsx)("img",{src:n,alt:"Project Card Image"})}),(0,o.jsxs)("div",{className:h.text,children:[(0,o.jsx)(u.QE,{className:h.title,children:a}),(0,o.jsx)(u.uT,{children:i})]})]})})}let _=i.IR.create(e=>{let{theme:t}=e;return{content:{padding:40,width:"100%",display:"flex",gap:20,flexDirection:"column"},flavorText:{color:t.secondary.accent.hex()},headline:{fontSize:"6rem"},projects:{display:"flex",flexDirection:"column",gap:10,overflowX:"auto",alignItems:"center",justifyContent:"center",overflow:"visible"},button:{alignSelf:"center"}}});function T(e){let{}=e,[t,n]=(0,a.useState)({}),[i,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{n(await fetch("./featured.json").then(e=>e.json())),l(!0)})()},[]);let{fadeInactive:c,fadeIn:s,fadeActive:d}=v(),[h,x]=(0,a.useState)(!1),{classes:g}=_();return(0,o.jsx)(p.Q,{start:!0,inactive:c,begin:s,active:d,children:(0,o.jsxs)("div",{className:g.content,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.X6,{className:g.flavorText,children:"Some things I've worked on:"}),(0,o.jsx)(u.Dx,{className:g.headline,children:"Featured Projects"})]}),(0,o.jsx)("div",{className:g.projects,children:i?t.map(e=>{let{directory:t,name:n,description:a}=e;return(0,o.jsx)(I,{image:"/images/".concat(t,"/card.jpg"),heading:n,body:a,directory:t})}):""}),(0,o.jsxs)(m.Z,{className:g.button,appearance:"outlined",onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com/",300),children:[(0,o.jsx)(u.__,{children:"Want to see more?"}),(0,o.jsx)(r.J,{icon:"arrow_outward"})]})]})})}let S=i.IR.create(e=>{let{theme:t}=e;return{form:{display:"flex",flexDirection:"column",gap:20}}});function D(e){let{className:t,method:n="post",children:a,...i}=e,{cx:r,classes:l}=S();return(0,o.jsx)("form",{className:r(l.form,t),method:n,...i,children:a})}let R=i.IR.create(e=>{let{theme:t,filled:n,rippleClass:o}=e;return{container:{width:"100%",height:"100%",display:"flex",flexDirection:"column","& .helper":{padding:5,width:"100%",height:"fit-content",fontSize:"0.75rem",color:t.neutral.onContainer.alpha(.5).hexa(),tansition:"color 200ms ease-in-out"},"&:focus-within .helper":{color:t.tertiary.accent.hex()}},textField:{width:"100%",height:"3rem",position:"relative",cursor:"text",borderRadius:"10px 10px 0 0",backgroundColor:t.neutral.containerHighest.hex(),padding:"10px 20px",overflow:"hidden",clipPath:"inset(0 0 0 0 round 10px 10px 0 0)",borderBottom:"1pt solid ".concat(t.neutral.onContainer.alpha(.5).hexa()),transition:"border-bottom 200ms ease-in-out","&:focus-within":{borderColor:t.tertiary.accent.hex()},"&::before":{content:"''",position:"absolute",inset:0,opacity:0,backgroundColor:t.neutral.onContainer.hex()},"&:hover::before":{opacity:.2},"&:focus-within::before":{opacity:.1},"&::after":{content:"''",position:"absolute",inset:0,transformOrigin:"bottom",transform:"scale(0)",opacity:0,transition:"transform 200ms ease, opacity 200ms ease",borderBottom:"1pt solid ".concat(t.tertiary.accent.hex())},"&:focus-within::after":{transform:"scale(1)",opacity:1},"& .field":{width:"100%",outline:"none",border:"none",position:"relative",bottom:-10,backgroundColor:"transparent",fontFamily:"var(--body-font)",color:t.neutral.onContainer.hex(),"&::placeholder":{color:"transparent",fontFamily:"var(--body-font)"},"&:focus::placeholder":{color:t.neutral.onContainer.alpha(.5).hexa()},"&:autofill":{outline:"none",border:"none",transition:"background-color 600000s 0s, color 600000s 0s, font 600000s 0s",fontFamily:"var(--body-font)"}},"& .label":{top:25,position:"absolute",transformOrigin:"top left",transform:n?"translate(0, -100%) scale(0.8)":"translate(0, -50%)",opacity:.5,transition:"transform 200ms ease, opacity 200ms ease, color 200ms ease",color:t.neutral.onContainer.hex()},"&:focus-within .label":{transform:"translate(0, -100%) scale(0.8)",fontWeight:"bold",opacity:1,color:t.tertiary.accent.hex()},"&:has(input:required) .label::after":{content:"'*'"},["& .".concat(o)]:{backgroundColor:t.neutral.onContainer.hex()}},textArea:{width:"100%",resize:"none"}}});function E(e){let{className:t,label:n,sampleText:i,helperText:r,onChange:l,...c}=e,{rippleClass:s,rippleExpand:d,rippleFade:h}=(0,C.Z)(),m=(0,a.useCallback)(()=>{let e=document.getElementById(n);e.focus(),e.setSelectionRange(0,e.value.length)},[]),p=(0,a.useCallback)(e=>{var t;(null===(t=e.relatedTarget)||void 0===t?void 0:t.contains(e.currentTarget))&&e.currentTarget.focus()},[]),[x,g]=(0,a.useState)(!1),f=(0,a.useCallback)(e=>{let t=e.currentTarget;g(!0),t.value&&t.value.trim().length||g(!1),null==l||l(e)},[]);(0,a.useEffect)(()=>(document.getElementById(n).addEventListener("input",f),()=>document.getElementById(n).removeEventListener("input",f)),[]);let{cx:b,classes:v}=R({filled:x,rippleClass:s});return(0,o.jsxs)("div",{className:v.container,children:[(0,o.jsx)("div",{tabIndex:-1,className:b(v.textField,t),onMouseDown:x?void 0:d,onMouseUp:h,onClick:m,children:(0,o.jsxs)("label",{htmlFor:n,children:[(0,o.jsx)(u.__,{className:"label",children:n}),i?(0,o.jsx)(u.__,{className:"sample",children:i}):"",(0,o.jsx)("input",{className:"field",id:n,name:n,type:"text",onBlur:p,...c})]})}),r?(0,o.jsx)(u.__,{className:"helper",children:r}):""]})}let F=i.IR.create(e=>{let{theme:t,filled:n,rippleClass:o}=e;return{container:{width:"100%",height:"100%",display:"flex",flexDirection:"column","& > *":{flex:"0 0 fit-content"},"& .helper":{padding:5,width:"100%",height:"fit-content",fontSize:"0.75rem",color:t.neutral.onContainer.alpha(.5).hexa(),tansition:"color 200ms ease-in-out"},"&:focus-within .helper":{color:t.tertiary.accent.hex()}},textArea:{width:"100%",position:"relative",cursor:"text",borderRadius:"10px 10px 0 0",backgroundColor:t.neutral.containerHighest.hex(),padding:"10px 20px",overflow:"hidden",clipPath:"inset(0 0 0 0 round 10px 10px 0 0)",borderBottom:"1pt solid ".concat(t.neutral.onContainer.alpha(.5).hexa()),transition:"border-bottom 200ms ease-in-out","&:focus-within":{borderColor:t.tertiary.accent.hex()},"&::before":{content:"''",position:"absolute",inset:0,opacity:0,backgroundColor:t.neutral.onContainer.hex()},"&:hover::before":{opacity:.2},"&:focus-within::before":{opacity:.1},"&::after":{content:"''",position:"absolute",inset:0,transformOrigin:"bottom",transform:"scale(0)",opacity:0,transition:"transform 200ms ease, opacity 200ms ease",borderBottom:"1pt solid ".concat(t.tertiary.accent.hex())},"&:focus-within::after":{transform:"scale(1)",opacity:1},"& .field":{width:"100%",minHeight:100,maxHeight:196,resize:"none",outline:"none",border:"none",position:"relative",bottom:-10,backgroundColor:"transparent",fontFamily:"var(--body-font)",lineHeight:1.5,color:t.neutral.onContainer.hex(),"&:autofill":{outline:"none",border:"none",transition:"background-color 600000s 0s, color 600000s 0s"}},"& .label":{top:25,position:"absolute",transformOrigin:"top left",transform:n?"translate(0, -100%) scale(0.8)":"translate(0, -50%)",opacity:.5,transition:"transform 200ms ease, opacity 200ms ease, color 200ms ease",color:t.neutral.onContainer.hex()},"&:focus-within .label":{transform:"translate(0, -100%) scale(0.8)",fontWeight:"bold",opacity:1,color:t.tertiary.accent.hex()},"&:has(textarea:required) .label::after":{content:"'*'"},"& .sample":{display:"none",position:"absolute",width:"calc(100% - 44px)",top:22,left:22,opacity:.5,color:t.neutral.onContainer.hex()},"&:focus-within .sample":{display:n?"none":"block"},["& .".concat(o)]:{backgroundColor:t.neutral.onContainer.hex()}}}});function M(e){let{className:t,label:n,children:i,helperText:r,onChange:l,...c}=e,{rippleClass:s,rippleExpand:d,rippleFade:h}=(0,C.Z)(),m=(0,a.useCallback)(()=>{let e=document.getElementById(n);e.focus(),e.setSelectionRange(0,e.value.length)},[]),p=(0,a.useCallback)(e=>{var t;(null===(t=e.relatedTarget)||void 0===t?void 0:t.contains(e.currentTarget))&&e.currentTarget.focus()},[]),[x,g]=(0,a.useState)(!1),f=(0,a.useCallback)(e=>{let t=e.currentTarget;g(!0),t.value&&t.value.trim().length||g(!1),t.style.height="1px",t.style.height="".concat(t.scrollHeight,"px"),console.log(t.scrollHeight),null==l||l(e)},[]);(0,a.useEffect)(()=>(document.getElementById(n).addEventListener("input",f),()=>document.getElementById(n).removeEventListener("input",f)),[]);let{cx:b,classes:v}=F({filled:x,rippleClass:s});return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{tabIndex:-1,className:b(v.textArea,t),onMouseDown:x?void 0:d,onMouseUp:h,onClick:m,children:[i?(0,o.jsx)(u.__,{className:"sample",children:i}):"",(0,o.jsxs)("label",{htmlFor:n,children:[(0,o.jsx)(u.__,{className:"label",children:n}),(0,o.jsx)("textarea",{rows:3,className:"field",id:n,name:n,onBlur:p,...c,autoComplete:"off"})]})]}),r?(0,o.jsx)(u.__,{className:"helper",children:r}):""]})}let W=i.IR.create(e=>{let{theme:t}=e;return{content:{padding:40,width:"100%",overflow:"hidden",display:"flex",gap:40,flexDirection:"column"},flavorText:{color:t.secondary.accent.hex()},title:{fontSize:"5rem"},contact:{padding:20,width:"100%",maxWidth:640,borderRadius:20,backgroundColor:t.neutral.container.hex()},submit:{alignSelf:"flex-end"},email:{color:t.tertiary.onContainer.hex(),"&:hover":{color:t.tertiary.accent.hex()}}}});function A(e){let{}=e,{fadeInactive:t,fadeIn:n,fadeActive:i}=v(),[l,c]=(0,a.useState)(!1),{cx:s,classes:d}=W();return(0,o.jsx)(p.Q,{start:!0,inactive:t,begin:n,active:i,children:(0,o.jsxs)("div",{id:"contact",className:d.content,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.X6,{className:d.flavorText,children:"Need to reach me?"}),(0,o.jsx)(u.Dx,{className:d.title,children:"Contact Me*"})]}),(0,o.jsx)("div",{className:d.contact,children:(0,o.jsxs)(D,{className:"gform","data-email":"kalvigarcia@gmail.com",action:"https://script.google.com/macros/s/AKfycbwbQkVagBCDvywt_KQrXJyEQX9QkPwnYTF1IV9chdv_m5gBrlWFCc8dIhfYiJzfJnMi7Q/exec",children:[(0,o.jsx)(E,{label:"Name",placeholder:"John Doe",required:!0}),(0,o.jsx)(E,{label:"Email",placeholder:"sample@email.com",helperText:"This will let me know where I can contact you.",required:!0}),(0,o.jsx)(E,{label:"Phone (optional)",placeholder:"123-456-7890"}),(0,o.jsx)(M,{label:"Message",required:!0,children:"Hello, I'm inquiring about your car's extended warranty."}),(0,o.jsxs)(m.Z,{className:d.submit,type:"submit",children:[(0,o.jsx)(r.J,{icon:"send"}),(0,o.jsx)(u.__,{children:"Send"})]})]})}),(0,o.jsxs)(u.__,{children:["*You can also send emails directy to ",(0,o.jsx)("a",{className:d.email,href:"mailto:contact@kalvingarcia.com",children:"contact@kalvingarcia.com"}),"!"]})]})})}let B=i.IR.withName("Splash").create(e=>{let{theme:t}=e;return{tagline:{position:"sticky",zIndex:100,top:0,height:"fit-content",padding:"20px 40px",display:"flex",flexDirection:"column",gap:10,backgroundColor:t.neutral.background.alpha(.6).hexa(),backdropFilter:"blur(8px)","& > *":{textWrap:"nowrap"}},intro:{fontSize:"1.2rem",fontWeight:"bold"},typewriter:{minHeight:"2rem",display:"block",position:"relative",fontSize:"2rem",fontFamily:"var(--display-font)",color:t.primary.accent.hex(),lineHeight:1,textDecoration:"".concat(t.tertiary.accent.hex()," wavy underline"),textDecorationSkipInk:"none",textUnderlineOffset:"10px"}}});function z(e){let{show:t=!1}=e,{fadeInactive:n,fadeIn:i,fadeActive:r}=v(),l=["a Designer.","a Developer.","an Engineer.","a Programmer.","Kalvin Garcia!"],[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((e,t,n)=>{s(!0),!c&&t<l[n].length?(e.innerHTML+=l[n].charAt(t),setTimeout(()=>d(e,t+1,n),80)):!c&&n<l.length-1&&setTimeout(()=>h(e,l[n].length,n),320)},[c]),h=(0,a.useCallback)((e,t,n)=>{!c&&t>-1?(e.innerHTML=e.innerHTML.slice(0,t),setTimeout(()=>h(e,t-1,n),40)):c||setTimeout(()=>d(e,0,n+1),80)},[c]),{classes:m}=B();return(0,o.jsx)(p.Q,{start:t,inactive:n,begin:i,active:r,children:(0,o.jsxs)("div",{className:m.tagline,children:[(0,o.jsx)(u.__,{className:m.intro,children:"Hello, I'm..."}),(0,o.jsx)("span",{ref:e=>e?d(e,0,0):console.assert(!e,"Tagline not Rendered"),className:m.typewriter})]})})}let H=i.IR.create(e=>{let{theme:t}=e;return{homepage:{width:"100%",maxHeight:"100vh",overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth"},content:{margin:"auto",width:"100%",maxWidth:1280,minHeight:"100%"},accredation:{margin:"auto",textAlign:"center",padding:10,fontSize:"0.75rem",color:t.secondary.accent.alpha(.75).hexa()}}});function P(e){let{}=e,[t,n]=(0,a.useState)(!0),{classes:i}=H();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{}),(0,o.jsx)("section",{className:i.homepage,children:(0,o.jsxs)("div",{className:i.content,children:[(0,o.jsx)(z,{show:!0}),(0,o.jsx)(j,{show:!0}),(0,o.jsx)(T,{}),(0,o.jsx)(A,{}),(0,o.jsx)(u.__,{className:i.accredation,children:"Website designed and built by Kalvin Garcia."})]})})]})}}},function(e){e.O(0,[921,945,348,971,23,744],function(){return e(e.s=3278)}),_N_E=e.O()}]);