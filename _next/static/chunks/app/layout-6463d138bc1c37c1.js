(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{205:function(e,t,o){Promise.resolve().then(o.bind(o,8557))},8557:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return x}});var i=o(7437),r=o(2064),n=o.n(r),a=o(3375),s=o(2265),c=o(7875),l=o(4038),d=o(9844);o(4887);var u=o(5271);let p=(0,c.F4)({"0%":{height:0}}),f=(0,c.F4)({"100%":{height:0}}),h=l.IR.create(e=>{let{theme:t,height:o,duration:i}=e;return{barrier:{position:"fixed",width:"100%",height:"100%",inset:0,backgroundColor:"transparent",zIndex:10,display:"none","&.open":{display:"block"}},drawer:{position:"relative",width:"100%",height:o,zIndex:100,"&::before":{content:"''",position:"absolute",width:"100vw",height:"100%",top:0,left:"calc((100% - 100vw) / 2)",borderRadius:"0px 0px 20px 20px",backgroundColor:t.primary.container.hex()}},content:{margin:"auto",width:"100%",maxWidth:1280,height:"100%",padding:40,overflowX:"auto",overflowY:"hidden"},open:{animation:"".concat(p," ").concat(i,"ms ease-out forwards")},close:{animation:"".concat(f," ").concat(i,"ms ease-out forwards")},lockScroll:{overflow:"hidden"}}});function m(e){let{className:t,height:o=200,open:r,setOpen:n,duration:a=300,children:c,...l}=e;(0,s.useEffect)(()=>{r?r&&(document.body.classList.add(f.lockScroll),document.documentElement.classList.add(f.lockScroll)):(document.body.classList.remove(f.lockScroll),document.documentElement.classList.remove(f.lockScroll))},[r]);let{cx:p,classes:f}=h({height:o,duration:a});return(0,i.jsxs)(d.r,{role:"primary",type:"container",children:[(0,i.jsx)("div",{className:p(f.barrier,r?"open":""),onClick:()=>n(!1)}),(0,i.jsx)(u.uT,{show:r,enter:f.open,exit:f.close,duration:a,children:(0,i.jsx)("div",{className:f.drawer,...l,children:(0,i.jsx)("div",{className:p(f.content,t),children:c})})})]})}var v=o(6232);let k=l.IR.create(e=>{let{theme:t,role:o,type:i}=e;return{picker:{margin:"auto",position:"relative",width:"100%",maxWidth:1280},palettes:{position:"relative",height:"100%",width:"calc(100% - 50px)",overflowY:"hidden",overflowX:"auto",display:"flex",gap:10},card:{paddingTop:10,gap:10,height:"100%",width:"100%",minWidth:150,maxWidth:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:20,overflow:"hidden",opacity:.5,backgroundColor:t.primary.accent.hex(),color:t.primary.onAccent.hex(),transition:"opacity 300ms ease","&.current":{opacity:1},"&:hover":{opacity:1}},palette:{height:"100%",width:"100%",display:"flex","& .color":{height:"100%",width:"100%"}},buttons:{padding:20,display:"flex",flexDirection:"column",gap:10,alignItems:"center",position:"absolute",top:0,right:0,zIndex:1e3}}});function g(e){let{name:t,current:o,palette:r,...n}=e,{cx:a,classes:s}=k();return(0,i.jsxs)("div",{className:a(s.card,o?"current":""),...n,children:[t.replace(/_/g," ").replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()),(0,i.jsx)("div",{className:s.palette,children:Object.entries(r).map(e=>{let[t,o]=e;return(0,i.jsx)("div",{className:"color",style:{backgroundColor:o}},t)})})]})}function y(){let{role:e,type:t}=(0,d.b)(),{theme:o,palettes:r,changeTheme:n}=(0,l.TC)(),{darkMode:c,toggleDarkMode:u}=(0,l.m0)(),[p,f]=(0,s.useState)(!1),h=(0,s.useCallback)(()=>{(0,a.setCookie)("kalvinPortfolioDarkMode",!c),u()},[c]),y=(0,s.useCallback)(e=>{(0,a.setCookie)("kalvinPortfolioTheme",e),n(e)},[c]),{classes:x}=k();return(0,i.jsx)(d.r,{role:p?"primary":e,type:p?"accent":t,children:(0,i.jsxs)("section",{className:x.picker,children:[(0,i.jsx)(m,{height:200,open:p,setOpen:f,children:(0,i.jsx)("div",{className:x.palettes,children:Object.entries(r).map(e=>{let[t,r]=e;return(0,i.jsx)(g,{name:t,current:o.name===t,palette:r,onClick:()=>y(t)},t)})})}),(0,i.jsxs)("div",{className:x.buttons,children:[(0,i.jsx)(v.Z,{appearance:p?"filled":"outlined",icon:"palette",onClick:()=>f(!p)}),(0,i.jsx)(v.Z,{role:"neutral",appearance:"outlined",icon:c?"dark_mode":"light_mode",onClick:h})]})]})})}function x(e){let{children:t}=e,[o,r]=(0,s.useState)(!1),[d,u]=(0,s.useState)({});return(0,s.useEffect)(()=>{(async()=>{u(await fetch("./palettes.json").then(e=>e.json())),r(!0)})()},[]),(0,i.jsx)("html",{lang:"en",className:n().variable,children:(0,i.jsxs)("body",{children:[(0,i.jsx)(c.nz,{styles:{".kalvin-icons":{fontFamily:"var(--kalvin-icons)",fontWeight:"normal",fontStyle:"normal",display:"inline-block",lineHeight:1,textTransform:"none",letterSpacing:"normal",wordWrap:"normal",whiteSpace:"nowrap",direction:"ltr",WebkitFontSmoothing:"antialiased",textRendering:"optimizeLegibility",MosOsxFontSmoothing:"grayscale",fontFeatureSettings:"'liga'"}}}),o?(0,i.jsxs)(l.ZP,{darkModeDefault:/true/i.test((0,a.getCookie)("kalvinPortfolioDarkMode")),themeDefault:(0,a.getCookie)("kalvinPortfolioTheme"),palettePresets:d,children:[(0,i.jsx)(y,{}),t]}):""]})})}},4160:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},i=(t||{}).decode||r,n=0;n<e.length;){var a=e.indexOf("=",n);if(-1===a)break;var s=e.indexOf(";",n);if(-1===s)s=e.length;else if(s<a){n=e.lastIndexOf(";",a-1)+1;continue}var c=e.slice(n,a).trim();if(void 0===o[c]){var l=e.slice(a+1,s).trim();34===l.charCodeAt(0)&&(l=l.slice(1,-1)),o[c]=function(e,t){try{return t(e)}catch(t){return e}}(l,i)}n=s+1}return o},t.serialize=function(e,t,r){var a=r||{},s=a.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var c=s(t);if(c&&!i.test(c))throw TypeError("argument val is invalid");var l=e+"="+c;if(null!=a.maxAge){var d=a.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){var u=a.expires;if("[object Date]"!==o.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");l+="; Expires="+u.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.partitioned&&(l+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":l+="; Priority=Low";break;case"medium":l+="; Priority=Medium";break;case"high":l+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var o=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function r(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}},3375:function(e,t,o){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]]);return o};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var n=o(4160),a=function(){return"undefined"!=typeof window},s=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},c=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies())},l=function(e){var t={};return e.getAll().forEach(function(e){var o=e.name,i=e.value;t[o]=i}),t},d=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}};t.getCookies=function(e){if(c(e)){if(null==e?void 0:e.req)return l(e.req.cookies);if(null==e?void 0:e.cookies)return l(e.cookies())}if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,n.parse)(t.headers.cookie):{};for(var t,o={},i=document.cookie?document.cookie.split("; "):[],r=0,s=i.length;r<s;r++){var d=i[r].split("="),u=d.slice(1).join("=");o[d[0]]=u}return o},t.getCookie=function(e,o){var i=(0,t.getCookies)(o)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,o){if(c(o)){var s,l,u,p=o.req,f=o.res,h=o.cookies,m=r(o,["req","res","cookies"]),v=i({name:e,value:d(t)},m);p&&p.cookies.set(v),f&&f.cookies.set(v),h&&h().set(v);return}if(o){var p=o.req,f=o.res,k=r(o,["req","res"]);l=p,u=f,s=k}var g=(0,n.serialize)(e,d(t),i({path:"/"},s));if(a())document.cookie=g;else if(u&&l){var y=u.getHeader("Set-Cookie");if(Array.isArray(y)||(y=y?[String(y)]:[]),u.setHeader("Set-Cookie",y.concat(g)),l&&l.cookies){var x=l.cookies;""===t?delete x[e]:x[e]=d(t)}if(l&&l.headers&&l.headers.cookie){var x=(0,n.parse)(l.headers.cookie);""===t?delete x[e]:x[e]=d(t),l.headers.cookie=Object.entries(x).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,o){return(0,t.setCookie)(e,"",i(i({},o),{maxAge:-1}))},t.hasCookie=function(e,o){return!!e&&(0,t.getCookies)(o).hasOwnProperty(e)}},2064:function(e){e.exports={style:{fontFamily:"'__kalvinIconsFont_bcda14', '__kalvinIconsFont_Fallback_bcda14'",fontWeight:400,fontStyle:"normal"},className:"__className_bcda14",variable:"__variable_bcda14"}}},function(e){e.O(0,[309,529,473,971,23,744],function(){return e(e.s=205)}),_N_E=e.O()}]);