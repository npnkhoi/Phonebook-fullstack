(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(2),o=t(14),i=t.n(o),s=t(3),u=function(e){var n=e.filter,t=e.setFilter;return Object(r.jsxs)("div",{children:["Filter - shown with name",Object(r.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]})},a=function(e){return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{children:["name:",Object(r.jsx)("input",{onChange:function(n){return e.setNewName(n.target.value)},value:e.newName})]}),Object(r.jsxs)("div",{children:["number:",Object(r.jsx)("input",{onChange:function(n){return e.setNewNumber(n.target.value)},value:e.newNumber})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",onClick:e.addPerson,children:"add"})})]})},l=function(e){var n=e.person;return Object(r.jsxs)("div",{children:[n.name,": ",n.number]},n.name)},d=function(e){var n=e.persons,t=e.filter,c=e.removePerson;return n.filter((function(e){return e.name.includes(t)})).map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{person:e,removePerson:c}),Object(r.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete"})]},e.id)}))},j=t(4),b=t.n(j),f="/api/persons",h=function(){return b.a.get(f).then((function(e){return e.data}))},O=function(e){return b.a.post(f,e).then((function(e){return e.data}))},m=function(e){return b.a.delete("".concat(f,"/").concat(e))},p=function(e,n){return b.a.put("".concat(f,"/").concat(e),n)},v=function(e){var n=e.message,t={color:{SUCCESS:"green",ERROR:"red",NEUTRAL:"black"}[e.type]};return Object(r.jsx)("div",{className:"error",style:t,children:n})},x=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),j=l[0],b=l[1],f=Object(c.useState)(""),x=Object(s.a)(f,2),w=x[0],N=x[1],S=Object(c.useState)(""),g=Object(s.a)(S,2),y=g[0],E=g[1],R=Object(c.useState)(null),C=Object(s.a)(R,2),k=C[0],P=C[1],U=Object(c.useState)("NEUTRAL"),A=Object(s.a)(U,2),T=A[0],D=A[1];Object(c.useEffect)((function(){h().then((function(e){o(e)}))}),[]);var F=function(e,n){P(e),D(n),setTimeout((function(){P(null),D("NEUTRAL")}),1e4)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(v,{message:k,type:T}),Object(r.jsx)(u,{filter:y,setFilter:E}),Object(r.jsx)("h2",{children:"Add a new person"}),Object(r.jsx)(a,{newName:j,setNewName:b,newNumber:w,setNewNumber:N,addPerson:function(e){e.preventDefault();var n,r={name:j,number:w};t.map((function(e){return e.name})).includes(j)?window.confirm("".concat(j," is already in the list, do you want to modify this person?"))&&(t.forEach((function(e){e.name===j&&(n=e.id)})),r.id=n,p(n,r).then((function(e){F("Updated successfully","SUCCESS"),o(t.map((function(e){return e.id===n?r:e})))})).catch((function(e){var n=e.response.data.error;F(JSON.stringify(n),"ERROR")}))):O(r).then((function(e){o(t.concat(e)),F("Added successfully","SUCCESS")})).catch((function(e){console.log(e)}));b(""),N("")}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(d,{persons:t,filter:y,removePerson:function(e){window.confirm("Do you really want to delete this person?")&&m(e).then((function(n){o(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log(e),F("This person is deleted in the server. Please reload this page.","ERROR")}))}})]})};t(37);i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c3009134.chunk.js.map