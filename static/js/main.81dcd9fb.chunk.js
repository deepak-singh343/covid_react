(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__9cL5Z",card:"Cards_card__VSztc",infected:"Cards_infected__5LgVd",recovered:"Cards_recovered__loXlB",deaths:"Cards_deaths__3Rsfr",image:"Cards_image__28iyB"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),s=a.n(u),l=a(10),i=a(71),d=a(72),m=a(81),p=a(80),f=a(225),v=a(229),h=a(226),E=a(227),b=a(13),g=a.n(b),y=a(30),x=a.n(y),_=a(31),C=a.n(_),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:g.a.container},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(g.a.card,g.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h6"},r.a.createElement(C.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Active cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(g.a.card,g.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h6"},r.a.createElement(C.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"REcoverdData"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(g.a.card,g.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h6"},r.a.createElement(C.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Total deaths"))))):r.a.createElement("div",null,"Loading...")},j=a(29),O=a(32),k=a.n(O),S=" https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(43),I=a(77),L=a.n(I),R=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),d=Object(j.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(A.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:L.a.container},u?v:f)},U=a(230),V=a(228),z=a(78),G=a.n(z),J=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(U.a,{className:G.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(44),P=a.n(M),Z=a(79),Q=a.n(Z),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:P.a.container},r.a.createElement("img",{src:Q.a,alt:"logo",className:P.a.image}),r.a.createElement(w,{data:t}),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(R,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__4fQh2",image:"App_image__1xcez"}},77:function(e,t,a){e.exports={container:"Chart_container__b_Zfl"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__39D1G"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.81dcd9fb.chunk.js.map