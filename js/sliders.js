/* Special Offer Slider */

let controlNext = document.querySelector(".special-offers-button-next");
let controlBack = document.querySelector(".special-offers-button-back");
let slides = document.querySelectorAll(".special-offers-slide");
let radioSlides = document.querySelectorAll(".slider-indicator-input");

let controlNextClick = function (slide, radioSlide) {
    controlNext.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (slide.classList.contains("special-offers-slide-current")) {
            slide.classList.remove("special-offers-slide-current");
        } else {
            slide.classList.add("special-offers-slide-current");
            let radioSlideChecked = document.querySelector(".slider-indicator-input[checked]");
            radioSlideChecked.removeAttribute("checked");
            radioSlide.setAttribute("checked", "checked");
        } 
    })
};

for (var i = 0; i < slides.length; i++) {
controlNextClick(slides[i], radioSlides[i]);
};

let controlBackClick = function (slide, radioSlide) {
    controlBack.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (slide.classList.contains("special-offers-slide-current")) {
            slide.classList.remove("special-offers-slide-current");
        } else {
            slide.classList.add("special-offers-slide-current");
            let radioSlideChecked = document.querySelector(".slider-indicator-input[checked]");
            radioSlideChecked.removeAttribute("checked");
            radioSlide.setAttribute("checked", "checked");
        }     
    })
};

for (var i = 0; i < slides.length; i++) {
controlBackClick(slides[i], radioSlides[i]);
};

let controlRadio = function (radioSlide, slide) { 
    radioSlide.addEventListener("click", function () {
        radioSlide.removeAttribute("checked");
        let slideCurrent = document.querySelector(".special-offers-slide-current");
        slideCurrent.classList.remove("special-offers-slide-current");
        slide.classList.add("special-offers-slide-current");
    });
}

for (var i = 0; i < radioSlides.length; i++) {
    controlRadio(radioSlides[i], slides[i]);
}

/* Services Slider */

let serviceButtons = document.querySelectorAll(".services-button");
let serviceInfos = document.querySelectorAll('.services-info-item');

let showService = function (serviceButton, serviceInfo) {
    serviceButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        let serviceButtonCurrent = document.querySelector(".services-button-current");
        let serviceInfoCurrent = document.querySelector(".services-info-item-current");
        serviceButtonCurrent.classList.remove("services-button-current");
        serviceInfoCurrent.classList.remove("services-info-item-current");
        serviceButton.classList.toggle("services-button-current"); 
        serviceInfo.classList.toggle("services-info-item-current");
    })
};

for (var i = 0; i < serviceButtons.length; i++) {
    showService(serviceButtons[i], serviceInfos[i]);
}
