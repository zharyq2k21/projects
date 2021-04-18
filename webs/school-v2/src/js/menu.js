let menu_button = document.querySelector(".nav-container .nav__menu img"),
    close_button = document.querySelector(".nav-container .nav__items .close"),
    modal_menu = document.querySelector(".nav-container .nav__items")

// Меню
// Открыть меню
menu_button.addEventListener("click", () => {
    modal_menu.style.display = "flex"
})
// Закрыть меню
close_button.addEventListener("click", () => {
    modal_menu.style.display = "none"
})

// Переключатель языков
// ...