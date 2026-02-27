import{a as w,S,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const P="https://pixabay.com/api/",R="54665411-360ba93f793399be536ad6b7c",E=15;async function u(s,o=1){const e={key:R,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:E,page:o};return(await w.get(P,{params:e})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <div class="stat">
            <b>${e.likes}</b>
            <span>Likes</span>
          </div>
          <div class="stat">
            <b>${e.views}</b>
            <span>Views</span>
          </div>
          <div class="stat">
            <b>${e.comments}</b>
            <span>Comments</span>
          </div>
          <div class="stat">
            <b>${e.downloads}</b>
            <span>Downloads</span>
          </div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",o),q.refresh()}function $(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}const B=document.querySelector(".form"),M=document.querySelector(".load-more");let d="",a=1,i=0;const v=15;B.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o){d=o,a=1,i=0,$(),b(),y();try{const e=await u(d,a);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(i=e.totalHits,m(e.hits),i<=v){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}L()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}});M.addEventListener("click",async()=>{a+=1,b(),y();try{const s=await u(d,a);m(s.hits);const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:o*2,behavior:"smooth"}),a*v>=i){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}L()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
