(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{169:function(e,t,s){Promise.resolve().then(s.bind(s,4713)),Promise.resolve().then(s.bind(s,8485)),Promise.resolve().then(s.t.bind(s,3222,23)),Promise.resolve().then(s.bind(s,4265)),Promise.resolve().then(s.bind(s,2820)),Promise.resolve().then(s.bind(s,2710)),Promise.resolve().then(s.bind(s,7851)),Promise.resolve().then(s.bind(s,7543)),Promise.resolve().then(s.bind(s,27)),Promise.resolve().then(s.bind(s,1725)),Promise.resolve().then(s.bind(s,4949)),Promise.resolve().then(s.bind(s,6408)),Promise.resolve().then(s.bind(s,9619)),Promise.resolve().then(s.bind(s,3478)),Promise.resolve().then(s.bind(s,5027)),Promise.resolve().then(s.bind(s,3172)),Promise.resolve().then(s.bind(s,5864)),Promise.resolve().then(s.t.bind(s,7874,23))},1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let n=s(1024),i=s(2301),l=s(7873),r=s(3222),_=n._(s(5033)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:_.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/developli/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},c=r.Image},4713:function(e,t,s){"use strict";s.r(t),s.d(t,{Scrumbs:function(){return _}});var n=s(7437),i=s(4033),l=s(9449),r=s.n(l);let _=()=>{let e=(0,i.usePathname)();return(0,n.jsx)("section",{className:r().scrumbs,children:e.substring(1)})}},8485:function(e,t,s){"use strict";s.r(t),s.d(t,{SearchQuestions:function(){return g}});var n=s(7437),i=s(7509),l=s.n(i),r=s(2914),_=s(2265),a=s(3835),c=s.n(a),o=s(6691),d=s.n(o),u=s(6519);let h=e=>{let{placeholder:t,onChange:s}=e;return(0,n.jsxs)("div",{className:c().wrapper,children:[(0,n.jsx)(d(),{src:u.Z,alt:"search",width:18,height:18,className:c().icon}),(0,n.jsx)("input",{type:"text",name:"search",id:"search",placeholder:t,className:c().input,onChange:e=>s(e.target.value)})]})};var p={src:"/developli/_next/static/media/plus.faf292ee.svg",height:24,width:24,blurWidth:0,blurHeight:0},m={src:"/developli/_next/static/media/minus.f72720dc.svg",height:24,width:24,blurWidth:0,blurHeight:0};let b=e=>{let{question:t,answer:s}=e,[i,r]=(0,_.useState)(!1);return(0,n.jsxs)("li",{className:l().card,onClick:()=>{r(e=>!e)},children:[(0,n.jsxs)("div",{className:l().head,children:[(0,n.jsx)("p",{className:l().cardTitle,style:{marginBottom:i?"16px":0},children:t}),(0,n.jsx)("button",{type:"button",children:i?(0,n.jsx)(d(),{src:m,alt:"close",width:20,height:20}):(0,n.jsx)(d(),{src:p,alt:"open",width:20,height:20})})]}),i&&(0,n.jsx)("p",{children:s})]})},y=r.FP.map(e=>({title:e.title,value:e.value})),g=()=>{let[e,t]=(0,_.useState)(""),[s,i]=(0,_.useState)(y[0].value),a=e=>{i(e)};return(0,n.jsxs)("section",{className:"container ".concat(l().section),children:[(0,n.jsx)("h1",{className:l().title,children:"Helping you is our priority"}),(0,n.jsx)("div",{className:l().searchWrapper,children:(0,n.jsx)(h,{placeholder:"Search question",onChange:e=>{t(e)}})}),(0,n.jsx)("div",{className:l().tabs,children:y.map(e=>(0,n.jsx)("button",{type:"button",className:l().tabBtn,style:{color:e.value===s?"#1F8FFF":"#7F879E",borderColor:e.value===s?"#1F8FFF":"transparent"},onClick:()=>a(e.value),children:e.title},e.value))}),(()=>{let t=r.FP.find(e=>e.value===s),i=null==t?void 0:t.data.filter(t=>t.question.toLowerCase().includes(e.toLowerCase()));return t&&i?(0,n.jsx)("ul",{className:l().list,children:i.map(e=>(0,n.jsx)(b,{question:e.question,answer:e.answer},e.question))}):null})()]})}},3835:function(e){e.exports={"accent-green":"styles_accent-green__ZDAho","accent-red":"styles_accent-red__dPtgH",pageTitle:"styles_pageTitle__rM7cp",sectionTitle:"styles_sectionTitle__xQzWH",container:"styles_container__8yfol",sectionSubtitle:"styles_sectionSubtitle__V20A9",hidden:"styles_hidden__fTIye",mobileHidden:"styles_mobileHidden__nDBxX",wrapper:"styles_wrapper__Fb_ps",icon:"styles_icon__l6PLi",input:"styles_input__YJ67_",jobsWrapper:"styles_jobsWrapper__XPnla",selectWrapper:"styles_selectWrapper__csxOz",select:"styles_select__9AOOl"}},9449:function(e){e.exports={"accent-green":"styles_accent-green__V_QWF","accent-red":"styles_accent-red__bmZjJ",pageTitle:"styles_pageTitle__RzRDg",sectionTitle:"styles_sectionTitle__2Ekz9",container:"styles_container__Xc0Ye",sectionSubtitle:"styles_sectionSubtitle__3gFvN",hidden:"styles_hidden__XkRTQ",mobileHidden:"styles_mobileHidden__7oqWL",scrumbs:"styles_scrumbs__8Y_5O"}},7509:function(e){e.exports={"accent-green":"styles_accent-green__bXITY","accent-red":"styles_accent-red__7nUxh",pageTitle:"styles_pageTitle__c7rpN",sectionTitle:"styles_sectionTitle__S885G",card:"styles_card__eyvut",tabBtn:"styles_tabBtn__TRpUk",container:"styles_container__t2wLm",sectionSubtitle:"styles_sectionSubtitle__FmKLU",hidden:"styles_hidden__p25Mv",mobileHidden:"styles_mobileHidden__A_pfD",section:"styles_section__Rsjbj",title:"styles_title__nrFjm",searchWrapper:"styles_searchWrapper__p_3VY",tabs:"styles_tabs__eJPT3",list:"styles_list__Z8kYQ",cardTitle:"styles_cardTitle__v0D02",head:"styles_head__8k81L"}},7874:function(e){e.exports={"accent-green":"styles_accent-green__yBZCB","accent-red":"styles_accent-red___r1f0",pageTitle:"styles_pageTitle__dzuU8",sectionTitle:"styles_sectionTitle__laKks",container:"styles_container__Hg0iK",sectionSubtitle:"styles_sectionSubtitle__nYqbt",hidden:"styles_hidden__yPXpR",mobileHidden:"styles_mobileHidden__khWHP",section:"styles_section__VvG6L",title:"styles_title__0WFBK",subTitle:"styles_subTitle__m__fh",list:"styles_list__aVLeV",item:"styles_item__72dUI",icon:"styles_icon__EOisJ",link:"styles_link__iaII5"}},6519:function(e,t){"use strict";t.Z={src:"/developli/_next/static/media/search-normal.9fff3631.svg",height:19,width:18,blurWidth:0,blurHeight:0}},6691:function(e,t,s){e.exports=s(1295)},4033:function(e,t,s){e.exports=s(8165)}},function(e){e.O(0,[954,914,971,596,744],function(){return e(e.s=169)}),_N_E=e.O()}]);