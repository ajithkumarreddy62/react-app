(this.webpackJsonpuser=this.webpackJsonpuser||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(40),s=a.n(l),r=(a(124),a(17)),i=a(12),j=(a(125),a(45)),o=a(200),b=a(194),d=(a(77),a(1)),u=function(e){var t=e.value,a=e.label,c=e.type,n=e.onChange;return Object(d.jsxs)("div",{className:"form-group",children:[a&&Object(d.jsx)("h5",{children:a}),Object(d.jsx)(b.a,{className:"inputstyle",label:a,id:"outlined-required",type:c,value:t,onChange:n,autoComplete:"off"})]})};u.defaultProps={value:"",label:"",placeholder:"",type:"text"};var O=u,h=a(195),x=a(202),m=a(210),f=a(208),v=function(e){var t=e.value,a=e.label,c=e.onChange;return Object(d.jsxs)("div",{className:"radiobtn",children:[a&&Object(d.jsx)("h5",{children:a}),Object(d.jsx)(f.a,{component:"fieldset",children:Object(d.jsxs)(x.a,{className:"btn btn-dark ",row:!0,"aria-label":"gender",name:"row-radio-buttons-group",value:t,onChange:c,children:[Object(d.jsx)(m.a,{value:"male",control:Object(d.jsx)(h.a,{}),label:"Male"}),Object(d.jsx)(m.a,{value:"female",control:Object(d.jsx)(h.a,{}),label:"Female"})]})})]})};v.defaultProps={value:"",label:""};var p=v,g=a(205),y=a(206),S=a(192),C=a(203),N=a(204),w=a(193),F=a(94),E=a.n(F),k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)(""),b=Object(i.a)(s,2),u=b[0],h=b[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),f=m[0],v=m[1],F=Object(c.useState)(""),k=Object(i.a)(F,2),D=k[0],z=k[1],I=Object(c.useState)(""),J=Object(i.a)(I,2),L=J[0],P=J[1],U=Object(c.useState)(""),B=Object(i.a)(U,2),$=B[0],G=B[1],A=Object(c.useState)(""),H=Object(i.a)(A,2),M=H[0],T=H[1],W=Object(c.useState)(""),Z=Object(i.a)(W,2),q=Z[0],_=Z[1],K=n.a.useState(!1),Q=Object(i.a)(K,2),R=Q[0],V=Q[1];return Object(c.useEffect)((function(){l(JSON.parse(window.localStorage.getItem("users")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("users",JSON.stringify(a))}),[a]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(C.a,{style:{background:"#2E3B55"},position:"static",children:Object(d.jsx)(N.a,{variant:"dense",children:Object(d.jsx)("span",{className:"navtext",children:"Enter User Data"})})}),Object(d.jsx)("form",{className:"form_center",onSubmit:function(e){e.preventDefault(),function(e){var t=/^[A-Za-z]+$/,a="",c="",n="";return t.test(u)?G(""):G(a="*Only characters are allowed"),t.test(f)?T(""):T(c="*Only characters are allowed"),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(D)?_(""):_(n="*Please enter a valid email"),!(a||c||n)}()&&(V(!0),l([].concat(Object(r.a)(a),[{id:a.length+1,first:u.trim(),last:f.trim(),email:D.trim(),gender:L.trim()}])),h(""),v(""),z(""),P(""),G(""),T(""))},children:Object(d.jsxs)(w.a,{container:!0,children:[Object(d.jsx)(w.a,{item:!0,xs:6,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{value:u,id:"firstname",placeholder:"firstname",type:"text",label:"First Name*",onChange:function(e){return h(e.target.value)}}),$?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:$}):null,Object(d.jsx)("br",{}),Object(d.jsx)(O,{value:f,id:"lastname",placeholder:"lastname",type:"text",label:"Last Name*",onChange:function(e){return v(e.target.value)}}),M?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:M}):null,Object(d.jsx)("br",{}),Object(d.jsx)(O,{value:D,id:"email",placeholder:"email",type:"text",label:"Email*",onChange:function(e){return z(e.target.value)}}),q?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:q}):null,Object(d.jsx)("br",{})]})}),Object(d.jsx)(w.a,{item:!0,xs:6,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(p,{value:L,id:"gender",placeholder:"gender",label:"Gender*",onChange:function(e){return P(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)(o.a,{variant:"contained",type:"submit",disabled:!u||!f||!D||!L,children:"Submit"}),Object(d.jsx)("div",{class:"divider"}),Object(d.jsx)(o.a,{variant:"contained",className:"sub-btn",component:j.b,to:"/display",children:"Cancel"}),Object(d.jsx)("br",{})]})})]})}),Object(d.jsxs)(g.a,{open:R,onClose:function(){V(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(d.jsx)(S.a,{children:Object(d.jsxs)("div",{class:"content",children:["User created sucessfully",Object(d.jsx)(E.a,{})]})}),Object(d.jsx)(y.a,{children:Object(d.jsx)(o.a,{component:j.b,to:"/display",autoFocus:!0,children:"Ok"})})]})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))},z=(a(134),a(32)),I=a(96),J=a.n(I),L=a(97),P=a.n(L),U=a(211),B=a(95),$=a.n(B),G=a(207),A=a(198),H=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),b=r[0],u=r[1],h=Object(c.useState)(""),x=Object(i.a)(h,2),m=x[0],f=x[1],v=Object(c.useState)((function(){var e=localStorage.getItem("users");return e?JSON.parse(e):[]})),w=Object(i.a)(v,2),F=w[0],E=w[1],k=n.a.useState(!1),D=Object(i.a)(k,2),I=D[0],L=D[1],B=function(){L(!1)},H=n.a.useState(!1),M=Object(i.a)(H,2),T=M[0],W=M[1],Z=n.a.useState(!1),q=Object(i.a)(Z,2),_=q[0],K=q[1],Q=Object(c.useState)({}),R=Object(i.a)(Q,2),V=R[0],X=R[1],Y=function(e,t){var a=F.map((function(a){return a.id===e?t:a}));E(a)};return Object(c.useEffect)((function(){localStorage.setItem("users",JSON.stringify(F)),E(F)}),[F]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(C.a,{style:{background:"#2E3B55"},position:"static",children:Object(d.jsxs)(N.a,{variant:"dense",children:[Object(d.jsx)("span",{className:"navtext",children:"User Data"}),Object(d.jsx)("div",{className:"create-button",children:Object(d.jsx)(o.a,{component:j.b,to:"/userform",style:{backgroundColor:"#FFFFFF",color:"#0000FF"},variant:"contained",startIcon:Object(d.jsx)($.a,{color:"primary"}),children:"Create User"})})]})}),null!==F?Object(d.jsxs)("table",{class:"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Firstname"}),Object(d.jsx)("th",{scope:"col",children:"Lastname"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Gender"}),Object(d.jsx)("th",{scope:"col",children:"Edit"}),Object(d.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(d.jsx)("tbody",{children:F.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.id}),Object(d.jsx)("td",{children:e.first}),Object(d.jsx)("td",{children:e.last}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.gender}),Object(d.jsx)("td",{children:Object(d.jsx)(U.a,{variant:"contained",onClick:function(){return function(e){L(!0),X(Object(z.a)({},e))}(e)},children:Object(d.jsx)(J.a,{})})}),Object(d.jsx)("td",{children:Object(d.jsx)(U.a,{variant:"contained",onClick:function(){return function(e){var t=F.filter((function(t){return t.id!==e}));E(t),alert("Do you want to proceed?"),K(!0)}(e.id)},children:Object(d.jsx)(P.a,{})})})]},e.id)}))})]}):Object(d.jsx)("h6",{children:"No user data found"}),Object(d.jsxs)(g.a,{fullWidth:!0,maxWidth:"sm",open:I,onClose:B,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(d.jsx)(S.a,{id:"alert-dialog-title",children:Object(d.jsx)("h5",{children:"Edit user form"})}),Object(d.jsx)(G.a,{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=/^[A-Za-z]+$/,a="",c="",n="";return t.test(V.first)?l(""):l(a="*Only characters are allowed"),t.test(V.last)?u(""):u(c="*Only characters are allowed"),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(V.email)?f(""):f(n="*Please enter a valid email"),!(a||c||n)}()&&(L(!1),W(!0),Y(V.id,V))},children:[Object(d.jsx)(O,{value:V.first,onChange:function(e){X(Object(z.a)(Object(z.a)({},V),{},{first:e.target.value}))},id:"firstname",placeholder:"First Name",type:"text",label:"First Name"}),a?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:a}):null,Object(d.jsx)("br",{}),Object(d.jsx)(O,{value:V.last,onChange:function(e){X(Object(z.a)(Object(z.a)({},V),{},{last:e.target.value}))},id:"lastname",placeholder:"Last Name",type:"text",label:"Last Name"}),b?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:b}):null,Object(d.jsx)("br",{}),Object(d.jsx)(O,{value:V.email,onChange:function(e){X(Object(z.a)(Object(z.a)({},V),{},{email:e.target.value}))},id:"email",placeholder:"Email",type:"email",label:"Email"}),m?Object(d.jsx)("div",{style:{fontSize:15,color:"red"},children:m}):null,Object(d.jsx)("br",{}),Object(d.jsx)(p,{value:V.gender,onChange:function(e){X(Object(z.a)(Object(z.a)({},V),{},{gender:e.target.value}))},id:"gender",label:"Gender"}),Object(d.jsx)("br",{}),Object(d.jsx)(o.a,{variant:"contained",type:"submit",class:"btn btn-primary",children:"Save"})]})}),Object(d.jsx)(y.a,{children:Object(d.jsx)(o.a,{variant:"contained",class:"btn btn-primary",onClick:B,children:"Cancel"})})]}),Object(d.jsx)(A.a,{open:T,autoHideDuration:6e3,onClose:function(){return W(!1)},message:"User details edited sucessfully!"}),Object(d.jsx)(A.a,{open:_,autoHideDuration:6e3,onClose:function(){return K(!1)},message:"User deleted sucessfully!"})]})},M=a(15);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/",element:Object(d.jsx)(H,{})}),Object(d.jsx)(M.a,{path:"/userform",element:Object(d.jsx)(k,{})}),Object(d.jsx)(M.a,{path:"/display",element:Object(d.jsx)(H,{})})]})})}),document.getElementById("root")),D()},77:function(e,t,a){}},[[136,1,2]]]);
//# sourceMappingURL=main.20ffe771.chunk.js.map