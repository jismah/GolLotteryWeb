(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(9729)}])},4276:function(e,r,a){"use strict";var s=a(5893),t=(a(7294),a(9855)),n=a(682),o=a(540),l=a(1664),i=a(8163),c=a(1163);r.Z=function(){var e=(0,i.a)(),r=e.user,a=e.logout,d=(0,c.useRouter)();return(0,s.jsx)(t.Z,{className:"navbar navbar-dark bg-dark",expand:"lg",children:(0,s.jsxs)(n.Z,{fluid:!0,children:[(0,s.jsx)("span",{className:"navbar-brand mb-0 h1",children:(0,s.jsx)(t.Z.Brand,{children:"Gol Lottery Admin"})}),(0,s.jsx)(t.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsx)(t.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsx)(o.Z,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:r?(0,s.jsx)("div",{children:(0,s.jsx)(o.Z.Link,{onClick:function(){a(),d.push("/login")},children:"Logout"})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{href:"/",passHref:!0,children:(0,s.jsx)(o.Z.Link,{children:"Back to Home"})})})})})]})})}},9729:function(e,r,a){"use strict";a.r(r);var s=a(4051),t=a.n(s),n=a(5893),o=a(1163),l=a(9008),i=a(7294),c=a(1676),d=a(5005),m=a(8163),f=a(214),u=a.n(f),p=a(4276);function x(e,r,a,s,t,n,o){try{var l=e[n](o),i=l.value}catch(c){return void a(c)}l.done?r(i):Promise.resolve(i).then(s,t)}function h(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function v(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(r){h(e,r,a[r])}))}return e}r.default=function(){var e=(0,o.useRouter)(),r=(0,m.a)(),a=r.user,s=r.login,f=(0,i.useState)({email:"",password:""}),h=f[0],b=f[1],y=function(){var r,n=(r=t().mark((function r(n){return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),console.log(a),r.prev=2,r.next=5,s(h.email,h.password);case 5:e.push("/dashboard"),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[2,8]])})),function(){var e=this,a=arguments;return new Promise((function(s,t){var n=r.apply(e,a);function o(e){x(n,s,t,o,l,"next",e)}function l(e){x(n,s,t,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,n.jsxs)("div",{children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:"Gol Lottery | Login"}),(0,n.jsx)("meta",{name:"description",content:"Gol Lottery Dashboard"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(p.Z,{}),(0,n.jsx)("div",{className:u().main,children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h1",{className:"text-center my-3 ",children:"Log in"}),(0,n.jsx)("h5",{className:"text-center fw-light my-3 ",children:"Enter your credencials to access your account"}),(0,n.jsxs)(c.Z,{onSubmit:y,children:[(0,n.jsxs)(c.Z.Group,{className:"form-floating mb-3",controlId:"formBasicEmail",children:[(0,n.jsx)(c.Z.Control,{onChange:function(e){return b(v({},h,{email:e.target.value}))},value:h.email,required:!0,id:"floatingInput",type:"email"}),(0,n.jsx)(c.Z.Label,{htmlFor:"floatingInput",children:"Email"})]}),(0,n.jsxs)(c.Z.Group,{className:"form-floating mb-3",controlId:"formBasicPassword",children:[(0,n.jsx)(c.Z.Control,{onChange:function(e){return b(v({},h,{password:e.target.value}))},value:h.password,id:"floatingInput",required:!0,type:"password"}),(0,n.jsx)(c.Z.Label,{htmlFor:"floatingInput",children:"Password"})]}),(0,n.jsx)("div",{className:"d-grid mb-3 mt-5",children:(0,n.jsx)(d.Z,{className:"shadow",variant:"primary",type:"submit",children:"Login"})})]})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},1676:function(e,r,a){"use strict";a.d(r,{Z:function(){return B}});var s=a(4184),t=a.n(s),n=a(5697),o=a.n(n),l=a(7294),i=a(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef((({as:e="div",className:r,type:a="valid",tooltip:s=!1,...n},o)=>(0,i.jsx)(e,{...n,ref:o,className:t()(r,`${a}-${s?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var m=d;var f=l.createContext({}),u=a(6792);const p=l.forwardRef((({id:e,bsPrefix:r,className:a,type:s="checkbox",isValid:n=!1,isInvalid:o=!1,as:c="input",...d},m)=>{const{controlId:p}=(0,l.useContext)(f);return r=(0,u.vE)(r,"form-check-input"),(0,i.jsx)(c,{...d,ref:m,type:s,id:e||p,className:t()(a,r,n&&"is-valid",o&&"is-invalid")})}));p.displayName="FormCheckInput";var x=p;const h=l.forwardRef((({bsPrefix:e,className:r,htmlFor:a,...s},n)=>{const{controlId:o}=(0,l.useContext)(f);return e=(0,u.vE)(e,"form-check-label"),(0,i.jsx)("label",{...s,ref:n,htmlFor:a||o,className:t()(r,e)})}));h.displayName="FormCheckLabel";var v=h;const b=l.forwardRef((({id:e,bsPrefix:r,bsSwitchPrefix:a,inline:s=!1,disabled:n=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:d=!1,feedback:p,feedbackType:h,className:b,style:y,title:j="",type:N="checkbox",label:g,children:w,as:_="input",...k},I)=>{r=(0,u.vE)(r,"form-check"),a=(0,u.vE)(a,"form-switch");const{controlId:P}=(0,l.useContext)(f),C=(0,l.useMemo)((()=>({controlId:e||P})),[P,e]),F=!w&&null!=g&&!1!==g||function(e,r){return l.Children.toArray(e).some((e=>l.isValidElement(e)&&e.type===r))}(w,v),E=(0,i.jsx)(x,{...k,type:"switch"===N?"checkbox":N,ref:I,isValid:o,isInvalid:c,disabled:n,as:_});return(0,i.jsx)(f.Provider,{value:C,children:(0,i.jsx)("div",{style:y,className:t()(b,F&&r,s&&`${r}-inline`,"switch"===N&&a),children:w||(0,i.jsxs)(i.Fragment,{children:[E,F&&(0,i.jsx)(v,{title:j,children:g}),p&&(0,i.jsx)(m,{type:h,tooltip:d,children:p})]})})})}));b.displayName="FormCheck";var y=Object.assign(b,{Input:x,Label:v});a(2473);const j=l.forwardRef((({bsPrefix:e,type:r,size:a,htmlSize:s,id:n,className:o,isValid:c=!1,isInvalid:d=!1,plaintext:m,readOnly:p,as:x="input",...h},v)=>{const{controlId:b}=(0,l.useContext)(f);let y;return e=(0,u.vE)(e,"form-control"),y=m?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,i.jsx)(x,{...h,type:r,size:s,ref:v,readOnly:p,id:n||b,className:t()(o,y,c&&"is-valid",d&&"is-invalid","color"===r&&`${e}-color`)})}));j.displayName="FormControl";var N=Object.assign(j,{Feedback:m}),g=(0,a(6611).Z)("form-floating");const w=l.forwardRef((({controlId:e,as:r="div",...a},s)=>{const t=(0,l.useMemo)((()=>({controlId:e})),[e]);return(0,i.jsx)(f.Provider,{value:t,children:(0,i.jsx)(r,{...a,ref:s})})}));w.displayName="FormGroup";var _=w;const k=["xxl","xl","lg","md","sm","xs"];const I=l.forwardRef(((e,r)=>{const[{className:a,...s},{as:n="div",bsPrefix:o,spans:l}]=function({as:e,bsPrefix:r,className:a,...s}){r=(0,u.vE)(r,"col");const n=[],o=[];return k.forEach((e=>{const a=s[e];let t,l,i;delete s[e],"object"===typeof a&&null!=a?({span:t,offset:l,order:i}=a):t=a;const c="xs"!==e?`-${e}`:"";t&&n.push(!0===t?`${r}${c}`:`${r}${c}-${t}`),null!=i&&o.push(`order${c}-${i}`),null!=l&&o.push(`offset${c}-${l}`)})),[{...s,className:t()(a,...n,...o)},{as:e,bsPrefix:r,spans:n}]}(e);return(0,i.jsx)(n,{...s,ref:r,className:t()(a,!l.length&&o)})}));I.displayName="Col";var P=I;const C=l.forwardRef((({as:e="label",bsPrefix:r,column:a,visuallyHidden:s,className:n,htmlFor:o,...c},d)=>{const{controlId:m}=(0,l.useContext)(f);r=(0,u.vE)(r,"form-label");let p="col-form-label";"string"===typeof a&&(p=`${p} ${p}-${a}`);const x=t()(n,r,s&&"visually-hidden",a&&p);return o=o||m,a?(0,i.jsx)(P,{ref:d,as:"label",className:x,htmlFor:o,...c}):(0,i.jsx)(e,{ref:d,className:x,htmlFor:o,...c})}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var F=C;const E=l.forwardRef((({bsPrefix:e,className:r,id:a,...s},n)=>{const{controlId:o}=(0,l.useContext)(f);return e=(0,u.vE)(e,"form-range"),(0,i.jsx)("input",{...s,type:"range",ref:n,className:t()(r,e),id:a||o})}));E.displayName="FormRange";var L=E;const $=l.forwardRef((({bsPrefix:e,size:r,htmlSize:a,className:s,isValid:n=!1,isInvalid:o=!1,id:c,...d},m)=>{const{controlId:p}=(0,l.useContext)(f);return e=(0,u.vE)(e,"form-select"),(0,i.jsx)("select",{...d,size:a,ref:m,className:t()(s,e,r&&`${e}-${r}`,n&&"is-valid",o&&"is-invalid"),id:c||p})}));$.displayName="FormSelect";var Z=$;const R=l.forwardRef((({bsPrefix:e,className:r,as:a="small",muted:s,...n},o)=>(e=(0,u.vE)(e,"form-text"),(0,i.jsx)(a,{...n,ref:o,className:t()(r,e,s&&"text-muted")}))));R.displayName="FormText";var O=R;const H=l.forwardRef(((e,r)=>(0,i.jsx)(y,{...e,ref:r,type:"switch"})));H.displayName="Switch";var T=Object.assign(H,{Input:y.Input,Label:y.Label});const S=l.forwardRef((({bsPrefix:e,className:r,children:a,controlId:s,label:n,...o},l)=>(e=(0,u.vE)(e,"form-floating"),(0,i.jsxs)(_,{ref:l,className:t()(r,e),controlId:s,...o,children:[a,(0,i.jsx)("label",{htmlFor:s,children:n})]}))));S.displayName="FloatingLabel";var G=S;const z={_ref:o().any,validated:o().bool,as:o().elementType},V=l.forwardRef((({className:e,validated:r,as:a="form",...s},n)=>(0,i.jsx)(a,{...s,ref:n,className:t()(e,r&&"was-validated")})));V.displayName="Form",V.propTypes=z;var B=Object.assign(V,{Group:_,Control:N,Floating:g,Check:y,Switch:T,Label:F,Text:O,Range:L,Select:Z,FloatingLabel:G})}},function(e){e.O(0,[833,284,774,888,179],(function(){return r=7237,e(e.s=r);var r}));var r=e.O();_N_E=r}]);