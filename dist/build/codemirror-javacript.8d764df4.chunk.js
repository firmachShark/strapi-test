(self.webpackChunkinternet_shop_backend=self.webpackChunkinternet_shop_backend||[]).push([[3860],{96876:(be,we,Nr)=>{(function(h){h(Nr(4631))})(function(h){"use strict";h.defineMode("javascript",function(Br,g){var N=Br.indentUnit,br=g.statementIndent,X=g.jsonld,S=g.json||X,wr=g.trackScope!==!1,k=g.typescript,Y=g.wordCharacters||/[\w$\xa1-\uffff]/,hr=function(){function r(v){return{type:v,style:"keyword"}}var e=r("keyword a"),t=r("keyword b"),f=r("keyword c"),u=r("keyword d"),l=r("operator"),m={type:"atom",style:"atom"};return{if:r("if"),while:e,with:e,else:t,do:t,try:t,finally:t,return:u,break:u,continue:u,new:r("new"),delete:f,void:f,throw:f,debugger:r("debugger"),var:r("var"),const:r("var"),let:r("var"),function:r("function"),catch:r("catch"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:l,typeof:l,instanceof:l,true:m,false:m,null:m,undefined:m,NaN:m,Infinity:m,this:r("this"),class:r("class"),super:r("atom"),yield:f,export:r("export"),import:r("import"),extends:f,await:f}}(),xr=/[+\-*&%=<>!?|~^@]/,Fr=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Pr(r){for(var e=!1,t,f=!1;(t=r.next())!=null;){if(!e){if(t=="/"&&!f)return;t=="["?f=!0:f&&t=="]"&&(f=!1)}e=!e&&t=="\\"}}var R,Z;function b(r,e,t){return R=r,Z=t,e}function z(r,e){var t=r.next();if(t=='"'||t=="'")return e.tokenize=Jr(t),e.tokenize(r,e);if(t=="."&&r.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return b("number","number");if(t=="."&&r.match(".."))return b("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(t))return b(t);if(t=="="&&r.eat(">"))return b("=>","operator");if(t=="0"&&r.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return b("number","number");if(/\d/.test(t))return r.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),b("number","number");if(t=="/")return r.eat("*")?(e.tokenize=C,C(r,e)):r.eat("/")?(r.skipToEnd(),b("comment","comment")):Or(r,e,1)?(Pr(r),r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),b("regexp","string-2")):(r.eat("="),b("operator","operator",r.current()));if(t=="`")return e.tokenize=U,U(r,e);if(t=="#"&&r.peek()=="!")return r.skipToEnd(),b("meta","meta");if(t=="#"&&r.eatWhile(Y))return b("variable","property");if(t=="<"&&r.match("!--")||t=="-"&&r.match("->")&&!/\S/.test(r.string.slice(0,r.start)))return r.skipToEnd(),b("comment","comment");if(xr.test(t))return(t!=">"||!e.lexical||e.lexical.type!=">")&&(r.eat("=")?(t=="!"||t=="=")&&r.eat("="):/[<>*+\-|&?]/.test(t)&&(r.eat(t),t==">"&&r.eat(t))),t=="?"&&r.eat(".")?b("."):b("operator","operator",r.current());if(Y.test(t)){r.eatWhile(Y);var f=r.current();if(e.lastType!="."){if(hr.propertyIsEnumerable(f)){var u=hr[f];return b(u.type,u.style,f)}if(f=="async"&&r.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return b("async","keyword",f)}return b("variable","variable",f)}}function Jr(r){return function(e,t){var f=!1,u;if(X&&e.peek()=="@"&&e.match(Fr))return t.tokenize=z,b("jsonld-keyword","meta");for(;(u=e.next())!=null&&!(u==r&&!f);)f=!f&&u=="\\";return f||(t.tokenize=z),b("string","string")}}function C(r,e){for(var t=!1,f;f=r.next();){if(f=="/"&&t){e.tokenize=z;break}t=f=="*"}return b("comment","comment")}function U(r,e){for(var t=!1,f;(f=r.next())!=null;){if(!t&&(f=="`"||f=="$"&&r.eat("{"))){e.tokenize=z;break}t=!t&&f=="\\"}return b("quasi","string-2",r.current())}var Lr="([{}])";function or(r,e){e.fatArrowAt&&(e.fatArrowAt=null);var t=r.string.indexOf("=>",r.start);if(!(t<0)){if(k){var f=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start,t));f&&(t=f.index)}for(var u=0,l=!1,m=t-1;m>=0;--m){var v=r.string.charAt(m),E=Lr.indexOf(v);if(E>=0&&E<3){if(!u){++m;break}if(--u==0){v=="("&&(l=!0);break}}else if(E>=3&&E<6)++u;else if(Y.test(v))l=!0;else if(/["'\/`]/.test(v))for(;;--m){if(m==0)return;var pe=r.string.charAt(m-1);if(pe==v&&r.string.charAt(m-2)!="\\"){m--;break}}else if(l&&!u){++m;break}}l&&!u&&(e.fatArrowAt=m)}}var Qr={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function vr(r,e,t,f,u,l){this.indented=r,this.column=e,this.type=t,this.prev=u,this.info=l,f!=null&&(this.align=f)}function Rr(r,e){if(!wr)return!1;for(var t=r.localVars;t;t=t.next)if(t.name==e)return!0;for(var f=r.context;f;f=f.prev)for(var t=f.vars;t;t=t.next)if(t.name==e)return!0}function gr(r,e,t,f,u){var l=r.cc;for(i.state=r,i.stream=u,i.marked=null,i.cc=l,i.style=e,r.lexical.hasOwnProperty("align")||(r.lexical.align=!0);;){var m=l.length?l.pop():S?p:w;if(m(t,f)){for(;l.length&&l[l.length-1].lex;)l.pop()();return i.marked?i.marked:t=="variable"&&Rr(r,f)?"variable-2":e}}}var i={state:null,column:null,marked:null,cc:null};function o(){for(var r=arguments.length-1;r>=0;r--)i.cc.push(arguments[r])}function n(){return o.apply(null,arguments),!0}function sr(r,e){for(var t=e;t;t=t.next)if(t.name==r)return!0;return!1}function B(r){var e=i.state;if(i.marked="def",!!wr){if(e.context){if(e.lexical.info=="var"&&e.context&&e.context.block){var t=yr(r,e.context);if(t!=null){e.context=t;return}}else if(!sr(r,e.localVars)){e.localVars=new D(r,e.localVars);return}}g.globalVars&&!sr(r,e.globalVars)&&(e.globalVars=new D(r,e.globalVars))}}function yr(r,e){if(e)if(e.block){var t=yr(r,e.prev);return t?t==e.prev?e:new W(t,e.vars,!0):null}else return sr(r,e.vars)?e:new W(e.prev,new D(r,e.vars),!1);else return null}function rr(r){return r=="public"||r=="private"||r=="protected"||r=="abstract"||r=="readonly"}function W(r,e,t){this.prev=r,this.vars=e,this.block=t}function D(r,e){this.name=r,this.next=e}var Ur=new D("this",new D("arguments",null));function M(){i.state.context=new W(i.state.context,i.state.localVars,!1),i.state.localVars=Ur}function er(){i.state.context=new W(i.state.context,i.state.localVars,!0),i.state.localVars=null}M.lex=er.lex=!0;function j(){i.state.localVars=i.state.context.vars,i.state.context=i.state.context.prev}j.lex=!0;function s(r,e){var t=function(){var f=i.state,u=f.indented;if(f.lexical.type=="stat")u=f.lexical.indented;else for(var l=f.lexical;l&&l.type==")"&&l.align;l=l.prev)u=l.indented;f.lexical=new vr(u,i.stream.column(),r,null,f.lexical,e)};return t.lex=!0,t}function a(){var r=i.state;r.lexical.prev&&(r.lexical.type==")"&&(r.indented=r.lexical.indented),r.lexical=r.lexical.prev)}a.lex=!0;function c(r){function e(t){return t==r?n():r==";"||t=="}"||t==")"||t=="]"?o():n(e)}return e}function w(r,e){return r=="var"?n(s("vardef",e),kr,c(";"),a):r=="keyword a"?n(s("form"),cr,w,a):r=="keyword b"?n(s("form"),w,a):r=="keyword d"?i.stream.match(/^\s*$/,!1)?n():n(s("stat"),F,c(";"),a):r=="debugger"?n(c(";")):r=="{"?n(s("}"),er,ir,a,j):r==";"?n():r=="if"?(i.state.lexical.info=="else"&&i.state.cc[i.state.cc.length-1]==a&&i.state.cc.pop()(),n(s("form"),cr,w,a,Ir)):r=="function"?n(A):r=="for"?n(s("form"),er,Ar,w,j,a):r=="class"||k&&e=="interface"?(i.marked="keyword",n(s("form",r=="class"?r:e),zr,a)):r=="variable"?k&&e=="declare"?(i.marked="keyword",n(w)):k&&(e=="module"||e=="enum"||e=="type")&&i.stream.match(/^\s*\w/,!1)?(i.marked="keyword",e=="enum"?n(qr):e=="type"?n(Sr,c("operator"),d,c(";")):n(s("form"),_,c("{"),s("}"),ir,a,a)):k&&e=="namespace"?(i.marked="keyword",n(s("form"),p,w,a)):k&&e=="abstract"?(i.marked="keyword",n(w)):n(s("stat"),Xr):r=="switch"?n(s("form"),cr,c("{"),s("}","switch"),er,ir,a,a,j):r=="case"?n(p,c(":")):r=="default"?n(c(":")):r=="catch"?n(s("form"),M,Wr,w,a,j):r=="export"?n(s("stat"),se,a):r=="import"?n(s("stat"),ce,a):r=="async"?n(w):e=="@"?n(p,w):o(s("stat"),p,c(";"),a)}function Wr(r){if(r=="(")return n(O,c(")"))}function p(r,e){return jr(r,e,!1)}function y(r,e){return jr(r,e,!0)}function cr(r){return r!="("?o():n(s(")"),F,c(")"),a)}function jr(r,e,t){if(i.state.fatArrowAt==i.stream.start){var f=t?Er:_r;if(r=="(")return n(M,s(")"),x(O,")"),a,c("=>"),f,j);if(r=="variable")return o(M,_,c("=>"),f,j)}var u=t?P:$;return Qr.hasOwnProperty(r)?n(u):r=="function"?n(A,u):r=="class"||k&&e=="interface"?(i.marked="keyword",n(s("form"),oe,a)):r=="keyword c"||r=="async"?n(t?y:p):r=="("?n(s(")"),F,c(")"),a,u):r=="operator"||r=="spread"?n(t?y:p):r=="["?n(s("]"),de,a,u):r=="{"?K(tr,"}",null,u):r=="quasi"?o(nr,u):r=="new"?n(Kr(t)):n()}function F(r){return r.match(/[;\}\)\],]/)?o():o(p)}function $(r,e){return r==","?n(F):P(r,e,!1)}function P(r,e,t){var f=t==!1?$:P,u=t==!1?p:y;if(r=="=>")return n(M,t?Er:_r,j);if(r=="operator")return/\+\+|--/.test(e)||k&&e=="!"?n(f):k&&e=="<"&&i.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?n(s(">"),x(d,">"),a,f):e=="?"?n(p,c(":"),u):n(u);if(r=="quasi")return o(nr,f);if(r!=";"){if(r=="(")return K(y,")","call",f);if(r==".")return n(Yr,f);if(r=="[")return n(s("]"),F,c("]"),a,f);if(k&&e=="as")return i.marked="keyword",n(d,f);if(r=="regexp")return i.state.lastType=i.marked="operator",i.stream.backUp(i.stream.pos-i.stream.start-1),n(u)}}function nr(r,e){return r!="quasi"?o():e.slice(e.length-2)!="${"?n(nr):n(F,Dr)}function Dr(r){if(r=="}")return i.marked="string-2",i.state.tokenize=U,n(nr)}function _r(r){return or(i.stream,i.state),o(r=="{"?w:p)}function Er(r){return or(i.stream,i.state),o(r=="{"?w:y)}function Kr(r){return function(e){return e=="."?n(r?Gr:Hr):e=="variable"&&k?n(te,r?P:$):o(r?y:p)}}function Hr(r,e){if(e=="target")return i.marked="keyword",n($)}function Gr(r,e){if(e=="target")return i.marked="keyword",n(P)}function Xr(r){return r==":"?n(a,w):o($,c(";"),a)}function Yr(r){if(r=="variable")return i.marked="property",n()}function tr(r,e){if(r=="async")return i.marked="property",n(tr);if(r=="variable"||i.style=="keyword"){if(i.marked="property",e=="get"||e=="set")return n(Zr);var t;return k&&i.state.fatArrowAt==i.stream.start&&(t=i.stream.match(/^\s*:\s*/,!1))&&(i.state.fatArrowAt=i.stream.pos+t[0].length),n(q)}else{if(r=="number"||r=="string")return i.marked=X?"property":i.style+" property",n(q);if(r=="jsonld-keyword")return n(q);if(k&&rr(e))return i.marked="keyword",n(tr);if(r=="[")return n(p,J,c("]"),q);if(r=="spread")return n(y,q);if(e=="*")return i.marked="keyword",n(tr);if(r==":")return o(q)}}function Zr(r){return r!="variable"?o(q):(i.marked="property",n(A))}function q(r){if(r==":")return n(y);if(r=="(")return o(A)}function x(r,e,t){function f(u,l){if(t?t.indexOf(u)>-1:u==","){var m=i.state.lexical;return m.info=="call"&&(m.pos=(m.pos||0)+1),n(function(v,E){return v==e||E==e?o():o(r)},f)}return u==e||l==e?n():t&&t.indexOf(";")>-1?o(r):n(c(e))}return function(u,l){return u==e||l==e?n():o(r,f)}}function K(r,e,t){for(var f=3;f<arguments.length;f++)i.cc.push(arguments[f]);return n(s(e,t),x(r,e),a)}function ir(r){return r=="}"?n():o(w,ir)}function J(r,e){if(k){if(r==":")return n(d);if(e=="?")return n(J)}}function Cr(r,e){if(k&&(r==":"||e=="in"))return n(d)}function Tr(r){if(k&&r==":")return i.stream.match(/^\s*\w+\s+is\b/,!1)?n(p,re,d):n(d)}function re(r,e){if(e=="is")return i.marked="keyword",n()}function d(r,e){if(e=="keyof"||e=="typeof"||e=="infer"||e=="readonly")return i.marked="keyword",n(e=="typeof"?y:d);if(r=="variable"||e=="void")return i.marked="type",n(T);if(e=="|"||e=="&")return n(d);if(r=="string"||r=="number"||r=="atom")return n(T);if(r=="[")return n(s("]"),x(d,"]",","),a,T);if(r=="{")return n(s("}"),lr,a,T);if(r=="(")return n(x(mr,")"),ee,T);if(r=="<")return n(x(d,">"),d);if(r=="quasi")return o(dr,T)}function ee(r){if(r=="=>")return n(d)}function lr(r){return r.match(/[\}\)\]]/)?n():r==","||r==";"?n(lr):o(H,lr)}function H(r,e){if(r=="variable"||i.style=="keyword")return i.marked="property",n(H);if(e=="?"||r=="number"||r=="string")return n(H);if(r==":")return n(d);if(r=="[")return n(c("variable"),Cr,c("]"),H);if(r=="(")return o(Q,H);if(!r.match(/[;\}\)\],]/))return n()}function dr(r,e){return r!="quasi"?o():e.slice(e.length-2)!="${"?n(dr):n(d,ne)}function ne(r){if(r=="}")return i.marked="string-2",i.state.tokenize=U,n(dr)}function mr(r,e){return r=="variable"&&i.stream.match(/^\s*[?:]/,!1)||e=="?"?n(mr):r==":"?n(d):r=="spread"?n(mr):o(d)}function T(r,e){if(e=="<")return n(s(">"),x(d,">"),a,T);if(e=="|"||r=="."||e=="&")return n(d);if(r=="[")return n(d,c("]"),T);if(e=="extends"||e=="implements")return i.marked="keyword",n(d);if(e=="?")return n(d,c(":"),d)}function te(r,e){if(e=="<")return n(s(">"),x(d,">"),a,T)}function fr(){return o(d,ie)}function ie(r,e){if(e=="=")return n(d)}function kr(r,e){return e=="enum"?(i.marked="keyword",n(qr)):o(_,J,I,ae)}function _(r,e){if(k&&rr(e))return i.marked="keyword",n(_);if(r=="variable")return B(e),n();if(r=="spread")return n(_);if(r=="[")return K(fe,"]");if(r=="{")return K(Vr,"}")}function Vr(r,e){return r=="variable"&&!i.stream.match(/^\s*:/,!1)?(B(e),n(I)):(r=="variable"&&(i.marked="property"),r=="spread"?n(_):r=="}"?o():r=="["?n(p,c("]"),c(":"),Vr):n(c(":"),_,I))}function fe(){return o(_,I)}function I(r,e){if(e=="=")return n(y)}function ae(r){if(r==",")return n(kr)}function Ir(r,e){if(r=="keyword b"&&e=="else")return n(s("form","else"),w,a)}function Ar(r,e){if(e=="await")return n(Ar);if(r=="(")return n(s(")"),ue,a)}function ue(r){return r=="var"?n(kr,L):r=="variable"?n(L):o(L)}function L(r,e){return r==")"?n():r==";"?n(L):e=="in"||e=="of"?(i.marked="keyword",n(p,L)):o(p,L)}function A(r,e){if(e=="*")return i.marked="keyword",n(A);if(r=="variable")return B(e),n(A);if(r=="(")return n(M,s(")"),x(O,")"),a,Tr,w,j);if(k&&e=="<")return n(s(">"),x(fr,">"),a,A)}function Q(r,e){if(e=="*")return i.marked="keyword",n(Q);if(r=="variable")return B(e),n(Q);if(r=="(")return n(M,s(")"),x(O,")"),a,Tr,j);if(k&&e=="<")return n(s(">"),x(fr,">"),a,Q)}function Sr(r,e){if(r=="keyword"||r=="variable")return i.marked="type",n(Sr);if(e=="<")return n(s(">"),x(fr,">"),a)}function O(r,e){return e=="@"&&n(p,O),r=="spread"?n(O):k&&rr(e)?(i.marked="keyword",n(O)):k&&r=="this"?n(J,I):o(_,J,I)}function oe(r,e){return r=="variable"?zr(r,e):ar(r,e)}function zr(r,e){if(r=="variable")return B(e),n(ar)}function ar(r,e){if(e=="<")return n(s(">"),x(fr,">"),a,ar);if(e=="extends"||e=="implements"||k&&r==",")return e=="implements"&&(i.marked="keyword"),n(k?d:p,ar);if(r=="{")return n(s("}"),V,a)}function V(r,e){if(r=="async"||r=="variable"&&(e=="static"||e=="get"||e=="set"||k&&rr(e))&&i.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return i.marked="keyword",n(V);if(r=="variable"||i.style=="keyword")return i.marked="property",n(G,V);if(r=="number"||r=="string")return n(G,V);if(r=="[")return n(p,J,c("]"),G,V);if(e=="*")return i.marked="keyword",n(V);if(k&&r=="(")return o(Q,V);if(r==";"||r==",")return n(V);if(r=="}")return n();if(e=="@")return n(p,V)}function G(r,e){if(e=="!"||e=="?")return n(G);if(r==":")return n(d,I);if(e=="=")return n(y);var t=i.state.lexical.prev,f=t&&t.info=="interface";return o(f?Q:A)}function se(r,e){return e=="*"?(i.marked="keyword",n(pr,c(";"))):e=="default"?(i.marked="keyword",n(p,c(";"))):r=="{"?n(x(Mr,"}"),pr,c(";")):o(w)}function Mr(r,e){if(e=="as")return i.marked="keyword",n(c("variable"));if(r=="variable")return o(y,Mr)}function ce(r){return r=="string"?n():r=="("?o(p):r=="."?o($):o(ur,$r,pr)}function ur(r,e){return r=="{"?K(ur,"}"):(r=="variable"&&B(e),e=="*"&&(i.marked="keyword"),n(le))}function $r(r){if(r==",")return n(ur,$r)}function le(r,e){if(e=="as")return i.marked="keyword",n(ur)}function pr(r,e){if(e=="from")return i.marked="keyword",n(p)}function de(r){return r=="]"?n():o(x(y,"]"))}function qr(){return o(s("form"),_,c("{"),s("}"),x(me,"}"),a,a)}function me(){return o(_,I)}function ke(r,e){return r.lastType=="operator"||r.lastType==","||xr.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}function Or(r,e,t){return e.tokenize==z&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||e.lastType=="quasi"&&/\{\s*$/.test(r.string.slice(0,r.pos-(t||0)))}return{startState:function(r){var e={tokenize:z,lastType:"sof",cc:[],lexical:new vr((r||0)-N,0,"block",!1),localVars:g.localVars,context:g.localVars&&new W(null,null,!1),indented:r||0};return g.globalVars&&typeof g.globalVars=="object"&&(e.globalVars=g.globalVars),e},token:function(r,e){if(r.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=r.indentation(),or(r,e)),e.tokenize!=C&&r.eatSpace())return null;var t=e.tokenize(r,e);return R=="comment"?t:(e.lastType=R=="operator"&&(Z=="++"||Z=="--")?"incdec":R,gr(e,t,R,Z,r))},indent:function(r,e){if(r.tokenize==C||r.tokenize==U)return h.Pass;if(r.tokenize!=z)return 0;var t=e&&e.charAt(0),f=r.lexical,u;if(!/^\s*else\b/.test(e))for(var l=r.cc.length-1;l>=0;--l){var m=r.cc[l];if(m==a)f=f.prev;else if(m!=Ir&&m!=j)break}for(;(f.type=="stat"||f.type=="form")&&(t=="}"||(u=r.cc[r.cc.length-1])&&(u==$||u==P)&&!/^[,\.=+\-*:?[\(]/.test(e));)f=f.prev;br&&f.type==")"&&f.prev.type=="stat"&&(f=f.prev);var v=f.type,E=t==v;return v=="vardef"?f.indented+(r.lastType=="operator"||r.lastType==","?f.info.length+1:0):v=="form"&&t=="{"?f.indented:v=="form"?f.indented+N:v=="stat"?f.indented+(ke(r,e)?br||N:0):f.info=="switch"&&!E&&g.doubleIndentSwitch!=!1?f.indented+(/^(?:case|default)\b/.test(e)?N:2*N):f.align?f.column+(E?0:1):f.indented+(E?0:N)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:S?null:"/*",blockCommentEnd:S?null:"*/",blockCommentContinue:S?null:" * ",lineComment:S?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:S?"json":"javascript",jsonldMode:X,jsonMode:S,expressionAllowed:Or,skipExpression:function(r){gr(r,"atom","atom","true",new h.StringStream("",2,null))}}}),h.registerHelper("wordChars","javascript",/[\w$]/),h.defineMIME("text/javascript","javascript"),h.defineMIME("text/ecmascript","javascript"),h.defineMIME("application/javascript","javascript"),h.defineMIME("application/x-javascript","javascript"),h.defineMIME("application/ecmascript","javascript"),h.defineMIME("application/json",{name:"javascript",json:!0}),h.defineMIME("application/x-json",{name:"javascript",json:!0}),h.defineMIME("application/manifest+json",{name:"javascript",json:!0}),h.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),h.defineMIME("text/typescript",{name:"javascript",typescript:!0}),h.defineMIME("application/typescript",{name:"javascript",typescript:!0})})}}]);
