import{a as v,S as w,i}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const S="https://pixabay.com/api/",P="54665411-360ba93f793399be536ad6b7c",E=15;async function u(s,o=1){const e={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:E,page:o};return(await v.get(S,{params:e})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(e=>`
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
    `).join("");f.insertAdjacentHTML("beforeend",o),R.refresh()}function q(){f.innerHTML=""}function y(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function $(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}const B=document.querySelector(".form"),M=document.querySelector(".load-more");let d="",n=1,a=0;const L=15;B.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o){d=o,n=1,a=0,q(),b(),y();try{const e=await u(d,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a=e.totalHits,m(e.hits),a>L&&$()}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}});M.addEventListener("click",async()=>{n+=1,y();try{const s=await u(d,n);m(s.hits);const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),n*L>=a&&(b(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
