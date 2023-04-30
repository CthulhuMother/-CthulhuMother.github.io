document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector(".navigation-item_menu");

    let menus = document.querySelectorAll(".navigation-item_menu");

    menus.forEach(el => {
        let drop = el.querySelector(".navigation-item__drop");

        el.addEventListener("mouseover", () => {
            drop.classList.add("navigation-item__drop_active");
        })

        el.addEventListener("mouseout", () => {
            drop.classList.remove("navigation-item__drop_active");
        });
    })


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


