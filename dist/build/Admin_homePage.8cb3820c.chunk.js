"use strict";(self.webpackChunkinternet_shop_backend=self.webpackChunkinternet_shop_backend||[]).push([[3981],{11063:(L,E,n)=>{n.r(E),n.d(E,{default:()=>kt});var a=n(67294),u=n(97132),i=n(71893),b=n(15482),O=n(49656),l=n(68547),y=n(17034),g=n(185),o=n(35961),s=n(11276),d=n(74571);const ne=n.p+"7e9af4fb7e723fcebf1f.svg";var oe=n(61931);const le=e=>Object.entries(e).every(([,t])=>Object.entries(t).every(([,r])=>r));var P=n(7681),M=n(46273),w=n(72735),H=n(29728),z=n(37323),ie=n(45697),c=n.n(ie),ce=n(96392),se=n(89285),f=n(99872);const k=({type:e,title:t,number:r,content:m,hasLine:h})=>{const{formatMessage:S}=(0,u.useIntl)();return a.createElement(o.x,null,a.createElement(M.k,null,a.createElement(o.x,{minWidth:(0,l.pxToRem)(30),marginRight:5},a.createElement(ce.Z,{type:e,number:r})),a.createElement(w.Z,{variant:"delta",as:"h3"},S(t))),a.createElement(M.k,{alignItems:"flex-start"},a.createElement(M.k,{justifyContent:"center",minWidth:(0,l.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},h&&a.createElement(se.Z,{type:e,minHeight:e===f.lW?(0,l.pxToRem)(85):(0,l.pxToRem)(65)})),a.createElement(o.x,{marginTop:2},e===f.lW&&m)))};k.defaultProps={content:void 0,number:void 0,type:f.VM,hasLine:!0},k.propTypes={content:c().node,number:c().number,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,type:c().oneOf([f.lW,f.hx,f.VM]),hasLine:c().bool};const de=k,me=(e,t)=>e===-1||t<e?f.hx:t>e?f.VM:f.lW,x=({sections:e,currentSectionKey:t})=>{const r=e.findIndex(m=>m.key===t);return a.createElement(o.x,null,e.map((m,h)=>a.createElement(de,{key:m.key,title:m.title,content:m.content,number:h+1,type:me(r,h),hasLine:h!==e.length-1})))};x.defaultProps={currentSectionKey:void 0},x.propTypes={sections:c().arrayOf(c().shape({key:c().string.isRequired,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,content:c().node})).isRequired,currentSectionKey:c().string};const pe=x;var ue=n(64729),fe=Object.defineProperty,I=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ve=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&R(e,r,t[r]);if(I)for(var r of I(t))ge.call(t,r)&&R(e,r,t[r]);return e};const ye=()=>{var e;const{guidedTourState:t,setSkipped:r}=(0,l.useGuidedTour)(),{formatMessage:m}=(0,u.useIntl)(),{trackUsage:h}=(0,l.useTracking)(),S=Object.entries(ue.Z).map(([v,p])=>({key:v,title:p.home.title,content:a.createElement(l.LinkButton,{onClick:()=>h(p.home.trackingEvent),to:p.home.cta.target,endIcon:a.createElement(z.Z,null)},m(p.home.cta.title))})),B=(e=S.map(v=>ve({isDone:Object.entries(t[v.key]).every(([,p])=>p)},v)).find(v=>!v.isDone))==null?void 0:e.key,T=()=>{r(!0),h("didSkipGuidedtour")};return a.createElement(o.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},a.createElement(P.K,{spacing:6},a.createElement(w.Z,{variant:"beta",as:"h2"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),a.createElement(pe,{sections:S,currentSectionKey:B})),a.createElement(M.k,{justifyContent:"flex-end"},a.createElement(H.z,{variant:"tertiary",onClick:T},m({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var Ee=n(80994),D=n(36182),be=n(17772),we=n(57750),Se=Object.defineProperty,F=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))Oe.call(t,r)&&A(e,r,t[r]);if(F)for(var r of F(t))Pe.call(t,r)&&A(e,r,t[r]);return e};function Ce(e){return a.createElement("svg",Me({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M20.04 0H3.96A2.464 2.464 0 001.5 2.468v16.2a2.464 2.464 0 002.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0020.04 0zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 01-3.108-.012 10.086 10.086 0 01-1.764-.515 7.053 7.053 0 01-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 01-.048-.036 4.202 4.202 0 01-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0116.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33z",fill:"#7289DA"}))}var ke=Object.defineProperty,V=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&G(e,r,t[r]);if(V)for(var r of V(t))je.call(t,r)&&G(e,r,t[r]);return e};function Te(e){return a.createElement("svg",Be({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92zM17.94 10.34a1.73 1.73 0 011.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 010-.524 1.662 1.662 0 01-.461-.314 1.756 1.756 0 01-.076-2.46 1.697 1.697 0 012.425-.076 8.339 8.339 0 014.584-1.467l.868-4.136v-.006a.364.364 0 01.435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 011.295 1.058 1.188 1.188 0 01-1.044 1.313 1.18 1.18 0 01-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 014.526 1.467 1.71 1.71 0 011.125-.483zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 001.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194zm2.747 5.39a4.47 4.47 0 002.904-.919v.047a.339.339 0 00.006-.47.327.327 0 00-.465-.007 3.83 3.83 0 01-2.457.726 3.802 3.802 0 01-2.446-.75.314.314 0 00-.403 0 .327.327 0 00-.044.454 4.47 4.47 0 002.905.918zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 001.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194z",fill:"#FF4500"}))}var Le=Object.defineProperty,W=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))He.call(t,r)&&K(e,r,t[r]);if(W)for(var r of W(t))ze.call(t,r)&&K(e,r,t[r]);return e};function Re(e){return a.createElement("svg",Ie({width:"1em",height:"1em",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7z",fill:"#4945FF"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5z",fill:"#fff"}),a.createElement("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),a.createElement("path",{d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 01-.5-.5V38zM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13zM28.3 38H15.2a.3.3 0 01-.2-.5l13.3-13.2V38z",fill:"#9593FF"}))}var De=Object.defineProperty,Z=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ve=(e,t)=>{for(var r in t||(t={}))Fe.call(t,r)&&N(e,r,t[r]);if(Z)for(var r of Z(t))Ae.call(t,r)&&N(e,r,t[r]);return e};function Ge(e){return a.createElement("svg",Ve({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z",fill:"#1DA1F2"}))}var We=Object.defineProperty,U=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ne=(e,t)=>{for(var r in t||(t={}))Ke.call(t,r)&&$(e,r,t[r]);if(U)for(var r of U(t))Ze.call(t,r)&&$(e,r,t[r]);return e};function Ue(e){return a.createElement("svg",Ne({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0z",fill:"#231F20"}),a.createElement("path",{d:"M12.22 4.564a7.43 7.43 0 00-3.644.956 7.346 7.346 0 00-2.692 2.614 7.26 7.26 0 00-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 006.355-.14 7.36 7.36 0 002.513-2.057 7.28 7.28 0 001.372-2.93 7.243 7.243 0 00-.035-3.228A7.281 7.281 0 0017.96 7.28a7.365 7.365 0 00-2.557-2.002 7.432 7.432 0 00-3.178-.715h-.007z",fill:"#FFF9AE"}),a.createElement("path",{d:"M18.071 7.426a7.262 7.262 0 011.51 4.499 7.264 7.264 0 01-1.595 4.47 7.38 7.38 0 01-4.028 2.558 7.437 7.437 0 01-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 005.181.858 7.381 7.381 0 004.443-2.778 7.258 7.258 0 00-.833-9.693z",fill:"#00AEEF"}),a.createElement("path",{d:"M16.713 6.078a7.253 7.253 0 01.86 8.928 7.361 7.361 0 01-3.736 2.962 7.437 7.437 0 01-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 005.24.313 7.362 7.362 0 004.123-3.22 7.249 7.249 0 00.914-5.123 7.296 7.296 0 00-2.757-4.427z",fill:"#00A94F"}),a.createElement("path",{d:"M6.176 15.515a7.246 7.246 0 01-.26-4.876 7.312 7.312 0 012.9-3.95 7.427 7.427 0 019.26.735 7.387 7.387 0 00-4.603-2.771 7.431 7.431 0 00-5.277 1.068A7.311 7.311 0 005.06 10.06a7.249 7.249 0 00.676 5.294L4.4 19.607l1.776-4.092z",fill:"#F15D22"}),a.createElement("path",{d:"M5.735 15.353a7.25 7.25 0 01-.764-4.818 7.294 7.294 0 012.465-4.222 7.415 7.415 0 014.596-1.744 7.42 7.42 0 014.681 1.509 7.404 7.404 0 00-4.865-2.26 7.421 7.421 0 00-5.12 1.61 7.293 7.293 0 00-2.66 4.626A7.256 7.256 0 005.28 15.24l-.877 4.37 1.332-4.257z",fill:"#E31B23"}))}const $e=(0,i.default)(Ce)`
  path {
    fill: #7289da !important;
  }
`,Je=(0,i.default)(Te)`
  > path:first-child {
    fill: #ff4500;
  }
`,J=(0,i.default)(Re)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Qe=(0,i.default)(Ge)`
  path {
    fill: #1da1f2 !important;
  }
`,Ye=(0,i.default)(Ue)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Xe=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:a.createElement(we.Z,{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://discord.strapi.io/",icon:a.createElement($e,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:a.createElement(Je,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:a.createElement(Qe,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:a.createElement(Ye,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:a.createElement(J,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:a.createElement(J,null),alt:"career"}],qe=(0,i.default)(Ee.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,_e=(0,i.default)(s.r)`
  row-gap: ${({theme:e})=>e.spaces[2]};
  column-gap: ${({theme:e})=>e.spaces[4]};
`,et=()=>{const{formatMessage:e}=(0,u.useIntl)();return a.createElement(o.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},a.createElement(o.x,{paddingBottom:7},a.createElement(P.K,{spacing:5},a.createElement(P.K,{spacing:3},a.createElement(w.Z,{variant:"delta",as:"h2",id:"join-the-community"},e({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),a.createElement(w.Z,{textColor:"neutral600"},e({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),a.createElement(D.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:a.createElement(be.default,null)},e({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),a.createElement(_e,null,Xe.map(t=>a.createElement(d.P,{col:6,s:12,key:t.name},a.createElement(qe,{size:"L",startIcon:t.icon,variant:"tertiary",href:t.link,isExternal:!0},t.name)))))},tt=(0,i.default)(w.Z)`
  word-break: break-word;
`,rt=(0,i.default)(P.K)`
  align-items: flex-start;
`,j=({hasCreatedContentType:e,onCreateCT:t})=>{const{formatMessage:r}=(0,u.useIntl)();return a.createElement("div",null,a.createElement(o.x,{paddingLeft:6,paddingBottom:10},a.createElement(rt,{spacing:5},a.createElement(w.Z,{as:"h1",variant:"alpha"},r(e?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),a.createElement(tt,{textColor:"neutral600",variant:"epsilon"},r(e?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),e?a.createElement(D.r,{isExternal:!0,href:"https://strapi.io/blog"},r({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):a.createElement(H.z,{size:"L",onClick:t,endIcon:a.createElement(z.Z,null)},r({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};j.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},j.propTypes={hasCreatedContentType:c().bool,onCreateCT:c().func};const at=j;var nt=Object.defineProperty,Q=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&Y(e,r,t[r]);if(Q)for(var r of Q(t))lt.call(t,r)&&Y(e,r,t[r]);return e};function ct(e){return a.createElement("svg",it({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#4945FF"}),a.createElement("path",{d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 01-.474.942 1.705 1.705 0 01-.887.504 1.64 1.64 0 01-1.002-.105 1.76 1.76 0 01-.778-.678A1.924 1.924 0 0114 9.841a1.9 1.9 0 01.508-1.302c.325-.345.766-.539 1.225-.539zM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24z",fill:"#fff"}))}var st=Object.defineProperty,X=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&q(e,r,t[r]);if(X)for(var r of X(t))mt.call(t,r)&&q(e,r,t[r]);return e};function ut(e){return a.createElement("svg",pt({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#D9822F"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373zm-2.287 0l-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912z",fill:"#fff"}))}var ft=Object.defineProperty,_=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,vt=(e,t)=>{for(var r in t||(t={}))ht.call(t,r)&&ee(e,r,t[r]);if(_)for(var r of _(t))gt.call(t,r)&&ee(e,r,t[r]);return e};function yt(e){return a.createElement("svg",vt({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#66B7F1"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 10.921a.5.5 0 01.773-.419l8.582 5.579a.5.5 0 010 .838l-8.582 5.579a.5.5 0 01-.773-.42V10.922z",fill:"#fff"}))}var Et=Object.defineProperty,te=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,re=(e,t,r)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,St=(e,t)=>{for(var r in t||(t={}))bt.call(t,r)&&re(e,r,t[r]);if(te)for(var r of te(t))wt.call(t,r)&&re(e,r,t[r]);return e};function Ot(e){return a.createElement("svg",St({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#9736E8"}),a.createElement("path",{d:"M18.037 11.774a28.578 28.578 0 00-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 00-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 00.017-.167.183.183 0 00-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 01.024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 00-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 01.024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 00-.057-.157.177.177 0 00-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 01-.044.018.046.046 0 01-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 00-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 01.105-.021c.097 0 .177.064.2.16a.264.264 0 01-.046.228l-2.344 1.731z",fill:"#fff"}))}const C=i.default.a`
  text-decoration: none;
`,Pt=()=>{const{formatMessage:e}=(0,u.useIntl)(),{trackUsage:t}=(0,l.useTracking)(),r=m=>{t(m)};return a.createElement(P.K,{spacing:5},a.createElement(C,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>r("didClickonReadTheDocumentationSection")},a.createElement(l.ContentBox,{title:e({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:e({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:a.createElement(ct,null),iconBackground:"primary100"})),a.createElement(C,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>r("didClickonCodeExampleSection")},a.createElement(l.ContentBox,{title:e({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:e({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:a.createElement(ut,null),iconBackground:"warning100"})),a.createElement(C,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>r("didClickonTutorialSection")},a.createElement(l.ContentBox,{title:e({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:e({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:a.createElement(yt,null),iconBackground:"secondary100"})),a.createElement(C,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>r("didClickonBlogSection")},a.createElement(l.ContentBox,{title:e({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:e({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:a.createElement(Ot,null),iconBackground:"alternative100"})))},Mt=(0,i.default)(o.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,Ct=()=>{const{collectionTypes:e,singleTypes:t,isLoading:r}=(0,oe.bP)(),{guidedTourState:m,isGuidedTourVisible:h,isSkipped:S}=(0,l.useGuidedTour)(),ae=!le(m)&&h&&!S,{push:B}=(0,O.useHistory)(),T=p=>{p.preventDefault(),B("/plugins/content-type-builder/content-types/create-content-type")},v=(0,a.useMemo)(()=>{const p=xt=>xt.filter(jt=>jt.isDisplayed);return p(e).length>1||p(t).length>0},[e,t]);return r?a.createElement(l.LoadingIndicatorPage,null):a.createElement(y.A,null,a.createElement(u.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},p=>a.createElement(b.Helmet,{title:p[0]})),a.createElement(g.o,null,a.createElement(Mt,null,a.createElement("img",{alt:"","aria-hidden":!0,src:ne})),a.createElement(o.x,{padding:10},a.createElement(s.r,null,a.createElement(d.P,{col:8,s:12},a.createElement(at,{onCreateCT:T,hasCreatedContentType:v}))),a.createElement(s.r,{gap:6},a.createElement(d.P,{col:8,s:12},ae?a.createElement(ye,null):a.createElement(Pt,null)),a.createElement(d.P,{col:4,s:12},a.createElement(et,null))))))},kt=(0,a.memo)(Ct)},17034:(L,E,n)=>{n.d(E,{A:()=>y});var a=n(67294),u=n(45697),i=n(71893),b=n(35961);const O=(0,i.default)(b.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:g})=>g?"auto 1fr":"1fr"};
`,l=(0,i.default)(b.x)`
  overflow-x: hidden;
`,y=({sideNav:g,children:o})=>a.createElement(O,{hasSideNav:Boolean(g)},g,a.createElement(l,{paddingBottom:10},o));y.defaultProps={sideNav:void 0},y.propTypes={children:u.node.isRequired,sideNav:u.node}},57750:(L,E,n)=>{n.d(E,{Z:()=>g});var a=n(67294),u=Object.defineProperty,i=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,l=(o,s,d)=>s in o?u(o,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[s]=d,y=(o,s)=>{for(var d in s||(s={}))b.call(s,d)&&l(o,d,s[d]);if(i)for(var d of i(s))O.call(s,d)&&l(o,d,s[d]);return o};function g(o){return a.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),a.createElement("path",{d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0112 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0z",fill:"#161614"}))}}}]);
