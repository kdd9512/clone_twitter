(this.webpackJsonpclone_twitter=this.webpackJsonpclone_twitter||[]).push([[0],{32:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=n(9),o=n(19),u=n(6),l=n(8),j=n.n(l),d=n(14),b=n(11),p=n(20),f=n(21);n(43),n(49),n(50);f.a.initializeApp({apiKey:"AIzaSyDJN41HOALbEEJrgchyFfdY8ykj3Jqw4P0",authDomain:"clone-twitter-b195c.firebaseapp.com",projectId:"clone-twitter-b195c",storageBucket:"clone-twitter-b195c.appspot.com",messagingSenderId:"497608245037",appId:"1:497608245037:web:d2dbfc84e1a0c0681d5da4"});var O=f.a,h=f.a.auth(),x=f.a.firestore(),m=f.a.storage(),v=n(1),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),p=b[0],f=b[1],O=Object(a.useState)(!0),x=Object(i.a)(O,2),m=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"pw"===n&&u(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!m){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),f(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Your Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"pw",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:m?"Create Account":"Sign In"}),p&&Object(v.jsx)("span",{className:"authError",children:p})]}),Object(v.jsx)("span",{onClick:function(){return g((function(e){return!e}))},className:"authSwitch",children:m?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("google"!==(n=t.target.name)){e.next=6;break}return e.next=4,h.signInWithPopup(new O.auth.GoogleAuthProvider);case 4:e.next=9;break;case 6:if("github"!==n){e.next=9;break}return e.next=9,h.signInWithPopup(new O.auth.GithubAuthProvider);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)("span",{children:"Please Log In"}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(b.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(b.a,{icon:p.a})]})]})]})},w=n(33),N=n(17),k=function(e){var t=e.cloneTwObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),p=l[0],f=l[1],O=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this message?")){e.next=6;break}return e.next=4,x.doc("cloneTw/".concat(t.id)).delete();case 4:return e.next=6,m.refFromURL(t.uploadedUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("cloneTw/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"cloneTw",children:s?Object(v.jsx)(v.Fragment,{children:n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container cloneTwEdit",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"Edit this Message",value:p,required:!0}),Object(v.jsx)("input",{type:"submit",value:"Update cloneTw",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:h,className:"formBtn cancelBtn",children:"CANCEL"})]})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.uploadedUrl&&Object(v.jsx)("img",{src:t.uploadedUrl}),n&&Object(v.jsxs)("div",{className:"cloneTw__actions",children:[Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(b.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(b.a,{icon:N.a})})]})]})})},S=n(52),A=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1],f=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,uploadedUrl:a},e.next=15,x.collection("cloneTw").add(o);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(b.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),Object(v.jsx)("input",{type:"submit",value:"cloneTw"}),l&&Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:l,alt:"uploaded image file",style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(b.a,{icon:N.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){x.collection("cloneTw").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(A,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(k,{cloneTwObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(b.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},P=function(e){var t=e.userObj,n=Object(u.f)(),c=Object(a.useState)(t.displayName),r=Object(i.a)(c,2),s=r[0],o=r[1],l=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("cloneTw").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[]);var b=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=4;break}return e.next=4,t.updateProfile({displayName:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("span",{children:"My Profile"}),Object(v.jsx)("br",{}),Object(v.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"DISPLAY NAME",value:s,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"UPDATE",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),n.push("/")},children:"Log Out"})]})},F=function(e){var t=e.refreshUser,n=e.isLogin,a=e.userObj;return Object(v.jsxs)(o.a,{children:[n&&Object(v.jsx)(C,{userObj:a}),Object(v.jsx)(u.c,{children:n?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(I,{userObj:a})}),Object(v.jsx)(u.a,{exact:!0,path:"/profile",children:Object(v.jsx)(P,{userObj:a,refreshUser:t})})]}):Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){e?(null===e.displayName&&e.updateProfile({displayName:"NONAME"}),u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):u(null),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(F,{refreshUser:function(){var e=h.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLogin:Boolean(o),userObj:o}):"Initializing"})},E=n(32),B=n.n(E);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(T,{styles:B.a})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a60bd2d8.chunk.js.map