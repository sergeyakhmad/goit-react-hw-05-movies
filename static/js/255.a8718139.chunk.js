"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[255],{6149:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(501),a=n(6871),c="MoviesList_list__Ea3rL",u="MoviesList_item__gLWPR",s="MoviesList_title__eedQP",i=n(184),o=function(e){var t=e.movies,n=(0,a.TH)();return(0,i.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,a=e.title,c=e.name,o=e.poster_path;e.overview;return(0,i.jsx)("li",{className:u,children:(0,i.jsxs)(r.Link,{to:"/movies/".concat(t),state:n,children:[(0,i.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w300".concat(o):"https://cdn.pixabay.com/photo/2014/04/03/10/32/tv-310801_960_720.png",alt:a,width:"100px"}),(0,i.jsx)("h3",{className:s,children:a||c})]})},t)}))})}},2690:function(e,t,n){n.d(t,{Df:function(){return o},S3:function(){return l},V0:function(){return f},lg:function(){return h},yK:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="7d40aa2ff6e70ba8e9ba9ff103642997",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1255:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(6149),c=n(2791),u=n(6871),s=n(2184),i="SearchForm_form__49W6b",o="SearchForm_input__7U8V+",f="SearchForm_btn__aI1lD",p="SearchForm_icon__0y7uA",l=n(184),h=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],h=(0,u.s0)();return(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n)return alert("Please, enter the name of movie title");h({search:"query="+n})},className:i,children:[(0,l.jsx)("input",{className:o,type:"text",name:"query",value:n,onChange:function(e){a(e.target.value)},placeholder:"Search..."}),(0,l.jsx)("button",{type:"submit",className:f,children:(0,l.jsx)(s.a4h,{className:p})})]})},m=n(2690),v=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,u.TH)(),o=new URLSearchParams(i.search).get("query");return(0,c.useEffect)((function(){o&&(0,m.V0)(o).then(s).catch((function(e){return console.log(e)}))}),[o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{}),n.length>0&&(0,l.jsx)(a.Z,{movies:n})]})}}}]);
//# sourceMappingURL=255.a8718139.chunk.js.map