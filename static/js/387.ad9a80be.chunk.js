"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387,224],{3387:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,c,u=t(5861),s=t(9439),o=t(7757),i=t.n(o),p=t(2791),f=t(7689),d=t(2224),l=t(1887),h=t(168),v=t(6444),x=v.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 15px;\n  column-gap: 10px;\n"]))),m=v.ZP.li(a||(a=(0,h.Z)(["\n  border: 1px solid #a9a9a9;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),g=v.ZP.div(c||(c=(0,h.Z)(["\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),w=t(184),k=function(){var e=(0,p.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,p.useState)(!1),c=(0,s.Z)(a,2),o=c[0],h=c[1],v=(0,f.UO)().movieId;return(0,p.useEffect)((function(){var e=function(){var e=(0,u.Z)(i().mark((function e(){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.d5)(v);case 3:n=e.sent,t=n.cast,r(t),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a=e.t0.response,h(!0),console.log(a.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(v)}),[v]),(0,w.jsxs)(w.Fragment,{children:[o&&(0,w.jsx)(d.default,{}),t.length?(0,w.jsx)(x,{children:t.slice(0,12).map((function(e){return(0,w.jsxs)(m,{children:[(0,w.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://via.placeholder.com/200",alt:"".concat(e.name)}),(0,w.jsxs)(g,{children:[(0,w.jsx)("p",{children:e.name}),(0,w.jsxs)("p",{children:["Character:",(0,w.jsx)("span",{children:e.character})]})]})]},e.cast_id)}))}):(0,w.jsx)("p",{children:"No results"})]})}},2224:function(e,n,t){t.r(n);var r=t(184);n.default=function(){return(0,r.jsx)("h1",{children:"Not found page, please check URL address"})}},1887:function(e,n,t){t.d(n,{Bt:function(){return f},Mc:function(){return i},Tg:function(){return s},d5:function(){return p},vw:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2134d13c1835ef13ec8cd549d2172bad"}}),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,u.get("/trending/".concat("movie","/").concat("week","?page=").concat(n));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?page=".concat(n,"&query=").concat(t));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.ad9a80be.chunk.js.map