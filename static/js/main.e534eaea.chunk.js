(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),i=t(24),s=t.n(i),o=(t(81),t(134)),l=t(23),d=t(8),j=t(122),u=t(124),b=t(125),m=t(67),p=t.n(m),h=t(2),v=function(){return Object(h.jsx)(j.a,{position:"relative",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(p.a,{style:{alignSelf:"center"}}),Object(h.jsx)(b.a,{style:{marginLeft:"10px"},variant:"h5",children:"Movie-searcher"})]})})},g=t(126),x=Object(g.a)((function(e){return{container:{backgroundColor:"#2b2b2b",height:"100%",paddingTop:"40px",minHeight:"100vh"}}})),O=t(22),f=t.n(O),y=t(33),N=t(40),w=Object(c.createContext)(),k=t(21),_=t(18),S="SEARCH_MOVIES",C="GET_REPOS",M="GET_USER",D="SET_LOADING",E="DEFAULT_MOVIES",B=(n={},Object(k.a)(n,S,(function(e,a){var t=a.payload;return Object(_.a)(Object(_.a)({},e),{},{movies:t,loading:!1})})),Object(k.a)(n,C,(function(e,a){var t=a.payload;return Object(_.a)(Object(_.a)({},e),{},{movie:t,loading:!1})})),Object(k.a)(n,M,(function(e,a){var t=a.payload;return Object(_.a)(Object(_.a)({},e),{},{genres:t,loading:!1})})),Object(k.a)(n,D,(function(e){return Object(_.a)(Object(_.a)({},e),{},{loading:!0})})),Object(k.a)(n,E,(function(e,a){var t=a.payload;return Object(_.a)(Object(_.a)({},e),{},{movies:t,loading:!1})})),Object(k.a)(n,"DEFAULT",(function(e){return e})),n),T=function(e,a){return(B[a.type]||B.DEFAULT)(e,a)},I=t(34),R=t.n(I),A="a5f72ec172de533c43bef2ced8373222",F=function(e){var a=e.children,t=Object(c.useReducer)(T,{movie:{},movies:[],loading:!1,genres:[]}),n=Object(N.a)(t,2),r=n[0],i=n[1],s=function(){var e=Object(y.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("\n            https://api.themoviedb.org/3/search/movie?api_key=".concat(A,"&language=en-US&query=").concat(a,"&page=1&include_adult=false"));case 3:t=e.sent,i({type:S,payload:t.data.results});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o=function(){var e=Object(y.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat(A,"&language=en-US"));case 3:t=e.sent,i({type:C,payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l=function(){var e=Object(y.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(A,"&language=en-US"));case 3:a=e.sent,i({type:M,payload:a.data.genres});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(y.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(A,"&language=en-US&page=1"));case 3:a=e.sent,i({type:E,payload:a.data.results});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){return i({type:D})},u=r.movie,b=r.movies,m=r.genres,p=r.loading;return Object(h.jsx)(w.Provider,{value:{setLoading:j,searchMovies:s,loading:p,getMovie:o,getDefaultMovies:d,clearMovies:function(){return i({type:"SEARCH_USER"})},genres:m,getGenres:l,movie:u,movies:b},children:a})},L=t(133),U=t(127),G=t(128),J=t(129),P=t(130),Y=t(131),H=Object(g.a)((function(e){return{card:{border:"0",backgroundColor:"#2b2b2b",color:"#cacaca"},cardTitle:{margin:0,padding:0,textAlign:"left"},innerCard:{display:"flex",margin:"0",padding:"0"},media:{display:"block",width:"200px",height:"300px"},cardInfo:{maxWidth:"800px"},cardBody:{margin:"5px 10px",padding:0,display:"flex",flexDirection:"column",justifyContent:"space-between"},dividerRoot:{height:"2px"},ratingBlock:{display:"flex"},ratingStars:{alignSelf:"center"},ratingNum:{paddingLeft:"5px"},link:{textDecoration:"none",color:"#cacaca"}}})),W=t(137),V=function(e){return new Date(e).getFullYear()},$=function(e){var a=["January","February","March","April","May","June","July","August","September","October","November","December"][(e=new Date(e)).getMonth()],t=e.getDay();switch(t){case 1:t="".concat(t,"st");break;case 2:t="".concat(t,"nd");break;case 3:t="".concat(t,"rd");break;default:t="".concat(t,"th")}var n=e.getFullYear();return"".concat(t," ").concat(a,", ").concat(n)};console.log($("2021-05-19"));var q=function(e){var a="";return e.forEach((function(e){a+=" "+e.name+","})),a.slice(0,a.length-1).trim()},z=t.p+"static/media/404.12af02e8.jpg",K=function(e){var a,t,n=e.movie,c=e.genres,r=H();return Object(h.jsxs)(U.a,{item:!0,className:r.cardWrapper,children:[Object(h.jsxs)(G.a,{className:r.card,variant:"outlined",children:[n.release_date?Object(h.jsx)(l.b,{to:"/movies/".concat(n.id),className:r.link,children:Object(h.jsx)(b.a,{variant:"h5",className:r.cardTitle,children:"".concat(n.title,"(").concat(V(n.release_date),")")})}):Object(h.jsx)(b.a,{variant:"h5",className:r.cardTitle,children:"".concat(n.title)}),Object(h.jsxs)("div",{className:r.ratingBlock,children:[Object(h.jsx)(W.a,{className:r.ratingStars,readOnly:!0,value:Math.round(n.vote_average),max:10}),Object(h.jsx)(b.a,{variant:"h6",className:r.ratingNum,children:n.vote_average})]}),Object(h.jsxs)(J.a,{className:r.innerCard,children:[null!==n.poster_path?Object(h.jsx)(l.b,{to:"/movie-search/".concat(n.id),className:r.link,children:Object(h.jsx)(P.a,{className:r.media,image:"https://image.tmdb.org/t/p/w185".concat(n.poster_path),title:"poster",alt:"logo"})}):Object(h.jsx)(P.a,{className:r.media,image:"".concat(z),title:"poster",alt:"logo"}),Object(h.jsxs)(J.a,{className:r.cardBody,children:[Object(h.jsx)(b.a,{variant:"body2",className:r.cardInfo,children:n.overview}),Object(h.jsxs)(b.a,{variant:"body2",className:r.cardYear,children:["Release date:"," ",n.release_date?$(n.release_date):"unknown"]}),Object(h.jsxs)(b.a,{variant:"body2",className:r.cardGenres,children:["genres:",q((a=c,t=n.genre_ids,a.filter((function(e){return t.includes(e.id)}))))]})]})]})]}),Object(h.jsx)(Y.a,{className:r.dividerRoot,light:!0})]})},Q=t(70),X=t(132),Z=t(136),ee=t(69),ae=t.n(ee),te=t(68),ne=t.n(te),ce=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400,marginBottom:"40px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}})),re=function(){var e=ce(),a=Object(c.useState)(""),t=Object(N.a)(a,2),n=t[0],r=t[1],i=Object(c.useContext)(w);Object(c.useEffect)((function(){i.getDefaultMovies(),i.getGenres()}),[]);return Object(h.jsx)(U.a,{align:"center",children:Object(h.jsxs)(Q.a,{component:"form",className:e.root,children:[Object(h.jsx)(X.a,{onClick:function(){i.getDefaultMovies()},children:Object(h.jsx)(ne.a,{})}),Object(h.jsx)(Z.a,{className:e.input,placeholder:"Type the movie",inputProps:{"aria-label":"search google maps"},onChange:function(e){return r(e.target.value)},value:n}),Object(h.jsx)(X.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault(),i.clearMovies(),n.trim()?i.searchMovies(n.trim()):i.getDefaultMovies(),r("")},children:Object(h.jsx)(ae.a,{})})]})})},ie=function(){var e=Object(c.useContext)(w),a=e.movies,t=e.loading,n=e.genres;return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(re,{}),Object(h.jsx)("div",{className:"row",children:t?Object(h.jsx)(L.a,{}):0===a.length?Object(h.jsx)(b.a,{color:"error",variant:"h3",children:"There are no movies with this name"}):a.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(K,{movie:e,genres:n})},e.id)}))})]})},se=t(135),oe=Object(g.a)((function(e){return{container:{color:"#cacaca"},movieBody:{display:"flex"},media:{width:"250px",height:"300px"},overview:{maxWidth:"800px",margin:"10px"},movieInfo:{display:"flex",flexDirection:"column",backgroundColor:"rgba(0,0,0,.24)",padding:"20px",margin:"10px 0"},ratingBlock:{display:"flex"},ratingStars:{alignSelf:"center"},ratingNum:{paddingLeft:"5px"},link:{textDecoration:"none"},btnContainer:{display:"flex",justifyContent:"center"},btn:{margin:"10px"}}})),le=function(e){var a=e.match,t=oe(),n=Object(c.useContext)(w),r=n.getMovie,i=n.loading,s=n.movie;if(Object(c.useEffect)((function(){r(a.params.id)}),[]),i)return Object(h.jsx)(L.a,{});var d=s.title,j=s.genres,u=s.poster_path,m=s.budget,p=s.overview,v=s.runtime,g=s.revenue,x=s.production_countries,O=s.release_date,f=s.production_companies,y=s.id,N="",k="",_="";j&&(k=q(j)),x&&(_=q(x)),f&&(N=q(f));return Object(h.jsx)("div",{children:Object(h.jsxs)(o.a,{"max-width":"sm",className:t.container,children:[Object(h.jsx)(b.a,{className:t.title,variant:"h4",children:d}),Object(h.jsxs)("div",{className:t.ratingBlock,children:[Object(h.jsx)(W.a,{className:t.ratingStars,readOnly:!0,value:Math.round(s.vote_average),max:10}),Object(h.jsx)(b.a,{variant:"h6",className:t.ratingNum,children:s.vote_average})]}),Object(h.jsxs)("div",{className:t.movieBody,children:[u&&null!==u?Object(h.jsx)(P.a,{className:t.media,image:"https://image.tmdb.org/t/p/w185/".concat(u),title:"poster"}):Object(h.jsx)(P.a,{className:t.media,image:"".concat(z),title:"poster"}),Object(h.jsx)(b.a,{className:t.overview,children:p})]}),Object(h.jsxs)("div",{className:t.movieInfo,children:[Object(h.jsx)(b.a,{children:O&&"Year: ".concat(V(O))}),Object(h.jsxs)(b.a,{children:["Country: ",_]}),Object(h.jsxs)(b.a,{children:["Genres: ",k]}),Object(h.jsxs)(b.a,{children:["Budget: ",(new Intl.NumberFormat).format(m)," $"]}),Object(h.jsxs)(b.a,{children:["Revenue: ",(new Intl.NumberFormat).format(g)," $"]}),Object(h.jsxs)(b.a,{children:["Runtime: ",v," min"]}),Object(h.jsxs)(b.a,{children:["Production: ",N]})]}),Object(h.jsxs)("div",{className:t.btnContainer,children:[Object(h.jsx)(l.b,{to:"/movie-search",className:t.link,children:Object(h.jsx)(se.a,{className:t.btn,variant:"contained",children:"Back"})}),Object(h.jsx)(se.a,{onClick:function(){window.open("https://www.themoviedb.org/movie/".concat(y))},className:t.btn,variant:"contained",children:"Page on movieDB"})]})]})})};var de=function(){var e=x();return Object(h.jsx)(F,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:e.container,children:Object(h.jsx)(o.a,{"max-width":"sm",children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/movie-search",exact:!0,component:ie}),Object(h.jsx)(d.a,{path:"/movie-search/movies/:id",component:le})]})})})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(de,{})}),document.getElementById("root"))},81:function(e,a,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.e534eaea.chunk.js.map