function t(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}};const n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,y=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,g=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);i?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(s)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of r){const r=document.createElement("style"),i=e.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=r;const o=i.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(void 0!==t){const o=this.constructor;if(!1===r&&(i=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??_)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,s,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[g("elementProperties")]=new Map,v[g("finalized")]=new Map,m?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,w=x.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+S,C=`<${z}>`,j=document,P=()=>j.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,R=/>/g,N=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t,...e)=>({_$litType$:1,strings:t,values:e}),K=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,W=j.createTreeWalker(j,129);function J(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=U:void 0!==l[1]?n=R:void 0!==l[2]?(L.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=i??H,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?I:D):n===I||n===D?n=N:n===U||n===R?n=H:(n=N,i=void 0);const c=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+C:d>=0?(r.push(a),s.slice(0,d)+k+s.slice(d)+S+c):s+S+(-2===d?e:c)}return[J(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class F{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[l,d]=Z(t,e);if(this.el=F.createElement(l,s),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=W.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=d[o++],s=r.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?st:X}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],P()),W.nextNode(),a.push({type:2,index:++i});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===z)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,r){if(e===K)return e;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const o=M(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,s,r)),void 0!==r?(s._$Co??=[])[r]=i:s._$Cl=i),void 0!==i&&(e=Y(t,i._$AS(t,e.values),i,r)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??j).importNode(e,!0);W.currentNode=r;let i=W.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new rt(i,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(i=W.nextNode(),o++)}return W.currentNode=j,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new G(r,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new F(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new Q(this.O(P()),this.O(P()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=Y(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const r=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=Y(this,r[s+n],e,n),a===K&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends X{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===K)return;const s=this._$AH,r=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==q&&(s===q||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(F,Q),(x.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;class nt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const r=s?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=s?.renderBefore??null;r._$litPart$=i=new Q(e.insertBefore(P(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_},dt=(t=lt,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t,!0,s)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t,!0,s)}}throw Error("Unsupported decorator location: "+r)};function ht(t){return e={...t,state:!0,attribute:!1},(t,s)=>"object"==typeof s?dt(e,t,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(e,t,s);var e}const ct=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new o(s,t,r)})`
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

  /* Délutáni / adhoc sorok — finoman elkülönítve a fix órarendtől */
  tr.afternoon td {
    background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  }
  tr.afternoon .time-col .period-label {
    font-style: italic;
    font-weight: 500;
    opacity: 0.75;
  }
  /* Az első délutáni sor — vastag elválasztó a fix órák után + egy kis extra légrés */
  tr.afternoon-start td {
    border-top: 2px dashed var(--divider-color, rgba(0, 0, 0, 0.2));
    padding-top: 6px;
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
    /* Ha a cellához van tantárgyszín, a --subject-color be van állítva a renderben;
       ha nincs, a fallback transzparens marad (natúr cella). */
    border-left: 4px solid var(--subject-color, transparent);
    background: color-mix(in srgb, var(--subject-color, transparent) 28%, transparent);
    min-height: 20px;
    text-align: center;
  }
  .lesson ha-icon {
    --mdc-icon-size: 16px;
    /* Ikonszín = tantárgyszín, de a szöveg színével kevert, hogy pasztellek is
       olvashatók maradjanak fehér és sötét témán egyaránt. */
    color: color-mix(in srgb, var(--subject-color, var(--secondary-text-color)) 60%, var(--primary-text-color));
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
    tr.afternoon-start td {
      padding-top: 14px;
    }
    .lesson {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border-left-width: 5px;
      border-radius: 6px;
      text-align: left;
      min-height: 32px;
      /* Széles nézetben egy fokkal telítettebb háttér, mert a cella nagy és
         a színsáv nem eléggé dominál magában. */
      background: color-mix(in srgb, var(--subject-color, transparent) 34%, transparent);
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
`,pt=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ut=["monday","tuesday","wednesday","thursday","friday"],ft={monday:"Hétfő",tuesday:"Kedd",wednesday:"Szerda",thursday:"Csütörtök",friday:"Péntek",saturday:"Szombat",sunday:"Vasárnap"},yt=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],mt=/^([01]\d|2[0-3]):[0-5]\d$/;function gt(t){const[e,s]=t.split(":").map(Number);return 60*e+s}function $t(t){return pt.includes(t)}function _t(t,e){if(null==t||""===t)return{subject:null};if("string"==typeof t)return{subject:t};if("object"==typeof t){if("string"!=typeof t.subject||0===t.subject.length)throw new Error(`${e}: a \`subject\` mező kötelező és nem üres szöveg.`);if(void 0!==t.time&&"string"!=typeof t.time)throw new Error(`${e}: a \`time\` mező szöveg kell hogy legyen.`);return{subject:t.subject,time:t.time}}throw new Error(`${e}: érvénytelen cella (sem string, sem objektum, sem null).`)}const bt="school-timetable-card";let vt=class extends nt{constructor(){super(...arguments),this._todayKey=yt[(new Date).getDay()]}setConfig(t){this._config=function(t){if(!t||"object"!=typeof t)throw new Error("Érvénytelen konfiguráció: üres vagy nem objektum.");const e=t;if(!Array.isArray(e.periods)||0===e.periods.length)throw new Error("`periods` mező kötelező, és legalább egy órát kell tartalmaznia.");const s=e.periods.map((t,e)=>{if(!t||"object"!=typeof t)throw new Error(`periods[${e}] nem érvényes objektum.`);const{start:s,end:r,label:i}=t,o=void 0!==s;if(o!==(void 0!==r))throw new Error(`periods[${e}]: a \`start\` és \`end\` mezők együtt megadandók vagy együtt elhagyandók.`);if(o){if("string"!=typeof s||!mt.test(s))throw new Error(`periods[${e}].start érvénytelen (HH:MM formátum kell, pl. "08:00").`);if("string"!=typeof r||!mt.test(r))throw new Error(`periods[${e}].end érvénytelen (HH:MM formátum kell).`);if(gt(s)>=gt(r))throw new Error(`periods[${e}]: a kezdő időpont (${s}) nem lehet későbbi a végénél (${r}).`)}return{label:"string"==typeof i?i:"",...o?{start:s,end:r}:{}}}),r=Array.isArray(e.days)?e.days.map((t,e)=>{if("string"!=typeof t||!$t(t))throw new Error(`days[${e}] ismeretlen nap: "${String(t)}". Megengedett: ${pt.join(", ")}.`);return t}):[...ut];if(!e.schedule||"object"!=typeof e.schedule)throw new Error("`schedule` mező kötelező.");const i={};for(const[t,r]of Object.entries(e.schedule)){if(!$t(t))throw new Error(`schedule: ismeretlen nap "${t}". Megengedett: ${pt.join(", ")}.`);if(!Array.isArray(r))throw new Error(`schedule.${t} listának kell lennie.`);if(r.length>s.length)throw new Error(`schedule.${t} hossza (${r.length}) nagyobb, mint a periods hossza (${s.length}).`);const e=r.map((e,s)=>_t(e,`schedule.${t}[${s}]`));for(;e.length<s.length;)e.push({subject:null});i[t]=e}if(void 0!==e.show_times&&"boolean"!=typeof e.show_times)throw new Error("`show_times` mezőnek boolean-nak kell lennie (true / false).");let o;if(void 0!==e.next_day_after){if("string"!=typeof e.next_day_after||!mt.test(e.next_day_after))throw new Error('`next_day_after` érvénytelen (HH:MM formátum kell, pl. "20:00").');o=gt(e.next_day_after)}return{type:"string"==typeof e.type?e.type:"custom:school-timetable-card",title:"string"==typeof e.title?e.title:void 0,days:r,showTimes:!1!==e.show_times,nextDayAfterMinutes:o,periods:s,subjects:e.subjects&&"object"==typeof e.subjects?e.subjects:{},schedule:i}}(t),this._updateToday()}getCardSize(){return(this._config?.periods.length??0)+1}connectedCallback(){super.connectedCallback(),this._updateToday(),this._refreshTimer=window.setInterval(()=>this._updateToday(),3e5)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._refreshTimer&&(window.clearInterval(this._refreshTimer),this._refreshTimer=void 0)}_updateToday(){const t=new Date;let e=t.getDay();const s=this._config;if(void 0!==s?.nextDayAfterMinutes&&60*t.getHours()+t.getMinutes()>=s.nextDayAfterMinutes&&(e=(e+1)%7,s.days.length>0))for(let t=0;t<7&&!s.days.includes(yt[e]);t++)e=(e+1)%7;const r=yt[e];r!==this._todayKey&&(this._todayKey=r)}render(){if(!this._config)return B``;const t=this._config,e=t.days.includes(this._todayKey),s=t.showTimes&&t.periods.some(t=>void 0!==t.start&&void 0!==t.end),r=s?"":"no-times",i=t.periods.findIndex(t=>void 0===t.start||void 0===t.end);return B`
      <ha-card>
        ${t.title?B`<div class="title">${t.title}</div>`:q}
        <table class=${r}>
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
            ${t.periods.map((t,s)=>this._renderRow(t,s,e,i))}
          </tbody>
        </table>
      </ha-card>
    `}_renderRow(t,e,s,r){const i=this._config,o=i.showTimes&&void 0!==t.start&&void 0!==t.end,n=[void 0===t.start||void 0===t.end?"afternoon":"",e===r&&r>=0?"afternoon-start":""].filter(Boolean).join(" ");return B`
      <tr class=${n}>
        <td class="time-col">
          ${t.label?B`<span class="period-label">${t.label}</span>`:q}
          ${o?B`<span class="period-time">${t.start}–${t.end}</span>`:q}
        </td>
        ${i.days.map(t=>{const r=s&&t===this._todayKey,o=i.schedule[t]?.[e]??{subject:null};return B`<td class=${r?"today":""}>${this._renderLesson(o)}</td>`})}
      </tr>
    `}_renderLesson(t){if(!t.subject)return B`<div class="empty">—</div>`;const e=this._config?.subjects[t.subject]??{},s=[];return e.color&&s.push(`--subject-color: ${e.color}`),B`
      <div class="lesson" style=${s.join(";")}>
        ${e.icon?B`<ha-icon icon=${e.icon}></ha-icon>`:q}
        <div class="text">
          <span class="subject-name">${t.subject}</span>
          ${t.time?B`<span class="cell-time">${t.time}</span>`:q}
        </div>
      </div>
    `}};var xt;vt.styles=ct,t([ht()],vt.prototype,"_config",void 0),t([ht()],vt.prototype,"_todayKey",void 0),vt=t([(xt=bt,(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(xt,t)}):customElements.define(xt,t)})],vt),window.customCards=window.customCards??[],window.customCards.push({type:bt,name:"School Timetable",description:"Iskolai órarend két (vagy több) gyereknek, YAML konfigurációval.",preview:!1}),console.info("%c SCHOOL-TIMETABLE-CARD %c v0.1.0 ","color:white;background:#3f51b5;padding:2px 6px;border-radius:3px 0 0 3px","color:#3f51b5;background:#eee;padding:2px 6px;border-radius:0 3px 3px 0");export{vt as SchoolTimetableCard};
