(this.webpackJsonpmoviereactapp=this.webpackJsonpmoviereactapp||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(28),i=c.n(n),s=(c(36),c(10)),r=c(3),l=(c(37),c(9)),j=c(29),d=c.n(j).a.create();function o(e){return d.get("".concat("https://api.themoviedb.org/3/").concat(e),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThkNmFjZjQ3YTAzNjFmNzU3OThjMDlhNGJkODFjYyIsInN1YiI6IjYxMGExMzc3ZTYxZTZkMDA1ZjE5MTNlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRazajZH467xwxemEmYTQ-6Z07frQF83ABEI8cf9__Y","Content-Type":"application/json;charset=utf-8"}})}c(56);var b=c(2);var m=function(e){return Object(b.jsx)("img",{alt:"movies",className:e.classname,src:null===e||void 0===e?void 0:e.imageUrl})};c(58);var v=function(e){var t=Object(r.f)().id?"../not_found.jpg":"not_found.jpg",c=e.movie.poster_path?"https://image.tmdb.org/t/p/w".concat("cardMovies"===e.classname?"200":"500").concat(e.movie.poster_path):t;return Object(b.jsx)(m,{imageUrl:c,classname:e.classname})},u=c(30),h=c.n(u);var O=function(e){return Object(b.jsx)(a.Fragment,{children:e.active?Object(b.jsx)("div",{className:"text-center spin",children:Object(b.jsx)(h.a,{color:"#ffffff",loading:e.active,size:150})}):Object(b.jsx)("div",{})})};var x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){d(!0),o("discover/movie").then((function(e){n(e.data.results),d(!1)}))};return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(O,{active:j}),Object(b.jsx)("div",{className:"text-center gradinTitle",children:"Tops Movies"}),Object(b.jsx)("div",{className:"row  mt-4",children:c.map((function(e){return Object(b.jsx)("div",{className:"col-md-2 px-5",children:Object(b.jsxs)(s.b,{to:"/detail/"+e.id,children:[Object(b.jsx)(v,{movie:e,classname:"cardMovies"}),Object(b.jsx)("p",{className:"mt-1 text-center fw-bold gradinText",children:e.title})]})},e.id)}))})]})};var f=function(){var e,t,c,n,i,s,j=Object(r.f)().id,d=Object(a.useState)(0),m=Object(l.a)(d,2),u=m[0],h=m[1],x=Object(a.useState)(!1),f=Object(l.a)(x,2),p=f[0],g=f[1];Object(a.useEffect)((function(){N(j)}),[j]);var N=function(e){g(!0),o("movie/".concat(e)).then((function(e){h(e.data),g(!1)}))};return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(O,{active:p}),Object(b.jsxs)("div",{className:"row justify-content-md-center",children:[Object(b.jsx)("div",{className:"col col-lg-1"}),Object(b.jsx)("div",{className:"col-md-auto text-center",children:Object(b.jsx)(v,{movie:u,classname:"cardMovie"})}),Object(b.jsxs)("div",{className:"col-md-4 mt-3",children:[Object(b.jsx)("p",{className:"gradinTitle",children:null===u||void 0===u?void 0:u.title}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Description: "}),Object(b.jsx)("div",{className:"fw-light",children:null===u||void 0===u?void 0:u.overview}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Production companies: "}),Object(b.jsx)("div",{className:"fw-light",children:null===u||void 0===u||null===(e=u.production_companies)||void 0===e||null===(t=e.map((function(e){return e.name})))||void 0===t?void 0:t.join(", ")}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Production countries: "}),Object(b.jsx)("div",{className:"fw-light",children:null===u||void 0===u||null===(c=u.production_countries)||void 0===c||null===(n=c.map((function(e){return e.name})))||void 0===n?void 0:n.join(", ")}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Release date: "}),Object(b.jsx)("div",{className:"fw-light",children:null===u||void 0===u?void 0:u.release_date}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Language: "}),Object(b.jsxs)("div",{className:"fw-light",children:[" ",null===u||void 0===u?void 0:u.original_language]}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Genres: "}),Object(b.jsx)("div",{className:"fw-light",children:null===u||void 0===u||null===(i=u.genres)||void 0===i||null===(s=i.map((function(e){return e.name})))||void 0===s?void 0:s.join(", ")}),Object(b.jsx)("span",{className:"gradinItem fw-bold ",children:"Site: "}),Object(b.jsx)("div",{className:"fw-light",children:Object(b.jsx)("a",{className:"white",href:null===u||void 0===u?void 0:u.homepage,children:"web"})})]})]})]})},p=c(32),g=c(31);function N(){return Object(b.jsx)("nav",{className:"navbar navbar-dark bg-dark  mx-5",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)(s.b,{className:"navbar-brand fw-light",to:"/",children:["Movies ",Object(b.jsx)(g.a,{})]}),Object(b.jsxs)(s.b,{className:"navbar-brand fw-light",to:"/search",children:["Search  ",Object(b.jsx)(p.a,{})]})]})})}var w=c(16);var I=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([""]),r=Object(l.a)(i,2),j=r[0],d=r[1],m=Object(a.useState)(!1),u=Object(l.a)(m,2),h=u[0],x=u[1];Object(a.useEffect)((function(){f(j)}),[j]);var f=function(e){x(!0),o((null===e||void 0===e?void 0:e.length)>1?"search/movie?query=".concat(e):"discover/movie").then((function(e){n(e.data.results),x(!1)})).catch((function(e){}))};return Object(b.jsxs)(w.Fragment,{children:[Object(b.jsx)(O,{active:h}),Object(b.jsx)("div",{className:"col-md-4 offset-md-4 mt-5",children:Object(b.jsx)("form",{children:Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control text-center",placeholder:"search movie","aria-label":"search movie",onChange:function(e){d(e.target.value)}})})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"row  mt-4",children:c.map((function(e){return Object(b.jsx)("div",{className:"col-md-2 px-5",children:Object(b.jsxs)(s.b,{to:"/detail/"+e.id,children:[Object(b.jsx)(v,{movie:e,classname:"cardMovies"}),Object(b.jsx)("p",{className:"mt-1 text-center fw-bold gradinText",children:e.title})]})},e.id)}))})]})};var T=function(){return Object(b.jsxs)(s.a,{basename:"/reactMovie",children:[Object(b.jsx)(N,{}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(r.a,{path:"/detail/:id",children:Object(b.jsx)(f,{})}),Object(b.jsx)(r.a,{path:"/search",children:Object(b.jsx)(I,{})}),Object(b.jsx)(r.a,{path:"/spinner",children:Object(b.jsx)(O,{})})]})})]})};i.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.4a1d3671.chunk.js.map