(self.webpackChunkinternet_shop_backend=self.webpackChunkinternet_shop_backend||[]).push([[4757],{47443:(x,h,a)=>{var r=a(42118);function o(l,f){var v=l==null?0:l.length;return!!v&&r(l,f,0)>-1}x.exports=o},1196:x=>{function h(a,r,o){for(var l=-1,f=a==null?0:a.length;++l<f;)if(o(r,a[l]))return!0;return!1}x.exports=h},48983:(x,h,a)=>{var r=a(40371),o=r("length");x.exports=o},41848:x=>{function h(a,r,o,l){for(var f=a.length,v=o+(l?1:-1);l?v--:++v<f;)if(r(a[v],v,a))return v;return-1}x.exports=h},42118:(x,h,a)=>{var r=a(41848),o=a(62722),l=a(42351);function f(v,s,y){return s===s?l(v,s,y):r(v,o,y)}x.exports=f},62722:x=>{function h(a){return a!==a}x.exports=h},45652:(x,h,a)=>{var r=a(88668),o=a(47443),l=a(1196),f=a(74757),v=a(23593),s=a(21814),y=200;function O(n,e,t){var E=-1,c=o,u=n.length,d=!0,i=[],m=i;if(t)d=!1,c=l;else if(u>=y){var g=e?null:v(n);if(g)return s(g);d=!1,c=f,m=new r}else m=e?[]:i;e:for(;++E<u;){var C=n[E],p=e?e(C):C;if(C=t||C!==0?C:0,d&&p===p){for(var w=m.length;w--;)if(m[w]===p)continue e;e&&m.push(p),i.push(C)}else c(m,p,t)||(m!==i&&m.push(p),i.push(C))}return i}x.exports=O},23593:(x,h,a)=>{var r=a(58525),o=a(50308),l=a(21814),f=1/0,v=r&&1/l(new r([,-0]))[1]==f?function(s){return new r(s)}:o;x.exports=v},42351:x=>{function h(a,r,o){for(var l=o-1,f=a.length;++l<f;)if(a[l]===r)return l;return-1}x.exports=h},88016:(x,h,a)=>{var r=a(48983),o=a(62689),l=a(21903);function f(v){return o(v)?l(v):r(v)}x.exports=f},21903:x=>{var h="\\ud800-\\udfff",a="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",l=a+r+o,f="\\ufe0e\\ufe0f",v="["+h+"]",s="["+l+"]",y="\\ud83c[\\udffb-\\udfff]",O="(?:"+s+"|"+y+")",n="[^"+h+"]",e="(?:\\ud83c[\\udde6-\\uddff]){2}",t="[\\ud800-\\udbff][\\udc00-\\udfff]",E="\\u200d",c=O+"?",u="["+f+"]?",d="(?:"+E+"(?:"+[n,e,t].join("|")+")"+u+c+")*",i=u+c+d,m="(?:"+[n+s+"?",s,e,t,v].join("|")+")",g=RegExp(y+"(?="+y+")|"+m+i,"g");function C(p){for(var w=g.lastIndex=0;g.test(p);)++w;return w}x.exports=C},50308:x=>{function h(){}x.exports=h},7334:(x,h,a)=>{var r=a(79833);function o(l){return r(l).toLowerCase()}x.exports=o},20573:(x,h,a)=>{"use strict";a.d(h,{P1:()=>n});var r="NOT_FOUND";function o(t){var E;return{get:function(u){return E&&t(E.key,u)?E.value:r},put:function(u,d){E={key:u,value:d}},getEntries:function(){return E?[E]:[]},clear:function(){E=void 0}}}function l(t,E){var c=[];function u(g){var C=c.findIndex(function(w){return E(g,w.key)});if(C>-1){var p=c[C];return C>0&&(c.splice(C,1),c.unshift(p)),p.value}return r}function d(g,C){u(g)===r&&(c.unshift({key:g,value:C}),c.length>t&&c.pop())}function i(){return c}function m(){c=[]}return{get:u,put:d,getEntries:i,clear:m}}var f=function(E,c){return E===c};function v(t){return function(c,u){if(c===null||u===null||c.length!==u.length)return!1;for(var d=c.length,i=0;i<d;i++)if(!t(c[i],u[i]))return!1;return!0}}function s(t,E){var c=typeof E=="object"?E:{equalityCheck:E},u=c.equalityCheck,d=u===void 0?f:u,i=c.maxSize,m=i===void 0?1:i,g=c.resultEqualityCheck,C=v(d),p=m===1?o(C):l(m,C);function w(){var j=p.get(arguments);if(j===r){if(j=t.apply(null,arguments),g){var M=p.getEntries(),S=M.find(function(I){return g(I.value,j)});S&&(j=S.value)}p.put(arguments,j)}return j}return w.clearCache=function(){return p.clear()},w}function y(t){var E=Array.isArray(t[0])?t[0]:t;if(!E.every(function(u){return typeof u=="function"})){var c=E.map(function(u){return typeof u=="function"?"function "+(u.name||"unnamed")+"()":typeof u}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+c+"]")}return E}function O(t){for(var E=arguments.length,c=new Array(E>1?E-1:0),u=1;u<E;u++)c[u-1]=arguments[u];var d=function(){for(var m=arguments.length,g=new Array(m),C=0;C<m;C++)g[C]=arguments[C];var p=0,w,j={memoizeOptions:void 0},M=g.pop();if(typeof M=="object"&&(j=M,M=g.pop()),typeof M!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof M+"]");var S=j,I=S.memoizeOptions,D=I===void 0?c:I,W=Array.isArray(D)?D:[D],T=y(g),K=t.apply(void 0,[function(){return p++,M.apply(null,arguments)}].concat(W)),A=t(function(){for(var $=[],U=T.length,L=0;L<U;L++)$.push(T[L].apply(null,arguments));return w=K.apply(null,$),w});return Object.assign(A,{resultFunc:M,memoizedResultFunc:K,dependencies:T,lastResult:function(){return w},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),A};return d}var n=O(s),e=function(E,c){if(c===void 0&&(c=n),typeof E!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof E));var u=Object.keys(E),d=c(u.map(function(i){return E[i]}),function(){for(var i=arguments.length,m=new Array(i),g=0;g<i;g++)m[g]=arguments[g];return m.reduce(function(C,p,w){return C[u[w]]=p,C},{})});return d}},20707:(x,h,a)=>{"use strict";a.d(h,{s:()=>H});var r=a(67294),o=a(71893),l=a(45697),f=a(75228),v=a(41762),s=a(54574),y=a(64777),O=a(63428),n=a(96404),e=a(7681),t=a(46273),E=a(39785),c=a(15585),u=a(72735),d=a(63237),i=a(35961),m=a(88262),g=Object.defineProperty,C=Object.defineProperties,p=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,S=(b,P,z)=>P in b?g(b,P,{enumerable:!0,configurable:!0,writable:!0,value:z}):b[P]=z,I=(b,P)=>{for(var z in P||(P={}))j.call(P,z)&&S(b,z,P[z]);if(w)for(var z of w(P))M.call(P,z)&&S(b,z,P[z]);return b},D=(b,P)=>C(b,p(P)),W=(b,P)=>{var z={};for(var R in b)j.call(b,R)&&P.indexOf(R)<0&&(z[R]=b[R]);if(b!=null&&w)for(var R of w(b))P.indexOf(R)<0&&M.call(b,R)&&(z[R]=b[R]);return z};const T=o.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,K=(0,o.default)(i.x)`
  cursor: ${({disabled:b})=>b?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,c.k3)()}
`,A=(0,o.default)(t.k).attrs({hasRadius:!0})`
  background-color: ${({theme:b,checked:P,disabled:z})=>P?z?b.colors.neutral200:b.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:b,checked:P,disabled:z})=>P&&P!==null?z?b.colors.neutral300:b.colors.neutral200:z?b.colors.neutral150:b.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:b})=>`${b==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:b})=>`${b==="S"?"2px":"6px"}`};
`,F=o.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,$=r.forwardRef((b,P)=>{var z=b,{size:R,onLabel:X,offLabel:q,children:J,checked:B,disabled:_,onChange:ee}=z,te=W(z,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:G,required:Y}=(0,m.U)(),Z="neutral600";let re=!B&&B!==null?"danger700":Z,Q=B?"primary600":Z;const ce=ae=>{_||ee(ae)};return r.createElement(T,null,r.createElement(d.T,null,J),r.createElement(K,{hasRadius:!0,disabled:_,padding:1,display:"flex",background:_?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},r.createElement(A,{size:R,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:B===null?!1:!B,disabled:_},r.createElement(u.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:_?"neutral700":re},q)),r.createElement(A,{size:R,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:B===null?!1:B,disabled:_},r.createElement(u.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:_?"neutral700":Q},X)),r.createElement(F,D(I({type:"checkbox","aria-disabled":_,onChange:ae=>ce(ae),name:G,ref:P,"aria-required":Y},te),{checked:!(B===null||!B)}))))});$.displayName="ToggleCheckbox",$.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},$.propTypes={checked:l.bool,children:l.string.isRequired,disabled:l.bool,offLabel:l.string.isRequired,onChange:l.func,onLabel:l.string.isRequired,size:l.oneOf(Object.keys(f.J.input))};var U=Object.defineProperty,L=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,V=(b,P,z)=>P in b?U(b,P,{enumerable:!0,configurable:!0,writable:!0,value:z}):b[P]=z,ne=(b,P)=>{for(var z in P||(P={}))N.call(P,z)&&V(b,z,P[z]);if(L)for(var z of L(P))k.call(P,z)&&V(b,z,P[z]);return b},le=(b,P)=>{var z={};for(var R in b)N.call(b,R)&&P.indexOf(R)<0&&(z[R]=b[R]);if(b!=null&&L)for(var R of L(b))P.indexOf(R)<0&&k.call(b,R)&&(z[R]=b[R]);return z};const oe=(0,o.default)(s.g)`
  max-width: 320px;
`,ie=(0,o.default)(E.A)`
  align-self: flex-end;
  margin-left: auto;
`,H=b=>{var P=b,{disabled:z,size:R,error:X,hint:q,label:J,name:B,labelAction:_,required:ee,id:te,onClear:G,clearLabel:Y,checked:Z}=P,re=le(P,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const Q=(0,v.M)("toggleinput",te);return r.createElement(oe,{name:B,hint:q,error:X,id:Q,required:ee},r.createElement(e.K,{spacing:1},r.createElement(t.k,null,r.createElement(y.Q,{action:_},J),Y&&G&&Z!==null&&!z&&r.createElement(ie,{onClick:G},Y)),r.createElement($,ne({id:Q,size:R,checked:Z,disabled:z},re),J),r.createElement(O.J,null),r.createElement(n.c,null)))};H.displayName="ToggleInput",H.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},H.propTypes={checked:l.bool,clearLabel:l.string,disabled:l.bool,error:l.string,hint:l.oneOfType([l.string,l.node,l.arrayOf(l.node)]),id:l.string,label:l.string,labelAction:l.node,name:l.string,onClear:l.func,required:l.bool,size:l.oneOf(Object.keys(f.J.input))}},53192:(x,h,a)=>{"use strict";a.d(h,{m:()=>u});var r=a(67294),o=a(71893),l=a(45697),f=a(11276),v=Object.defineProperty,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,n=(d,i,m)=>i in d?v(d,i,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[i]=m,e=(d,i)=>{for(var m in i||(i={}))y.call(i,m)&&n(d,m,i[m]);if(s)for(var m of s(i))O.call(i,m)&&n(d,m,i[m]);return d},t=(d,i)=>{var m={};for(var g in d)y.call(d,g)&&i.indexOf(g)<0&&(m[g]=d[g]);if(d!=null&&s)for(var g of s(d))i.indexOf(g)<0&&O.call(d,g)&&(m[g]=d[g]);return m};const E=`${232/16}rem`,c=(0,o.default)(f.r)`
  width: ${E};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,u=d=>{var i=d,{ariaLabel:m}=i,g=t(i,["ariaLabel"]);return r.createElement(c,e({"aria-label":m,as:"nav"},g))};u.propTypes={ariaLabel:l.string.isRequired}},38702:(x,h,a)=>{"use strict";a.d(h,{p:()=>i});var r=a(67294),o=a(45697),l=a(71893),f=a(97184),v=a(46273),s=a(72735),y=a(12028),O=a(35961),n=a(70004),e=a(49123),t=a(8509),E=a(41762);const c=m=>{const g=(0,r.useRef)();return(0,r.useEffect)(()=>{g.current=m}),g.current};var u=a(7801);const d=(0,l.default)(n.i)`
  width: ${24/16}rem;
  background-color: ${({theme:m})=>m.colors.neutral200};
`,i=({as:m,label:g,searchLabel:C,searchable:p,onChange:w,value:j,onClear:M,onSubmit:S,id:I})=>{const[D,W]=(0,r.useState)(!1),T=c(D),K=(0,E.M)("subnav-searchbar-clear",I),A=(0,r.useRef)(),F=(0,r.useRef)();(0,r.useEffect)(()=>{D&&A.current&&A.current.focus(),T&&!D&&F.current&&F.current.focus()},[D,T]);const $=()=>{W(k=>!k)},U=k=>{M(k),A.current.focus()},L=k=>{var V;((V=k.relatedTarget)==null?void 0:V.id)!==K&&W(!1)},N=k=>{k.key===u.y.ESCAPE&&W(!1)};return D?r.createElement(O.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},r.createElement(t.U,null,r.createElement(e.w,{name:"searchbar",value:j,onChange:w,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:N,ref:A,onBlur:L,onClear:U,onSubmit:S,clearLabel:"Clear",size:"S"},C)),r.createElement(O.x,{paddingLeft:2,paddingTop:4},r.createElement(d,null))):r.createElement(O.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},r.createElement(v.k,{justifyContent:"space-between",alignItems:"flex-start"},r.createElement(s.Z,{variant:"beta",as:m},g),p&&r.createElement(y.h,{ref:F,onClick:$,label:C,icon:r.createElement(f.default,null)})),r.createElement(O.x,{paddingTop:4},r.createElement(d,null)))};i.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},i.propTypes={as:o.string,id:o.string,label:o.string.isRequired,onChange:o.func,onClear:o.func,onSubmit:o.func,searchLabel:o.string,searchable:o.bool,value:o.string}},52305:(x,h,a)=>{"use strict";a.d(h,{E:()=>C});var r=a(67294),o=a(45697),l=a(71893),f=a(71818),v=a(35961),s=a(72735),y=a(46273),O=a(63507),n=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,c=(p,w,j)=>w in p?n(p,w,{enumerable:!0,configurable:!0,writable:!0,value:j}):p[w]=j,u=(p,w)=>{for(var j in w||(w={}))t.call(w,j)&&c(p,j,w[j]);if(e)for(var j of e(w))E.call(w,j)&&c(p,j,w[j]);return p},d=(p,w)=>{var j={};for(var M in p)t.call(p,M)&&w.indexOf(M)<0&&(j[M]=p[M]);if(p!=null&&e)for(var M of e(p))w.indexOf(M)<0&&E.call(p,M)&&(j[M]=p[M]);return j};const i=(0,l.default)(v.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:p})=>p.colors.neutral800};
  svg > * {
    fill: ${({theme:p})=>p.colors.neutral600};
  }

  &.active {
    ${({theme:p})=>`
      background-color: ${p.colors.primary100};
      border-right: 2px solid ${p.colors.primary600};
      svg > * {
        fill: ${p.colors.primary700};
      }
      ${s.Z} {
        color: ${p.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,m=(0,l.default)(f.default)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:p,$active:w})=>w?p.colors.primary600:p.colors.neutral600};
  }
`,g=l.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,C=r.forwardRef((p,w)=>{var j=p,{children:M,icon:S,withBullet:I,as:D,isSubSectionChild:W}=j,T=d(j,["children","icon","withBullet","as","isSubSectionChild"]);return r.createElement(i,u({as:D,icon:S,background:"neutral100",paddingLeft:W?9:7,paddingBottom:2,paddingTop:2,ref:w},T),r.createElement(y.k,null,S?r.createElement(g,null,S):r.createElement(m,null),r.createElement(v.x,{paddingLeft:2},r.createElement(s.Z,{as:"span"},M))),I&&r.createElement(v.x,{as:y.k,paddingRight:4},r.createElement(m,{$active:!0})))});C.displayName="SubNavLink",C.defaultProps={as:O.f,icon:null,isSubSectionChild:!1,withBullet:!1},C.propTypes={as:o.elementType,children:o.node.isRequired,icon:o.element,isSubSectionChild:o.bool,withBullet:o.bool}},29489:(x,h,a)=>{"use strict";a.d(h,{D:()=>d});var r=a(67294),o=a(45697),l=a(71893),f=a(35961),v=a(30190),s=a(7681),y=a(12645),O=a(72735),n=a(46273);const e=(0,l.default)(n.k)`
  border: none;
  padding: 0;
  background: transparent;
`,t=l.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:i})=>i?"0deg":"180deg"});
`,E=({collapsable:i,label:m,onClick:g,ariaExpanded:C,ariaControls:p})=>i?r.createElement(e,{as:"button",onClick:g,"aria-expanded":C,"aria-controls":p,textAlign:"left"},r.createElement(f.x,{paddingRight:1},r.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},m)),i&&r.createElement(t,{rotated:C},r.createElement(y.default,{"aria-hidden":!0}))):r.createElement(e,null,r.createElement(f.x,{paddingRight:1},r.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},m)));E.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},E.propTypes={ariaControls:o.string,ariaExpanded:o.bool,collapsable:o.bool,label:o.string.isRequired,onClick:o.func};var c=a(41762);const u=(0,l.default)(f.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }
`,d=({collapsable:i,label:m,badgeLabel:g,children:C,id:p})=>{const[w,j]=(0,r.useState)(!0),M=(0,c.M)("subnav-list",p),S=()=>{j(I=>!I)};return r.createElement(s.K,{spacing:1},r.createElement(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},r.createElement(f.x,{position:"relative",paddingRight:g?6:0},r.createElement(E,{onClick:S,ariaExpanded:w,ariaControls:M,collapsable:i,label:m}),g&&r.createElement(v.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},g))),(!i||w)&&r.createElement("ol",{id:M},r.Children.map(C,(I,D)=>r.createElement("li",{key:D},I))))};d.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},d.propTypes={badgeLabel:o.string,children:o.node.isRequired,collapsable:o.bool,id:o.string,label:o.string.isRequired}},34446:(x,h,a)=>{"use strict";a.d(h,{Z:()=>E});var r=a(67294),o=a(45697),l=a(7681),f=a(35961),v=Object.defineProperty,s=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,n=(c,u,d)=>u in c?v(c,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[u]=d,e=(c,u)=>{for(var d in u||(u={}))y.call(u,d)&&n(c,d,u[d]);if(s)for(var d of s(u))O.call(u,d)&&n(c,d,u[d]);return c},t=(c,u)=>{var d={};for(var i in c)y.call(c,i)&&u.indexOf(i)<0&&(d[i]=c[i]);if(c!=null&&s)for(var i of s(c))u.indexOf(i)<0&&O.call(c,i)&&(d[i]=c[i]);return d};const E=c=>{var u=c,{children:d}=u,i=t(u,["children"]);return r.createElement(f.x,{paddingTop:2,paddingBottom:4},r.createElement(l.K,e({as:"ol",spacing:2},i),r.Children.map(d,(m,g)=>r.createElement("li",{key:g},m))))};E.propTypes={children:o.node.isRequired}},14484:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),r.createElement("path",{d:"M19.5 7h-7A4.505 4.505 0 008 11.5c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5S21.981 7 19.5 7zm0 8a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",fill:"#328048"}))}},85038:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.535 8.768c0 .116-.011.229-.032.339l3.013 1.776 2.985-1.76a1.768 1.768 0 11.519.93l-2.982 1.757v2.477a1.768 1.768 0 11-1.048-.044v-2.435l-2.997-1.767a1.768 1.768 0 11.542-1.274z",fill:"#666687"}),r.createElement("path",{d:"M13.503 9.107l-.05-.01-.006.035.03.018.026-.043zm3.013 1.776l-.025.043.025.014.025-.014-.025-.043zm2.985-1.76l.025.044.031-.018-.007-.035-.05.01zm.518.93l.035-.036-.027-.026-.033.02.026.042zm-2.98 1.757l-.026-.043-.025.014v.029h.05zm0 2.477h-.05v.035l.032.012.017-.047zm-1.049-.044l.013.048.037-.01v-.038h-.05zm0-2.435h.05v-.029l-.024-.014-.026.043zm-2.997-1.767l.025-.043-.033-.019-.027.027.035.035zm.559-.925c.022-.113.033-.23.033-.348h-.1c0 .112-.01.223-.031.33l.098.018zm2.99 1.723l-3.014-1.775-.05.086 3.013 1.775.05-.086zm2.933-1.758l-2.984 1.758.05.086 2.985-1.758-.05-.086zm-.06-.313c0 .125.013.247.037.366l.098-.02a1.723 1.723 0 01-.035-.346h-.1zm1.818-1.818a1.818 1.818 0 00-1.818 1.818h.1c0-.949.769-1.718 1.718-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.817-1.818v.1c.948 0 1.717.769 1.717 1.718h.1zm-1.817 1.817a1.818 1.818 0 001.817-1.817h-.1c0 .948-.769 1.717-1.717 1.717v.1zm-1.248-.495c.326.307.765.495 1.248.495v-.1c-.457 0-.872-.178-1.18-.468l-.068.073zm-2.921 1.763l2.98-1.757-.05-.086-2.981 1.757.05.086zm.024 2.434V11.81h-.1v2.477h.1zm-.067.047a1.718 1.718 0 011.14 1.618h.1c0-.79-.503-1.46-1.206-1.712l-.034.094zm1.14 1.618c0 .948-.77 1.717-1.718 1.717v.1a1.817 1.817 0 001.817-1.817h-.1zm-1.718 1.717a1.718 1.718 0 01-1.718-1.717h-.1c0 1.004.814 1.817 1.818 1.817v-.1zm-1.718-1.717c0-.797.543-1.467 1.278-1.66l-.026-.098a1.818 1.818 0 00-1.352 1.758h.1zm1.215-4.144v2.435h.1v-2.435h-.1zm-2.973-1.723l2.998 1.766.05-.086-2.997-1.767-.05.087zm-1.2.5c.49 0 .934-.193 1.26-.507l-.069-.072c-.309.296-.728.48-1.19.48v.1zM9.95 8.768c0 1.003.814 1.817 1.818 1.817v-.1a1.718 1.718 0 01-1.718-1.717h-.1zm1.818-1.818A1.818 1.818 0 009.95 8.768h.1c0-.949.769-1.718 1.717-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.818-1.818v.1c.95 0 1.718.769 1.718 1.718h.1z",fill:"#666687"}))}},34668:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#FDF4DC",stroke:"#FAE7B9"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.934 7.495V6h1.45v1.495h5.232V6h1.45v1.495h.314c1.385 0 1.602.249 1.62 1.463V16.5c0 1.062-.096 1.5-1.4 1.5h-9.19c-1.306 0-1.41-.318-1.41-1.607V9.105c.018-1.025.117-1.61 1.5-1.61h.434zm-.774 8.687c0 .406.123.433.388.433h8.953c.265 0 .34-.007.34-.413v-6.087c-.008-.314-.11-.369-.316-.369h-9.072c-.206 0-.296.045-.293.287v6.15z",fill:"#D9822F"}))}},65531:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),r.createElement("path",{d:"M20.573 8c-1.484 0-2.666.745-3.397 1.37l-.026.023-.416.452.919 1.51.68-.682c.711-.6 1.506-.93 2.24-.93 1.48 0 2.685 1.171 2.685 2.612 0 1.44-1.205 2.613-2.685 2.613-2.25 0-3.78-2.974-3.795-3.004C16.69 11.784 14.75 8 11.428 8 8.985 8 7 9.954 7 12.355c0 2.401 1.986 4.355 4.427 4.355 1.196 0 2.373-.476 3.404-1.376l.022-.02.413-.45-.919-1.51-.683.686c-.712.616-1.465.928-2.237.928-1.48 0-2.685-1.172-2.685-2.613 0-1.44 1.205-2.613 2.685-2.613 2.25 0 3.78 2.974 3.795 3.004.088.18 2.028 3.964 5.35 3.964 2.442 0 4.428-1.954 4.428-4.355C25 9.954 23.014 8 20.573 8z",fill:"#666687"}))}},73145:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),r.createElement("path",{d:"M16.767 17.49c.724 0 1.428-.089 1.962-.253v-1.093c-.383.143-1.128.239-1.86.239-2.905 0-4.744-1.764-4.744-4.546v-.014c0-2.734 1.839-4.641 4.484-4.641 2.598 0 4.307 1.62 4.307 4.088v.013c0 1.402-.444 2.304-1.135 2.304-.417 0-.656-.287-.656-.772V9.157h-1.38v.82h-.124c-.273-.608-.868-.97-1.6-.97-1.367 0-2.296 1.135-2.296 2.789v.014c0 1.73.943 2.884 2.365 2.884.793 0 1.353-.362 1.64-1.052h.123l.007.04c.158.636.78 1.033 1.62 1.033 1.655 0 2.687-1.367 2.687-3.534v-.014c0-3.008-2.242-5.072-5.517-5.072-3.418 0-5.776 2.324-5.776 5.694v.014c0 3.431 2.331 5.687 5.893 5.687zm-.342-4.053c-.718 0-1.149-.602-1.149-1.586v-.014c0-.991.431-1.586 1.156-1.586.724 0 1.182.608 1.182 1.586v.014c0 .977-.458 1.585-1.19 1.585z",fill:"#D02B20"}))}},82574:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.167 7a1.167 1.167 0 100 2.333 1.167 1.167 0 000-2.333zm0 4.03a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334zM9 16.23a1.167 1.167 0 112.333 0 1.167 1.167 0 01-2.333 0zm4.005-9.02a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4V7.61a.4.4 0 00-.4-.4h-9.594zm-.399 4.432a.4.4 0 01.4-.4H22.6c.22 0 .4.18.4.4v1.11a.4.4 0 01-.4.4h-9.594a.4.4 0 01-.4-.4v-1.11zm.4 3.63a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4v-1.11a.4.4 0 00-.4-.4h-9.594z",fill:"#9736E8"}))}},60133:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAF5FF",stroke:"#B8E1FF"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.243 11.907v.157c.835.093 1.287.516 1.287 1.223V14.5c0 .693.236.959.855.959h.216V16.5h-.364c-1.459 0-2.078-.56-2.078-1.857v-.973c0-.722-.314-.992-1.159-1.002v-1.366c.84-.005 1.16-.275 1.16-1.002v-.968c0-1.282.618-1.832 2.077-1.832h.364v1.041h-.216c-.624 0-.855.266-.855.958v1.184c0 .713-.452 1.135-1.287 1.224zm15.804.181v-.157c-.835-.088-1.287-.51-1.287-1.223V9.495c0-.693-.236-.954-.855-.954h-.216V7.5h.363c1.454 0 2.073.56 2.073 1.852v.973c0 .722.32.997 1.165 1.002v1.366c-.845.005-1.165.28-1.165 1.002v.973c0 1.282-.613 1.832-2.073 1.832h-.363v-1.046h.216c.619 0 .855-.26.855-.954v-1.188c0-.708.452-1.13 1.287-1.224zM13.15 13a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z",fill:"#0C75AF"}))}},74525:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 8.759a2 2 0 00-2-2h-8c-1.105 0-2 .902-2 2.006v6.068a2 2 0 00.985 1.724l3.66-3.74 3.31 3.381 1.471-1.502 1.731 1.769c.51-.363.843-.958.843-1.632V8.76zM18.5 9c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S19.34 9 18.5 9z",fill:"#9736E8"}))}},31666:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),r.createElement("path",{d:"M9.815 16h1.475V8.954H9.82L8 10.22v1.328l1.729-1.201h.087V16zm3.394 0h5.083v-1.187h-3.106v-.112l1.304-1.216c1.284-1.186 1.7-1.85 1.7-2.651v-.015c0-1.215-1.016-2.046-2.466-2.046-1.543 0-2.598.928-2.598 2.28l.005.02h1.362v-.024c0-.67.474-1.128 1.162-1.128.674 0 1.084.42 1.084 1.02v.015c0 .493-.268.85-1.26 1.812l-2.27 2.24V16zm9.067.156c1.646 0 2.744-.864 2.744-2.143v-.01c0-.957-.683-1.563-1.733-1.66v-.03c.825-.17 1.47-.742 1.47-1.62v-.01c0-1.123-.977-1.885-2.49-1.885-1.48 0-2.471.82-2.574 2.08l-.005.059h1.358l.005-.044c.058-.586.522-.962 1.216-.962.693 0 1.098.361 1.098.947v.01c0 .571-.478.962-1.22.962h-.787v1.05h.806c.855 0 1.357.37 1.357 1.044v.01c0 .596-.493 1.016-1.245 1.016-.761 0-1.264-.39-1.328-.938l-.005-.053h-1.41l.004.063c.098 1.26 1.148 2.114 2.74 2.114z",fill:"#D02B20"}))}},48394:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#F0F0FF",stroke:"#D9D8FF"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.375 16.316c.417-.407.625-.904.625-1.492 0-.589-.206-1.089-.618-1.5l-1.53-1.53a2.042 2.042 0 00-1.5-.617 2.06 2.06 0 00-1.529.646l-.646-.646c.43-.422.646-.934.646-1.537a2.03 2.03 0 00-.61-1.493l-1.515-1.522a2.014 2.014 0 00-1.5-.625 2.03 2.03 0 00-1.492.61l-1.081 1.074A2.006 2.006 0 0010 9.176c0 .589.206 1.089.618 1.5l1.53 1.53c.41.412.91.617 1.5.617a2.06 2.06 0 001.529-.646l.646.646a2.069 2.069 0 00-.646 1.537c0 .588.203 1.086.61 1.493l1.514 1.522c.407.417.907.625 1.5.625a2.03 2.03 0 001.493-.61l1.081-1.074zm-5.956-6.678a.68.68 0 00-.205-.5l-1.515-1.522a.68.68 0 00-.5-.206.71.71 0 00-.5.199l-1.081 1.073a.672.672 0 00-.206.493.68.68 0 00.206.5l1.53 1.53a.678.678 0 00.5.198.71.71 0 00.529-.228l-.14-.136a4.46 4.46 0 01-.158-.158 1.756 1.756 0 01-.11-.14.593.593 0 01-.122-.39.68.68 0 01.206-.5.68.68 0 01.5-.206.59.59 0 01.39.121c.064.047.11.084.14.111.03.027.082.08.158.158l.136.14a.713.713 0 00.242-.537zm5.168 5.187a.68.68 0 00-.206-.5l-1.529-1.53a.68.68 0 00-.5-.205.7.7 0 00-.53.235l.14.136c.079.076.132.129.159.158.027.03.063.076.11.14a.591.591 0 01.121.39.681.681 0 01-.206.5.681.681 0 01-.5.206.591.591 0 01-.39-.121 1.746 1.746 0 01-.14-.111 4.395 4.395 0 01-.157-.158 20.642 20.642 0 00-.136-.14.714.714 0 00-.037 1.037l1.515 1.522a.678.678 0 00.5.198.708.708 0 00.5-.19l1.08-1.074a.672.672 0 00.206-.493z",fill:"#4945FF"}))}},21210:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),r.createElement("path",{d:"M8.62 16h1.857l.627-2.05h2.982l.627 2.05h1.863l-2.941-8.455h-2.08L8.619 16zm3.925-6.768h.105l1.032 3.393h-2.174l1.037-3.393zM21.65 16.1c1.612 0 2.62-1.26 2.62-3.323v-.011c0-2.075-.985-3.323-2.62-3.323-.884 0-1.605.434-1.933 1.137h-.106V7.082h-1.71V16h1.71v-1.002h.106c.334.697 1.02 1.102 1.933 1.102zm-.585-1.418c-.903 0-1.471-.715-1.471-1.899v-.011c0-1.184.574-1.91 1.47-1.91.903 0 1.465.726 1.465 1.904v.011c0 1.19-.556 1.905-1.465 1.905z",fill:"#328048"}))}},3963:(x,h,a)=>{"use strict";a.d(h,{Z:()=>O});var r=a(67294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,y=(n,e)=>{for(var t in e||(e={}))f.call(e,t)&&s(n,t,e[t]);if(l)for(var t of l(e))v.call(e,t)&&s(n,t,e[t]);return n};function O(n){return r.createElement("svg",y({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#F0F0FF",stroke:"#D9D8FF"}),r.createElement("path",{d:"M14.907 9.438c0 .375 0 .738.118 1.078-1.243 1.46-4.526 5.317-4.832 5.611a.582.582 0 00-.193.433c0 .245.15.481.277.614.19.2 1.004.952 1.154.808.444-.433.533-.548.715-.727.274-.268-.029-.816.066-1.039.096-.222.197-.265.361-.3.165-.034.456.084.684.087.24.003.369-.098.548-.265.144-.133.248-.257.25-.45.007-.26-.368-.603-.089-.877.28-.274.684.178.981.144.297-.035.658-.447.695-.623.038-.176-.337-.629-.28-.886.02-.086.197-.288.33-.317.132-.029.72.199.853.17.162-.034.35-.205.502-.3.447.193.854.271 1.376.271C20.4 12.87 22 11.33 22 9.432 22 7.534 20.399 6 18.423 6s-3.516 1.54-3.516 3.438zm5.247-.669a.923.923 0 11-1.847 0 .923.923 0 011.847 0z",fill:"#4945FF"}))}}}]);
