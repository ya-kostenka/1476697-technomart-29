let controlNext=document.querySelector(".special-offers-button-next"),controlBack=document.querySelector(".special-offers-button-back"),slides=document.querySelectorAll(".special-offers-slide"),radioSlides=document.querySelectorAll(".slider-indicator-input"),controlNextClick=function(e,t){controlNext.addEventListener("click",function(i){if(i.preventDefault(),e.classList.contains("special-offers-slide-current"))e.classList.remove("special-offers-slide-current");else{e.classList.add("special-offers-slide-current"),document.querySelector(".slider-indicator-input[checked]").removeAttribute("checked"),t.setAttribute("checked","checked")}})};for(var i=0;i<slides.length;i++)controlNextClick(slides[i],radioSlides[i]);let controlBackClick=function(e,t){controlBack.addEventListener("click",function(i){if(i.preventDefault(),e.classList.contains("special-offers-slide-current"))e.classList.remove("special-offers-slide-current");else{e.classList.add("special-offers-slide-current"),document.querySelector(".slider-indicator-input[checked]").removeAttribute("checked"),t.setAttribute("checked","checked")}})};for(i=0;i<slides.length;i++)controlBackClick(slides[i],radioSlides[i]);let controlRadio=function(e,t){e.addEventListener("click",function(){e.removeAttribute("checked"),document.querySelector(".special-offers-slide-current").classList.remove("special-offers-slide-current"),t.classList.add("special-offers-slide-current")})};for(i=0;i<radioSlides.length;i++)controlRadio(radioSlides[i],slides[i]);let serviceButtons=document.querySelectorAll(".services-button"),serviceInfos=document.querySelectorAll(".services-info-item"),showService=function(e,t){e.addEventListener("click",function(i){i.preventDefault();let c=document.querySelector(".services-button-current"),s=document.querySelector(".services-info-item-current");c.classList.remove("services-button-current"),s.classList.remove("services-info-item-current"),e.classList.toggle("services-button-current"),t.classList.toggle("services-info-item-current")})};for(i=0;i<serviceButtons.length;i++)showService(serviceButtons[i],serviceInfos[i]);