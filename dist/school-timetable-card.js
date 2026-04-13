function t(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,y=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,$=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??_)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[$("elementProperties")]=new Map,v[$("finalized")]=new Map,m?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,z=`<${C}>`,j=document,P=()=>j.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,N=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t,...e)=>({_$litType$:1,strings:t,values:e}),K=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,W=j.createTreeWalker(j,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<s;e++){const s=t[e];let a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===U?"!--"===l[1]?n=H:void 0!==l[1]?n=R:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??U,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?L:D):n===L||n===D?n=N:n===H||n===R?n=U:(n=N,r=void 0);const c=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===U?s+z:d>=0?(i.push(a),s.slice(0,d)+S+s.slice(d)+k+c):s+k+(-2===d?e:c)}return[J(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,d]=Z(t,e);if(this.el=F.createElement(l,s),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=d[o++],s=i.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?st:X}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),W.nextNode(),a.push({type:2,index:++r});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===K)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??j).importNode(e,!0);W.currentNode=i;let r=W.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=j,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new F(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[s+n],e,n),a===K&&(a=this._$AH[n]),o||=!T(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===K)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(F,Q),(A.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;class nt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(P(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_},dt=(t=lt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return e={...t,state:!0,attribute:!1},(t,s)=>"object"==typeof s?dt(e,t,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(e,t,s);var e}const ct=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)})`
  :host {
    display: block;
  }

  ha-card {
    padding: 6px 4px 8px 4px;
    overflow: hidden;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.2em);
    font-weight: 500;
    padding: 2px 4px 6px 4px;
    color: var(--primary-text-color);
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }

  th,
  td {
    padding: 2px 2px;
    vertical-align: middle;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.85em;
    color: var(--primary-text-color);
    box-sizing: border-box;
  }

  thead th {
    font-weight: 600;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.7em;
  }

  /* Időpont oszlop a bal szélen — csak annyi szélességet foglal, hogy a
     „1. óra" + opcionális „08:00–08:45" elférjen. */
  .time-col {
    width: 44px;
    text-align: left;
    padding-left: 4px;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
  }
  /* show_times: false — keskenyebb bal oszlop, csak a „1. óra" label fér el benne */
  table.no-times .time-col {
    width: 34px;
  }
  .time-col .period-label {
    font-weight: 600;
    color: var(--primary-text-color);
    display: block;
  }
  .time-col .period-time {
    font-size: 0.72em;
    opacity: 0.85;
    display: block;
    margin-top: 1px;
  }

  /* Mai nap oszlop kiemelése */
  .today-head {
    color: var(--primary-color);
  }
  td.today {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
  }
  th.today-head,
  td.today {
    border-left: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
  }
  tbody tr:last-child td.today {
    border-bottom: 2px solid var(--primary-color);
  }
  thead tr th.today-head {
    border-top: 2px solid var(--primary-color);
  }

  /* Tantárgy cella — ikon a szöveg fölött, hogy keskeny oszlopban se tördelődjön betűnként */
  .lesson {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    padding: 2px 3px;
    border-radius: 4px;
    border-left: 3px solid transparent;
    min-height: 20px;
    text-align: center;
  }
  .lesson ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }
  .lesson .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
    line-height: 1.15;
  }
  .lesson .subject-name {
    font-weight: 500;
    /* Csak szóhatáron törjön, ne betűnként. Hosszú szó túllóghat — cellán belül
       a border-radius miatt elegánsabb, mint a függőleges „M/a/g/y/a/r" tördelés. */
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .lesson .cell-time {
    font-size: 0.75em;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    margin-top: 1px;
  }
  .empty {
    color: var(--disabled-text-color, rgba(0, 0, 0, 0.3));
    text-align: center;
    font-size: 1.1em;
  }

  /* Nagyobb kijelzőn (egyetlen kártya, széles oszlop — pl. panel-mode) férőhely
     van vízszintes ikon + szöveg elrendezésre és szellősebb sorközökre. */
  @media (min-width: 900px) {
    ha-card {
      padding: 12px 14px 16px 14px;
    }
    .title {
      font-size: var(--ha-card-header-font-size, 1.4em);
      padding: 4px 4px 12px 4px;
    }
    thead th {
      padding-top: 4px;
      padding-bottom: 10px;
      letter-spacing: 0.04em;
      font-size: 0.8em;
    }
    th,
    td {
      padding: 10px 10px;
      font-size: 1em;
    }
    .time-col {
      width: 92px;
      padding-left: 8px;
    }
    .time-col .period-time {
      font-size: 0.8em;
      margin-top: 3px;
    }
    .lesson {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border-left-width: 4px;
      border-radius: 6px;
      text-align: left;
      min-height: 32px;
    }
    .lesson ha-icon {
      --mdc-icon-size: 22px;
    }
    .lesson .text {
      flex: 1 1 auto;
      width: auto;
      line-height: 1.35;
    }
    .lesson .cell-time {
      font-size: 0.8em;
      margin-top: 3px;
    }
  }
`,pt=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ut=["monday","tuesday","wednesday","thursday","friday"],ft={monday:"Hétfő",tuesday:"Kedd",wednesday:"Szerda",thursday:"Csütörtök",friday:"Péntek",saturday:"Szombat",sunday:"Vasárnap"},yt=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],mt=/^([01]\d|2[0-3]):[0-5]\d$/;function $t(t){const[e,s]=t.split(":").map(Number);return 60*e+s}function gt(t){return pt.includes(t)}function _t(t,e){if(null==t||""===t)return{subject:null};if("string"==typeof t)return{subject:t};if("object"==typeof t){if("string"!=typeof t.subject||0===t.subject.length)throw new Error(`${e}: a \`subject\` mező kötelező és nem üres szöveg.`);if(void 0!==t.time&&"string"!=typeof t.time)throw new Error(`${e}: a \`time\` mező szöveg kell hogy legyen.`);return{subject:t.subject,time:t.time}}throw new Error(`${e}: érvénytelen cella (sem string, sem objektum, sem null).`)}const bt="school-timetable-card";let vt=class extends nt{constructor(){super(...arguments),this._todayKey=yt[(new Date).getDay()]}setConfig(t){this._config=function(t){if(!t||"object"!=typeof t)throw new Error("Érvénytelen konfiguráció: üres vagy nem objektum.");const e=t;if(!Array.isArray(e.periods)||0===e.periods.length)throw new Error("`periods` mező kötelező, és legalább egy órát kell tartalmaznia.");const s=e.periods.map((t,e)=>{if(!t||"object"!=typeof t)throw new Error(`periods[${e}] nem érvényes objektum.`);const{start:s,end:i,label:r}=t,o=void 0!==s;if(o!==(void 0!==i))throw new Error(`periods[${e}]: a \`start\` és \`end\` mezők együtt megadandók vagy együtt elhagyandók.`);if(o){if("string"!=typeof s||!mt.test(s))throw new Error(`periods[${e}].start érvénytelen (HH:MM formátum kell, pl. "08:00").`);if("string"!=typeof i||!mt.test(i))throw new Error(`periods[${e}].end érvénytelen (HH:MM formátum kell).`);if($t(s)>=$t(i))throw new Error(`periods[${e}]: a kezdő időpont (${s}) nem lehet későbbi a végénél (${i}).`)}return{label:"string"==typeof r?r:"",...o?{start:s,end:i}:{}}}),i=Array.isArray(e.days)?e.days.map((t,e)=>{if("string"!=typeof t||!gt(t))throw new Error(`days[${e}] ismeretlen nap: "${String(t)}". Megengedett: ${pt.join(", ")}.`);return t}):[...ut];if(!e.schedule||"object"!=typeof e.schedule)throw new Error("`schedule` mező kötelező.");const r={};for(const[t,i]of Object.entries(e.schedule)){if(!gt(t))throw new Error(`schedule: ismeretlen nap "${t}". Megengedett: ${pt.join(", ")}.`);if(!Array.isArray(i))throw new Error(`schedule.${t} listának kell lennie.`);if(i.length>s.length)throw new Error(`schedule.${t} hossza (${i.length}) nagyobb, mint a periods hossza (${s.length}).`);const e=i.map((e,s)=>_t(e,`schedule.${t}[${s}]`));for(;e.length<s.length;)e.push({subject:null});r[t]=e}if(void 0!==e.show_times&&"boolean"!=typeof e.show_times)throw new Error("`show_times` mezőnek boolean-nak kell lennie (true / false).");return{type:"string"==typeof e.type?e.type:"custom:school-timetable-card",title:"string"==typeof e.title?e.title:void 0,days:i,showTimes:!1!==e.show_times,periods:s,subjects:e.subjects&&"object"==typeof e.subjects?e.subjects:{},schedule:r}}(t)}getCardSize(){return(this._config?.periods.length??0)+1}connectedCallback(){super.connectedCallback(),this._updateToday(),this._refreshTimer=window.setInterval(()=>this._updateToday(),3e5)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._refreshTimer&&(window.clearInterval(this._refreshTimer),this._refreshTimer=void 0)}_updateToday(){const t=yt[(new Date).getDay()];t!==this._todayKey&&(this._todayKey=t)}render(){if(!this._config)return B``;const t=this._config,e=t.days.includes(this._todayKey),s=t.showTimes&&t.periods.some(t=>void 0!==t.start&&void 0!==t.end),i=s?"":"no-times";return B`
      <ha-card>
        ${t.title?B`<div class="title">${t.title}</div>`:q}
        <table class=${i}>
          <thead>
            <tr>
              <th class="time-col"></th>
              ${t.days.map(t=>B`
                  <th class=${e&&t===this._todayKey?"today-head":""}>
                    ${ft[t]}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${t.periods.map((t,s)=>this._renderRow(t,s,e))}
          </tbody>
        </table>
      </ha-card>
    `}_renderRow(t,e,s){const i=this._config,r=i.showTimes&&void 0!==t.start&&void 0!==t.end;return B`
      <tr>
        <td class="time-col">
          ${t.label?B`<span class="period-label">${t.label}</span>`:q}
          ${r?B`<span class="period-time">${t.start}–${t.end}</span>`:q}
        </td>
        ${i.days.map(t=>{const r=s&&t===this._todayKey,o=i.schedule[t]?.[e]??{subject:null};return B`<td class=${r?"today":""}>${this._renderLesson(o)}</td>`})}
      </tr>
    `}_renderLesson(t){if(!t.subject)return B`<div class="empty">—</div>`;const e=this._config?.subjects[t.subject]??{},s=[];return e.color&&(s.push(`border-left-color: ${e.color}`),s.push(`background: color-mix(in srgb, ${e.color} 18%, transparent)`)),B`
      <div class="lesson" style=${s.join(";")}>
        ${e.icon?B`<ha-icon icon=${e.icon}></ha-icon>`:q}
        <div class="text">
          <span class="subject-name">${t.subject}</span>
          ${t.time?B`<span class="cell-time">${t.time}</span>`:q}
        </div>
      </div>
    `}};var At;vt.styles=ct,t([ht()],vt.prototype,"_config",void 0),t([ht()],vt.prototype,"_todayKey",void 0),vt=t([(At=bt,(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(At,t)}):customElements.define(At,t)})],vt),window.customCards=window.customCards??[],window.customCards.push({type:bt,name:"School Timetable",description:"Iskolai órarend két (vagy több) gyereknek, YAML konfigurációval.",preview:!1}),console.info("%c SCHOOL-TIMETABLE-CARD %c v0.1.0 ","color:white;background:#3f51b5;padding:2px 6px;border-radius:3px 0 0 3px","color:#3f51b5;background:#eee;padding:2px 6px;border-radius:0 3px 3px 0");export{vt as SchoolTimetableCard};
