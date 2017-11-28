var popupOpen = document.querySelector(".login"); //ищем ссылку по которой будет открываться форма Входа
var popup = document.querySelector(".modal-content"); //ищем наше модальное окно с формой Входа
var popupClose = popup.querySelector(".modal-content-close"); //ищем кнопку закрытия модального окна
var form = popup.querySelector("form"); //ищем форму Входа
var login = popup.querySelector("[name=login]"); //ищем поле логин
var password = popup.querySelector("[name=password]"); //ищем поле пароль
var find_us = document.querySelector(".find-us"); //ищем ссылку по которой будет открываться карта
var mapOpen = document.querySelector(".js-open-map"); //ищем ссылку по которой будет открываться карта
var mapPopup = document.querySelector(".modal-content-map"); //ищем наше модальное окно с картой
var mapClose = mapPopup.querySelector(".modal-content-close"); //ищем кнопку закрытия модального окна с картой
var overlay = document.querySelector(".modal-overlay"); //ищем затемнение фона при открытии модального окна
var storege = localStorage.getItem("login");

popupOpen.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
    if (storege) {
        login.value = storege;
        password.focus();
    } else {
        login.focus();
    }
});
popupClose.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});
overlay.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    mapPopup.classList.remove("modal-content-map-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event){
    if ( !login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
        console.log("Нужно ввести логин и пароль!!!");
//            alert("Нужно ввести логин и пароль!!!");
    } else {
        localStorage.setItem("login", login.value);
    }
});
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
        if (mapPopup.classList.contains("modal-content-map-show")) {
            mapPopup.classList.remove("modal-content-map-show");
        }
        if (overlay.classList.contains("modal-overlay-show")) {
            overlay.classList.remove("modal-overlay-show")
        }

    }
});
find_us.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show")
});
mapOpen.addEventListener("click", function (event) {
   event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show")
});
mapClose.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.remove("modal-content-map-show");
    overlay.classList.remove("modal-overlay-show");
});
