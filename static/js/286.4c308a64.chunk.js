"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[286],{6286:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(885),a="ReviewsList_list__oI2wY",u="ReviewsList_item__vBHRm",c=t(184),s=function(e){var n=e.reviews;return(0,c.jsxs)(c.Fragment,{children:[n&&0===n.length&&(0,c.jsx)("p",{children:"We dot'n haveany reviews for this movie"}),(0,c.jsx)("ul",{className:a,children:n&&n.length>0&&n.map((function(e){return(0,c.jsxs)("li",{className:u,children:[(0,c.jsx)("h3",{children:e.author}),(0,c.jsx)("p",{children:e.content})]},e.id)}))})]})},i=t(2791),o=t(6871),f=t(2690),p=function(){var e=(0,i.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1],u=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,f.lg)(u).then(a).catch((function(e){return console.log(e)}))}),[u]),(0,c.jsx)(s,{reviews:t})}},2690:function(e,n,t){t.d(n,{Df:function(){return o},S3:function(){return l},V0:function(){return f},lg:function(){return v},yK:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var i="7d40aa2ff6e70ba8e9ba9ff103642997",o=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/day?api_key=".concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=286.4c308a64.chunk.js.map