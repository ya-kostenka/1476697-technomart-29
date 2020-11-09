/* Special Offer Slider */

let controlNext = document.querySelector(".special-offers-button-next");
let controlBack = document.querySelector(".special-offers-button-back");
let slides = document.querySelectorAll(".special-offers-slide");
 
let controlNextClick = function (slide) {
    controlNext.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (slide.classList.contains("special-offers-slide-current")) {
            slide.classList.remove("special-offers-slide-current");
        } else {
            slide.classList.add("special-offers-slide-current");
        }
    })
};

let controlBackClick = function (slide) {
    controlBack.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (slide.classList.contains("special-offers-slide-current")) {
            slide.classList.remove("special-offers-slide-current");
        } else {
            slide.classList.add("special-offers-slide-current");
        }
    })
};


for (var i = 0; i < slides.length; i++) {
controlNextClick(slides[i]);
};

for (var i = 0; i < slides.length; i++) {
controlBackClick(slides[i]);
};

/* Services Slider */

let serviceButtons = document.querySelectorAll(".services-button");
let serviceInfos = document.querySelectorAll('.services-info-item');

let showService = function (serviceButton, serviceInfo) {
    serviceButton.addEventListener("click", function (evt) {
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
