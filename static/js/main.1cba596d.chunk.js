(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{120:function(e,t){},121:function(e,t){},122:function(e,t){},123:function(e,t){},124:function(e,t){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(94),a(29)),o=(a(95),a(12)),m=a(128),s=function(){return r.a.createElement(m.a,{elevation:0},r.a.createElement("div",{className:"content"},"Home"))},u=function(){return r.a.createElement(m.a,{elevation:0},r.a.createElement("div",{className:"content"},"Projects"))},E=a(42);E.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(E.c.version,"/pdf.worker.js");var p=function(){var e={content:{display:"inline-block",marginLeft:"auto",marginRight:"auto"}};return r.a.createElement(m.a,{elevation:0},r.a.createElement("div",{className:"content",style:e.content},r.a.createElement(E.a,{file:"/personal-site/static/documents/Resume-2020.pdf"},r.a.createElement(E.b,{height:1200,pageNumber:1}))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{elevation:0},r.a.createElement("div",{className:"content"},"Error: Page not found :( ")))},f=a(159),b=a(151),g=a(161),h=a(152),v=a(155),j=a(156),w=a(154),O=a(82),k=a.n(O),S=a(150),y=a(160),N=a(51),C=Object(S.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},avatarSmall:{width:e.spacing(3),height:e.spacing(3)},avatarLarge:{width:e.spacing(20),height:e.spacing(20),marginLeft:"auto",marginRight:"auto"},avatarWrapper:{display:"inline-block",marginLeft:"auto",marginRight:"auto",textAlign:"center"}}})),L=function(){var e,t=C(),a=Object(o.g)(),n=r.a.useState("/projects"===(e=a.pathname)?2:"/resume"===e?3:1),c=Object(i.a)(n,2),l=c[0],m=c[1],s=Object(o.f)(),u=function(e,t,a){m(t),s.push(a)};return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(g.a,{button:!0,onClick:function(e){return u(0,1,"/")}},r.a.createElement("div",{className:t.avatarWrapper},r.a.createElement(y.a,{alt:"Jayson",src:"/personal-site/static/images/avatar/me.jpg",className:t.avatarLarge}),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0},"Jayson (Goh Chung Sern)"),r.a.createElement(N.a,{variant:"h6",gutterBottom:!0},'"I am a..."'))),r.a.createElement(g.a,{button:!0,selected:2===l,onClick:function(e){return u(0,2,"/projects")}},r.a.createElement(h.a,{primary:"Projects"})),r.a.createElement(g.a,{button:!0,selected:3===l,onClick:function(e){return u(0,3,"/resume")}},r.a.createElement(h.a,{primary:"Resume"}))))},x=a(81),B=a.n(x),R=a(80),P=a.n(R),z=a(153),A=a(162),J=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Boolean(a);return r.a.createElement("div",{style:{}},r.a.createElement(z.a,{variant:"middle"}),r.a.createElement(N.a,{variant:"overline",gutterBottom:!0},"get in touch"),r.a.createElement("br",null),r.a.createElement(A.a,{open:c,anchorEl:a,onClose:function(){n(null)},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(N.a,{className:"h6"}," goh.chung.sern@gmail.com ")),r.a.createElement(w.a,{"aria-label":"Email",onClick:function(e){n(e.currentTarget)}},r.a.createElement(P.a,null)),r.a.createElement(w.a,{"aria-label":"Linkedin",onClick:function(){return window.open("https://www.linkedin.com/in/jaysongcs/","_blank")}},r.a.createElement(B.a,null)))},W=function(e){var t=!1,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],s=c[1];void 0!==e.isSmallScreen&&(t=e.isSmallScreen);var u,E=Object(o.g)(),p=r.a.useState("/projects"===(u=E.pathname)?2:"/resume"===u?3:1),d=Object(i.a)(p,2),O=d[0],S=d[1],y=Object(o.f)(),N=function(e,t,a){S(t),y.push(a)};return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{anchor:"top",open:l,onClose:function(){return s(!1)}},r.a.createElement(b.a,null,r.a.createElement(g.a,{button:!0,selected:1===O,onClick:function(e){N(0,1,"/"),s(!1)}},r.a.createElement(h.a,{primary:"About"})),r.a.createElement(g.a,{button:!0,selected:2===O,onClick:function(e){N(0,2,"/projects"),s(!1)}},r.a.createElement(h.a,{primary:"Projects"})),r.a.createElement(g.a,{button:!0,selected:3===O,onClick:function(e){N(0,3,"/resume"),s(!1)}},r.a.createElement(h.a,{primary:"Resume"})))),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return s(!0)}},r.a.createElement(k.a,null))))):r.a.createElement(m.a,{className:"container-side-bar",square:!0},r.a.createElement(L,{className:"item-side-bar-main",isSmallScreen:t}),r.a.createElement(J,{className:"item-side-bar-footer",isSmallScreen:t}))},F=a(83),G=a(30),H=a(157),I=Object(F.a)({typography:{useNextVariants:!0},palette:{background:{paper:Object(G.b)("#339999",.6)}},overrides:{MuiAppBar:{colorPrimary:{backgroundColor:Object(G.b)("#339999",.6)}}}});var q=function(){var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],m=!(e.width>=1250);return Object(n.useEffect)((function(){l(m)}),[m]),r.a.createElement("div",{className:"App"},r.a.createElement(H.a,{theme:I},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item-side-bar"},r.a.createElement(W,{isSmallScreen:c})),r.a.createElement("div",{className:c?"item-main-small":"item-main"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:s,exact:!0}),r.a.createElement(o.a,{path:"/projects",component:u}),r.a.createElement(o.a,{path:"/resume",component:p}),r.a.createElement(o.a,{component:d}))))))},M=a(39);l.a.render(r.a.createElement(M.a,{basename:"/personal-site"},r.a.createElement(q,null)),document.getElementById("root"))},89:function(e,t,a){e.exports=a(127)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.1cba596d.chunk.js.map