!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("iU1Pc");const i=document.querySelector(".button-watched"),o=document.querySelector(".button-queue"),l=document.querySelector(".library-list");function d(e){l.innerHTML="";const t=e.map((({poster_path:e,title:t,id:a,genres:n,release_date:r,vote_average:i})=>{const o=n.map((e=>e.name)),l=parseInt(r);return`<li class="gallery__item movie-card" data-id=${a}>\n        <a href="#" class="gallery__link movie-card__link link" data-id=${a}>\n    <div class="gallery__wrapper" data-id=${a}>\n\n        <img\n            class="gallery__img movie-card__image"\n            src="https://www.themoviedb.org/t/p/w500${e}"\n            alt="${t}"\n            loading="lazy"\n            data-id=${a}\n            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"\n            >\n          </div>\n          <div class="gallery__thumb movie-card__info" data-id=${a}>\n              <h3 class="gallery__name movie-card__title" data-id=${a}>${t}</h3>\n             <p class="gallery__genres movie-card__genre" data-id=${a}>${o}</p>\n              <span class="gallery__year movie-card__year" data-id=${a}>${l||"n/a"}</span>\n          </div>\n          </a>\n      </li>`})).join("");l.insertAdjacentHTML("beforeend",t)}r.Notify.info("Press the button.",{position:"center-top",timeout:2e3,cssAnimationStyle:"from-top",fontAwesomeIconStyle:"shadow"}),i.addEventListener("click",(function(e){e.preventDefault(e);d(JSON.parse(localStorage.getItem("watchResults")))})),o.addEventListener("click",(function(e){e.preventDefault(e);d(JSON.parse(localStorage.getItem("queueResult")))}))}();
//# sourceMappingURL=my-library.898160fc.js.map
