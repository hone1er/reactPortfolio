(this.webpackJsonpmyreactportfolio=this.webpackJsonpmyreactportfolio||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/undraw_setup_analytics_8qkl (1).50d0e7ff.svg"},25:function(e,t,a){e.exports=a.p+"static/media/undraw_progressive_app_m9ms (1).14d2c54e.svg"},26:function(e,t,a){e.exports=a.p+"static/media/undraw_feeling_proud_qne1 (1).46e01fac.svg"},27:function(e,t,a){e.exports=a.p+"static/media/nameTrender4.5f45d2cd.JPG"},28:function(e,t,a){e.exports=a.p+"static/media/responsive.8c726a11.JPG"},29:function(e,t,a){e.exports=a.p+"static/media/thirsty.03753538.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/andres-urena-tsBropDpnwE-unsplash.befd75dd.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/Twitter_Logo_WhiteOnBlue.d00ce219.svg"},33:function(e,t,a){e.exports=a.p+"static/media/python-seeklogo.com.51c2eab2.svg"},37:function(e,t,a){e.exports=a(53)},42:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(5),l=a(7),r=a(6),c=a(8),o=a(0),s=a.n(o),m=a(22),d=a.n(m),u=(a(42),a(23)),p=a.n(u),h=function(e){return s.a.createElement(p.a,{animateIn:e.fade,animateOnce:"true",duration:"1.35",delay:e.delay,animatePreScroll:"false"},s.a.createElement("div",{id:e.id,className:"brd-rd card"},s.a.createElement("img",{className:"brd-rd-top",src:e.imgsrc,alt:"Avatar"}),s.a.createElement("div",{className:"brd-rd-btm"},s.a.createElement("h4",null,s.a.createElement("b",null,e.title)),s.a.createElement("p",null,e.paragraph))))},E=(a(46),a(24)),f=a.n(E),v=a(25),b=a.n(v),g=a(26),w=a.n(g),y=document.documentElement.clientWidth,j=[{img:f.a,title:"data analytics/visualization",paragraph:"professional data analysis & web-based interactive data visualizations",fade:"bounceInLeft",delay:y>768?"575":"0"},{img:b.a,title:"responsive websites",paragraph:"high quality responsive websites that look wonderful on any device",fade:y>768?"bounceInUp":"bounceInRight",delay:"0"},{img:w.a,title:"scripting/automations",paragraph:"scripts & automations to replace tedius/repetitive task on the computer",fade:y>768?"bounceInRight":"bounceInUp",delay:y>768?"575":"0"}],O=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",{id:"mainCardDiv"},s.a.createElement("div",{id:"recentJobs",className:"cardsDiv"},s.a.createElement("h1",{id:"servicesHeader"},"what i do"),j.map((function(e){return s.a.createElement(h,{imgsrc:e.img,title:e.title,paragraph:e.paragraph,id:e.img,fade:e.fade,delay:e.delay,alt:"responsive websites"})}))))}}]),t}(s.a.Component),k=(a(47),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"outer-head"},s.a.createElement("div",{id:"head",className:"box header"},s.a.createElement("section",{id:"section02",className:"demo"},s.a.createElement("div",{id:"scrolldiv",className:"scrolldivclass"},s.a.createElement("a",{id:"scroll",className:"bounce5",href:"#sectionScroll"},s.a.createElement("span",{className:"arrow-down"})))),s.a.createElement("h2",{id:"headerText"},"Hi, I'm ",s.a.createElement("span",{id:"name"},"Joe!")," ",s.a.createElement("span",{id:"passionate"},"welcome")," to my"," ",s.a.createElement("span",{id:"experience"}," portfolio"))))}}]),t}(s.a.Component)),x=(a(48),a(17)),N=a(12),C=(a(49),a(27)),_=a.n(C),S=a(28),I=a.n(S),H=a(29),J=a.n(H),T=a(30),B=a.n(T),A=[{img:_.a,title:"Name Trender",para:"Enter a name and see how it has been trending in the U.S. since 1881!",link:"https://www.nametrender.com"},{img:I.a,title:"Crony Creative",para:"Implemented a responsive Adobe XD design ",link:"https://www.cronycreative.com"},{img:J.a,title:"Worldwide Water Analysis",para:"Created interactive graphs/maps with Ploty.js ",link:"http://thirsty2thrive.world/"},{img:B.a,title:"Amazon Alexa Skill",para:"Tells the user all the latest uploads to Thrasher Magazine's website. Implemented in Python 3.6: ",link:"https://www.amazon.com/Hone-Thrasher-video/dp/B07RLBPR8F"}];var R=function(e){var t=s.a.useState(0),a=Object(x.a)(t,2),n=a[0],i=a[1],l=s.a.useState(null),r=Object(x.a)(l,2),c=r[0],o=r[1];return s.a.createElement(N.a,{id:"carousel",activeIndex:n,direction:c,onSelect:function(e,t){i(e),o(t.direction)}},A.map((function(e){return s.a.createElement(N.a.Item,{key:e.img},e.link?s.a.createElement("a",{href:e.link},s.a.createElement("div",{className:"carousel-img  w-100"},s.a.createElement("img",{src:e.img,alt:"First slide"}))):null,s.a.createElement(N.a.Caption,null,s.a.createElement("h3",null,e.title),s.a.createElement("p",null,e.para)))})))},W=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"outer-portfolio"},s.a.createElement("div",{id:"portfolioDiv"},s.a.createElement("section",{id:"portfolio"},s.a.createElement("h1",{id:"portfolioHeader"},"What i've done"),s.a.createElement(R,null))))}}]),t}(s.a.Component),z=(a(20),a(32)),D=a.n(z),L=a(11),P=a(33),q=a.n(P),M=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"techstack"},s.a.createElement("h1",null,"Stack"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(L.c,{fill:"aqua",className:"icon",id:"react"}),s.a.createElement("h4",null,"reactJS")),s.a.createElement("li",null,s.a.createElement("img",{className:"icon",src:q.a,alt:"python"}),s.a.createElement("h4",null,"python")),s.a.createElement("li",null,s.a.createElement(L.b,{fill:"#13aa52",className:"icon",id:"mongo"}),s.a.createElement("h4",null,"mongodb")),s.a.createElement("li",null,s.a.createElement(L.a,{fill:"tomato",className:"icon",id:"html-svg"}),s.a.createElement("h4",null,"html5")),s.a.createElement("li",{id:"sass"},s.a.createElement(L.d,{fill:"palevioletred",className:"icon",id:"sass-svg"}),s.a.createElement("h4",null,"sass"))))}}]),t}(o.Component),U=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"resume"},s.a.createElement("div",{className:"tech"},s.a.createElement(M,null))),s.a.createElement("div",{id:"last"},s.a.createElement("section",{id:"resume"},s.a.createElement("div",{id:"contact"},s.a.createElement("h1",{className:"sectionHead"},"CONTACT:"),s.a.createElement("p",null,"Joseph Villavicencio"),s.a.createElement("p",null,"contact@JMVcode.com"),s.a.createElement("a",{href:"https://drive.google.com/file/d/17CC1Kxuwpv8ujKHkr6AnnSOzHlqoaYsy/view?usp=sharing",target:"__blank"},s.a.createElement("button",{id:"resumebutton",className:"btn btn-primary"},"RESUME")),s.a.createElement("div",{id:"svgDiv"},s.a.createElement("a",{href:"https://www.github.com/hone1er",target:"__blank"},s.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"75px",height:"75px"},s.a.createElement("title",null,"GitHub icon"),s.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),s.a.createElement("a",{href:"https://www.twitter.com/hone1er",target:"__blank"},s.a.createElement("img",{id:"twitter",width:"75px",height:"75px",src:D.a,alt:"twitter"})))),s.a.createElement("h1",null,"Hone Code L.L.C.\u2122"))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);var G=a(36),F=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"main"},s.a.createElement("head",null,s.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Libre+Baskerville|Open+Sans|Oxanium|Roboto|Roboto+Slab&display=swap",rel:"stylesheet"})),s.a.createElement(k,null),s.a.createElement("section",{id:"sectionScroll"}),s.a.createElement(O,null),s.a.createElement(W,null),s.a.createElement(U,null))}}]),t}(s.a.Component);d.a.render(s.a.createElement(G.a,null,s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.2c91c87c.chunk.js.map