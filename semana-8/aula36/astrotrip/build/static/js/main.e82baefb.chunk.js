(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n.p+"static/media/undraw_Outer_space_drqu.ca951e8b.svg"},154:function(e,t,n){e.exports=n.p+"static/media/undraw_launching_125y.98eca41c.svg"},155:function(e,t,n){e.exports=n.p+"static/media/undraw_startman1_h7l9.31e1db52.svg"},234:function(e,t,n){e.exports=n(381)},379:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),o=n(22),l=n(147),u=n(24),s=n(93),p=n(92),m=n.n(p),f=Object(u.createMuiTheme)({palette:{primary:m.a}}),E=n(28),d=n(65),h=n(63),b=n(148),g=n(149),O=n(157),j=n(150),v=n(158),y=n(18),x=n(49),w=n.n(x),T=n(23),_=n.n(T),D=n(19);function I(){var e=Object(y.a)(["\n  width: 100%;\n  height: 100vh;\n  gap: 10px;\n  place-content: center;\n  justify-items: center;\n  display: grid;\n"]);return I=function(){return e},e}var P=D.a.form(I()),S=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleFieldChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state={email:"",password:""},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return r.a.createElement(P,null,r.a.createElement(w.a,{onChange:this.handleFieldChange,name:"email",type:"email",label:"E-mail",value:t}),r.a.createElement(w.a,{onChange:this.handleFieldChange,name:"password",type:"password",label:"Password",value:n}),r.a.createElement(_.a,null,"Login"))}}]),t}(a.Component),k=n(17),C=n(50),L=n.n(C),M=n(96),R=n(97),V=n.n(R),X=function(){return function(){var e=Object(M.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/".concat("daniel","/trips"));case 2:n=e.sent,t({type:"SET_TRIPS",payload:{trips:n.data.trips}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(M.a)(L.a.mark(function t(n){var a;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/".concat("daniel","/trip/").concat(e));case 2:a=t.sent,n({type:"SET_TRIP_DETAIL",payload:{tripDetail:a.data.trip}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},A=n(37),F=n.n(A),N=n(6),G=n.n(N);function H(){var e=Object(y.a)(["\n    margin-left: 15px;\n"]);return H=function(){return e},e}function J(){var e=Object(y.a)(["\n    height: 78px;\n"]);return J=function(){return e},e}var U=Object(D.a)(G.a)(J()),q=D.a.a(H());var B=function(){return r.a.createElement(U,{item:!0,container:!0,alignItems:"center",lg:8,xs:12},r.a.createElement(G.a,{item:!0,container:!0,xs:!0,justify:"flex-start"},"Logo"),r.a.createElement(G.a,{item:!0,container:!0,xs:!0,justify:"flex-end"},r.a.createElement(q,{href:"/"},"Home"),r.a.createElement(q,{href:"/trips/list"},"Viagens"),r.a.createElement(q,{href:"/login"},"Login")))},K=n(153),Q=n.n(K),W=n(154),Y=n.n(W),Z=n(58),$=n.n(Z),ee=n(60),te=n.n(ee),ne=n(59),ae=n.n(ne),re=n(61),ie=n.n(re),ce=n(155),oe=n.n(ce);function le(){var e=Object(y.a)(["\n    width: 300px;\n    margin-right: 15px;\n    margin-top: 15px;\n"]);return le=function(){return e},e}function ue(){var e=Object(y.a)(["\n    height: 200px;\n"]);return ue=function(){return e},e}var se=D.a.img(ue()),pe=Object(D.a)($.a)(le());function me(e){return r.a.createElement(pe,null,r.a.createElement(ae.a,null,r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(se,{src:oe.a}))),r.a.createElement(te.a,null,r.a.createElement(F.a,{variant:"h4",align:"center"},e.trip.name),r.a.createElement(F.a,{align:"center"},e.trip.description)),r.a.createElement(ie.a,null,r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(_.a,{size:"small",color:"primary"},"Inscrever"))))}function fe(){var e=Object(y.a)(["\n    padding-top: 100px;\n"]);return fe=function(){return e},e}function Ee(){var e=Object(y.a)(["\n    height: 400px;\n"]);return Ee=function(){return e},e}function de(){var e=Object(y.a)(["\n    height: 768px;\n    background: url(",");\n    background-size: auto 644px;\n    background-repeat: no-repeat;\n    background-position: 10%;\n"]);return de=function(){return e},e}var he=Object(D.a)(G.a)(de(),Q.a),be=D.a.img(Ee()),ge=Object(D.a)(G.a)(fe());var Oe=Object(o.c)(function(e){return{allTrips:e.trips.trips}},function(e){return{goHome:function(){return e(Object(k.d)(Se.root))},goLogin:function(){return e(Object(k.d)(Se.login))},fetchTrips:function(){return e(X())}}})(function(e){var t=e.fetchTrips,n=e.allTrips;Object(a.useEffect)(function(){t()},[]);var i=n?n.map(function(e){return r.a.createElement(me,{trip:e})}):"";return r.a.createElement("section",null,r.a.createElement(G.a,{container:!0,xs:!0},r.a.createElement(he,{item:!0,xs:12,container:!0,justify:"center"},r.a.createElement(B,null),r.a.createElement(G.a,{item:!0,lg:8,xs:12},"Teste")),r.a.createElement(G.a,{item:!0,container:!0,xs:12,justify:"center"},r.a.createElement(G.a,{item:!0,container:!0,lg:8,xs:12},r.a.createElement(ge,{item:!0,container:!0,xs:!0,justify:"flex-start",alignItems:"center"},r.a.createElement(F.a,null,"Descubra todas as maravilhas da gal\xe1xia. Vamos juntos, sem escalas.")),r.a.createElement(G.a,{item:!0,container:!0,xs:!0,justify:"flex-end"},r.a.createElement(be,{src:Y.a})))),r.a.createElement(G.a,{item:!0,container:!0,xs:12,justify:"center"},r.a.createElement(G.a,{item:!0,container:!0,lg:8,xs:12},i))))}),je=n(36),ve=n.n(je),ye=n(43),xe=n.n(ye);function we(){var e=Object(y.a)(["\n    width: 100vw;\n    height: 100vh;\n"]);return we=function(){return e},e}var Te=Object(D.a)(G.a)(we());var _e=Object(o.c)(function(e){return{allTrips:e.trips.trips,trip:e.trips.tripDetail}},function(e){return{fetchTrips:function(){return e(X())},goDetail:function(){return e(Object(k.d)(Se.detailTrip))},setTripDetail:function(t){return e(Object(k.d)("/trips/detail/".concat(t)))}}})(function(e){var t=e.fetchTrips,n=e.allTrips,i=e.setTripDetail;Object(a.useEffect)(function(){n||t()},[]);var c=n?n.map(function(e){return r.a.createElement(xe.a,{button:!0,onClick:function(){o(e.id)}},e.name)}):"",o=function(e){n.filter(function(t){return t.id===e}),i(e)};return r.a.createElement(Te,{container:!0},r.a.createElement(G.a,{item:!0,xs:6},"IMAGEM"),r.a.createElement(G.a,{item:!0,xs:6},r.a.createElement(B,null),r.a.createElement(G.a,{item:!0},r.a.createElement(_.a,{size:"small",color:"primary"},"Criar Viagem")),r.a.createElement(G.a,{item:!0},r.a.createElement(ve.a,null,c))))});function De(){var e=Object(y.a)(["\n    width: 100vw;\n    height: 100vh;\n"]);return De=function(){return e},e}var Ie=Object(D.a)(G.a)(De());var Pe=Object(o.c)(function(e){return{allTrips:e.trips.trips,tripDetail:e.trips.tripDetail}},function(e){return{fetchTripDetail:function(t){return e(z(t))}}})(function(e){var t=e.tripDetail,n=e.fetchTripDetail;Object(a.useEffect)(function(){t||n(e.match.params.id)},[]);var i=t?t.candidates.map(function(e){return r.a.createElement(xe.a,null," ",e.name," ")}):"";return r.a.createElement(Ie,{container:!0},r.a.createElement(G.a,{item:!0,xs:6},"IMAGEM"),r.a.createElement(G.a,{item:!0,xs:6},r.a.createElement(B,null),r.a.createElement(G.a,{item:!0},r.a.createElement(_.a,{size:"small",color:"primary"},"Criar Viagem")),r.a.createElement(G.a,{item:!0},r.a.createElement(ve.a,null,i))))}),Se={root:"/",appForm:"/application-form",login:"/login",createTrip:"/trips/create",listTrip:"/trips/list",detailTrip:"/trips/detail/:id"};var ke=function(e){return r.a.createElement(E.a,{history:e.history},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:Se.detailTrip,component:Pe}),r.a.createElement(d.a,{path:Se.listTrip,component:_e}),r.a.createElement(d.a,{path:Se.login,component:S}),r.a.createElement(d.a,{path:Se.root,component:Oe})))},Ce=n(27),Le=n(33);function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ve,Xe={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRIPS":return Re({},e,{trips:t.payload.trips});case"SET_TRIP_DETAIL":return Re({},e,{tripDetail:t.payload.tripDetail});default:return e}},Ae=n(144),Fe=(n(378),n(379),Object(Ce.a)()),Ne=[Object(Le.a)(Object(Ae.a)(Fe),l.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],Ge=Object(Le.e)((Ve=Fe,Object(Le.c)({router:Object(E.b)(Ve),trips:ze})),Le.d.apply(void 0,Ne)),He=function(){return r.a.createElement(o.a,{store:Ge},r.a.createElement(u.MuiThemeProvider,{theme:f},r.a.createElement(s.a,null),r.a.createElement(ke,{history:Fe})))},Je=document.getElementById("root");c.a.render(r.a.createElement(He,null),Je)}},[[234,1,2]]]);
//# sourceMappingURL=main.e82baefb.chunk.js.map