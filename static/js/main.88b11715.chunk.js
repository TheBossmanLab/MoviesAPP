(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{34:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(27),r=s.n(n),l=(s(34),s(4)),i=s(0);var o=function(){return Object(i.jsx)("div",{className:"font-poppins flex h-screen",children:Object(i.jsxs)("div",{className:"text-center m-auto mt-40",children:[Object(i.jsx)("h1",{className:"text-2xl font-bold my-3",children:" ERROR: 404 "})," ",Object(i.jsx)("h2",{className:"text-xl my-3 font-semibold",children:" Not Found "})," ",Object(i.jsx)("h6",{className:"text-xl my-3 font-semibold",children:"Something is wrong this page doesn't exist in our server"})]})})},d=s(10),b=s.n(d),j=s(12),m=s(2),x=s(28),u=s.n(x),p=function(){var e=Object(j.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",e.next=3,u.a.get("https://api.themoviedb.org/3"+t).then((function(e){return e})).catch((function(e){return"Network Error"===e.toJSON().message?{data:{succes:!1,error:"No internet"}}:{data:{succes:!1,error:e,code:404}}}));case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={baseURL:"https://api.themoviedb.org/3",APIKEY:"1720b43a7d20e6fc1d836cf75419af13"},f=s(8);var O=function(e){var t=e.pagesNr,s=e.pageUrl,c=Object(m.g)().page,a=void 0===c?1:c,n=function(){console.log(a),window.scrollTo(0,0)};return Object(i.jsxs)("div",{className:"btn-group justify-center py-5 pb-14",children:[Object(i.jsxs)(f.b,{disabled:Number(a)<=1,to:s+(Number(a)-1).toString(),onClick:n,className:"btn text-base w-32 md:w-60 lg:w-80 hover:bg-coolGray-400 text-black btn-outline btn-wide",children:["Previous Page"," "]})," ",Object(i.jsxs)(f.b,{disabled:Number(a)>=t||0===t,to:s+(Number(a)+1).toString(),onClick:n,className:"btn text-base w-32 md:w-60 \r lg:w-80 hover:bg-coolGray-400 text-black btn-outline btn-wide",children:["Next Page"," "]})," "]})},g=s.p+"static/media/spinner.11d9cde8.gif",v=function(){return Object(i.jsx)("div",{className:"self-center m-auto",children:Object(i.jsx)("img",{className:"spinner",src:g,alt:"loading..."})})},w=s.p+"static/media/star.439d6f40.png";var N=function(e){var t=e.movieInfo,s=t.title,c=t.poster_path,a=t.vote_average,n=t.id;return Object(i.jsxs)("div",{className:" text-sm whitespace-pre-line text-left text-black moviecard shadow-sm bg-white rounded-xl m-4",children:[Object(i.jsxs)(f.b,{to:"/movieinfo/id=".concat(n),className:"movie",children:[Object(i.jsx)("figure",{className:"",children:Object(i.jsx)("img",{className:"rounded-t-xl movie-img",src:c?"https://image.tmdb.org/t/p/w500"+c:"https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg",alt:"poster",width:"350",height:"450"})})," ",Object(i.jsxs)("p",{className:"pt-2 font-medium px-2 link text-black",children:[" ",s," "]})," "]}),Object(i.jsxs)("span",{className:"pb-2 text-black font-semibold flex items-center justify-end pr-4",children:[Object(i.jsxs)("p",{className:"inline-block text-right text-sm px-3",children:[" ",a," "]})," ",Object(i.jsx)("img",{className:"inline-block",src:w,width:"15",height:"10",alt:"stars"})]})," "]})};var y=function(e){var t=e.data;return Object(i.jsx)("div",{className:"px-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center",children:t.results.map((function(e){return Object(i.jsx)(N,{movieInfo:e},e.id)}))})};var k=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(i.jsxs)("div",{className:"navbar mb-2 pb-5 text-neutral-content border-b-2",children:[Object(i.jsxs)("div",{className:"flex-1 px-2 mx-2 justify-between",children:[Object(i.jsxs)(f.b,{className:"text-lg font-bold",to:"/",children:["MoviesAPP"," "]})," "]})," ",Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("div",{className:"flex space-x-2",children:[Object(i.jsx)("input",{value:s,type:"text",placeholder:"Search",className:"w-full input input-primary input-bordered text-black placeholder-black focus:ring-blue-600 focus:ring-2",onChange:function(e){a(e.target.value)}})," "," ",Object(i.jsxs)(f.b,{to:"/search/s=".concat(s,"/p=1"),onClick:function(){a("")},className:"btn btn-primary",children:["go"," "]})," "]})," "]})," "]})},S=function(){return Object(i.jsxs)("footer",{class:"footer bg-white relative pt-1 border-blue-700",children:[Object(i.jsx)("div",{class:"container px-6",children:Object(i.jsx)("div",{class:"sm:flex sm:mt-8",children:Object(i.jsxs)("div",{class:"mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around",children:[Object(i.jsxs)("div",{class:"flex flex-col",children:[Object(i.jsx)("span",{class:"font-bold text-gray-700 uppercase pb-3 mb-2",children:"Credits:"}),Object(i.jsxs)("span",{className:"flex justify-between md:justify-evenly md:block",children:[Object(i.jsx)("a",{href:"https://www.themoviedb.org/",class:"text-blue-700  text-md hover:text-blue-500 max-w-sm",children:Object(i.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",height:"50",width:"80",className:"m-auto"})}),Object(i.jsxs)("p",{className:"px-3 mx-3 md:px-0 md:mx-0 md:pt-6 text-justify md:w-60",children:["This product uses the"," ",Object(i.jsx)("a",{href:"https://www.themoviedb.org/",class:"text-blue-700 hover:text-blue-500",children:"TMDb"})," ","API but is not endorsed or certified by TMDb."]})]})]}),Object(i.jsxs)("div",{class:"flex flex-col  ",children:[Object(i.jsx)("span",{class:"font-bold text-gray-700 uppercase pb-3 mt-6 lg:mt-0",children:"Creator:"}),Object(i.jsxs)("div",{className:"flex flex-col lg:text-center justify-between",children:[Object(i.jsx)("span",{class:"my-2",children:Object(i.jsx)("a",{href:"https://web.facebook.com/ossman.munaf",class:"text-blue-700  text-md hover:text-blue-500",children:"Facebook"})}),Object(i.jsx)("span",{class:"my-2",children:Object(i.jsx)("a",{href:"https://www.instagram.com/ossman786/",class:"text-blue-700  text-md hover:text-blue-500",children:"Instagram"})}),Object(i.jsx)("span",{class:"my-2",children:Object(i.jsxs)("a",{href:"https://twitter.com/QuotesBossman",class:"text-blue-700  text-md hover:text-blue-500",children:["Twitter"," "]})})]})]})]})})}),Object(i.jsx)("div",{class:"container px-6",children:Object(i.jsx)("div",{class:"border-t-2 border-gray-300 flex flex-col items-center mt-3",children:Object(i.jsx)("div",{class:"sm:w-2/3 text-center py-6",children:Object(i.jsx)("p",{class:"text-sm text-blue-700 font-bold mb-2",children:"\xa9 2020 by Ossman Rauf"})})})})]})};var _=function(e){var t=e.title,s=Object(m.g)(),a=s.input,n=s.page,r=void 0===n?1:n,o="/trending/movie/week?api_key=".concat(h.APIKEY,"&page=").concat(r),d="/search/movie?api_key=".concat(h.APIKEY,"&language=en-US&query=").concat(a,"&page=").concat(r,"&include_adult=true"),x=Object(c.useState)([]),u=Object(l.a)(x,2),f=u[0],g=u[1],w=Object(c.useState)("/p="),N=Object(l.a)(w,2),_=N[0],P=N[1],T=Object(c.useState)(!0),C=Object(l.a)(T,2),I=C[0],A=C[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(!0),window.scrollTo(0,0),a){e.next=9;break}return e.next=5,p(o);case 5:t=e.sent,g(t.data),e.next=15;break;case 9:return e.next=11,p(d);case 11:s=e.sent,P("/search/s=".concat(a,"/p=")),g(s.data),console.log(s);case 15:A(!1);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),console.log(f),function(){g({})}}),[_,a,d,o]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{children:" "}),Object(i.jsxs)("h1",{className:"text-3xl md:mx-5 lg:mx-8 font-bold px-7 text-white text-startmd:text-2xl 2xl:mx-32 sm:text-2xl mt-8 mb-3",children:[" ",a?t+a:t," ",0===f.total_results?" not found":""," "]})," ",Object(i.jsxs)("div",{className:"flex justify-center px-7 place-items-center",children:[I?Object(i.jsx)(v,{isLoading:I,children:" "}):Object(i.jsx)(y,{data:f,children:" "})," "]})," ",Object(i.jsx)(O,{pagesNr:f.total_pages,pageUrl:_,children:" "})," ",Object(i.jsx)(S,{})]})};var P=function(e){var t=e.searchApi;return Object(i.jsx)("div",{className:"font-poppins bg-cover min-h-screen bg-blue-900 mx-auto",children:t?Object(i.jsx)(_,{searchApi:t,title:"Results For: "}):Object(i.jsx)(_,{title:"Trending this week:"})})},T=function(e){var t=e.cast;return Object(i.jsx)("div",{className:"pt-2 md:grid lg:grid-cols-3 gap-3 md:grid-cols-2",children:t.map((function(e){return Object(i.jsxs)("div",{className:"w-full flex md:flex-col rounded-md my-3 border-2  lg:w-40",children:[Object(i.jsx)("div",{className:"w-20 md:w-full",children:Object(i.jsx)("img",{className:"rounded-md w-full",src:"https://image.tmdb.org/t/p/w300"+e.profile_path})}),Object(i.jsxs)("div",{className:"px-8 py-4 md:px-3.5",children:[Object(i.jsx)("h3",{className:"font-semibold text-base",children:e.name}),Object(i.jsx)("h3",{className:"font-normal text-sm py-1.5",children:e.character})]})]})}))})},C=s.p+"static/media/playbtn.dbb3d818.png",I=(s(60),"https://image.tmdb.org/t/p/w500"),A=function(e){var t=e.movie,s=Object(c.useState)([]),a=Object(l.a)(s,2),n=a[0],r=a[1],o=Object(c.useState)([]),d=Object(l.a)(o,2),b=d[0],j=d[1],m=Object(c.useRef)(null),x=t.videos.results[t.videos.results.length-1];Object(c.useEffect)((function(){j(t.credits.crew.find((function(e){return"Director"===e.job}))),r(t.credits.cast.slice(0,6))}),[t]);return Object(i.jsxs)("div",{className:"font-poppins w-full max-w-sm self-center mt-8 lg:max-w-xl mx-auto bg-white md:max-w-md rounded",children:[Object(i.jsx)("img",{className:"bg-coolGray-400 w-full h-56 md:h-64 lg:h-80",src:I+t.backdrop_path,alt:"Image of ".concat(t.title," not available")}),Object(i.jsxs)("div",{className:"p-3",children:[Object(i.jsx)("h1",{className:"text-xl font-bold",children:t.title}),Object(i.jsx)("h3",{className:"pt-3 font-semibold",children:"Synopse:"}),Object(i.jsx)("p",{className:"pt-2 font-normal text-sm md:text-base lg:text-base text-justify",children:t.overview}),Object(i.jsxs)("div",{className:"py-3",children:[Object(i.jsx)("span",{className:"font-semibold",children:"Release date : "}),Object(i.jsx)("span",{children:t.release_date})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("h4",{children:[Object(i.jsx)("span",{className:"font-semibold",children:" Directed by: "}),Object(i.jsx)("span",{children:b.name})]})}),Object(i.jsxs)("div",{className:"py-3",children:[Object(i.jsx)("h4",{className:"font-bold text-lg",children:"Movie Cast: "}),Object(i.jsx)(T,{cast:n,imgBaseURL:I})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"pb-3 px-3 font-bold text-lg",children:"Trailer: "}),Object(i.jsxs)("div",{className:"p-1.5 rounded video relative",children:[Object(i.jsx)("img",{className:"w-full rounded-md h-62 md:h-80 lg:h-96 max-w-xl m-auto cursor-pointer",src:"https://img.youtube.com/vi/".concat(x.key,"/0.jpg"),alt:"",srcset:""}),Object(i.jsx)("label",{for:"my-modal-2",class:"modal-button w-24 h-24 rounded-full focus:outline-none absolute m-auto place-self-center inset-y-0 inset-x-0 cursor-pointer",children:Object(i.jsx)("img",{className:"w-full",src:C,alt:"",srcset:""})})]}),Object(i.jsx)("input",{type:"checkbox",id:"my-modal-2",class:"modal-toggle"}),Object(i.jsx)("div",{class:"modal ",children:Object(i.jsxs)("div",{class:"m-auto p-0 bg-transparent min-w-3/4 lg:min-w-1/2 max-w-sm m-auto rounded-md h-72 md:h-96 p-0 text-right rounded-md",children:[Object(i.jsx)("label",{for:"my-modal-2",class:"z-10 hover:bg-transparent relative btn bg-transparent border-0 px-2 p-0 h-px",onClick:function(){m.current.src="",m.current.src="http://www.youtube.com/embed/"+x.key},children:"X"}),Object(i.jsx)("iframe",{className:"w-full h-full p-0 video rounded-md",ref:m,src:"http://www.youtube.com/embed/"+x.key,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})]})})]})]})},E=function(){var e=Object(m.g)().id,t=Object(c.useState)({}),s=Object(l.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!0),d=Object(l.a)(r,2),x=d[0],u=d[1],f="/movie/".concat(e,"?api_key=").concat(h.APIKEY,"&language=en-US&append_to_response=videos,credits");return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),u(!0),e.next=4,p(f);case 4:t=e.sent,n(t.data),u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),404===a.code?Object(i.jsx)(m.a,{to:"/404error",component:o}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"font-poppins bg-cover min-h-screen bg-blue-900 pb-12",children:[Object(i.jsx)(k,{}),x?Object(i.jsx)("div",{className:"flex justify-center",children:Object(i.jsx)(v,{children:" "})}):Object(i.jsx)(A,{movie:a})]}),Object(i.jsx)(S,{})]})};var F=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=function(e){a(e)};return Object(i.jsxs)(f.a,{basename:"/MoviesAPP",children:[Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.b,{onSearch:n,exact:!0,path:"/",children:Object(i.jsx)(P,{})}),Object(i.jsx)(m.b,{onSearch:n,exact:!0,path:"/p=:page",children:Object(i.jsx)(P,{})})," ",Object(i.jsx)(m.b,{exact:!0,path:"/search/s=:input/p=:page",children:Object(i.jsx)(P,{searchApi:s})}),Object(i.jsx)(m.b,{exact:!0,path:"/movieinfo/id=:id",children:Object(i.jsx)(E,{})}),Object(i.jsx)(m.b,{children:Object(i.jsx)(o,{})})]})," "]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),R()}},[[68,1,2]]]);
//# sourceMappingURL=main.88b11715.chunk.js.map