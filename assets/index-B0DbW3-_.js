(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var oo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},cc=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],c=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,c=a?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,p=o>>2,v=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,S=d&63;h||(S=64,a||(A=64)),n.push(e[p],e[v],e[A],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ta(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):cc(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const v=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||c==null||d==null||v==null)throw new uc;const A=o<<2|c>>4;if(n.push(A),d!==64){const S=c<<4&240|d>>2;if(n.push(S),v!==64){const P=d<<6&192|v;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class uc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hc=function(r){const t=ta(r);return ea.encodeByteArray(t,!0)},Qn=function(r){return hc(r).replace(/\./g,"")},dc=function(r){try{return ea.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=()=>fc().__FIREBASE_DEFAULTS__,mc=()=>{if(typeof process>"u"||typeof oo>"u")return;const r=oo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},gc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&dc(r[1]);return t&&JSON.parse(t)},As=()=>{try{return pc()||mc()||gc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},yc=r=>{var t,e;return(e=(t=As())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},_c=r=>{const t=yc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},na=()=>{var r;return(r=As())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Qn(JSON.stringify(e)),Qn(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tc(){var r;const t=(r=As())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ic(){return!Tc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function bc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="FirebaseError";class De extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Sc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Rc(o,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new De(s,c,n)}}function Rc(r,t){return r.replace(Dc,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Dc=/\{\$([^}]+)}/g;function ns(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(ao(o)&&ao(a)){if(!ns(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function ao(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(r){return r&&r._delegate?r._delegate:r}class rn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new vc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vc(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cc(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cc(r){return r===ee?void 0:r}function Vc(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Pc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const Lc={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},kc=$.INFO,Nc={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Mc=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Nc[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sa{constructor(t){this.name=t,this._logLevel=kc,this._logHandler=Mc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Fc=(r,t)=>t.some(e=>r instanceof e);let lo,co;function Oc(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bc(){return co||(co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ia=new WeakMap,rs=new WeakMap,oa=new WeakMap,Gr=new WeakMap,bs=new WeakMap;function Uc(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(jt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ia.set(e,r)}).catch(()=>{}),bs.set(t,r),t}function $c(r){if(rs.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});rs.set(r,t)}let ss={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return rs.get(r);if(t==="objectStoreNames")return r.objectStoreNames||oa.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function jc(r){ss=r(ss)}function qc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Qr(this),t,...e);return oa.set(n,t.sort?t.sort():[t]),jt(n)}:Bc().includes(r)?function(...t){return r.apply(Qr(this),t),jt(ia.get(this))}:function(...t){return jt(r.apply(Qr(this),t))}}function zc(r){return typeof r=="function"?qc(r):(r instanceof IDBTransaction&&$c(r),Fc(r,Oc())?new Proxy(r,ss):r)}function jt(r){if(r instanceof IDBRequest)return Uc(r);if(Gr.has(r))return Gr.get(r);const t=zc(r);return t!==r&&(Gr.set(r,t),bs.set(t,r)),t}const Qr=r=>bs.get(r);function Hc(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),c=jt(a);return n&&a.addEventListener("upgradeneeded",h=>{n(jt(a.result),h.oldVersion,h.newVersion,jt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Kc=["get","getKey","getAll","getAllKeys","count"],Wc=["put","add","delete","clear"],Xr=new Map;function uo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Xr.get(t))return Xr.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Wc.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Kc.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Xr.set(t,o),o}jc(r=>({...r,get:(t,e,n)=>uo(t,e)||r.get(t,e,n),has:(t,e)=>!!uo(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Qc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const is="@firebase/app",ho="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new sa("@firebase/app"),Xc="@firebase/app-compat",Yc="@firebase/analytics-compat",Jc="@firebase/analytics",Zc="@firebase/app-check-compat",tu="@firebase/app-check",eu="@firebase/auth",nu="@firebase/auth-compat",ru="@firebase/database",su="@firebase/data-connect",iu="@firebase/database-compat",ou="@firebase/functions",au="@firebase/functions-compat",lu="@firebase/installations",cu="@firebase/installations-compat",uu="@firebase/messaging",hu="@firebase/messaging-compat",du="@firebase/performance",fu="@firebase/performance-compat",pu="@firebase/remote-config",mu="@firebase/remote-config-compat",gu="@firebase/storage",yu="@firebase/storage-compat",_u="@firebase/firestore",vu="@firebase/vertexai-preview",wu="@firebase/firestore-compat",Eu="firebase",Tu="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]",Iu={[is]:"fire-core",[Xc]:"fire-core-compat",[Jc]:"fire-analytics",[Yc]:"fire-analytics-compat",[tu]:"fire-app-check",[Zc]:"fire-app-check-compat",[eu]:"fire-auth",[nu]:"fire-auth-compat",[ru]:"fire-rtdb",[su]:"fire-data-connect",[iu]:"fire-rtdb-compat",[ou]:"fire-fn",[au]:"fire-fn-compat",[lu]:"fire-iid",[cu]:"fire-iid-compat",[uu]:"fire-fcm",[hu]:"fire-fcm-compat",[du]:"fire-perf",[fu]:"fire-perf-compat",[pu]:"fire-rc",[mu]:"fire-rc-compat",[gu]:"fire-gcs",[yu]:"fire-gcs-compat",[_u]:"fire-fst",[wu]:"fire-fst-compat",[vu]:"fire-vertex","fire-js":"fire-js",[Eu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map,Au=new Map,as=new Map;function fo(r,t){try{r.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Yn(r){const t=r.name;if(as.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;as.set(t,r);for(const e of Xn.values())fo(e,r);for(const e of Au.values())fo(e,r);return!0}function bu(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new ra("app","Firebase",Su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=Tu;function aa(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:os,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(e||(e=na()),!e)throw qt.create("no-options");const o=Xn.get(s);if(o){if(ns(e,o.options)&&ns(n,o.config))return o;throw qt.create("duplicate-app",{appName:s})}const a=new xc(s);for(const h of as.values())a.addComponent(h);const c=new Ru(e,n,a);return Xn.set(s,c),c}function Pu(r=os){const t=Xn.get(r);if(!t&&r===os&&na())return aa();if(!t)throw qt.create("no-app",{appName:r});return t}function ve(r,t,e){var n;let s=(n=Iu[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Yn(new rn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="firebase-heartbeat-database",Vu=1,sn="firebase-heartbeat-store";let Yr=null;function la(){return Yr||(Yr=Hc(Cu,Vu,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(sn)}catch(e){console.warn(e)}}}}).catch(r=>{throw qt.create("idb-open",{originalErrorMessage:r.message})})),Yr}async function xu(r){try{const e=(await la()).transaction(sn),n=await e.objectStore(sn).get(ca(r));return await e.done,n}catch(t){if(t instanceof De)kt.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function po(r,t){try{const n=(await la()).transaction(sn,"readwrite");await n.objectStore(sn).put(t,ca(r)),await n.done}catch(e){if(e instanceof De)kt.warn(e.message);else{const n=qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(n.message)}}}function ca(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=1024,ku=30*24*60*60*1e3;class Nu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Fu(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=ku}),this._storage.overwrite(this._heartbeatsCache))}catch(n){kt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mo(),{heartbeatsToSend:n,unsentEntries:s}=Mu(this._heartbeatsCache.heartbeats),o=Qn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function mo(){return new Date().toISOString().substring(0,10)}function Mu(r,t=Lu){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),go(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),go(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Fu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?bc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function go(r){return Qn(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(r){Yn(new rn("platform-logger",t=>new Gc(t),"PRIVATE")),Yn(new rn("heartbeat",t=>new Nu(t),"PRIVATE")),ve(is,ho,r),ve(is,ho,"esm2017"),ve("fire-js","")}Ou("");var Bu="firebase",Uu="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Bu,Uu,"app");var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var re,ua;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(_,w,I){for(var g=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)g[Vt-2]=arguments[Vt];return m.prototype[w].apply(_,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,y){y||(y=0);var _=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)_[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)_[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],w=E.g[2];var I=E.g[3],g=m+(I^y&(w^I))+_[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=I+(w^m&(y^w))+_[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=w+(y^I&(m^y))+_[2]+606105819&4294967295,w=I+(g<<17&4294967295|g>>>15),g=y+(m^w&(I^m))+_[3]+3250441966&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(I^y&(w^I))+_[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=I+(w^m&(y^w))+_[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=w+(y^I&(m^y))+_[6]+2821735955&4294967295,w=I+(g<<17&4294967295|g>>>15),g=y+(m^w&(I^m))+_[7]+4249261313&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(I^y&(w^I))+_[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=I+(w^m&(y^w))+_[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=w+(y^I&(m^y))+_[10]+4294925233&4294967295,w=I+(g<<17&4294967295|g>>>15),g=y+(m^w&(I^m))+_[11]+2304563134&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(I^y&(w^I))+_[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=I+(w^m&(y^w))+_[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=w+(y^I&(m^y))+_[14]+2792965006&4294967295,w=I+(g<<17&4294967295|g>>>15),g=y+(m^w&(I^m))+_[15]+1236535329&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(w^I&(y^w))+_[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=I+(y^w&(m^y))+_[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(I^m))+_[11]+643717713&4294967295,w=I+(g<<14&4294967295|g>>>18),g=y+(I^m&(w^I))+_[0]+3921069994&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^I&(y^w))+_[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=I+(y^w&(m^y))+_[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(I^m))+_[15]+3634488961&4294967295,w=I+(g<<14&4294967295|g>>>18),g=y+(I^m&(w^I))+_[4]+3889429448&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^I&(y^w))+_[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=I+(y^w&(m^y))+_[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(I^m))+_[3]+4107603335&4294967295,w=I+(g<<14&4294967295|g>>>18),g=y+(I^m&(w^I))+_[8]+1163531501&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^I&(y^w))+_[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=I+(y^w&(m^y))+_[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(I^m))+_[7]+1735328473&4294967295,w=I+(g<<14&4294967295|g>>>18),g=y+(I^m&(w^I))+_[12]+2368359562&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(y^w^I)+_[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=I+(m^y^w)+_[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=w+(I^m^y)+_[11]+1839030562&4294967295,w=I+(g<<16&4294967295|g>>>16),g=y+(w^I^m)+_[14]+4259657740&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^I)+_[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=I+(m^y^w)+_[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=w+(I^m^y)+_[7]+4139469664&4294967295,w=I+(g<<16&4294967295|g>>>16),g=y+(w^I^m)+_[10]+3200236656&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^I)+_[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=I+(m^y^w)+_[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=w+(I^m^y)+_[3]+3572445317&4294967295,w=I+(g<<16&4294967295|g>>>16),g=y+(w^I^m)+_[6]+76029189&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^I)+_[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=I+(m^y^w)+_[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=w+(I^m^y)+_[15]+530742520&4294967295,w=I+(g<<16&4294967295|g>>>16),g=y+(w^I^m)+_[2]+3299628645&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(w^(y|~I))+_[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=I+(y^(m|~w))+_[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=w+(m^(I|~y))+_[14]+2878612391&4294967295,w=I+(g<<15&4294967295|g>>>17),g=y+(I^(w|~m))+_[5]+4237533241&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~I))+_[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=I+(y^(m|~w))+_[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=w+(m^(I|~y))+_[10]+4293915773&4294967295,w=I+(g<<15&4294967295|g>>>17),g=y+(I^(w|~m))+_[1]+2240044497&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~I))+_[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=I+(y^(m|~w))+_[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=w+(m^(I|~y))+_[6]+2734768916&4294967295,w=I+(g<<15&4294967295|g>>>17),g=y+(I^(w|~m))+_[13]+1309151649&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~I))+_[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=I+(y^(m|~w))+_[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=w+(m^(I|~y))+_[2]+718787259&4294967295,w=I+(g<<15&4294967295|g>>>17),g=y+(I^(w|~m))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,_=this.B,w=this.h,I=0;I<m;){if(w==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(_[w++]=E.charCodeAt(I++),w==this.blockSize){s(this,_),w=0;break}}else for(;I<m;)if(_[w++]=E[I++],w==this.blockSize){s(this,_),w=0;break}}this.h=w,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var _=0;32>_;_+=8)E[y++]=this.g[m]>>>_&255;return E};function o(E,m){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],_=!0,w=E.length-1;0<=w;w--){var I=E[w]|0;_&&I==m||(y[w]=I,_=!1)}this.g=y}var c={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return V(d(-E));for(var m=[],y=1,_=0;E>=y;_++)m[_]=E/y|0,y*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return V(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),_=v,w=0;w<E.length;w+=8){var I=Math.min(8,E.length-w),g=parseInt(E.substring(w,w+I),m);8>I?(I=d(Math.pow(m,I)),_=_.j(I).add(d(g))):(_=_.j(y),_=_.add(d(g)))}return _}var v=h(0),A=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(L(this))return-V(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var _=this.i(y);E+=(0<=_?_:4294967296+_)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(L(this))return"-"+V(this).toString(E);for(var m=d(Math.pow(E,6)),y=this,_="";;){var w=rt(y,m).g;y=z(y,w.j(m));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=w,P(y))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function L(E){return E.h==-1}r.l=function(E){return E=z(this,E),L(E)?-1:P(E)?0:1};function V(E){for(var m=E.g.length,y=[],_=0;_<m;_++)y[_]=~E.g[_];return new a(y,~E.h).add(A)}r.abs=function(){return L(this)?V(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0,w=0;w<=m;w++){var I=_+(this.i(w)&65535)+(E.i(w)&65535),g=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);_=g>>>16,I&=65535,g&=65535,y[w]=g<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(E,m){return E.add(V(m))}r.j=function(E){if(P(this)||P(E))return v;if(L(this))return L(E)?V(this).j(V(E)):V(V(this).j(E));if(L(E))return V(this.j(V(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],_=0;_<2*m;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var w=0;w<E.g.length;w++){var I=this.i(_)>>>16,g=this.i(_)&65535,Vt=E.i(w)>>>16,xe=E.i(w)&65535;y[2*_+2*w]+=g*xe,K(y,2*_+2*w),y[2*_+2*w+1]+=I*xe,K(y,2*_+2*w+1),y[2*_+2*w+1]+=g*Vt,K(y,2*_+2*w+1),y[2*_+2*w+2]+=I*Vt,K(y,2*_+2*w+2)}for(_=0;_<m;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=m;_<2*m;_++)y[_]=0;return new a(y,0)};function K(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function rt(E,m){if(P(m))throw Error("division by zero");if(P(E))return new G(v,v);if(L(E))return m=rt(V(E),m),new G(V(m.g),V(m.h));if(L(m))return m=rt(E,V(m)),new G(V(m.g),m.h);if(30<E.g.length){if(L(E)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var y=A,_=m;0>=_.l(E);)y=Ct(y),_=Ct(_);var w=it(y,1),I=it(_,1);for(_=it(_,2),y=it(y,2);!P(_);){var g=I.add(_);0>=g.l(E)&&(w=w.add(y),I=g),_=it(_,1),y=it(y,1)}return m=z(E,w.j(m)),new G(w,m)}for(w=v;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=d(y),g=I.j(m);L(g)||0<g.l(E);)y-=_,I=d(y),g=I.j(m);P(I)&&(I=A),w=w.add(I),E=z(E,g)}return new G(w,E)}r.A=function(E){return rt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)&E.i(_);return new a(y,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)|E.i(_);return new a(y,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)^E.i(_);return new a(y,this.h^E.h)};function Ct(E){for(var m=E.g.length+1,y=[],_=0;_<m;_++)y[_]=E.i(_)<<1|E.i(_-1)>>>31;return new a(y,E.h)}function it(E,m){var y=m>>5;m%=32;for(var _=E.g.length-y,w=[],I=0;I<_;I++)w[I]=0<m?E.i(I+y)>>>m|E.i(I+y+1)<<32-m:E.i(I+y);return new a(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ua=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,re=a}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});var Bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ha,Xe,da,zn,ls,fa,pa,ma;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bn=="object"&&Bn];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function s(i,l){if(l)t:{var u=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var T=i[f];if(!(T in u))break t;u=u[T]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,T={next:function(){if(!f&&u<i.length){var b=u++;return{value:l(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,u){return i.call.apply(i.bind,arguments)}function v(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),i.apply(l,T)}}return function(){return i.apply(l,arguments)}}function A(i,l,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,A.apply(null,arguments)}function S(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,T,b){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return l.prototype[T].apply(f,C)}}function L(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function V(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const T=i.length||0,b=f.length||0;i.length=T+b;for(let C=0;C<b;C++)i[T+C]=f[C]}else i.push(f)}}class z{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function K(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var Ct=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function it(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function E(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function m(i){const l={};for(const u in i)l[u]=i[u];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,l){let u,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(u in f)i[u]=f[u];for(let b=0;b<y.length;b++)u=y[b],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function w(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function I(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Ar;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Vt{constructor(){this.h=this.g=null}add(l,u){const f=xe.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var xe=new z(()=>new Dl,i=>i.reset());class Dl{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,ke=!1,Ar=new Vt,oi=()=>{const i=c.Promise.resolve(void 0);Le=()=>{i.then(Pl)}};var Pl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){I(u)}var l=xe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ke=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Cl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function Ne(i,l){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Ct){t:{try{rt(l.nodeName);var T=!0;break t}catch{}T=!1}T||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Vl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ne.aa.h.call(this)}}P(Ne,ht);var Vl={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),xl=0;function Ll(i,l,u,f,T){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=T,this.key=++xl,this.da=this.fa=!1}function En(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Tn(i){this.src=i,this.g={},this.h=0}Tn.prototype.add=function(i,l,u,f,T){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var C=Sr(i,l,f,T);return-1<C?(l=i[C],u||(l.fa=!1)):(l=new Ll(l,this.src,b,!!f,T),l.fa=u,i.push(l)),l};function br(i,l){var u=l.type;if(u in i.g){var f=i.g[u],T=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=T)&&Array.prototype.splice.call(f,T,1),b&&(En(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Sr(i,l,u,f){for(var T=0;T<i.length;++T){var b=i[T];if(!b.da&&b.listener==l&&b.capture==!!u&&b.ha==f)return T}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),Dr={};function ai(i,l,u,f,T){if(Array.isArray(l)){for(var b=0;b<l.length;b++)ai(i,l[b],u,f,T);return null}return u=ui(u),i&&i[wn]?i.K(l,u,d(f)?!!f.capture:!1,T):kl(i,l,u,!1,f,T)}function kl(i,l,u,f,T,b){if(!l)throw Error("Invalid event type");var C=d(T)?!!T.capture:!!T,W=Cr(i);if(W||(i[Rr]=W=new Tn(i)),u=W.add(l,u,f,C,b),u.proxy)return u;if(f=Nl(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Cl||(T=C),T===void 0&&(T=!1),i.addEventListener(l.toString(),f,T);else if(i.attachEvent)i.attachEvent(ci(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Nl(){function i(u){return l.call(i.src,i.listener,u)}const l=Ml;return i}function li(i,l,u,f,T){if(Array.isArray(l))for(var b=0;b<l.length;b++)li(i,l[b],u,f,T);else f=d(f)?!!f.capture:!!f,u=ui(u),i&&i[wn]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],u=Sr(b,u,f,T),-1<u&&(En(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=Cr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Sr(l,u,f,T)),(u=-1<i?l[i]:null)&&Pr(u))}function Pr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[wn])br(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(ci(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Cr(l))?(br(u,i),u.h==0&&(u.src=null,l[Rr]=null)):En(i)}}}function ci(i){return i in Dr?Dr[i]:Dr[i]="on"+i}function Ml(i,l){if(i.da)i=!0;else{l=new Ne(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&Pr(i),i=u.call(f,l)}return i}function Cr(i){return i=i[Rr],i instanceof Tn?i:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(i){return typeof i=="function"?i:(i[Vr]||(i[Vr]=function(l){return i.handleEvent(l)}),i[Vr])}function dt(){Ft.call(this),this.i=new Tn(this),this.M=this,this.F=null}P(dt,Ft),dt.prototype[wn]=!0,dt.prototype.removeEventListener=function(i,l,u,f){li(this,i,l,u,f)};function _t(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new ht(l,i);else if(l instanceof ht)l.target=l.target||i;else{var T=l;l=new ht(f,i),_(l,T)}if(T=!0,u)for(var b=u.length-1;0<=b;b--){var C=l.g=u[b];T=In(C,f,!0,l)&&T}if(C=l.g=i,T=In(C,f,!0,l)&&T,T=In(C,f,!1,l)&&T,u)for(b=0;b<u.length;b++)C=l.g=u[b],T=In(C,f,!1,l)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)En(u[f]);delete i.g[l],i.h--}}this.F=null},dt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},dt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function In(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,b=0;b<l.length;++b){var C=l[b];if(C&&!C.da&&C.capture==u){var W=C.listener,ot=C.ha||C.src;C.fa&&br(i.i,C),T=W.call(ot,f)!==!1&&T}}return T&&!f.defaultPrevented}function hi(i,l,u){if(typeof i=="function")u&&(i=A(i,u));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function di(i){i.g=hi(()=>{i.g=null,i.i&&(i.i=!1,di(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Fl extends Ft{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(i){Ft.call(this),this.h=i,this.g={}}P(Me,Ft);var fi=[];function pi(i){it(i.g,function(l,u){this.g.hasOwnProperty(u)&&Pr(l)},i),i.g={}}Me.prototype.N=function(){Me.aa.N.call(this),pi(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xr=c.JSON.stringify,Ol=c.JSON.parse,Bl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Lr(){}Lr.prototype.h=null;function mi(i){return i.h||(i.h=i.i())}function gi(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){ht.call(this,"d")}P(kr,ht);function Nr(){ht.call(this,"c")}P(Nr,ht);var Yt={},yi=null;function An(){return yi=yi||new dt}Yt.La="serverreachability";function _i(i){ht.call(this,Yt.La,i)}P(_i,ht);function Oe(i){const l=An();_t(l,new _i(l))}Yt.STAT_EVENT="statevent";function vi(i,l){ht.call(this,Yt.STAT_EVENT,i),this.stat=l}P(vi,ht);function vt(i){const l=An();_t(l,new vi(l,i))}Yt.Ma="timingevent";function wi(i,l){ht.call(this,Yt.Ma,i),this.size=l}P(wi,ht);function Be(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Ue(){this.g=!0}Ue.prototype.xa=function(){this.g=!1};function Ul(i,l,u,f,T,b){i.info(function(){if(i.g)if(b)for(var C="",W=b.split("&"),ot=0;ot<W.length;ot++){var j=W[ot].split("=");if(1<j.length){var ft=j[0];j=j[1];var pt=ft.split("_");C=2<=pt.length&&pt[1]=="type"?C+(ft+"="+j+"&"):C+(ft+"=redacted&")}}else C=null;else C=b;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+l+`
`+u+`
`+C})}function $l(i,l,u,f,T,b,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+l+`
`+u+`
`+b+" "+C})}function ue(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+ql(i,u)+(f?" "+f:"")})}function jl(i,l){i.info(function(){return"TIMEOUT: "+l})}Ue.prototype.info=function(){};function ql(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return xr(u)}catch{return l}}var bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mr;function Sn(){}P(Sn,Lr),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},Mr=new Sn;function Ot(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var Ii={},Fr={};function Or(i,l,u){i.L=1,i.v=Cn(xt(l)),i.m=u,i.P=!0,Ai(i,null)}function Ai(i,l){i.F=Date.now(),Rn(i),i.A=xt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Oi(u.i,"t",f),i.C=0,u=i.j.J,i.h=new Ti,i.g=no(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Fl(A(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(fi[0]=T.toString()),T=fi);for(var b=0;b<T.length;b++){var C=ai(u,T[b],f||l.handleEvent,!1,l.h||l);if(!C)break;l.g[C.key]=C}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Oe(),Ul(i.i,i.u,i.A,i.l,i.R,i.m)}Ot.prototype.ca=function(i){i=i.target;const l=this.M;l&&Lt(i)==3?l.j():this.Y(i)},Ot.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Lt(this.g);var l=this.g.Ba();const fe=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Hi(this.g)))){this.J||pt!=4||l==7||(l==8||0>=fe?Oe(3):Oe(2)),Br(this);var u=this.g.Z();this.X=u;e:if(bi(this)){var f=Hi(this.g);i="";var T=f.length,b=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),$e(this);var C="";break e}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(b&&l==T-1)});f.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,$l(this.i,this.u,this.A,this.l,this.R,pt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ot=this.g;if((W=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(W)){var j=W;break e}}j=null}if(u=j)ue(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ur(this,u);else{this.o=!1,this.s=3,vt(12),Jt(this),$e(this);break t}}if(this.P){u=!0;let At;for(;!this.J&&this.C<C.length;)if(At=zl(this,C),At==Fr){pt==4&&(this.s=4,vt(14),u=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Ii){this.s=4,vt(15),ue(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else ue(this.i,this.l,At,null),Ur(this,At);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,vt(16),u=!1),this.o=this.o&&u,!u)ue(this.i,this.l,C,"[Invalid Chunked Response]"),Jt(this),$e(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Kr(ft),ft.M=!0,vt(11))}}else ue(this.i,this.l,C,null),Ur(this,C);pt==4&&Jt(this),this.o&&!this.J&&(pt==4?Ji(this.j,this):(this.o=!1,Rn(this)))}else ac(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Jt(this),$e(this)}}}catch{}finally{}};function bi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function zl(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Fr:(u=Number(l.substring(u,f)),isNaN(u)?Ii:(f+=1,f+u>l.length?Fr:(l=l.slice(f,f+u),i.C=f+u,l)))}Ot.prototype.cancel=function(){this.J=!0,Jt(this)};function Rn(i){i.S=Date.now()+i.I,Si(i,i.I)}function Si(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Be(A(i.ba,i),l)}function Br(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ot.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(jl(this.i,this.A),this.L!=2&&(Oe(),vt(17)),Jt(this),this.s=2,$e(this)):Si(this,this.S-i)};function $e(i){i.j.G==0||i.J||Ji(i.j,i)}function Jt(i){Br(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,pi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Ur(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||$r(u.h,i))){if(!i.K&&$r(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Mn(u),kn(u);else break t;Hr(u),vt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Be(A(u.Za,u),6e3));if(1>=Pi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else te(u,11)}else if((i.K||u.g==i)&&Mn(u),!K(l))for(T=u.Da.g.parse(l),l=0;l<T.length;l++){let j=T[l];if(u.T=j[0],j=j[1],u.G==2)if(j[0]=="c"){u.K=j[1],u.ia=j[2];const ft=j[3];ft!=null&&(u.la=ft,u.j.info("VER="+u.la));const pt=j[4];pt!=null&&(u.Aa=pt,u.j.info("SVER="+u.Aa));const fe=j[5];fe!=null&&typeof fe=="number"&&0<fe&&(f=1.5*fe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const At=i.g;if(At){const On=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var b=f.h;b.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(jr(b,b.h),b.h=null))}if(f.D){const Wr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(f.ya=Wr,Q(f.I,f.D,Wr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var C=i;if(f.qa=eo(f,f.J?f.ia:null,f.W),C.K){Ci(f.h,C);var W=C,ot=f.L;ot&&(W.I=ot),W.B&&(Br(W),Rn(W)),f.g=C}else Xi(f);0<u.i.length&&Nn(u)}else j[0]!="stop"&&j[0]!="close"||te(u,7);else u.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?te(u,7):zr(u):j[0]!="noop"&&u.l&&u.l.ta(j),u.v=0)}}Oe(4)}catch{}}var Hl=class{constructor(i,l){this.g=i,this.map=l}};function Ri(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Di(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Pi(i){return i.h?1:i.g?i.g.size:0}function $r(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function jr(i,l){i.g?i.g.add(l):i.h=l}function Ci(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ri.prototype.cancel=function(){if(this.i=Vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Vi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return L(i.i)}function Kl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function Wl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function xi(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Wl(i),f=Kl(i),T=f.length,b=0;b<T;b++)l.call(void 0,f[b],u&&u[b],i)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gl(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),T=null;if(0<=f){var b=i[u].substring(0,f);T=i[u].substring(f+1)}else b=i[u];l(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Zt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Zt){this.h=i.h,Dn(this,i.j),this.o=i.o,this.g=i.g,Pn(this,i.s),this.l=i.l;var l=i.i,u=new ze;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),ki(this,u),this.m=i.m}else i&&(l=String(i).match(Li))?(this.h=!1,Dn(this,l[1]||"",!0),this.o=je(l[2]||""),this.g=je(l[3]||"",!0),Pn(this,l[4]),this.l=je(l[5]||"",!0),ki(this,l[6]||"",!0),this.m=je(l[7]||"")):(this.h=!1,this.i=new ze(null,this.h))}Zt.prototype.toString=function(){var i=[],l=this.j;l&&i.push(qe(l,Ni,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(qe(l,Ni,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(qe(u,u.charAt(0)=="/"?Yl:Xl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",qe(u,Zl)),i.join("")};function xt(i){return new Zt(i)}function Dn(i,l,u){i.j=u?je(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Pn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function ki(i,l,u){l instanceof ze?(i.i=l,tc(i.i,i.h)):(u||(l=qe(l,Jl)),i.i=new ze(l,i.h))}function Q(i,l,u){i.i.set(l,u)}function Cn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function je(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function qe(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Ql),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ql(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ni=/[#\/\?@]/g,Xl=/[#\?:]/g,Yl=/[#\?]/g,Jl=/[#\?@]/g,Zl=/#/g;function ze(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Bt(i){i.g||(i.g=new Map,i.h=0,i.i&&Gl(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=ze.prototype,r.add=function(i,l){Bt(this),this.i=null,i=he(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Mi(i,l){Bt(i),l=he(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Fi(i,l){return Bt(i),l=he(i,l),i.g.has(l)}r.forEach=function(i,l){Bt(this),this.g.forEach(function(u,f){u.forEach(function(T){i.call(l,T,f,this)},this)},this)},r.na=function(){Bt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const T=i[f];for(let b=0;b<T.length;b++)u.push(l[f])}return u},r.V=function(i){Bt(this);let l=[];if(typeof i=="string")Fi(this,i)&&(l=l.concat(this.g.get(he(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},r.set=function(i,l){return Bt(this),this.i=null,i=he(this,i),Fi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},r.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Oi(i,l,u){Mi(i,l),0<u.length&&(i.i=null,i.g.set(he(i,l),L(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const b=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var T=b;C[f]!==""&&(T+="="+encodeURIComponent(String(C[f]))),i.push(T)}}return this.i=i.join("&")};function he(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function tc(i,l){l&&!i.j&&(Bt(i),i.i=null,i.g.forEach(function(u,f){var T=f.toLowerCase();f!=T&&(Mi(this,f),Oi(this,T,u))},i)),i.j=l}function ec(i,l){const u=new Ue;if(c.Image){const f=new Image;f.onload=S(Ut,u,"TestLoadImage: loaded",!0,l,f),f.onerror=S(Ut,u,"TestLoadImage: error",!1,l,f),f.onabort=S(Ut,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(Ut,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function nc(i,l){const u=new Ue,f=new AbortController,T=setTimeout(()=>{f.abort(),Ut(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(T),b.ok?Ut(u,"TestPingServer: ok",!0,l):Ut(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),Ut(u,"TestPingServer: error",!1,l)})}function Ut(i,l,u,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(u)}catch{}}function rc(){this.g=new Bl}function sc(i,l,u){const f=u||"";try{xi(i,function(T,b){let C=T;d(T)&&(C=xr(T)),l.push(f+b+"="+encodeURIComponent(C))})}catch(T){throw l.push(f+"type="+encodeURIComponent("_badmap")),T}}function Vn(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Vn,Lr),Vn.prototype.g=function(){return new xn(this.l,this.j)},Vn.prototype.i=function(i){return function(){return i}}({});function xn(i,l){dt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(xn,dt),r=xn.prototype,r.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Ke(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,He(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bi(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bi(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?He(this):Ke(this),this.readyState==3&&Bi(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,He(this))},r.Qa=function(i){this.g&&(this.response=i,He(this))},r.ga=function(){this.g&&He(this)};function He(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ke(i)}r.setRequestHeader=function(i,l){this.u.append(i,l)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Ke(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ui(i){let l="";return it(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function qr(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Ui(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Q(i,l,u))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(J,dt);var ic=/^https?$/i,oc=["POST","PUT"];r=J.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mr.g(),this.v=this.o?mi(this.o):mi(Mr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){$i(this,b);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)u.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(oc,l,void 0))||f||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,C]of u)this.g.setRequestHeader(b,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zi(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){$i(this,b)}};function $i(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,ji(i),Ln(i)}function ji(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ln(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?qi(this):this.bb())},r.bb=function(){qi(this)};function qi(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)hi(i.Ea,0,i);else if(_t(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=C===0){var T=String(i.D).match(Li)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!ic.test(T?T.toLowerCase():"")}u=f}if(u)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var b=2<Lt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",ji(i)}}finally{Ln(i)}}}}function Ln(i,l){if(i.g){zi(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||_t(i,"ready");try{u.onreadystatechange=f}catch{}}}function zi(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ol(l)}};function Hi(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ac(i){const l={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(K(i[f]))continue;var u=w(i[f]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=l[T]||[];l[T]=b,b.push(u)}E(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Ki(i){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,i),this.cb=We("retryDelaySeedMs",1e4,i),this.Wa=We("forwardChannelMaxRetries",2,i),this.wa=We("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(i&&i.concurrentRequestLimit),this.Da=new rc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ki.prototype,r.la=8,r.G=1,r.connect=function(i,l,u,f){vt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=eo(this,null,this.W),Nn(this)};function zr(i){if(Wi(i),i.G==3){var l=i.U++,u=xt(i.I);if(Q(u,"SID",i.K),Q(u,"RID",l),Q(u,"TYPE","terminate"),Ge(i,u),l=new Ot(i,i.j,l),l.L=2,l.v=Cn(xt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=no(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Rn(l)}to(i)}function kn(i){i.g&&(Kr(i),i.g.cancel(),i.g=null)}function Wi(i){kn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Mn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Nn(i){if(!Di(i.h)&&!i.s){i.s=!0;var l=i.Ga;Le||oi(),ke||(Le(),ke=!0),Ar.add(l,i),i.B=0}}function lc(i,l){return Pi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Be(A(i.Ga,i,l),Zi(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ot(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),_(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Qi(this,T,l),u=xt(this.I),Q(u,"RID",i),Q(u,"CVER",22),this.D&&Q(u,"X-HTTP-Session-Id",this.D),Ge(this,u),b&&(this.O?l="headers="+encodeURIComponent(String(Ui(b)))+"&"+l:this.m&&qr(u,this.m,b)),jr(this.h,T),this.Ua&&Q(u,"TYPE","init"),this.P?(Q(u,"$req",l),Q(u,"SID","null"),T.T=!0,Or(T,u,null)):Or(T,u,l),this.G=2}}else this.G==3&&(i?Gi(this,i):this.i.length==0||Di(this.h)||Gi(this))};function Gi(i,l){var u;l?u=l.l:u=i.U++;const f=xt(i.I);Q(f,"SID",i.K),Q(f,"RID",u),Q(f,"AID",i.T),Ge(i,f),i.m&&i.o&&qr(f,i.m,i.o),u=new Ot(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Qi(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),jr(i.h,u),Or(u,f,l)}function Ge(i,l){i.H&&it(i.H,function(u,f){Q(l,f,u)}),i.l&&xi({},function(u,f){Q(l,f,u)})}function Qi(i,l,u){u=Math.min(i.i.length,u);var f=i.l?A(i.l.Na,i.l,i):null;t:{var T=i.i;let b=-1;for(;;){const C=["count="+u];b==-1?0<u?(b=T[0].g,C.push("ofs="+b)):b=0:C.push("ofs="+b);let W=!0;for(let ot=0;ot<u;ot++){let j=T[ot].g;const ft=T[ot].map;if(j-=b,0>j)b=Math.max(0,T[ot].g-100),W=!1;else try{sc(ft,C,"req"+j+"_")}catch{f&&f(ft)}}if(W){f=C.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function Xi(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Le||oi(),ke||(Le(),ke=!0),Ar.add(l,i),i.v=0}}function Hr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Be(A(i.Fa,i),Zi(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Yi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Be(A(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),kn(this),Yi(this))};function Kr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Yi(i){i.g=new Ot(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=xt(i.qa);Q(l,"RID","rpc"),Q(l,"SID",i.K),Q(l,"AID",i.T),Q(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(l,"TO",i.ja),Q(l,"TYPE","xmlhttp"),Ge(i,l),i.m&&i.o&&qr(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Cn(xt(l)),u.m=null,u.P=!0,Ai(u,i)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Hr(this),vt(19))};function Mn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ji(i,l){var u=null;if(i.g==l){Mn(i),Kr(i),i.g=null;var f=2}else if($r(i.h,l))u=l.D,Ci(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var T=i.B;f=An(),_t(f,new wi(f,u)),Nn(i)}else Xi(i);else if(T=l.s,T==3||T==0&&0<l.X||!(f==1&&lc(i,l)||f==2&&Hr(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),T){case 1:te(i,5);break;case 4:te(i,10);break;case 3:te(i,6);break;default:te(i,2)}}}function Zi(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function te(i,l){if(i.j.info("Error code "+l),l==2){var u=A(i.fb,i),f=i.Xa;const T=!f;f=new Zt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Dn(f,"https"),Cn(f),T?ec(f.toString(),u):nc(f.toString(),u)}else vt(2);i.G=0,i.l&&i.l.sa(l),to(i),Wi(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function to(i){if(i.G=0,i.ka=[],i.l){const l=Vi(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function eo(i,l,u){var f=u instanceof Zt?xt(u):new Zt(u);if(f.g!="")l&&(f.g=l+"."+f.g),Pn(f,f.s);else{var T=c.location;f=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var b=new Zt(null);f&&Dn(b,f),l&&(b.g=l),T&&Pn(b,T),u&&(b.l=u),f=b}return u=i.D,l=i.ya,u&&l&&Q(f,u,l),Q(f,"VER",i.la),Ge(i,f),f}function no(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new J(new Vn({eb:u})):new J(i.pa),l.Ha(i.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ro(){}r=ro.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Fn(){}Fn.prototype.g=function(i,l){return new Et(i,l)};function Et(i,l){dt.call(this),this.g=new Ki(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!K(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!K(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new de(this)}P(Et,dt),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){zr(this.g)},Et.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=xr(i),i=u);l.i.push(new Hl(l.Ya++,i)),l.G==3&&Nn(l)},Et.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,Et.aa.N.call(this)};function so(i){kr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(so,kr);function io(){Nr.call(this),this.status=1}P(io,Nr);function de(i){this.g=i}P(de,ro),de.prototype.ua=function(){_t(this.g,"a")},de.prototype.ta=function(i){_t(this.g,new so(i))},de.prototype.sa=function(i){_t(this.g,new io)},de.prototype.ra=function(){_t(this.g,"b")},Fn.prototype.createWebChannel=Fn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,ma=function(){return new Fn},pa=function(){return An()},fa=Yt,ls={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,zn=bn,Ei.COMPLETE="complete",da=Ei,gi.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Xe=gi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ha=J}).apply(typeof Bn<"u"?Bn:typeof self<"u"?self:typeof window<"u"?window:{});const _o="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new sa("@firebase/firestore");function Qe(){return se.logLevel}function x(r,...t){if(se.logLevel<=$.DEBUG){const e=t.map(Ss);se.debug(`Firestore (${Pe}): ${r}`,...e)}}function Nt(r,...t){if(se.logLevel<=$.ERROR){const e=t.map(Ss);se.error(`Firestore (${Pe}): ${r}`,...e)}}function Ee(r,...t){if(se.logLevel<=$.WARN){const e=t.map(Ss);se.warn(`Firestore (${Pe}): ${r}`,...e)}}function Ss(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${Pe}) INTERNAL ASSERTION FAILED: `+r;throw Nt(t),new Error(t)}function H(r,t){r||M()}function O(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $u{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class ju{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string"),new ga(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new gt(t)}}class zu{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new zu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){H(this.o===void 0);const n=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string"),this.R=e.token,new Ku(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Gu(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Te(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new nt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new nt(0,0))}static max(){return new F(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends on{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends on{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return Qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new k(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(o(),s++)}if(o(),a)throw new k(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(X.fromString(t))}static fromName(t){return new N(X.fromString(t).popFirst(5))}static empty(){return new N(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new X(t.slice()))}}function Xu(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Wt(s,N.empty(),t)}function Yu(r){return new Wt(r.readTime,r.key,-1)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(F.min(),N.empty(),-1)}static max(){return new Wt(F.max(),N.empty(),-1)}}function Ju(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class th{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==Zu)throw r;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>n(h))}),a=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(s=>s?R.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++c,c===o&&n(a)},p=>s(p))}})}static doWhile(t,e){return new R((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function eh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function pn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Rs.oe=-1;function lr(r){return r==null}function Jn(r){return r===0&&1/r==-1/0}function nh(r){return typeof r=="number"&&Number.isInteger(r)&&!Jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function le(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function _a(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new at(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wo(this.data.getIterator())}getIteratorFrom(t){return new wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Tt([])}unionWith(t){let e=new ct(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Tt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new va("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(r){if(H(!!r),typeof r=="string"){let t=0;const e=rh.exec(r);if(H(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ie(r){return typeof r=="string"?ut.fromBase64String(r):ut.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ps(r){const t=r.mapValue.fields.__previous_value__;return Ds(t)?Ps(t):t}function an(r){const t=Gt(r.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,n,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={mapValue:{}};function oe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ds(r)?4:oh(r)?9007199254740991:ih(r)?10:11:M()}function Dt(r,t){if(r===t)return!0;const e=oe(r);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Gt(s.timestampValue),c=Gt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return ie(s.bytesValue).isEqual(ie(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),c=Z(o.doubleValue);return a===c?Jn(a)===Jn(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Te(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(vo(a)!==vo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Dt(a[h],c[h])))return!1;return!0}(r,t);default:return M()}}function cn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=oe(r),n=oe(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Eo(r.timestampValue,t.timestampValue);case 4:return Eo(an(r),an(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=q(c[d],h[d]);if(p!==0)return p}return q(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=q(Z(o.latitude),Z(a.latitude));return c!==0?c:q(Z(o.longitude),Z(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return To(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,p;const v=o.fields||{},A=a.fields||{},S=(c=v.value)===null||c===void 0?void 0:c.arrayValue,P=(h=A.value)===null||h===void 0?void 0:h.arrayValue,L=q(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:To(S,P)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===$n.mapValue&&a===$n.mapValue)return 0;if(o===$n.mapValue)return 1;if(a===$n.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const A=q(h[v],p[v]);if(A!==0)return A;const S=Ie(c[h[v]],d[p[v]]);if(S!==0)return S}return q(h.length,p.length)}(r.mapValue,t.mapValue);default:throw M()}}function Eo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Gt(r),n=Gt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function To(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Ie(e[s],n[s]);if(o)return o}return q(e.length,n.length)}function Ae(r){return cs(r)}function cs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Gt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ie(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=cs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${cs(e.fields[a])}`;return s+"}"}(r.mapValue):M()}function us(r){return!!r&&"integerValue"in r}function Cs(r){return!!r&&"arrayValue"in r}function Io(r){return!!r&&"nullValue"in r}function Ao(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hn(r){return!!r&&"mapValue"in r}function ih(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return le(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function oh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=lt.emptyPath(),n={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}a?n[c.lastSegment()]=Ze(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Hn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Hn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){le(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new wt(Ze(this.value))}}function wa(r){const t=[];return le(r.fields,(e,n)=>{const s=new lt([e]);if(Hn(n)){const o=wa(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Tt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,s,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,F.min(),F.min(),F.min(),wt.empty(),0)}static newFoundDocument(t,e,n,s){return new yt(t,1,e,F.min(),n,s,0)}static newNoDocument(t,e){return new yt(t,2,e,F.min(),F.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,F.min(),F.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function bo(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=Ie(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function So(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ah(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{}class et extends Ea{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ch(t,e,n):e==="array-contains"?new dh(t,n):e==="in"?new fh(t,n):e==="not-in"?new ph(t,n):e==="array-contains-any"?new mh(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new uh(t,n):new hh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ie(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends Ea{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Pt(t,e)}matches(t){return Ta(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ta(r){return r.op==="and"}function Ia(r){return lh(r)&&Ta(r)}function lh(r){for(const t of r.filters)if(t instanceof Pt)return!1;return!0}function hs(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Ae(r.value);if(Ia(r))return r.filters.map(t=>hs(t)).join(",");{const t=r.filters.map(e=>hs(e)).join(",");return`${r.op}(${t})`}}function Aa(r,t){return r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(r,t):r instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,c)=>o&&Aa(a,s.filters[c]),!0):!1}(r,t):void M()}function ba(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(r):r instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(ba).join(" ,")+"}"}(r):"Filter"}class ch extends et{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class uh extends et{constructor(t,e){super(t,"in",e),this.keys=Sa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Sa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class dh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cs(e)&&cn(e.arrayValue,this.value)}}class fh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cn(this.value.arrayValue,e)}}class ph extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!cn(this.value.arrayValue,e)}}class mh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>cn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e=null,n=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Ro(r,t=null,e=[],n=[],s=null,o=null,a=null){return new gh(r,t,e,n,s,o,a)}function Vs(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>hs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ae(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ae(n)).join(",")),t.ue=e}return t.ue}function xs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ah(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Aa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!So(r.startAt,t.startAt)&&So(r.endAt,t.endAt)}function ds(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e=null,n=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yh(r,t,e,n,s,o,a,c){return new cr(r,t,e,n,s,o,a,c)}function Ra(r){return new cr(r)}function Do(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function _h(r){return r.collectionGroup!==null}function tn(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new tr(o,n))}),e.has(lt.keyField().canonicalString())||t.ce.push(new tr(lt.keyField(),n))}return t.ce}function St(r){const t=O(r);return t.le||(t.le=vh(t,tn(r))),t.le}function vh(r,t){if(r.limitType==="F")return Ro(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new tr(s.field,o)});const e=r.endAt?new Zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zn(r.startAt.position,r.startAt.inclusive):null;return Ro(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function fs(r,t,e){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ur(r,t){return xs(St(r),St(t))&&r.limitType===t.limitType}function Da(r){return`${Vs(St(r))}|lt:${r.limitType}`}function pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ba(s)).join(", ")}]`),lr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ae(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ae(s)).join(",")),`Target(${n})`}(St(r))}; limitType=${r.limitType})`}function hr(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):N.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of tn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,c,h){const d=bo(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,tn(n),s)||n.endAt&&!function(a,c,h){const d=bo(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,tn(n),s))}(r,t)}function wh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Pa(r){return(t,e)=>{let n=!1;for(const s of tn(r)){const o=Eh(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Eh(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ie(h,d):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return _a(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Y(N.comparator);function Mt(){return Th}const Ca=new Y(N.comparator);function Ye(...r){let t=Ca;for(const e of r)t=t.insert(e.key,e);return t}function Va(r){let t=Ca;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ne(){return en()}function xa(){return en()}function en(){return new Ce(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ih=new Y(N.comparator),Ah=new ct(N.comparator);function B(...r){let t=Ah;for(const e of r)t=t.add(e);return t}const bh=new ct(q);function Sh(){return bh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function La(r){return{integerValue:""+r}}function Rh(r,t){return nh(t)?La(t):Ls(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this._=void 0}}function Dh(r,t,e){return r instanceof un?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ds(o)&&(o=Ps(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):r instanceof hn?Na(r,t):r instanceof dn?Ma(r,t):function(s,o){const a=ka(s,o),c=Po(a)+Po(s.Pe);return us(a)&&us(s.Pe)?La(c):Ls(s.serializer,c)}(r,t)}function Ph(r,t,e){return r instanceof hn?Na(r,t):r instanceof dn?Ma(r,t):e}function ka(r,t){return r instanceof er?function(n){return us(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class un extends dr{}class hn extends dr{constructor(t){super(),this.elements=t}}function Na(r,t){const e=Fa(t);for(const n of r.elements)e.some(s=>Dt(s,n))||e.push(n);return{arrayValue:{values:e}}}class dn extends dr{constructor(t){super(),this.elements=t}}function Ma(r,t){let e=Fa(t);for(const n of r.elements)e=e.filter(s=>!Dt(s,n));return{arrayValue:{values:e}}}class er extends dr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Po(r){return Z(r.integerValue||r.doubleValue)}function Fa(r){return Cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e){this.field=t,this.transform=e}}function Vh(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof hn&&s instanceof hn||n instanceof dn&&s instanceof dn?Te(n.elements,s.elements,Dt):n instanceof er&&s instanceof er?Dt(n.Pe,s.Pe):n instanceof un&&s instanceof un}(r.transform,t.transform)}class xh{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Kn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fr{}function Oa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ks(r.key,bt.none()):new mn(r.key,r.data,bt.none());{const e=r.data,n=wt.empty();let s=new ct(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new Xt(r.key,n,new Tt(s.toArray()),bt.none())}}function Lh(r,t,e){r instanceof mn?function(s,o,a){const c=s.value.clone(),h=Vo(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Xt?function(s,o,a){if(!Kn(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Vo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ba(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof mn?function(o,a,c,h){if(!Kn(o.precondition,a))return c;const d=o.value.clone(),p=xo(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof Xt?function(o,a,c,h){if(!Kn(o.precondition,a))return c;const d=xo(o.fieldTransforms,h,a),p=a.data;return p.setAll(Ba(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(r,t,e,n):function(o,a,c){return Kn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function kh(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=ka(n.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(n.field,o))}return e||null}function Co(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Te(n,s,(o,a)=>Vh(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class mn extends fr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xt extends fr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ba(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Vo(r,t,e){const n=new Map;H(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,c=t.data.field(o.field);n.set(o.field,Ph(a,c,e[s]))}return n}function xo(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,Dh(o,a,t))}return n}class ks extends fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nh extends fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Lh(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=xa();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Oa(a,c);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,n)=>Co(e,n))&&Te(this.baseMutations,t.baseMutations,(e,n)=>Co(e,n))}}class Ns{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){H(t.mutations.length===n.length);let s=function(){return Ih}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Ns(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,U;function Bh(r){switch(r){default:return M();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Ua(r){if(r===void 0)return Nt("GRPC error has no .code"),D.UNKNOWN;switch(r){case tt.OK:return D.OK;case tt.CANCELLED:return D.CANCELLED;case tt.UNKNOWN:return D.UNKNOWN;case tt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case tt.INTERNAL:return D.INTERNAL;case tt.UNAVAILABLE:return D.UNAVAILABLE;case tt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case tt.NOT_FOUND:return D.NOT_FOUND;case tt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case tt.ABORTED:return D.ABORTED;case tt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case tt.DATA_LOSS:return D.DATA_LOSS;default:return M()}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new re([4294967295,4294967295],0);function Lo(r){const t=Uh().encode(r),e=new ua;return e.update(t),new Uint8Array(e.digest())}function ko(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new re([e,n],0),new re([s,o],0)]}class Ms{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(n<0)throw new Je(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=re.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(re.fromNumber(n)));return s.compare($h)===1&&(s=new re([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Lo(t),[n,s]=ko(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,s,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ms(o,s,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Lo(t),[n,s]=ko(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new pr(F.min(),s,new Y(q),Mt(),B())}}class gn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class $a{constructor(t,e){this.targetId=t,this.me=e}}class ja{constructor(t,e,n=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class No{constructor(){this.fe=0,this.ge=Fo(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),n=B();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}}),new gn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Fo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Mt(),this.qe=Mo(),this.Qe=new Y(q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ds(o))if(n===0){const a=new N(o.path);this.Ue(e,a,yt.newNoDocument(a,F.min()))}else H(n===1);else{const a=this.Ye(e);if(a!==n){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=ie(n).toUint8Array()}catch(h){if(h instanceof va)return Ee("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ms(a,s,o)}catch(h){return Ee(h instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&ds(c.target)){const h=new N(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,yt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new pr(t,e,this.Qe,this.ke,n);return this.ke=Mt(),this.qe=Mo(),this.Qe=new Y(q),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new No,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct(q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new No),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Mo(){return new Y(N.comparator)}function Fo(){return new Y(N.comparator)}const qh={asc:"ASCENDING",desc:"DESCENDING"},zh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hh={and:"AND",or:"OR"};class Kh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ps(r,t){return r.useProto3Json||lr(t)?t:{value:t}}function nr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qa(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Wh(r,t){return nr(r,t.toTimestamp())}function Rt(r){return H(!!r),F.fromTimestamp(function(e){const n=Gt(e);return new nt(n.seconds,n.nanos)}(r))}function Fs(r,t){return ms(r,t).canonicalString()}function ms(r,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function za(r){const t=X.fromString(r);return H(Qa(t)),t}function gs(r,t){return Fs(r.databaseId,t.path)}function Jr(r,t){const e=za(t);if(e.get(1)!==r.databaseId.projectId)throw new k(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N(Ka(e))}function Ha(r,t){return Fs(r.databaseId,t)}function Gh(r){const t=za(r);return t.length===4?X.emptyPath():Ka(t)}function ys(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ka(r){return H(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Oo(r,t,e){return{name:gs(r,t),fields:e.value.mapValue.fields}}function Qh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(H(p===void 0||typeof p=="string"),ut.fromBase64String(p||"")):(H(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ut.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?D.UNKNOWN:Ua(d.code);return new k(p,d.message||"")}(a);e=new ja(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Jr(r,n.document.name),o=Rt(n.document.updateTime),a=n.document.createTime?Rt(n.document.createTime):F.min(),c=new wt({mapValue:{fields:n.document.fields}}),h=yt.newFoundDocument(s,o,a,c),d=n.targetIds||[],p=n.removedTargetIds||[];e=new Wn(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Jr(r,n.document),o=n.readTime?Rt(n.readTime):F.min(),a=yt.newNoDocument(s,o),c=n.removedTargetIds||[];e=new Wn([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Jr(r,n.document),o=n.removedTargetIds||[];e=new Wn([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Oh(s,o),c=n.targetId;e=new $a(c,a)}}return e}function Xh(r,t){let e;if(t instanceof mn)e={update:Oo(r,t.key,t.value)};else if(t instanceof ks)e={delete:gs(r,t.key)};else if(t instanceof Xt)e={update:Oo(r,t.key,t.data),updateMask:id(t.fieldMask)};else{if(!(t instanceof Nh))return M();e={verify:gs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof er)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Wh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(r,t.precondition)),e}function Yh(r,t){return r&&r.length>0?(H(t!==void 0),r.map(e=>function(s,o){let a=s.updateTime?Rt(s.updateTime):Rt(o);return a.isEqual(F.min())&&(a=Rt(o)),new xh(a,s.transformResults||[])}(e,t))):[]}function Jh(r,t){return{documents:[Ha(r,t.path)]}}function Zh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ha(r,s);const o=function(d){if(d.length!==0)return Ga(Pt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:me(A.field),direction:nd(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ps(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function td(r){let t=Gh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){H(n===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const A=Wa(v);return A instanceof Pt&&Ia(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(A=>function(P){return new tr(ge(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(v){let A;return A=typeof v=="object"?v.value:v,lr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(v){const A=!!v.before,S=v.values||[];return new Zn(S,A)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const A=!v.before,S=v.values||[];return new Zn(S,A)}(e.endAt)),yh(t,s,a,o,c,"F",h,d)}function ed(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Wa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ge(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ge(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ge(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return et.create(ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>Wa(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function nd(r){return qh[r]}function rd(r){return zh[r]}function sd(r){return Hh[r]}function me(r){return{fieldPath:r.canonicalString()}}function ge(r){return lt.fromServerFormat(r.fieldPath)}function Ga(r){return r instanceof et?function(e){if(e.op==="=="){if(Ao(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NAN"}};if(Io(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ao(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NAN"}};if(Io(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(e.field),op:rd(e.op),value:e.value}}}(r):r instanceof Pt?function(e){const n=e.getFilters().map(s=>Ga(s));return n.length===1?n[0]:{compositeFilter:{op:sd(e.op),filters:n}}}(r):M()}function id(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n,s,o=F.min(),a=F.min(),c=ut.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.ct=t}}function ad(r){const t=td({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.un=new cd}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Wt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class cd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ct(X.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new be(0)}static kn(){return new be(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&nn(n.mutation,s,Tt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const s=ne();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=Ye();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ne();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,s){let o=Mt();const a=en(),c=function(){return en()}();return e.forEach((h,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Xt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),nn(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,Tt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var v;return c.set(d,new hd(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const n=en();let s=new Y((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=n.get(h)||Tt.empty();p=c.applyToLocalView(d,p),n.set(h,p);const v=(s.get(c.batchId)||B()).add(h);s=s.insert(c.batchId,v)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,v=xa();p.forEach(A=>{if(!o.has(A)){const S=Oa(e.get(A),n.get(A));S!==null&&v.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return R.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_h(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):R.resolve(ne());let c=-1,h=o;return a.next(d=>R.forEach(d,(p,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(p)?R.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,B())).next(p=>({batchId:c,changes:Va(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let s=Ye();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=Ye();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,h=>{const d=function(v,A){return new cr(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(p=>{p.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,yt.newInvalidDocument(p)))});let c=Ye();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&nn(p.mutation,d,Tt.empty(),nt.now()),hr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:ad(s.bundledQuery),readTime:Rt(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.overlays=new Y(N.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ne();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const s=ne(),o=e.length+1,a=new N(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new Y((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=ne(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=ne(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Fh(e,n));let o=this.Ir.get(e);o===void 0&&(o=B(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.Tr=new ct(st.Er),this.dr=new ct(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new st(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new N(new X([])),n=new st(e,t),s=new st(e,t+1),o=[];return this.dr.forEachInRange([n,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new N(new X([])),n=new st(e,t),s=new st(e,t+1);let o=B();return this.dr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new st(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return N.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ct(st.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mh(o,e,n,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),s=new st(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],a=>{const c=this.Dr(a.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ct(q);return e.forEach(s=>{const o=new st(s,0),a=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{n=n.add(c.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;N.isDocumentKey(o)||(o=o.child(""));const a=new st(new N(o),0);let c=new ct(q);return this.br.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){H(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(e.mutations,s=>{const o=new st(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new st(e,0),s=this.br.firstAfterOrEqual(n);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.Mr=t,this.docs=function(){return new Y(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=Mt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Mt();const a=e.path,c=new N(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ju(Yu(p),n)<=0||(s.has(p.key)||hr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M()}Or(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new _d(this)}getSize(t){return R.resolve(this.size)}}class _d extends ud{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.persistence=t,this.Nr=new Ce(e=>Vs(e),xs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Os,this.targetCount=0,this.kr=be.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new be(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Rs(0),this.Kr=!1,this.Kr=!0,this.$r=new md,this.referenceDelegate=t(this),this.Ur=new vd(this),this.indexManager=new ld,this.remoteDocumentCache=function(s){return new yd(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new od(e),this.Gr=new fd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new gd(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){x("MemoryPersistence","Starting transaction:",t);const s=new Ed(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Ed extends th{constructor(t){super(),this.currentSequenceNumber=t}}class Bs{constructor(t){this.persistence=t,this.Jr=new Os,this.Yr=null}static Zr(t){return new Bs(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=N.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Us(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ic()?8:eh(Ec())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Td;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(Qe()<=$.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Qe()<=$.DEBUG&&x("QueryEngine","Query:",pe(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Qe()<=$.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):R.resolve())}Yi(t,e){if(Do(e))return R.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=fs(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=B(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,fs(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,n,s){return Do(e)||s.isEqual(F.min())?R.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,s)?R.resolve(null):(Qe()<=$.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pe(e)),this.rs(t,a,e,Xu(s,-1)).next(c=>c))})}ts(t,e){let n=new ct(Pa(t));return e.forEach((s,o)=>{hr(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return Qe()<=$.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",pe(e)),this.Ji.getDocumentsMatchingQuery(t,e,Wt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Y(q),this._s=new Ce(o=>Vs(o),xs),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function bd(r,t,e,n){return new Ad(r,t,e,n)}async function Xa(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=B();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Sd(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const v=d.batch,A=v.keys();let S=R.resolve();return A.forEach(P=>{S=S.next(()=>p.getEntry(h,P)).next(L=>{const V=d.docVersions.get(P);H(V!==null),L.version.compareTo(V)<0&&(v.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=B();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Ya(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Rd(r,t){const e=O(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((p,v)=>{const A=s.get(v);if(!A)return;c.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,v)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?S=S.withResumeToken(ut.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),s=s.insert(v,S),function(L,V,z){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(A,S,p)&&c.push(e.Ur.updateTargetData(o,S))});let h=Mt(),d=B();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Dd(o,a,t.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!n.isEqual(F.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(v=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return R.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Dd(r,t,e){let n=B(),s=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Mt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Pd(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Cd(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,R.resolve(s)):e.Ur.allocateTargetId(n).next(a=>(s=new $t(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function _s(r,t,e){const n=O(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!pn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Bo(r,t,e){const n=O(r);let s=F.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=O(h),A=v._s.get(p);return A!==void 0?R.resolve(v.os.get(A)):v.Ur.getTargetData(d,p)}(n,a,St(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:B())).next(c=>(Vd(n,wh(t),c),{documents:c,Ts:o})))}function Vd(r,t,e){let n=r.us.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Uo{constructor(){this.activeTargetIds=Sh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xd{constructor(){this.so=new Uo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Uo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function Zr(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Md extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,a){const c=Zr(),h=this.xo(e,n.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(p=>(x("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Ee("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",s),p})}Lo(e,n,s,o,a,c){return this.Mo(e,n,s,o,a)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const s=kd[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=Zr();return new Promise((a,c)=>{const h=new ha;h.setWithCredentials(!0),h.listenOnce(da.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const p=h.getResponseJson();x(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case zn.TIMEOUT:x(mt,`RPC '${t}' ${o} timed out`),c(new k(D.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const v=h.getStatus();if(x(mt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const P=function(V){const z=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(z)>=0?z:D.UNKNOWN}(S.status);c(new k(P,S.message))}else c(new k(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new k(D.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);x(mt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,n,15)})}Bo(t,e,n){const s=Zr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ma(),c=pa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");x(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);let A=!1,S=!1;const P=new Nd({Io:V=>{S?x(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(x(mt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),A=!0),x(mt,`RPC '${t}' stream ${s} sending:`,V),v.send(V))},To:()=>v.close()}),L=(V,z,K)=>{V.listen(z,G=>{try{K(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return L(v,Xe.EventType.OPEN,()=>{S||(x(mt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),L(v,Xe.EventType.CLOSE,()=>{S||(S=!0,x(mt,`RPC '${t}' stream ${s} transport closed`),P.So())}),L(v,Xe.EventType.ERROR,V=>{S||(S=!0,Ee(mt,`RPC '${t}' stream ${s} transport errored:`,V),P.So(new k(D.UNAVAILABLE,"The operation could not be completed")))}),L(v,Xe.EventType.MESSAGE,V=>{var z;if(!S){const K=V.data[0];H(!!K);const G=K,rt=G.error||((z=G[0])===null||z===void 0?void 0:z.error);if(rt){x(mt,`RPC '${t}' stream ${s} received error:`,rt);const Ct=rt.status;let it=function(y){const _=tt[y];if(_!==void 0)return Ua(_)}(Ct),E=rt.message;it===void 0&&(it=D.INTERNAL,E="Unknown error status: "+Ct+" with message "+rt.message),S=!0,P.So(new k(it,E)),v.close()}else x(mt,`RPC '${t}' stream ${s} received:`,K),P.bo(K)}}),L(c,fa.STAT_EVENT,V=>{V.stat===ls.PROXY?x(mt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===ls.NOPROXY&&x(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(r){return new Kh(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,s,o,a,c,h){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ja(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Nt(e.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new k(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fd extends Za{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Qh(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Rt(a.readTime):F.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=ys(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ds(h)?{documents:Jh(o,h)}:{query:Zh(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=qa(o,a.resumeToken);const d=ps(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=nr(o,a.snapshotVersion.toTimestamp());const d=ps(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=ed(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=ys(this.serializer),e.removeTarget=t,this.a_(e)}}class Od extends Za{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return H(!!t.streamToken),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Yh(t.writeResults,t.commitTime),n=Rt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=ys(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Xh(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ms(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(D.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,ms(e,n),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ud{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nt(e),this.D_=!1):x("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{ce(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=O(h);d.L_.add(4),await yn(d),d.q_.set("Unknown"),d.L_.delete(4),await gr(d)}(this))})}),this.q_=new Ud(n,s)}}async function gr(r){if(ce(r))for(const t of r.B_)await t(!0)}async function yn(r){for(const t of r.B_)await t(!1)}function tl(r,t){const e=O(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),zs(e)?qs(e):Ve(e).r_()&&js(e,t))}function $s(r,t){const e=O(r),n=Ve(e);e.N_.delete(t),n.r_()&&el(e,t),e.N_.size===0&&(n.r_()?n.o_():ce(e)&&e.q_.set("Unknown"))}function js(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ve(r).A_(t)}function el(r,t){r.Q_.xe(t),Ve(r).R_(t)}function qs(r){r.Q_=new jh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Ve(r).start(),r.q_.v_()}function zs(r){return ce(r)&&!Ve(r).n_()&&r.N_.size>0}function ce(r){return O(r).L_.size===0}function nl(r){r.Q_=void 0}async function jd(r){r.q_.set("Online")}async function qd(r){r.N_.forEach((t,e)=>{js(r,t)})}async function zd(r,t){nl(r),zs(r)?(r.q_.M_(t),qs(r)):r.q_.set("Unknown")}async function Hd(r,t,e){if(r.q_.set("Online"),t instanceof ja&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(r,t)}catch(n){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rr(r,n)}else if(t instanceof Wn?r.Q_.Ke(t):t instanceof $a?r.Q_.He(t):r.Q_.We(t),!e.isEqual(F.min()))try{const n=await Ya(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(ut.EMPTY_BYTE_STRING,p.snapshotVersion)),el(o,h);const v=new $t(p.target,h,d,p.sequenceNumber);js(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){x("RemoteStore","Failed to raise snapshot:",n),await rr(r,n)}}async function rr(r,t,e){if(!pn(t))throw t;r.L_.add(1),await yn(r),r.q_.set("Offline"),e||(e=()=>Ya(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await gr(r)})}function rl(r,t){return t().catch(e=>rr(r,e,t))}async function yr(r){const t=O(r),e=Qt(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Kd(t);)try{const s=await Pd(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Wd(t,s)}catch(s){await rr(t,s)}sl(t)&&il(t)}function Kd(r){return ce(r)&&r.O_.length<10}function Wd(r,t){r.O_.push(t);const e=Qt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function sl(r){return ce(r)&&!Qt(r).n_()&&r.O_.length>0}function il(r){Qt(r).start()}async function Gd(r){Qt(r).p_()}async function Qd(r){const t=Qt(r);for(const e of r.O_)t.m_(e.mutations)}async function Xd(r,t,e){const n=r.O_.shift(),s=Ns.from(n,t,e);await rl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await yr(r)}async function Yd(r,t){t&&Qt(r).V_&&await async function(n,s){if(function(a){return Bh(a)&&a!==D.ABORTED}(s.code)){const o=n.O_.shift();Qt(n).s_(),await rl(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await yr(n)}}(r,t),sl(r)&&il(r)}async function jo(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const n=ce(e);e.L_.add(3),await yn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await gr(e)}async function Jd(r,t){const e=O(r);t?(e.L_.delete(2),await gr(e)):t||(e.L_.add(2),await yn(e),e.q_.set("Unknown"))}function Ve(r){return r.K_||(r.K_=function(e,n,s){const o=O(e);return o.w_(),new Fd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:jd.bind(null,r),Ro:qd.bind(null,r),mo:zd.bind(null,r),d_:Hd.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),zs(r)?qs(r):r.q_.set("Unknown")):(await r.K_.stop(),nl(r))})),r.K_}function Qt(r){return r.U_||(r.U_=function(e,n,s){const o=O(e);return o.w_(),new Od(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Gd.bind(null,r),mo:Yd.bind(null,r),f_:Qd.bind(null,r),g_:Xd.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await yr(r)):(await r.U_.stop(),r.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,c=new Hs(t,e,a,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ks(r,t){if(Nt("AsyncQueue",`${t}: ${r}`),pn(r))return new k(D.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=Ye(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new we(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new we;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.W_=new Y(N.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Se{constructor(t,e,n,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Se(t,e,we.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class tf{constructor(){this.queries=zo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=O(e),o=s.queries;s.queries=zo(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(n)})})(this,new k(D.ABORTED,"Firestore shutting down"))}}function zo(){return new Ce(r=>Da(r),ur)}async function ef(r,t){const e=O(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new Zd,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ks(a,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ws(e)}async function nf(r,t){const e=O(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rf(r,t){const e=O(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(n=!0);a.z_=s}}n&&Ws(e)}function sf(r,t,e){const n=O(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function Ws(r){r.Y_.forEach(t=>{t.next()})}var vs,Ho;(Ho=vs||(vs={})).ea="default",Ho.Cache="cache";class of{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Se(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==vs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.key=t}}class al{constructor(t){this.key=t}}class af{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=Pa(t),this.Ra=new we(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new qo,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const A=s.get(p),S=hr(this.query,v)?v:null,P=!!A&&this.mutatedKeys.has(A.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;A&&S?A.data.isEqual(S.data)?P!==L&&(n.track({type:3,doc:S}),V=!0):this.ga(A,S)||(n.track({type:2,doc:S}),V=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!A&&S?(n.track({type:0,doc:S}),V=!0):A&&!S&&(n.track({type:1,doc:A}),V=!0,(h||d)&&(c=!0)),V&&(S?(a=a.add(S),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Ra:a,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,v)=>function(S,P){const L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return L(S)-L(P)}(p.type,v.type)||this.Aa(p.doc,v.doc)),this.pa(n),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Se(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new al(n))}),this.da.forEach(n=>{t.has(n)||e.push(new ol(n))}),e}ba(t){this.Ta=t.Ts,this.da=B();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Se.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class lf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class cf{constructor(t){this.key=t,this.va=!1}}class uf{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ce(c=>Da(c),ur),this.Ma=new Map,this.xa=new Set,this.Oa=new Y(N.comparator),this.Na=new Map,this.La=new Os,this.Ba={},this.ka=new Map,this.qa=be.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hf(r,t,e=!0){const n=fl(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await ll(n,t,e,!0),s}async function df(r,t){const e=fl(r);await ll(e,t,!0,!1)}async function ll(r,t,e,n){const s=await Cd(r.localStore,St(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await ff(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&tl(r.remoteStore,s),c}async function ff(r,t,e,n,s){r.Ka=(v,A,S)=>async function(L,V,z,K){let G=V.view.ma(z);G.ns&&(G=await Bo(L.localStore,V.query,!1).then(({documents:E})=>V.view.ma(E,G)));const rt=K&&K.targetChanges.get(V.targetId),Ct=K&&K.targetMismatches.get(V.targetId)!=null,it=V.view.applyChanges(G,L.isPrimaryClient,rt,Ct);return Wo(L,V.targetId,it.wa),it.snapshot}(r,v,A,S);const o=await Bo(r.localStore,t,!0),a=new af(t,o.Ts),c=a.ma(o.documents),h=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(c,r.isPrimaryClient,h);Wo(r,e,d.wa);const p=new lf(t,e,a);return r.Fa.set(t,p),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function pf(r,t,e){const n=O(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(a=>!ur(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _s(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&$s(n.remoteStore,s.targetId),ws(n,s.targetId)}).catch(fn)):(ws(n,s.targetId),await _s(n.localStore,s.targetId,!0))}async function mf(r,t){const e=O(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),$s(e.remoteStore,n.targetId))}async function gf(r,t,e){const n=If(r);try{const s=await function(a,c){const h=O(a),d=nt.now(),p=c.reduce((S,P)=>S.add(P.key),B());let v,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Mt(),L=B();return h.cs.getEntries(S,p).next(V=>{P=V,P.forEach((z,K)=>{K.isValidDocument()||(L=L.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,P)).next(V=>{v=V;const z=[];for(const K of c){const G=kh(K,v.get(K.key).overlayedDocument);G!=null&&z.push(new Xt(K.key,G,wa(G.value.mapValue),bt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,z,c)}).next(V=>{A=V;const z=V.applyToLocalDocumentSet(v,L);return h.documentOverlayCache.saveOverlays(S,V.batchId,z)})}).then(()=>({batchId:A.batchId,changes:Va(v)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new Y(q)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(n,s.batchId,e),await _n(n,s.changes),await yr(n.remoteStore)}catch(s){const o=Ks(s,"Failed to persist write");e.reject(o)}}async function cl(r,t){const e=O(r);try{const n=await Rd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?H(a.va):s.removedDocuments.size>0&&(H(a.va),a.va=!1))}),await _n(e,n,t)}catch(n){await fn(n)}}function Ko(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=O(a);h.onlineState=c;let d=!1;h.queries.forEach((p,v)=>{for(const A of v.j_)A.Z_(c)&&(d=!0)}),d&&Ws(h)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function yf(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let a=new Y(N.comparator);a=a.insert(o,yt.newNoDocument(o,F.min()));const c=B().add(o),h=new pr(F.min(),new Map,new Y(q),a,c);await cl(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),Gs(n)}else await _s(n.localStore,t,!1).then(()=>ws(n,t,e)).catch(fn)}async function _f(r,t){const e=O(r),n=t.batch.batchId;try{const s=await Sd(e.localStore,t);hl(e,n,null),ul(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _n(e,s)}catch(s){await fn(s)}}async function vf(r,t,e){const n=O(r);try{const s=await function(a,c){const h=O(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(H(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(n.localStore,t);hl(n,t,e),ul(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await _n(n,s)}catch(s){await fn(s)}}function ul(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function hl(r,t,e){const n=O(r);let s=n.Ba[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function ws(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||dl(r,n)})}function dl(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&($s(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Gs(r))}function Wo(r,t,e){for(const n of e)n instanceof ol?(r.La.addReference(n.key,t),wf(r,n)):n instanceof al?(x("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||dl(r,n.key)):M()}function wf(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(x("SyncEngine","New document in limbo: "+e),r.xa.add(n),Gs(r))}function Gs(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new N(X.fromString(t)),n=r.qa.next();r.Na.set(n,new cf(e)),r.Oa=r.Oa.insert(e,n),tl(r.remoteStore,new $t(St(Ra(e.path)),n,"TargetPurposeLimboResolution",Rs.oe))}}async function _n(r,t,e){const n=O(r),s=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((c,h)=>{a.push(n.Ka(h,t,e).then(d=>{var p;if((d||e)&&n.isPrimaryClient){const v=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=Us.Wi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),n.Ca.d_(s),await async function(h,d){const p=O(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>R.forEach(d,A=>R.forEach(A.$i,S=>p.persistence.referenceDelegate.addReference(v,A.targetId,S)).next(()=>R.forEach(A.Ui,S=>p.persistence.referenceDelegate.removeReference(v,A.targetId,S)))))}catch(v){if(!pn(v))throw v;x("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const A=v.targetId;if(!v.fromCache){const S=p.os.get(A),P=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(A,L)}}}(n.localStore,o))}async function Ef(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const n=await Xa(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new k(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await _n(e,n.hs)}}function Tf(r,t){const e=O(r),n=e.Na.get(t);if(n&&n.va)return B().add(n.key);{let s=B();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function fl(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=cl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yf.bind(null,t),t.Ca.d_=rf.bind(null,t.eventManager),t.Ca.$a=sf.bind(null,t.eventManager),t}function If(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_f.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vf.bind(null,t),t}class sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=mr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return bd(this.persistence,new Id,t.initialUser,this.serializer)}Ga(t){return new wd(Bs.Zr,this.serializer)}Wa(t){return new xd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sr.provider={build:()=>new sr};class Es{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ko(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,this.syncEngine),await Jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tf}()}createDatastore(t){const e=mr(t.databaseInfo.databaseId),n=function(o){return new Md(o)}(t.databaseInfo);return function(o,a,c,h){return new Bd(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,c){return new $d(n,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ko(this.syncEngine,e,0),function(){return $o.D()?new $o:new Ld}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,p){const v=new uf(s,o,a,c,h,d);return p&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=O(s);x("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await yn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Es.provider={build:()=>new Es};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Nt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ks(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function es(r,t){r.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Xa(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Go(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Sf(r);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>jo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>jo(t.remoteStore,s)),r._onlineComponents=t}async function Sf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await es(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ee("Error using user provided cache. Falling back to memory cache: "+e),await es(r,new sr)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await es(r,new sr);return r._offlineComponents}async function pl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Go(r,r._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Go(r,new Es))),r._onlineComponents}function Rf(r){return pl(r).then(t=>t.syncEngine)}async function Df(r){const t=await pl(r),e=t.eventManager;return e.onListen=hf.bind(null,t.syncEngine),e.onUnlisten=pf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=df.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mf.bind(null,t.syncEngine),e}function Pf(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new Af({next:A=>{p.Za(),a.enqueueAndForget(()=>nf(o,v)),A.fromCache&&h.source==="server"?d.reject(new k(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),v=new of(c,p,{includeMetadataChanges:!0,_a:!0});return ef(o,v)}(await Df(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(r,t,e){if(!e)throw new k(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Cf(r,t,e,n){if(t===!0&&n===!0)throw new k(D.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Xo(r){if(!N.isDocumentKey(r))throw new k(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Yo(r){if(N.isDocumentKey(r))throw new k(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Qs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function ae(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Qs(r);throw new k(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ml((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _r{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $u;switch(n.type){case"firstParty":return new Hu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qo.get(e);n&&(x("ComponentProvider","Removing Datastore"),Qo.delete(e),n.terminate())}(this),Promise.resolve()}}function Vf(r,t,e,n={}){var s;const o=(r=ae(r,_r))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=gt.MOCK_USER;else{c=wc(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new k(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(d)}r._authCredentials=new ju(new ga(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vr(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Ht extends vr{constructor(t,e,n){super(t,e,Ra(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new N(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function Xs(r,t,...e){if(r=Kt(r),gl("collection","path",t),r instanceof _r){const n=X.fromString(t,...e);return Yo(n),new Ht(r,null,n)}{if(!(r instanceof It||r instanceof Ht))throw new k(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Yo(n),new Ht(r.firestore,null,n)}}function Ys(r,t,...e){if(r=Kt(r),arguments.length===1&&(t=ya.newId()),gl("doc","path",t),r instanceof _r){const n=X.fromString(t,...e);return Xo(n),new It(r,null,new N(n))}{if(!(r instanceof It||r instanceof Ht))throw new k(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Xo(n),new It(r.firestore,r instanceof Ht?r.converter:null,new N(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ja(this,"async_queue_retry"),this.Vu=()=>{const n=ts();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ts();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ts();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!pn(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Nt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Hs.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class vn extends _r{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Zo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zo(t),this._firestoreClient=void 0,await t}}}function xf(r,t){const e=typeof r=="object"?r:Pu(),n=typeof r=="string"?r:"(default)",s=bu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=_c("firestore");o&&Vf(s,...o)}return s}function yl(r){if(r._terminated)throw new k(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Lf(r),r._firestoreClient}function Lf(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,d,p){return new sh(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ml(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new bf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Re(ut.fromBase64String(t))}catch(e){throw new k(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Re(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=/^__.*__$/;class Nf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Xt(t,this.data,this.fieldMask,e,this.fieldTransforms):new mn(t,this.data,e,this.fieldTransforms)}}class _l{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Xt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function vl(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ti{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ir(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(vl(this.Cu)&&kf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Mf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||mr(t)}Qu(t,e,n,s=!1){return new ti({Cu:t,methodName:e,qu:n,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(r){const t=r._freezeSettings(),e=mr(r._databaseId);return new Mf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Ff(r,t,e,n,s,o={}){const a=r.Qu(o.merge||o.mergeFields?2:0,t,e,s);ni("Data must be an object, but it was:",a,n);const c=El(n,a);let h,d;if(o.merge)h=new Tt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const A=Ts(t,v,e);if(!a.contains(A))throw new k(D.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Il(p,A)||p.push(A)}h=new Tt(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new Nf(new wt(c),h,d)}class Tr extends Er{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Tr}}class ei extends Er{_toFieldTransform(t){return new Ch(t.path,new un)}isEqual(t){return t instanceof ei}}function Of(r,t,e,n){const s=r.Qu(1,t,e);ni("Data must be an object, but it was:",s,n);const o=[],a=wt.empty();le(n,(h,d)=>{const p=ri(t,h,e);d=Kt(d);const v=s.Nu(p);if(d instanceof Tr)o.push(p);else{const A=Ir(d,v);A!=null&&(o.push(p),a.set(p,A))}});const c=new Tt(o);return new _l(a,c,s.fieldTransforms)}function Bf(r,t,e,n,s,o){const a=r.Qu(1,t,e),c=[Ts(t,n,e)],h=[s];if(o.length%2!=0)throw new k(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ts(t,o[A])),h.push(o[A+1]);const d=[],p=wt.empty();for(let A=c.length-1;A>=0;--A)if(!Il(d,c[A])){const S=c[A];let P=h[A];P=Kt(P);const L=a.Nu(S);if(P instanceof Tr)d.push(S);else{const V=Ir(P,L);V!=null&&(d.push(S),p.set(S,V))}}const v=new Tt(d);return new _l(p,v,a.fieldTransforms)}function Ir(r,t){if(Tl(r=Kt(r)))return ni("Unsupported field value:",t,r),El(r,t);if(r instanceof Er)return function(n,s){if(!vl(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const c of n){let h=Ir(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rh(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:nr(s.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nr(s.serializer,o)}}if(n instanceof Js)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Re)return{bytesValue:qa(s.serializer,n._byteString)};if(n instanceof It){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fs(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Zs)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ls(c.serializer,h)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Qs(n)}`)}(r,t)}function El(r,t){const e={};return _a(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(r,(n,s)=>{const o=Ir(s,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Tl(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Js||r instanceof Re||r instanceof It||r instanceof Er||r instanceof Zs)}function ni(r,t,e){if(!Tl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Qs(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Ts(r,t,e){if((t=Kt(t))instanceof wr)return t._internalPath;if(typeof t=="string")return ri(r,t);throw ir("Field path arguments must be of type string or ",r,!1,void 0,e)}const Uf=new RegExp("[~\\*/\\[\\]]");function ri(r,t,e){if(t.search(Uf)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new wr(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ir(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new k(D.INVALID_ARGUMENT,c+r+h)}function Il(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $f(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $f extends Al{data(){return super.data()}}function bl(r,t){return typeof t=="string"?ri(r,t):t instanceof wr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qf{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return le(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new Zs(o)}convertGeoPoint(t){return new Js(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ps(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);H(Qa(n));const s=new ln(n.get(1),n.get(3)),o=new N(n.popFirst(5));return s.isEqual(e)||Nt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hf extends Al{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Gn extends Hf{data(t={}){return super.data(t)}}class Kf{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new qn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Gn(this._firestore,this._userDataWriter,n.key,n,new qn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new Gn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Gn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Wf(c.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Wf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Gf extends qf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Re(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Sl(r){r=ae(r,vr);const t=ae(r.firestore,vn),e=yl(t),n=new Gf(t);return jf(r._query),Pf(e,r._query).then(s=>new Kf(t,n,r,s))}function Qf(r,t,e,...n){r=ae(r,It);const s=ae(r.firestore,vn),o=wl(s);let a;return a=typeof(t=Kt(t))=="string"||t instanceof wr?Bf(o,"updateDoc",r._key,t,e,n):Of(o,"updateDoc",r._key,t),si(s,[a.toMutation(r._key,bt.exists(!0))])}function Xf(r){return si(ae(r.firestore,vn),[new ks(r._key,bt.none())])}function Yf(r,t){const e=ae(r.firestore,vn),n=Ys(r),s=zf(r.converter,t);return si(e,[Ff(wl(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,bt.exists(!1))]).then(()=>n)}function si(r,t){return function(n,s){const o=new zt;return n.asyncQueue.enqueueAndForget(async()=>gf(await Rf(n),s,o)),o.promise}(yl(r),t)}function Is(){return new ei("serverTimestamp")}(function(t,e=!0){(function(s){Pe=s})(Du),Yn(new rn("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new vn(new qu(n.getProvider("auth-internal")),new Wu(n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ve(_o,"4.7.3",t),ve(_o,"4.7.3","esm2017")})();async function ye(r){try{if(window.useLocalStorage)return localStorage.setItem("seminarPlan",JSON.stringify(r)),{success:!0,message:"로컬 스토리지에 저장되었습니다."};{const t=Array.isArray(r)?r[0]:r;return{success:!0,message:"Firebase에 저장되었습니다.",id:(await Yf(Xs(window.db,"seminarPlans"),{...t,createdAt:Is(),updatedAt:Is()})).id}}}catch(t){return console.error("데이터 저장 오류:",t),{success:!1,message:"저장 중 오류가 발생했습니다: "+t.message}}}async function or(){var r;try{if(window.useLocalStorage){const t=localStorage.getItem("seminarPlans");return t?{success:!0,data:JSON.parse(t),id:"local",message:"로컬 스토리지에서 데이터를 불러왔습니다."}:{success:!0,data:null,id:null,message:"로컬 스토리지에 저장된 데이터가 없습니다."}}else{const t=await Sl(Xs(window.db,"seminarPlans"));if(t.empty)return{success:!0,data:null,id:null,message:"Firebase에 저장된 데이터가 없습니다."};{const e=[];return t.forEach(n=>{e.push({id:n.id,...n.data()})}),e.sort((n,s)=>{const o=parseInt(n.session)||0,a=parseInt(s.session)||0;if(o!==a)return a-o;const c=new Date(n.datetime||"1900-01-01");return new Date(s.datetime||"1900-01-01")-c}),{success:!0,data:e[0],id:(r=e[0])==null?void 0:r.id,message:"Firebase에서 데이터를 불러왔습니다."}}}}catch(t){return console.error("데이터 불러오기 오류:",t),{success:!1,message:"데이터 불러오기 중 오류가 발생했습니다: "+t.message}}}async function _e(r,t){try{if(window.useLocalStorage){const e=JSON.parse(localStorage.getItem("seminarPlans")||"[]"),n=e.findIndex(s=>s.id===r);return n!==-1?(e[n]={...e[n],...t},localStorage.setItem("seminarPlans",JSON.stringify(e)),{success:!0,id:r,message:"로컬 스토리지 데이터가 업데이트되었습니다."}):{success:!1,message:"로컬 스토리지에서 해당 ID를 찾을 수 없습니다."}}else return await Qf(Ys(window.db,"seminarPlans",r),{...t,updatedAt:Is()}),{success:!0,id:r,message:"Firebase 데이터가 업데이트되었습니다."}}catch(e){return console.error("데이터 업데이트 오류:",e),{success:!1,message:"데이터 업데이트 중 오류가 발생했습니다: "+e.message}}}async function ii(r){try{if(window.useLocalStorage){const e=JSON.parse(localStorage.getItem("seminarPlans")||"[]").filter(n=>n.id!==r);return localStorage.setItem("seminarPlans",JSON.stringify(e)),{success:!0,message:"로컬 스토리지 데이터가 삭제되었습니다."}}else return await Xf(Ys(window.db,"seminarPlans",r)),{success:!0,message:"Firebase 데이터가 삭제되었습니다."}}catch(t){return console.error("데이터 삭제 오류:",t),{success:!1,message:"데이터 삭제 중 오류가 발생했습니다: "+t.message}}}async function ar(){try{if(window.useLocalStorage){const r=localStorage.getItem("seminarPlans");return r?{success:!0,data:JSON.parse(r),message:"로컬 스토리지에서 모든 계획을 불러왔습니다."}:{success:!0,data:[],message:"로컬 스토리지에 저장된 계획이 없습니다."}}else{const r=await Sl(Xs(window.db,"seminarPlans")),t=[];return r.forEach(e=>{const n=e.data();t.push({id:e.id,...n})}),t.sort((e,n)=>{const s=parseInt(e.session)||0,o=parseInt(n.session)||0;if(s!==o)return o-s;const a=new Date(e.datetime||"1900-01-01");return new Date(n.datetime||"1900-01-01")-a}),console.log(`🔥 Firebase에서 총 ${t.length}개의 계획을 로드했습니다.`),{success:!0,data:t,message:"Firebase에서 모든 계획을 불러왔습니다."}}}catch(r){return console.error("모든 계획 불러오기 오류:",r),{success:!1,message:"계획 목록 불러오기 중 오류가 발생했습니다: "+r.message}}}window.saveData=ye;window.loadData=or;window.updateData=_e;window.deleteData=ii;window.loadAllPlans=ar;window.useLocalStorage=!1;window.saveData=ye;window.loadData=or;window.updateData=_e;window.deleteData=ii;window.loadAllPlans=ar;class Jf{constructor(){this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.initializeApp()}async initializeApp(){await this.checkLibraries(),await this.init()}async checkLibraries(){console.log("🔍 내보내기 라이브러리 상태 확인 중...");let t=0;const e=30;for(;t<e;){if(window.exportLibraries){console.log("✅ 내보내기 라이브러리 상태 확인 완료");break}await new Promise(n=>setTimeout(n,100)),t++}t===e&&console.warn("⚠️ 내보내기 라이브러리 상태 확인 시간 초과"),window.exportLibraries&&console.log("📊 내보내기 라이브러리 상태:",window.exportLibraries)}getLibrary(t){var e;return!!(window.exportLibraries&&window.exportLibraries[t]||t==="jsPDF"&&(window.jsPDF||(e=window.jspdf)!=null&&e.jsPDF)||t==="saveAs"&&window.saveAs)}getLibraryInstance(t){var e;if(window.exportLibraries&&!window.exportLibraries[t])return console.warn(`⚠️ ${t} 라이브러리가 로드되지 않았습니다.`),null;if(t==="jsPDF"){if(window.jsPDF)return console.log(`🎯 ${t} 라이브러리 (window.jsPDF) 접근 성공`),window.jsPDF;if((e=window.jspdf)!=null&&e.jsPDF)return console.log(`🎯 ${t} 라이브러리 (window.jspdf.jsPDF) 접근 성공`),window.jspdf.jsPDF}return t==="saveAs"&&window.saveAs?(console.log(`🎯 ${t} 라이브러리 (window.saveAs) 접근 성공`),window.saveAs):(console.error(`❌ ${t} 라이브러리를 찾을 수 없습니다.`),null)}async init(){this.bindEvents(),await this.loadInitialData(),this.addDefaultRows()}bindEvents(){document.getElementById("initBtn").addEventListener("click",()=>this.resetForm()),document.getElementById("saveBtn").addEventListener("click",()=>this.saveData()),document.getElementById("deleteBtn").addEventListener("click",()=>this.deleteData()),document.getElementById("loadBtn").addEventListener("click",()=>this.showSearchModal()),document.getElementById("addTimeRowBtn").addEventListener("click",()=>this.addTimeRow()),document.getElementById("addAttendeeRowBtn").addEventListener("click",()=>this.addAttendeeRow()),document.getElementById("exportPdfBtn").addEventListener("click",()=>this.exportToPDF()),document.getElementById("closeModalBtn").addEventListener("click",()=>this.closeModal()),document.getElementById("newPlanBtn").addEventListener("click",()=>this.newPlan()),this.bindInputEvents()}bindInputEvents(){["goal","location","attendees"].forEach(n=>{const s=document.getElementById(n);s&&s.addEventListener("input",o=>{this.currentData[n]=o.target.value})});const e=document.getElementById("datetime");e&&(e.addEventListener("input",n=>{this.currentData.datetime=n.target.value,this.validateDateTimeFormat(n.target)}),e.addEventListener("blur",n=>{this.validateDateTimeFormat(n.target)}))}validateDateTimeFormat(t){const e=t.value.trim();if(!e){t.classList.remove("border-red-500","border-green-500"),t.classList.add("border-gray-300");return}const s=[/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,/^\d{4}-\d{2}-\d{2}$/,/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/,/^\d{4}\/\d{2}\/\d{2}$/].some(a=>a.test(e)),o=!isNaN(new Date(e).getTime());s&&o?(t.classList.remove("border-red-500"),t.classList.add("border-green-500")):(t.classList.remove("border-green-500"),t.classList.add("border-red-500"))}async loadInitialData(){try{const t=await or();t.success&&t.data?(this.currentData=t.data,this.currentDocumentId=t.id,this.currentData.timeSchedule||(this.currentData.timeSchedule=[]),this.currentData.attendeeList||(this.currentData.attendeeList=[]),this.populateForm(),console.log("Firebase에서 데이터를 성공적으로 불러왔습니다.")):(console.log("저장된 데이터가 없습니다. 기본값으로 초기화합니다."),this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.populateForm())}catch(t){console.error("초기 데이터 로드 오류:",t),this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.populateForm()}}populateForm(){this.currentData||(console.warn("currentData가 없습니다. 기본값으로 초기화합니다."),this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]}),Object.keys(this.currentData).forEach(t=>{try{if(t==="session")this.populateSessionField();else{const e=document.getElementById(t);e&&typeof this.currentData[t]=="string"&&(e.value=this.currentData[t])}}catch(e){console.warn(`필드 ${t} 채우기 중 오류:`,e)}}),this.populateTimeTable(),this.populateAttendeeTable()}addDefaultRows(){if(this.currentData||(this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]}),this.currentData.timeSchedule||(this.currentData.timeSchedule=[]),this.currentData.timeSchedule.length===0){const t=document.getElementById("timeTableBody"),e=document.createElement("tr");e.className="table-row-hover",e.innerHTML=`
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-index="0" data-field="type">
                        <option value="">선택</option>
                        <option value="발표">발표</option>
                        <option value="토의">토의</option>
                        <option value="정리">정리</option>
                        <option value="석식">석식</option>
                        <option value="보고">보고</option>
                    </select>
                </td>
                <td class="px-4 py-3 border-b">
                    <textarea class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                              placeholder="주요 내용을 입력하세요 (엔터로 줄바꿈)" 
                              rows="2"
                              data-index="0" data-field="content"></textarea>
                </td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="시간을 입력하세요 (예: 16:00)" 
                           data-index="0" data-field="time">
                </td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="담당자를 입력하세요" 
                           data-index="0" data-field="responsible">
                </td>
                <td class="px-4 py-3 border-b">
                    <button onclick="app.removeTimeRow(0)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `,t.appendChild(e),this.bindTimeRowEvents(e,0),this.currentData.timeSchedule[0]={type:"",content:"",time:"",responsible:""}}if(this.currentData.attendeeList.length===0){const t=document.getElementById("attendeeTableBody"),e=document.createElement("tr");e.className="table-row-hover",e.innerHTML=`
                <td class="px-4 py-3 border-b text-center">1</td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="성명을 입력하세요" 
                           data-index="0" data-field="name">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-index="0" data-field="position">
                        <option value="">선택하세요</option>
                        <option value="상무">상무</option>
                        <option value="선임">선임</option>
                        <option value="이사">이사</option>
                        <option value="전무">전무</option>
                        <option value="책임">책임</option>
                        <option value="팀장">팀장</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="직급을 직접 입력하세요" 
                           data-index="0" data-field="position-custom">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-index="0" data-field="department">
                        <option value="">선택하세요</option>
                        <option value="SI사업본부">SI사업본부</option>
                        <option value="AI사업본부">AI사업본부</option>
                        <option value="경영관리본부">경영관리본부</option>
                        <option value="전략사업본부">전략사업본부</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="소속을 직접 입력하세요" 
                           data-index="0" data-field="department"
                           id="departmentInput_0">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-index="0" data-field="work">
                        <option value="">선택하세요</option>
                        option value="본부장">본부장</option>
                        <option value="담당임원">담당임원</option>
                        <option value="담당간부">담당간부</option>
                        <option value="담당자">담당자</option>
                        <option value="기술지원팀장">기술지원팀장</option>
                        <option value="영업대표">영업대표</option>
                        <option value="프레임워크사업팀">프레임워크사업팀</option>
                        <option value="SK증권 SM">SK증권 SM</option>
                        <option value="라이나 생명 SM">라이나 생명 SM</option>
                        <option value="산업은행 SM">산업은행 SM</option>
                        <option value="삼성카드 SM">삼성카드 SM</option>
                        <option value="PM">PM</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="업무를 직접 입력하세요" 
                           data-index="0" data-field="work-custom">
                </td>
                <td class="px-4 py-3 border-b">
                    <button onclick="app.removeAttendeeRow(0)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `,t.appendChild(e),this.bindAttendeeRowEvents(e,0),this.currentData.attendeeList[0]={name:"",position:"",department:"",work:""}}}addTimeRow(){const t=document.getElementById("timeTableBody"),e=t.children.length,n=document.createElement("tr");n.className="table-row-hover",n.innerHTML=`
            <td class="px-4 py-3 border-b">
                <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-index="${e}" data-field="type">
                    <option value="">선택</option>
                    <option value="발표">발표</option>
                    <option value="토의">토의</option>
                    <option value="정리">정리</option>
                    <option value="석식">석식</option>
                    <option value="보고">보고</option>
                </select>
            </td>
            <td class="px-4 py-3 border-b">
                <textarea class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                          placeholder="주요 내용을 입력하세요 (엔터로 줄바꿈)" 
                          rows="2"
                          data-index="${e}" data-field="content"></textarea>
            </td>
            <td class="px-4 py-3 border-b">
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                       placeholder="시간을 입력하세요 (예: 16:00)" 
                       data-index="${e}" data-field="time">
            </td>
            <td class="px-4 py-3 border-b">
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                       placeholder="담당자를 입력하세요" 
                       data-index="${e}" data-field="responsible">
            </td>
            <td class="px-4 py-3 border-b">
                <button onclick="app.removeTimeRow(${e})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `,t.appendChild(n),this.bindTimeRowEvents(n,e),this.currentData.timeSchedule[e]={type:"",content:"",time:"",responsible:""}}addAttendeeRow(){const t=document.getElementById("attendeeTableBody"),e=t.children.length,n=document.createElement("tr");n.className="table-row-hover",n.innerHTML=`
            <td class="px-4 py-3 border-b text-center">${e+1}</td>
            <td class="px-4 py-3 border-b">
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                       placeholder="성명을 입력하세요" 
                       data-field="name">
            </td>
            <td class="px-4 py-3 border-b">
                <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        data-field="position">
                    <option value="">선택하세요</option>
                    <option value="상무">상무</option>
                    <option value="선임">선임</option>
                    <option value="이사">이사</option>
                    <option value="전무">전무</option>
                    <option value="책임">책임</option>
                    <option value="팀장">팀장</option>
                    <option value="직접입력">직접입력</option>
                </select>
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                       placeholder="직급을 직접 입력하세요" 
                       data-field="position-custom">
            </td>
            <td class="px-4 py-3 border-b">
                <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        data-field="department">
                    <option value="">선택하세요</option>
                    <option value="SI사업본부">SI사업본부</option>
                    <option value="AI사업본부">AI사업본부</option>
                    <option value="전략사업본부">전략사업본부</option>
                    <option value="경영관리본부">경영관리본부</option>
                    <option value="직접입력">직접입력</option>
                </select>
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                       placeholder="소속을 직접 입력하세요" 
                       data-field="department-custom">
            </td>
            <td class="px-4 py-3 border-b">
                <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        data-field="work">
                    <option value="">선택하세요</option>
                    <option value="본부장">본부장</option>
                    <option value="담당임원">담당임원</option>
                    <option value="담당간부">담당간부</option>
                    <option value="담당자">담당자</option>
                    <option value="기술지원팀장">기술지원팀장</option>
                    <option value="영업대표">영업대표</option>
                    <option value="프레임워크사업팀">프레임워크사업팀</option>
                    <option value="SK증권 SM">SK증권 SM</option>
                    <option value="라이나 생명 SM">라이나 생명 SM</option>
                    <option value="산업은행 SM">산업은행 SM</option>
                    <option value="삼성카드 SM">삼성카드 SM</option>
                    <option value="PM">PM</option>
                    <option value="직접입력">직접입력</option>
                </select>
                <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                       placeholder="업무를 직접 입력하세요" 
                       data-field="work-custom">
            </td>
            <td class="px-4 py-3 border-b">
                <button onclick="app.removeAttendeeRow(${e})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `,t.appendChild(n),this.bindAttendeeRowEvents(n,e);const s=n.querySelector('select[data-field="position"]'),o=n.querySelector('select[data-field="work"]');s&&s.addEventListener("change",a=>{this.toggleCustomPositionInput(e,a.target.value)}),o&&o.addEventListener("change",a=>{this.toggleCustomWorkInput(e,a.target.value)}),this.currentData.attendeeList[e]={name:"",position:"",department:"",work:""}}updateTimeSchedule(t,e,n){this.currentData.timeSchedule[t]&&(this.currentData.timeSchedule[t][e]=n)}updateAttendeeList(t,e,n){if(this.currentData.attendeeList[t]){if(this.currentData.attendeeList[t][e]=n,e==="department"){const s=document.activeElement;let o=null;s&&s.tagName==="SELECT"?o=s:s&&s.closest("tr")&&(o=s.closest("tr").querySelector('select[data-field="department"]'));const a=document.getElementById(`departmentInput_${t}`);n==="직접입력"?(o&&(o.style.display="none"),a&&(a.classList.remove("hidden"),a.focus())):(o&&(o.style.display="block"),a&&a.classList.add("hidden"))}e==="position"&&this.toggleCustomPositionInput(t,n),e==="work"&&this.toggleCustomWorkInput(t,n)}}toggleCustomPositionInput(t,e){const n=document.querySelector(`#attendeeTableBody tr:nth-child(${t+1})`);if(n){const s=n.querySelector('input[data-field="position-custom"]');s&&(e==="직접입력"?(s.classList.remove("hidden"),s.focus()):(s.classList.add("hidden"),s.value=""))}}toggleCustomWorkInput(t,e){const n=document.querySelector(`#attendeeTableBody tr:nth-child(${t+1})`);if(n){const s=n.querySelector('input[data-field="work-custom"]');s&&(e==="직접입력"?(s.classList.remove("hidden"),s.focus()):(s.classList.add("hidden"),s.value=""))}}removeTimeRow(t){const e=document.getElementById("timeTableBody");e.children.length>1&&(e.children[t].remove(),this.currentData.timeSchedule.splice(t,1),this.reorderTimeRows())}removeAttendeeRow(t){const e=document.getElementById("attendeeTableBody");e.children.length>1&&(e.children[t].remove(),this.currentData.attendeeList.splice(t,1),this.reorderAttendeeRows())}reorderTimeRows(){const t=document.getElementById("timeTableBody");Array.from(t.children).forEach((e,n)=>{e.querySelectorAll("input, select").forEach(a=>{a.onchange=c=>{this.updateTimeSchedule(n,this.getFieldName(a),c.target.value)}});const o=e.querySelector("button");o.onclick=()=>this.removeTimeRow(n)})}reorderAttendeeRows(){const t=document.getElementById("attendeeTableBody");Array.from(t.children).forEach((e,n)=>{const s=e.children[0];s.textContent=n+1,e.querySelectorAll("input").forEach(c=>{c.onchange=h=>{this.updateAttendeeList(n,this.getFieldName(c),h.target.value)}});const a=e.querySelector("button");a.onclick=()=>this.removeAttendeeRow(n)})}getFieldName(t){const e=t.placeholder;return e.includes("성명")?"name":e.includes("직급")?"position":e.includes("소속")?"department":e.includes("업무")?"work":e.includes("주요 내용")?"content":e.includes("시간")?"time":e.includes("담당자")?"responsible":""}populateTimeTable(){const t=document.getElementById("timeTableBody");t.innerHTML="",(!this.currentData.timeSchedule||!Array.isArray(this.currentData.timeSchedule))&&(this.currentData.timeSchedule=[]),this.currentData.timeSchedule.forEach((e,n)=>{const s=document.createElement("tr");s.className="table-row-hover",s.innerHTML=`
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-index="${n}" data-field="type">
                        <option value="">선택</option>
                        <option value="발표">발표</option>
                        <option value="토의">토의</option>
                        <option value="정리">정리</option>
                        <option value="석식">석식</option>
                        <option value="보고">보고</option>
                    </select>
                </td>
                <td class="px-4 py-3 border-b">
                    <textarea class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                              placeholder="주요 내용을 입력하세요 (엔터로 줄바꿈)" 
                              rows="2"
                              data-index="${n}" data-field="content"></textarea>
                </td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="시간을 입력하세요 (예: 16:00)" 
                           data-index="${n}" data-field="time">
                </td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="담당자를 입력하세요" 
                           data-index="${n}" data-field="responsible">
                </td>
                <td class="px-4 py-3 border-b">
                    <button onclick="app.removeTimeRow(${n})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `,t.appendChild(s);const o=s.querySelectorAll("input, select, textarea");o[0]&&(o[0].value=e.type||"",setTimeout(()=>{o[0].value=e.type||""},10)),o[1]&&(o[1].value=e.content||"",o[1].tagName==="TEXTAREA"?o[1].textContent=e.content||"":o[1].setAttribute("value",e.content||"")),o[2]&&(o[2].value=e.time||"",o[2].setAttribute("value",e.time||"")),o[3]&&(o[3].value=e.responsible||"",o[3].setAttribute("value",e.responsible||"")),this.bindTimeRowEvents(s,n)})}bindTimeRowEvents(t,e){t.querySelectorAll("input, select, textarea").forEach(s=>{s.addEventListener("input",o=>{this.updateTimeSchedule(e,s.dataset.field,o.target.value)}),s.addEventListener("change",o=>{this.updateTimeSchedule(e,s.dataset.field,o.target.value)}),s.addEventListener("blur",o=>{this.updateTimeSchedule(e,s.dataset.field,o.target.value)})})}bindAttendeeRowEvents(t,e){t.querySelectorAll("input, select").forEach(s=>{let o=s.dataset.field;o&&o.endsWith("-custom")&&(o=o.replace("-custom","")),s.addEventListener("input",a=>{this.updateAttendeeList(e,o,a.target.value)}),s.addEventListener("change",a=>{this.updateAttendeeList(e,o,a.target.value)}),s.addEventListener("blur",a=>{this.updateAttendeeList(e,o,a.target.value)})})}populateAttendeeTable(){const t=document.getElementById("attendeeTableBody");t.innerHTML="",(!this.currentData.attendeeList||!Array.isArray(this.currentData.attendeeList))&&(this.currentData.attendeeList=[]),this.currentData.attendeeList.forEach((e,n)=>{const s=document.createElement("tr");s.className="table-row-hover",s.innerHTML=`
                <td class="px-4 py-3 border-b text-center">${n+1}</td>
                <td class="px-4 py-3 border-b">
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                           placeholder="성명을 입력하세요" 
                           data-field="name"
                           onchange="app.updateAttendeeList(${n}, 'name', this.value)">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-field="position"
                            onchange="app.updateAttendeeList(${n}, 'position', this.value); app.toggleCustomPositionInput(${n}, this.value)">
                        <option value="">선택하세요</option>
                        <option value="상무">상무</option>
                        <option value="선임">선임</option>
                        <option value="이사">이사</option>
                        <option value="전무">전무</option>
                        <option value="책임">책임</option>
                        <option value="팀장">팀장</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="직급을 직접 입력하세요" 
                           data-field="position-custom"
                           onchange="app.updateAttendeeList(${n}, 'position', this.value)">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-field="department"
                            onchange="app.updateAttendeeList(${n}, 'department', this.value)">
                        <option value="">선택하세요</option>
                        <option value="SI사업본부">SI사업본부</option>
                        <option value="AI사업본부">AI사업본부</option>
                        <option value="경영관리본부">경영관리본부</option>
                        <option value="전략사업본부">전략사업본부</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="소속을 직접 입력하세요" 
                           data-field="department-custom"
                           onchange="app.updateAttendeeList(${n}, 'department', this.value)">
                </td>
                <td class="px-4 py-3 border-b">
                    <select class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            data-field="work"
                            onchange="app.updateAttendeeList(${n}, 'work', this.value); app.toggleCustomWorkInput(${n}, this.value)">
                        <option value="">선택하세요</option>
                        <option value="본부장">본부장</option>
                        <option value="담당임원">담당임원</option>
                        <option value="담당간부">담당간부</option>
                        <option value="담당자">담당자</option>
                        <option value="기술지원팀장">기술지원팀장</option>
                        <option value="영업대표">영업대표</option>
                        <option value="프레임워크사업팀">프레임워크사업팀</option>
                        <option value="SK증권 SM">SK증권 SM</option>
                        <option value="라이나 생명 SM">라이나 생명 SM</option>
                        <option value="산업은행 SM">산업은행 SM</option>
                        <option value="삼성카드 SM">삼성카드 SM</option>
                        <option value="PM">PM</option>
                        <option value="직접입력">직접입력</option>
                    </select>
                    <input type="text" class="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1 hidden" 
                           placeholder="업무를 직접 입력하세요" 
                           data-field="work-custom"
                           onchange="app.updateAttendeeList(${n}, 'work', this.value)">
                </td>
                <td class="px-4 py-3 border-b">
                    <button onclick="app.removeAttendeeRow(${n})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors duration-200">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `,t.appendChild(s);const o=s.querySelector('input[data-field="name"]');if(o&&(o.value=e.name||"",o.setAttribute("value",e.name||"")),e.position){const h=["상무","선임","이사","전무","책임","팀장"],d=s.querySelector('select[data-field="position"]'),p=s.querySelector('input[data-field="position-custom"]');h.includes(e.position)?d&&(d.value=e.position):(d&&(d.value="직접입력"),p&&(p.value=e.position,p.classList.remove("hidden")))}if(e.department){const h=["SI사업본부","AI사업본부","경영관리본부","전략사업본부"],d=s.querySelector('select[data-field="department"]'),p=s.querySelector('input[data-field="department-custom"]');h.includes(e.department)?d&&(d.value=e.department):(d&&(d.value="직접입력"),p&&(p.value=e.department,p.classList.remove("hidden")))}if(e.work){const h=["본부장","담당임원","담당간부","담당자","기술지원팀장","영업대표","프레임워크사업팀","SK증권 SM","라이나 생명 SM","산업은행 SM","삼성카드 SM","PM"],d=s.querySelector('select[data-field="work"]'),p=s.querySelector('input[data-field="work-custom"]');h.includes(e.work)?d&&(d.value=e.work):(d&&(d.value="직접입력"),p&&(p.value=e.work,p.classList.remove("hidden")))}this.bindAttendeeRowEvents(s,n);const a=s.querySelector('select[data-field="position"]'),c=s.querySelector('select[data-field="work"]');a&&a.addEventListener("change",h=>{this.toggleCustomPositionInput(n,h.target.value)}),c&&c.addEventListener("change",h=>{this.toggleCustomWorkInput(n,h.target.value)})})}async saveData(){try{if(this.showLoading(!0),this.collectFormData(),!this.currentData.session||!this.currentData.datetime){this.showErrorToast("회차와 일시를 모두 입력해주세요.");return}const t=`${this.currentData.session}_${this.currentData.datetime}`,e=await this.findExistingDataByKey(t);let n;e?(console.log("기존 데이터 발견, 수정 처리:",e.id),window.useLocalStorage?n=this.saveToLocalStorage(this.currentData,e.id):n=await _e(e.id,this.currentData),n.success&&(this.currentDocumentId=e.id,this.showSuccessToast(`${this.currentData.session} 세미나 데이터가 수정되었습니다.`))):(console.log("새 데이터 등록 처리"),window.useLocalStorage?n=this.saveToLocalStorage(this.currentData):n=await ye(this.currentData),n.success&&n.id&&(this.currentDocumentId=n.id,this.showSuccessToast(`${this.currentData.session} 세미나 데이터가 새로 등록되었습니다.`))),n.success||this.showErrorToast(n.message)}catch(t){console.error("저장 오류:",t),this.showErrorToast("저장 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}async findExistingDataByKey(t){try{if(window.useLocalStorage){const e=this.getAllLocalStorageData();for(const n of e)if(n.data.session&&n.data.datetime&&`${n.data.session}_${n.data.datetime}`===t)return{id:n.id,data:n.data};return null}else{const e=await db.collection("seminarPlans").get();for(const n of e.docs){const s=n.data();if(s.session&&s.datetime&&`${s.session}_${s.datetime}`===t)return{id:n.id,data:s}}return null}}catch(e){return console.error("기존 데이터 찾기 오류:",e),null}}getAllLocalStorageData(){try{const t=localStorage.getItem("seminarPlans");return t?JSON.parse(t):[]}catch(t){return console.error("로컬 스토리지 데이터 읽기 오류:",t),[]}}saveToLocalStorage(t,e=null){try{let n=this.getAllLocalStorageData();if(e){const s=n.findIndex(o=>o.id===e);s!==-1?(n[s].data=t,n[s].updatedAt=new Date().toISOString()):n.push({id:e,data:t,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()})}else{const s="local_"+Date.now();n.push({id:s,data:t,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()})}return localStorage.setItem("seminarPlans",JSON.stringify(n)),{success:!0,id:e||"local_"+Date.now()}}catch(n){return console.error("로컬 스토리지 저장 오류:",n),{success:!1,message:n.message}}}async loadData(){try{this.showLoading(!0);const t=await or();t.success?(this.currentData=t.data,this.currentDocumentId=t.id,this.populateForm(),this.showSuccessToast("Firebase에서 데이터를 성공적으로 불러왔습니다.")):this.showErrorToast(t.message)}catch(t){console.error("불러오기 오류:",t),this.showErrorToast("데이터 불러오기 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}collectFormData(){this.currentData.session=this.currentData.session||"",this.currentData.goal=document.getElementById("goal").value,this.currentData.datetime=document.getElementById("datetime").value,this.currentData.location=document.getElementById("location").value,this.currentData.attendees=document.getElementById("attendees").value;const t=document.getElementById("timeTableBody").children;this.currentData.timeSchedule=[],Array.from(t).forEach(n=>{var o,a,c,h;const s=n.querySelectorAll("input, select, textarea");this.currentData.timeSchedule.push({type:((o=s[0])==null?void 0:o.value)||"",content:((a=s[1])==null?void 0:a.value)||"",time:((c=s[2])==null?void 0:c.value)||"",responsible:((h=s[3])==null?void 0:h.value)||""})});const e=document.getElementById("attendeeTableBody").children;this.currentData.attendeeList=[],Array.from(e).forEach((n,s)=>{const o=n.querySelector('input[data-field="name"]'),a=n.querySelector('select[data-field="position"]'),c=n.querySelector('input[data-field="position-custom"]'),h=n.querySelector('select[data-field="department"]'),d=n.querySelector('input[data-field="department-custom"]'),p=n.querySelector('select[data-field="work"]'),v=n.querySelector('input[data-field="work-custom"]');let A="";a&&a.value&&a.value!=="직접입력"?A=a.value:c&&c.value&&(A=c.value);let S="";h&&h.value&&h.value!=="직접입력"?S=h.value:d&&d.value&&(S=d.value);let P="";p&&p.value&&p.value!=="직접입력"?P=p.value:v&&v.value&&(P=v.value),this.currentData.attendeeList.push({name:(o==null?void 0:o.value)||"",position:A,department:S,work:P})})}showLoading(t){const e=document.getElementById("loadingSpinner");t?e.classList.remove("hidden"):e.classList.add("hidden")}showSuccessToast(t){const e=document.getElementById("successToast"),n=e.querySelector("span");n.textContent=t,e.classList.remove("translate-x-full"),e.classList.add("slide-in-right"),setTimeout(()=>{e.classList.add("translate-x-full")},3e3)}showErrorToast(t){const e=document.getElementById("successToast"),n=e.querySelector("span"),s=e.querySelector("i");n.textContent=t,s.className="fas fa-exclamation-circle mr-2",e.classList.remove("bg-green-500"),e.classList.add("bg-red-500"),e.classList.remove("translate-x-full"),e.classList.add("slide-in-right"),setTimeout(()=>{e.classList.add("translate-x-full"),s.className="fas fa-check-circle mr-2",e.classList.remove("bg-red-500"),e.classList.add("bg-green-500")},3e3)}showSearchModal(){document.getElementById("planModal").classList.remove("hidden"),document.body.style.overflow="hidden",this.bindSearchModalEvents(),this.searchSeminars()}closeModal(){document.getElementById("planModal").classList.add("hidden"),document.body.style.overflow=""}newPlan(){this.closeModal(),this.resetForm()}bindSearchModalEvents(){}async searchSeminars(){try{this.showLoading(!0);const t=await ar();if(t.success){const n=t.data.map(s=>({...s,session:this.ensureStringValue(s.session),goal:this.ensureStringValue(s.goal),datetime:this.ensureStringValue(s.datetime),location:this.ensureStringValue(s.location),attendees:this.ensureStringValue(s.attendees)})).sort((s,o)=>{const a=new Date(s.datetime||"1970-01-01");return new Date(o.datetime||"1970-01-01")-a});console.log("📊 조회된 데이터:",n),this.displaySearchResults(n)}else this.showErrorToast(t.message)}catch(t){console.error("조회 오류:",t),this.showErrorToast("조회 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}displaySearchResults(t){const e=document.getElementById("searchResultBody");if(e.innerHTML="",t.length===0){e.innerHTML=`
                <tr>
                    <td colspan="5" class="px-8 py-16 text-center">
                        <div class="flex flex-col items-center space-y-4">
                            <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-search text-3xl text-blue-400"></i>
                            </div>
                            <div class="text-center">
                                <h3 class="text-xl font-semibold text-gray-700 mb-2">조회된 결과가 없습니다</h3>
                                <p class="text-gray-500">새로운 세미나를 등록해보세요</p>
                            </div>
                        </div>
                    </td>
                </tr>
            `;return}t.forEach((n,s)=>{const o=document.createElement("tr");o.className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer transition-all duration-200 group",o.onclick=()=>this.loadSeminarDetailByKey(n.session,n.datetime);const a=this.ensureStringValue(n.session)||"미입력",c=this.ensureStringValue(n.datetime)||"미입력",h=this.ensureStringValue(n.goal)||"미입력",d=this.ensureStringValue(n.location)||"미입력",p=this.ensureStringValue(n.attendees)||"미입력",v=a!=="미입력"?`<span class="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 min-w-[100px] justify-center">
                    <i class="fas fa-hashtag mr-2"></i>${this.escapeHtml(a)}
                </span>`:`<span class="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 min-w-[100px] justify-center">
                    <i class="fas fa-minus mr-2"></i>미입력
                </span>`;o.innerHTML=`
                <td class="px-6 py-4 w-40">
                    ${v}
                </td>
                <td class="px-4 py-4 w-48">
                    <div class="flex items-center space-x-2 group-hover:text-blue-600 transition-colors duration-200">
                        <i class="fas fa-calendar-alt text-blue-400 group-hover:text-blue-600"></i>
                        <span class="font-medium text-sm">${this.escapeHtml(c)}</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="max-w-xs">
                        <p class="text-gray-800 truncate group-hover:text-gray-900 transition-colors duration-200" title="${this.escapeHtml(h)}">
                            ${this.escapeHtml(h)}
                        </p>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-map-marker-alt text-red-400"></i>
                        <span class="text-gray-700">${this.escapeHtml(d)}</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-users text-green-400"></i>
                        <span class="text-gray-700">${this.escapeHtml(p)}</span>
                    </div>
                </td>
            `,e.appendChild(o)})}async loadSeminarDetailByKey(t,e){try{this.showLoading(!0),console.log("🔍 세미나 상세 정보 로드 시작, 회차:",t,"일시:",e);const n=`${t}_${e}`,s=await this.findExistingDataByKey(n);if(console.log("📊 조회 결과:",s),s){this.closeSearchModal();const o={...s.data,session:this.ensureStringValue(s.data.session),goal:this.ensureStringValue(s.data.goal),datetime:this.ensureStringValue(s.data.datetime),location:this.ensureStringValue(s.data.location),attendees:this.ensureStringValue(s.data.attendees),timeSchedule:Array.isArray(s.data.timeSchedule)?s.data.timeSchedule.map(a=>({type:this.ensureStringValue(a.type),content:this.ensureStringValue(a.content),time:this.ensureStringValue(a.time),responsible:this.ensureStringValue(a.responsible)})):[],attendeeList:Array.isArray(s.data.attendeeList)?s.data.attendeeList.map(a=>({name:this.ensureStringValue(a.name),position:this.ensureStringValue(a.position),department:this.ensureStringValue(a.department),work:this.ensureStringValue(a.work)})):[]};console.log("📋 정규화된 세미나 데이터:",o),console.log("📋 시간 계획 데이터:",o.timeSchedule),console.log("📋 참석자 데이터:",o.attendeeList),this.currentData=o,this.currentDocumentId=s.id,console.log("📋 currentData 설정 완료:",this.currentData),this.populateForm(),console.log("📋 폼 채우기 완료"),this.showSuccessToast(`${t} 세미나 계획을 불러왔습니다.`)}else console.error("❌ 세미나 조회 실패: 해당 회차와 일시의 데이터를 찾을 수 없습니다."),this.showErrorToast("해당 회차와 일시의 세미나 계획을 찾을 수 없습니다.")}catch(n){console.error("❌ 상세 정보 로드 오류:",n),this.showErrorToast("상세 정보 로드 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}async loadSeminarDetail(t){try{this.showLoading(!0),console.log("🔍 세미나 상세 정보 로드 시작, ID:",t);const e=await this.getSeminarById(t);if(console.log("📊 조회 결과:",e),e.success){this.closeSearchModal();const n={...e.data,session:this.ensureStringValue(e.data.session),goal:this.ensureStringValue(e.data.goal),datetime:this.ensureStringValue(e.data.datetime),location:this.ensureStringValue(e.data.location),attendees:this.ensureStringValue(e.data.attendees),timeSchedule:Array.isArray(e.data.timeSchedule)?e.data.timeSchedule.map(s=>({type:this.ensureStringValue(s.type),content:this.ensureStringValue(s.content),time:this.ensureStringValue(s.time),responsible:this.ensureStringValue(s.responsible)})):[],attendeeList:Array.isArray(e.data.attendeeList)?e.data.attendeeList.map(s=>({name:this.ensureStringValue(s.name),position:this.ensureStringValue(s.position),department:this.ensureStringValue(s.department),work:this.ensureStringValue(s.work)})):[]};console.log("📋 정규화된 세미나 데이터:",n),console.log("📋 시간 계획 데이터:",n.timeSchedule),console.log("📋 참석자 데이터:",n.attendeeList),this.currentData=n,this.currentDocumentId=t,console.log("📋 currentData 설정 완료:",this.currentData),this.populateForm(),console.log("📋 폼 채우기 완료"),this.showSuccessToast("세미나 계획을 불러왔습니다.")}else console.error("❌ 세미나 조회 실패:",e.message),this.showErrorToast(e.message)}catch(e){console.error("❌ 상세 정보 로드 오류:",e),this.showErrorToast("상세 정보 로드 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}async getSeminarById(t){try{if(window.useLocalStorage){const n=this.getAllLocalStorageData().find(s=>s.id===t);return n?(console.log("📁 로컬 스토리지에서 로드된 데이터:",n.data),{success:!0,data:n.data,id:n.id}):{success:!1,message:"해당 세미나 계획을 찾을 수 없습니다."}}else{const e=await db.collection("seminarPlans").doc(t).get();if(e.exists){const n=e.data();return console.log("🔥 Firebase에서 로드된 데이터:",n),{success:!0,data:n,id:e.id}}else return{success:!1,message:"해당 세미나 계획을 찾을 수 없습니다."}}}catch(e){return console.error("세미나 조회 오류:",e),{success:!1,message:"세미나 조회 중 오류가 발생했습니다: "+e.message}}}addNewSeminar(){try{this.closeSearchModal(),this.initializeMainForm(),this.showSuccessToast("새 세미나 등록을 위한 화면이 준비되었습니다.")}catch(t){console.error("새 세미나 등록 화면 전환 오류:",t),this.showErrorToast("화면 전환 중 오류가 발생했습니다.")}}initializeMainForm(){this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,document.getElementById("sessionSelect").value="",document.getElementById("sessionInput").value="",document.getElementById("sessionSelect").style.display="block",document.getElementById("sessionInput").classList.add("hidden"),document.getElementById("goal").value="",document.getElementById("datetime").value="",document.getElementById("location").value="",document.getElementById("attendees").value="",document.getElementById("timeTableBody").innerHTML="",document.getElementById("attendeeTableBody").innerHTML="",this.addDefaultRows()}updateSessionField(t){const e=document.getElementById("sessionSelect"),n=document.getElementById("sessionInput");t==="직접입력"?(e.style.display="none",n.classList.remove("hidden"),n.focus(),this.currentData.session=""):t?(e.style.display="block",n.classList.add("hidden"),this.currentData.session=t):(e.style.display="block",n.classList.add("hidden"),this.currentData.session="")}updateSessionValue(t){this.currentData.session=t}populateSessionField(){const t=document.getElementById("session");t&&this.currentData.session?t.value=this.currentData.session:t&&(t.value="")}resetForm(){try{this.clearInputFields(),this.addTimeRow(),this.addAttendeeRow(),this.showSuccessToast("모든 입력 필드가 초기화되고 기본 행이 추가되었습니다.")}catch(t){console.error("폼 초기화 오류:",t),this.showErrorToast("초기화 중 오류가 발생했습니다.")}}clearInputFields(){document.getElementById("sessionSelect").value="",document.getElementById("sessionInput").value="",document.getElementById("sessionSelect").style.display="block",document.getElementById("sessionInput").classList.add("hidden"),document.getElementById("goal").value="",document.getElementById("datetime").value="",document.getElementById("location").value="",document.getElementById("attendees").value="",this.clearTableInputs(),this.currentData.session="",this.currentData.goal="",this.currentData.datetime="",this.currentData.location="",this.currentData.attendees=""}clearTableInputs(){const t=document.getElementById("timeTableBody");t.innerHTML="";const e=document.getElementById("attendeeTableBody");e.innerHTML="",this.currentData.timeSchedule=[],this.currentData.attendeeList=[]}ensureStringValue(t){return t==null?"":typeof t=="string"?t.trim():typeof t=="number"||typeof t=="boolean"?t.toString():Array.isArray(t)?t.join(", "):typeof t=="object"?JSON.stringify(t):String(t)}escapeHtml(t){if(!t)return"";const e=document.createElement("div");return e.textContent=t,e.innerHTML}sortByDatetime(){const t=document.getElementById("searchResultBody"),e=Array.from(t.children);this.sortDirection?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":this.sortDirection="asc",e.sort((a,c)=>{const h=a.children[1].textContent,d=c.children[1].textContent;if(h.includes("조회된 결과가 없습니다"))return 1;if(d.includes("조회된 결과가 없습니다"))return-1;const p=new Date(h),v=new Date(d);return this.sortDirection==="asc"?p-v:v-p}),e.forEach(a=>t.appendChild(a));const s=document.querySelector('th[onclick="app.sortByDatetime()"]').querySelector(".fas.fa-sort");s&&(s.className=this.sortDirection==="asc"?"fas fa-sort-up text-blue-600":"fas fa-sort-down text-blue-600");const o=this.sortDirection==="asc"?"오름차순":"내림차순";this.showSuccessToast(`일시 기준 ${o}으로 정렬되었습니다.`)}exportToPDF(){try{this.showLoading(!0),this.waitForPDFMake().then(()=>{console.log("✅ PDFMake 라이브러리 사용"),this.exportToPDFWithPDFMake()}).catch(()=>{console.log("🔄 PDFMake 로딩 실패, HTML to PDF 방식 사용"),this.exportToPDFWithHTML()}).finally(()=>{})}catch(t){console.error("PDF 내보내기 오류:",t),this.showErrorToast(`PDF 내보내기 실패: ${t.message}`),this.showLoading(!1)}}waitForPDFMake(){return new Promise((t,e)=>{let n=0;const s=100,o=()=>{n++,window.pdfMake&&window.pdfMake.fonts?(console.log("✅ PDFMake 라이브러리 로딩 확인 완료"),t()):n>=s?(console.warn("⚠️ PDFMake 로딩 시간 초과 (10초)"),e(new Error("PDFMake 로딩 시간 초과"))):setTimeout(o,100)};o()})}exportToPDFWithPDFMake(){try{if(!window.pdfMake){console.warn("⚠️ PDFMake 라이브러리가 로드되지 않았습니다. HTML to PDF 방식으로 전환합니다."),this.exportToPDFWithHTML();return}if(!window.pdfMake.fonts){console.warn("⚠️ PDFMake 폰트가 로드되지 않았습니다. HTML to PDF 방식으로 전환합니다."),this.exportToPDFWithHTML();return}console.log("✅ PDFMake 라이브러리 로드 완료"),console.log("📋 사용 가능한 폰트:",Object.keys(window.pdfMake.fonts));const t=p=>p?String(p).replace(/[\x00-\x1F\x7F-\x9F]/g,"").trim():"",e=p=>p||"",n=p=>{if(!p)return"";const v=String(p),A=v.split("- ");if(A.length<=1)return v;let S=A[0];for(let P=1;P<A.length;P++)A[P].trim()&&(S+=`
- `+A[P]);return S},s={pageSize:"A4",pageMargins:[40,60,40,60],defaultStyle:{fontSize:10},footer:function(p,v){return{text:`- ${p} -`,alignment:"center",fontSize:10,margin:[0,10,0,0]}},content:[{text:t(this.currentData.session)||"전사 신기술 세미나 실행계획",style:"header",alignment:"center",margin:[0,0,0,10]},{text:this.getCurrentDateString(),alignment:"right",fontSize:10,margin:[0,0,0,20]},{text:"1. 목표",style:"sectionHeader",margin:[0,0,0,5]},{text:"    □ "+(t(this.currentData.goal)||"미입력"),style:"tableCell",margin:[0,0,0,10]},{text:"2. 일시/장소",style:"sectionHeader",margin:[0,0,0,5]},{text:"    □ "+((e(t(this.currentData.datetime))||"미입력")+" / "+(t(this.currentData.location)||"미입력")),style:"tableCell",margin:[0,0,0,10]},{text:"3. 참석 대상",style:"sectionHeader",margin:[0,0,0,5]},{text:"    □ "+(t(this.currentData.attendees)||"미입력"),style:"tableCell",margin:[0,0,0,20]}],styles:{header:{fontSize:18,bold:!0},sectionHeader:{fontSize:14,bold:!0,color:"#2c3e50"},tableHeader:{fontSize:10,bold:!0,fillColor:"#ecf0f1"},tableCell:{fontSize:10}}};if(this.currentData.timeSchedule&&this.currentData.timeSchedule.length>0){const p=[[{text:"구분",style:"tableHeader"},{text:"주요 내용",style:"tableHeader"},{text:"시간",style:"tableHeader"},{text:"담당",style:"tableHeader"}]];this.processTimeScheduleForMerging(this.currentData.timeSchedule).forEach((A,S)=>{const P=[{text:t(A.type)||"",style:"tableCell"},{text:n(t(A.content))||"",style:"tableCell"},{text:t(A.time)||"",style:"tableCell"},{text:t(A.responsible)||"",style:"tableCell"}];A.rowspan&&A.rowspan>1&&(P[0].rowSpan=A.rowspan),p.push(P)}),s.content.push({text:"4. 시간 계획",style:"sectionHeader",margin:[0,20,0,10]},{table:{widths:["auto","*","auto","auto"],body:p},margin:[0,0,0,10]},{text:"- 이 상 –",alignment:"right",fontSize:10,margin:[0,0,0,20]})}if(this.currentData.attendeeList&&this.currentData.attendeeList.length>0){const p=[[{text:"No",style:"tableHeader"},{text:"성명",style:"tableHeader"},{text:"직급",style:"tableHeader"},{text:"소속",style:"tableHeader"},{text:"업무",style:"tableHeader"}]];this.currentData.attendeeList.forEach((v,A)=>{p.push([{text:(A+1).toString(),style:"tableCell"},{text:t(v.name)||"",style:"tableCell"},{text:t(v.position)||"",style:"tableCell"},{text:t(v.department)||"",style:"tableCell"},{text:t(v.work)||"",style:"tableCell"}])}),s.content.push({text:"",pageBreak:"before"},{text:"[별첨] 세미나 참석 명단",style:"sectionHeader",margin:[0,20,0,10]},{table:{widths:[20,"auto","auto","auto","*"],body:p}})}const o=new Date,a=o.getFullYear(),c=String(o.getMonth()+1).padStart(2,"0"),h=String(o.getDate()).padStart(2,"0"),d=`${a}${c}${h} 전사 신기술 세미나 실행계획.pdf`;try{pdfMake.createPdf(s).download(d),this.showSuccessToast("PDF가 성공적으로 내보내졌습니다. (PDFMake 사용)"),this.showLoading(!1)}catch(p){throw console.error("PDFMake PDF 생성 오류:",p),this.showLoading(!1),new Error(`PDF 생성 실패: ${p.message}`)}}catch(t){console.error("PDFMake PDF 생성 오류:",t),console.log("🔄 HTML to PDF 방식으로 대체"),this.showLoading(!1),this.exportToPDFWithHTML()}}exportToPDFWithHTML(){try{console.log("🔄 HTML to PDF 방식으로 PDF 생성");const t=this.generatePDFHTML(),e=new Date,n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),a=`${n}${s}${o} 전사 신기술 세미나 실행계획.pdf`,c=new Blob([t],{type:"text/html; charset=UTF-8"}),h=URL.createObjectURL(c),d=window.open(h,"_blank","width=800,height=600");d.onload=()=>{d.document.title=a.replace(".pdf",""),setTimeout(()=>{d.print(),this.showSuccessToast(`PDF 인쇄 대화상자가 열렸습니다. 파일명: ${a}`),this.showLoading(!1),setTimeout(()=>{URL.revokeObjectURL(h)},1e3)},500)},d.onerror=()=>{console.error("HTML 창 로드 실패"),this.showErrorToast("PDF 생성 창을 열 수 없습니다."),this.showLoading(!1),URL.revokeObjectURL(h)}}catch(t){console.error("HTML to PDF 오류:",t),this.showErrorToast(`PDF 내보내기 실패: ${t.message}`),this.showLoading(!1)}}exportToPDFAlternative(){try{console.log("🔄 대체 PDF 내보내기 방법 사용 (HTML to PDF)");const t=this.generatePDFHTML(),e=window.open("","_blank");e.document.write(t),e.document.close(),setTimeout(()=>{e.print(),this.showSuccessToast('PDF 인쇄 대화상자가 열렸습니다. "PDF로 저장"을 선택하세요.')},500)}catch(t){console.error("대체 PDF 내보내기 오류:",t),this.showErrorToast(`PDF 내보내기 실패: ${t.message}`)}finally{this.showLoading(!1)}}generatePDFHTML(){const t=new Date;t.toLocaleDateString("ko-KR"),t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0");const e=c=>c?String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):"미입력",n=c=>c||"",s=c=>{if(!c)return"";const h=String(c),d=h.split("□");if(d.length<=1)return h;let p=d[0];for(let v=1;v<d.length;v++)v==1&&d[v].trim()&&(p+="&nbsp;&nbsp;&nbsp;&nbsp;□ "+d[v]),v!=1&&d[v].trim()&&(p+="<br>&nbsp;&nbsp;&nbsp;&nbsp;□ "+d[v]);return p},o=c=>{if(!c)return"";const h=String(c),d=h.split("- ");if(d.length<=1)return h;let p=d[0];for(let v=1;v<d.length;v++)d[v].trim()&&(p+="<br>- "+d[v]);return p};let a=`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>전사 신기술 세미나 실행계획</title>
    <meta name="author" content="(주)경포씨엔씨">
    <meta name="description" content="전사 신기술 세미나 실행계획서">
    <meta name="keywords" content="세미나, 실행계획, KPCNC">
    <meta name="robots" content="noindex, nofollow">
    <meta name="generator" content="">
    <style>
        @page {
            size: A4;
            margin: 2cm;
            @top-center {
                content: " ";
            }
            @bottom-center {
                content: "- " counter(page) " -";
                font-size: 10px;
                margin-top: 10px;
            }
        }
        * {
            font-family: '맑은 고딕', 'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans CJK KR', sans-serif !important;
        }
        body {
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
        }
        .header h1 {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            color: #2c3e50;
        }
        .section {
            margin-bottom: 25px;
        }
        .section h2 {
            font-size: 16px;
            font-weight: bold;
            color: #34495e;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        .info-item {
            margin: 8px 0;
            font-size: 12px;
            display: flex;
            align-items: flex-start;
        }
        .info-label {
            font-weight: bold;
            display: inline-block;
            width: 80px;
            flex-shrink: 0;
        }
        .info-content {
            margin: 5px 0 15px 0;
            word-wrap: break-word;
            overflow-wrap: break-word;
            font-size: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 11px;
        }
        th, td {
            border: 1px solid #bdc3c7;
            padding: 6px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: #ecf0f1;
            font-weight: bold;
        }
        .center-align {
            text-align: center;
        }
        .time-schedule-table {
            width: 100%;
        }
        .time-schedule-table th:nth-child(1),
        .time-schedule-table td:nth-child(1) {
            width: auto;
            min-width: 60px;
            max-width: 80px;
        }
        .time-schedule-table th:nth-child(2),
        .time-schedule-table td:nth-child(2) {
            width: 100%;
        }
        .time-schedule-table th:nth-child(3),
        .time-schedule-table td:nth-child(3) {
            width: auto;
            min-width: 60px;
            max-width: 80px;
        }
        .time-schedule-table th:nth-child(4),
        .time-schedule-table td:nth-child(4) {
            width: auto;
            min-width: 60px;
            max-width: 80px;
        }
        .attendee-table {
            width: 100%;
        }
        .attendee-table th,
        .attendee-table td {
            width: 20%;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 10px;
            color: #7f8c8d;
            border-top: 1px solid #bdc3c7;
            padding-top: 10px;
        }
        @media print {
            body { 
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${e(this.currentData.session)} 전사 신기술 세미나 실행계획 </h1>
        <div style="text-align: right; margin-top: 10px; font-size: 12px;">${this.getCurrentDateString()}</div>
    </div>
    
    <div class="section">
        <h2>1. 목표</h2>
        <p class="info-content">${s(e(this.currentData.goal))}</p>
        
        <h2>2. 일시/장소</h2>
        <p class="info-content">&nbsp;&nbsp;&nbsp;&nbsp;□ ${n(e(this.currentData.datetime))} / ${e(this.currentData.location)}</p>
        
        <h2>3. 참석 대상</h2>
        <p class="info-content">&nbsp;&nbsp;&nbsp;&nbsp;□ ${e(this.currentData.attendees)}</p>
    </div>
`;return this.currentData.timeSchedule&&this.currentData.timeSchedule.length>0&&(a+=`
    <div class="section">
        <h2>4. 시간 계획</h2>
        <table class="time-schedule-table">
            <thead>
                <tr>
                    <th class="center-align">구분</th>
                    <th>주요 내용</th>
                    <th class="center-align">시간</th>
                    <th class="center-align">담당</th>
                </tr>
            </thead>
            <tbody>
`,this.processTimeScheduleForMerging(this.currentData.timeSchedule).forEach((h,d)=>{if(h.isMergedRow)a+=`
                <tr>
                    <td>${o(e(h.content))}</td>
                    <td class="center-align">${e(h.time)}</td>
                    <td class="center-align">${e(h.responsible)}</td>
                </tr>
`;else{const p=h.rowspan&&h.rowspan>1?`<td class="center-align" rowspan="${h.rowspan}">${e(h.type)}</td>`:`<td class="center-align">${e(h.type)}</td>`;a+=`
                <tr>
                    ${p}
                    <td>${o(e(h.content))}</td>
                    <td class="center-align">${e(h.time)}</td>
                    <td class="center-align">${e(h.responsible)}</td>
                </tr>
`}}),a+=`
            </tbody>
        </table>
        <div style="text-align: right; margin-top: 10px; font-size: 12px;">– 이 상 –</div>
    </div>
`),this.currentData.attendeeList&&this.currentData.attendeeList.length>0&&(a+=`
    <div class="section" style="page-break-before: always;">
        <h2>[별첨] 세미나 참석 명단</h2>
        <table class="attendee-table">
            <thead>
                <tr>
                    <th class="center-align">No</th>
                    <th class="center-align">성명</th>
                    <th class="center-align">직급</th>
                    <th class="center-align">소속</th>
                    <th class="center-align">업무</th>
                </tr>
            </thead>
            <tbody>
`,this.currentData.attendeeList.forEach((c,h)=>{a+=`
                <tr>
                    <td class="center-align">${h+1}</td>
                    <td class="center-align">${e(c.name)}</td>
                    <td class="center-align">${e(c.position)}</td>
                    <td class="center-align">${e(c.department)}</td>
                    <td class="center-align">${e(c.work)}</td>
                </tr>
`}),a+=`
            </tbody>
        </table>
    </div>
`),a+=`
</body>
</html>
`,a}processTimeScheduleForMerging(t){if(!t||t.length===0)return[];const e=[];let n=null,s=[];return t.forEach((o,a)=>{const c=o.type||"";c===n&&n!==""?s.push(o):(s.length>0&&this.addMergedGroupToProcessed(e,s),s=[o],n=c)}),s.length>0&&this.addMergedGroupToProcessed(e,s),e}addMergedGroupToProcessed(t,e){if(e.length===1)t.push({...e[0],rowspan:1});else{t.push({...e[0],rowspan:e.length});for(let n=1;n<e.length;n++)t.push({...e[n],type:"",rowspan:1,isMergedRow:!0})}}getCurrentDateString(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),a=["일","월","화","수","목","금","토"][t.getDay()];return`${e}. ${n}. ${s}(${a})`}ensureUTF8Text(t){return t?String(t).replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/[\uFEFF]/g,"").replace(/[\u200B-\u200D\uFEFF]/g,"").trim():""}ensureKoreanText(t){return this.ensureUTF8Text(t)}splitUTF8TextToFit(t,e){if(!t)return[""];const n=this.ensureUTF8Text(t);if(!n)return[""];const s=[];let o="";for(let a=0;a<n.length;a++){const c=n[a],h=o+c,d=this.getCharWidth(c);this.getLineWidth(o)+d<=e?o=h:o?(s.push(o),o=c):s.push(c)}return o&&s.push(o),s.length>0?s:[""]}splitKoreanTextToFit(t,e){return this.splitUTF8TextToFit(t,e)}getCharWidth(t){const e=t.charCodeAt(0);return e>=44032&&e<=55215||e>=4352&&e<=4607||e>=12592&&e<=12687?2:1}getLineWidth(t){return t?t.split("").reduce((e,n)=>e+this.getCharWidth(n),0):0}splitTextForPDF(t,e){if(!t)return[""];const n=String(t),s=[];let o="";for(let a=0;a<n.length;a++){const c=n[a],h=o+c,d=this.getCharWidth(c);this.getLineWidth(o)+d<=e?o=h:o?(s.push(o),o=c):s.push(c)}return o&&s.push(o),s.length>0?s:[""]}splitTextToFit(t,e){if(!t)return[""];const n=t.split(" "),s=[];let o="";return n.forEach(a=>{const c=o+(o?" ":"")+a;c.length*2.5<=e?o=c:o?(s.push(o),o=a):s.push(a)}),o&&s.push(o),s.length>0?s:[""]}async exportToExcel(){try{this.showLoading(!0);const t=await ar();if(!t.success){this.showErrorToast("데이터를 불러오는데 실패했습니다.");return}const e=t.data;if(e.length===0){this.showErrorToast("내보낼 데이터가 없습니다.");return}const n=XLSX.utils.book_new(),s=this.createUploadableExcelSheet(e);XLSX.utils.book_append_sheet(n,s,"전체데이터"),e.forEach((v,A)=>{const S=`세미나${A+1}`,P=this.createExcelSheet(v);XLSX.utils.book_append_sheet(n,P,S)});const o=this.createSummarySheet(e);XLSX.utils.book_append_sheet(n,o,"전체요약");const a=new Date,c=a.getFullYear(),h=String(a.getMonth()+1).padStart(2,"0"),d=String(a.getDate()).padStart(2,"0"),p=`${c}${h}${d}_전사신기술세미나_전체데이터.xlsx`;XLSX.writeFile(n,p),this.showSuccessToast("엑셀 파일이 성공적으로 다운로드되었습니다.")}catch(t){console.error("엑셀 내보내기 오류:",t),this.showErrorToast(`엑셀 내보내기 실패: ${t.message}`)}finally{this.showLoading(!1)}}createExcelSheet(t){const e=[];return e.push(["전사 신기술 세미나 실행계획"]),e.push([]),e.push(["1. 기본 정보"]),e.push(["회차",t.session||""]),e.push(["목표",t.goal||""]),e.push(["일시",t.datetime||""]),e.push(["장소",t.location||""]),e.push(["참석 대상",t.attendees||""]),e.push([]),t.timeSchedule&&t.timeSchedule.length>0&&(e.push(["2. 시간 계획"]),e.push(["구분","주요 내용","시간","담당"]),t.timeSchedule.forEach(n=>{e.push([n.type||"",n.content||"",n.time||"",n.responsible||""])}),e.push([])),t.attendeeList&&t.attendeeList.length>0&&(e.push(["3. 참석자 명단"]),e.push(["No","성명","직급","소속","업무"]),t.attendeeList.forEach((n,s)=>{e.push([s+1,n.name||"",n.position||"",n.department||"",n.work||""])})),XLSX.utils.aoa_to_sheet(e)}createUploadableExcelSheet(t){const e=[];return t.forEach((n,s)=>{s>0&&(e.push([]),e.push(["=".repeat(50)]),e.push([])),e.push(["전사 신기술 세미나 실행계획"]),e.push([]),e.push(["1. 기본 정보"]),e.push(["회차",n.session||""]),e.push(["목표",n.goal||""]),e.push(["일시",n.datetime||""]),e.push(["장소",n.location||""]),e.push(["참석 대상",n.attendees||""]),e.push([]),n.timeSchedule&&n.timeSchedule.length>0&&(e.push(["2. 시간 계획"]),e.push(["구분","주요 내용","시간","담당"]),n.timeSchedule.forEach(o=>{e.push([o.type||"",o.content||"",o.time||"",o.responsible||""])}),e.push([])),n.attendeeList&&n.attendeeList.length>0&&(e.push(["3. 참석자 명단"]),e.push(["No","성명","직급","소속","업무"]),n.attendeeList.forEach((o,a)=>{e.push([a+1,o.name||"",o.position||"",o.department||"",o.work||""])}))}),XLSX.utils.aoa_to_sheet(e)}createSummarySheet(t){const e=[];return e.push(["전사 신기술 세미나 전체 요약"]),e.push([]),e.push(["회차","일시","목표","장소","참석 대상","시간계획 수","참석자 수"]),t.forEach(n=>{e.push([n.session||"",n.datetime||"",n.goal||"",n.location||"",n.attendees||"",n.timeSchedule?n.timeSchedule.length:0,n.attendeeList?n.attendeeList.length:0])}),XLSX.utils.aoa_to_sheet(e)}triggerFileUpload(){document.getElementById("fileInput").click()}async handleFileUpload(t){const e=t.target.files[0];if(!e)return;const n=[".xlsx",".xls"],s="."+e.name.split(".").pop().toLowerCase();if(!n.includes(s)){this.showErrorToast("엑셀 파일(.xlsx, .xls)만 업로드 가능합니다.");return}try{this.showLoading(!0);const o=await this.readExcelFile(e);if(o&&Array.isArray(o)){console.log("📁 엑셀 파일 읽기 성공, 데이터 길이:",o.length),console.log("📊 원본 데이터 (처음 10행):",o.slice(0,10));const a=this.parseExcelData(o);if(console.log("📊 단일 세미나 파싱 결과:",a),console.log("📊 단일 세미나 유효성 검사 - 회차:",a.session,"일시:",a.datetime),a.session&&a.datetime){console.log("✅ 단일 세미나 데이터로 인식");const c=`${a.session}_${a.datetime}`,h=await this.findExistingDataByKey(c);h?(console.log("📝 기존 데이터 수정:",h.id),window.useLocalStorage?this.saveToLocalStorage(a,h.id):await _e(h.id,a),this.showSuccessToast("기존 세미나 데이터가 수정되었습니다.")):(console.log("➕ 새로운 데이터 등록"),window.useLocalStorage?this.saveToLocalStorage(a):await ye(a),this.showSuccessToast("새로운 세미나 데이터가 등록되었습니다.")),this.loadDataFromExcel(a)}else{console.log("🔄 다중 세미나 형식으로 파싱 시도");const c=this.parseMultipleExcelData(o);if(console.log("📊 다중 세미나 파싱 결과:",c),c.length>1)console.log("✅ 다중 세미나 데이터로 인식, 일괄 저장"),await this.saveMultipleSeminars(c),this.showSuccessToast(`${c.length}개의 세미나 데이터가 성공적으로 업로드되었습니다.`);else if(c.length===1){console.log("✅ 다중 파싱에서 단일 세미나 발견");const h=c[0],d=`${h.session}_${h.datetime}`,p=await this.findExistingDataByKey(d);p?(console.log("📝 기존 데이터 수정:",p.id),window.useLocalStorage?this.saveToLocalStorage(h,p.id):await _e(p.id,h),this.showSuccessToast("기존 세미나 데이터가 수정되었습니다.")):(console.log("➕ 새로운 데이터 등록"),window.useLocalStorage?this.saveToLocalStorage(h):await ye(h),this.showSuccessToast("새로운 세미나 데이터가 등록되었습니다.")),this.loadDataFromExcel(h)}else console.error("❌ 유효한 세미나 데이터를 찾을 수 없음"),console.error("❌ 단일 세미나 파싱 결과:",a),console.error("❌ 다중 세미나 파싱 결과:",c),this.showErrorToast("유효한 세미나 데이터를 찾을 수 없습니다. 파일 형식을 확인해주세요.")}}else o&&!Array.isArray(o)?(console.error("❌ 읽어온 데이터가 배열이 아님:",typeof o,o),this.showErrorToast("엑셀 파일 형식이 올바르지 않습니다.")):this.showErrorToast("엑셀 파일을 읽는데 실패했습니다.")}catch(o){console.error("파일 업로드 오류:",o),this.showErrorToast(`파일 업로드 실패: ${o.message}`)}finally{this.showLoading(!1),t.target.value=""}}readExcelFile(t){return new Promise((e,n)=>{const s=new FileReader;s.onload=o=>{try{const a=new Uint8Array(o.target.result),c=XLSX.read(a,{type:"array"}),h=c.SheetNames[0],d=c.Sheets[h],p=XLSX.utils.sheet_to_json(d,{header:1});e(p)}catch(a){n(a)}},s.onerror=()=>{n(new Error("파일 읽기 실패"))},s.readAsArrayBuffer(t)})}parseExcelData(t){console.log("📊 단일 세미나 파싱 시작, 데이터 길이:",t.length);const e={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]};let n="",s=!1,o=!1;for(let a=0;a<t.length;a++){const c=t[a];if(!c||c.length===0)continue;const h=c[0]?String(c[0]).trim():"";if(a<20&&console.log(`단일 파싱 행 ${a}: "${h}"`),h.includes("1. 기본 정보")){n="basic",console.log("📋 기본 정보 섹션 시작");continue}else if(h.includes("2. 시간 계획")){n="timeSchedule",s=!0,console.log("📋 시간 계획 섹션 시작");continue}else if(h.includes("3. 참석자 명단")){n="attendeeList",o=!0,s=!1,console.log("📋 참석자 명단 섹션 시작");continue}if(n==="basic"&&(h==="회차"&&c[1]?(e.session=String(c[1]).trim(),console.log("📋 회차 파싱:",e.session)):h==="목표"&&c[1]?(e.goal=String(c[1]).trim(),console.log("📋 목표 파싱:",e.goal)):h==="일시"&&c[1]?(e.datetime=String(c[1]).trim(),console.log("📋 일시 파싱:",e.datetime)):h==="장소"&&c[1]?(e.location=String(c[1]).trim(),console.log("📋 장소 파싱:",e.location)):h==="참석 대상"&&c[1]&&(e.attendees=String(c[1]).trim(),console.log("📋 참석 대상 파싱:",e.attendees))),n==="timeSchedule"&&s){if(h==="구분")continue;if(!h){s=!1;continue}e.timeSchedule.push({type:h,content:c[1]?String(c[1]).trim():"",time:c[2]?String(c[2]).trim():"",responsible:c[3]?String(c[3]).trim():""})}if(n==="attendeeList"&&o){if(h==="No")continue;if(!h){o=!1;continue}let d=1,p=2,v=3,A=4;isNaN(parseInt(h))?(d=0,p=1,v=2,A=3):(d=1,p=2,v=3,A=4);const S={name:c[d]?String(c[d]).trim():"",position:c[p]?String(c[p]).trim():"",department:c[v]?String(c[v]).trim():"",work:c[A]?String(c[A]).trim():""};console.log("👥 참석자 파싱 (단일):",S,"행 번호:",a),e.attendeeList.push(S)}}return console.log("📊 단일 세미나 파싱 완료:",e),e}parseMultipleExcelData(t){console.log("📊 엑셀 데이터 파싱 시작, 총 행 수:",t.length);const e=[];let n=null,s="",o=!1,a=!1;for(let c=0;c<t.length;c++){const h=t[c];if(!h||h.length===0)continue;const d=h[0]?String(h[0]).trim():"";c<100&&console.log(`행 ${c}: "${d}"`);const p=d.startsWith("=")&&d.length>=20,v=d==="전사 신기술 세미나 실행계획",A=d.includes("=")&&d.length>=30;if(d.startsWith("=")&&console.log(`🔍 구분선 후보 행 ${c}: "${d}" (길이: ${d.length})`),p||v||A){console.log("🆕 새로운 세미나 시작 감지:",{firstCell:d,rowNumber:c,isSeparator:p,isHeader:v,isLongSeparator:A,currentSeminar:n?n.session:"null"}),n&&n.session&&(e.push(n),console.log("✅ 세미나 데이터 추가:",n.session,"총 세미나 수:",e.length)),n={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},s="",o=!1,a=!1;continue}if(n){if(d.includes("1. 기본 정보")){s="basic";continue}else if(d.includes("2. 시간 계획")){s="timeSchedule",o=!0;continue}else if(d.includes("3. 참석자 명단")){s="attendeeList",a=!0,o=!1;continue}if(s==="basic"&&(d==="회차"&&h[1]?(n.session=String(h[1]).trim(),console.log("📋 회차 파싱:",n.session,"행 번호:",c)):d==="목표"&&h[1]?(n.goal=String(h[1]).trim(),console.log("📋 목표 파싱:",n.goal,"행 번호:",c)):d==="일시"&&h[1]?(n.datetime=String(h[1]).trim(),console.log("📋 일시 파싱:",n.datetime,"행 번호:",c)):d==="장소"&&h[1]?(n.location=String(h[1]).trim(),console.log("📋 장소 파싱:",n.location,"행 번호:",c)):d==="참석 대상"&&h[1]&&(n.attendees=String(h[1]).trim(),console.log("📋 참석 대상 파싱:",n.attendees,"행 번호:",c))),s==="timeSchedule"&&o){if(d==="구분")continue;if(!d){o=!1;continue}n.timeSchedule.push({type:d,content:h[1]?String(h[1]).trim():"",time:h[2]?String(h[2]).trim():"",responsible:h[3]?String(h[3]).trim():""})}if(s==="attendeeList"&&a){if(d==="No")continue;if(!d){a=!1;continue}let S=1,P=2,L=3,V=4;isNaN(parseInt(d))?(S=0,P=1,L=2,V=3):(S=1,P=2,L=3,V=4);const z={name:h[S]?String(h[S]).trim():"",position:h[P]?String(h[P]).trim():"",department:h[L]?String(h[L]).trim():"",work:h[V]?String(h[V]).trim():""};console.log("👥 참석자 파싱:",z,"행 번호:",c),n.attendeeList.push(z)}}}return n&&n.session?(e.push(n),console.log("✅ 마지막 세미나 데이터 추가:",n.session,"총 세미나 수:",e.length)):n&&console.log("⚠️ 마지막 세미나 데이터가 불완전함:",n),console.log("📊 파싱 완료, 총 세미나 수:",e.length),console.log("📊 파싱된 세미나 목록:",e.map(c=>({session:c.session,datetime:c.datetime}))),e.forEach((c,h)=>{console.log(`세미나 ${h+1}:`,c.session,c.datetime)}),e}async saveMultipleSeminars(t){try{let e=0,n=0;for(const s of t)try{if(!s.session||!s.datetime){console.warn("회차 또는 일시가 없는 세미나 데이터 건너뛰기:",s),n++;continue}const o=`${s.session}_${s.datetime}`,a=await this.findExistingDataByKey(o);let c;a?window.useLocalStorage?c=this.saveToLocalStorage(s,a.id):c=await _e(a.id,s):window.useLocalStorage?c=this.saveToLocalStorage(s):c=await ye(s),c.success?(e++,console.log(`세미나 데이터 저장 성공: ${s.session}`)):(n++,console.error(`세미나 데이터 저장 실패: ${s.session}`,c.message))}catch(o){n++,console.error(`세미나 데이터 저장 오류: ${s.session}`,o)}console.log(`일괄 저장 완료: 성공 ${e}건, 실패 ${n}건`)}catch(e){throw console.error("여러 세미나 데이터 일괄 저장 오류:",e),e}}loadDataFromExcel(t){this.currentData=t,this.currentDocumentId=null,this.populateForm()}async bulkDeleteData(){try{if(!confirm(`정말로 모든 세미나 데이터를 삭제하시겠습니까?
이 작업은 되돌릴 수 없습니다.`))return;if(this.showLoading(!0),window.useLocalStorage)localStorage.removeItem("seminarPlans"),this.showSuccessToast("모든 데이터가 성공적으로 삭제되었습니다.");else{const t=await db.collection("seminarPlans").get(),e=db.batch();t.docs.forEach(n=>{e.delete(n.ref)}),await e.commit(),this.showSuccessToast(`총 ${t.docs.length}개의 세미나 데이터가 성공적으로 삭제되었습니다.`)}this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.initializeMainForm()}catch(t){console.error("일괄삭제 오류:",t),this.showErrorToast("일괄삭제 중 오류가 발생했습니다.")}finally{this.showLoading(!1)}}async deleteData(){try{if(!this.currentData||!this.currentData.datetime){this.showErrorToast("삭제할 데이터가 없습니다.");return}if(!confirm(`정말로 "${this.currentData.datetime}" 세미나 계획을 삭제하시겠습니까?`))return;if(this.showLoading(!0),this.currentDocumentId){const t=await ii(this.currentDocumentId);t.success?(this.showSuccessToast("데이터가 성공적으로 삭제되었습니다."),this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.initializeMainForm()):this.showErrorToast(`데이터 삭제 실패: ${t.error}`)}else localStorage.removeItem("seminarData"),this.showSuccessToast("데이터가 성공적으로 삭제되었습니다."),this.currentData={session:"",goal:"",datetime:"",location:"",attendees:"",timeSchedule:[],attendeeList:[]},this.currentDocumentId=null,this.initializeMainForm()}catch(t){console.error("데이터 삭제 오류:",t),this.showErrorToast(`데이터 삭제 실패: ${t.message}`)}finally{this.showLoading(!1)}}}const Rl={apiKey:"AIzaSyDT0Uv6LSMfD5b8ykB0ch4N7EvpF4-chTM",authDomain:"execution-results.firebaseapp.com",projectId:"execution-results",storageBucket:"execution-results.firebasestorage.app",messagingSenderId:"449225654732",appId:"1:449225654732:web:4a99d2c54e6c9dda621d69"},Zf=aa(Rl),tp=xf(Zf);console.log("Firebase 초기화 완료:",Rl);window.db=tp;window.useLocalStorage=!1;document.addEventListener("DOMContentLoaded",()=>{const r=new Jf;window.app=r});
