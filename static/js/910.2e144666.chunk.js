"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{3910:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(2791),a=t(4420),i=t(5653),c=t(889),o=t(3553),u=function(e){return e.filter},s=function(e){return e.contacts},l=(0,o.P1)([s,u],(function(e,n){var t=e.items;if(!n)return t;var r=n.toLowerCase().trim();return t.filter((function(e){var n=e.name,t=e.number;return n.toLowerCase().includes(r)||t.toLowerCase().includes(r)}))})),d=t(9439),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},h="ContactForm_wraper__kGvHg",f="ContactForm_form__ZCbN2",p="ContactForm_btn__LB+M3",v=t(184),x=function(e){var n=e.onSubmit,t=m(),a=m(),i=(0,r.useState)(""),c=(0,d.Z)(i,2),o=c[0],u=c[1],s=(0,r.useState)(""),l=(0,d.Z)(s,2),x=l[0],j=l[1],b=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?u(r):"number"===t&&j(r)};return(0,v.jsx)("div",{className:h,children:(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),n({name:o,number:x}),u(""),j("")},children:[(0,v.jsx)("label",{htmlFor:t,children:" Name"}),(0,v.jsx)("input",{type:"text",name:"name",value:o,required:!0,id:t,placeholder:"name",onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),(0,v.jsx)("label",{htmlFor:a,children:"Number"}),(0,v.jsx)("input",{type:"tel",name:"number",value:x,required:!0,id:a,placeholder:"phone number",onChange:b,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}),(0,v.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})})},j="ContactList_btn__6Piat",b=function(e){var n=e.contacts,t=e.deleteContact,r=n.map((function(e){var n=e.id,r=e.name,a=e.number;return(r||a)&&(0,v.jsxs)("li",{children:[r,": ",a,(0,v.jsx)("button",{className:j,type:"button",onClick:function(){return t(n)},children:"delete"})]},n)}));return(0,v.jsxs)("ol",{children:[" ",r]})},_=function(e){var n=e.changeFilter,t=e.title,r=e.filter;return(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:t}),(0,v.jsx)("input",{type:"text",name:"filter",value:r,placeholder:"Search",onChange:n})]})},C="contacts_wraper__C4FUQ",g=function(){var e=(0,a.v9)(s),n=e.isLoading,t=e.error,o=(0,a.v9)(l),d=(0,a.v9)(u),m=(0,a.I0)();(0,r.useEffect)((function(){m((0,c.yF)())}),[m]);return(0,v.jsx)("main",{children:(0,v.jsxs)("div",{className:C,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(x,{onSubmit:function(e){return m((0,c.uK)(e))}})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(_,{title:"Find contacts by name",filter:d,changeFilter:function(e){var n=e.target.value;return m((0,i.W)(n))}}),n&&(0,v.jsx)("p",{children:"....Loading"}),t&&(0,v.jsx)("p",{children:t}),(0,v.jsx)(b,{contacts:o,deleteContact:function(e){return m((0,c.GK)(e))}})]})]})})},w=function(){return(0,v.jsx)(g,{})}}}]);
//# sourceMappingURL=910.2e144666.chunk.js.map