let clickCarts = document.querySelectorAll(".buy-button");
let clickFavs = document.querySelectorAll(".to-favs-button")
let modalCartFull = document.querySelector(".modal-cart-full");
let closeButtonCartFull = modalCartFull.querySelector(".close-button");
let cart = document.querySelector(".cart-button");
let favs = document.querySelector(".favs-button");

let addCart = function (clickCart) {
    clickCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCartFull.classList.add("modal-show");
        cart.classList.add("purchase-item-full");
    });
}

for (var i = 0; i < clickCarts.length; i++) {
    addCart(clickCarts[i]);   
}

let addFav = function (clickFav) {
    clickFav.addEventListener("click", function (evt) {
        evt.preventDefault();
        favs.classList.add("purchase-item-full");
});
}

for(var i = 0; i < clickFavs.length; i++) {
    addFav(clickFavs[i]);
}

closeButtonCartFull.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCartFull.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalCartFull.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCartFull.classList.remove("modal-show");
        }
    }
});