(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5196:function(e,t,n){Promise.resolve().then(n.bind(n,9499))},9499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(7437),i=n(2265),o=n(4038),r=n(6232);let l=o.IR.create(e=>{let{theme:t}=e;return{overlay:{pointerEvents:"none",height:"100%",width:"100%",maxWidth:1280,position:"fixed",right:"calc((100% - min(1280px, 100%)) / 2)",zIndex:100,"& *":{pointerEvents:"auto"}},socials:{position:"absolute",bottom:0,right:10,"& .line":{margin:"auto",height:100,width:"1pt",backgroundColor:t.primary.accent.hex()}}}});function s(e){let{}=e,{classes:t}=l();return(0,a.jsx)("section",{className:t.overlay,children:(0,a.jsxs)("div",{className:t.socials,children:[(0,a.jsx)(r.Z,{appearance:"text",icon:"github",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://github.com/kalvingarcia/","_blank"),300)}),(0,a.jsx)(r.Z,{appearance:"text",icon:"linkedin",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://linkedin.com/in/kalvin-garcia/","_blank"),300)}),(0,a.jsx)(r.Z,{appearance:"text",icon:"itchio",iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open("https://kalvingarcia.itch.io/","_blank"),300)}),(0,a.jsx)("div",{className:"line"})]})})}var c=n(6545);let d=o.IR.create(e=>{let{theme:t,percentage:n}=e;return{container:{padding:5},slider:{margin:0,marginLeft:-2,boxSizing:"border-box",WebkitAppearance:"none",position:"relative",backgroundColor:t.primary.container.alpha(.5).hexa(),width:"100%",height:10,borderRadius:20,transition:"background-color 300ms ease-in-out","&:hover":{backgroundColor:t.primary.container.alpha(.75).hexa()},"&::-webkit-slider-thumb":{WebkitAppearance:"none",position:"relative",backgroundColor:t.primary.accent.hex(),width:20,height:20,borderRadius:"100%",transition:"box-shadow 300ms ease-in-out","&:hover":{boxShadow:"0px 0px 0px 10px ".concat(t.primary.onContainer.alpha(.25).hexa())}},"&::before":{content:"''",position:"absolute",inset:0,width:"calc(".concat(n," * 100%)"),height:10,borderRadius:20,backgroundColor:t.primary.accent.alpha(.75).hexa(),transition:"background-color 300ms ease-in-out"},"&:hover::before":{backgroundColor:t.primary.accent.alpha(.8).hexa()}}}});function h(e){let{className:t,min:n=0,max:o=100,value:r=(n+o)/2,onChange:l,...s}=e,[c,h]=(0,i.useState)((r-n)/(o-n)),u=(0,i.useCallback)(e=>{let t=e.target.value;h((t-n)/(o-n)),null==l||l(t)},[n,o]),{cx:m,classes:p}=d({percentage:c});return(0,a.jsx)("div",{className:p.container,children:(0,a.jsx)("input",{type:"range",min:n,max:o,className:m(p.slider,t),onChange:u,...s})})}var u=n(4883),m=n(2627),p=n(5271),x=n(6417);let g=o.IR.create(e=>{let{theme:t}=e;return{text:{float:"right",padding:40,display:"flex",flexDirection:"column",gap:20,width:"100%",maxWidth:640,height:"fit-content"},headline:{fontSize:"5rem"},bio:{height:200,overflow:"auto"},buttons:{display:"flex",gap:10,alignSelf:"flex-end"}}}),f=["I make websites look pretty and computers learn lots.","I’m a Frontend Developer dedicated to creative problem-solving and innovative thinking.","I am a Frontend Developer with expertise in design, React, Next, and AI development. I am dedicated to creative problem-solving and innovative thinking.","I am a Frontend Developer skilled in React, Next, and AI development. I bring a diverse skill set including mobile and web design, front-end development, machine learning, and natural language processing. My projects, like Urban Archaeology's Website and Comensal, reflect my dedication to creative problem-solving and innovative thinking.","I am a Frontend Developer with extensive experience in React, Next, and AI development. I am always searching for opportunities to apply my diverse skill set, which includes web design, front-end development, machine learning, and natural language processing. My projects, like Urban Archaeology's Website and Comensal, reflect my dedication to creative problem-solving and innovative thinking. When I'm not coding, I'm fantasizing about how to make my office space cooler. I enjoy long walks in the park with my partner, where we discuss the profound mysteries of life (the plot lines of whatever show we're watching). Also, I firmly believe all offices should have emotional support cats, and I'm willing to die on that hill."];function b(e){let{show:t}=e,{fadeInactive:n,fadeIn:o,fadeActive:l}=(0,x.s)(),[s,c]=(0,i.useState)("I am a Frontend Developer with expertise in design, React, Next, and AI development. I am dedicated to creative problem-solving and innovative thinking."),d=(0,i.useCallback)(e=>{c(f[e])},[]),{classes:b}=g();return(0,a.jsx)(p.Q,{start:t,inactive:n,begin:o,active:l,children:(0,a.jsxs)("div",{className:b.text,children:[(0,a.jsx)(u.Dx,{className:b.headline,children:"About me..."}),(0,a.jsx)(u.uT,{className:b.bio,children:s}),(0,a.jsx)(h,{min:0,max:4,value:2,onChange:d,step:1}),(0,a.jsx)(p.Q,{start:t,inactive:n,begin:o,active:l,children:(0,a.jsxs)("div",{className:b.buttons,children:[(0,a.jsxs)(m.Z,{role:"primary",appearance:"filled",onClick:()=>window.location.href="#contact",children:[(0,a.jsx)(r.J,{icon:"alternate_email"}),(0,a.jsx)(u.__,{children:"Contact Me!"})]}),(0,a.jsx)(m.Z,{className:b.projectsButton,role:"secondary",appearance:"text",onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com/",300),children:(0,a.jsx)(u.__,{children:"My Projects"})})]})})]})})}n(7875);var v=n(9844),y=n(8998);let w=o.IR.create(e=>{let{theme:t,rippleClass:n}=e;return{card:{display:"flex",position:"relative",backgroundColor:t.neutral.containerLow.hex(),borderRadius:20,overflow:"hidden",clipPath:"inset(0 0 0 0 round 20px)",width:"100%",height:200,flexDirection:"row",["@media (max-width: ".concat(640,"px)")]:{flexDirection:"column",height:500},"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",inset:0,backgroundColor:t.neutral.onContainer.hex(),opacity:0},"&:hover::before":{opacity:.2},["& .".concat(n)]:{backgroundColor:t.neutral.onContainer.hex()}},image:{borderRadius:20,overflow:"hidden",clipPath:"inset(0 0 0 0 round 20px)",width:"40%",height:"100%",["@media (max-width: ".concat(640,"px)")]:{width:"100%",height:"60%"},"& img":{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},"&::after":{content:"''",position:"absolute",width:"100%",height:"100%",inset:0,backgroundColor:t.neutral.onContainer.hex(),opacity:0},"&:hover::after":{opacity:.2},["& .".concat(n)]:{backgroundColor:t.neutral.onContainer.hex()}},text:{display:"flex",flexDirection:"column",gap:20,padding:20,overflow:"hidden",width:"60%",height:"100%",["@media (max-width: ".concat(640,"px)")]:{width:"100%",height:"40%"},"& p":{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",width:"100%",overflow:"hidden",textOverflow:"ellipsis"}},title:{fontSize:"2.5rem"}}}),j=(0,i.forwardRef)((e,t)=>{let{className:n,image:i,heading:o,body:r,directory:l}=e,{rippleClass:s,rippleExpand:c,rippleFade:d}=(0,y.Z)(),{cx:h,classes:m}=w({rippleClass:s});return(0,a.jsx)("div",{ref:t,className:h(m.card,n),onMouseDown:c,onMouseUp:d,onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com?open=".concat(l),300),children:(0,a.jsxs)(v.r,{role:"secondary",type:"container",children:[(0,a.jsx)("figure",{className:m.image,onMouseDown:c,onMouseUp:d,children:(0,a.jsx)("img",{src:i,alt:"Project Card Image"})}),(0,a.jsxs)("div",{className:m.text,children:[(0,a.jsx)(u.QE,{className:m.title,children:o}),(0,a.jsx)(u.uT,{children:r})]})]})})});function k(e){let[t,n]=(0,i.useState)(!1),[a,o]=(0,i.useState)(0),[r,l]=(0,i.useState)(void 0),[s,c]=(0,i.useState)(void 0),d=new IntersectionObserver((0,i.useCallback)(e=>{e.forEach(e=>{e.target===r&&(n(e.isIntersecting),e.isIntersecting&&o(e.intersectionRatio))})},[r]),e);return(0,i.useEffect)(()=>{s&&d.unobserve(s),r&&d.observe(r),c(r)},[r]),{isIntersecting:t,ratio:a,setElement:l}}let C=o.IR.create(e=>{let{theme:t}=e;return{content:{padding:40,width:"100%",display:"flex",gap:20,flexDirection:"column"},flavorText:{color:t.secondary.accent.hex()},headline:{fontSize:"6rem"},projects:{display:"flex",flexDirection:"column",gap:10,overflowX:"auto",alignItems:"center",justifyContent:"center",overflow:"visible"},button:{alignSelf:"center"}}});function I(e){let{show:t}=e,[n,o]=(0,i.useState)({}),[l,s]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(async()=>{o(await fetch("./featured.json").then(e=>e.json())),s(!0)})()},[]);let{fadeInactive:c,fadeIn:d,fadeActive:h}=(0,x.s)(),{isIntersecting:g,setElement:f}=k({threshold:[.5,.75]}),[b,v]=(0,i.useState)(!1);(0,i.useEffect)(()=>{g&&v(!0)},[g]);let{isIntersecting:y,ratio:w,setElement:I}=k({threshold:[.3,.4,.5,.6]}),[N,E]=(0,i.useState)(!1);(0,i.useEffect)(()=>{y&&w>.3&&E(!0)},[y,w]);let{isIntersecting:S,ratio:_,setElement:T}=k({threshold:[.3,.4,.5,.6]}),[D,R]=(0,i.useState)(!1);(0,i.useEffect)(()=>{S&&_>.3&&R(!0)},[S,_]);let{isIntersecting:F,ratio:M,setElement:W}=k({threshold:[.3,.4,.5,.6]}),[A,B]=(0,i.useState)(!1);(0,i.useEffect)(()=>{F&&M>.3&&B(!0)},[F,M]);let{isIntersecting:Q,setElement:z}=k({threshold:[.5,.75]}),[H,P]=(0,i.useState)(!1);(0,i.useEffect)(()=>{Q&&P(!0)},[Q]);let{classes:Z}=C();return(0,a.jsxs)("div",{className:Z.content,children:[(0,a.jsx)(p.Q,{start:b&&t,inactive:c,begin:d,active:h,children:(0,a.jsxs)("div",{ref:f,children:[(0,a.jsx)(u.X6,{className:Z.flavorText,children:"Some things I've worked on:"}),(0,a.jsx)(u.Dx,{className:Z.headline,children:"Featured Projects"})]})}),(0,a.jsx)("div",{className:Z.projects,children:l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Q,{start:N&&t,inactive:c,begin:d,active:h,children:(0,a.jsx)(j,{ref:I,image:"/images/".concat(n[0].directory,"/card.jpg"),heading:n[0].name,body:n[0].description,directory:n[0].directory})}),(0,a.jsx)(p.Q,{start:D&&t,inactive:c,begin:d,active:h,children:(0,a.jsx)(j,{ref:T,image:"/images/".concat(n[1].directory,"/card.jpg"),heading:n[1].name,body:n[1].description,directory:n[1].directory})}),(0,a.jsx)(p.Q,{start:A&&t,inactive:c,begin:d,active:h,children:(0,a.jsx)(j,{ref:W,image:"/images/".concat(n[2].directory,"/card.jpg"),heading:n[2].name,body:n[2].description,directory:n[2].directory})})]}):""}),(0,a.jsx)(p.Q,{start:H&&t,inactive:c,begin:d,active:h,children:(0,a.jsxs)(m.Z,{ref:z,className:Z.button,appearance:"outlined",onClick:()=>setTimeout(()=>window.location.href="https://projects.kalvingarcia.com/",300),children:[(0,a.jsx)(u.__,{children:"Want to see more?"}),(0,a.jsx)(r.J,{icon:"arrow_outward"})]})})]})}let N=o.IR.create(e=>{let{theme:t}=e;return{form:{display:"flex",flexDirection:"column",gap:20}}});function E(e){let{className:t,method:n="post",children:i,...o}=e,{cx:r,classes:l}=N();return(0,a.jsx)("form",{className:r(l.form,t),method:n,...o,children:i})}let S=o.IR.create(e=>{let{theme:t,filled:n,rippleClass:a}=e;return{container:{width:"100%",height:"100%",display:"flex",flexDirection:"column","& .helper":{padding:5,width:"100%",height:"fit-content",fontSize:"0.75rem",color:t.neutral.onContainer.alpha(.5).hexa(),tansition:"color 200ms ease-in-out"},"&:focus-within .helper":{color:t.tertiary.accent.hex()}},textField:{width:"100%",height:"3rem",position:"relative",cursor:"text",borderRadius:"10px 10px 0 0",backgroundColor:t.neutral.containerHighest.hex(),padding:"10px 20px",overflow:"hidden",clipPath:"inset(0 0 0 0 round 10px 10px 0 0)",borderBottom:"1pt solid ".concat(t.neutral.onContainer.alpha(.5).hexa()),transition:"border-bottom 200ms ease-in-out","&:focus-within":{borderColor:t.tertiary.accent.hex()},"&::before":{content:"''",position:"absolute",inset:0,opacity:0,backgroundColor:t.neutral.onContainer.hex()},"&:hover::before":{opacity:.2},"&:focus-within::before":{opacity:.1},"&::after":{content:"''",position:"absolute",inset:0,transformOrigin:"bottom",transform:"scale(0)",opacity:0,transition:"transform 200ms ease, opacity 200ms ease",borderBottom:"1pt solid ".concat(t.tertiary.accent.hex())},"&:focus-within::after":{transform:"scale(1)",opacity:1},"& .field":{width:"100%",outline:"none",border:"none",position:"relative",bottom:-10,backgroundColor:"transparent",fontFamily:"var(--body-font)",color:t.neutral.onContainer.hex(),"&::placeholder":{color:"transparent",fontFamily:"var(--body-font)"},"&:focus::placeholder":{color:t.neutral.onContainer.alpha(.5).hexa()},"&:autofill":{outline:"none",border:"none",transition:"background-color 600000s 0s, color 600000s 0s, font 600000s 0s",fontFamily:"var(--body-font)"}},"& .label":{top:25,position:"absolute",transformOrigin:"top left",transform:n?"translate(0, -100%) scale(0.8)":"translate(0, -50%)",opacity:.5,transition:"transform 200ms ease, opacity 200ms ease, color 200ms ease",color:t.neutral.onContainer.hex()},"&:focus-within .label":{transform:"translate(0, -100%) scale(0.8)",fontWeight:"bold",opacity:1,color:t.tertiary.accent.hex()},"&:has(input:required) .label::after":{content:"'*'"},["& .".concat(a)]:{backgroundColor:t.neutral.onContainer.hex()}},textArea:{width:"100%",resize:"none"}}});function _(e){let{className:t,label:n,sampleText:o,helperText:r,onChange:l,...s}=e,{rippleClass:c,rippleExpand:d,rippleFade:h}=(0,y.Z)(),m=(0,i.useCallback)(()=>{let e=document.getElementById(n);e.focus(),e.setSelectionRange(0,e.value.length)},[]),p=(0,i.useCallback)(e=>{var t;(null===(t=e.relatedTarget)||void 0===t?void 0:t.contains(e.currentTarget))&&e.currentTarget.focus()},[]),[x,g]=(0,i.useState)(!1),f=(0,i.useCallback)(e=>{let t=e.currentTarget;g(!0),t.value&&t.value.trim().length||g(!1),null==l||l(e)},[]);(0,i.useEffect)(()=>(document.getElementById(n).addEventListener("input",f),()=>document.getElementById(n).removeEventListener("input",f)),[]);let{cx:b,classes:v}=S({filled:x,rippleClass:c});return(0,a.jsxs)("div",{className:v.container,children:[(0,a.jsx)("div",{tabIndex:-1,className:b(v.textField,t),onMouseDown:x?void 0:d,onMouseUp:h,onClick:m,children:(0,a.jsxs)("label",{htmlFor:n,children:[(0,a.jsx)(u.__,{className:"label",children:n}),o?(0,a.jsx)(u.__,{className:"sample",children:o}):"",(0,a.jsx)("input",{className:"field",id:n,name:n,type:"text",onBlur:p,...s})]})}),r?(0,a.jsx)(u.__,{className:"helper",children:r}):""]})}let T=o.IR.create(e=>{let{theme:t,filled:n,rippleClass:a}=e;return{container:{width:"100%",height:"100%",display:"flex",flexDirection:"column","& > *":{flex:"0 0 fit-content"},"& .helper":{padding:5,width:"100%",height:"fit-content",fontSize:"0.75rem",color:t.neutral.onContainer.alpha(.5).hexa(),tansition:"color 200ms ease-in-out"},"&:focus-within .helper":{color:t.tertiary.accent.hex()}},textArea:{width:"100%",position:"relative",cursor:"text",borderRadius:"10px 10px 0 0",backgroundColor:t.neutral.containerHighest.hex(),padding:"10px 20px",overflow:"hidden",clipPath:"inset(0 0 0 0 round 10px 10px 0 0)",borderBottom:"1pt solid ".concat(t.neutral.onContainer.alpha(.5).hexa()),transition:"border-bottom 200ms ease-in-out","&:focus-within":{borderColor:t.tertiary.accent.hex()},"&::before":{content:"''",position:"absolute",inset:0,opacity:0,backgroundColor:t.neutral.onContainer.hex()},"&:hover::before":{opacity:.2},"&:focus-within::before":{opacity:.1},"&::after":{content:"''",position:"absolute",inset:0,transformOrigin:"bottom",transform:"scale(0)",opacity:0,transition:"transform 200ms ease, opacity 200ms ease",borderBottom:"1pt solid ".concat(t.tertiary.accent.hex())},"&:focus-within::after":{transform:"scale(1)",opacity:1},"& .field":{width:"100%",minHeight:100,maxHeight:196,resize:"none",outline:"none",border:"none",position:"relative",bottom:-10,backgroundColor:"transparent",fontFamily:"var(--body-font)",lineHeight:1.5,color:t.neutral.onContainer.hex(),"&:autofill":{outline:"none",border:"none",transition:"background-color 600000s 0s, color 600000s 0s"}},"& .label":{top:25,position:"absolute",transformOrigin:"top left",transform:n?"translate(0, -100%) scale(0.8)":"translate(0, -50%)",opacity:.5,transition:"transform 200ms ease, opacity 200ms ease, color 200ms ease",color:t.neutral.onContainer.hex()},"&:focus-within .label":{transform:"translate(0, -100%) scale(0.8)",fontWeight:"bold",opacity:1,color:t.tertiary.accent.hex()},"&:has(textarea:required) .label::after":{content:"'*'"},"& .sample":{display:"none",position:"absolute",width:"calc(100% - 44px)",top:22,left:22,opacity:.5,color:t.neutral.onContainer.hex()},"&:focus-within .sample":{display:n?"none":"block"},["& .".concat(a)]:{backgroundColor:t.neutral.onContainer.hex()}}}});function D(e){let{className:t,label:n,children:o,helperText:r,onChange:l,...s}=e,{rippleClass:c,rippleExpand:d,rippleFade:h}=(0,y.Z)(),m=(0,i.useCallback)(()=>{let e=document.getElementById(n);e.focus(),e.setSelectionRange(0,e.value.length)},[]),p=(0,i.useCallback)(e=>{var t;(null===(t=e.relatedTarget)||void 0===t?void 0:t.contains(e.currentTarget))&&e.currentTarget.focus()},[]),[x,g]=(0,i.useState)(!1),f=(0,i.useCallback)(e=>{let t=e.currentTarget;g(!0),t.value&&t.value.trim().length||g(!1),t.style.height="1px",t.style.height="".concat(t.scrollHeight,"px"),console.log(t.scrollHeight),null==l||l(e)},[]);(0,i.useEffect)(()=>(document.getElementById(n).addEventListener("input",f),()=>document.getElementById(n).removeEventListener("input",f)),[]);let{cx:b,classes:v}=T({filled:x,rippleClass:c});return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{tabIndex:-1,className:b(v.textArea,t),onMouseDown:x?void 0:d,onMouseUp:h,onClick:m,children:[o?(0,a.jsx)(u.__,{className:"sample",children:o}):"",(0,a.jsxs)("label",{htmlFor:n,children:[(0,a.jsx)(u.__,{className:"label",children:n}),(0,a.jsx)("textarea",{rows:3,className:"field",id:n,name:n,onBlur:p,...s,autoComplete:"off"})]})]}),r?(0,a.jsx)(u.__,{className:"helper",children:r}):""]})}let R=o.IR.create(e=>{let{theme:t}=e;return{content:{padding:40,width:"100%",maxWidth:640,overflow:"hidden",display:"flex",gap:40,flexDirection:"column"},flavorText:{color:t.secondary.accent.hex()},title:{fontSize:"5rem"},contact:{padding:20,width:"100%",borderRadius:20,backgroundColor:t.neutral.container.hex()},submit:{alignSelf:"flex-end"},asterisk:{textAlign:"right"},email:{color:t.tertiary.onContainer.hex(),"&:hover":{color:t.tertiary.accent.hex()}}}});function F(e){let{}=e,{fadeInactive:t,fadeIn:n,fadeActive:o}=(0,x.s)(),{isIntersecting:l,setElement:s}=k({threshold:[.5,.75]}),[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{l&&d(!0)},[l]);let{isIntersecting:h,ratio:g,setElement:f}=k({threshold:[.5,.6,.7]}),[b,v]=(0,i.useState)(!1);(0,i.useEffect)(()=>{h&&g>=.5&&v(!0)},[h,g]);let{isIntersecting:y,setElement:w}=k({threshold:[.5,.75]}),[j,C]=(0,i.useState)(!1);(0,i.useEffect)(()=>{y&&C(!0)},[y]);let{cx:I,classes:N}=R();return(0,a.jsxs)("div",{id:"contact",className:N.content,children:[(0,a.jsx)(p.Q,{start:c,inactive:t,begin:n,active:o,children:(0,a.jsxs)("div",{ref:s,children:[(0,a.jsx)(u.X6,{className:N.flavorText,children:"Need to reach me?"}),(0,a.jsx)(u.Dx,{className:N.title,children:"Contact Me*"})]})}),(0,a.jsx)(p.Q,{start:b,inactive:t,begin:n,active:o,children:(0,a.jsx)("div",{ref:f,className:N.contact,children:(0,a.jsxs)(E,{className:"gform","data-email":"kalvigarcia@gmail.com",action:"https://script.google.com/macros/s/AKfycbwbQkVagBCDvywt_KQrXJyEQX9QkPwnYTF1IV9chdv_m5gBrlWFCc8dIhfYiJzfJnMi7Q/exec",children:[(0,a.jsx)(_,{label:"Name",placeholder:"John Doe",required:!0}),(0,a.jsx)(_,{label:"Email",placeholder:"sample@email.com",helperText:"This will let me know where I can contact you.",required:!0}),(0,a.jsx)(_,{label:"Phone (optional)",placeholder:"123-456-7890"}),(0,a.jsx)(D,{label:"Message",required:!0,children:"Hello, I'm inquiring about your car's extended warranty."}),(0,a.jsxs)(m.Z,{className:N.submit,type:"submit",children:[(0,a.jsx)(r.J,{icon:"send"}),(0,a.jsx)(u.__,{children:"Send"})]})]})})}),(0,a.jsx)(p.Q,{start:j,inactive:t,begin:n,active:o,children:(0,a.jsxs)(u.__,{ref:w,className:N.asterisk,children:["*You can also send emails directy to ",(0,a.jsx)("a",{className:N.email,href:"mailto:contact@kalvingarcia.com",children:"contact@kalvingarcia.com"}),"!"]})})]})}let M=o.IR.create(e=>{let{theme:t}=e;return{tagline:{position:"sticky",zIndex:100,top:0,height:"fit-content",padding:"20px 40px",display:"flex",flexDirection:"column",gap:10,backgroundColor:t.neutral.background.alpha(.6).hexa(),backdropFilter:"blur(8px)","& > *":{textWrap:"nowrap"}},intro:{fontSize:"1.2rem",fontWeight:"bold"},typewriter:{minHeight:"2rem",display:"block",position:"relative",fontSize:"2rem",fontFamily:"var(--display-font)",color:t.primary.accent.hex(),lineHeight:1,textDecoration:"".concat(t.tertiary.accent.hex()," wavy underline"),textDecorationSkipInk:"none",textUnderlineOffset:"10px"}}});function W(e){let{show:t=!1}=e,{fadeInactive:n,fadeIn:o,fadeActive:r}=(0,x.s)(),l=["a Designer.","a Developer.","an Engineer.","a Programmer.","Kalvin Garcia!"],[s,c]=(0,i.useState)(!1),d=(0,i.useCallback)((e,t,n)=>{c(!0),!s&&t<l[n].length?(e.innerHTML+=l[n].charAt(t),setTimeout(()=>d(e,t+1,n),80)):!s&&n<l.length-1&&setTimeout(()=>h(e,l[n].length,n),320)},[s]),h=(0,i.useCallback)((e,t,n)=>{!s&&t>-1?(e.innerHTML=e.innerHTML.slice(0,t),setTimeout(()=>h(e,t-1,n),40)):s||setTimeout(()=>d(e,0,n+1),80)},[s]),{classes:m}=M();return(0,a.jsx)(p.Q,{start:t,inactive:n,begin:o,active:r,children:(0,a.jsxs)("div",{className:m.tagline,children:[(0,a.jsx)(u.__,{className:m.intro,children:"Hello, I'm..."}),(0,a.jsx)("span",{ref:e=>e?d(e,0,0):console.assert(!e,"Tagline not Rendered"),className:m.typewriter})]})})}let A=o.IR.create(e=>{let{theme:t}=e;return{homepage:{width:"100%",maxHeight:"100vh",overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth"},content:{margin:"auto",width:"100%",maxWidth:1280,minHeight:"100%"},accredation:{margin:"auto",textAlign:"center",padding:10,fontSize:"0.75rem",color:t.secondary.accent.alpha(.75).hexa()}}});function B(e){let{}=e,[t,n]=(0,i.useState)(!0),[o,r]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{n(!0),setTimeout(()=>r(!0),200),setTimeout(()=>d(!0),400)},[]);let{classes:h}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)("section",{id:"homepage",className:h.homepage,children:(0,a.jsxs)("div",{className:h.content,children:[(0,a.jsx)(W,{show:t}),(0,a.jsx)(b,{show:o}),(0,a.jsx)(I,{show:l}),(0,a.jsx)(F,{}),(0,a.jsx)(u.__,{className:h.accredation,children:"Website designed and built by Kalvin Garcia."})]})})]})}}},function(e){e.O(0,[921,945,853,971,23,744],function(){return e(e.s=5196)}),_N_E=e.O()}]);