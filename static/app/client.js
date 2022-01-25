
var an=Symbol.for("#__initor__"),hn=Symbol.for("#__inited__"),un=Symbol.for("#type"),cn=Symbol.for("#__listeners__");function St(r,e,t){if(!r)return;let n=Object.getOwnPropertyDescriptor(r,e);return n||r==t?n||void 0:St(Reflect.getPrototypeOf(r),e,t)}function br(r){let e;return r?(e=r.toIterable)?e.call(r):r:[]}var me=Symbol.for("#__init__"),dn=Symbol.for("#__initor__"),mn=Symbol.for("#__inited__"),pe=Symbol.for("#schedule"),Kt=Symbol.for("#frames"),xt=Symbol.for("#interval"),J=Symbol.for("#stage"),G=Symbol.for("#scheduled"),Tr=Symbol.for("#fps"),ge=Symbol.for("#ticker"),yr=globalThis.requestAnimationFrame||function(r){return setTimeout1(r,1e3/60)};var pn=1/60,_e=class{constructor(e=null){this[me](e)}[me](e=null){var t;this.owner=e&&(t=e.owner)!==void 0?t:null,this.target=e&&(t=e.target)!==void 0?t:null,this.active=e&&(t=e.active)!==void 0?t:!1,this.value=e&&(t=e.value)!==void 0?t:void 0,this.skip=e&&(t=e.skip)!==void 0?t:0,this.last=e&&(t=e.last)!==void 0?t:0}tick(e,t){return this.last=this.owner[Kt],this.target.tick(this,t),1}update(e,t){let n=this.active,i=e.value;return this.value!=i&&(this.deactivate(),this.value=i),(this.value||n||t)&&this.activate(),this}queue(){this.owner.add(this)}activate(){return this.value===!0?this.owner.on("commit",this):this.value===!1||typeof this.value=="number"&&(this.value/(1e3/60)<=2?this.owner.on("raf",this):this[xt]=globalThis.setInterval(this.queue.bind(this),this.value)),this.active=!0,this}deactivate(){return this.value===!0&&this.owner.un("commit",this),this.owner.un("raf",this),this[xt]&&(globalThis.clearInterval(this[xt]),this[xt]=null),this.active=!1,this}},be=class{constructor(){var e=this;this.id=Symbol(),this.queue=[],this.stage=-1,this[J]=-1,this[Kt]=0,this[G]=!1,this.listeners={},this.intervals={},e.commit=function(){return e.add("commit"),e},this[Tr]=0,e.$promise=null,e.$resolve=null,this[ge]=function(t){return e[G]=!1,e.tick(t)}}add(e,t){return(t||this.queue.indexOf(e)==-1)&&this.queue.push(e),this[G]||this[pe](),this}get committing\u03A6(){return this.queue.indexOf("commit")>=0}listen(e,t){let n=this.listeners[e],i=!n;return n||(n=this.listeners[e]=new Set),n.add(t),e=="raf"&&i&&this.add("raf"),this}unlisten(e,t){var n;let i=this.listeners[e];return i&&i.delete(t),e=="raf"&&i&&i.size==0&&(n=this.listeners.raf,delete this.listeners.raf),this}on(e,t){return this.listen(e,t)}un(e,t){return this.unlisten(e,t)}get promise(){var e=this;return e.$promise||(e.$promise=new Promise(function(t){return e.$resolve=t}))}tick(e){var t=this;let n=this.queue,i=this[Kt]++;if(this.ts||(this.ts=e),this.dt=e-this.ts,this.ts=e,this.queue=[],this[J]=1,n.length)for(let l=0,h=br(n),o=h.length;l<o;l++){let a=h[l];typeof a=="string"&&this.listeners[a]?t.listeners[a].forEach(function(u){if(u.tick instanceof Function)return u.tick(t,a);if(u instanceof Function)return u(t,a)}):a instanceof Function?a(t.dt,t):a.tick&&a.tick(t.dt,t)}return this[J]=this[G]?0:-1,t.$promise&&(t.$resolve(t),t.$promise=t.$resolve=null),t.listeners.raf&&t.add("raf"),t}[pe](){return this[G]||(this[G]=!0,this[J]==-1&&(this[J]=0),yr(this[ge])),this}schedule(e,t){var n,i;return t||(t=e[n=this.id]||(e[n]={value:!0})),(t[i=this.id]||(t[i]=new _e({owner:this,target:e}))).update(t,!0)}unschedule(e,t={}){t||(t=e[this.id]);let n=t&&t[this.id];return n&&n.active&&n.deactivate(),this}},T=new be;function Yt(){return T.add("commit").promise}function $r(r,e){return globalThis.setTimeout(function(){r(),Yt()},e)}function Sr(r,e){return globalThis.setInterval(function(){r(),Yt()},e)}var xr=globalThis.clearInterval,Er=globalThis.clearTimeout,X=globalThis.imba||(globalThis.imba={});X.commit=Yt;X.setTimeout=$r;X.setInterval=Sr;X.clearInterval=xr;X.clearTimeout=Er;var Te=Symbol.for("#toStringDeopt"),_n=Symbol.for("#__initor__"),bn=Symbol.for("#__inited__"),ye=Symbol.for("#symbols"),$e=Symbol.for("#batches"),Se=Symbol.for("#extras"),xe=Symbol.for("#stacks"),zt=class{constructor(e){this.dom=e,this.string=""}contains(e){return this.dom.classList.contains(e)}add(e){return this.contains(e)?this:(this.string+=(this.string?" ":"")+e,this.dom.classList.add(e),this)}remove(e){if(!this.contains(e))return this;let t=new RegExp("(^|\\s)*"+e+"(\\s|$)*","g");return this.string=this.string.replace(t,""),this.dom.classList.remove(e),this}toggle(e,t){return t===void 0&&(t=!this.contains(e)),t?this.add(e):this.remove(e)}incr(e){let t=this.stacks,n=t[e]||0;return n<1&&this.add(e),t[e]=Math.max(n,0)+1}decr(e){let t=this.stacks,n=t[e]||0;return n==1&&this.remove(e),t[e]=Math.max(n,1)-1}reconcile(e,t){let n=this[ye],i=this[$e],l=!0;if(!n)n=this[ye]=[e],i=this[$e]=[t||""],this.toString=this.valueOf=this[Te];else{let h=n.indexOf(e),o=t||"";h==-1?(n.push(e),i.push(o)):i[h]!=o?i[h]=o:l=!1}l&&(this[Se]=" "+i.join(" "),this.sync())}valueOf(){return this.string}toString(){return this.string}[Te](){return this.string+(this[Se]||"")}sync(){return this.dom.flagSync$()}get stacks(){return this[xe]||(this[xe]={})}};var Et=Symbol.for("#__init__"),Ee=Symbol.for("#__initor__"),we=Symbol.for("#__inited__"),Qt=Symbol.for("#getRenderContext"),wr=Symbol.for("#getDynamicContext"),Ce=Symbol(),_={context:null},Oe=class{constructor(e=null){this[Et](e)}[Et](e=null){var t;this.stack=e&&(t=e.stack)!==void 0?t:[]}push(e){return this.stack.push(e)}pop(e){return this.stack.pop()}},yn=new Oe,N=class extends Map{static[Et](){return this.prototype[Ee]=Ce,this}constructor(e,t=null){super();this._=e,this.sym=t,this[Ee]===Ce&&this[we]&&this[we]()}pop(){return _.context=null}[Qt](e){let t=this.get(e);return t||this.set(e,t=new N(this._,e)),_.context=t}[wr](e,t){return this[Qt](e)[Qt](t)}run(e){return this.value=e,_.context==this&&(_.context=null),this.get(e)}cache(e){return this.set(this.value,e),e}};N[Et]();function ve(r,e=Symbol(),t=r){return _.context=r[e]||(r[e]=new N(t,e))}function Ne(){let r=_.context,e=r||new N(null);return r&&(_.context=null),e}function Z(r,e){let t=Object.getOwnPropertyDescriptors(e);return delete t.constructor,Object.defineProperties(r,t),r}function Cr(r){let e;return r?(e=r.toIterable)?e.call(r):r:[]}var Jt=Symbol.for("#parent"),Or=Symbol.for("#context"),Fe=Symbol.for("#__init__"),Xt=Symbol.for("#getRenderContext"),vr=Symbol.for("#getDynamicContext"),Le=Symbol.for("#insertChild"),tt=Symbol.for("#appendChild"),Zt=Symbol.for("#replaceChild"),Ie=Symbol.for("#removeChild"),F=Symbol.for("#insertInto"),De=Symbol.for("#insertIntoDeopt"),et=Symbol.for("#removeFrom"),Pe=Symbol.for("#removeFromDeopt"),V=Symbol.for("#replaceWith"),Re=Symbol.for("#replaceWithDeopt"),te=Symbol.for("#placeholderNode"),Nr=Symbol.for("#attachToParent"),Fr=Symbol.for("#detachFromParent"),Lr=Symbol.for("#placeChild"),Ir=Symbol.for("#beforeReconcile"),Dr=Symbol.for("#afterReconcile"),Pr=Symbol.for("#afterVisit"),Cn=Symbol.for("#__initor__"),On=Symbol.for("#__inited__"),Ae=Symbol.for("##parent"),Rr=Symbol.for("##up"),Me=Symbol.for("##context"),M=Symbol.for("#domNode"),wt=Symbol.for("##placeholderNode"),ke=Symbol.for("#domDeopt"),Ar=Symbol.for("#isRichElement"),Be=Symbol.for("#src"),Ct=Symbol.for("#htmlNodeName"),Mr=Symbol.for("#getSlot"),vn=Symbol.for("#ImbaElement"),He=Symbol.for("#cssns"),kr=Symbol.for("#cssid"),Nn=Symbol(),{Event:Fn,UIEvent:Ln,MouseEvent:In,PointerEvent:Dn,KeyboardEvent:Pn,CustomEvent:Br,Node:Ot,Comment:Hr,Text:Gr,Element:k,HTMLElement:vt,HTMLHtmlElement:Rn,HTMLSelectElement:An,HTMLInputElement:Mn,HTMLTextAreaElement:kn,HTMLButtonElement:Bn,HTMLOptionElement:Hn,HTMLScriptElement:Gn,SVGElement:Ge,DocumentFragment:Vn,ShadowRoot:Un,Document:Vr,Window:jn,customElements:Wn}=globalThis.window,Ve={};function Ue(r,e,t){if(!r)return t[e]=null;if(t[e]!==void 0)return t[e];let n=Object.getOwnPropertyDescriptor(r,e);return n!==void 0||r==Ge?t[e]=n||null:Ue(Reflect.getPrototypeOf(r),e,t)}var ee={},ie={},Ur={},re={};var jr={get(r,e){let t=r,n;for(;t&&n==null;)(t=t[Jt])&&(n=t[e]);return n},set(r,e,t){let n=r,i;for(;n&&i==null;){if(St(n,e,k))return n[e]=t,!0;n=n[Jt]}return!0}},je=class{get flags(){return this.documentElement.flags}};Z(Vr.prototype,je.prototype);var We=class{get[Jt](){return this[Ae]||this.parentNode||this[Rr]}get[Or](){return this[Me]||(this[Me]=new Proxy(this,jr))}[Fe](){return this}[Xt](e){return ve(this,e)}[vr](e,t){return this[Xt](e)[Xt](t)}[Le](e,t){return e[F](this,t)}[tt](e){return e[F](this,null)}[Zt](e,t){let n=this[Le](e,t);return this[Ie](t),n}[Ie](e){return e[et](this)}[F](e,t=null){return t?e.insertBefore(this,t):e.appendChild(this),this}[De](e,t){return t?e.insertBefore(this[M]||this,t):e.appendChild(this[M]||this),this}[et](e){return e.removeChild(this)}[Pe](e){return e.removeChild(this[M]||this)}[V](e,t){return t[Zt](e,this)}[Re](e,t){return t[Zt](e,this[M]||this)}get[te](){return this[wt]||(this[wt]=globalThis.document.createComment("placeholder"))}set[te](e){let t=this[wt];this[wt]=e,t&&t!=e&&t.parentNode&&t[V](e)}[Nr](){let e=this[M],t=e&&e.parentNode;return e&&t&&e!=this&&(this[M]=null,this[F](t,e),e[et](t)),this}[Fr](){(this[ke]!=!0?(this[ke]=!0,!0):!1)&&(this[V]=this[Re],this[et]=this[Pe],this[F]=this[De]);let e=this[te];return this.parentNode&&e!=this&&(e[F](this.parentNode,this),this[et](this.parentNode)),this[M]=e,this}[Lr](e,t,n){let i=typeof e;if(i==="undefined"||e===null){if(n&&n instanceof Hr)return n;let l=globalThis.document.createComment("");return n?n[V](l,this):l[F](this,null)}if(e===n)return e;if(i!=="object"){let l,h=e;return t&128&&t&256,n?n instanceof Gr?(n.textContent=h,n):(l=globalThis.document.createTextNode(h),n[V](l,this),l):(this.appendChild(l=globalThis.document.createTextNode(h)),l)}else return n?n[V](e,this):e[F](this,null)}};Z(Ot.prototype,We.prototype);var qe=class{log(...e){return console.log(...e),this}emit(e,t,n={bubbles:!0,cancelable:!0}){t!=null&&(n.detail=t);let i=new Br(e,n),l=this.dispatchEvent(i);return i}text$(e){return this.textContent=e,this}[Ir](){return this}[Dr](){return this}[Pr](){this.render&&this.render()}get flags(){return this.$flags||(this.$flags=new zt(this),this.flag$==k.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags}flag$(e){let t=this.flags$ns;this.className=t?t+(this.flags$ext=e):this.flags$ext=e}flagDeopt$(){var e=this;this.flag$=this.flagExt$,e.flagSelf$=function(t){return e.flagSync$(e.flags$own=t)}}flagExt$(e){return this.flagSync$(this.flags$ext=e)}flagSelf$(e){return this.flagDeopt$(),this.flagSelf$(e)}flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}set$(e,t){let n=St(this,e,k);!n||!n.set?this.setAttribute(e,t):this[e]=t}get richValue(){return this.value}set richValue(e){this.value=e}};Z(k.prototype,qe.prototype);k.prototype.setns$=k.prototype.setAttributeNS;k.prototype[Ar]=!0;function s(r,e,t,n){let i=globalThis.document.createElement(r);return t&&(i.className=t),n!==null&&i.text$(n),e&&e[tt]&&e[tt](i),i}var Ke=class{set$(e,t){var n;let i=Ve[n=this.nodeName]||(Ve[n]={}),l=Ue(this,e,i);!l||!l.set?this.setAttribute(e,t):this[e]=t}flag$(e){let t=this.flags$ns;this.setAttribute("class",t?t+(this.flags$ext=e):this.flags$ext=e)}flagSelf$(e){var t=this;return t.flag$=function(n){return t.flagSync$(t.flags$ext=n)},t.flagSelf$=function(n){return t.flagSync$(t.flags$own=n)},t.flagSelf$(e)}flagSync$(){return this.setAttribute("class",(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||""))}};Z(Ge.prototype,Ke.prototype);var Ye=class{set src(e){if((this[Be]!=e?(this[Be]=e,!0):!1)&&e){if(e.adoptNode)e.adoptNode(this);else if(e.content){for(let t=e.attributes,n=0,i=Object.keys(t),l=i.length,h,o;n<l;n++)h=i[n],o=t[h],this.setAttribute(h,o);this.innerHTML=e.content}}}};Z(SVGSVGElement.prototype,Ye.prototype);function d(r,e,t,n,i){let l=globalThis.document.createElementNS("http://www.w3.org/2000/svg",r);return t&&(l.className.baseVal=t),e&&e[tt]&&e[tt](l),n&&(l.textContent=n),l}var Nt=globalThis.navigator,Wr=Nt&&Nt.vendor||"",ze=Nt&&Nt.userAgent||"",qr=Wr.indexOf("Apple")>-1||ze.indexOf("CriOS")>=0||ze.indexOf("FxiOS")>=0,Ft=!qr,Qe=new Map,Je=class extends vt{connectedCallback(){return Ft?this.parentNode.removeChild(this):this.parentNode.connectedCallback()}disconnectedCallback(){if(!Ft)return this.parentNode.disconnectedCallback()}};window.customElements.define("i-hook",Je);function Kr(r,e){let t=Qe.get(e);if(!t){t={};let n=e.prototype,i=[n];for(;(n=n&&Object.getPrototypeOf(n))&&n.constructor!=r.constructor;)i.unshift(n);for(let l=0,h=Cr(i),o=h.length;l<o;l++){let a=h[l],u=Object.getOwnPropertyDescriptors(a);Object.assign(t,u)}Qe.set(e,t)}return t}function Xe(r,e,t,n,i){let l;typeof r!="string"&&r&&r.nodeName&&(r=r.nodeName);let h=ie[r]||r;if(ee[r]){let o=ee[r],a=o.prototype[Ct];if(a&&Ft)l=globalThis.document.createElement(a,{is:r});else if(o.create$&&a){l=globalThis.document.createElement(a),l.setAttribute("is",h);let u=Kr(l,o);Object.defineProperties(l,u),l.__slots={},l.appendChild(globalThis.document.createElement("i-hook"))}else o.create$?(l=o.create$(l),l.__slots={}):console.warn("could not create tag "+r)}else l=globalThis.document.createElement(ie[r]||r);return l[Ae]=e,l[Fe](),n!==null&&l[Mr]("__").text$(n),(t||l.flags$ns)&&l.flag$(t||""),l}function Ze(r,e,t={}){Ur[r]=re[r]=e,e.nodeName=r;let n=r,i=e.prototype;if(r.indexOf("-")==-1&&(n=""+r+"-tag",ie[r]=n),t.cssns){let l=(i._ns_||i[He]||"")+" "+(t.cssns||"");i._ns_=l.trim()+" ",i[He]=t.cssns}if(t.cssid){let l=(i.flags$ns||"")+" "+t.cssid;i[kr]=t.cssid,i.flags$ns=l.trim()+" "}return i[Ct]&&!t.extends&&(t.extends=i[Ct]),t.extends?(i[Ct]=t.extends,ee[r]=e,Ft&&window.customElements.define(n,e,{extends:t.extends})):window.customElements.define(n,e),e}var Yr=globalThis.imba||(globalThis.imba={});Yr.document=globalThis.document;function zr(r){let e;return r?(e=r.toIterable)?e.call(r):r:[]}var U=Symbol.for("#__init__"),ti=Symbol.for("#__initor__"),ei=Symbol.for("#__inited__"),Qr=Symbol.for("#afterVisit"),Jr=Symbol.for("#beforeReconcile"),Xr=Symbol.for("#afterReconcile"),ne=Symbol.for("#count"),j=Symbol.for("#autorender"),ii=Symbol(),Zr=new class{constructor(r=null){this[U](r)}[U](r=null){var e;this.items=r&&(e=r.items)!==void 0?e:[],this.current=r&&(e=r.current)!==void 0?e:null,this.lastQueued=r&&(e=r.lastQueued)!==void 0?e:null,this.tests=r&&(e=r.tests)!==void 0?e:0}flush(){let r=null;for(;r=this.items.shift();){if(!r.parentNode||r.hydrated\u03A6)continue;let e=this.current;this.current=r,r.__F|=1024,r.connectedCallback(),this.current=e}}queue(r){var e=this;let t=this.items.length,n=0,i=this.lastQueued;this.lastQueued=r;let l=Ot.DOCUMENT_POSITION_PRECEDING,h=Ot.DOCUMENT_POSITION_FOLLOWING;if(t){let o=this.items.indexOf(i),a=o,u=function(I,W){return e.tests++,I.compareDocumentPosition(W)};(o==-1||i.nodeName!=r.nodeName)&&(a=o=0);let g=e.items[a];for(;g&&u(g,r)&h;)g=e.items[++a];if(a!=o)g?e.items.splice(a,0,r):e.items.push(r);else{for(;g&&u(g,r)&l;)g=e.items[--a];a!=o&&(g?e.items.splice(a+1,0,r):e.items.unshift(r))}}else e.items.push(r),e.current||globalThis.queueMicrotask(e.flush.bind(e))}run(r){var e,t;if(this.active)return;this.active=!0;let n=globalThis.document.querySelectorAll(".__ssr");console.log("running hydrator",r,n.length,Array.from(n));for(let i=0,l=zr(n),h=l.length;i<h;i++){let o=l[i];o[ne]||(o[ne]=1),o[ne]++;let a=o.nodeName,u=(t=this.map)[a]||(t[a]=globalThis.window.customElements.get(a.toLowerCase())||vt);console.log("item type",a,u,!!re[a.toLowerCase()]),!(!o.connectedCallback||!o.parentNode||o.hydrated\u03A6)&&console.log("hydrate",o)}return this.active=!1}};var Lt=class extends vt{static[U](){return this.prototype[ti]=ii,this}constructor(){super();this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build(),this[ti]===ii&&this[ei]&&this[ei]()}setup$(){return this.__slots={},this.__F=0}[U](){return this.__F|=1|2,this}flag$(e){this.className=this.flags$ext=e}build(){return this}awaken(){return this}mount(){return this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(){return this.commit()}visit(){return this.commit()}commit(){return this.render\u03A6?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&~256&~8192):(this.__F|=8192,this)}get autoschedule(){return(this.__F&64)!=0}set autoschedule(e){e?this.__F|=64:this.__F&=~64}set autorender(e){let t=this[j]||(this[j]={});t.value=e,this.mounted\u03A6&&T.schedule(this,t)}get render\u03A6(){return!this.suspended\u03A6}get mounting\u03A6(){return(this.__F&16)!=0}get mounted\u03A6(){return(this.__F&32)!=0}get awakened\u03A6(){return(this.__F&8)!=0}get rendered\u03A6(){return(this.__F&512)!=0}get suspended\u03A6(){return(this.__F&4096)!=0}get rendering\u03A6(){return(this.__F&256)!=0}get scheduled\u03A6(){return(this.__F&128)!=0}get hydrated\u03A6(){return(this.__F&2)!=0}get ssr\u03A6(){return(this.__F&1024)!=0}schedule(){return T.on("commit",this),this.__F|=128,this}unschedule(){return T.un("commit",this),this.__F&=~128,this}async suspend(e=null){let t=this.flags.incr("_suspended_");return this.__F|=4096,e instanceof Function&&(await e(),this.unsuspend()),this}unsuspend(){return this.flags.decr("_suspended_")==0&&(this.__F&=~4096,this.commit()),this}[Qr](){return this.visit()}[Jr](){return this.__F&1024&&(this.__F=this.__F&~1024,this.classList.remove("_ssr_"),this.flags$ext&&this.flags$ext.indexOf("_ssr_")==0&&(this.flags$ext=this.flags$ext.slice(5)),this.__F&512||(this.innerHTML="")),this}[Xr](){return this}connectedCallback(){let e=this.__F,t=e&1,n=e&8;if(!t&&!(e&1024)){Zr.queue(this);return}if(e&(16|32))return;this.__F|=16,t||this[U](),e&2||(this.flags$ext=this.className,this.__F|=2,this.hydrate(),this.commit()),n||(this.awaken(),this.__F|=8);let i=this.mount();return i&&i.then instanceof Function&&i.then(T.commit),e=this.__F=(this.__F|32)&~16,e&64&&this.schedule(),this[j]&&T.schedule(this,this[j]),this}disconnectedCallback(){if(this.__F=this.__F&(~32&~16),this.__F&128&&this.unschedule(),this.unmount(),this[j])return T.unschedule(this,this[j])}};Lt[U]();var tn=Symbol.for("#insertInto"),ri=Symbol.for("#removeFrom");function se(r,e){let t=e||globalThis.document.body,n=r;if(r instanceof Function){let i=new N(t,null),l=function(){let h=_.context;_.context=i;let o=r(i);return _.context==i&&(_.context=h),o};n=l(),T.listen("commit",l)}else n.__F|=64;return n[tn](t),n}function en(r){return r&&r[ri]&&r[ri](r.parentNode),r}var ni=globalThis.imba||(globalThis.imba={});ni.mount=se;ni.unmount=en;var rn=Symbol.for("#beforeReconcile"),c=Symbol.for("#placeChild"),nn=Symbol.for("#afterReconcile"),sn=Symbol.for("##up"),ln=Symbol.for("#afterVisit"),si=Symbol(),li=Symbol(),oi=Symbol(),ai=Symbol(),hi=Symbol(),ui=Symbol(),ci=Symbol(),fi=Symbol(),di=Symbol(),mi=Symbol(),pi=Symbol(),gi=Symbol(),L,it=Ne(),_i=Symbol(),It,Dt,bi=class extends Lt{render(){var e,t,n,i=this._ns_||"",l,h,o,a,u,g,I,W,q,Pt,K,D,Ti,rt,nt,le,P,f,oe,B,yi,st,R,p,ae,lt,Rt,he,At,$i,Si,Mt,xi,m,Ei,wi,Ci,Oi,vi,Ni,Fi,Li,Ii,Di,Pi,Ri,Ai,kt,v,ue,ot,Mi,Y,Bt,H,ki,Bi,Hi,Gi,Vi,at,Ui,z,Ht,Gt,ji,Wi,ht,ut,qi,ct,Vt,ft,Ki,Yi,zi,dt,Qi,Q,Ut,mt,Ji,Xi,Zi,pt,tr,gt,jt,_t,er,ir,rr,bt,nr,Tt,Wt,qt,sr,lr,yt,or,ar,hr,A,ur,cr,b,fr,dr,mr,pr,$t,ce,fe,de,gr,_r;return e=this,e[rn](),t=n=1,e[si]===1||(t=n=0,e[si]=1),t||(l=s("main",e,`e-ag ambit ${i}`,null)),t||(h=s("section",l,`${i}`,null)),t||(o=s("article",h,`title ${i}`,null)),t||(a=d("svg",o,`${i}`,null)),t||a.set$("viewBox","0 0 131 15"),t||(u=d("text",a,`${i}`,"P A V L Y S H Y N E T S")),t||u.set$("aria-label","Pavlyshynets"),t||u.set$("font-family","Oswald,sans-serif"),t||u.set$("x","0"),t||u.set$("y","15"),t||(g=d("svg",o,`e-al ${i}`,null)),t||g.set$("viewBox","0 0 90 15"),t||(I=d("text",g,`${i}`,"B O H U S L A V")),t||I.set$("aria-label","Bohuslav"),t||I.set$("font-family","Oswald,sans-serif"),t||I.set$("x","0"),t||I.set$("y","15"),t||(W=d("svg",o,`e-an ${i}`,null)),t||W.set$("viewBox","0 0 121 15"),t||(q=d("text",W,`${i}`,"F U L L S T A C K")),t||q.set$("aria-label","Fullstack"),t||q.set$("font-family","Raleway,sans-serif"),t||q.set$("x","0"),t||q.set$("y","15"),t||(Pt=d("svg",o,`${i}`,null)),t||Pt.set$("viewBox","0 0 123.5 15"),t||(K=d("text",Pt,`${i}`,"D E V E L O P E R")),t||K.set$("aria-label","Developer"),t||K.set$("font-family","Raleway,sans-serif"),t||K.set$("x","0"),t||K.set$("y","15"),t||(D=s("article",h,`block ${i}`,null)),t||(Ti=s("h2",D,`${i}`,"CONTACT")),t||(rt=s("a",D,`${i}`,"+38 (068) 917-9090")),t||(rt.rel="noreferrer"),t||(rt.target="_blank"),t||(rt.href="tel:380689179090"),t||(nt=s("a",D,`${i}`,"BPAVLISINEC@GMAIL.COM")),t||(nt.rel="noreferrer"),t||(nt.target="_blank"),t||(nt.href="mailto:BPAVLISINEC@GMAIL.com"),t||(le=s("a",D,`${i}`,"BOHUSLAV.ME")),t||(le.href="https://bohuslav.me"),(()=>{f=oe=1,(P=e[li])||(f=oe=0,e[li]=P=s("a",D,`${i}`,null)),f||(P.rel="noreferrer"),f||(P.target="_blank"),f||(P.href="https://github.com/Bohooslav"),f||(B=d("svg",P,`${i}`,null)),f||B.set$("height","64"),f||B.set$("viewBox","0 0 16 16"),f||B.set$("width","64"),f||(yi=d("title",B,`${i}`,"GitHub")),f||(st=d("path",B,`${i}`,null)),f||st.set$("fill-rule","evenodd"),f||st.set$("clip-rule","evenodd"),f||st.set$("d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),f||P[c](" GITHUB")})(),(()=>{p=ae=1,(R=e[oi])||(p=ae=0,e[oi]=R=s("a",D,`${i}`,null)),p||(R.rel="noreferrer"),p||(R.target="_blank"),p||(R.href="https://t.me/Boguslavv"),p||(lt=d("svg",R,`${i}`,null)),p||lt.set$("viewBox","0 0 240 240"),p||lt.set$("xmlns","http://www.w3.org/2000/svg"),p||(Rt=d("g",lt,`${i}`,null)),p||Rt.set$("transform","matrix(3.468208 0 0 3.468208 0 -.00001)"),p||(he=d("path",Rt,`${i}`,null)),p||he.set$("d","M 4.2424765,30.909596 45.462593,13.92622 c 4.068938,-1.769103 17.867948,-7.4302295 17.867948,-7.4302295 0,0 6.368772,-2.4767415 5.838042,3.5382055 -0.176911,2.476742 -1.592193,11.14534 -3.007476,20.521579 l -4.42276,27.774897 c 0,0 -0.353821,4.068935 -3.361296,4.776575 -3.007476,0.707641 -7.960967,-2.476741 -8.84552,-3.184384 -0.707641,-0.530729 -13.268278,-8.491688 -17.867947,-12.383711 -1.238373,-1.061461 -2.653656,-3.184384 0.17691,-5.661125 6.368774,-5.838037 13.97592,-13.091354 18.57559,-17.691019 2.122923,-2.122921 4.245849,-7.076405 -4.59967,-1.06146 L 20.872052,39.932013 c 0,0 -2.830567,1.769103 -8.137878,0.176911 C 7.4268631,38.516732 1.2350002,36.393811 1.2350002,36.393811 c 0,0 -4.245849,-2.653653 3.0074763,-5.484215 z"),p||R[c](" TELEGRAM")})(),t||(At=s("article",h,`block ${i}`,null)),t||($i=s("h2",At,`${i}`,"PROFILE")),t||(Si=s("p",At,`${i}`,"I am a fullstack developer seeking a full-time position in the field of web development, where I can bring my experience and knowledge for continuous improvement.")),t||(Mt=s("article",h,`block ${i}`,null)),t||(xi=s("h2",Mt,`${i}`,"SKILLS")),t||(m=s("ul",Mt,`${i}`,null)),t||(Ei=s("li",m,`${i}`,"Imba")),t||(wi=s("li",m,`${i}`,"Django, Python")),t||(Ci=s("li",m,`${i}`,"JavaScript")),t||(Oi=s("li",m,`${i}`,"CSS")),t||(vi=s("li",m,`${i}`,"PWA")),t||(Ni=s("li",m,`${i}`,"PostgreSQL")),t||(Fi=s("li",m,`${i}`,"Git")),t||(Li=s("li",m,`${i}`,"Node.js")),t||(Ii=s("li",m,`${i}`,"Linux")),t||(Di=s("li",m,`${i}`,"SEO")),t||(Pi=s("li",m,`${i}`,"Google App Engine")),t||(Ri=s("li",m,`${i}`,"Google Merchant")),t||(Ai=s("li",m,`${i}`,"Google Analytics")),t||(kt=s("section",l,`${i}`,null)),t||(v=s("article",kt,`block ${i}`,null)),t||(ue=s("h2",v,`${i}`,"EXPERIENCE")),t||ue.set$("aria-label","Experience"),t||(ot=s("section",v,`experience ${i}`,null)),t||(Mi=s("h3",ot,`${i}`,"FULLSTACK DEVELOPER")),(()=>{(Y=e[ai])||(e[ai]=Y=s("h4",ot,`${i}`,null)),t||Y[c]("BOLLS BIBLE | "),t||(Bt=s("a",Y,`e-cd ${i}`,"BOLLS.LIFE")),t||(Bt.target="_blank"),t||(Bt.href="https://BOLLS.LIFE"),t||Y[c](" | SEP 2019 - PRESENT")})(),t||(H=s("ul",ot,`${i}`,null)),t||(ki=s("li",H,`${i}`,"Designed & implemented database architecture with PostgreSQL and backend with Django")),t||(Bi=s("li",H,`${i}`,"Designed & implemented UI/UX/frontend with Imba")),t||(Hi=s("li",H,`${i}`,"Optimized the app for PWA and SEO, made better offline experience with IndexedDB integration")),t||(Gi=s("li",H,`${i}`,"Maintain backend on Google App Engine and PostgreSQL database on a VPS")),t||(Vi=s("li",H,`${i}`,"Released to Microsoft Store, Snap Store, Huawei App Gallery, Google Play Market and Flathub")),t||(at=s("section",v,`experience ${i}`,null)),t||(Ui=s("h3",at,`${i}`,"FULLSTACK DEVELOPER")),(()=>{(z=e[hi])||(e[hi]=z=s("h4",at,`${i}`,null)),t||z[c]("CODEGEMS | "),t||(Ht=s("a",z,`e-cn ${i}`,"MGRESTYLE.SK")),t||(Ht.target="_blank"),t||(Ht.href="https://MGRESTYLE.SK"),t||z[c](" | FEB 2020 - APR 2020")})(),t||(Gt=s("ul",at,`${i}`,null)),t||(ji=s("li",Gt,`${i}`,"Designed & implemented database architecture and backend with Django & SQLite")),t||(Wi=s("li",Gt,`${i}`,"Implemented frontend with Vue.js & Nuxt.js")),t||(ht=s("section",v,`experience ${i}`,null)),(()=>{(ut=e[ui])||(e[ui]=ut=s("h3",ht,`${i}`,null)),t||ut[c]("FRONTEND DEVELOPER"),t||(qi=s("span",ut,`e-ct ${i}`," DRAFT"))})(),(()=>{(ct=e[ci])||(e[ci]=ct=s("h4",ht,`${i}`,null)),t||(Vt=s("a",ct,`e-cv ${i}`,"BOLLSPAD")),t||(Vt.target="_blank"),t||(Vt.href="https://BOHUSLAV.ME/notepad"),t||ct[c](" | 2022")})(),t||(ft=s("ul",ht,`${i}`,null)),t||(Ki=s("li",ft,`${i}`,"Designed & implemented the app with Imba")),t||(Yi=s("li",ft,`${i}`,"Optimized for PWA")),t||(zi=s("li",ft,`${i}`,"Hosted on GitHub Pages")),t||(dt=s("section",v,`experience ${i}`,null)),t||(Qi=s("h3",dt,`${i}`,"FRONTEND DEVELOPER")),(()=>{(Q=e[fi])||(e[fi]=Q=s("h4",dt,`${i}`,null)),t||Q[c]("SONGBOOK | "),t||(Ut=s("a",Q,`e-dd ${i}`,"SONGBOOK.CLUB")),t||(Ut.target="_blank"),t||(Ut.href="https://SONGBOOK.CLUB"),t||Q[c](" | 2021")})(),t||(mt=s("ul",dt,`${i}`,null)),t||(Ji=s("li",mt,`${i}`,"Designed and implemented frontend with Imba")),t||(Xi=s("li",mt,`${i}`,"Used PWA for better user experience")),t||(Zi=s("li",mt,`${i}`,"Hosted on GitHub Pages")),t||(pt=s("section",v,`experience ${i}`,null)),t||(tr=s("h3",pt,`${i}`,"FRONTEND DEVELOPER")),(()=>{(gt=e[di])||(e[di]=gt=s("h4",pt,`${i}`,null)),t||(jt=s("a",gt,`e-dl ${i}`,"DICTIONARY")),t||(jt.target="_blank"),t||(jt.href="https://BOHUSLAV.ME/Dictionary"),t||gt[c](" | 2021")})(),t||(_t=s("ul",pt,`${i}`,null)),t||(er=s("li",_t,`${i}`,"Designed and implemented frontend with Imba")),t||(ir=s("li",_t,`${i}`,"Used PWA for better user experience")),t||(rr=s("li",_t,`${i}`,"Hosted on GitHub Pages")),t||(bt=s("section",v,`experience ${i}`,null)),t||(nr=s("h3",bt,`${i}`,"FRONTEND DEVELOPER")),(()=>{(Tt=e[mi])||(e[mi]=Tt=s("h4",bt,`${i}`,null)),t||(Wt=s("a",Tt,`e-dt ${i}`,"POOPSSSWEEMER")),t||(Wt.target="_blank"),t||(Wt.href="https://bohuslav.me/poopsssweemer/dist/"),t||Tt[c](" | 2019")})(),t||(qt=s("ul",bt,`${i}`,null)),t||(sr=s("li",qt,`${i}`,"Designed and implemented frontend with Imba 1")),t||(lr=s("li",qt,`${i}`,"Hosted on GitHub Pages")),t||(yt=s("article",kt,`block ${i}`,null)),t||(or=s("h2",yt,`${i}`,"EDUCATION")),t||(ar=s("h3",yt,`${i}`,"BACHELOR OF COMPUTER ENGINEERING")),t||(hr=s("h4",yt,`${i}`,"UZHHOROD NATIONAL UNIVERSITY | 2017 - 2021")),t||(A=s("section",e,`ambit afterword ${i}`,null)),t||(ur=s("h1",A,`${i}`,"OTHER SKILLS & EXPERIENCE or WHY AM I LOOSER or GARBAGE SECTION")),t||(cr=s("p",A,`${i}`,"Beside works mentioned above, I have done some other webapps I can't show because they are dead.				They are no longer functioning. Among those are medok-n.com, koteus.com and one other unlucky app.				They were not successful but bring me a lot of experience")),(()=>{(b=e[pi])||(e[pi]=b=s("p",A,`${i}`,null)),t||b[c]("The most prominent was koteus.com, working over which I did learn a lot about online shops --				"),t||(fr=s("b",b,`${i}`,"SEO optimization")),t||b[c](" of the website, "),t||(dr=s("b",b,`${i}`,"microdata")),t||b[c](", "),t||(mr=s("b",b,`${i}`,"PWA")),t||b[c](", fitting for "),t||(pr=s("b",b,`${i}`,"Google Merchant"))})(),(()=>{($t=e[gi])||(e[gi]=$t=s("p",A,`${i}`,null)),t||$t[c]("One day frontend project "),t||(ce=s("a",$t,`e-ek ${i}`,"Barbershop")),t||(ce.href="https://bohuslav.me/barbershop/dist")})(),t||(fe=s("p",A,`${i}`,null)),t||(de=s("a",fe,`e-em ${i}`,"Gesenius' Hebrew Grammar")),t||(de.href="https://bohuslav.me/gesenius/"),t||(gr=s("p",A,`${i}`,"I live in Khust, Ukraine. I love to code, design, play on violin, listen classical music, run on mountains and pet cats.")),t||(_r=s("footer",e,`ambit ${i}`,"\xA9 2022 PAVLYSHYNETS BOHUSLAV | \u041F\u0410\u0412\u041B\u0418\u0428\u0418\u041D\u0415\u0426\u042C \u0411\u041E\u0413\u0423\u0421\u041B\u0410\u0412")),e[nn](n),e}};Ze("app",bi,{cssns:"e_ep",cssid:"e-ep"});se((It=Dt=1,(L=it[_i])||(It=Dt=0,L=it[_i]=L=Xe("app",null,null,null)),It||(L[sn]=it._),It||it.sym||!L.setup||L.setup(Dt),it.sym||L[ln](Dt),L));
//__FOOT__
//# sourceMappingURL=/__assets__/app/client.js.map
                      