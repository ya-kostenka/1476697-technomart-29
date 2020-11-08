/* Write Us Modal Script */

let linkWriteUs = document.querySelector(".write-us-button");
let modalWriteUs = document.querySelector(".modal-write-us");
let closeButtonWriteUs = modalWriteUs.querySelector(".close-button");
let formWriteUs = modalWriteUs.querySelector(".form-write-us");
let username = formWriteUs.querySelector("[name=username]");
let email = formWriteUs.querySelector("[name=email]");
let letter = formWriteUs.querySelector("[name=letter]");

let usernameStorage = "";
let emailStorage = "";
let isStorageSupport = true;

try {
    usernameStorage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

try {
    emailStorage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

linkWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal-show");

    if (usernameStorage) {
        username.value = usernameStorage;
        if (emailStorage) {
        email.value = emailStorage;
        }
        letter.focus();
    } else {
        username.focus();
    }
});

closeButtonWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-show");
    modalWriteUs.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalWriteUs.classList.contains("modal-show")) {
            evt.preventDefault();
            modalWriteUs.classList.remove("modal-show");
            modalWriteUs.classList.remove("modal-error");            
        }
    }
});

formWriteUs.addEventListener("submit", function(evt) {
    if(!username.value || !email.value || !letter.value) {
        evt.preventDefault();
        modalWriteUs.classList.remove("modal-error");
        modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
        modalWriteUs.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
        }
    }
});

/* Map Modal Script */

let linkMap = document.querySelector(".map");
let modalMap = document.querySelector(".modal-map");
let closeButtonMap = modalMap.querySelector(".close-button");

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

closeButtonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
        }
    }
});
