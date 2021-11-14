(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={app:"App_app__3P5r6",title:"App_title__1mTLy"}},17:function(t,e,n){t.exports={filter:"Filter_filter__1i23P",label:"Filter_label__28FzA",input:"Filter_input__2do1e"}},43:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),i=n(14),s=n.n(i),u=n(6),l=n(2),b=n(8),j=(n(41),n(4)),f=n(30),d=n(3),m=Object(l.b)("contacts/fetchContactsRequest"),O=Object(l.b)("contacts/fetchContactsSuccess"),p=Object(l.b)("contacts/fetchContactsError"),h=Object(l.b)("contacts/addContactRequest"),_=Object(l.b)("contacts/addContactSuccess"),x=Object(l.b)("contacts/addContactError"),C=Object(l.b)("contacts/deleteContactRequest"),v=Object(l.b)("contacts/deleteContactSuccess"),N=Object(l.b)("contacts/deleteContactError"),g=Object(l.b)("contacts/changeFilter"),y=Object(l.c)([],(c={},Object(j.a)(c,O,(function(t,e){return e.payload})),Object(j.a)(c,_,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?(alert("".concat(n.name," is already exist!")),t):[n].concat(Object(f.a)(t))})),Object(j.a)(c,v,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(l.c)(!1,(a={},Object(j.a)(a,m,(function(){return!0})),Object(j.a)(a,O,(function(){return!1})),Object(j.a)(a,p,(function(){return!1})),Object(j.a)(a,h,(function(){return!0})),Object(j.a)(a,_,(function(){return!1})),Object(j.a)(a,x,(function(){return!1})),Object(j.a)(a,C,(function(){return!0})),Object(j.a)(a,v,(function(){return!1})),Object(j.a)(a,N,(function(){return!1})),a)),F=Object(l.c)("",Object(j.a)({},g,(function(t,e){return e.payload}))),S=Object(d.b)({items:y,filter:F,loading:L}),k=Object(l.a)({reducer:{contacts:S},middleware:function(t){return t({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})},devTools:!1}),A=(n(43),n(16)),w=n.n(A),B=n(20),I=n(11),z=n.n(I);z.a.defaults.baseURL="https://618fc2d9f6bf450017484a37.mockapi.io";var q=function(t,e){return function(n){var c={name:t,number:e};n(h()),z.a.post("/contacts",c).then((function(t){var e=t.data;return n(_(e))})).catch((function(t){return n(x(t))}))}},D=function(t){return function(e){e(C()),z.a.delete("/contacts/".concat(t)).then((function(){return e(v(t))})).catch((function(t){return e(N(t))}))}},R=n(7),T=n.n(R),E=n(1);var J=Object(u.b)(null,(function(t){return{onSubmit:function(e,n){return t(q(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(r.useState)(""),c=Object(B.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(""),s=Object(B.a)(i,2),u=s[0],l=s[1],b=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}},j=function(){o(""),l("")};return Object(E.jsxs)("form",{className:T.a.form,onSubmit:function(t){t.preventDefault(),e(a,u),j()},children:[Object(E.jsxs)("label",{className:T.a.label,children:["Name",Object(E.jsx)("input",{className:T.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:a,onChange:b,required:!0})]}),Object(E.jsxs)("label",{className:T.a.label,children:["Number",Object(E.jsx)("input",{className:T.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:u,onChange:b,required:!0})]}),Object(E.jsx)("button",{className:T.a.submitButton,type:"submit",children:"Add contact"})]})})),P=n(9),Z=n.n(P);var M=Object(u.b)((function(t){console.log(t);var e=t.contacts,n=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter);return{contacts:n}}),(function(t){return{onDelete:function(e){return t(D(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(E.jsx)(E.Fragment,{children:0!==e.length?Object(E.jsx)("ul",{className:Z.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(E.jsxs)("li",{className:Z.a.contactItem,children:[Object(E.jsxs)("p",{className:Z.a.contactInfo,children:[c,": ",a]}),Object(E.jsx)("button",{className:Z.a.deleteButton,id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))}):Object(E.jsx)("p",{className:Z.a.notification,children:"There are no contacts yet..."})})})),U=n(17),W=n.n(U);var K=Object(u.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(g(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(E.jsx)("div",{className:W.a.filter,children:Object(E.jsxs)("label",{className:W.a.label,children:["Find contacts by name",Object(E.jsx)("input",{className:W.a.input,type:"text",value:e,onChange:n})]})})}));function Y(){return Object(E.jsxs)("div",{className:w.a.app,children:[Object(E.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(E.jsx)(J,{}),Object(E.jsx)("h2",{className:w.a.title,children:"Contacts"}),Object(E.jsx)(K,{}),Object(E.jsx)(M,{})]})}s.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(u.a,{store:k,children:Object(E.jsx)(Y,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1WSxL",label:"ContactForm_label__3KWdd",input:"ContactForm_input__U41Bf",submitButton:"ContactForm_submitButton__vnsxw"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__2DfNs",contactItem:"ContactList_contactItem__3FtCs",contactInfo:"ContactList_contactInfo__tJYdO",deleteButton:"ContactList_deleteButton__2CSi_",notification:"ContactList_notification__1dafR"}}},[[63,1,2]]]);
//# sourceMappingURL=main.8e5026ad.chunk.js.map