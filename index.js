import{a as w,S as v,i}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function p(t,s){const a="https://pixabay.com/api/",n={q:t,page:s,per_page:15,key:"50329765-c5f06c68786df4859fa5b0c64",image_type:"photo",orientation:"horizontal",safesearch:!0};return(await w.get(a,{params:n})).data}const g=document.querySelector(".js-loader"),f=document.querySelector(".js-load-more-btn"),d=document.querySelector(".js-gallery");let b=new v(".gallery a",{captionsData:"alt",captionDelay:250});function S(t){return`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <ul class="image-info">
              <li class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${t.likes}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${t.views}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${t.comments}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${t.downloads}</span>
  </li>
          </ul>
        </li>`}function h(t){return t.map(S).join(" ")}function y(){b.refresh()}function E(){d.innerHTML=""}function P(){g.classList.remove("hidden")}function q(){g.classList.add("hidden")}function M(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}function O(){i.info({title:"Info",message:"You have reached the end of the results."})}const x=document.querySelector(".js-form");let l,o,m;//!======================================================
x.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements["search-text"].value.trim(),o=1,!l){u(),i.warning({title:"Warning",message:"Please enter a search term!"});return}E(),P();let s;try{if(s=await p(l,o),s.hits.length===0)i.error({title:"Oops...",message:"Sorry, there are no images matching your search query. Please try again!"}),u();else{const a=await h(s.hits);d.innerHTML=a,m=Math.ceil(s.totalHits/15),y(),L()}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{q()}});//!======================================================
f.addEventListener("click",async t=>{o++;try{const s=await p(l,o),a=h(s.hits);d.insertAdjacentHTML("beforeend",a),y();const n=document.querySelector(".gallery-item");if(n){const{height:e}=n.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}L(),o===m&&O()}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}});//!======================================================
function L(){!l||o>=m?u():M()}
//# sourceMappingURL=index.js.map
