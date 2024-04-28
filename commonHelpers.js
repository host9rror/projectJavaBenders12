import{A as v,a as f,S as b}from"./assets/vendor-12a91897.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();new v(".accordion-container",{duration:2500});const h=document.querySelector(".covers-projects"),w=document.querySelectorAll(".row"),p=[{mobile:"./img/covers/project-1.png",desktop:"./img/covers/project-1@2x.png",description:"project 1"},{mobile:"./img/covers/project-2.png",desktop:"./img/covers/project-2@2x.png",description:"project 2"},{mobile:"./img/covers/project-3.png",desktop:"./img/covers/project-3@2x.png",description:"project 3"},{mobile:"./img/covers/project-4.png",desktop:"./img/covers/project-4@2x.png",description:"project 4"},{mobile:"./img/covers/project-6.png",desktop:"./img/covers/project-6@2x.png",description:"project 6"},{mobile:"./img/covers/project-7.png",desktop:"./img/covers/project-7@2x.png",description:"project 7"},{mobile:"./img/covers/project-8.png",desktop:"./img/covers/project-8@2x.png",description:"project 8"},{mobile:"./img/covers/project-9.png",desktop:"./img/covers/project-9@2x.png",description:"project 9"},{mobile:"./img/covers/project-10.png",desktop:"./img/covers/project-10@2x.png",description:"project 10"},{mobile:"./img/covers/project-11.png",desktop:"./img/covers/project-11@2x.png",description:"project 11"}],a=o=>o.map(({mobile:t,desktop:e,description:i})=>`<li class="cover-item animate">
    <a class="covers-link" href="" data-desktop="${e}">
      <img class="covers-image" src="${t}" alt="${i}" width="" />
    </a>
  </li>`).join("");p.forEach((o,t)=>{const e=w[Math.floor(t/3)],i=a([o]);e.innerHTML+=i});h.innerHTML=a(p);const j=document.querySelectorAll(".covers-image"),y=window.innerWidth;j.forEach(o=>{const t=o.parentElement.getAttribute("data-desktop"),e=o.getAttribute("src");o.style.width="100%",o.setAttribute("src",y<768?e:t)});const c=document.querySelector(".covers-section"),m=o=>{const t=o.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},u=()=>c.classList.add("animate"),L=()=>c.classList.remove("animate");window.addEventListener("scroll",()=>{m(c)?u():L()});m(c)&&u();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-trigger, .accordion-btn").forEach(t=>{t.addEventListener("click",function(){const e=this.parentElement.nextElementSibling;e.classList.toggle("is-hidden");const i=this.parentElement.querySelector("svg");e.classList.contains("is-hidden")?i.classList.remove("rotate-180"):i.classList.add("rotate-180")})})});const E=document.getElementById("menu-open_btn"),g=document.getElementById("mobile-menu"),k=document.getElementById("close-mobile-menu");E.addEventListener("click",()=>{g.classList.add("is-mobile-menu-open")});k.addEventListener("click",()=>{g.classList.remove("is-mobile-menu-open")});const x="https://portfolio-js.b.goit.study/api",d=document.querySelector(".btn-arrow-right"),l=document.querySelector(".btn-arrow-left");async function S(){try{const t=(await f(`${x}/reviews`)).data;A(t);let e=new b(".reviews-swiper-container.swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"}});d.addEventListener("click",function(){e.slideNext()}),l.addEventListener("click",function(){e.slidePrev()}),e.on("reachEnd",function(){d.disabled=!0}),e.on("reachBeginning",function(){l.disabled=!0}),e.on("fromEdge",function(){d.disabled=!1,l.disabled=!1})}catch{alert("An error occurred while getting reviews"),document.querySelector(".swiper-wrapper").innerHTML="<p>Not found</p>"}}async function A(o){const t=o.map(e=>`<div class="reviews-card">
        <li class="swiper-slide">
        <img src="${e.avatar_url}" alt="${e.author}">
        <h3>${e.author}</h3>
        <p>${e.review}</p>
        </li>
        </div>`).join("");document.querySelector(".swiper-wrapper").innerHTML=t}S();
//# sourceMappingURL=commonHelpers.js.map
