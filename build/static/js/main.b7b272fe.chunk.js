(this.webpackJsonppj1=this.webpackJsonppj1||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(5),s=a.n(n),r=(a(11),a(12),a(3)),o=a(4),d=a(0),p=function(e){var t=e.isPlaying;e.onPlayPauseClick;return Object(d.jsx)("div",{className:"audio-controls",children:t?Object(d.jsx)("button",{type:"button",className:"pause","aria-label":"Pause",children:Object(d.jsx)(o.a,{className:"play"})}):Object(d.jsx)("button",{type:"button",className:"play","aria-label":"Play",children:Object(d.jsx)(o.b,{className:"mute"})})})},l=a(6),m=function(e){var t=e.track,a=Object(i.useState)(!1),c=Object(r.a)(a,2),n=c[0],s=c[1],o=Object(i.useState)(!1),m=Object(r.a)(o,2),u=m[0],j=m[1],g=t.title,b=t.image,f=t.audioSrc,h=Object(i.useRef)(new Audio(f)),O=Object(i.useRef)();Object(i.useEffect)((function(){var e=h.current;if(n)return e.play(),console.log(e),e.addEventListener("ended",(function(){return s(!1)})),function(){e.removeEventListener("ended",(function(){return s(!1)}))};e.pause()}),[n]),Object(i.useEffect)((function(){var e=h.current;return function(){e.pause(),clearInterval(O.current)}}),[]);var S=function(){s(!n)};return Object(d.jsx)("div",{className:"audio-player",children:Object(d.jsxs)("div",{className:"track-info",children:[Object(d.jsx)(l.UserAgent,{render:function(e){return e.ua.mobile?Object(d.jsx)("img",{className:u?"artwork hover":"artwork",src:b,alt:"".concat(g),onTouchStart:function(){return S()},onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)}}):Object(d.jsx)("img",{className:u?"artwork hover":"artwork",src:b,alt:"".concat(g),onClick:function(){return S()},onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)}})}}),Object(d.jsxs)("h2",{className:"title",children:[Object(d.jsx)(p,{isPlaying:n,onPlayPauseClick:s}),g]})]})})},u=a.p+"static/media/title.3b213629.png",j=function(){return Object(d.jsx)("header",{className:"main-cover",children:Object(d.jsx)("img",{className:"page_title",src:u,alt:""})})},g=a.p+"static/media/cat.13133e4e.jpg",b=a.p+"static/media/dog.255023bd.jpg",f=a.p+"static/media/horse.5db99e92.jpg",h=a.p+"static/media/elephant.c695fcae.jpg",O=a.p+"static/media/lion.14f9d4b5.jpg",S=a.p+"static/media/mouse.0b0aff55.jpg",v=a.p+"static/media/owl.3e397bc2.jpg",k=a.p+"static/media/peacock.cdac11a1.jpg",x=a.p+"static/media/sheep.c0850680.jpg",N=a.p+"static/media/tiger.8d4a1c97.jpg",w=a.p+"static/media/snake.c6fd81bd.jpg",y=a.p+"static/media/prairiedog.5e41438f.jpg",P=a.p+"static/media/whale.2b0c26d2.jpg",C=a.p+"static/media/chicken.fa6df806.jpg",E=a.p+"static/media/dolphin.2a712740.jpg",L=[{title:"Cat",audioSrc:a.p+"static/media/cat.5ec09d3a.mp3",image:g},{title:"Dog",audioSrc:a.p+"static/media/dog.d4bb1849.mp3",image:b},{title:"Horse",audioSrc:a.p+"static/media/horse.5bacc3d2.mp3",image:f},{title:"Elephant",audioSrc:a.p+"static/media/elephant.6777d360.mp3",image:h},{title:"Lion",audioSrc:a.p+"static/media/lion.8a2a5eea.mp3",image:O},{title:"Mouse",audioSrc:a.p+"static/media/mouse.5f62aae1.mp3",image:S},{title:"Owl",audioSrc:a.p+"static/media/owl.4355048e.mp3",image:v},{title:"Peacock",audioSrc:a.p+"static/media/peacock.bd233b2d.mp3",image:k},{title:"Sheep",audioSrc:a.p+"static/media/sheep.2d388ab8.mp3",image:x},{title:"Tiger",audioSrc:a.p+"static/media/tiger.a0002280.mp3",image:N},{title:"Snake",audioSrc:a.p+"static/media/snake.781a4353.mp3",image:w},{title:"Prairiedog",audioSrc:a.p+"static/media/prairiedog.e5a0d155.mp3",image:y},{title:"Whale",audioSrc:a.p+"static/media/whale.0dd2da28.mp3",image:P},{title:"Chicken",audioSrc:a.p+"static/media/chicken.5ef4a2d2.mp3",image:C},{title:"Dolphin",audioSrc:a.p+"static/media/dolphin.f6f8f961.mp3",image:E}];var M=function(){var e=[];for(var t in L)e.push(Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(m,{track:L[t]})},t));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("ul",{className:"list",children:e})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),F()}},[[16,1,2]]]);
//# sourceMappingURL=main.b7b272fe.chunk.js.map