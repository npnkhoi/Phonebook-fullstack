(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),o=t(15),s=t.n(o),i=t(6),u=t(3),a=function(e){var n=e.filter,t=e.setFilter;return Object(c.jsxs)("div",{children:["Filter - shown with name",Object(c.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]})},l=function(e){return Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{children:["name:",Object(c.jsx)("input",{onChange:function(n){return e.setNewName(n.target.value)},value:e.newName})]}),Object(c.jsxs)("div",{children:["number:",Object(c.jsx)("input",{onChange:function(n){return e.setNewNumber(n.target.value)},value:e.newNumber})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",onClick:e.addPerson,children:"add"})})]})},j=function(e){var n=e.person;return Object(c.jsxs)("div",{children:[n.name,": ",n.number]},n.name)},d=function(e){var n=e.persons,t=e.filter,r=e.removePerson;return n.filter((function(e){return e.name.includes(t)})).map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{person:e,removePerson:r}),Object(c.jsx)("button",{onClick:function(){return r(e.id)},children:"Delete"})]},e.name)}))},b=t(4),f=t.n(b),h="/api/persons",O=function(){return f.a.get(h).then((function(e){return e.data}))},m=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n)},x=function(e){var n=e.message,t={color:{SUCCESS:"green",ERROR:"red",NEUTRAL:"black"}[e.type]};return Object(c.jsx)("div",{className:"error",style:t,children:n})},w=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],s=Object(r.useState)(""),j=Object(u.a)(s,2),b=j[0],f=j[1],h=Object(r.useState)(""),w=Object(u.a)(h,2),N=w[0],g=w[1],S=Object(r.useState)(""),y=Object(u.a)(S,2),C=y[0],E=y[1],R=Object(r.useState)(null),k=Object(u.a)(R,2),P=k[0],U=k[1],A=Object(r.useState)("NEUTRAL"),T=Object(u.a)(A,2),D=T[0],F=T[1];Object(r.useEffect)((function(){O().then((function(e){o(e),console.log("fetched persons: ",e)}))}),[]);var L=function(e,n){U(e),F(n),setTimeout((function(){U(null),F("NEUTRAL")}),5e3)};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(x,{message:P,type:D}),Object(c.jsx)(a,{filter:C,setFilter:E}),Object(c.jsx)("h2",{children:"Add a new person"}),Object(c.jsx)(l,{newName:b,setNewName:f,newNumber:N,setNewNumber:g,addPerson:function(e){e.preventDefault();var n,c={name:b,number:N};t.map((function(e){return e.name})).includes(b)?window.confirm("".concat(b," is already in the list, do you want to modify this person?"))&&(t.forEach((function(e){e.name===b&&(n=e.id)})),v(n,Object(i.a)(Object(i.a)({},c),{},{id:n})).then((function(e){L("Updated successfully","SUCCESS"),o(t.map((function(t){return t.id===n?e.data:t})))}))):m(c).then((function(e){o(t.concat(e)),L("Added successfully","SUCCESS")})).catch((function(e){console.log(e)}));f(""),g("")}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(d,{persons:t,filter:C,removePerson:function(e){window.confirm("Do you really want to delete this person?")&&p(e).then((function(n){o(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log(e),L("This person is deleted in the server. Please reload this page.","ERROR")}))}})]})};t(38);s.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b07f2047.chunk.js.map