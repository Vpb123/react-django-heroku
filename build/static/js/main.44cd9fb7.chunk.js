(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{365:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=365},429:function(e,a,t){e.exports=t(551)},436:function(e,a,t){},549:function(e,a,t){},551:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),c=(t(434),t(436),t(46)),i=t(322),s=t(235),u=t(83),m=t(238),d=t.n(m),f=t(407),p=t.n(f),g=t(304),h=t(426),E=t(408),b=t.n(E),v=t(418),O=t.n(v),w=t(409),j=t.n(w),y=t(416),S=t.n(y),C=t(364),k=t.n(C),x=t(363),R=t.n(x),T=t(410),N=t.n(T),I=t(411),P=t.n(I),W=t(413),A=t.n(W),_=t(414),F=t.n(_),D=t(415),U=t.n(D),z=t(419),J=t.n(z),q=t(412),B=t.n(q),L=t(417),V=t.n(L),Y=t(420),M=t.n(Y),X={Add:Object(n.forwardRef)(function(e,a){return r.a.createElement(b.a,Object.assign({},e,{ref:a}))}),Check:Object(n.forwardRef)(function(e,a){return r.a.createElement(j.a,Object.assign({},e,{ref:a}))}),Clear:Object(n.forwardRef)(function(e,a){return r.a.createElement(R.a,Object.assign({},e,{ref:a}))}),Delete:Object(n.forwardRef)(function(e,a){return r.a.createElement(N.a,Object.assign({},e,{ref:a}))}),DetailPanel:Object(n.forwardRef)(function(e,a){return r.a.createElement(k.a,Object.assign({},e,{ref:a}))}),Edit:Object(n.forwardRef)(function(e,a){return r.a.createElement(P.a,Object.assign({},e,{ref:a}))}),Export:Object(n.forwardRef)(function(e,a){return r.a.createElement(B.a,Object.assign({},e,{ref:a}))}),Filter:Object(n.forwardRef)(function(e,a){return r.a.createElement(A.a,Object.assign({},e,{ref:a}))}),FirstPage:Object(n.forwardRef)(function(e,a){return r.a.createElement(F.a,Object.assign({},e,{ref:a}))}),LastPage:Object(n.forwardRef)(function(e,a){return r.a.createElement(U.a,Object.assign({},e,{ref:a}))}),NextPage:Object(n.forwardRef)(function(e,a){return r.a.createElement(k.a,Object.assign({},e,{ref:a}))}),PreviousPage:Object(n.forwardRef)(function(e,a){return r.a.createElement(S.a,Object.assign({},e,{ref:a}))}),ResetSearch:Object(n.forwardRef)(function(e,a){return r.a.createElement(R.a,Object.assign({},e,{ref:a}))}),Search:Object(n.forwardRef)(function(e,a){return r.a.createElement(V.a,Object.assign({},e,{ref:a}))}),SortArrow:Object(n.forwardRef)(function(e,a){return r.a.createElement(O.a,Object.assign({},e,{ref:a}))}),ThirdStateCheck:Object(n.forwardRef)(function(e,a){return r.a.createElement(J.a,Object.assign({},e,{ref:a}))}),ViewColumn:Object(n.forwardRef)(function(e,a){return r.a.createElement(M.a,Object.assign({},e,{ref:a}))})},G=Object(g.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}});function $(e){var a=G(),t=Object(n.useState)(" "),o=Object(c.a)(t,2),l=o[0],i=o[1],m=Object(n.useState)({columns:[{title:"Avatar",render:function(e){return r.a.createElement(h.a,{maxInitials:1,size:40,round:!0,name:void 0===e?" ":e.name})}},{title:"Name",field:"name"},{title:"Roll_no",field:"Roll_no"},{title:"Class",field:"Class"},{title:"City",field:"City"},{title:"Physics",field:"marks.physics"},{title:"Chemistry",field:"marks.chemistry"},{title:"Maths",field:"marks.maths"}],data:[]}),f=Object(c.a)(m,2),g=f[0],E=f[1];Object(n.useEffect)(function(){p.a.get("http://localhost:8000/api/studentd/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then(function(e){console.log(e),E(function(a){var t=e.data;return Object(u.a)({},a,{data:t})})}).catch(function(e){console.log(e)})},[]);var b=function(e){var a=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].trim();if(r.substring(0,e.length+1)===e+"="){a=decodeURIComponent(r.substring(e.length+1));break}}return a},v=function(a,t){if(!1===e.superuser)i("You are not Authorized!!!Reloading Page!"),window.location.reload(!1);else{var n=b("csrftoken"),r="http://localhost:8000/api/studentd/".concat(a.id,"/");fetch(r,{method:"PUT",headers:{Authorization:"JWT ".concat(localStorage.getItem("token")),"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(t)}).then(function(e){E(function(e){var n=Object(s.a)(e.data);return n[n.indexOf(a)]=t,Object(u.a)({},e,{data:n})})})}};return r.a.createElement("div",null,r.a.createElement("h5",{style:{color:"red"}},l),r.a.createElement(d.a,{className:a.root,icons:X,options:{exportButton:!0,sorting:!0,search:!0,grouping:!0,body:{fontSize:14}},title:"Student Portal",columns:g.columns,data:g.data,editable:e.superuser?{onRowAdd:function(a){return new Promise(function(t){setTimeout(function(){t(),function(a){if(!1===e.logged_in)i("You are not Authorized!!!Reloading Page!");else{var t=b("csrftoken");fetch("http://localhost:8000/api/studentd/",{method:"POST",headers:{Authorization:"JWT ".concat(localStorage.getItem("token")),"Content-type":"application/json","X-CSRFToken":t},body:JSON.stringify(a)}).then(function(e){E(function(e){var t=Object(s.a)(e.data);return t.push(a),Object(u.a)({},e,{data:t})})})}}(a)},1e3)})},onRowUpdate:function(e,a){return new Promise(function(t){setTimeout(function(){t(),a&&(console.log(e.marks.physics),v(a,e))},1e3)})},onRowDelete:function(e){return new Promise(function(a){setTimeout(function(){a(),function(e){var a=b("csrftoken"),t="http://localhost:8000/api/studentd/".concat(e.id);fetch(t,{method:"DELETE",headers:{Authorization:"JWT ".concat(localStorage.getItem("token")),"Content-type":"application/json","X-CSRFToken":a}}).then(function(a){E(function(a){var t=Object(s.a)(a.data);return t.splice(t.indexOf(e),1),Object(u.a)({},a,{data:t})})})}(e)},1e3)})}}:""}))}var H=t(333),Z=t(305),K=t(317),Q=t(299),ee=t(302),ae=t(318),te=t(362),ne=t(313),re=t(282),oe=t(154),le=t.n(oe),ce=t(264),ie=t(316);function se(){return r.a.createElement(ce.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(te.a,{color:"inherit",href:"https://material-ui.com/"},"V Company")," ",(new Date).getFullYear(),".")}var ue=Object(g.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});var me=function(e){var a=Object(n.useState)({username:"",password:""}),t=Object(c.a)(a,2),o=t[0],l=t[1],i=ue(),s=function(e){var a=e.target.name,t=e.target.value;l(function(e){var n=Object(u.a)({},e);return n[a]=t,n})};return r.a.createElement(ie.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:i.paper},r.a.createElement(H.a,{className:i.avatar},r.a.createElement(le.a,null)),r.a.createElement(ce.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:i.form,noValidate:!0,onSubmit:function(a){return e.handle_login(a,o)}},r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:o.username,onChange:s}),r.a.createElement(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:o.password,onChange:s}),r.a.createElement(ee.a,{control:r.a.createElement(ae.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit},"Sign In"),r.a.createElement(ne.a,{container:!0},r.a.createElement(ne.a,{item:!0,xs:!0},r.a.createElement(te.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(ne.a,{item:!0},r.a.createElement(te.a,{href:"./SignupForm",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(re.a,{mt:8},r.a.createElement(se,null)))};function de(){return r.a.createElement(ce.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(te.a,{color:"inherit",href:"https://material-ui.com/"},"V Company")," ",(new Date).getFullYear(),".")}var fe=Object(g.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}});var pe=function(e){var a=fe(),t=Object(n.useState)({username:"",password:"",email:"",is_superuser:!1}),o=Object(c.a)(t,2),l=o[0],i=o[1],s=function(e){var a=e.target.name,t=e.target.value;i(function(e){var n=Object(u.a)({},e);return n[a]=t,n})};return r.a.createElement(ie.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(H.a,{className:a.avatar},r.a.createElement(le.a,null)),r.a.createElement(ce.a,{component:"h1",variant:"h5"},"User Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(a){return e.handle_signup(a,l)}},r.a.createElement(ne.a,{container:!0,spacing:2},r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{autoComplete:"fname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,value:l.username,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email",value:l.email,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l.password,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(ee.a,{control:r.a.createElement(ae.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive updates via email."}))),r.a.createElement(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(ne.a,{container:!0,justify:"flex-end"},r.a.createElement(ne.a,{item:!0},r.a.createElement(te.a,{href:"",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(re.a,{mt:5},r.a.createElement(de,null)))};function ge(){return r.a.createElement(ce.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(te.a,{color:"inherit",href:"https://material-ui.com/"},"V Company")," ",(new Date).getFullYear(),".")}var he=Object(g.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}});var Ee=function(e){var a=he(),t=Object(n.useState)({username:"",password:"",email:"",is_superuser:!0}),o=Object(c.a)(t,2),l=o[0],i=o[1],s=function(e){var a=e.target.name,t=e.target.value;i(function(e){var n=Object(u.a)({},e);return n[a]=t,n})};return r.a.createElement(ie.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(H.a,{className:a.avatar},r.a.createElement(le.a,null)),r.a.createElement(ce.a,{component:"h1",variant:"h5"},"Admin Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(a){return e.handle_signup(a,l)}},r.a.createElement(ne.a,{container:!0,spacing:2},r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{autoComplete:"fname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,value:l.username,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email",value:l.email,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(Q.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l.password,onChange:s})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(ee.a,{control:r.a.createElement(ae.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive updates via email."}))),r.a.createElement(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(ne.a,{container:!0,justify:"flex-end"},r.a.createElement(ne.a,{item:!0},r.a.createElement(te.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(re.a,{mt:5},r.a.createElement(ge,null)))},be=(t(549),t(315)),ve=t(263),Oe=t(257),we=t(423),je=t.n(we),ye=t(424),Se=t.n(ye),Ce=t(261),ke=t(224),xe=Object(g.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});var Re=function(){var e=xe(),a=r.a.useState(null),t=Object(c.a)(a,2),o=t[0],l=t[1],s=Boolean(o),u=Object(n.useState)(!1),m=Object(c.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(""),g=Object(c.a)(p,2),h=g[0],E=g[1],b=Object(n.useState)(!1),v=Object(c.a)(b,2),O=v[0],w=v[1],j=Object(n.useState)(!!localStorage.getItem("token")),y=Object(c.a)(j,2),S=y[0],C=y[1],k=Object(n.useState)(null),x=Object(c.a)(k,2),R=x[0],T=x[1],N=Object(n.useState)(""),I=Object(c.a)(N,2),P=I[0],W=I[1],A=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");Object(n.useEffect)(function(){S&&fetch("http://localhost:8000/current_user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(e){void 0===e.username?_():(f(!0),W(""),w(e.is_superuser),localStorage.setItem("name",e.username),E(e.username))})},[]);var _=function(){localStorage.removeItem("token"),E(""),C(!1)},F=function(e,a){e.preventDefault(),fetch("http://localhost:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.token),W(""),C(!0),T(null),E(e.user.username),w(e.user.is_superuser),console.log(e),localStorage.removeItem("name"),localStorage.setItem("name",e.user.username)}).catch(function(e){W("Your Username or password is wrong!!!!!!!"),_()})},D=function(e,a){e.preventDefault(),a.password,!1===A.test(a.password)?W("Your password is not validated!!!!!!!!!!"):fetch("http://localhost:8000/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.token),C(!0),T(null),E(e.username),w(e.is_superuser),localStorage.setItem("name",e.first_name),W("")})},U=function(e){switch(e.target.id){case"2":T(r.a.createElement(me,{handle_login:F}));break;case"1":T(r.a.createElement(pe,{handle_signup:D}));break;case"4":T(r.a.createElement(Ee,{handle_signup:D}));break;default:T(null)}W(""),f(!0)};return r.a.createElement(ie.a,{style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:e.root},r.a.createElement(be.a,{position:"static"},r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(je.a,null)),r.a.createElement(ce.a,{variant:"h6",className:e.title},O?"".concat(h," - Admin"):"".concat(h)),r.a.createElement("div",null,r.a.createElement(Oe.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(Se.a,null)),r.a.createElement(ke.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){l(null)}},S?r.a.createElement(Ce.a,{onClick:function(){f(!1),localStorage.removeItem("token"),C(!1),E(""),T(null),window.location.reload(!1)}},"Logout"):r.a.createElement(Ce.a,{id:"4",value:"admin",onClick:U},"Admin"),S?"":r.a.createElement(Ce.a,{id:"1",value:"signup",onClick:U},"SignUp"),S?"":r.a.createElement(Ce.a,{id:"2",value:"login",onClick:U},"Login"))))),r.a.createElement("div",null,d?"":r.a.createElement(i.b,null,r.a.createElement("h1",{className:"display-3"},"Hello, Please Log in"),r.a.createElement("p",{className:"lead"},"This is system used to keep students records"),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"This is simple app developed as Django-React demo project "),r.a.createElement("p",{className:"lead"},r.a.createElement(i.a,{color:"primary"},"Learn More")))),r.a.createElement("h3",{style:{color:"red"}}," ",P," "),r.a.createElement("div",null,R),S?r.a.createElement($,{logged_in:S,superuser:O}):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[429,2,1]]]);
//# sourceMappingURL=main.44cd9fb7.chunk.js.map