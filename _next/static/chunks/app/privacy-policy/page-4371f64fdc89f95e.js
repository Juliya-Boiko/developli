(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{2901:function(e,t,n){Promise.resolve().then(n.bind(n,5989))},8864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(1024);n(2265);let r=l._(n(533));function s(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let o=l.loader;return n({...l,loader:()=>null!=o?o().then(s):Promise.resolve(s(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return s}}),n(1024),n(2265);let l=n(7669);function r(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function s(e){let{children:t}=e;return t}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(1024),r=l._(n(2265)),s=n(3699),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:s.NoSSR,a=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(o,null,r.default.createElement(a,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},5989:function(e,t,n){"use strict";n.r(t),n.d(t,{PrivacyConditions:function(){return d}});var l=n(7437),r=n(8989),s=n.n(r),o=n(2914),a=n(2265),i=n(8864),u=n.n(i);let c=u()(()=>n.e(460).then(n.bind(n,3460)),{loadableGenerated:{webpack:()=>[3460]},ssr:!1}),_=o.js.map(e=>({value:e.title,label:e.title})),d=()=>{let[e,t]=(0,a.useState)(_[0]),[n,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{r(!0)},[]);let i=e=>{t(e)};return(0,l.jsxs)("section",{className:"container ".concat(s().section),children:[(0,l.jsx)("h1",{className:s().title,children:"Legal Information"}),(0,l.jsx)("p",{className:s().subTitle,children:"If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message."}),(0,l.jsxs)("div",{className:s().content,children:[(0,l.jsx)(c,{defaultValue:e,onChange:i,options:_,styles:{control:e=>({...e,border:0,boxShadow:"none"}),option:(e,t)=>{let{isSelected:n}=t;return{...e,backgroundColor:n?"#47D18C":"white"}}},className:s().select}),(0,l.jsx)("div",{className:s().termsWrapper,children:_.map(t=>(0,l.jsx)("button",{type:"button",className:s().termBtn,style:{color:t.value===(null==e?void 0:e.value)?"#47D18C":"#252A3F"},onClick:()=>i(t),children:t.value},t.value))}),(()=>{let t=o.js.find(t=>t.title===(null==e?void 0:e.value));return t?(0,l.jsxs)("div",{className:s().wrapper,children:[(0,l.jsx)("h2",{className:s().termName,children:t.title}),(0,l.jsx)("p",{className:s().termDefinition,children:t.text}),(0,l.jsx)("ul",{children:t.terms.map((e,t)=>(0,l.jsxs)("li",{children:[(0,l.jsx)("p",{className:s().termTitle,children:e.title}),e.text.map(e=>(0,l.jsx)("p",{className:s().termText,children:e},e))]},"".concat(e.title,"-").concat(t)))})]}):null})()]})]})}},8989:function(e){e.exports={"accent-green":"styles_accent-green__31_DA","accent-red":"styles_accent-red__4hpIS",pageTitle:"styles_pageTitle__UziKO",sectionTitle:"styles_sectionTitle__2ytIS",termBtn:"styles_termBtn__7nSmy",container:"styles_container__Yj5Jm",sectionSubtitle:"styles_sectionSubtitle__cm_5V",hidden:"styles_hidden__eUc_L",section:"styles_section__9ufUU",title:"styles_title__kO6vk",subTitle:"styles_subTitle__60YdF",content:"styles_content__e4DCa",select:"styles_select__Ki_ck",wrapper:"styles_wrapper__BUYOv",termName:"styles_termName__V569S",termDefinition:"styles_termDefinition__TUu7i",termTitle:"styles_termTitle__eAkeE",termText:"styles_termText__8hwjR",termsWrapper:"styles_termsWrapper__Tjs0W"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),r=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var l,i={},u=null,c=null;for(l in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,l)&&!a.hasOwnProperty(l)&&(i[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===i[l]&&(i[l]=t[l]);return{$$typeof:r,type:e,key:u,ref:c,props:i,_owner:o.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[914,971,596,744],function(){return e(e.s=2901)}),_N_E=e.O()}]);