import{a as L,S as w,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();async function p(e,s){const n="https://pixabay.com/api/",i={q:e,page:s,per_page:15,key:"50329765-c5f06c68786df4859fa5b0c64",image_type:"photo",orientation:"horizontal",safesearch:!0};return(await L.get(n,{params:i})).data}const g=document.querySelector(".js-loading-imgs-text"),f=document.querySelector(".js-load-more-btn"),d=document.querySelector(".js-gallery");let v=new w(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){return`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <ul class="image-info">
              <li class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${e.likes}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${e.views}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${e.comments}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${e.downloads}</span>
  </li>
          </ul>
        </li>`}function h(e){return e.map(b).join(" ")}function E(){v.refresh()}function M(){d.innerHTML=""}function P(){g.classList.remove("hidden")}function S(){g.classList.add("hidden")}function q(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}function x(){l.info({title:"Info",message:"You have reached the end of the results."})}const O=document.querySelector(".js-form");let o,r,m;//!======================================================
O.addEventListener("submit",async e=>{if(e.preventDefault(),o=e.target.elements["search-text"].value.trim(),r=1,!o){u(),l.warning({title:"Warning",message:"Please enter a search term!"});return}M(),P();let s;try{if(s=await p(o,r),s.hits.length===0)l.error({title:"Oops...",message:"Sorry, there are no images matching your search query. Please try again!"}),u();else{const n=await h(s.hits);d.innerHTML=n,m=Math.ceil(s.totalHits/15),E(),y()}}catch{l.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{S()}});//!======================================================
f.addEventListener("click",async e=>{r++;const s=await p(o,r),n=h(s.hits);d.insertAdjacentHTML("beforeend",n),y(),r===m&&x()});//!======================================================
function y(){!o||r>=m?u():q()}
//# sourceMappingURL=index.js.map
