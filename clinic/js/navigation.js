document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector(".navigation-item_menu"),
    drop = document.querySelector(".navigation-item__drop");

    menu.addEventListener("mouseover", () => {
        drop.classList.add("navigation-item__drop_active");
    });

    menu.addEventListener("mouseout", () => {
        drop.classList.remove("navigation-item__drop_active");
    });

    let burger = document.querySelector(".header__burger"),
    mobile_menu = document.querySelector(".navigation");

    burger.addEventListener("click", () => {
        mobile_menu.classList.add("navigation_active")
    });

    let close = document.querySelector(".nav_close");

    close.addEventListener("click", () => {
        mobile_menu.classList.remove("navigation_active")
    });
})


