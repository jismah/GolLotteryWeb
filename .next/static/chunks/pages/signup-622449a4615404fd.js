(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{861:function(e,t,r){"use strict";r.d(t,{FT:function(){return o}});var a=r(7294),n=r(5893);const s=["as","disabled"];function o({tagName:e,disabled:t,href:r,target:a,rel:n,onClick:s,tabIndex:o=0,type:i}){e||(e=null!=r||null!=a||null!=n?"a":"button");const l={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},l];const c=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==s||s(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},l]}const i=a.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,i=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);const[l,{tagName:c}]=o(Object.assign({tagName:r,disabled:a},i));return(0,n.jsx)(c,Object.assign({},i,l,{ref:t}))}));i.displayName="Button",t.ZP=i},4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},6415:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(4347)}])},4347:function(e,t,r){"use strict";r.r(t);var a=r(4051),n=r.n(a),s=r(5893),o=r(7294),i=r(1676),l=r(5005),c=r(8811);function u(e,t,r,a,n,s,o){try{var i=e[s](o),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(a,n)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){d(e,t,r[t])}))}return e}t.default=function(){var e=(0,c.a)(),t=e.user,r=e.signup;console.log(t);var a=(0,o.useState)({email:"",password:""}),d=a[0],p=a[1],m=function(){var e,t=(e=n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r(d.email,d.password);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:console.log(d);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})),function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function o(e){u(s,a,n,o,i,"next",e)}function i(e){u(s,a,n,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,s.jsxs)("div",{style:{width:"40%",margin:"auto"},children:[(0,s.jsx)("h1",{className:"text-center my-3 ",children:"Signup"}),(0,s.jsxs)(i.Z,{onSubmit:m,children:[(0,s.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,s.jsx)(i.Z.Label,{children:"Email address"}),(0,s.jsx)(i.Z.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){return p(f({},d,{email:e.target.value}))},value:d.email})]}),(0,s.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,s.jsx)(i.Z.Label,{children:"Password"}),(0,s.jsx)(i.Z.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){return p(f({},d,{password:e.target.value}))},value:d.password})]}),(0,s.jsx)(l.Z,{variant:"primary",type:"submit",children:"Signup"})]})]})}},2703:function(e,t,r){"use strict";var a=r(414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5005:function(e,t,r){"use strict";var a=r(4184),n=r.n(a),s=r(7294),o=r(861),i=r(6792),l=r(5893);const c=s.forwardRef((({as:e,bsPrefix:t,variant:r,size:a,active:s,className:c,...u},d)=>{const f=(0,i.vE)(t,"btn"),[p,{tagName:m}]=(0,o.FT)({tagName:e,...u}),v=m;return(0,l.jsx)(v,{...p,...u,ref:d,className:n()(c,f,s&&"active",r&&`${f}-${r}`,a&&`${f}-${a}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},1676:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var a=r(4184),n=r.n(a),s=r(5697),o=r.n(s),i=r(7294),l=r(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},u=i.forwardRef((({as:e="div",className:t,type:r="valid",tooltip:a=!1,...s},o)=>(0,l.jsx)(e,{...s,ref:o,className:n()(t,`${r}-${a?"tooltip":"feedback"}`)})));u.displayName="Feedback",u.propTypes=c;var d=u;var f=i.createContext({}),p=r(6792);const m=i.forwardRef((({id:e,bsPrefix:t,className:r,type:a="checkbox",isValid:s=!1,isInvalid:o=!1,as:c="input",...u},d)=>{const{controlId:m}=(0,i.useContext)(f);return t=(0,p.vE)(t,"form-check-input"),(0,l.jsx)(c,{...u,ref:d,type:a,id:e||m,className:n()(r,t,s&&"is-valid",o&&"is-invalid")})}));m.displayName="FormCheckInput";var v=m;const b=i.forwardRef((({bsPrefix:e,className:t,htmlFor:r,...a},s)=>{const{controlId:o}=(0,i.useContext)(f);return e=(0,p.vE)(e,"form-check-label"),(0,l.jsx)("label",{...a,ref:s,htmlFor:r||o,className:n()(t,e)})}));b.displayName="FormCheckLabel";var x=b;const y=i.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:a=!1,disabled:s=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:u=!1,feedback:m,feedbackType:b,className:y,style:h,title:N="",type:g="checkbox",label:j,children:w,as:P="input",...C},k)=>{t=(0,p.vE)(t,"form-check"),r=(0,p.vE)(r,"form-switch");const{controlId:O}=(0,i.useContext)(f),E=(0,i.useMemo)((()=>({controlId:e||O})),[O,e]),I=!w&&null!=j&&!1!==j||function(e,t){return i.Children.toArray(e).some((e=>i.isValidElement(e)&&e.type===t))}(w,x),$=(0,l.jsx)(v,{...C,type:"switch"===g?"checkbox":g,ref:k,isValid:o,isInvalid:c,disabled:s,as:P});return(0,l.jsx)(f.Provider,{value:E,children:(0,l.jsx)("div",{style:h,className:n()(y,I&&t,a&&`${t}-inline`,"switch"===g&&r),children:w||(0,l.jsxs)(l.Fragment,{children:[$,I&&(0,l.jsx)(x,{title:N,children:j}),m&&(0,l.jsx)(d,{type:b,tooltip:u,children:m})]})})})}));y.displayName="FormCheck";var h=Object.assign(y,{Input:v,Label:x});r(2473);const N=i.forwardRef((({bsPrefix:e,type:t,size:r,htmlSize:a,id:s,className:o,isValid:c=!1,isInvalid:u=!1,plaintext:d,readOnly:m,as:v="input",...b},x)=>{const{controlId:y}=(0,i.useContext)(f);let h;return e=(0,p.vE)(e,"form-control"),h=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,l.jsx)(v,{...b,type:t,size:a,ref:x,readOnly:m,id:s||y,className:n()(o,h,c&&"is-valid",u&&"is-invalid","color"===t&&`${e}-color`)})}));N.displayName="FormControl";var g=Object.assign(N,{Feedback:d}),j=(0,r(6611).Z)("form-floating");const w=i.forwardRef((({controlId:e,as:t="div",...r},a)=>{const n=(0,i.useMemo)((()=>({controlId:e})),[e]);return(0,l.jsx)(f.Provider,{value:n,children:(0,l.jsx)(t,{...r,ref:a})})}));w.displayName="FormGroup";var P=w;const C=["xxl","xl","lg","md","sm","xs"];const k=i.forwardRef(((e,t)=>{const[{className:r,...a},{as:s="div",bsPrefix:o,spans:i}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,p.vE)(t,"col");const s=[],o=[];return C.forEach((e=>{const r=a[e];let n,i,l;delete a[e],"object"===typeof r&&null!=r?({span:n,offset:i,order:l}=r):n=r;const c="xs"!==e?`-${e}`:"";n&&s.push(!0===n?`${t}${c}`:`${t}${c}-${n}`),null!=l&&o.push(`order${c}-${l}`),null!=i&&o.push(`offset${c}-${i}`)})),[{...a,className:n()(r,...s,...o)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(s,{...a,ref:t,className:n()(r,!i.length&&o)})}));k.displayName="Col";var O=k;const E=i.forwardRef((({as:e="label",bsPrefix:t,column:r,visuallyHidden:a,className:s,htmlFor:o,...c},u)=>{const{controlId:d}=(0,i.useContext)(f);t=(0,p.vE)(t,"form-label");let m="col-form-label";"string"===typeof r&&(m=`${m} ${m}-${r}`);const v=n()(s,t,a&&"visually-hidden",r&&m);return o=o||d,r?(0,l.jsx)(O,{ref:u,as:"label",className:v,htmlFor:o,...c}):(0,l.jsx)(e,{ref:u,className:v,htmlFor:o,...c})}));E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};var I=E;const $=i.forwardRef((({bsPrefix:e,className:t,id:r,...a},s)=>{const{controlId:o}=(0,i.useContext)(f);return e=(0,p.vE)(e,"form-range"),(0,l.jsx)("input",{...a,type:"range",ref:s,className:n()(t,e),id:r||o})}));$.displayName="FormRange";var F=$;const R=i.forwardRef((({bsPrefix:e,size:t,htmlSize:r,className:a,isValid:s=!1,isInvalid:o=!1,id:c,...u},d)=>{const{controlId:m}=(0,i.useContext)(f);return e=(0,p.vE)(e,"form-select"),(0,l.jsx)("select",{...u,size:r,ref:d,className:n()(a,e,t&&`${e}-${t}`,s&&"is-valid",o&&"is-invalid"),id:c||m})}));R.displayName="FormSelect";var T=R;const _=i.forwardRef((({bsPrefix:e,className:t,as:r="small",muted:a,...s},o)=>(e=(0,p.vE)(e,"form-text"),(0,l.jsx)(r,{...s,ref:o,className:n()(t,e,a&&"text-muted")}))));_.displayName="FormText";var S=_;const Z=i.forwardRef(((e,t)=>(0,l.jsx)(h,{...e,ref:t,type:"switch"})));Z.displayName="Switch";var L=Object.assign(Z,{Input:h.Input,Label:h.Label});const z=i.forwardRef((({bsPrefix:e,className:t,children:r,controlId:a,label:s,...o},i)=>(e=(0,p.vE)(e,"form-floating"),(0,l.jsxs)(P,{ref:i,className:n()(t,e),controlId:a,...o,children:[r,(0,l.jsx)("label",{htmlFor:a,children:s})]}))));z.displayName="FloatingLabel";var D=z;const V={_ref:o().any,validated:o().bool,as:o().elementType},B=i.forwardRef((({className:e,validated:t,as:r="form",...a},s)=>(0,l.jsx)(r,{...a,ref:s,className:n()(e,t&&"was-validated")})));B.displayName="Form",B.propTypes=V;var A=Object.assign(B,{Group:P,Control:g,Floating:j,Check:h,Switch:L,Label:I,Text:S,Range:F,Select:T,FloatingLabel:D})},6792:function(e,t,r){"use strict";r.d(t,{vE:function(){return i}});var a=r(7294);r(5893);const n=a.createContext({prefixes:{}}),{Consumer:s,Provider:o}=n;function i(e,t){const{prefixes:r}=(0,a.useContext)(n);return e||r[t]||t}},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(4184),n=r.n(a),s=/-(.)/g;var o=r(7294),i=r(6792),l=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=c(e),Component:r,defaultProps:a}={}){const s=o.forwardRef((({className:t,bsPrefix:a,as:s=r||"div",...o},c)=>{const u=(0,i.vE)(a,e);return(0,l.jsx)(s,{ref:c,className:n()(t,u),...o})}));return s.defaultProps=a,s.displayName=t,s}},2473:function(e){"use strict";var t=function(){};e.exports=t}},function(e){e.O(0,[774,888,179],(function(){return t=6415,e(e.s=t);var t}));var t=e.O();_N_E=t}]);