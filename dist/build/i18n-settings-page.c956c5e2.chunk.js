"use strict";(self.webpackChunkinternet_shop_backend=self.webpackChunkinternet_shop_backend||[]).push([[3552],{72751:(ge,Z,t)=>{t.r(Z),t.d(Z,{default:()=>ct});var e=t(67294),r=t(68547),D=t(45697),c=t.n(D),P=t(97132),R=t(29728),B=t(185),M=t(28702),Y=t(67838),S=t(49066),j=t(96315),$=t(86031),v=t(8181),l=t(15559),u=t(80831),O=t(85018),z=t(42866),ae=t(24969),ye=t(59946),le=t(36856),ne=t(82777),G=t(60633),U=t(42761),p=t(46273),b=t(35961),C=t(70004),y=t(72735),I=t(53209);const H=(0,I.Ry)().shape({code:(0,I.Z_)().required(),displayName:(0,I.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(r.translatedErrors.required)});var ie=t(37424),k=t(7982),ve=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const pe=(n,o,a)=>ve(void 0,null,function*(){try{const s=yield(0,r.request)(`/i18n/locales/${n}`,{method:"PUT",body:o});return a({type:"success",message:{id:(0,l.O)("Settings.locales.modal.edit.success")}}),s}catch(s){return a({type:"warning",message:{id:"notification.error"}}),null}}),je=()=>{const[n,o]=(0,e.useState)(!1),a=(0,ie.useDispatch)(),s=(0,r.useNotification)();return{isEditing:n,editLocale:(g,h)=>ve(void 0,null,function*(){o(!0);const f=yield pe(g,h,s);a({type:k.OT,editedLocale:f}),o(!1)})}};var Le=t(11276),Ee=t(74571),oe=t(16364),Pe=t(91216),m=t(82562),E=t(23724),T=t(14087),F=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const q=n=>F(void 0,null,function*(){try{return yield(0,r.request)("/i18n/iso-locales",{method:"GET"})}catch(o){return n({type:"warning",message:{id:"notification.error"}}),[]}}),J=()=>{const{formatMessage:n}=(0,P.useIntl)(),{notifyStatus:o}=(0,T.G)(),a=(0,r.useNotification)(),{isLoading:s,data:d}=(0,E.useQuery)("default-locales",()=>q(a).then(g=>(o(n({id:(0,l.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),g)));return{defaultLocales:d,isLoading:s}},be=({locale:n})=>{const{formatMessage:o}=(0,P.useIntl)(),{values:a,handleChange:s,errors:d}=(0,u.useFormikContext)(),{defaultLocales:g,isLoading:h}=J(),f=!h&&g.find(i=>i.code===n.code);return e.createElement(Le.r,{gap:4},e.createElement(Ee.P,{col:6},e.createElement(Pe.P,{label:o({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:(f==null?void 0:f.code)||n.code,disabled:!0},e.createElement(m.W,{value:(f==null?void 0:f.code)||n.code},(f==null?void 0:f.name)||n.code))),e.createElement(Ee.P,{col:6},e.createElement(oe.o,{name:"displayName",label:o({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:o({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:d.displayName?o({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:a.displayName,onChange:s})))},Qe=be;be.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}).isRequired};var Me=t(36213);const se=({isDefaultLocale:n})=>{const{values:o,setFieldValue:a}=(0,u.useFormikContext)(),{formatMessage:s}=(0,P.useIntl)();return e.createElement(Me.X,{name:"isDefault",hint:s({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>a("isDefault",!o.isDefault),value:o.isDefault,disabled:n},s({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};se.propTypes={isDefaultLocale:c().bool.isRequired};const Ye=se;var Se=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const xe=({locale:n,onClose:o})=>{const{refetchPermissions:a}=(0,r.useRBACProvider)(),{isEditing:s,editLocale:d}=je(),{formatMessage:g}=(0,P.useIntl)(),h=f=>Se(void 0,[f],function*({displayName:i,isDefault:L}){yield d(n.id,{name:i,isDefault:L}),yield a()});return e.createElement(z.P,{onClose:o,labelledBy:"edit-locale-title"},e.createElement(u.Formik,{initialValues:{code:n==null?void 0:n.code,displayName:(n==null?void 0:n.name)||"",isDefault:Boolean(n==null?void 0:n.isDefault)},onSubmit:h,validationSchema:H},e.createElement(r.Form,null,e.createElement(ae.x,null,e.createElement(y.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},g({id:(0,l.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(ye.f,null,e.createElement(ne.v,{label:g({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(p.k,{justifyContent:"space-between"},e.createElement(y.Z,{as:"h2"},g({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(G.m,null,e.createElement(G.O,null,g({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(G.O,null,g({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(C.i,null),e.createElement(b.x,{paddingTop:7,paddingBottom:7},e.createElement(U.n,null,e.createElement(U.x,null,e.createElement(Qe,{locale:n})),e.createElement(U.x,null,e.createElement(Ye,{isDefaultLocale:Boolean(n&&n.isDefault)})))))),e.createElement(le.m,{startActions:e.createElement(R.z,{variant:"tertiary",onClick:o},g({id:"app.components.Button.cancel"})),endActions:e.createElement(R.z,{type:"submit",startIcon:e.createElement(O.Z,null),disabled:s},g({id:"global.save"}))}))))};xe.defaultProps={locale:void 0},xe.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}),onClose:c().func.isRequired};const ke=xe;var De=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const $e=(n,o)=>De(void 0,null,function*(){try{const a=yield(0,r.request)(`/i18n/locales/${n}`,{method:"DELETE"});return o({type:"success",message:{id:(0,l.O)("Settings.locales.modal.delete.success")}}),a}catch(a){return o({type:"warning",message:{id:"notification.error"}}),a}}),Ze=()=>{const[n,o]=(0,e.useState)(!1),a=(0,ie.useDispatch)(),s=(0,r.useNotification)();return{isDeleting:n,deleteLocale:g=>De(void 0,null,function*(){o(!0),yield $e(g,s),a({type:k.HC,id:g}),o(!1)})}},Te=({localeToDelete:n,onClose:o})=>{const{isDeleting:a,deleteLocale:s}=Ze(),d=Boolean(n),g=()=>s(n.id).then(o);return e.createElement(r.ConfirmDialog,{isConfirmButtonLoading:a,onConfirm:g,onToggleDialog:o,isOpen:d})};Te.defaultProps={localeToDelete:void 0},Te.propTypes={localeToDelete:c().shape({id:c().number.isRequired}),onClose:c().func.isRequired};const qe=Te;var Ue=t(27361),_=t.n(Ue),Ke=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const _e=(n,o)=>Ke(void 0,[n,o],function*({code:a,name:s,isDefault:d},g){const h=yield(0,r.request)("/i18n/locales",{method:"POST",body:{name:s,code:a,isDefault:d}});return g({type:"success",message:{id:(0,l.O)("Settings.locales.modal.create.success")}}),h}),We=()=>{const[n,o]=(0,e.useState)(!1),a=(0,ie.useDispatch)(),s=(0,r.useNotification)();return{isAdding:n,addLocale:g=>Ke(void 0,null,function*(){o(!0);try{const h=yield _e(g,s);a({type:k.xz,newLocale:h})}catch(h){const f=_()(h,"response.payload.message",null);throw f&&f.includes("already exists")?s({type:"warning",message:{id:(0,l.O)("Settings.locales.modal.create.alreadyExist")}}):s({type:"warning",message:{id:"notification.error"}}),h}finally{o(!1)}})}};var et=t(31950),tt=t(90608);const K=e.memo(({value:n,onClear:o,onLocaleChange:a,error:s})=>{const{formatMessage:d}=(0,P.useIntl)(),{defaultLocales:g,isLoading:h}=J(),{locales:f}=(0,v.Z)(),i=(g||[]).map(Q=>({label:Q.name,value:Q.code})).filter(({value:Q})=>{const fe=f.find(({code:Ne})=>Ne===Q);return!fe||fe.code===n}),L=n||"";return e.createElement(et.h,{"aria-busy":h,error:s,label:d({id:(0,l.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:L,onClear:n?o:void 0,onChange:Q=>{const fe=i.find(Ne=>Ne.value===Q);fe&&a({code:fe.value,displayName:fe.label})},placeholder:d({id:"components.placeholder.select",defaultMessage:"Select"})},i.map(Q=>e.createElement(tt.O,{value:Q.value,key:Q.value},Q.label)))});K.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},K.propTypes={error:c().string,onClear:c().func,onLocaleChange:c().func,value:c().string};const ze=K,at=()=>{const{formatMessage:n}=(0,P.useIntl)(),{values:o,handleChange:a,setFieldValue:s,errors:d}=(0,u.useFormikContext)(),g=(0,e.useCallback)(f=>{s("displayName",f.displayName),s("code",f.code)},[s]),h=(0,e.useCallback)(()=>{s("displayName",""),s("code","")},[s]);return e.createElement(Le.r,{gap:4},e.createElement(Ee.P,{col:6},e.createElement(ze,{error:d.code,value:o.code,onLocaleChange:g,onClear:h})),e.createElement(Ee.P,{col:6},e.createElement(oe.o,{name:"displayName",label:n({id:(0,l.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,l.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:d.displayName?n({id:(0,l.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:a})))},Oe=()=>{const{values:n,setFieldValue:o}=(0,u.useFormikContext)(),{formatMessage:a}=(0,P.useIntl)();return e.createElement(Me.X,{hint:a({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!n.isDefault),value:n.isDefault},a({id:(0,l.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var ce=(n,o,a)=>new Promise((s,d)=>{var g=i=>{try{f(a.next(i))}catch(L){d(L)}},h=i=>{try{f(a.throw(i))}catch(L){d(L)}},f=i=>i.done?s(i.value):Promise.resolve(i.value).then(g,h);f((a=a.apply(n,o)).next())});const Ce={code:"",displayName:"",isDefault:!1},ue=({onClose:n})=>{const{isAdding:o,addLocale:a}=We(),{formatMessage:s}=(0,P.useIntl)(),{refetchPermissions:d}=(0,r.useRBACProvider)(),g=h=>ce(void 0,null,function*(){yield a({code:h.code,name:h.displayName,isDefault:h.isDefault}),yield d()});return e.createElement(z.P,{onClose:n,labelledBy:"add-locale-title"},e.createElement(u.Formik,{initialValues:Ce,onSubmit:g,validationSchema:H,validateOnChange:!1},e.createElement(r.Form,null,e.createElement(ae.x,null,e.createElement(y.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},s({id:(0,l.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(ye.f,null,e.createElement(ne.v,{label:s({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(p.k,{justifyContent:"space-between"},e.createElement(y.Z,{as:"h2",variant:"beta"},s({id:(0,l.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(G.m,null,e.createElement(G.O,null,s({id:(0,l.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(G.O,null,s({id:(0,l.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(C.i,null),e.createElement(b.x,{paddingTop:7,paddingBottom:7},e.createElement(U.n,null,e.createElement(U.x,null,e.createElement(at,null)),e.createElement(U.x,null,e.createElement(Oe,null)))))),e.createElement(le.m,{startActions:e.createElement(R.z,{variant:"tertiary",onClick:n},s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(R.z,{type:"submit",startIcon:e.createElement(O.Z,null),disabled:o},s({id:"global.save",defaultMessage:"Save"}))}))))};ue.propTypes={onClose:c().func.isRequired};const He=ue;var Ve=t(12028),we=t(7681),w=t(63237),Ge=t(11057),lt=t(63985),Re=t(47144),ee=t(18374),nt=t(550),ot=t(4585),re=t(20022),st=Object.defineProperty,Ae=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,Xe=(n,o,a)=>o in n?st(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,Je=(n,o)=>{for(var a in o||(o={}))Be.call(o,a)&&Xe(n,a,o[a]);if(Ae)for(var a of Ae(o))te.call(o,a)&&Xe(n,a,o[a]);return n};const Ie=({locales:n,onDeleteLocale:o,onEditLocale:a})=>{const{formatMessage:s}=(0,P.useIntl)();return e.createElement(Ge.i,{colCount:4,rowCount:n.length+1},e.createElement(lt.h,null,e.createElement(Re.Tr,null,e.createElement(ee.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},s({id:(0,l.O)("Settings.locales.row.id")}))),e.createElement(ee.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},s({id:(0,l.O)("Settings.locales.row.displayName")}))),e.createElement(ee.Th,null,e.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},s({id:(0,l.O)("Settings.locales.row.default-locale")}))),e.createElement(ee.Th,null,e.createElement(w.T,null,"Actions")))),e.createElement(nt.p,null,n.map(d=>e.createElement(Re.Tr,Je({key:d.id},(0,r.onRowClick)({fn:()=>a(d),condition:a})),e.createElement(ee.Td,null,e.createElement(y.Z,{textColor:"neutral800"},d.id)),e.createElement(ee.Td,null,e.createElement(y.Z,{textColor:"neutral800"},d.name)),e.createElement(ee.Td,null,e.createElement(y.Z,{textColor:"neutral800"},d.isDefault?s({id:(0,l.O)("Settings.locales.default")}):null)),e.createElement(ee.Td,null,e.createElement(we.K,Je({horizontal:!0,spacing:1,style:{justifyContent:"flex-end"}},r.stopPropagation),a&&e.createElement(Ve.h,{onClick:()=>a(d),label:s({id:(0,l.O)("Settings.list.actions.edit")}),icon:e.createElement(ot.Z,null),noBorder:!0}),o&&!d.isDefault&&e.createElement(Ve.h,{onClick:()=>o(d),label:s({id:(0,l.O)("Settings.list.actions.delete")}),icon:e.createElement(re.default,null),noBorder:!0})))))))};Ie.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},Ie.propTypes={locales:c().array,onDeleteLocale:c().func,onEditLocale:c().func};const rt=Ie,Fe=({canUpdateLocale:n,canDeleteLocale:o,onToggleCreateModal:a,isCreating:s})=>{const[d,g]=(0,e.useState)(),[h,f]=(0,e.useState)(),{locales:i}=(0,v.Z)(),{formatMessage:L}=(0,P.useIntl)();(0,r.useFocusWhenNavigate)();const Q=()=>g(void 0),fe=o?g:void 0,Ne=()=>f(void 0),ut=n?f:void 0;return e.createElement(B.o,{tabIndex:-1},e.createElement(Y.T,{primaryAction:e.createElement(R.z,{startIcon:e.createElement(j.default,null),onClick:a,size:"S"},L({id:(0,l.O)("Settings.list.actions.add")})),title:L({id:(0,l.O)("plugin.name")}),subtitle:L({id:(0,l.O)("Settings.list.description")})}),e.createElement(S.D,null,(i==null?void 0:i.length)>0?e.createElement(rt,{locales:i,onDeleteLocale:fe,onEditLocale:ut}):e.createElement(M.EmptyStateLayout,{icon:e.createElement($.default,{width:void 0,height:void 0}),content:L({id:(0,l.O)("Settings.list.empty.title")}),action:a?e.createElement(R.z,{variant:"secondary",startIcon:e.createElement(j.default,null),onClick:a},L({id:(0,l.O)("Settings.list.actions.add")})):null})),s&&e.createElement(He,{onClose:a}),h&&e.createElement(ke,{onClose:Ne,locale:h}),e.createElement(qe,{localeToDelete:d,onClose:Q}))};Fe.defaultProps={onToggleCreateModal:void 0},Fe.propTypes={canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired,onToggleCreateModal:c().func,isCreating:c().bool.isRequired};const x=Fe,A=({canReadLocale:n,canCreateLocale:o,canDeleteLocale:a,canUpdateLocale:s})=>{const[d,g]=(0,e.useState)(!1),h=o?()=>g(f=>!f):void 0;return n?e.createElement(x,{canUpdateLocale:s,canDeleteLocale:a,onToggleCreateModal:h,isCreating:d}):null};A.propTypes={canReadLocale:c().bool.isRequired,canCreateLocale:c().bool.isRequired,canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired};const N=A;var me=t(2135);const ct=()=>{const{isLoading:n,allowedActions:{canRead:o,canUpdate:a,canCreate:s,canDelete:d}}=(0,r.useRBAC)(me.Z);return n?null:e.createElement(N,{canReadLocale:o,canCreateLocale:s,canUpdateLocale:a,canDeleteLocale:d})}},31950:(ge,Z,t)=>{t.d(Z,{h:()=>oe,X:()=>Pe});var e=t(67294),r=t(45697),D=t(12645),c=t(70968),P=t(41762),R=t(70389),B=t(7801);const M={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},Y={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function S(m=[],E=null,T=[]){const F=String(E!=null?E:"").toLowerCase();return F?m.filter(q=>q.props.children.toString().toLowerCase().includes(F)&&T.indexOf(q)<0):m}function j(m,E){if(!E&&m===B.y.DOWN)return M.Open;if(m===B.y.DOWN)return M.Next;if(m===B.y.UP)return M.Previous;if(m===B.y.HOME)return M.First;if(m===B.y.END)return M.Last;if(m===B.y.ESCAPE)return M.Close;if(m===B.y.ENTER)return M.CloseSelect;if(m===B.y.BACKSPACE||m===B.y.CLEAR||m.length===1)return M.Type}function $(m,E,T){switch(T){case M.First:return 0;case M.Last:return E;case M.Previous:return Math.max(0,m-1);case M.Next:return Math.min(E,m+1);default:return m}}function v(m){(0,R.Z)(m,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:E,top:T,left:F})=>{E.scrollTop=T,E.scrollLeft=F})}var l=t(46273),u=t(81318),O=t(88533),z=t(35961),ae=t(72735),ye=t(88655),le=t(74020),ne=t(90608);const G=({options:m,activeOptionRef:E})=>((0,e.useEffect)(()=>{E.current&&v(E.current)},[E]),m);G.defaultProps={activeOptionRef:void 0},G.propTypes={options:r.array.isRequired};var U=t(54574),p=t(64777),b=t(63428),C=t(96404),y=t(7681),I=t(63237),X=Object.defineProperty,H=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,he=(m,E,T)=>E in m?X(m,E,{enumerable:!0,configurable:!0,writable:!0,value:T}):m[E]=T,je=(m,E)=>{for(var T in E||(E={}))ve.call(E,T)&&he(m,T,E[T]);if(k)for(var T of k(E))pe.call(E,T)&&he(m,T,E[T]);return m},Le=(m,E)=>H(m,ie(E)),Ee=(m,E)=>{var T={};for(var F in m)ve.call(m,F)&&E.indexOf(F)<0&&(T[F]=m[F]);if(m!=null&&k)for(var F of k(m))E.indexOf(F)<0&&pe.call(m,F)&&(T[F]=m[F]);return T};const oe=m=>{var E=m,{children:T,clearLabel:F,creatable:q,createMessage:it,disabled:J,error:be,hasMoreItems:Qe,hint:Me,label:se,labelAction:Ye,loading:Se,loadingMessage:xe,noOptionsMessage:ke,onChange:De,onClear:$e,onCreateOption:dt,onInputChange:Ze,onLoadMore:Te,placeholder:qe,required:Ue,value:_}=E,Ke=Ee(E,["children","clearLabel","creatable","createMessage","disabled","error","hasMoreItems","hint","label","labelAction","loading","loadingMessage","noOptionsMessage","onChange","onClear","onCreateOption","onInputChange","onLoadMore","placeholder","required","value"]);const _e=()=>{var x;return(x=T.find(A=>{var N;return((N=A.props)==null?void 0:N.value.toLowerCase())===_.toLowerCase()}).props)==null?void 0:x.children},[V,We]=(0,e.useState)(0),[et,tt]=(0,e.useState)(null),[K,ze]=(0,e.useState)(T),[de,at]=(0,e.useState)(!1),[W,Oe]=(0,e.useState)(""),ce=(0,e.useRef)(),Ce=(0,e.useRef)(!1),ue=(0,e.useRef)(),He=(0,e.useRef)(),Ve=(0,e.useRef)(),we=(0,e.useRef)(!0),w=(0,P.M)("combobox"),Ge=`${w}-label`;if(!se&&!Ke["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{ze(S(T,W))},[W,T]),(0,e.useEffect)(()=>{de&&ce.current&&v(ce.current)},[V,de]),(0,e.useLayoutEffect)(()=>{we.current&&(we.current=!1)},[_]);const lt=de?`${w}-${V}`:"",Re=()=>{De(null),Oe("")},ee=x=>{Ze&&Ze(x);const A=ue.current.value;ze(S(T,A)),We(0),tt(null),W!==A&&Oe(A),de||te(!0,!1)},nt=x=>{const{key:A}=x,N=q&&W?K.length:K.length-1,me=j(A,de);switch(_&&!W&&A===B.y.BACKSPACE&&Re(),me){case M.Next:{if(V===N){re(0);break}re($(V,N,me));break}case M.Previous:{if(V===0){re(N);break}re($(V,N,me));break}case M.Last:case M.First:{if(V===N){re(0);break}re($(V,N,me));break}case M.CloseSelect:x.preventDefault(),Be(V);break;case M.Close:x.preventDefault(),te(!1);break;case M.Open:te(!0);break}},ot=x=>{if(x.preventDefault(),_&&!Ce.current&&Oe(""),Ce.current){Ce.current=!1;return}te(!1,!1)},re=x=>{We(x)},st=x=>{re(x),Be(x)},Ae=()=>{Ce.current=!0},Be=x=>{const A=K[x];if(Oe(""),A){De(A.props.value),te(!1);return}q&&(dt(W),te(!1))},te=(x,A=!0)=>{at(x),A&&ue.current.focus()},Xe=e.Children.toArray(K).map((x,A)=>{const N=V===A;return(0,e.cloneElement)(x,{id:`${w}-${A}`,"aria-selected":et===A,"aria-posinset":A+1,"aria-setsize":e.Children.toArray(K).length,ref(me){N&&(ce.current=me)},onClick:()=>st(A),onMouseDown:Ae,isSelected:N})}),Je=()=>{ue.current.focus(),$e&&$e(),Re()},Ie=()=>{ue.current.focus(),te(!0)},rt=()=>{const x=K.findIndex(A=>{var N;return((N=A.props)==null?void 0:N.children)===W});return W&&x===-1},Fe=x=>{x.preventDefault(),te(x,!0)};return e.createElement(U.g,{hint:Me,error:be,id:w,required:Ue},e.createElement(I.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},_),e.createElement(y.K,{spacing:se||Me||be?1:0},se&&e.createElement(p.Q,{action:Ye},se),e.createElement(le.d8,{ref:He,$disabled:J,hasError:be},e.createElement(le.fv,{wrap:"wrap"},!W&&_&&e.createElement(le.K7,{id:`${w}-selected-value`},e.createElement(ae.Z,null,_e())),e.createElement(le.II,{"aria-activedescendant":lt,"aria-autocomplete":"list","aria-controls":`${w}-listbox`,"aria-disabled":J,"aria-expanded":de,"aria-haspopup":"listbox","aria-labelledby":se?Ge:void 0,autoComplete:"off",autoCorrect:"off",id:w,onBlur:J?void 0:ot,onClick:J?void 0:Fe,onInput:J?void 0:ee,onKeyDown:J?void 0:nt,placeholder:_?"":qe,readOnly:J,ref:ue,required:Ue,role:"combobox",spellCheck:"off",type:"text",value:W})),e.createElement(l.k,null,(_||W)&&e.createElement(u.zb,{id:`${w}-clear`,"aria-label":F,disabled:J,paddingLeft:3,as:"button",onClick:Je,type:"button"},e.createElement(c.default,null)),e.createElement(u.AV,{disabled:J,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:Ie,tabIndex:-1,type:"button"},e.createElement(D.default,null)))),e.createElement(b.J,null),e.createElement(C.c,null)),de&&e.createElement(O.J,{id:`${w}-popover`,source:He,spacing:4,fullWidth:!0,intersectionId:`${w}-listbox-popover-intersection`,onReachEnd:Qe&&!Se?Te:void 0},e.createElement("div",{role:"listbox",ref:Ve,id:`${w}-listbox`,"aria-labelledby":se?Ge:void 0},(Boolean(K.length)||q)&&e.createElement(e.Fragment,null,e.createElement(G,{activeOptionRef:ce,options:Xe}),rt()&&q&&e.createElement(ne.O,{isSelected:V===K.length,ref:x=>{V===K.length&&(ce.current=x)},onMouseDown:Ae,onClick:()=>Be(),taindex:0},it(W))),!K.length&&!q&&!Se&&e.createElement(z.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:ce},e.createElement(ae.Z,{textColor:"neutral800"},ke(W))),Se&&e.createElement(l.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(ye.a,{small:!0},xe)))))},Pe=m=>e.createElement(oe,Le(je({},m),{creatable:!0}));oe.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:m=>`Create "${m}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},Pe.defaultProps=oe.defaultProps,oe.propTypes={"aria-label":r.string,children:r.oneOfType([r.arrayOf(r.node),r.node]),clearLabel:r.string,creatable:r.bool,createMessage:r.func,disabled:r.bool,error:r.string,hasMoreItems:r.bool,hint:r.oneOfType([r.string,r.node,r.arrayOf(r.node)]),label:r.string,labelAction:r.element,loading:r.bool,loadingMessage:r.string,noOptionsMessage:r.func,onChange:r.func.isRequired,onClear:r.func,onCreateOption:r.func,onInputChange:r.func,onLoadMore:r.func,placeholder:r.string,value:r.string},Pe.propTypes=Le(je({},oe.propTypes),{onCreateOption:r.func.isRequired})},90608:(ge,Z,t)=>{t.d(Z,{O:()=>$});var e=t(67294),r=t(45697),D=t(72735),c=t(74020),P=Object.defineProperty,R=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,Y=(v,l,u)=>l in v?P(v,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):v[l]=u,S=(v,l)=>{for(var u in l||(l={}))B.call(l,u)&&Y(v,u,l[u]);if(R)for(var u of R(l))M.call(l,u)&&Y(v,u,l[u]);return v},j=(v,l)=>{var u={};for(var O in v)B.call(v,O)&&l.indexOf(O)<0&&(u[O]=v[O]);if(v!=null&&R)for(var O of R(v))l.indexOf(O)<0&&M.call(v,O)&&(u[O]=v[O]);return u};const $=(0,e.forwardRef)((v,l)=>{var u=v,{isSelected:O,children:z}=u,ae=j(u,["isSelected","children"]);return e.createElement(c.Zq,S({hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:O,ref:l},ae),e.createElement(D.Z,{textColor:O?"primary600":"neutral800",fontWeight:O?"bold":null},z))});$.defaultProps={isSelected:!1},$.propTypes={children:r.oneOfType([r.string,r.number]).isRequired,isSelected:r.bool},$.displayName="ComboboxOption"},74020:(ge,Z,t)=>{t.d(Z,{II:()=>M,K7:()=>R,Zq:()=>Y,d8:()=>P,fv:()=>B});var e=t(71893),r=t(35961),D=t(46273),c=t(15585);const P=(0,e.default)(D.k)`
  position: relative;
  border: 1px solid ${({theme:S,hasError:j})=>j?S.colors.danger600:S.colors.neutral200};
  padding-right: ${({theme:S})=>S.spaces[3]};
  padding-left: ${({theme:S})=>S.spaces[3]};
  border-radius: ${({theme:S})=>S.borderRadius};
  background: ${({theme:S})=>S.colors.neutral0};

  ${({theme:S,$disabled:j})=>j?`
    color: ${S.colors.neutral600};
    background: ${S.colors.neutral150};
  `:void 0}

  ${(0,c.k3)()}
`,R=e.default.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,B=(0,e.default)(D.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,M=e.default.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:S})=>S.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,Y=(0,e.default)(r.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:S,theme:j})=>S&&`background: ${j.colors.primary100};`}

  &:hover {
    background: ${({theme:S})=>S.colors.primary100};
  }
`},49066:(ge,Z,t)=>{t.d(Z,{D:()=>c});var e=t(67294),r=t(45697),D=t(35961);const c=({children:P})=>e.createElement(D.x,{paddingLeft:10,paddingRight:10},P);c.propTypes={children:r.node.isRequired}},67838:(ge,Z,t)=>{t.d(Z,{T:()=>ne});var e=t(67294),r=t(71893),D=t(45697),c=t(72735),P=t(35961),R=t(46273);const B=p=>{const b=(0,e.useRef)(null),[C,y]=(0,e.useState)(!0),I=([X])=>{y(X.isIntersecting)};return(0,e.useEffect)(()=>{const X=b.current,H=new IntersectionObserver(I,p);return X&&H.observe(b.current),()=>{X&&H.disconnect()}},[b,p]),[b,C]};var M=t(98402);const Y=(p,b)=>{const C=(0,M.useCallbackRef)(b);(0,e.useLayoutEffect)(()=>{const y=new ResizeObserver(C);return Array.isArray(p)?p.forEach(I=>{I.current&&y.observe(I.current)}):p.current&&y.observe(p.current),()=>{y.disconnect()}},[p,C])};var S=Object.defineProperty,j=Object.defineProperties,$=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,O=(p,b,C)=>b in p?S(p,b,{enumerable:!0,configurable:!0,writable:!0,value:C}):p[b]=C,z=(p,b)=>{for(var C in b||(b={}))l.call(b,C)&&O(p,C,b[C]);if(v)for(var C of v(b))u.call(b,C)&&O(p,C,b[C]);return p},ae=(p,b)=>j(p,$(b)),ye=(p,b)=>{var C={};for(var y in p)l.call(p,y)&&b.indexOf(y)<0&&(C[y]=p[y]);if(p!=null&&v)for(var y of v(p))b.indexOf(y)<0&&u.call(p,y)&&(C[y]=p[y]);return C};const le=()=>{const p=(0,e.useRef)(null),[b,C]=(0,e.useState)(null),[y,I]=B({root:null,rootMargin:"0px",threshold:0});return Y(y,()=>{y.current&&C(y.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{p.current&&C(p.current.getBoundingClientRect())},[p]),{containerRef:y,isVisible:I,baseHeaderLayoutRef:p,headerSize:b}},ne=p=>{const{containerRef:b,isVisible:C,baseHeaderLayoutRef:y,headerSize:I}=le();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:I==null?void 0:I.height},ref:b},C&&e.createElement(U,z({ref:y},p))),!C&&e.createElement(U,ae(z({},p),{sticky:!0,width:I==null?void 0:I.width})))};ne.displayName="HeaderLayout";const G=(0,r.default)(P.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${p=>p.width}px;
  z-index: 4;
  box-shadow: ${({theme:p})=>p.shadows.tableShadow};
`,U=e.forwardRef((p,b)=>{var C=p,{navigationAction:y,primaryAction:I,secondaryAction:X,subtitle:H,title:ie,sticky:k,width:ve}=C,pe=ye(C,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const he=typeof H=="string";return k?e.createElement(G,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:ve,"data-strapi-header-sticky":!0},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,y&&e.createElement(P.x,{paddingRight:3},y),e.createElement(P.x,null,e.createElement(c.Z,z({variant:"beta",as:"h1"},pe),ie),he?e.createElement(c.Z,{variant:"pi",textColor:"neutral600"},H):H),X?e.createElement(P.x,{paddingLeft:4},X):null),e.createElement(R.k,null,I?e.createElement(P.x,{paddingLeft:2},I):void 0))):e.createElement(P.x,{ref:b,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:y?6:8,background:"neutral100","data-strapi-header":!0},y?e.createElement(P.x,{paddingBottom:2},y):null,e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,e.createElement(c.Z,z({as:"h1",variant:"alpha"},pe),ie),X?e.createElement(P.x,{paddingLeft:4},X):null),I),he?e.createElement(c.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},H):H)});U.displayName="BaseHeaderLayout",U.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},U.propTypes={navigationAction:D.node,primaryAction:D.node,secondaryAction:D.node,sticky:D.bool,subtitle:D.oneOfType([D.string,D.node]),title:D.string.isRequired,width:D.number},ne.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},ne.propTypes={navigationAction:D.node,primaryAction:D.node,secondaryAction:D.node,subtitle:D.oneOfType([D.string,D.node]),title:D.string.isRequired}},185:(ge,Z,t)=>{t.d(Z,{o:()=>$});var e=t(67294),r=t(45697),D=t(71893),c=Object.defineProperty,P=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,M=(v,l,u)=>l in v?c(v,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):v[l]=u,Y=(v,l)=>{for(var u in l||(l={}))R.call(l,u)&&M(v,u,l[u]);if(P)for(var u of P(l))B.call(l,u)&&M(v,u,l[u]);return v},S=(v,l)=>{var u={};for(var O in v)R.call(v,O)&&l.indexOf(O)<0&&(u[O]=v[O]);if(v!=null&&P)for(var O of P(v))l.indexOf(O)<0&&B.call(v,O)&&(u[O]=v[O]);return u};const j=D.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,$=v=>{var l=v,{labelledBy:u}=l,O=S(l,["labelledBy"]);const z=u||"main-content-title";return e.createElement(j,Y({"aria-labelledby":z,id:"main-content",tabIndex:-1},O))};$.defaultProps={labelledBy:void 0},$.propTypes={labelledBy:r.string}}}]);
