(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{7220:function(t){t.exports={style:{fontFamily:"'__Readex_Pro_b551e8', '__Readex_Pro_Fallback_b551e8'",fontStyle:"normal"},className:"__className_b551e8"}},494:function(t,e,s){"use strict";s.d(e,{S:function(){return k}});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==u(a,e.options))return!1}else if(!c(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function o(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(h(e.options.mutationKey)!==h(n))return!1}else if(!c(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function u(t,e){let s=e?.queryKeyHashFn||h;return s(t)}function h(t){return JSON.stringify(t,(t,e)=>d(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function c(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!c(t[s],e[s]))}function l(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function d(t){if(!f(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(f(s)&&s.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function f(t){return"[object Object]"===Object.prototype.toString.call(t)}function p(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function y(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var m=Symbol(),v=(t,e)=>!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==m?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`)),b=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}(),g=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},C=new class extends g{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.#t!==t;e&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}},w=new class extends g{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){let e=this.#i!==t;e&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}};function O(t){return Math.min(1e3*2**t,3e4)}function q(t){return(t??"online")!=="online"||w.isOnline()}var S=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function P(t){return t instanceof S}function F(t){let e,s,r,n=!1,a=0,o=!1,u=new Promise((t,e)=>{s=t,r=e}),h=()=>C.isFocused()&&("always"===t.networkMode||w.isOnline())&&t.canRun(),c=()=>q(t.networkMode)&&t.canRun(),l=i=>{o||(o=!0,t.onSuccess?.(i),e?.(),s(i))},d=s=>{o||(o=!0,t.onError?.(s),e?.(),r(s))},f=()=>new Promise(s=>{e=t=>{(o||h())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,o||t.onContinue?.()}),p=()=>{let e;if(o)return;let s=0===a?t.initialPromise:void 0;try{e=s??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(l).catch(e=>{if(o)return;let s=t.retry??(i?0:3),r=t.retryDelay??O,u="function"==typeof r?r(a,e):r,c=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,e);if(n||!c){d(e);return}a++,t.onFail?.(a,e),new Promise(t=>{setTimeout(t,u)}).then(()=>h()?void 0:f()).then(()=>{n?d(e):p()})})};return{promise:u,cancel:e=>{o||(d(new S(e)),t.abort?.())},continue:()=>(e?.(),u),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1},canStart:c,start:()=>(c()?p():f().then(p),u)}}var D=class{#r;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#r=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i?1/0:3e5))}clearGcTimeout(){this.#r&&(clearTimeout(this.#r),this.#r=void 0)}},A=class extends D{#n;#a;#o;#u;#h;#c;constructor(t){super(),this.#c=!1,this.#h=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#n,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#u?.promise}setOptions(t){this.options={...this.#h,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){var s,i;let r=(s=this.state.data,"function"==typeof(i=this.options).structuralSharing?i.structuralSharing(s,t):!1!==i.structuralSharing?function t(e,s){if(e===s)return e;let i=l(e)&&l(s);if(i||d(e)&&d(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];(!i&&r.includes(o)||i)&&void 0===e[o]&&void 0===s[o]?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(s,t):t);return this.#l({data:r,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),r}setState(t,e){this.#l({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(r).catch(r):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#u&&(this.#c?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#c=!0,s.signal)})},r={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=v(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(i(s),this.#c=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(r),this.options.behavior?.onFetch(r,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#l({type:"fetch",meta:r.fetchOptions?.meta});let n=t=>{P(t)&&t.silent||this.#l({type:"error",error:t}),P(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#u=F({initialPromise:e?.initialPromise,fn:r.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){n(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:n,onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode,canRun:()=>!0}),this.#u.start()}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s;return{...e,...(s=e.data,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:q(this.options.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if(P(i)&&i.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),b.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},E=class extends g{constructor(t={}){super(),this.config=t,this.#d=new Map}#d;build(t,e,s){let i=e.queryKey,r=e.queryHash??u(i,e),n=this.get(r);return n||(n=new A({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#d.has(t.queryHash)||(this.#d.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#d.get(t.queryHash);e&&(t.destroy(),e===t&&this.#d.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){b.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#d.get(t)}getAll(){return[...this.#d.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>a(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>a(t,e)):e}notify(t){b.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){b.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){b.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},M=class extends D{#f;#p;#u;constructor(t){super(),this.mutationId=t.mutationId,this.#p=t.mutationCache,this.#f=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#f.includes(t)||(this.#f.push(t),this.clearGcTimeout(),this.#p.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#f=this.#f.filter(e=>e!==t),this.scheduleGc(),this.#p.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#f.length||("pending"===this.state.status?this.scheduleGc():this.#p.remove(this))}continue(){return this.#u?.continue()??this.execute(this.state.variables)}async execute(t){this.#u=F({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#p.canRun(this)});let e="pending"===this.state.status,s=!this.#u.canStart();try{if(!e){this.#l({type:"pending",variables:t,isPaused:s}),await this.#p.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#l({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#u.start();return await this.#p.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#p.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#l({type:"success",data:i}),i}catch(e){try{throw await this.#p.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#p.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#l({type:"error",error:e})}}finally{this.#p.runNext(this)}}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),b.batch(()=>{this.#f.forEach(e=>{e.onMutationUpdate(t)}),this.#p.notify({mutation:this,type:"updated",action:t})})}},Q=class extends g{constructor(t={}){super(),this.config=t,this.#y=new Map,this.#m=Date.now()}#y;#m;build(t,e,s){let i=new M({mutationCache:this,mutationId:++this.#m,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=R(t),s=this.#y.get(e)??[];s.push(t),this.#y.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=R(t);if(this.#y.has(e)){let s=this.#y.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#y.delete(e):this.#y.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#y.get(R(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#y.get(R(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){b.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#y.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>o(e,t))}findAll(t={}){return this.getAll().filter(e=>o(t,e))}notify(t){b.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return b.batch(()=>Promise.all(t.map(t=>t.continue().catch(r))))}};function R(t){return t.options.scope?.id??String(t.mutationId)}function x(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function T(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var k=class{#v;#p;#h;#b;#g;#C;#w;#O;constructor(t={}){this.#v=t.queryCache||new E,this.#p=t.mutationCache||new Q,this.#h=t.defaultOptions||{},this.#b=new Map,this.#g=new Map,this.#C=0}mount(){this.#C++,1===this.#C&&(this.#w=C.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onFocus())}),this.#O=w.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onOnline())}))}unmount(){this.#C--,0===this.#C&&(this.#w?.(),this.#w=void 0,this.#O?.(),this.#O=void 0)}isFetching(t){return this.#v.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#p.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#v.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(n(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#v.findAll(t).map(({queryKey:t,state:e})=>{let s=e.data;return[t,s]})}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#v.get(i.queryHash),n=r?.state.data,a="function"==typeof e?e(n):e;if(void 0!==a)return this.#v.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return b.batch(()=>this.#v.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state}removeQueries(t){let e=this.#v;b.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#v,i={type:"active",...t};return b.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e},i=b.batch(()=>this.#v.findAll(t).map(t=>t.cancel(s)));return Promise.all(i).then(r).catch(r)}invalidateQueries(t={},e={}){return b.batch(()=>{if(this.#v.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0},i=b.batch(()=>this.#v.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(r)),"paused"===t.state.fetchStatus?Promise.resolve():e}));return Promise.all(i).then(r)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#v.build(this,e);return s.isStaleByTime(n(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(r).catch(r)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],a=t.state.data?.pageParams||[],o=!1,u=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},h=v(t.options,t.fetchOptions),c=async(e,s,i)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};u(r);let n=await h(r),{maxPages:a}=t.options,c=i?y:p;return{pages:c(e.pages,n,a),pageParams:c(e.pageParams,s,a)}};if(r&&n.length){let t="backward"===r,e=t?T:x,o={pages:n,pageParams:a},u=e(i,o);s=await c(o,u,t)}else{s=await c({pages:[],pageParams:[]},a[0]??i.initialPageParam);let t=e??n.length;for(let e=1;e<t;e++){let t=x(i,s);s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(r).catch(r)}resumePausedMutations(){return w.isOnline()?this.#p.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#v}getMutationCache(){return this.#p}getDefaultOptions(){return this.#h}setDefaultOptions(t){this.#h=t}setQueryDefaults(t,e){this.#b.set(h(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#b.values()],s={};return e.forEach(e=>{c(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#g.set(h(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#g.values()],s={};return e.forEach(e=>{c(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#h.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=u(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===m&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#h.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#v.clear(),this.#p.clear()}}},8038:function(t,e,s){"use strict";s.d(e,{aH:function(){return a}});var i=s(2265),r=s(7437),n=i.createContext(void 0),a=({client:t,children:e})=>(i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,r.jsx)(n.Provider,{value:t,children:e}))}}]);