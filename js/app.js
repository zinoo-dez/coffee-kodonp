const menu = document.querySelector("#menu-icon")
const navLink = document.querySelector(".nav-links")
menu.addEventListener("click", function () {
    navLink.classList.toggle("show")
    if (menu.src === "http://172.16.0.2:5500/img/svg/Menu.svg") {
        menu.src = "http://172.16.0.2:5500/img/svg/time.svg"
    } else {
        menu.src = "http://172.16.0.2:5500/img/svg/Menu.svg"
    }
})