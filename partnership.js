function run(){forEach($articles,function(e,t){articleAnim(t,e),articleHover(t)})}function articleAnim(e,t){var i=new TimelineMax;i.set(e,{visibility:"visible"}).from(e.querySelector(".bulet"),.5,{scale:0,delay:.75*t,ease:Elastic.easeOut.config(1.5,1)},"article-bulet").from(e,.5,{delay:.75*t,opacity:0,ease:Elastic.easeOut.config(1.5,1)},"article-bulet").from(e.querySelector(".partnername"),.5,{x:"25%",opacity:0,ease:Elastic.easeOut.config(1.5,1)},"article-teaser").from(e.querySelector(".postname"),.5,{x:"-25%",opacity:0,ease:Elastic.easeOut.config(1.5,1)},"article-teaser")}function articleHover(e){var t=e.querySelector(".partnername a");e.timeline=new TimelineMax({paused:!0}),e.timeline.to(e.querySelector(".bulet"),.15,{scale:1.25}),t.addEventListener("mouseenter",function(){e.timeline.play()},!1),t.addEventListener("mouseleave",function(){e.timeline.reverse()},!1)}var optimizedResize=function(){function e(){a||(a=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,66))}function t(){r.forEach(function(e){e()}),a=!1}function i(e){e&&r.push(e)}var r=[],a=!1;return{add:function(t){r.length||window.addEventListener("resize",e),i(t)}}}(),forEach=function(e,t,i){for(var r=0;r<e.length;r++)t.call(i,r,e[r])},$articles=document.querySelectorAll(".partnerpost");setTimeout(run,500),optimizedResize.add(function(){forEach($articles,function(e,t){window.matchMedia("(min-width: 768px)").matches?TweenMax.set(t.querySelector(".bulet"),{x:"0%",y:"0%"}):TweenMax.set(t.querySelector(".bulet"),{x:"-50%",y:"-50%"})})});