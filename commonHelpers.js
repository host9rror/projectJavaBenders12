import{A as H,S as L,N as C,a as E}from"./assets/vendor-7bb91979.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();new H(".accordion-container",{onOpen:function(){console.log("ok")}});new L(".swiper",{modules:[C],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const v=document.querySelector(".covers-section"),k=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},j=()=>v.classList.add("animate"),R=()=>v.classList.remove("animate");window.addEventListener("scroll",()=>{k(v)?j():R()});k(v)&&j();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(t=>{t.addEventListener("click",()=>{const o=t.nextElementSibling;if(o){const r=o.querySelector(".faq-content"),n=t.querySelector("svg");r&&(r.classList.toggle("is-hidden"),r.classList.contains("is-hidden")?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px"),n&&n.classList.toggle("rotate-180")}})})});const $=document.getElementById("menu-open_btn"),w=document.getElementById("mobile-menu"),A=document.getElementById("close-mobile-menu"),h=document.querySelector(".header-menu"),I=document.querySelector(".menu-text"),N=document.querySelector(".order-btn"),b=document.querySelector(".background"),O=document.querySelector(".header-logo"),S=()=>{b.classList.remove("background-visible"),h.classList.remove("header-menu_visible")},q=()=>{w.classList.remove("is-mobile-menu-open"),h.classList.remove("header-menu_visible")},T=(e,t)=>{const o=e.substring(1),r=document.getElementById(o);if(!r)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,i=r.getBoundingClientRect().top-n;i<2e3&&(t=.8);const c=t*1e3,p=Math.ceil(i/20);let u=window.scrollY;const M=setInterval(()=>{u+=i/p,u=Math.min(Math.max(0,u),i),window.scrollTo(0,u),u===i&&clearInterval(M)},c/p)},B=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");T(t,2)}};h.addEventListener("click",e=>{q(),b.classList.toggle("background-visible"),B(e)});w.addEventListener("click",e=>{q(),B(e)});N.addEventListener("click",e=>{S(),B(e)});I.addEventListener("click",()=>{h.classList.toggle("header-menu_visible"),b.classList.toggle("background-visible")});$.addEventListener("click",()=>{w.classList.add("is-mobile-menu-open")});A.addEventListener("click",()=>{w.classList.remove("is-mobile-menu-open")});b.addEventListener("click",S);O.addEventListener("click",S);const V="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await E(`${V}/projects`)).data;_(t);const o=new L(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),r=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");r.addEventListener("click",function(){o.slideNext()}),n.addEventListener("click",function(){o.slidePrev()}),o.on("reachEnd",function(){r.disabled=!0}),o.on("reachBeginning",function(){n.disabled=!0}),o.on("fromEdge",function(){r.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function _(e){const t=e.map(o=>`
        <li class="swiper-slide project">
          <div class="project-content container">
            <h2 class="project-title">PROJECTS</h2>
            <div class="project-main-part">
              <ul class="project-list">
                <li class="project-list-item">#react</li>
                <li class="project-list-item">#js</li>
                <li class="project-list-item">#node js</li>
                <li class="project-list-item">#git</li>
              </ul>
              <h3 class="project-content-title">${o.title}</h3>
              <button class="project-content-btn">See project</button>
            </div>
            <div class="project-box">
              <img class="project-box-image" src="${o.imageSrc}" alt="${o.title}" />
            </div>
          </div>
        </li>
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const D="https://portfolio-js.b.goit.study/api";let l,m=[],a=0,d;async function W(){try{return(await E(`${D}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}async function f(e){const t=Math.min(e+d,m.length),r=m.slice(e,t).map(c=>`<li class="reviews-item">
      <div class="reviews-card">
        <img
          class="photo"
          src="${c.avatar_url}" 
          alt="photo of ${c.author}"
          width="48"
          height="48"
        />
        <div class="div-reviews-info">
          <h3 class="reviews-person-name">${c.author}</h3>
          <p class="reviews-person-info">${c.review}</p>
        </div>
      </div>
    </li>`).join("");document.querySelector(".reviews-list").innerHTML=r;const n=document.querySelector(".btn-arrow-right"),s=document.querySelector(".btn-arrow-left");n.disabled=t>=m.length,s.disabled=e===0,document.querySelectorAll(".reviews-item").forEach((c,p)=>{c.classList.toggle("hidden",p>=d)})}async function Y(){m=await W(),x(),f(a),l=new L(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:d,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:4}}});const t=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t.addEventListener("click",()=>{a<m.length-d&&(a++,f(a),l.update(),l.slideNext())}),o.addEventListener("click",()=>{a>0&&(a--,f(a),l.update(),l.slidePrev())}),l.on("reachEnd",()=>{t.disabled=!0}),l.on("reachBeginning",()=>{o.disabled=!0}),l.on("slideChange",()=>{t.disabled=!1,o.disabled=!1})}function x(){window.innerWidth>=1280?d=4:window.innerWidth>=769?d=3:window.innerWidth>=376?d=2:d=1}document.addEventListener("DOMContentLoaded",Y);window.addEventListener("resize",()=>{x(),f(a)});const z="https://portfolio-js.b.goit.study/api";async function F({input:e,message:t}){try{return(await E.post(`${z}/requests`,{email:e,comment:t})).data}catch(o){console.log(o)}}const U={footerForm:document.querySelector(".footer-form"),footerResponceHeader:document.querySelector(".footer-modal-header"),footerResponceParagr:document.querySelector(".footer-modal-p"),footerBtnClose:document.querySelector(".footer-close-btn"),footerBackdrop:document.querySelector(".backdrop")},{footerForm:P,footerResponceHeader:G,footerResponceParagr:J,footerBtnClose:K,footerBackdrop:y}=U;P.addEventListener("submit",e=>{e.preventDefault(),X(e.target.elements.email.value,e.target.elements.comment.value),Q()});function Q(){window.addEventListener("keydown",e=>{e.code==="Escape"&&g()}),y.addEventListener("click",e=>{e.target===y&&g()}),K.addEventListener("click",g)}async function X(e,t){const o=e.trim(),r=t.trim();try{const n=await F({input:o,message:r});Z(n),g(),P.reset()}catch(n){alert("Заповніть форму коректно"),console.log(n)}}function Z({title:e,message:t}){G.textContent=`${e}`,J.textContent=`${t}`}function g(){y.classList.toggle("backdrop-hidden")}
//# sourceMappingURL=commonHelpers.js.map
