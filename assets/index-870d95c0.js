(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".js-steps");let s=0;i.querySelectorAll("li").forEach(n=>{s++,n.querySelector(".js-step-counter").textContent=s});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".js-open-modal"),o=document.querySelectorAll(".data-modal-close"),r=document.querySelector(".data-modal");n.forEach(function(l){l.addEventListener("click",function(){r.classList.remove("visually-hidden")})}),o.addEventListener("click",function(){r.classList.add("visually-hidden")})});
