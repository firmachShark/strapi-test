(self.webpackChunkinternet_shop_backend=self.webpackChunkinternet_shop_backend||[]).push([[5509],{64020:(C,x,_)=>{(function(l){l(_(4631))})(function(l){"use strict";l.defineOption("styleSelectedText",!1,function(e,t,n){var r=n&&n!=l.Init;t&&!r?(e.state.markedSelection=[],e.state.markedSelectionStyle=typeof t=="string"?t:"CodeMirror-selectedtext",h(e),e.on("cursorActivity",v),e.on("change",k)):!t&&r&&(e.off("cursorActivity",v),e.off("change",k),u(e),e.state.markedSelection=e.state.markedSelectionStyle=null)});function v(e){e.state.markedSelection&&e.operation(function(){y(e)})}function k(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation(function(){u(e)})}var f=8,S=l.Pos,o=l.cmpPos;function s(e,t,n,r){if(o(t,n)!=0)for(var a=e.state.markedSelection,i=e.state.markedSelectionStyle,c=t.line;;){var b=c==t.line?t:S(c,0),p=c+f,d=p>=n.line,w=d?n:S(p,0),g=e.markText(b,w,{className:i});if(r==null?a.push(g):a.splice(r++,0,g),d)break;c=p}}function u(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function h(e){u(e);for(var t=e.listSelections(),n=0;n<t.length;n++)s(e,t[n].from(),t[n].to())}function y(e){if(!e.somethingSelected())return u(e);if(e.listSelections().length>1)return h(e);var t=e.getCursor("start"),n=e.getCursor("end"),r=e.state.markedSelection;if(!r.length)return s(e,t,n);var a=r[0].find(),i=r[r.length-1].find();if(!a||!i||n.line-t.line<=f||o(t,i.to)>=0||o(n,a.from)<=0)return h(e);for(;o(t,a.from)>0;)r.shift().clear(),a=r[0].find();for(o(t,a.from)<0&&(a.to.line-t.line<f?(r.shift().clear(),s(e,t,a.to,0)):s(e,t,a.from,0));o(n,i.to)<0;)r.pop().clear(),i=r[r.length-1].find();o(n,i.to)>0&&(n.line-i.from.line<f?(r.pop().clear(),s(e,i.from,n)):s(e,i.to,n))}})}}]);
