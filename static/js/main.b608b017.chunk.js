(this.webpackJsonpmars=this.webpackJsonpmars||[]).push([[0],{80:function(e,t,r){},81:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(58),i=r.n(n),s=r(50),o=r(147),l=(r(80),r(149)),j=r(137),b=r(150),u=r(148),d=r(152),h=r(102),x=r(151),m=r(13),p=(r(81),r(8)),O=r(35),v=r(12),f=r(144),y=r(153),g=r(141),C=r(145),M=r(142),w=r(138),A=r(146),S=r(154),T=r(140),F=r(155),I=r(157),D=r(158),W=r(61),B=r.n(W),E=r(2),H={rover:"curiosity",camera:"CHEMCAM",sol:100},J=["curiosity","opportunity","spirit"],L={FHAZ:["curiosity","opportunity","spirit"],RHAZ:["curiosity","opportunity","spirit"],MAST:["curiosity"],CHEMCAM:["curiosity"],MAHLI:["curiosity"],MARDI:["curiosity"],NAVCAM:["curiosity","opportunity","spirit"],PANCAM:["opportunity","spirit"],MINITES:["opportunity","spirit"]};function k(){var e=Object(a.useState)(null),t=Object(v.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(H),i=Object(v.a)(n,2),s=i[0],o=i[1],l=B()((function(e){o(Object(O.a)(Object(O.a)({},s),{},{sol:e.target.value}))}),500),j=function(e){var t=e.target,r=t.name,a=t.value;o(Object(O.a)(Object(O.a)({},s),{},Object(p.a)({},r,a)))},b=function(e){var t=e.rover,r=e.sol,a=e.camera;fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(t,"/photos?sol=").concat(r,"&camera=").concat(a,"&api_key=nTPtaVtB6nKcLyrB5DqtTJJCIen1JMbJnLwl8pMT&page=1")).then((function(e){return e.json()})).then((function(e){var t=e.photos;return c(t)}))};return Object(a.useEffect)((function(){var e=s.rover,t=s.sol,r=s.camera;b({rover:e,sol:t,camera:r})})),Object(E.jsxs)("div",{children:[Object(E.jsx)(u.a,{variant:"h1",style:{fontWeight:"bold"},children:"Discover"}),Object(E.jsx)("br",{}),Object(E.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),Object.values(s).every(Boolean)){var t=s.rover,r=s.sol,a=s.camera;b({rover:t,sol:r,camera:a})}else alert("Form is not finished")},children:Object(E.jsxs)(f.a,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[Object(E.jsx)(f.a,{item:!0,children:Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:"Type of Rover"}),Object(E.jsx)(M.a,{name:"rover",value:s.rover,onChange:j,row:!0,children:J.map((function(e,t){return Object(E.jsx)(y.a,{value:e,control:Object(E.jsx)(w.a,{size:"small"}),label:e},t)}))})]})}),Object(E.jsxs)(f.a,{item:!0,children:[Object(E.jsx)(C.a,{children:"Sol (day on Mars)"}),Object(E.jsx)(S.a,{width:300,children:Object(E.jsx)(T.a,{marks:[{value:0,label:"0"},{value:1e3,label:"1000"}],min:0,max:1e3,defaultValue:H.sol,onChange:l,"aria-label":"Default",valueLabelDisplay:"auto"})})]}),s.rover&&Object(E.jsx)(f.a,{item:!0,children:Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:"Type of Camera"}),Object(E.jsx)(M.a,{name:"camera",value:s.camera,onChange:j,row:!0,children:Object.keys(L).filter((function(e){return L[e].includes(s.rover)})).map((function(e,t){return Object(E.jsx)(y.a,{value:e,control:Object(E.jsx)(w.a,{size:"small"}),label:e},t)}))})]})}),Object(E.jsx)(f.a,{item:!0}),Object(E.jsx)("br",{}),Object(E.jsx)(A.a,{variant:"contained",color:"primary",type:"submit",children:"Show results"})]})}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),r?r.length?Object(E.jsx)(f.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start",children:r.map((function(e){return Object(E.jsx)(f.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsxs)(F.a,{children:[Object(E.jsx)(I.a,{title:e.id,subheader:"Camera : ".concat(e.camera.name)}),Object(E.jsx)(D.a,{children:Object(E.jsx)("img",{style:{maxWidth:"100%"},src:e.img_src,alt:"",srcset:""})})]})},e.id)}))}):Object(E.jsx)(u.a,{align:"center",variant:"h3",children:"Not found"}):null]})}var N=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(a.Fragment,{children:[Object(E.jsx)(h.a,{styles:{ul:{margin:0,padding:0,listStyle:"none"}}}),Object(E.jsx)(j.a,{}),Object(E.jsx)(l.a,{position:"static",color:"default",elevation:0,sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(E.jsxs)(b.a,{sx:{flexWrap:"wrap"},children:[Object(E.jsx)(u.a,{align:"left",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Expedition to Mars"}),Object(E.jsx)("nav",{})]})}),Object(E.jsx)("img",{alt:"Mars",style:{height:"200px",width:"100%",objectFit:"cover"},src:"https://images.news18.com/ibnlive/uploads/2021/08/1627902340_mars-new-images-1600x900.jpg"}),Object(E.jsx)(x.a,{disableGutters:!0,style:{minHeight:"calc(100vh - 150px)"},maxWidth:"md",component:"main",sx:{pt:2,pb:6},children:Object(E.jsx)(m.c,{children:Object(E.jsx)(m.a,{path:"/",element:Object(E.jsx)(k,{})})})}),Object(E.jsx)(x.a,{maxWidth:"md",component:"footer",sx:{borderTop:function(e){return"1px solid ".concat(e.palette.divider)},py:4},children:Object(E.jsxs)(u.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(E.jsx)(d.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})})]})})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,159)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))},R=r(28),V=r(65),_=Object(V.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:R.a.A400}}});i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(s.a,{children:Object(E.jsx)(o.a,{theme:_,children:Object(E.jsx)(N,{})})})}),document.getElementById("root")),P()}},[[98,1,2]]]);
//# sourceMappingURL=main.b608b017.chunk.js.map