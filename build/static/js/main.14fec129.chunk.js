(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(3),o=function(e){var n=e.currentFilter,t=e.setFilter;return r.a.createElement("div",null," filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handlePerson})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNum,onChange:e.handleNum})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){return r.a.createElement("div",null,e.persons.filter(function(n){return n.name.toLowerCase().includes(e.currentFilter.toLowerCase())}).map(function(n){return r.a.createElement("p",{key:n.name}," ",n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return e.handleDelete(n.id,n.name)}},"Delete "))}))},d=t(2),f=t.n(d),s="/api/persons",b=function(e){return f.a.post(s,e).then(function(e){return e.data})},E=function(e,n){return f.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},h=function(e){f.a.delete("".concat(s,"/").concat(e))},p=s,v=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),s=d[0],v=d[1],w=Object(a.useState)(""),g=Object(l.a)(w,2),j=g[0],O=g[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),D=N[0],F=N[1],S=Object(a.useState)(null),k=Object(l.a)(S,2),P=k[0],y=k[1];Object(a.useEffect)(function(){f.a.get(p).then(function(e){u(e.data)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},{message:P}),r.a.createElement(o,{currentFilter:D,setFilter:function(e){F(e.target.value)}}),r.a.createElement("h2",null," add a new "),r.a.createElement(i,{addPerson:function(e){if(t.map(function(e){return e.name}).includes(s)){if(e.preventDefault(),window.confirm("".concat(s," is already added, replace the old number?"))){var n=t.find(function(e){return e.name.toLowerCase()===s.toLowerCase()});console.log(n);var a={name:s,number:j};E(n.id,a).then(function(e){u(t.map(function(t){return t.id!==n.id?t:e}))}),y("Changed number for ".concat(s,".")),setTimeout(function(){y(null)},3e3)}}else e.preventDefault(),b({name:s,number:j}).then(function(e){u(t.concat(e))}),y("Added ".concat(s,".")),setTimeout(function(){y(null)},3e3)},newName:s,handlePerson:function(e){v(e.target.value)},newNum:j,handleNum:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:t,handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(h(e),u(t.filter(function(n){return n.id!==e}))),y("Deleted ".concat(n)),setTimeout(function(){y(null)},3e3)},currentFilter:D}))});c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.14fec129.chunk.js.map