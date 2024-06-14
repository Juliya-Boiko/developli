(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{3197:function(e,t,s){Promise.resolve().then(s.bind(s,4713)),Promise.resolve().then(s.t.bind(s,3222,23)),Promise.resolve().then(s.bind(s,4265)),Promise.resolve().then(s.bind(s,2710)),Promise.resolve().then(s.bind(s,2820)),Promise.resolve().then(s.bind(s,7851)),Promise.resolve().then(s.bind(s,27)),Promise.resolve().then(s.bind(s,4949)),Promise.resolve().then(s.bind(s,7543)),Promise.resolve().then(s.bind(s,1725)),Promise.resolve().then(s.bind(s,6408)),Promise.resolve().then(s.bind(s,3478)),Promise.resolve().then(s.bind(s,5027)),Promise.resolve().then(s.bind(s,9619)),Promise.resolve().then(s.bind(s,3172)),Promise.resolve().then(s.bind(s,5864)),Promise.resolve().then(s.bind(s,228)),Promise.resolve().then(s.bind(s,5376)),Promise.resolve().then(s.bind(s,6484)),Promise.resolve().then(s.bind(s,3282)),Promise.resolve().then(s.bind(s,1122)),Promise.resolve().then(s.t.bind(s,7874,23)),Promise.resolve().then(s.t.bind(s,5681,23))},1122:function(e,t,s){"use strict";s.r(t),s.d(t,{ContactForm:function(){return M}});var n=s(7437),l=s(3488),r=s.n(l),i=s(1865),c=s(6326),a=s.n(c),_=s(5561),o=s.n(_);let d=e=>{let{label:t,errors:s,required:l,register:r,type:i,name:c,placeholder:_}=e;return(0,n.jsxs)("label",{htmlFor:c,className:o().label,children:[(0,n.jsxs)("p",{children:[t," ",l&&(0,n.jsx)("span",{className:"accent-red",children:"*"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:i,placeholder:_,...r(c),className:a().input}),(0,n.jsx)("span",{className:"accent-red ".concat(o().errorMessage),children:s?s.message:null})]})]})};var u=s(9701),m=s(5691);let h=m.Ry({name:m.Z_().trim().matches(/^\s*\S+(\s+\S+)+\s*$/,"Please enter your name & surname").required("Full name is required"),email:m.Z_().trim().email("Invalid email format").required("Email is required"),companyName:m.Z_().trim(),companySize:m.Z_(),topics:m.IX().of(m.Z_()),agreement:m.O7().required().oneOf([!0],"You must accept the terms and conditions"),message:m.Z_().trim().required("Message is required")}).required();var y=s(2914),p=s(8864),g=s.n(p),b=s(9539),v=s.n(b),f=s(2265);let x=g()(()=>s.e(460).then(s.bind(s,3460)),{loadableGenerated:{webpack:()=>[3460]},ssr:!1}),T=(0,f.forwardRef)((e,t)=>{let{options:s,value:l,label:r,onChange:i,isMulti:c,...a}=e,_=s.find(e=>e.value===l);return(0,n.jsxs)("div",{ref:t,className:v().select,children:[r&&(0,n.jsx)("p",{className:o().label,children:r}),(0,n.jsx)(x,{defaultValue:_,isMulti:c,options:s,onChange:e=>{if(c){let t=e.map(e=>e.value);i(t)}else i(e.value)},placeholder:" ",styles:{control:e=>({...e,padding:"8px",fontSize:"14px",border:0,borderRadius:"16px",boxShadow:"none",backgroundColor:"#F6F8F9"}),option:(e,t)=>{let{isSelected:s}=t;return{...e,backgroundColor:s?"#47D18C":"white"}}},...a})]})});T.displayName="SelectField";var S=s(6605),k=s.n(S);let j=e=>{let{label:t,errors:s,required:l,register:r,name:i,placeholder:c}=e;return(0,n.jsxs)("label",{htmlFor:i,className:o().label,children:[(0,n.jsxs)("p",{children:[t," ",l&&(0,n.jsx)("span",{className:"accent-red",children:"*"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("textarea",{placeholder:c,...r(i),className:k().textarea}),(0,n.jsx)("span",{className:"accent-red ".concat(o().errorMessage),children:s?s.message:null})]})]})};var C=s(740),P=s.n(C);let N=(0,f.forwardRef)((e,t)=>{let{label:s,name:l,value:r,errors:i,register:c,onChange:a}=e;return(0,n.jsxs)("label",{className:"".concat(P().check," ").concat((null==i?void 0:i.message)?"accent-red":""),children:[(0,n.jsx)("input",{type:"checkbox",...c(l),ref:t,onChange:e=>a(e.target.checked),className:"hidden"}),(0,n.jsx)("span",{className:"".concat(P().customCheck," ").concat(i?P().errorCheck:r?P().checkedCheck:P().defaultCheck)}),(0,n.jsx)("p",{children:s})]})});N.displayName="CheckField";var w=s(7223),E=s.n(w);let Z=e=>{let{type:t,onClick:s,title:l,height:r,accent:i}=e;return(0,n.jsx)("button",{type:t,className:"".concat(E().primaryBtn," ").concat(i?E().primaryBtnAccent:""," "),style:{height:r},onClick:s,children:l})},M=()=>{let{register:e,control:t,getFieldState:s,handleSubmit:l,formState:{errors:c}}=(0,i.cI)({mode:"onTouched",resolver:(0,u.X)(h)}),a=y.hp.map(e=>({value:e.value,label:e.name}));return(0,n.jsxs)("form",{onSubmit:l(e=>console.log(e)),className:r().form,children:[(0,n.jsxs)("div",{className:r().wrapper,children:[(0,n.jsx)(d,{type:"text",label:"Your Name",required:!0,name:"name",placeholder:"Enter your name",register:e,errors:c.name}),(0,n.jsx)(d,{type:"email",label:"Email",required:!0,name:"email",placeholder:"Enter your email",register:e,errors:c.email}),(0,n.jsx)(d,{type:"text",label:"Company Name",name:"companyName",placeholder:"Enter your company name",register:e,errors:c.companyName}),(0,n.jsx)(i.Qr,{name:"companySize",control:t,render:e=>{let{field:t}=e;return(0,n.jsx)(T,{...t,isMulti:!1,label:"Company Size",value:t.value,options:y.AZ,onChange:e=>t.onChange(e)})}})]}),(0,n.jsx)("div",{className:r().topics,children:(0,n.jsx)(i.Qr,{name:"topics",control:t,render:e=>{let{field:t}=e;return(0,n.jsx)(T,{...t,isMulti:!0,label:"How our team can help you?",value:t.value,options:a,onChange:e=>t.onChange(e)})}})}),(0,n.jsx)(j,{label:"Your message",required:!0,name:"message",placeholder:"Type anything",register:e,errors:c.message}),(0,n.jsxs)("div",{className:r().actions,children:[(0,n.jsx)(i.Qr,{name:"agreement",control:t,render:t=>{let{field:s}=t;return(0,n.jsx)(N,{...s,value:s.value,label:"I agree to  Terms of Service and Privacy Policy.",register:e,errors:c.agreement,onChange:e=>s.onChange(e)})}}),(0,n.jsx)(Z,{title:"Contact us",type:"submit",accent:!0,height:"52px"})]})]})}},3282:function(e,t,s){"use strict";s.r(t),s.d(t,{Map:function(){return _}});var n=s(7437),l=s(5681),r=s.n(l),i=s(2265),c=s(9235),a=s(2601);let _=e=>{let{address:t}=e,s=(0,i.useRef)(null),[l,_]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!a.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)return;let e=new c.aN({apiKey:a.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,version:"weekly"});e.load().then(()=>{_(new google.maps.Geocoder)})},[]),(0,i.useEffect)(()=>{l&&t&&s.current&&l.geocode({address:t},(e,t)=>{if("OK"===t&&e[0]){let t=s.current,n=new google.maps.Map(t,{center:e[0].geometry.location,zoom:8});new google.maps.Marker({map:n,position:e[0].geometry.location})}else console.error("Geocode was not successful for the following reason: ".concat(t))})},[t,l]),(0,n.jsx)("div",{ref:s,className:r().map})}},4713:function(e,t,s){"use strict";s.r(t),s.d(t,{Scrumbs:function(){return c}});var n=s(7437),l=s(4033),r=s(9449),i=s.n(r);let c=()=>{let e=(0,l.usePathname)();return(0,n.jsx)("section",{className:i().scrumbs,children:e.substring(1)})}},7223:function(e){e.exports={sectionTitle:"styles_sectionTitle__k1r_W",pageTitle:"styles_pageTitle__RRYd_","accent-green":"styles_accent-green__cZJ9b","accent-red":"styles_accent-red__9pOtS",sectionSubtitle:"styles_sectionSubtitle__tSksv",hidden:"styles_hidden__kJBnU",primaryBtn:"styles_primaryBtn__aw03m",primaryBtnAccent:"styles_primaryBtnAccent__GCMBz"}},6605:function(e){e.exports={sectionTitle:"styles_sectionTitle__PIWUm",pageTitle:"styles_pageTitle__Xs3k0","accent-green":"styles_accent-green__j9hd5","accent-red":"styles_accent-red__FH8_v",sectionSubtitle:"styles_sectionSubtitle__cTKQX",hidden:"styles_hidden__vZkTh",textarea:"styles_textarea__Cg_Z1"}},740:function(e){e.exports={sectionTitle:"styles_sectionTitle__4v1Lc",pageTitle:"styles_pageTitle__tpt7f","accent-green":"styles_accent-green__qLWB_","accent-red":"styles_accent-red__Tu90p",sectionSubtitle:"styles_sectionSubtitle___VDC_",hidden:"styles_hidden__cToaE",check:"styles_check__y5_c5",customCheck:"styles_customCheck__XtjZK",checkedCheck:"styles_checkedCheck__K5Ps5",defaultCheck:"styles_defaultCheck__3LdDn",errorCheck:"styles_errorCheck__yutkH"}},5561:function(e){e.exports={sectionTitle:"commonStyles_sectionTitle__qQj4K",pageTitle:"commonStyles_pageTitle__IoMBu","accent-green":"commonStyles_accent-green__YlppZ","accent-red":"commonStyles_accent-red__ZTQqa",sectionSubtitle:"commonStyles_sectionSubtitle__vzFOr",hidden:"commonStyles_hidden__Ti7Df",label:"commonStyles_label__9zRVn",errorMessage:"commonStyles_errorMessage__vK5bw"}},9539:function(e){e.exports={sectionTitle:"styles_sectionTitle__Ts6gB",pageTitle:"styles_pageTitle__82UK_","accent-green":"styles_accent-green__Uug1K","accent-red":"styles_accent-red__CHqUL",sectionSubtitle:"styles_sectionSubtitle__nUG7m",hidden:"styles_hidden__Mk3wC",select:"styles_select__ukZ0H"}},6326:function(e){e.exports={sectionTitle:"styles_sectionTitle__Zi5jU",pageTitle:"styles_pageTitle__ZbjQR","accent-green":"styles_accent-green__AtJEi","accent-red":"styles_accent-red__DiCxo",sectionSubtitle:"styles_sectionSubtitle__Eun7R",hidden:"styles_hidden__n_0X9",input:"styles_input__JrBn5"}},3488:function(e){e.exports={sectionTitle:"styles_sectionTitle__lbgnm",pageTitle:"styles_pageTitle__lP11g","accent-green":"styles_accent-green__vpVes","accent-red":"styles_accent-red__3V_ws",sectionSubtitle:"styles_sectionSubtitle__WrMAI",hidden:"styles_hidden__7RecT",form:"styles_form__A6v_R",wrapper:"styles_wrapper__3tEDP",topics:"styles_topics__7naZ0",actions:"styles_actions__pVykz"}},5681:function(e){e.exports={sectionTitle:"styles_sectionTitle__u_Aed",pageTitle:"styles_pageTitle__x_lua","accent-green":"styles_accent-green__fu7wy","accent-red":"styles_accent-red__Sl2MU",sectionSubtitle:"styles_sectionSubtitle__ol6bq",hidden:"styles_hidden__acGCC",section:"styles_section__X4l1W",title:"styles_title__shSzp",subTitle:"styles_subTitle__Fech_",map:"styles_map__jAL1v"}},9449:function(e){e.exports={sectionTitle:"styles_sectionTitle__2Ekz9",pageTitle:"styles_pageTitle__RzRDg","accent-green":"styles_accent-green__V_QWF","accent-red":"styles_accent-red__bmZjJ",sectionSubtitle:"styles_sectionSubtitle__3gFvN",hidden:"styles_hidden__XkRTQ",scrumbs:"styles_scrumbs__8Y_5O"}},7874:function(e){e.exports={sectionTitle:"styles_sectionTitle__laKks",pageTitle:"styles_pageTitle__dzuU8","accent-green":"styles_accent-green__yBZCB","accent-red":"styles_accent-red___r1f0",sectionSubtitle:"styles_sectionSubtitle__nYqbt",hidden:"styles_hidden__yPXpR",section:"styles_section__VvG6L",title:"styles_title__0WFBK",subTitle:"styles_subTitle__m__fh",list:"styles_list__aVLeV",item:"styles_item__72dUI",icon:"styles_icon__EOisJ",link:"styles_link__iaII5"}},6484:function(e,t,s){"use strict";s.r(t),t.default={src:"/developli/_next/static/media/facebook.8ffb24ef.svg",height:41,width:41,blurWidth:0,blurHeight:0}},228:function(e,t,s){"use strict";s.r(t),t.default={src:"/developli/_next/static/media/insta.ee53c4ba.svg",height:41,width:41,blurWidth:0,blurHeight:0}},5376:function(e,t,s){"use strict";s.r(t),t.default={src:"/developli/_next/static/media/twitter.33186072.svg",height:41,width:41,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[954,828,914,971,596,744],function(){return e(e.s=3197)}),_N_E=e.O()}]);