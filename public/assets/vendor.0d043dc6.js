/**
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
 */const ba=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$l=function(t){const e=ba(t);return Sa.encodeByteArray(e,!0)},Aa=function(t){return $l(t).replace(/\./g,"")},Bl=function(t){try{return Sa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function V(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ca(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function qi(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ka(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ql(){return V().indexOf("Electron/")>=0}function Ra(){const t=V();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hl(){return V().indexOf("MSAppHost/")>=0}function Na(){return typeof indexedDB=="object"}function Da(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function zl(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Kl="FirebaseError";class Se extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Kl,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Se(i,a,s)}}function Gl(t,e){return t.replace(Wl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wl=/\{\$([^}]+)}/g;function Xl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ht(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(eo(r)&&eo(o)){if(!Ht(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function eo(t){return t!==null&&typeof t=="object"}/**
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
 */function un(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yl(t,e){const n=new Jl(t,e);return n.subscribe.bind(n)}class Jl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ql(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Gs),i.error===void 0&&(i.error=Gs),i.complete===void 0&&(i.complete=Gs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ql(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gs(){}/**
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
 */const Zl=1e3,eh=2,th=4*60*60*1e3,nh=.5;function to(t,e=Zl,n=eh){const s=e*Math.pow(n,t),i=Math.round(nh*s*(Math.random()-.5)*2);return Math.min(th,s+i)}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}/**
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
 */function xt(t,e){return new Promise((n,s)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;s(`${e}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class no{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Oa(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Pa(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Oa{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Pa(this._transaction.objectStore(e))}}class Pa{constructor(e){this._store=e}index(e){return new so(this._store.index(e))}createIndex(e,n,s){return new so(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return xt(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return xt(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return xt(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return xt(e,"Error clearing IndexedDB object store")}}class so{constructor(e){this._index=e}get(e){const n=this._index.get(e);return xt(n,"Error reading from IndexedDB")}}function Ma(t,e,n){return new Promise((s,i)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{s(new no(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new no(r.result),o.oldVersion,o.newVersion,new Oa(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class de{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ve="[DEFAULT]";/**
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
 */class sh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rh(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ih(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ih(t){return t===Ve?void 0:t}function rh(t){return t.instantiationMode==="EAGER"}/**
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
 */class oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const ah={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},ch=C.INFO,uh={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},lh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=uh[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=ch,this._logHandler=lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}/**
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
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",io="0.7.19";/**
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
 */const Hi=new hs("@firebase/app"),fh="@firebase/app-compat",ph="@firebase/analytics-compat",gh="@firebase/analytics",mh="@firebase/app-check-compat",yh="@firebase/app-check",vh="@firebase/auth",wh="@firebase/auth-compat",Ih="@firebase/database",Eh="@firebase/database-compat",Th="@firebase/functions",_h="@firebase/functions-compat",bh="@firebase/installations",Sh="@firebase/installations-compat",Ah="@firebase/messaging",Ch="@firebase/messaging-compat",kh="@firebase/performance",Rh="@firebase/performance-compat",Nh="@firebase/remote-config",Dh="@firebase/remote-config-compat",Oh="@firebase/storage",Ph="@firebase/storage-compat",Mh="@firebase/firestore",Lh="@firebase/firestore-compat",xh="firebase",Fh="9.6.9";/**
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
 */const La="[DEFAULT]",Uh={[pi]:"fire-core",[fh]:"fire-core-compat",[gh]:"fire-analytics",[ph]:"fire-analytics-compat",[yh]:"fire-app-check",[mh]:"fire-app-check-compat",[vh]:"fire-auth",[wh]:"fire-auth-compat",[Ih]:"fire-rtdb",[Eh]:"fire-rtdb-compat",[Th]:"fire-fn",[_h]:"fire-fn-compat",[bh]:"fire-iid",[Sh]:"fire-iid-compat",[Ah]:"fire-fcm",[Ch]:"fire-fcm-compat",[kh]:"fire-perf",[Rh]:"fire-perf-compat",[Nh]:"fire-rc",[Dh]:"fire-rc-compat",[Oh]:"fire-gcs",[Ph]:"fire-gcs-compat",[Mh]:"fire-fst",[Lh]:"fire-fst-compat","fire-js":"fire-js",[xh]:"fire-js-all"};/**
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
 */const jn=new Map,gi=new Map;function Vh(t,e){try{t.container.addComponent(e)}catch(n){Hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ge(t){const e=t.name;if(gi.has(e))return Hi.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const n of jn.values())Vh(n,t);return!0}function it(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $h={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ge=new st("app","Firebase",$h);/**
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
 */class Bh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
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
 */const ln=Fh;function ow(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ge.create("bad-app-name",{appName:String(s)});const i=jn.get(s);if(i){if(Ht(t,i.options)&&Ht(n,i.config))return i;throw Ge.create("duplicate-app",{appName:s})}const r=new oh(s);for(const a of gi.values())r.addComponent(a);const o=new Bh(t,n,r);return jn.set(s,o),o}function zi(t=La){const e=jn.get(t);if(!e)throw Ge.create("no-app",{appName:t});return e}function ue(t,e,n){var s;let i=(s=Uh[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}ge(new de(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jh="firebase-heartbeat-database",qh=1,zt="firebase-heartbeat-store";let Ws=null;function xa(){return Ws||(Ws=Ma(jh,qh,(t,e)=>{switch(e){case 0:t.createObjectStore(zt)}}).catch(t=>{throw Ge.create("storage-open",{originalErrorMessage:t.message})})),Ws}async function Hh(t){try{return(await xa()).transaction(zt).objectStore(zt).get(Fa(t))}catch(e){throw Ge.create("storage-get",{originalErrorMessage:e.message})}}async function ro(t,e){try{const s=(await xa()).transaction(zt,"readwrite");return await s.objectStore(zt).put(e,Fa(t)),s.complete}catch(n){throw Ge.create("storage-set",{originalErrorMessage:n.message})}}function Fa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zh=1024,Kh=30*24*60*60*1e3;class Gh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Kh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:n,unsentEntries:s}=Wh(this._heartbeatsCache.heartbeats),i=Aa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oo(){return new Date().toISOString().substring(0,10)}function Wh(t,e=zh){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ao(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ao(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Xh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Na()?Da().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ao(t){return Aa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yh(t){ge(new de("platform-logger",e=>new hh(e),"PRIVATE")),ge(new de("heartbeat",e=>new Gh(e),"PRIVATE")),ue(pi,io,t),ue(pi,io,"esm2017"),ue("fire-js","")}Yh("");var Jh="firebase",Qh="9.6.9";/**
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
 */ue(Jh,Qh,"app");const Ua="@firebase/installations",Ki="0.5.6";/**
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
 */const Va=1e4,$a=`w:${Ki}`,Ba="FIS_v2",Zh="https://firebaseinstallations.googleapis.com/v1",ed=60*60*1e3,td="installations",nd="Installations";/**
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
 */const sd={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},We=new st(td,nd,sd);function ja(t){return t instanceof Se&&t.code.includes("request-failed")}/**
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
 */function qa({projectId:t}){return`${Zh}/projects/${t}/installations`}function Ha(t){return{token:t.token,requestStatus:2,expiresIn:rd(t.expiresIn),creationTime:Date.now()}}async function za(t,e){const s=(await e.json()).error;return We.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ka({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function id(t,{refreshToken:e}){const n=Ka(t);return n.append("Authorization",od(e)),n}async function Ga(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rd(t){return Number(t.replace("s","000"))}function od(t){return`${Ba} ${t}`}/**
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
 */async function ad({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=qa(t),i=Ka(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ba,appId:t.appId,sdkVersion:$a},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ga(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ha(u.authToken)}}else throw await za("Create Installation",c)}/**
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
 */function Wa(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function cd(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ud=/^[cdef][\w-]{21}$/,mi="";function ld(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hd(t);return ud.test(n)?n:mi}catch{return mi}}function hd(t){return cd(t).substr(0,22)}/**
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
 */function ds(t){return`${t.appName}!${t.appId}`}/**
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
 */const Xa=new Map;function Ya(t,e){const n=ds(t);Ja(n,e),dd(n,e)}function Ja(t,e){const n=Xa.get(t);if(!!n)for(const s of n)s(e)}function dd(t,e){const n=fd();n&&n.postMessage({key:t,fid:e}),pd()}let $e=null;function fd(){return!$e&&"BroadcastChannel"in self&&($e=new BroadcastChannel("[Firebase] FID Change"),$e.onmessage=t=>{Ja(t.data.key,t.data.fid)}),$e}function pd(){Xa.size===0&&$e&&($e.close(),$e=null)}/**
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
 */const gd="firebase-installations-database",md=1,Xe="firebase-installations-store";let Xs=null;function Gi(){return Xs||(Xs=Ma(gd,md,(t,e)=>{switch(e){case 0:t.createObjectStore(Xe)}})),Xs}async function qn(t,e){const n=ds(t),i=(await Gi()).transaction(Xe,"readwrite"),r=i.objectStore(Xe),o=await r.get(n);return await r.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&Ya(t,e.fid),e}async function Qa(t){const e=ds(t),s=(await Gi()).transaction(Xe,"readwrite");await s.objectStore(Xe).delete(e),await s.complete}async function fs(t,e){const n=ds(t),i=(await Gi()).transaction(Xe,"readwrite"),r=i.objectStore(Xe),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&Ya(t,a.fid),a}/**
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
 */async function Wi(t){let e;const n=await fs(t.appConfig,s=>{const i=yd(s),r=vd(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===mi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yd(t){const e=t||{fid:ld(),registrationStatus:0};return Za(e)}function vd(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(We.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wd(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Id(t)}:{installationEntry:e}}async function wd(t,e){try{const n=await ad(t,e);return qn(t.appConfig,n)}catch(n){throw ja(n)&&n.customData.serverCode===409?await Qa(t.appConfig):await qn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Id(t){let e=await co(t.appConfig);for(;e.registrationStatus===1;)await Wa(100),e=await co(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wi(t);return s||n}return e}function co(t){return fs(t,e=>{if(!e)throw We.create("installation-not-found");return Za(e)})}function Za(t){return Ed(t)?{fid:t.fid,registrationStatus:0}:t}function Ed(t){return t.registrationStatus===1&&t.registrationTime+Va<Date.now()}/**
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
 */async function Td({appConfig:t,heartbeatServiceProvider:e},n){const s=_d(t,n),i=id(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:$a,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ga(()=>fetch(s,a));if(c.ok){const u=await c.json();return Ha(u)}else throw await za("Generate Auth Token",c)}function _d(t,{fid:e}){return`${qa(t)}/${e}/authTokens:generate`}/**
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
 */async function Xi(t,e=!1){let n;const s=await fs(t.appConfig,r=>{if(!ec(r))throw We.create("not-registered");const o=r.authToken;if(!e&&Ad(o))return r;if(o.requestStatus===1)return n=bd(t,e),r;{if(!navigator.onLine)throw We.create("app-offline");const a=kd(r);return n=Sd(t,a),a}});return n?await n:s.authToken}async function bd(t,e){let n=await uo(t.appConfig);for(;n.authToken.requestStatus===1;)await Wa(100),n=await uo(t.appConfig);const s=n.authToken;return s.requestStatus===0?Xi(t,e):s}function uo(t){return fs(t,e=>{if(!ec(e))throw We.create("not-registered");const n=e.authToken;return Rd(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Sd(t,e){try{const n=await Td(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await qn(t.appConfig,s),n}catch(n){if(ja(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qa(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qn(t.appConfig,s)}throw n}}function ec(t){return t!==void 0&&t.registrationStatus===2}function Ad(t){return t.requestStatus===2&&!Cd(t)}function Cd(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ed}function kd(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Rd(t){return t.requestStatus===1&&t.requestTime+Va<Date.now()}/**
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
 */async function Nd(t){const e=t,{installationEntry:n,registrationPromise:s}=await Wi(e);return s?s.catch(console.error):Xi(e).catch(console.error),n.fid}/**
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
 */async function Dd(t,e=!1){const n=t;return await Od(n),(await Xi(n,e)).token}async function Od(t){const{registrationPromise:e}=await Wi(t);e&&await e}/**
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
 */function Pd(t){if(!t||!t.options)throw Ys("App Configuration");if(!t.name)throw Ys("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ys(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ys(t){return We.create("missing-app-config-values",{valueName:t})}/**
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
 */const tc="installations",Md="installations-internal",Ld=t=>{const e=t.getProvider("app").getImmediate(),n=Pd(e),s=it(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xd=t=>{const e=t.getProvider("app").getImmediate(),n=it(e,tc).getImmediate();return{getId:()=>Nd(n),getToken:i=>Dd(n,i)}};function Fd(){ge(new de(tc,Ld,"PUBLIC")),ge(new de(Md,xd,"PRIVATE"))}Fd();ue(Ua,Ki);ue(Ua,Ki,"esm2017");/**
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
 */const Hn="analytics",Ud="firebase_id",Vd="origin",$d=60*1e3,Bd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ie=new hs("@firebase/analytics");/**
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
 */function sc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jd(t,e){const n=document.createElement("script");n.src=`${nc}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function qd(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Hd(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await sc(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){ie.error(a)}t("config",i,r)}async function zd(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sc(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)r.push(l);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){ie.error(r)}}function Kd(t,e,n,s){async function i(r,o,a){try{r==="event"?await zd(t,e,n,o,a):r==="config"?await Hd(t,e,n,s,o,a):t("set",o)}catch(c){ie.error(c)}}return i}function Gd(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Kd(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Wd(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(nc))return e;return null}/**
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
 */const Xd={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},le=new st("analytics","Analytics",Xd);/**
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
 */const Yd=30,Jd=1e3;class Qd{constructor(e={},n=Jd){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ic=new Qd;function Zd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ef(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Zd(s)},r=Bd.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tf(t,e=ic,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw le.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw le.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rf;return setTimeout(async()=>{a.abort()},n!==void 0?n:$d),rc({appId:s,apiKey:i,measurementId:r},o,a,e)}async function rc(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=ic){const{appId:r,measurementId:o}=t;try{await nf(s,e)}catch(a){if(o)return ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await ef(t);return i.deleteThrottleMetadata(r),a}catch(a){if(!sf(a)){if(i.deleteThrottleMetadata(r),o)return ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?to(n,i.intervalMillis,Yd):to(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(r,u),ie.debug(`Calling attemptFetch again in ${c} millis`),rc(t,u,s,i)}}function nf(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sf(t){if(!(t instanceof Se)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function of(){if(Na())try{await Da()}catch(t){return ie.warn(le.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return ie.warn(le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function af(t,e,n,s,i,r,o){var a;const c=tf(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ie.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ie.error(g)),e.push(c);const u=of().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);Wd()||jd(r,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Vd]="firebase",d.update=!0,h!=null&&(d[Ud]=h),i("config",l.measurementId,d),l.measurementId}/**
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
 */class cf{constructor(e){this.app=e}_delete(){return delete Ut[this.app.options.appId],Promise.resolve()}}let Ut={},lo=[];const ho={};let Js="dataLayer",uf="gtag",fo,oc,po=!1;function lf(){const t=[];if(qi()&&t.push("This is a browser extension environment."),zl()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=le.create("invalid-analytics-context",{errorInfo:e});ie.warn(n.message)}}function hf(t,e,n){lf();const s=t.options.appId;if(!s)throw le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw le.create("no-api-key");if(Ut[s]!=null)throw le.create("already-exists",{id:s});if(!po){qd(Js);const{wrappedGtag:r,gtagCore:o}=Gd(Ut,lo,ho,Js,uf);oc=r,fo=o,po=!0}return Ut[s]=af(t,lo,ho,e,fo,Js,n),new cf(t)}/**
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
 */async function df(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}function aw(t=zi()){t=Y(t);const e=it(t,Hn);return e.isInitialized()?e.getImmediate():ff(t)}function ff(t,e={}){const n=it(t,Hn);if(n.isInitialized()){const i=n.getImmediate();if(Ht(e,n.getOptions()))return i;throw le.create("already-initialized")}return n.initialize({options:e})}function pf(t,e,n,s){t=Y(t),df(oc,Ut[t.app.options.appId],e,n,s).catch(i=>ie.error(i))}const go="@firebase/analytics",mo="0.7.6";function gf(){ge(new de(Hn,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return hf(s,i,n)},"PUBLIC")),ge(new de("analytics-internal",t,"PRIVATE")),ue(go,mo),ue(go,mo,"esm2017");function t(e){try{const n=e.getProvider(Hn).getImmediate();return{logEvent:(s,i,r)=>pf(n,s,i,r)}}catch(n){throw le.create("interop-component-reg-failed",{reason:n})}}}gf();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Yi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ac(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mf=ac,cc=new st("auth","Firebase",ac());/**
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
 */const yo=new hs("@firebase/auth");function Mn(t,...e){yo.logLevel<=C.ERROR&&yo.error(`Auth (${ln}): ${t}`,...e)}/**
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
 */function me(t,...e){throw Ji(t,...e)}function fe(t,...e){return Ji(t,...e)}function uc(t,e,n){const s=Object.assign(Object.assign({},mf()),{[e]:n});return new st("auth","Firebase",s).create(e,{appName:t.name})}function yf(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&me(t,"argument-error"),uc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ji(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return cc.create(t,...e)}function T(t,e,...n){if(!t)throw Ji(e,...n)}function we(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mn(e),new Error(e)}function _e(t,e){t||we(e)}/**
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
 */const vo=new Map;function Ie(t){_e(t instanceof Function,"Expected a class definition");let e=vo.get(t);return e?(_e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vo.set(t,e),e)}/**
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
 */function vf(t,e){const n=it(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ht(r,e!=null?e:{}))return i;me(i,"already-initialized")}return n.initialize({options:e})}function wf(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ie);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function yi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function If(){return wo()==="http:"||wo()==="https:"}function wo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ef(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(If()||qi()||"connection"in navigator)?navigator.onLine:!0}function Tf(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,_e(n>e,"Short delay should be less than long delay!"),this.isMobile=Ca()||ka()}get(){return Ef()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qi(t,e){_e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _f={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const bf=new hn(3e4,6e4);function Sf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,s,i={}){return hc(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=un(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lc.fetch()(dc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function hc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_f),e);try{const i=new Cf(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qs(t,"email-already-in-use",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uc(t,l,u);me(t,l)}}catch(i){if(i instanceof Se)throw i;me(t,"network-request-failed")}}async function Af(t,e,n,s,i={}){const r=await ps(t,e,n,s,i);return"mfaPendingCredential"in r&&me(t,"multi-factor-auth-required",{_serverResponse:r}),r}function dc(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Qi(t.config,i):`${t.config.apiScheme}://${i}`}class Cf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fe(this.auth,"network-request-failed")),bf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=fe(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function kf(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function Rf(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nf(t,e=!1){const n=Y(t),s=await n.getIdToken(e),i=Zi(s);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Vt(Zs(i.auth_time)),issuedAtTime:Vt(Zs(i.iat)),expirationTime:Vt(Zs(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zs(t){return Number(t)*1e3}function Zi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Mn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bl(n);return i?JSON.parse(i):(Mn("Failed to decode base64 JWT payload"),null)}catch(i){return Mn("Caught error parsing JWT payload as JSON",i),null}}function Df(t){const e=Zi(t);return T(e,"internal-error"),T(typeof e.exp!="undefined","internal-error"),T(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Se&&Of(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Of({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Pf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zn(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Kt(t,Rf(n,{idToken:s}));T(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xf(r.providerUserInfo):[],a=Lf(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Mf(t){const e=Y(t);await zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lf(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xf(t){return t.map(e=>{var{providerId:n}=e,s=Yi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ff(t,e){const n=await hc(t,{},async()=>{const s=un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=dc(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken!="undefined","internal-error"),T(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ff(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Gt;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
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
 */function Ce(t,e){T(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class He{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nf(this,e)}reload(){return Mf(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kt(this,kf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,ae=(u=n.createdAt)!==null&&u!==void 0?u:void 0,ce=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ve,emailVerified:Ae,isAnonymous:Ot,providerData:Pt,stsTokenManager:Mt}=n;T(ve&&Mt,e,"internal-error");const Fl=Gt.fromJSON(this.name,Mt);T(typeof ve=="string",e,"internal-error"),Ce(h,e.name),Ce(d,e.name),T(typeof Ae=="boolean",e,"internal-error"),T(typeof Ot=="boolean",e,"internal-error"),Ce(g,e.name),Ce(y,e.name),Ce(k,e.name),Ce(M,e.name),Ce(ae,e.name),Ce(ce,e.name);const Ks=new He({uid:ve,auth:e,email:d,emailVerified:Ae,displayName:h,isAnonymous:Ot,photoURL:y,phoneNumber:g,tenantId:k,stsTokenManager:Fl,createdAt:ae,lastLoginAt:ce});return Pt&&Array.isArray(Pt)&&(Ks.providerData=Pt.map(Ul=>Object.assign({},Ul))),M&&(Ks._redirectEventId=M),Ks}static async _fromIdTokenResponse(e,n,s=!1){const i=new Gt;i.updateFromServerResponse(n);const r=new He({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await zn(r),r}}/**
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
 */class pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pc.type="NONE";const Io=pc;/**
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
 */function Ln(t,e,n){return`firebase:${t}:${e}:${n}`}class ht{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ln(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ln("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?He._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ht(Ie(Io),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ie(Io);const o=Ln(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=He._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ht(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ht(r,e,s))}}/**
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
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wc(e))return"Blackberry";if(Ic(e))return"Webos";if(er(e))return"Safari";if((e.includes("chrome/")||mc(e))&&!e.includes("edge/"))return"Chrome";if(vc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gc(t=V()){return/firefox\//i.test(t)}function er(t=V()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mc(t=V()){return/crios\//i.test(t)}function yc(t=V()){return/iemobile/i.test(t)}function vc(t=V()){return/android/i.test(t)}function wc(t=V()){return/blackberry/i.test(t)}function Ic(t=V()){return/webos/i.test(t)}function gs(t=V()){return/iphone|ipad|ipod/i.test(t)}function Uf(t=V()){var e;return gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vf(){return Ra()&&document.documentMode===10}function Ec(t=V()){return gs(t)||vc(t)||Ic(t)||wc(t)||/windows phone/i.test(t)||yc(t)}function $f(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Tc(t,e=[]){let n;switch(t){case"Browser":n=Eo(V());break;case"Worker":n=`${Eo(V())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ln}/${s}`}/**
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
 */class Bf{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ie(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ht.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zn(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new st("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ie(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await ht.create(this,[Ie(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function tr(t){return Y(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yl(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class _c{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,n){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
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
 */async function dt(t,e){return Af(t,"POST","/v1/accounts:signInWithIdp",Sf(t,e))}/**
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
 */const jf="http://localhost";class Ye extends _c{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Yi(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ye(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dt(e,n)}buildRequest(){const e={requestUri:jf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=un(n)}return e}}/**
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
 */class nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dn extends nr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ke extends dn{constructor(){super("facebook.com")}static credential(e){return Ye._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
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
 */class Re extends dn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ye._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Re.credential(n,s)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class Ne extends dn{constructor(){super("github.com")}static credential(e){return Ye._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
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
 */class De extends dn{constructor(){super("twitter.com")}static credential(e,n){return Ye._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return De.credential(n,s)}catch{return null}}}De.TWITTER_SIGN_IN_METHOD="twitter.com";De.PROVIDER_ID="twitter.com";/**
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
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await He._fromIdTokenResponse(e,s,i),o=_o(s);return new gt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=_o(s);return new gt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function _o(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kn extends Se{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Kn(e,n,s,i)}}function bc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Kn._fromErrorAndOperation(t,r,e,s):r})}async function qf(t,e,n=!1){const s=await Kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gt._forOperation(t,"link",s)}/**
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
 */async function Hf(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Kt(t,bc(s,i,e,t),n);T(r.idToken,s,"internal-error");const o=Zi(r.idToken);T(o,s,"internal-error");const{sub:a}=o;return T(t.uid===a,s,"user-mismatch"),gt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&me(s,"user-mismatch"),r}}/**
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
 */async function zf(t,e,n=!1){const s="signIn",i=await bc(t,s,e),r=await gt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function cw(t,e,n,s){return Y(t).onAuthStateChanged(e,n,s)}function uw(t){return Y(t).signOut()}const Gn="__sak";/**
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
 */class Sc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Kf(){const t=V();return er(t)||gs(t)}const Gf=1e3,Wf=10;class Ac extends Sc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kf()&&$f(),this.fallbackToPolling=Ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Vf()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wf):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ac.type="LOCAL";const Xf=Ac;/**
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
 */class Cc extends Sc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cc.type="SESSION";const kc=Cc;/**
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
 */function Yf(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ms(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Yf(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
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
 */function sr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=sr("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pe(){return window}function Qf(t){pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Rc(){return typeof pe().WorkerGlobalScope!="undefined"&&typeof pe().importScripts=="function"}async function Zf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ep(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tp(){return Rc()?self:null}/**
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
 */const Nc="firebaseLocalStorageDb",np=1,Wn="firebaseLocalStorage",Dc="fbase_key";class fn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ys(t,e){return t.transaction([Wn],e?"readwrite":"readonly").objectStore(Wn)}function sp(){const t=indexedDB.deleteDatabase(Nc);return new fn(t).toPromise()}function vi(){const t=indexedDB.open(Nc,np);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Wn,{keyPath:Dc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Wn)?e(s):(s.close(),await sp(),e(await vi()))})})}async function bo(t,e,n){const s=ys(t,!0).put({[Dc]:e,value:n});return new fn(s).toPromise()}async function ip(t,e){const n=ys(t,!1).get(e),s=await new fn(n).toPromise();return s===void 0?null:s.value}function So(t,e){const n=ys(t,!0).delete(e);return new fn(n).toPromise()}const rp=800,op=3;class Oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>op)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(tp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zf(),!this.activeServiceWorker)return;this.sender=new Jf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ep()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await bo(e,Gn,"1"),await So(e,Gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ip(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>So(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ys(i,!1).getAll();return new fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oc.type="LOCAL";const ap=Oc;/**
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
 */function cp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function up(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=fe("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",cp().appendChild(s)})}function lp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new hn(3e4,6e4);/**
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
 */function Pc(t,e){return e?Ie(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ir extends _c{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hp(t){return zf(t.auth,new ir(t),t.bypassAuthState)}function dp(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Hf(n,new ir(t),t.bypassAuthState)}async function fp(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),qf(n,new ir(t),t.bypassAuthState)}/**
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
 */class Mc{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hp;case"linkViaPopup":case"linkViaRedirect":return fp;case"reauthViaPopup":case"reauthViaRedirect":return dp;default:me(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pp=new hn(2e3,1e4);async function lw(t,e,n){const s=tr(t);yf(t,e,nr);const i=Pc(s,n);return new Be(s,"signInViaPopup",e,i).executeNotNull()}class Be extends Mc{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,Be.currentPopupAction&&Be.currentPopupAction.cancel(),Be.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=sr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Be.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pp.get())};e()}}Be.currentPopupAction=null;/**
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
 */const gp="pendingRedirect",ei=new Map;class mp extends Mc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const s=await yp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yp(t,e){const n=wp(e),s=vp(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vp(t){return Ie(t._redirectPersistence)}function wp(t){return Ln(gp,t.config.apiKey,t.name)}async function Ip(t,e,n=!1){const s=tr(t),i=Pc(s,e),o=await new mp(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Ep=10*60*1e3;class Tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_p(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ep&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}function Ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _p(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lc(t);default:return!1}}/**
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
 */async function bp(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
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
 */const Sp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ap=/^https?/;async function Cp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bp(t);for(const n of e)try{if(kp(n))return}catch{}me(t,"unauthorized-domain")}function kp(t){const e=yi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Ap.test(n))return!1;if(Sp.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Rp=new hn(3e4,6e4);function Co(){const t=pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Np(t){return new Promise((e,n)=>{var s,i,r;function o(){Co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Co(),n(fe(t,"network-request-failed"))},timeout:Rp.get()})}if(!((i=(s=pe().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pe().gapi)===null||r===void 0)&&r.load)o();else{const a=lp("iframefcb");return pe()[a]=()=>{gapi.load?o():n(fe(t,"network-request-failed"))},up(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xn=null,e})}let xn=null;function Dp(t){return xn=xn||Np(t),xn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Op=new hn(5e3,15e3),Pp="__/auth/iframe",Mp="emulator/auth/iframe",Lp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fp(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,Mp):`https://${t.config.authDomain}/${Pp}`,s={apiKey:e.apiKey,appName:t.name,v:ln},i=xp.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${un(s).slice(1)}`}async function Up(t){const e=await Dp(t),n=pe().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Fp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=fe(t,"network-request-failed"),a=pe().setTimeout(()=>{r(o)},Op.get());function c(){pe().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$p=500,Bp=600,jp="_blank",qp="http://localhost";class ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hp(t,e,n,s=$p,i=Bp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vp),{width:s.toString(),height:i.toString(),top:r,left:o}),u=V().toLowerCase();n&&(a=mc(u)?jp:n),gc(u)&&(e=e||qp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(Uf(u)&&a!=="_self")return zp(e||"",a),new ko(null);const h=window.open(e||"",a,l);T(h,t,"popup-blocked");try{h.focus()}catch{}return new ko(h)}function zp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Kp="__/auth/handler",Gp="emulator/auth/handler";function Ro(t,e,n,s,i,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ln,eventId:i};if(e instanceof nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof dn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Wp(t)}?${un(a).slice(1)}`}function Wp({config:t}){return t.emulator?Qi(t,Gp):`https://${t.authDomain}/${Kp}`}/**
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
 */const ti="webStorageSupport";class Xp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kc,this._completeRedirectFn=Ip}async _openPopup(e,n,s,i){var r;_e((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ro(e,n,s,yi(),i);return Hp(e,o,sr())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Qf(Ro(e,n,s,yi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(_e(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Up(e),s=new Tp(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ti,{type:ti},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ti];o!==void 0&&n(!!o),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ec()||er()||gs()}}const Yp=Xp;var No="@firebase/auth",Do="0.19.10";/**
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
 */class Jp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zp(t){ge(new de("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{T(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),T(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tc(t)},l=new Bf(a,c,u);return wf(l,n),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ge(new de("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(s=>new Jp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(No,Do,Qp(t)),ue(No,Do,"esm2017")}/**
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
 */function hw(t=zi()){const e=it(t,"auth");return e.isInitialized()?e.getImmediate():vf(t,{popupRedirectResolver:Yp,persistence:[ap,Xf,kc]})}Zp("Browser");var eg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,rr=rr||{},E=eg||self;function Xn(){}function wi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tg(t){return Object.prototype.hasOwnProperty.call(t,ni)&&t[ni]||(t[ni]=++ng)}var ni="closure_uid_"+(1e9*Math.random()>>>0),ng=0;function sg(t,e,n){return t.call.apply(t.bind,arguments)}function ig(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function q(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q=sg:q=ig,q.apply(null,arguments)}function kn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function G(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Fe(){this.s=this.s,this.o=this.o}var rg=0,og={};Fe.prototype.s=!1;Fe.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),rg!=0)){var t=tg(this);delete og[t]}};Fe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Fc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function ag(t){e:{var e=Qg;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Oo(t){return Array.prototype.concat.apply([],arguments)}function or(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yn(t){return/^[\s\xa0]*$/.test(t)}var Po=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function J(t,e){return t.indexOf(e)!=-1}function si(t,e){return t<e?-1:t>e?1:0}var Q;e:{var Mo=E.navigator;if(Mo){var Lo=Mo.userAgent;if(Lo){Q=Lo;break e}}Q=""}function ar(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Uc(t){const e={};for(const n in t)e[n]=t[n];return e}var xo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vc(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<xo.length;r++)n=xo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function cr(t){return cr[" "](t),t}cr[" "]=Xn;function cg(t){var e=hg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ug=J(Q,"Opera"),mt=J(Q,"Trident")||J(Q,"MSIE"),$c=J(Q,"Edge"),Ii=$c||mt,Bc=J(Q,"Gecko")&&!(J(Q.toLowerCase(),"webkit")&&!J(Q,"Edge"))&&!(J(Q,"Trident")||J(Q,"MSIE"))&&!J(Q,"Edge"),lg=J(Q.toLowerCase(),"webkit")&&!J(Q,"Edge");function jc(){var t=E.document;return t?t.documentMode:void 0}var Jn;e:{var ii="",ri=function(){var t=Q;if(Bc)return/rv:([^\);]+)(\)|;)/.exec(t);if($c)return/Edge\/([\d\.]+)/.exec(t);if(mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lg)return/WebKit\/(\S+)/.exec(t);if(ug)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ri&&(ii=ri?ri[1]:""),mt){var oi=jc();if(oi!=null&&oi>parseFloat(ii)){Jn=String(oi);break e}}Jn=ii}var hg={};function dg(){return cg(function(){let t=0;const e=Po(String(Jn)).split("."),n=Po("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=si(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||si(i[2].length==0,r[2].length==0)||si(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ei;if(E.document&&mt){var Fo=jc();Ei=Fo||parseInt(Jn,10)||void 0}else Ei=void 0;var fg=Ei,pg=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",Xn,e),E.removeEventListener("test",Xn,e)}catch{}return t}();function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};function Wt(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bc){e:{try{cr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wt.Z.h.call(this)}}G(Wt,X);var gg={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),mg=0;function yg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++mg,this.ca=this.fa=!1}function vs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ws(t){this.src=t,this.g={},this.h=0}ws.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=_i(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new yg(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function Ti(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=xc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(vs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _i(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),ai={};function qc(t,e,n,s,i){if(s&&s.once)return zc(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qc(t,e[r],n,s,i);return null}return n=dr(n),t&&t[gn]?t.N(e,n,pn(s)?!!s.capture:!!s,i):Hc(t,e,n,!1,s,i)}function Hc(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=pn(i)?!!i.capture:!!i,a=hr(t);if(a||(t[ur]=a=new ws(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=vg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Gc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vg(){function t(n){return e.call(t.src,t.listener,n)}var e=wg;return t}function zc(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zc(t,e[r],n,s,i);return null}return n=dr(n),t&&t[gn]?t.O(e,n,pn(s)?!!s.capture:!!s,i):Hc(t,e,n,!0,s,i)}function Kc(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Kc(t,e[r],n,s,i);else s=pn(s)?!!s.capture:!!s,n=dr(n),t&&t[gn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=_i(r,n,s,i),-1<n&&(vs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_i(e,n,s,i)),(n=-1<t?e[t]:null)&&lr(n))}function lr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[gn])Ti(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hr(e))?(Ti(n,t),n.h==0&&(n.src=null,e[ur]=null)):vs(t)}}}function Gc(t){return t in ai?ai[t]:ai[t]="on"+t}function wg(t,e){if(t.ca)t=!0;else{e=new Wt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&lr(t),t=n.call(s,e)}return t}function hr(t){return t=t[ur],t instanceof ws?t:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function dr(t){return typeof t=="function"?t:(t[ci]||(t[ci]=function(e){return t.handleEvent(e)}),t[ci])}function $(){Fe.call(this),this.i=new ws(this),this.P=this,this.I=null}G($,Fe);$.prototype[gn]=!0;$.prototype.removeEventListener=function(t,e,n,s){Kc(this,t,e,n,s)};function H(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var i=e;e=new X(s,t),Vc(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Rn(o,s,!0,e)&&i}if(o=e.g=t,i=Rn(o,s,!0,e)&&i,i=Rn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Rn(o,s,!1,e)&&i}$.prototype.M=function(){if($.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)vs(n[s]);delete t.g[e],t.h--}}this.I=null};$.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Rn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ti(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var fr=E.JSON.stringify;function Ig(){var t=Xc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Eg{constructor(){this.h=this.g=null}add(e,n){const s=Wc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Wc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tg,t=>t.reset());class Tg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _g(t){E.setTimeout(()=>{throw t},0)}function pr(t,e){bi||bg(),Si||(bi(),Si=!0),Xc.add(t,e)}var bi;function bg(){var t=E.Promise.resolve(void 0);bi=function(){t.then(Sg)}}var Si=!1,Xc=new Eg;function Sg(){for(var t;t=Ig();){try{t.h.call(t.g)}catch(n){_g(n)}var e=Wc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Si=!1}function Is(t,e){$.call(this),this.h=t||1,this.g=e||E,this.j=q(this.kb,this),this.l=Date.now()}G(Is,$);m=Is.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),H(this,"tick"),this.da&&(gr(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}m.M=function(){Is.Z.M.call(this),gr(this),delete this.g};function mr(t,e,n){if(typeof t=="function")n&&(t=q(t,n));else if(t&&typeof t.handleEvent=="function")t=q(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function Yc(t){t.g=mr(()=>{t.g=null,t.i&&(t.i=!1,Yc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ag extends Fe{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yc(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){Fe.call(this),this.h=t,this.g={}}G(Xt,Fe);var Uo=[];function Jc(t,e,n,s){Array.isArray(n)||(n&&(Uo[0]=n.toString()),n=Uo);for(var i=0;i<n.length;i++){var r=qc(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qc(t){ar(t.g,function(e,n){this.g.hasOwnProperty(n)&&lr(e)},t),t.g={}}Xt.prototype.M=function(){Xt.Z.M.call(this),Qc(this)};Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Es(){this.g=!0}Es.prototype.Aa=function(){this.g=!1};function Cg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ut(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ng(t,n)+(s?" "+s:"")})}function Rg(t,e){t.info(function(){return"TIMEOUT: "+e})}Es.prototype.info=function(){};function Ng(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fr(n)}catch{return e}}var rt={},Vo=null;function Ts(){return Vo=Vo||new $}rt.Ma="serverreachability";function Zc(t){X.call(this,rt.Ma,t)}G(Zc,X);function Yt(t){const e=Ts();H(e,new Zc(e,t))}rt.STAT_EVENT="statevent";function eu(t,e){X.call(this,rt.STAT_EVENT,t),this.stat=e}G(eu,X);function Z(t){const e=Ts();H(e,new eu(e,t))}rt.Na="timingevent";function tu(t,e){X.call(this,rt.Na,t),this.size=e}G(tu,X);function mn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var _s={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},nu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yr(){}yr.prototype.h=null;function $o(t){return t.h||(t.h=t.i())}function su(){}var yn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function vr(){X.call(this,"d")}G(vr,X);function wr(){X.call(this,"c")}G(wr,X);var Ai;function bs(){}G(bs,yr);bs.prototype.g=function(){return new XMLHttpRequest};bs.prototype.i=function(){return{}};Ai=new bs;function vn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Xt(this),this.P=Dg,t=Ii?125:void 0,this.W=new Is(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var Dg=45e3,Ci={},Qn={};m=vn.prototype;m.setTimeout=function(t){this.P=t};function ki(t,e,n){t.K=1,t.v=As(be(e)),t.s=n,t.U=!0,ru(t,null)}function ru(t,e){t.F=Date.now(),wn(t),t.A=be(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),du(n.h,"t",s),t.C=0,n=t.l.H,t.h=new iu,t.g=Ou(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ag(q(t.Ia,t,t.g),t.O)),Jc(t.V,t.g,"readystatechange",t.gb),e=t.H?Uc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yt(1),Cg(t.j,t.u,t.A,t.m,t.X,t.s)}m.gb=function(t){t=t.target;const e=this.L;e&&Ee(t)==3?e.l():this.Ia(t)};m.Ia=function(t){try{if(t==this.g)e:{const l=Ee(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ii||this.g&&(this.h.h||this.g.ga()||Ho(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Yt(3):Yt(2)),Ss(this);var n=this.g.ba();this.N=n;t:if(ou(this)){var s=Ho(this.g);t="";var i=s.length,r=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){je(this),$t(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,kg(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yn(a)){var u=a;break t}}u=null}if(n=u)ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ri(this,n);else{this.i=!1,this.o=3,Z(12),je(this),$t(this);break e}}this.U?(au(this,l,o),Ii&&this.i&&l==3&&(Jc(this.V,this.W,"tick",this.fb),this.W.start())):(ut(this.j,this.m,o,null),Ri(this,o)),l==4&&je(this),this.i&&!this.I&&(l==4?ku(this.l,this):(this.i=!1,wn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),je(this),$t(this)}}}catch{}finally{}};function ou(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function au(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Og(t,n),i==Qn){e==4&&(t.o=4,Z(14),s=!1),ut(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ci){t.o=4,Z(15),ut(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ut(t.j,t.m,i,null),Ri(t,i);ou(t)&&i!=Qn&&i!=Ci&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Z(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),kr(e),e.L=!0,Z(11))):(ut(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),$t(t))}m.fb=function(){if(this.g){var t=Ee(this.g),e=this.g.ga();this.C<e.length&&(Ss(this),au(this,t,e),this.i&&t!=4&&wn(this))}};function Og(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qn:(n=Number(e.substring(n,s)),isNaN(n)?Ci:(s+=1,s+n>e.length?Qn:(e=e.substr(s,n),t.C=s+n,e)))}m.cancel=function(){this.I=!0,je(this)};function wn(t){t.Y=Date.now()+t.P,cu(t,t.P)}function cu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mn(q(t.eb,t),e)}function Ss(t){t.B&&(E.clearTimeout(t.B),t.B=null)}m.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Rg(this.j,this.A),this.K!=2&&(Yt(3),Z(17)),je(this),this.o=2,$t(this)):cu(this,this.Y-t)};function $t(t){t.l.G==0||t.I||ku(t.l,t)}function je(t){Ss(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,gr(t.W),Qc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ri(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ni(n.i,t))){if(n.I=t.N,!t.J&&Ni(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ns(n),Rs(n);else break e;Cr(n),Z(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=mn(q(n.ab,n),6e3));if(1>=gu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else qe(n,11)}else if((t.J||n.g==t)&&ns(n),!Yn(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(J(y,"spdy")||J(y,"quic")||J(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Tr(r,r.h),r.h=null))}if(s.D){const k=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,O(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Du(s,s.H?s.la:null,s.W),o.J){mu(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ss(a),wn(a)),s.g=o}else Au(s);0<n.l.length&&Ns(n)}else u[0]!="stop"&&u[0]!="close"||qe(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qe(n,7):Ar(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Yt(4)}catch{}}function Pg(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(wi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ir(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wi(t)||typeof t=="string")Fc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(wi(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Pg(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function bt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof bt)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}m=bt.prototype;m.R=function(){Er(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};m.T=function(){return Er(this),this.g.concat()};function Er(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Je(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],Je(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}m.get=function(t,e){return Je(this.h,t)?this.h[t]:e};m.set=function(t,e){Je(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};m.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function Je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var uu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=e!==void 0?e:t.g,Zn(this,t.j),this.s=t.s,es(this,t.i),ts(this,t.m),this.l=t.l,e=t.h;var n=new Jt;n.i=e.i,e.g&&(n.g=new bt(e.g),n.h=e.h),Bo(this,n),this.o=t.o}else t&&(n=String(t).match(uu))?(this.g=!!e,Zn(this,n[1]||"",!0),this.s=Bt(n[2]||""),es(this,n[3]||"",!0),ts(this,n[4]),this.l=Bt(n[5]||"",!0),Bo(this,n[6]||"",!0),this.o=Bt(n[7]||"")):(this.g=!!e,this.h=new Jt(null,this.g))}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ft(e,jo,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ft(e,jo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ft(n,n.charAt(0)=="/"?Vg:Ug,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ft(n,Bg)),t.join("")};function be(t){return new Qe(t)}function Zn(t,e,n){t.j=n?Bt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function es(t,e,n){t.i=n?Bt(e,!0):e}function ts(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bo(t,e,n){e instanceof Jt?(t.h=e,jg(t.h,t.g)):(n||(e=Ft(e,$g)),t.h=new Jt(e,t.g))}function O(t,e,n){t.h.set(e,n)}function As(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lg(t){return t instanceof Qe?be(t):new Qe(t,void 0)}function xg(t,e,n,s){var i=new Qe(null,void 0);return t&&Zn(i,t),e&&es(i,e),n&&ts(i,n),s&&(i.l=s),i}function Bt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ft(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jo=/[#\/\?@]/g,Ug=/[#\?:]/g,Vg=/[#\?]/g,$g=/[#\?@]/g,Bg=/#/g;function Jt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new bt,t.h=0,t.i&&Mg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=Jt.prototype;m.add=function(t,e){Ue(this),this.i=null,t=St(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lu(t,e){Ue(t),e=St(t,e),Je(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Je(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Er(t)))}function hu(t,e){return Ue(t),e=St(t,e),Je(t.g.h,e)}m.forEach=function(t,e){Ue(this),this.g.forEach(function(n,s){Fc(n,function(i){t.call(e,i,s,this)},this)},this)};m.T=function(){Ue(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};m.R=function(t){Ue(this);var e=[];if(typeof t=="string")hu(this,t)&&(e=Oo(e,this.g.get(St(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Oo(e,t[n])}return e};m.set=function(t,e){return Ue(this),this.i=null,t=St(this,t),hu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function du(t,e,n){lu(t,e),0<n.length&&(t.i=null,t.g.set(St(t,e),or(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function St(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jg(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(lu(this,s),du(this,i,n))},t)),t.j=e}var qg=class{constructor(t,e){this.h=t,this.g=e}};function fu(t){this.l=t||Hg,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hg=10;function pu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gu(t){return t.h?1:t.g?t.g.size:0}function Ni(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tr(t,e){t.g?t.g.add(e):t.h=e}function mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fu.prototype.cancel=function(){if(this.i=yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return or(t.i)}function _r(){}_r.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};_r.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function zg(){this.g=new _r}function Kg(t,e,n){const s=n||"";try{Ir(t,function(i,r){let o=i;pn(i)&&(o=fr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Gg(t,e){const n=new Es;if(E.Image){const s=new Image;s.onload=kn(Nn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=kn(Nn,n,s,"TestLoadImage: error",!1,e),s.onabort=kn(Nn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=kn(Nn,n,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Nn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function In(t){this.l=t.$b||null,this.j=t.ib||!1}G(In,yr);In.prototype.g=function(){return new Cs(this.l,this.j)};In.prototype.i=function(t){return function(){return t}}({});function Cs(t,e){$.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=br,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Cs,$);var br=0;m=Cs.prototype;m.open=function(t,e){if(this.readyState!=br)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qt(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,En(this)),this.readyState=br};m.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qt(this)),this.g&&(this.readyState=3,Qt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function vu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}m.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?En(this):Qt(this),this.readyState==3&&vu(this)}};m.Ua=function(t){this.g&&(this.response=this.responseText=t,En(this))};m.Ta=function(t){this.g&&(this.response=t,En(this))};m.ha=function(){this.g&&En(this)};function En(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qt(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wg=E.JSON.parse;function F(t){$.call(this),this.headers=new bt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wu,this.K=this.L=!1}G(F,$);var wu="",Xg=/^https?$/i,Yg=["POST","PUT"];m=F.prototype;m.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ai.g(),this.C=this.u?$o(this.u):$o(Ai),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){qo(this,r);return}t=n||"";const i=new bt(this.headers);s&&Ir(s,function(r,o){i.set(o,r)}),s=ag(i.T()),n=E.FormData&&t instanceof E.FormData,!(0<=xc(Yg,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tu(this),0<this.B&&((this.K=Jg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=mr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){qo(this,r)}};function Jg(t){return mt&&dg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Qg(t){return t.toLowerCase()=="content-type"}m.pa=function(){typeof rr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function qo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Iu(t),ks(t)}function Iu(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ks(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ks(this,!0)),F.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Eu(this):this.cb())};m.cb=function(){Eu(this)};function Eu(t){if(t.h&&typeof rr!="undefined"&&(!t.C[1]||Ee(t)!=4||t.ba()!=2)){if(t.v&&Ee(t)==4)mr(t.Fa,0,t);else if(H(t,"readystatechange"),Ee(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(uu)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Xg.test(i?i.toLowerCase():"")}n=s}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<Ee(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Iu(t)}}finally{ks(t)}}}}function ks(t,e){if(t.g){Tu(t);const n=t.g,s=t.C[0]?Xn:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=s}catch{}}}function Tu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function Ee(t){return t.g?t.g.readyState:0}m.ba=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wg(e)}};function Ho(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zg(t){let e="";return ar(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Sr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Zg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):O(t,e,n))}function Lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _u(t){this.za=0,this.l=[],this.h=new Es,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Lt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Lt("baseRetryDelayMs",5e3,t),this.$a=Lt("retryDelaySeedMs",1e4,t),this.Ya=Lt("forwardChannelMaxRetries",2,t),this.ra=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new fu(t&&t.concurrentRequestLimit),this.Ca=new zg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}m=_u.prototype;m.ma=8;m.G=1;function Ar(t){if(bu(t),t.G==3){var e=t.V++,n=be(t.F);O(n,"SID",t.J),O(n,"RID",e),O(n,"TYPE","terminate"),Tn(t,n),e=new vn(t,t.h,e,void 0),e.K=2,e.v=As(be(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ou(e.l,null),e.g.ea(e.v)),e.F=Date.now(),wn(e)}Nu(t)}m.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Rs(t){t.g&&(kr(t),t.g.cancel(),t.g=null)}function bu(t){Rs(t),t.u&&(E.clearTimeout(t.u),t.u=null),ns(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function ui(t,e){t.l.push(new qg(t.Za++,e)),t.G==3&&Ns(t)}function Ns(t){pu(t.i)||t.m||(t.m=!0,pr(t.Ha,t),t.C=0)}function em(t,e){return gu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mn(q(t.Ha,t,e),Ru(t,t.C)),t.C++,!0)}m.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new vn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Uc(r),Vc(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Su(this,i,e),n=be(this.F),O(n,"RID",t),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Tn(this,n),this.o&&r&&Sr(n,this.o,r),Tr(this.i,i),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",e),O(n,"SID","null"),i.$=!0,ki(i,n,null)):ki(i,n,e),this.G=2}}else this.G==3&&(t?zo(this,t):this.l.length==0||pu(this.i)||zo(this))};function zo(t,e){var n;e?n=e.m:n=t.V++;const s=be(t.F);O(s,"SID",t.J),O(s,"RID",n),O(s,"AID",t.U),Tn(t,s),t.o&&t.s&&Sr(s,t.o,t.s),n=new vn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Su(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tr(t.i,n),ki(n,s,e)}function Tn(t,e){t.j&&Ir({},function(n,s){O(e,s,n)})}function Su(t,e,n){n=Math.min(t.l.length,n);var s=t.j?q(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Kg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Au(t){t.g||t.u||(t.Y=1,pr(t.Ga,t),t.A=0)}function Cr(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mn(q(t.Ga,t),Ru(t,t.A)),t.A++,!0)}m.Ga=function(){if(this.u=null,Cu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mn(q(this.bb,this),t)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),Rs(this),Cu(this))};function kr(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function Cu(t){t.g=new vn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=be(t.oa);O(e,"RID","rpc"),O(e,"SID",t.J),O(e,"CI",t.N?"0":"1"),O(e,"AID",t.U),Tn(t,e),O(e,"TYPE","xmlhttp"),t.o&&t.s&&Sr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=As(be(e)),n.s=null,n.U=!0,ru(n,t)}m.ab=function(){this.v!=null&&(this.v=null,Rs(this),Cr(this),Z(19))};function ns(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function ku(t,e){var n=null;if(t.g==e){ns(t),kr(t),t.g=null;var s=2}else if(Ni(t.i,e))n=e.D,mu(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ts(),H(s,new tu(s,n,e,i)),Ns(t)}else Au(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&em(t,e)||s==2&&Cr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:qe(t,5);break;case 4:qe(t,10);break;case 3:qe(t,6);break;default:qe(t,2)}}}function Ru(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function qe(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=q(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Zn(n,"https"),As(n)),Gg(n.toString(),s)}else Z(2);t.G=0,t.j&&t.j.va(e),Nu(t),bu(t)}m.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function Nu(t){t.G=0,t.I=-1,t.j&&((yu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,or(t.l),t.l.length=0),t.j.ua())}function Du(t,e,n){let s=Lg(n);if(s.i!="")e&&es(s,e+"."+s.i),ts(s,s.m);else{const i=E.location;s=xg(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&ar(t.aa,function(i,r){O(s,r,i)}),e=t.D,n=t.sa,e&&n&&O(s,e,n),O(s,"VER",t.ma),Tn(t,s),s}function Ou(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new F(new In({ib:!0})):new F(t.qa),e.L=t.H,e}function Pu(){}m=Pu.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function ss(){if(mt&&!(10<=Number(fg)))throw Error("Environmental error: no available transport.")}ss.prototype.g=function(t,e){return new oe(t,e)};function oe(t,e){$.call(this),this.g=new _u(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Yn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new At(this)}G(oe,$);oe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),pr(q(t.hb,t,e))),Z(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Du(t,null,t.W),Ns(t)};oe.prototype.close=function(){Ar(this.g)};oe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ui(this.g,e)}else this.v?(e={},e.__data__=fr(t),ui(this.g,e)):ui(this.g,t)};oe.prototype.M=function(){this.g.j=null,delete this.j,Ar(this.g),delete this.g,oe.Z.M.call(this)};function Mu(t){vr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}G(Mu,vr);function Lu(){wr.call(this),this.status=1}G(Lu,wr);function At(t){this.g=t}G(At,Pu);At.prototype.xa=function(){H(this.g,"a")};At.prototype.wa=function(t){H(this.g,new Mu(t))};At.prototype.va=function(t){H(this.g,new Lu(t))};At.prototype.ua=function(){H(this.g,"b")};ss.prototype.createWebChannel=ss.prototype.g;oe.prototype.send=oe.prototype.u;oe.prototype.open=oe.prototype.m;oe.prototype.close=oe.prototype.close;_s.NO_ERROR=0;_s.TIMEOUT=8;_s.HTTP_ERROR=6;nu.COMPLETE="complete";su.EventType=yn;yn.OPEN="a";yn.CLOSE="b";yn.ERROR="c";yn.MESSAGE="d";$.prototype.listen=$.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var tm=function(){return new ss},nm=function(){return Ts()},li=_s,sm=nu,im=rt,Ko={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},rm=In,Dn=su,om=F;const Go="@firebase/firestore";/**
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
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
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
 */let Ct="9.6.9";/**
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
 */const Ze=new hs("@firebase/firestore");function Wo(){return Ze.logLevel}function v(t,...e){if(Ze.logLevel<=C.DEBUG){const n=e.map(Rr);Ze.debug(`Firestore (${Ct}): ${t}`,...n)}}function Me(t,...e){if(Ze.logLevel<=C.ERROR){const n=e.map(Rr);Ze.error(`Firestore (${Ct}): ${t}`,...n)}}function Xo(t,...e){if(Ze.logLevel<=C.WARN){const n=e.map(Rr);Ze.warn(`Firestore (${Ct}): ${t}`,...n)}}function Rr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function _(t="Unexpected state"){const e=`FIRESTORE (${Ct}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function N(t,e){t||_()}function b(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Se{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Oe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class um{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Oe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Oe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Oe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(N(typeof s.accessToken=="string"),new am(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N(e===null||typeof e=="string"),new ee(e)}}class lm{constructor(e,n,s){this.type="FirstParty",this.user=ee.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class hm{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new lm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fm{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(N(typeof n.token=="string"),this.p=n.token,new dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Nr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function pm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Nr.A=-1;class xu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=pm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function R(t,e){return t<e?-1:t>e?1:0}function yt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new re(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Yo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ot(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Zt{constructor(e,n,s){n===void 0?n=0:n>e.length&&_(),s===void 0?s=e.length-n:s>e.length-n&&_(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends Zt{construct(e,n,s){return new P(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new P(n)}static emptyPath(){return new P([])}}const gm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends Zt{construct(e,n,s){return new te(e,n,s)}static isValidIdentifier(e){return gm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new te(n)}static emptyPath(){return new te([])}}/**
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
 */class en{constructor(e){this.fields=e,e.sort(te.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class K{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new K(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new K(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}K.EMPTY_BYTE_STRING=new K("");const mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(t){if(N(!!t),typeof t=="string"){let e=0;const n=mm.exec(t);if(N(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:x(t.seconds),nanos:x(t.nanos)}}function x(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vt(t){return typeof t=="string"?K.fromBase64String(t):K.fromUint8Array(t)}/**
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
 */function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vu(t){const e=t.mapValue.fields.__previous_value__;return Uu(e)?Vu(e):e}function tn(t){const e=Le(t.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class ym{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function kt(t){return t==null}function is(t){return t===0&&1/t==-1/0}function vm(t){return typeof t=="number"&&Number.isInteger(t)&&!is(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(P.fromString(e))}static fromName(e){return new I(P.fromString(e).popFirst(5))}static empty(){return new I(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new P(e.slice()))}}function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:wm(t)?9:10:_()}function ye(t,e){if(t===e)return!0;const n=et(t);if(n!==et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tn(t).isEqual(tn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Le(s.timestampValue),o=Le(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vt(s.bytesValue).isEqual(vt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?is(r)===is(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return yt(t.arrayValue.values||[],e.arrayValue.values||[],ye);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Yo(r)!==Yo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ye(r[a],o[a])))return!1;return!0}(t,e);default:return _()}}function nn(t,e){return(t.values||[]).find(n=>ye(n,e))!==void 0}function It(t,e){if(t===e)return 0;const n=et(t),s=et(e);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jo(t.timestampValue,e.timestampValue);case 4:return Jo(tn(t),tn(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(i,r){const o=vt(i),a=vt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=R(x(i.latitude),x(r.latitude));return o!==0?o:R(x(i.longitude),x(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=It(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=It(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(t.mapValue,e.mapValue);default:throw _()}}function Jo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=Le(t),s=Le(e),i=R(n.seconds,s.seconds);return i!==0?i:R(n.nanos,s.nanos)}function ft(t){return Di(t)}function Di(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Le(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Di(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Di(s.fields[a])}`;return r+"}"}(t.mapValue):_();var e,n}function Oi(t){return!!t&&"integerValue"in t}function Dr(t){return!!t&&"arrayValue"in t}function Qo(t){return!!t&&"nullValue"in t}function Zo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fn(t){return!!t&&"mapValue"in t}function jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ot(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=jt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class se{constructor(e){this.value=e}static empty(){return new se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jt(n)}setAll(e){let n=te.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=jt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Fn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ye(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Fn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ot(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new se(jt(this.value))}}function $u(t){const e=[];return ot(t.fields,(n,s)=>{const i=new te([n]);if(Fn(s)){const r=$u(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
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
 */class W{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new W(e,0,S.min(),S.min(),se.empty(),0)}static newFoundDocument(e,n,s){return new W(e,1,n,S.min(),s,0)}static newNoDocument(e,n){return new W(e,2,n,S.min(),se.empty(),0)}static newUnknownDocument(e,n){return new W(e,3,n,S.min(),se.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Im{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function ea(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Im(t,e,n,s,i,r,o)}function Or(t){const e=b(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ft(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),kt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ft(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ft(s)).join(",")),e.P=n}return e.P}function Em(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ft(s.value)}`;var s}).join(", ")}]`),kt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ft(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ft(n)).join(",")),`Target(${e})`}function Pr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Rm(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ye(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!na(t.startAt,e.startAt)&&na(t.endAt,e.endAt)}function Pi(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ne extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new Tm(e,n,s):n==="array-contains"?new Sm(e,s):n==="in"?new Am(e,s):n==="not-in"?new Cm(e,s):n==="array-contains-any"?new km(e,s):new ne(e,n,s)}static V(e,n,s){return n==="in"?new _m(e,s):new bm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(It(n,this.value)):n!==null&&et(this.value)===et(n)&&this.v(It(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Tm extends ne{constructor(e,n,s){super(e,n,s),this.key=I.fromName(s.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.v(n)}}class _m extends ne{constructor(e,n){super(e,"in",n),this.keys=Bu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bm extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Bu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>I.fromName(s.referenceValue))}class Sm extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dr(n)&&nn(n.arrayValue,this.value)}}class Am extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nn(this.value.arrayValue,n)}}class Cm extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nn(this.value.arrayValue,n)}}class km extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>nn(this.value.arrayValue,s))}}class rs{constructor(e,n){this.position=e,this.inclusive=n}}class qt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ta(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),n.key):s=It(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function na(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ye(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ds{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Nm(t,e,n,s,i,r,o,a){return new Ds(t,e,n,s,i,r,o,a)}function ju(t){return new Ds(t)}function Un(t){return!kt(t.limit)&&t.limitType==="F"}function os(t){return!kt(t.limit)&&t.limitType==="L"}function Dm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Om(t){for(const e of t.filters)if(e.S())return e.field;return null}function Pm(t){return t.collectionGroup!==null}function sn(t){const e=b(t);if(e.D===null){e.D=[];const n=Om(e),s=Dm(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new qt(n)),e.D.push(new qt(te.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new qt(te.keyField(),r))}}}return e.D}function tt(t){const e=b(t);if(!e.C)if(e.limitType==="F")e.C=ea(e.path,e.collectionGroup,sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of sn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new qt(r.field,o))}const s=e.endAt?new rs(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new rs(e.startAt.position,!e.startAt.inclusive):null;e.C=ea(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.C}function Mm(t,e,n){return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Os(t,e){return Pr(tt(t),tt(e))&&t.limitType===e.limitType}function qu(t){return`${Or(tt(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${Em(tt(t))}; limitType=${t.limitType})`}function Mr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):I.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ta(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,sn(n),s)||n.endAt&&!function(i,r,o){const a=ta(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,sn(n),s))}(t,e)}function Hu(t){return(e,n)=>{let s=!1;for(const i of sn(t)){const r=Lm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Lm(t,e,n){const s=t.field.isKeyField()?I.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?It(a,c):_()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
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
 */function zu(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function Ku(t){return{integerValue:""+t}}function xm(t,e){return vm(e)?Ku(e):zu(t,e)}/**
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
 */class Ps{constructor(){this._=void 0}}function Fm(t,e,n){return t instanceof rn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof on?Wu(t,e):t instanceof an?Xu(t,e):function(s,i){const r=Gu(s,i),o=sa(r)+sa(s.k);return Oi(r)&&Oi(s.k)?Ku(o):zu(s.M,o)}(t,e)}function Um(t,e,n){return t instanceof on?Wu(t,e):t instanceof an?Xu(t,e):n}function Gu(t,e){return t instanceof as?Oi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class rn extends Ps{}class on extends Ps{constructor(e){super(),this.elements=e}}function Wu(t,e){const n=Yu(e);for(const s of t.elements)n.some(i=>ye(i,s))||n.push(s);return{arrayValue:{values:n}}}class an extends Ps{constructor(e){super(),this.elements=e}}function Xu(t,e){let n=Yu(e);for(const s of t.elements)n=n.filter(i=>!ye(i,s));return{arrayValue:{values:n}}}class as extends Ps{constructor(e,n){super(),this.M=e,this.k=n}}function sa(t){return x(t.integerValue||t.doubleValue)}function Yu(t){return Dr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Vm{constructor(e,n){this.field=e,this.transform=n}}function $m(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof on&&s instanceof on||n instanceof an&&s instanceof an?yt(n.elements,s.elements,ye):n instanceof as&&s instanceof as?ye(n.k,s.k):n instanceof rn&&s instanceof rn}(t.transform,e.transform)}class Bm{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ms{}function jm(t,e,n){t instanceof Ls?function(s,i,r){const o=s.value.clone(),a=oa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rt?function(s,i,r){if(!Vn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=oa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ju(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Li(t,e,n){t instanceof Ls?function(s,i,r){if(!Vn(s.precondition,i))return;const o=s.value.clone(),a=aa(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(ra(i),o).setHasLocalMutations()}(t,e,n):t instanceof Rt?function(s,i,r){if(!Vn(s.precondition,i))return;const o=aa(s.fieldTransforms,r,i),a=i.data;a.setAll(Ju(s)),a.setAll(o),i.convertToFoundDocument(ra(i),a).setHasLocalMutations()}(t,e,n):function(s,i){Vn(s.precondition,i)&&i.convertToNoDocument(S.min())}(t,e)}function qm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Gu(s.transform,i||null);r!=null&&(n==null&&(n=se.empty()),n.set(s.field,r))}return n||null}function ia(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&yt(n,s,(i,r)=>$m(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ra(t){return t.isFoundDocument()?t.version:S.min()}class Ls extends Ms{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Rt extends Ms{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ju(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function oa(t,e,n){const s=new Map;N(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Um(o,a,n[i]))}return s}function aa(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Fm(r,o,e))}return s}class Hm extends Ms{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class zm extends Ms{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Km{constructor(e){this.count=e}}/**
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
 */var L,A;function Gm(t){switch(t){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Qu(t){if(t===void 0)return Me("GRPC error has no .code"),f.UNKNOWN;switch(t){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(A=L||(L={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Nt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ot(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Fu(this.inner)}size(){return this.innerSize}}/**
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
 */class B{constructor(e,n){this.comparator=e,this.root=n||j.EMPTY}insert(e,n){return new B(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(e){return new B(this.comparator,this.root.remove(e,this.comparator).copy(null,null,j.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new On(this.root,e,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new On(this.root,e,this.comparator,!0)}}class On{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class j{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:j.RED,this.left=i!=null?i:j.EMPTY,this.right=r!=null?r:j.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new j(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return j.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(t,e,n,s,i){return this}insert(t,e,n){return new j(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class z{constructor(e){this.comparator=e,this.data=new B(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ca(this.data.getIterator())}getIteratorFrom(e){return new ca(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new z(this.comparator);return n.data=e,n}}class ca{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Wm=new B(I.comparator);function nt(){return Wm}const Xm=new B(I.comparator);function xi(){return Xm}function hi(){return new Nt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ym=new B(I.comparator),Jm=new z(I.comparator);function D(...t){let e=Jm;for(const n of t)e=e.add(n);return e}const Qm=new z(R);function Zu(){return Qm}/**
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
 */class xs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,_n.createSynthesizedTargetChangeForCurrentChange(e,n)),new xs(S.min(),s,Zu(),nt(),D())}}class _n{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new _n(K.EMPTY_BYTE_STRING,n,D(),D(),D())}}/**
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
 */class $n{constructor(e,n,s,i){this.O=e,this.removedTargetIds=n,this.key=s,this.$=i}}class el{constructor(e,n){this.targetId=e,this.F=n}}class tl{constructor(e,n,s=K.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ua{constructor(){this.B=0,this.L=ha(),this.q=K.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.q=e)}H(){let e=D(),n=D(),s=D();return this.L.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:_()}}),new _n(this.q,this.U,e,n,s)}J(){this.K=!1,this.L=ha()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class Zm{constructor(e){this.nt=e,this.st=new Map,this.it=nt(),this.rt=la(),this.ot=new z(R)}at(e){for(const n of e.O)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:_()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,s=e.F.count,i=this.wt(n);if(i){const r=i.target;if(Pi(r))if(s===0){const o=new I(r.path);this.ct(n,o,W.newNoDocument(o,S.min()))}else N(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Pi(a.target)){const c=new I(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,W.newNoDocument(c,e))}r.j&&(n.set(o,r.H()),r.J())}});let s=D();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(e));const i=new xs(e,n,this.ot,this.it,s);return this.it=nt(),this.rt=la(),this.ot=new z(R),i}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ua,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new z(R),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ua),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function la(){return new B(I.comparator)}function ha(){return new B(I.comparator)}/**
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
 */const ey=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ty=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ny{constructor(e,n){this.databaseId=e,this.N=n}}function cs(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nl(t,e){return t.N?e.toBase64():e.toUint8Array()}function sy(t,e){return cs(t,e.toTimestamp())}function Te(t){return N(!!t),S.fromTimestamp(function(e){const n=Le(e);return new re(n.seconds,n.nanos)}(t))}function Lr(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sl(t){const e=P.fromString(t);return N(ol(e)),e}function Fi(t,e){return Lr(t.databaseId,e.path)}function di(t,e){const n=sl(e);if(n.get(1)!==t.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(il(n))}function Ui(t,e){return Lr(t.databaseId,e)}function iy(t){const e=sl(t);return e.length===4?P.emptyPath():il(e)}function Vi(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function il(t){return N(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function da(t,e,n){return{name:Fi(t,e),fields:n.value.mapValue.fields}}function ry(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:_()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.N?(N(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(N(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Qu(c.code);return new w(u,c.message||"")}(o);n=new tl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=di(t,s.document.name),r=Te(s.document.updateTime),o=new se({mapValue:{fields:s.document.fields}}),a=W.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new $n(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=di(t,s.document),r=s.readTime?Te(s.readTime):S.min(),o=W.newNoDocument(i,r),a=s.removedTargetIds||[];n=new $n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=di(t,s.document),r=s.removedTargetIds||[];n=new $n([],r,i,null)}else{if(!("filter"in e))return _();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Km(i),o=s.targetId;n=new el(o,r)}}return n}function oy(t,e){let n;if(e instanceof Ls)n={update:da(t,e.key,e.value)};else if(e instanceof Hm)n={delete:Fi(t,e.key)};else if(e instanceof Rt)n={update:da(t,e.key,e.data),updateMask:my(e.fieldMask)};else{if(!(e instanceof zm))return _();n={verify:Fi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof rn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof on)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof an)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof as)return{fieldPath:r.field.canonicalString(),increment:o.k};throw _()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(t,e.precondition)),n}function ay(t,e){return t&&t.length>0?(N(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Te(s.updateTime):Te(i);return r.isEqual(S.min())&&(r=Te(i)),new Bm(r,s.transformResults||[])}(n,e))):[]}function cy(t,e){return{documents:[Ui(t,e.path)]}}function uy(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ui(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ui(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Zo(h.value))return{unaryFilter:{field:ct(h.field),op:"IS_NAN"}};if(Qo(h.value))return{unaryFilter:{field:ct(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Zo(h.value))return{unaryFilter:{field:ct(h.field),op:"IS_NOT_NAN"}};if(Qo(h.value))return{unaryFilter:{field:ct(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ct(h.field),op:fy(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ct(l.field),direction:dy(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.N||kt(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ly(t){let e=iy(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){N(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=rl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new qt(lt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,kt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new rs(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new rs(d,h)}(n.endAt)),Nm(e,i,o,r,a,"F",c,u)}function hy(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return _()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rl(t){return t?t.unaryFilter!==void 0?[gy(t)]:t.fieldFilter!==void 0?[py(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rl(e)).reduce((e,n)=>e.concat(n)):_():[]}function dy(t){return ey[t]}function fy(t){return ty[t]}function ct(t){return{fieldPath:t.canonicalString()}}function lt(t){return te.fromServerFormat(t.fieldPath)}function py(t){return ne.create(lt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}function gy(t){switch(t.unaryFilter.op){case"IS_NAN":const e=lt(t.unaryFilter.field);return ne.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=lt(t.unaryFilter.field);return ne.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=lt(t.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=lt(t.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}function my(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ol(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const yy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function bn(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&jm(r,e,s[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Li(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Li(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),D())}isEqual(e){return this.batchId===e.batchId&&yt(this.mutations,e.mutations,(n,s)=>ia(n,s))&&yt(this.baseMutations,e.baseMutations,(n,s)=>ia(n,s))}}class xr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){N(e.mutations.length===s.length);let i=Ym;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new xr(e,n,s,i)}}/**
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
 */class Iy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ke{constructor(e,n,s,i,r=S.min(),o=S.min(),a=K.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ke(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ey{constructor(e){this.Jt=e}}function Ty(t){const e=ly({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mm(e,e.limit,"L"):e}/**
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
 */class _y{constructor(){this.Ue=new by}addToCollectionParentIndex(e,n){return this.Ue.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.Ue.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getFieldIndex(e,n){return p.resolve(null)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class by{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new z(P.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new z(P.comparator)).toArray()}}/**
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
 */class Et{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Et(0)}static gn(){return new Et(-1)}}/**
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
 */async function Sn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==yy)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Sy{constructor(){this.changes=new Nt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,W.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ay{constructor(e,n,s){this.ls=e,this.Fs=n,this.indexManager=s}Bs(e,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Ls(e,n,s))}Ls(e,n,s){return this.ls.getEntry(e,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(e,n){e.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Us(e,n){return this.ls.getEntries(e,n).next(s=>this.Ks(e,s).next(()=>s))}Ks(e,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Gs(e,n,s){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(e,n.path):Pm(n)?this.js(e,n,s):this.Ws(e,n,s)}Qs(e,n){return this.Bs(e,new I(n)).next(s=>{let i=xi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(e,n,s){const i=n.collectionGroup;let r=xi();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Ds(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Ws(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}Ws(e,n,s){let i;return this.ls.getAll(e,n.path,s).next(r=>(i=r,this.Fs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let u=i.get(c);u==null&&(u=W.newInvalidDocument(c),i=i.insert(c,u)),Li(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{Mr(n,o)||(i=i.remove(r))}),i))}}/**
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
 */class Fr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.zs=s,this.Hs=i}static Js(e,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fr(e,n.fromCache,s,i)}}/**
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
 */class Cy{Ys(e){this.Xs=e}Gs(e,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(S.min())?this.Zs(e,n):this.Xs.Us(e,i).next(r=>{const o=this.ti(n,r);return(Un(n)||os(n))&&this.ei(n.limitType,o,i,s)?this.Zs(e,n):(Wo()<=C.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mi(n)),this.Xs.Gs(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,n){let s=new z(Hu(e));return n.forEach((i,r)=>{Mr(e,r)&&(s=s.add(r))}),s}ei(e,n,s,i){if(s.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(e,n){return Wo()<=C.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Xs.Gs(e,n,S.min())}}/**
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
 */class ky{constructor(e,n,s,i){this.persistence=e,this.ni=n,this.M=i,this.si=new B(R),this.ii=new Nt(r=>Or(r),Pr),this.ri=S.min(),this.oi=e.getRemoteDocumentCache(),this.hs=e.getTargetCache(),this.fs=e.getBundleCache(),this.ai(s)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Fs=this.persistence.getMutationQueue(e,this.indexManager),this.ui=new Ay(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function Ry(t,e,n,s){return new ky(t,e,n,s)}async function al(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Fs.getAllMutationBatches(s).next(r=>(i=r,n.ai(e),n.Fs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=D();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.ui.Us(s,c).next(u=>({ci:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ny(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const k=c.docVersions.get(g);N(k!==null),y.version.compareTo(k)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.Fs.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.Fs.performConsistencyCheck(s)).next(()=>n.ui.Us(s,i))})}function cl(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hs.getLastRemoteSnapshotVersion(n))}function Dy(t,e){const n=b(t),s=e.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(n.hs.removeMatchingKeys(r,u.removedDocuments,l).next(()=>n.hs.addMatchingKeys(r,u.addedDocuments,l)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(K.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(l,d),function(g,y,k){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(h,d,u)&&a.push(n.hs.updateTargetData(r,d))});let c=nt();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Oy(r,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(S.min())){const u=n.hs.getLastRemoteSnapshotVersion(r).next(l=>n.hs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.ui.Ks(r,c)).next(()=>c)}).then(r=>(n.si=i,r))}function Oy(t,e,n){let s=D();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let r=nt();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function Py(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Fs.getNextMutationBatchAfterBatchId(s,e)))}function My(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.hs.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):n.hs.allocateTargetId(s).next(o=>(i=new Ke(e,o,0,s.currentSequenceNumber),n.hs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(e,s.targetId)),s})}async function $i(t,e,n){const s=b(t),i=s.si.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.si=s.si.remove(e),s.ii.delete(i.target)}function fa(t,e,n){const s=b(t);let i=S.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=b(a),h=l.ii.get(u);return h!==void 0?p.resolve(l.si.get(h)):l.hs.getTargetData(c,u)}(s,o,tt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.hs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ni.Gs(o,e,n?i:S.min(),n?r:D())).next(a=>({documents:a,hi:r})))}/**
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
 */class Ly{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return p.resolve(this._i.get(n))}saveBundleMetadata(e,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:Te(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(s){return{name:s.name,query:Ty(s.bundledQuery),readTime:Te(s.readTime)}}(n)),p.resolve()}}/**
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
 */class xy{constructor(){this.overlays=new B(I.comparator),this.mi=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.Xt(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const i=hi(),r=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=hi(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=hi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}Xt(e,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Iy(n,s));let r=this.mi.get(n);r===void 0&&(r=D(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
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
 */class Ur{constructor(){this.gi=new z(U.yi),this.pi=new z(U.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const s=new U(e,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ei(new U(e,n))}Ai(e,n){e.forEach(s=>this.removeReference(s,n))}Ri(e){const n=new I(new P([])),s=new U(n,e),i=new U(n,e+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new I(new P([])),s=new U(n,e),i=new U(n,e+1);let r=D();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new U(e,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class U{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return I.comparator(e.key,n.key)||R(e.Vi,n.Vi)}static Ii(e,n){return R(e.Vi,n.Vi)||I.comparator(e.key,n.key)}}/**
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
 */class Fy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new z(U.yi)}checkEmpty(e){return p.resolve(this.Fs.length===0)}addMutationBatch(e,n,s,i){const r=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new wy(r,n,s,i);this.Fs.push(o);for(const a of i)this.Si=this.Si.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return p.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(e){return p.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new z(R);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),p.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;I.isDocumentKey(r)||(r=r.child(""));const o=new U(new I(r),0);let a=new z(R);return this.Si.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Vi)),!0)},o),p.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){N(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let s=this.Si;return p.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Si=s})}dn(e){}containsKey(e,n){const s=new U(n,0),i=this.Si.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Fs.length,p.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.Fs.length===0?0:e-this.Fs[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
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
 */class Uy{constructor(e){this.ki=e,this.docs=new B(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(e,n){let s=nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():W.newInvalidDocument(i))}),p.resolve(s)}getAll(e,n,s){let i=nt();const r=new I(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}Mi(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Vy(this)}getSize(e){return p.resolve(this.size)}}class Vy extends Sy{constructor(e){super(),this.Un=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Un.addEntry(e,i)):this.Un.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.Un.getEntry(e,n)}getAllFromCache(e,n){return this.Un.getEntries(e,n)}}/**
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
 */class $y{constructor(e){this.persistence=e,this.Oi=new Nt(n=>Or(n),Pr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.$i=0,this.Fi=new Ur,this.targetCount=0,this.Bi=Et.mn()}forEachTarget(e,n){return this.Oi.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),p.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new Et(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.In(n),p.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.Oi.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.Fi.Ti(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.Fi.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Fi.Ri(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Fi.Pi(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.Fi.containsKey(n))}}/**
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
 */class By{constructor(e,n){this.Li={},this.overlays={},this.Zn=new Nr(0),this.ts=!1,this.ts=!0,this.referenceDelegate=e(this),this.hs=new $y(this),this.indexManager=new _y,this.ls=function(s){return new Uy(s)}(s=>this.referenceDelegate.qi(s)),this.M=new Ey(n),this.fs=new Ly(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Li[e.toKey()];return s||(s=new Fy(n,this.referenceDelegate),this.Li[e.toKey()]=s),s}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const i=new jy(this.Zn.next());return this.referenceDelegate.Ui(),s(i).next(r=>this.referenceDelegate.Ki(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gi(e,n){return p.or(Object.values(this.Li).map(s=>()=>s.containsKey(e,n)))}}class jy extends vy{constructor(e){super(),this.currentSequenceNumber=e}}class Vr{constructor(e){this.persistence=e,this.Qi=new Ur,this.ji=null}static Wi(e){return new Vr(e)}get zi(){if(this.ji)return this.ji;throw _()}addReference(e,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),p.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ui(){this.ji=new Set}Ki(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zi,s=>{const i=I.fromPath(s);return this.Hi(e,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(e){return 0}Hi(e,n){return p.or([()=>p.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gi(e,n)])}}class pa{constructor(){this.activeTargetIds=Zu()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qy{constructor(){this.Or=new pa,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Or.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Or.Zi(e)}isLocalQueryTarget(e){return this.Or.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(e){return this.Or.activeTargetIds.has(e)}start(){return this.Or=new pa,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Hy{Fr(e){}shutdown(){}}/**
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
 */class ga{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Ur(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const zy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Ky{constructor(e){this.Qr=e.Qr,this.jr=e.jr}Wr(e){this.zr=e}Hr(e){this.Jr=e}onMessage(e){this.Yr=e}close(){this.jr()}send(e){this.Qr(e)}Xr(){this.zr()}Zr(e){this.Jr(e)}eo(e){this.Yr(e)}}/**
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
 */class Gy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.no=n+"://"+e.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(e,n,s,i,r){const o=this.ro(e,n);v("RestConnection","Sending: ",o,s);const a={};return this.oo(a,i,r),this.ao(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Xo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}uo(e,n,s,i,r){return this.io(e,n,s,i,r)}oo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ct,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ro(e,n){const s=zy[e];return`${this.no}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,s,i){return new Promise((r,o)=>{const a=new om;a.listenOnce(sm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case li.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case li.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(y)>=0?y:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}co(e,n,s){const i=[this.no,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=tm(),o=nm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rm({})),this.oo(a.initMessageHeaders,n,s),Ca()||ka()||ql()||Ra()||Hl()||qi()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new Ky({Qr:y=>{h?v("Connection","Not sending because WebChannel is closed:",y):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",y),u.send(y))},jr:()=>u.close()}),g=(y,k,M)=>{y.listen(k,ae=>{try{M(ae)}catch(ce){setTimeout(()=>{throw ce},0)}})};return g(u,Dn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),g(u,Dn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.Zr())}),g(u,Dn.EventType.ERROR,y=>{h||(h=!0,Xo("Connection","WebChannel transport errored:",y),d.Zr(new w(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,Dn.EventType.MESSAGE,y=>{var k;if(!h){const M=y.data[0];N(!!M);const ae=M,ce=ae.error||((k=ae[0])===null||k===void 0?void 0:k.error);if(ce){v("Connection","WebChannel received error:",ce);const ve=ce.status;let Ae=function(Pt){const Mt=L[Pt];if(Mt!==void 0)return Qu(Mt)}(ve),Ot=ce.message;Ae===void 0&&(Ae=f.INTERNAL,Ot="Unknown error status: "+ve+" with message "+ce.message),h=!0,d.Zr(new w(Ae,Ot)),u.close()}else v("Connection","WebChannel received:",M),d.eo(M)}}),g(o,im.STAT_EVENT,y=>{y.stat===Ko.PROXY?v("Connection","Detected buffering proxy"):y.stat===Ko.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Xr()},0),d}}function fi(){return typeof document!="undefined"?document:null}/**
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
 */function Fs(t){return new ny(t,!0)}class ul{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hn=e,this.timerId=n,this.ho=s,this.lo=i,this.fo=r,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(e){this.cancel();const n=Math.floor(this._o+this.Io()),s=Math.max(0,Date.now()-this.mo),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,()=>(this.mo=Date.now(),e())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
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
 */class ll{constructor(e,n,s,i,r,o,a,c){this.Hn=e,this.Eo=s,this.Ao=i,this.Ro=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new ul(e,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(e){this.Oo(),this.stream.send(e)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,e!==4?this.vo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const e=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.bo===n&&this.Lo(s,i)},s=>{e(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Lo(e,n){const s=this.Bo(this.bo);this.stream=this.Uo(e,n),this.stream.Wr(()=>{s(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Bo(e){return n=>{this.Hn.enqueueAndForget(()=>this.bo===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wy extends ll{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Uo(e,n){return this.Ro.co("Listen",e,n)}onMessage(e){this.vo.reset();const n=ry(this.M,e),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?Te(r.readTime):S.min()}(e);return this.listener.Ko(n,s)}Go(e){const n={};n.database=Vi(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=Pi(a)?{documents:cy(i,a)}:{query:uy(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=nl(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=cs(i,r.snapshotVersion.toTimestamp())),o}(this.M,e);const s=hy(this.M,e);s&&(n.labels=s),this.Mo(n)}Qo(e){const n={};n.database=Vi(this.M),n.removeTarget=e,this.Mo(n)}}class Xy extends ll{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(e,n){return this.Ro.co("Write",e,n)}onMessage(e){if(N(!!e.streamToken),this.lastStreamToken=e.streamToken,this.jo){this.vo.reset();const n=ay(e.writeResults,e.commitTime),s=Te(e.commitTime);return this.listener.Ho(s,n)}return N(!e.writeResults||e.writeResults.length===0),this.jo=!0,this.listener.Jo()}Yo(){const e={};e.database=Vi(this.M),this.Mo(e)}zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>oy(this.M,s))};this.Mo(n)}}/**
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
 */class Yy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Ro=s,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}io(e,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}uo(e,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.uo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.Xo=!0}}class Jy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(e){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ia("Offline")))}set(e){this.aa(),this.ta=0,e==="Online"&&(this.na=!1),this.ia(e)}ia(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(Me(n),this.na=!1):v("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
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
 */class Qy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=r,this.fa.Fr(o=>{s.enqueueAndForget(async()=>{at(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.ha.add(4),await An(c),c.da.set("Unknown"),c.ha.delete(4),await Us(c)}(this))})}),this.da=new Jy(s,i)}}async function Us(t){if(at(t))for(const e of t.la)await e(!0)}async function An(t){for(const e of t.la)await e(!1)}function hl(t,e){const n=b(t);n.ca.has(e.targetId)||(n.ca.set(e.targetId,e),jr(n)?Br(n):Dt(n).Do()&&$r(n,e))}function dl(t,e){const n=b(t),s=Dt(n);n.ca.delete(e),s.Do()&&fl(n,e),n.ca.size===0&&(s.Do()?s.No():at(n)&&n.da.set("Unknown"))}function $r(t,e){t._a.Z(e.targetId),Dt(t).Go(e)}function fl(t,e){t._a.Z(e),Dt(t).Qo(e)}function Br(t){t._a=new Zm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.ca.get(e)||null}),Dt(t).start(),t.da.sa()}function jr(t){return at(t)&&!Dt(t).So()&&t.ca.size>0}function at(t){return b(t).ha.size===0}function pl(t){t._a=void 0}async function Zy(t){t.ca.forEach((e,n)=>{$r(t,e)})}async function ev(t,e){pl(t),jr(t)?(t.da.oa(e),Br(t)):t.da.set("Unknown")}async function tv(t,e,n){if(t.da.set("Online"),e instanceof tl&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.ca.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.ca.delete(o),s._a.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await us(t,s)}else if(e instanceof $n?t._a.at(e):e instanceof el?t._a._t(e):t._a.ht(e),!n.isEqual(S.min()))try{const s=await cl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i._a.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.ca.get(c);u&&i.ca.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.ca.get(a);if(!c)return;i.ca.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),fl(i,a);const u=new Ke(c.target,a,1,c.sequenceNumber);$r(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await us(t,s)}}async function us(t,e,n){if(!bn(e))throw e;t.ha.add(1),await An(t),t.da.set("Offline"),n||(n=()=>cl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.ha.delete(1),await Us(t)})}function gl(t,e){return e().catch(n=>us(t,n,e))}async function Vs(t){const e=b(t),n=xe(e);let s=e.ua.length>0?e.ua[e.ua.length-1].batchId:-1;for(;nv(e);)try{const i=await Py(e.localStore,s);if(i===null){e.ua.length===0&&n.No();break}s=i.batchId,sv(e,i)}catch(i){await us(e,i)}ml(e)&&yl(e)}function nv(t){return at(t)&&t.ua.length<10}function sv(t,e){t.ua.push(e);const n=xe(t);n.Do()&&n.Wo&&n.zo(e.mutations)}function ml(t){return at(t)&&!xe(t).So()&&t.ua.length>0}function yl(t){xe(t).start()}async function iv(t){xe(t).Yo()}async function rv(t){const e=xe(t);for(const n of t.ua)e.zo(n.mutations)}async function ov(t,e,n){const s=t.ua.shift(),i=xr.from(s,e,n);await gl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vs(t)}async function av(t,e){e&&xe(t).Wo&&await async function(n,s){if(i=s.code,Gm(i)&&i!==f.ABORTED){const r=n.ua.shift();xe(n).xo(),await gl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Vs(n)}var i}(t,e),ml(t)&&yl(t)}async function ma(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=at(n);n.ha.add(3),await An(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.ha.delete(3),await Us(n)}async function cv(t,e){const n=b(t);e?(n.ha.delete(2),await Us(n)):e||(n.ha.add(2),await An(n),n.da.set("Unknown"))}function Dt(t){return t.wa||(t.wa=function(e,n,s){const i=b(e);return i.Zo(),new Wy(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(t.datastore,t.asyncQueue,{Wr:Zy.bind(null,t),Hr:ev.bind(null,t),Ko:tv.bind(null,t)}),t.la.push(async e=>{e?(t.wa.xo(),jr(t)?Br(t):t.da.set("Unknown")):(await t.wa.stop(),pl(t))})),t.wa}function xe(t){return t.ma||(t.ma=function(e,n,s){const i=b(e);return i.Zo(),new Xy(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(t.datastore,t.asyncQueue,{Wr:iv.bind(null,t),Hr:av.bind(null,t),Jo:rv.bind(null,t),Ho:ov.bind(null,t)}),t.la.push(async e=>{e?(t.ma.xo(),await Vs(t)):(await t.ma.stop(),t.ua.length>0&&(v("RemoteStore",`Stopping write stream with ${t.ua.length} pending writes`),t.ua=[]))})),t.ma}/**
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
 */class qr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new qr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hr(t,e){if(Me("AsyncQueue",`${e}: ${t}`),bn(t))return new w(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||I.comparator(n.key,s.key):(n,s)=>I.comparator(n.key,s.key),this.keyedMap=xi(),this.sortedSet=new B(this.comparator)}static emptySet(e){return new pt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ya{constructor(){this.ga=new B(I.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_():this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class Tt{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Tt(e,n,pt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Os(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class uv{constructor(){this.pa=void 0,this.listeners=[]}}class lv{constructor(){this.queries=new Nt(e=>qu(e),Os),this.onlineState="Unknown",this.Ia=new Set}}async function hv(t,e){const n=b(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new uv),i)try{r.pa=await n.onListen(s)}catch(o){const a=Hr(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ta(n.onlineState),r.pa&&e.Ea(r.pa)&&zr(n)}async function dv(t,e){const n=b(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function fv(t,e){const n=b(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ea(i)&&(s=!0);o.pa=i}}s&&zr(n)}function pv(t,e,n){const s=b(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zr(t){t.Ia.forEach(e=>{e.next()})}class gv{constructor(e,n,s){this.query=e,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=s||{}}Ea(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Tt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(e)&&(this.Aa.next(e),n=!0):this.Va(e,this.onlineState)&&(this.va(e),n=!0),this.ba=e,n}onError(e){this.Aa.error(e)}Ta(e){this.onlineState=e;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,e)&&(this.va(this.ba),n=!0),n}Va(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Sa||!s)&&(!e.docs.isEmpty()||n==="Offline")}Pa(e){if(e.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(e){e=Tt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Ra=!0,this.Aa.next(e)}}/**
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
 */class vl{constructor(e){this.key=e}}class wl{constructor(e){this.key=e}}class mv{constructor(e,n){this.query=e,this.ka=n,this.Ma=null,this.current=!1,this.Oa=D(),this.mutatedKeys=D(),this.$a=Hu(e),this.Fa=new pt(this.$a)}get Ba(){return this.ka}La(e,n){const s=n?n.qa:new ya,i=n?n.Fa:this.Fa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Un(this.query)&&i.size===this.query.limit?i.last():null,u=os(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=Mr(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let M=!1;d&&g?d.data.isEqual(g.data)?y!==k&&(s.track({type:3,doc:g}),M=!0):this.Ua(d,g)||(s.track({type:2,doc:g}),M=!0,(c&&this.$a(g,c)>0||u&&this.$a(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),M=!0):d&&!g&&(s.track({type:1,doc:d}),M=!0,(c||u)&&(a=!0)),M&&(g?(o=o.add(g),r=k?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),Un(this.query)||os(this.query))for(;o.size>this.query.limit;){const l=Un(this.query)?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Fa:o,qa:s,ei:a,mutatedKeys:r}}Ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Fa;this.Fa=e.Fa,this.mutatedKeys=e.mutatedKeys;const r=e.qa.ya();r.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return g(h)-g(d)}(u.type,l.type)||this.$a(u.doc,l.doc)),this.Ka(s);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,c=a!==this.Ma;return this.Ma=a,r.length!==0||c?{snapshot:new Tt(this.query,e.Fa,i,r,e.mutatedKeys,a===0,c,!1),Qa:o}:{Qa:o}}Ta(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new ya,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(e){return!this.ka.has(e)&&!!this.Fa.has(e)&&!this.Fa.get(e).hasLocalMutations}Ka(e){e&&(e.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=e.current)}Ga(){if(!this.current)return[];const e=this.Oa;this.Oa=D(),this.Fa.forEach(s=>{this.ja(s.key)&&(this.Oa=this.Oa.add(s.key))});const n=[];return e.forEach(s=>{this.Oa.has(s)||n.push(new wl(s))}),this.Oa.forEach(s=>{e.has(s)||n.push(new vl(s))}),n}Wa(e){this.ka=e.hi,this.Oa=D();const n=this.La(e.documents);return this.applyChanges(n,!0)}za(){return Tt.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class yv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class vv{constructor(e){this.key=e,this.Ha=!1}}class wv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new Nt(a=>qu(a),Os),this.Xa=new Map,this.Za=new Set,this.tu=new B(I.comparator),this.eu=new Map,this.nu=new Ur,this.su={},this.iu=new Map,this.ru=Et.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function Iv(t,e){const n=Nv(t);let s,i;const r=n.Ya.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.za();else{const o=await My(n.localStore,tt(e));n.isPrimaryClient&&hl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ev(n,e,s,a==="current")}return i}async function Ev(t,e,n,s){t.au=(l,h,d)=>async function(g,y,k,M){let ae=y.view.La(k);ae.ei&&(ae=await fa(g.localStore,y.query,!1).then(({documents:Ae})=>y.view.La(Ae,ae)));const ce=M&&M.targetChanges.get(y.targetId),ve=y.view.applyChanges(ae,g.isPrimaryClient,ce);return wa(g,y.targetId,ve.Qa),ve.snapshot}(t,l,h,d);const i=await fa(t.localStore,e,!0),r=new mv(e,i.hi),o=r.La(i.documents),a=_n.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);wa(t,n,c.Qa);const u=new yv(e,n,r);return t.Ya.set(e,u),t.Xa.has(n)?t.Xa.get(n).push(e):t.Xa.set(n,[e]),c.snapshot}async function Tv(t,e){const n=b(t),s=n.Ya.get(e),i=n.Xa.get(s.targetId);if(i.length>1)return n.Xa.set(s.targetId,i.filter(r=>!Os(r,e))),void n.Ya.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $i(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dl(n.remoteStore,s.targetId),Bi(n,s.targetId)}).catch(Sn)):(Bi(n,s.targetId),await $i(n.localStore,s.targetId,!0))}async function _v(t,e,n){const s=Dv(t);try{const i=await function(r,o){const a=b(r),c=re.now(),u=o.reduce((h,d)=>h.add(d.key),D());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ui.Us(h,u).next(d=>{l=d;const g=[];for(const y of o){const k=qm(y,l.get(y.key));k!=null&&g.push(new Rt(y.key,k,$u(k.value.mapValue),ze.exists(!0)))}return a.Fs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.su[r.currentUser.toKey()];c||(c=new B(R)),c=c.insert(o,a),r.su[r.currentUser.toKey()]=c}(s,i.batchId,n),await Cn(s,i.changes),await Vs(s.remoteStore)}catch(i){const r=Hr(i,"Failed to persist write");n.reject(r)}}async function Il(t,e){const n=b(t);try{const s=await Dy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.eu.get(r);o&&(N(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ha=!0:i.modifiedDocuments.size>0?N(o.Ha):i.removedDocuments.size>0&&(N(o.Ha),o.Ha=!1))}),await Cn(n,s,e)}catch(s){await Sn(s)}}function va(t,e,n){const s=b(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ya.forEach((r,o)=>{const a=o.view.Ta(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ta(o)&&(c=!0)}),c&&zr(a)}(s.eventManager,e),i.length&&s.Ja.Ko(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bv(t,e,n){const s=b(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.eu.get(e),r=i&&i.key;if(r){let o=new B(I.comparator);o=o.insert(r,W.newNoDocument(r,S.min()));const a=D().add(r),c=new xs(S.min(),new Map,new z(R),o,a);await Il(s,c),s.tu=s.tu.remove(r),s.eu.delete(e),Kr(s)}else await $i(s.localStore,e,!1).then(()=>Bi(s,e,n)).catch(Sn)}async function Sv(t,e){const n=b(t),s=e.batch.batchId;try{const i=await Ny(n.localStore,e);Tl(n,s,null),El(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Cn(n,i)}catch(i){await Sn(i)}}async function Av(t,e,n){const s=b(t);try{const i=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Fs.lookupMutationBatch(c,o).next(l=>(N(l!==null),u=l.keys(),a.Fs.removeMutationBatch(c,l))).next(()=>a.Fs.performConsistencyCheck(c)).next(()=>a.ui.Us(c,u))})}(s.localStore,e);Tl(s,e,n),El(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Cn(s,i)}catch(i){await Sn(i)}}function El(t,e){(t.iu.get(e)||[]).forEach(n=>{n.resolve()}),t.iu.delete(e)}function Tl(t,e,n){const s=b(t);let i=s.su[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.su[s.currentUser.toKey()]=i}}function Bi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Xa.get(e))t.Ya.delete(s),n&&t.Ja.uu(s,n);t.Xa.delete(e),t.isPrimaryClient&&t.nu.Ri(e).forEach(s=>{t.nu.containsKey(s)||_l(t,s)})}function _l(t,e){t.Za.delete(e.path.canonicalString());const n=t.tu.get(e);n!==null&&(dl(t.remoteStore,n),t.tu=t.tu.remove(e),t.eu.delete(n),Kr(t))}function wa(t,e,n){for(const s of n)s instanceof vl?(t.nu.addReference(s.key,e),Cv(t,s)):s instanceof wl?(v("SyncEngine","Document no longer in limbo: "+s.key),t.nu.removeReference(s.key,e),t.nu.containsKey(s.key)||_l(t,s.key)):_()}function Cv(t,e){const n=e.key,s=n.path.canonicalString();t.tu.get(n)||t.Za.has(s)||(v("SyncEngine","New document in limbo: "+n),t.Za.add(s),Kr(t))}function Kr(t){for(;t.Za.size>0&&t.tu.size<t.maxConcurrentLimboResolutions;){const e=t.Za.values().next().value;t.Za.delete(e);const n=new I(P.fromString(e)),s=t.ru.next();t.eu.set(s,new vv(n)),t.tu=t.tu.insert(n,s),hl(t.remoteStore,new Ke(tt(ju(n.path)),s,2,Nr.A))}}async function Cn(t,e,n){const s=b(t),i=[],r=[],o=[];s.Ya.isEmpty()||(s.Ya.forEach((a,c)=>{o.push(s.au(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Fr.Js(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Ja.Ko(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.zs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Hs,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!bn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.si.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.si=u.si.insert(h,y)}}}(s.localStore,r))}async function kv(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await al(n.localStore,e);n.currentUser=e,function(i,r){i.iu.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cn(n,s.ci)}}function Rv(t,e){const n=b(t),s=n.eu.get(e);if(s&&s.Ha)return D().add(s.key);{let i=D();const r=n.Xa.get(e);if(!r)return i;for(const o of r){const a=n.Ya.get(o);i=i.unionWith(a.view.Ba)}return i}}function Nv(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Il.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bv.bind(null,e),e.Ja.Ko=fv.bind(null,e.eventManager),e.Ja.uu=pv.bind(null,e.eventManager),e}function Dv(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Av.bind(null,e),e}class Ov{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Fs(e.databaseInfo.databaseId),this.sharedClientState=this.hu(e),this.persistence=this.lu(e),await this.persistence.start(),this.gcScheduler=this.fu(e),this.localStore=this.du(e)}fu(e){return null}du(e){return Ry(this.persistence,new Cy,e.initialUser,this.M)}lu(e){return new By(Vr.Wi,this.M)}hu(e){return new qy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>va(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kv.bind(null,this.syncEngine),await cv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lv}createDatastore(e){const n=Fs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Gy(i));var i;return function(r,o,a,c){return new Yy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>va(this.syncEngine,a,0),o=ga.vt()?new ga:new Hy,new Qy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new wv(s,i,r,o,a,c);return u&&(l.ou=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=b(e);v("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await An(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
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
 */class Mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.wu(this.observer.next,e)}error(e){this.observer.error?this.wu(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}mu(){this.muted=!0}wu(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ee.UNAUTHENTICATED,this.clientId=xu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xv(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await al(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uv(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ma(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ma(e.remoteStore,r)),t.onlineComponents=e}async function Uv(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await xv(t,new Ov)),t.offlineComponents}async function bl(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Fv(t,new Pv)),t.onlineComponents}function Vv(t){return bl(t).then(e=>e.syncEngine)}async function $v(t){const e=await bl(t),n=e.eventManager;return n.onListen=Iv.bind(null,e.syncEngine),n.onUnlisten=Tv.bind(null,e.syncEngine),n}function Bv(t,e,n={}){const s=new Oe;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new Mv({next:h=>{r.enqueueAndForget(()=>dv(i,l)),h.fromCache&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gv(o,u,{includeMetadataChanges:!0,Sa:!0});return hv(i,l)}(await $v(t),t.asyncQueue,e,n,s)),s.promise}const Ia=new Map;/**
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
 */function Sl(t,e,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jv(t,e,n,s){if(e===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ea(t){if(!I.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(I.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_()}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gr(t);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _a{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wr{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _a({}),this._settingsFrozen=!1,e instanceof wt?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(i.options.projectId)}(e))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _a(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cm;switch(n.type){case"gapi":const s=n.client;return N(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new hm(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ia.get(e);n&&(v("ComponentProvider","Removing Datastore"),Ia.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class he{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class $s{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $s(this.firestore,e,this._query)}}class Pe extends $s{constructor(e,n,s){super(e,n,ju(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new I(e))}withConverter(e){return new Pe(this.firestore,e,this._path)}}function dw(t,e,...n){if(t=Y(t),Sl("collection","path",e),t instanceof Wr){const s=P.fromString(e,...n);return Ta(s),new Pe(t,null,s)}{if(!(t instanceof he||t instanceof Pe))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Ta(s),new Pe(t.firestore,null,s)}}function qv(t,e,...n){if(t=Y(t),arguments.length===1&&(e=xu.R()),Sl("doc","path",e),t instanceof Wr){const s=P.fromString(e,...n);return Ea(s),new he(t,null,new I(s))}{if(!(t instanceof he||t instanceof Pe))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Ea(s),new he(t.firestore,t instanceof Pe?t.converter:null,new I(s))}}/**
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
 */class Hv{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new ul(this,"async_queue_retry"),this.Fu=()=>{const n=fi();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const e=fi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Bu(),this.Lu(e)}enterRestrictedMode(e){if(!this.xu){this.xu=!0,this.Ou=e||!1;const n=fi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(e){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new Oe;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Cu.push(e),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(e){if(!bn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(e){const n=this.Du.then(()=>(this.Mu=!0,e().catch(s=>{this.ku=s,this.Mu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Me("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Mu=!1,s))));return this.Du=n,n}enqueueAfterDelay(e,n,s){this.Bu(),this.$u.indexOf(e)>-1&&(n=0);const i=qr.createAndSchedule(this,e,n,s,r=>this.Uu(r));return this.Nu.push(i),i}Bu(){this.ku&&_()}verifyOperationInProgress(){}async Ku(){let e;do e=this.Du,await e;while(e!==this.Du)}Gu(e){for(const n of this.Nu)if(n.timerId===e)return!0;return!1}Qu(e){return this.Ku().then(()=>{this.Nu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ku()})}ju(e){this.$u.push(e)}Uu(e){const n=this.Nu.indexOf(e);this.Nu.splice(n,1)}}class Bs extends Wr{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Hv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function fw(t=zi()){return it(t,"firestore").getImmediate()}function Al(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new ym(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Lv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class js{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(K.fromBase64String(e))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _t(K.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qs{constructor(e){this._methodName=e}}/**
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
 */class Xr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
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
 */const zv=/^__.*__$/;class Kv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ls(e,this.data,n,this.fieldTransforms)}}class kl{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Rt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Yr{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Wu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(e){return new Yr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Hu({path:s,Yu:!1});return i.Xu(e),i}Zu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Hu({path:s,Yu:!1});return i.Wu(),i}tc(e){return this.Hu({path:void 0,Yu:!0})}ec(e){return ls(e,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Wu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Xu(this.path.get(e))}Xu(e){if(e.length===0)throw this.ec("Document fields must not be empty");if(Rl(this.zu)&&zv.test(e))throw this.ec('Document fields cannot begin and end with "__"')}}class Gv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Fs(e)}ic(e,n,s,i=!1){return new Yr({zu:e,methodName:n,sc:s,path:te.emptyPath(),Yu:!1,nc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Nl(t){const e=t._freezeSettings(),n=Fs(t._databaseId);return new Gv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wv(t,e,n,s,i,r={}){const o=t.ic(r.merge||r.mergeFields?2:0,e,n,i);Qr("Data must be an object, but it was:",o,s);const a=Dl(s,o);let c,u;if(r.merge)c=new en(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=ji(e,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pl(l,d)||l.push(d)}c=new en(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Kv(new se(a),c,u)}class Hs extends qs{_toFieldTransform(e){if(e.zu!==2)throw e.zu===1?e.ec(`${this._methodName}() can only appear at the top level of your update data`):e.ec(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hs}}class Jr extends qs{_toFieldTransform(e){return new Vm(e.path,new rn)}isEqual(e){return e instanceof Jr}}function Xv(t,e,n,s){const i=t.ic(1,e,n);Qr("Data must be an object, but it was:",i,s);const r=[],o=se.empty();ot(s,(c,u)=>{const l=Zr(e,c,n);u=Y(u);const h=i.Zu(l);if(u instanceof Hs)r.push(l);else{const d=zs(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new en(r);return new kl(o,a,i.fieldTransforms)}function Yv(t,e,n,s,i,r){const o=t.ic(1,e,n),a=[ji(e,s,n)],c=[i];if(r.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ji(e,r[d])),c.push(r[d+1]);const u=[],l=se.empty();for(let d=a.length-1;d>=0;--d)if(!Pl(u,a[d])){const g=a[d];let y=c[d];y=Y(y);const k=o.Zu(g);if(y instanceof Hs)u.push(g);else{const M=zs(y,k);M!=null&&(u.push(g),l.set(g,M))}}const h=new en(u);return new kl(l,h,o.fieldTransforms)}function zs(t,e){if(Ol(t=Y(t)))return Qr("Unsupported field value:",e,t),Dl(t,e);if(t instanceof qs)return function(n,s){if(!Rl(s.zu))throw s.ec(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ec(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Yu&&e.zu!==4)throw e.ec("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=zs(o,s.tc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Y(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xm(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=re.fromDate(n);return{timestampValue:cs(s.M,i)}}if(n instanceof re){const i=new re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cs(s.M,i)}}if(n instanceof Xr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _t)return{bytesValue:nl(s.M,n._byteString)};if(n instanceof he){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ec(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ec(`Unsupported field value: ${Gr(n)}`)}(t,e)}function Dl(t,e){const n={};return Fu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ot(t,(s,i)=>{const r=zs(i,e.Ju(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ol(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof re||t instanceof Xr||t instanceof _t||t instanceof he||t instanceof qs)}function Qr(t,e,n){if(!Ol(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gr(n);throw s==="an object"?e.ec(t+" a custom object"):e.ec(t+" "+s)}}function ji(t,e,n){if((e=Y(e))instanceof js)return e._internalPath;if(typeof e=="string")return Zr(t,e);throw ls("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jv=new RegExp("[~\\*/\\[\\]]");function Zr(t,e,n){if(e.search(Jv)>=0)throw ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new js(...e.split("."))._internalPath}catch{throw ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ls(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+t+c)}function Pl(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ml{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ll("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qv extends Ml{data(){return super.data()}}function Ll(t,e){return typeof e=="string"?Zr(t,e):e instanceof js?e._internalPath:e._delegate._internalPath}/**
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
 */class Pn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zv extends Ml{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ll("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bn extends Zv{data(e={}){return super.data(e)}}class ew{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bn(this._firestore,this._userDataWriter,s.key,s,new Pn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:tw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}/**
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
 */function nw(t){if(os(t)&&t.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class sw{convertValue(e,n="none"){switch(et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return x(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _()}}convertObject(e,n){const s={};return ot(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Xr(x(e.latitude),x(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(tn(e));default:return null}}convertTimestamp(e){const n=Le(e);return new re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=P.fromString(e);N(ol(s));const i=new wt(s.get(1),s.get(3)),r=new I(s.popFirst(5));return i.isEqual(n)||Me(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function iw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class rw extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}function pw(t){t=cn(t,$s);const e=cn(t.firestore,Bs),n=Al(e),s=new rw(e);return nw(t._query),Bv(n,t._query).then(i=>new ew(e,s,t,i))}function gw(t,e,n,...s){t=cn(t,he);const i=cn(t.firestore,Bs),r=Nl(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof js?Yv(r,"updateDoc",t._key,e,n,s):Xv(r,"updateDoc",t._key,e),xl(i,[o.toMutation(t._key,ze.exists(!0))])}function mw(t,e){const n=cn(t.firestore,Bs),s=qv(t),i=iw(t.converter,e);return xl(n,[Wv(Nl(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,ze.exists(!1))]).then(()=>s)}function xl(t,e){return function(n,s){const i=new Oe;return n.asyncQueue.enqueueAndForget(async()=>_v(await Vv(n),s,i)),i.promise}(Al(t),e)}function yw(){return new Jr("serverTimestamp")}(function(t,e=!0){(function(n){Ct=n})(ln),ge(new de("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Bs(i,new um(n.getProvider("auth-internal")),new fm(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),ue(Go,"3.4.6",t),ue(Go,"3.4.6","esm2017")})();export{Re as G,gw as X,hw as a,uw as b,yw as c,aw as g,ow as i,cw as o,fw as p,lw as s,mw as t,dw as u,pw as z};
