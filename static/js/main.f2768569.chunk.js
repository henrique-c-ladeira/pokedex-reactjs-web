(this.webpackJsonppokereact=this.webpackJsonppokereact||[]).push([[0],{132:function(t,e,n){},134:function(t,e,n){},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(1),s=n.n(a),r=n(21),i=n.n(r),o=n(22),u=n(23),j=n(31),b=n(30),p=n(24),d=n.n(p).a.create({baseURL:"https://pokeapi.co/api/v2/"}),l=(n(53),n(7)),m=n.n(l),O=n(25),f=n(4),v=n(8),h=n(9),k=n(26);n(132);function x(){var t=Object(v.a)(["",""]);return x=function(){return t},t}function g(){var t=Object(v.a)(["animation: 0.5s "," "]);return g=function(){return t},t}var w=h.a.div(g(),Object(h.b)(x(),k.flipInY)),L=function(t){var e=t.pokemon,n=Object(a.useState)(!1),s=Object(f.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(!1),u=Object(f.a)(o,2),j=u[0],b=u[1],p=Object(a.useState)([]),l=Object(f.a)(p,2),v=l[0],h=l[1],k=Object(a.useCallback)(Object(O.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return");case 2:return i(!0),t.next=5,d.get("pokemon/".concat(e.id));case 5:n=t.sent,console.log(n.data.stats),h(n.data.stats),b(!j),i(!1);case 10:case"end":return t.stop()}}),t)}))),[r]);return j?Object(c.jsx)(w,{children:Object(c.jsxs)("div",{onClick:k,className:"cardFlipped",children:[Object(c.jsxs)("div",{children:[" ",Object(c.jsx)("img",{src:e.sprite})," ",e.name," "]}),v.map((function(t){return Object(c.jsxs)("div",{children:[t.stat.name," - ",t.base_stat]})}))]})}):Object(c.jsxs)("div",{onClick:k,className:"card",children:[Object(c.jsx)("img",{src:e.img,alt:""}),Object(c.jsxs)("div",{children:[" ",e.name,"  "]})]})},N=function(t){return Object(c.jsx)("div",{className:"cardList",children:t.list.map((function(t){return Object(c.jsxs)("div",{value:t.name,children:[" ",Object(c.jsx)(L,{pokemon:t})," "]},t.name)}))})},C=(n(134),function(t){var e=t.title;return Object(c.jsxs)("div",{className:"header",children:[" ",e," "]})}),I=(n(135),n(136),n(137),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={cardList:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.get("pokemon?limit=151").then((function(e){var n=e.data.results.map((function(t){var e=t.url.split("/")[6];return{id:e,name:t.name,img:"https://pokeres.bastionbot.org/images/pokemon/".concat(e,".png"),sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e,".png")}}));t.setState({cardList:n})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(C,{title:"<> PokeAPI in React </>"}),Object(c.jsx)(N,{list:this.state.cardList})]})}}]),n}(s.a.Component));i.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))},53:function(t,e,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.f2768569.chunk.js.map