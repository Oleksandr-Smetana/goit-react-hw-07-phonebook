(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactList:"ContactList_contactList__2DfNs",contactItem:"ContactList_contactItem__3FtCs",contactInfo:"ContactList_contactInfo__tJYdO",deleteButton:"ContactList_deleteButton__2CSi_",notification:"ContactList_notification__1dafR"}},19:function(t,e,n){t.exports={app:"App_app__3P5r6",title:"App_title__1mTLy"}},20:function(t,e,n){t.exports={filter:"Filter_filter__1i23P",label:"Filter_label__28FzA",input:"Filter_input__2do1e"}},51:function(t,e,n){},8:function(t,e,n){t.exports={form:"ContactForm_form__1WSxL",label:"ContactForm_label__3KWdd",input:"ContactForm_input__U41Bf",submitButton:"ContactForm_submitButton__vnsxw"}},90:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),s=n(10),i=n.n(s),u=n(7),b=n(3),l=n(9),j=(n(48),n(5)),f=n(37),d=n(4),O=n(13),m=(n(50),Object(b.b)("contacts/fetchContactsRequest")),p=Object(b.b)("contacts/fetchContactsSuccess"),h=Object(b.b)("contacts/fetchContactsError"),_=Object(b.b)("contacts/addContactRequest"),x=Object(b.b)("contacts/addContactSuccess"),C=Object(b.b)("contacts/addContactError"),v=Object(b.b)("contacts/deleteContactRequest"),N=Object(b.b)("contacts/deleteContactSuccess"),g=Object(b.b)("contacts/deleteContactError"),y=Object(b.b)("contacts/changeFilter"),L=Object(b.c)([],(c={},Object(j.a)(c,p,(function(t,e){return e.payload})),Object(j.a)(c,x,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?(O.b.warn("".concat(n.name," is already exist!")),t):(O.b.success("".concat(n.name," successfully added to Phonebook!")),[].concat(Object(f.a)(t),[n]))})),Object(j.a)(c,N,(function(t,e){var n=e.payload;t.filter((function(t){return t.id!==n}))})),c)),k=Object(b.c)(!1,(a={},Object(j.a)(a,m,(function(){return!0})),Object(j.a)(a,p,(function(){return!1})),Object(j.a)(a,h,(function(){return!1})),Object(j.a)(a,_,(function(){return!0})),Object(j.a)(a,x,(function(){return!1})),Object(j.a)(a,C,(function(){return!1})),Object(j.a)(a,v,(function(){return!0})),Object(j.a)(a,N,(function(){return!1})),Object(j.a)(a,g,(function(){return!1})),a)),F=Object(b.c)("",Object(j.a)({},y,(function(t,e){return e.payload}))),w=Object(d.b)({items:L,filter:F,loading:k}),A=Object(b.a)({reducer:{contacts:w},middleware:function(t){return t({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})},devTools:!1}),B=(n(51),n(19)),S=n.n(B),I=n(23),z=n(33),R=n(34),q=n(38),E=n(36),T=n(35),J=n.n(T),P=(n(70),n(1)),D=function(t){Object(q.a)(n,t);var e=Object(E.a)(n);function n(){return Object(z.a)(this,n),e.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(P.jsx)(J.a,{type:"Rings",color:"#3f51b5",height:80,width:80,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}}]),n}(r.Component),Z=n(14),M=n.n(Z);M.a.defaults.baseURL="https://618fc2d9f6bf450017484a37.mockapi.io";var U=n(17),W=function(t){return t.contacts.filter},K=function(t){return t.contacts.loading},Y=Object(U.a)([function(t){return t.contacts.items},W],(function(t,e){var n=e.toLowerCase().trim(" ");return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),$=n(8),G=n.n($);function H(){var t=Object(r.useState)(""),e=Object(I.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(I.a)(a,2),s=o[0],i=o[1],b=Object(u.c)(K),l=Object(u.b)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}},f=function(t,e){return l(function(t,e){return function(n){var c={name:t,number:e};n(_()),M.a.post("/contacts",c).then((function(t){var e=t.data;return n(x(e))})).catch((function(t){return n(C(t))}))}}(t,e))};return Object(P.jsxs)("form",{className:G.a.form,onSubmit:function(t){t.preventDefault(),f(n,s),c(""),i("")},children:[Object(P.jsxs)("label",{className:G.a.label,children:["Name",Object(P.jsx)("input",{className:G.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:n,onChange:j,required:!0})]}),Object(P.jsxs)("label",{className:G.a.label,children:["Number",Object(P.jsx)("input",{className:G.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:s,onChange:j,required:!0})]}),Object(P.jsx)("button",{className:G.a.submitButton,type:"submit",children:"Add contact"}),b&&Object(P.jsx)(D,{})]})}var Q=n(11),V=n.n(Q);function X(){var t=Object(u.b)(),e=Object(u.c)(K),n=Object(u.c)(Y);Object(r.useEffect)((function(){return t((function(t){t(m()),M.a.get("/contacts").then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(h(e))}))}))}),[t]);var c=function(e){return t(function(t){return function(e){e(v()),M.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(g(t))}))}}(e))};return Object(P.jsxs)(P.Fragment,{children:[0!==n.length?Object(P.jsx)("ul",{className:V.a.contactList,children:n.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(P.jsxs)("li",{className:V.a.contactItem,children:[Object(P.jsxs)("p",{className:V.a.contactInfo,children:[n,": ",a]}),Object(P.jsx)("button",{className:V.a.deleteButton,id:e,onClick:function(){return c(e)},children:"Delete"})]},e)}))}):Object(P.jsx)("p",{className:V.a.notification,children:"There are no contacts..."}),e&&Object(P.jsx)(D,{})]})}var tt=n(20),et=n.n(tt);function nt(){var t=Object(u.c)(K),e=Object(u.b)(),n=Object(u.c)(W);return Object(P.jsxs)("div",{className:et.a.filter,children:[Object(P.jsxs)("label",{className:et.a.label,children:["Find contacts by name",Object(P.jsx)("input",{className:et.a.input,type:"text",value:n,onChange:function(t){return e(y(t.currentTarget.value))}})]}),t&&Object(P.jsx)(D,{})]})}function ct(){return Object(P.jsxs)("div",{className:S.a.app,children:[Object(P.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(P.jsx)(H,{}),Object(P.jsx)("h2",{className:S.a.title,children:"Contacts"}),Object(P.jsx)(nt,{}),Object(P.jsx)(X,{}),Object(P.jsx)(O.a,{autoClose:3e3,position:"bottom-center",theme:"colored"})]})}i.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(u.a,{store:A,children:Object(P.jsx)(ct,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.03537db1.chunk.js.map