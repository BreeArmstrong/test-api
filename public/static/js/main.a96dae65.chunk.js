(this["webpackJsonpwine-reviews"]=this["webpackJsonpwine-reviews"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),o=(a(29),a(7)),s=a.n(o),l=a(5),u=a(6),m=a(3),v=(a(31),a(21)),p=(a(32),a(9)),d=function(e){var t=Object.entries(e.review).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a},n)}));return r.a.createElement("div",{className:"details"},r.a.createElement(u.b,{to:"/reviews/".concat(e.review.id)},"View Details"),t)};var w=function(e){var t=function(t){console.log(t.target.dataset.prop),e.setSortData({heading:t.target.dataset.prop,sortOrder:!e.setSortData.asc})},a=Object.keys(Object(p.get)(e,"reviews[0]")||{}).map((function(e){return r.a.createElement("div",{"data-prop":e,onClick:t,key:e},e)})),n=Object(p.sortBy)(Object(v.a)(e.reviews),[e.sortData.heading]).map((function(e,t){return r.a.createElement(d,{review:e,index:t})}));return r.a.createElement("div",{className:"review-list container"},a,n)},f=a(18),h=a(19),b=a(22),E=a(20),g=a(23),O=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello from Details"),r.a.createElement("pre",null,JSON.stringify(this.props.review,null,2)))}}]),t}(n.Component);O.displayName="ReviewDetails",console.log("I'm a Home Page!");var j=function(){console.log("rendering the app...");var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({heading:null,asc:!0}),o=Object(l.a)(i,2),v=o[0],p=o[1];return Object(n.useEffect)((function(){a.length||function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch("https://brees-app.herokuapp.com/reviews?page=1"));case 2:return e=a.sent,a.next=5,s.a.awrap(e.json());case 5:t=a.sent,c(t);case 7:case"end":return a.stop()}}))}().then()})),r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(u.b,{to:"/reviews"},"Wine Reviews List")),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/reviews"},r.a.createElement(w,{setSortData:p,sortData:v,reviews:a})),r.a.createElement(m.a,{path:"/reviews/:id",component:function(e){var t=a.find((function(t){return t.id===e.match.params.id}));return console.log(t,e.match.params.id,a),t?r.a.createElement(O,{review:t}):null}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a96dae65.chunk.js.map