let menu_button = document.querySelector(".menu-box"),
    close_button = document.querySelector(".close"),
    menu = document.querySelector(".header .nav-box")

menu_button.addEventListener("click", () => {
    menu.style.display = "flex"
})
close_button.addEventListener("click", () => {
    menu.style.display = "none"
})