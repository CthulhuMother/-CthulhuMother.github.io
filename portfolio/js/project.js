document.addEventListener("DOMContentLoaded", () => {
    let mini = document.querySelectorAll(".presentation-item_left div"),
        big = document.querySelectorAll(".presentation-item_right img");

    mini.forEach(el => {
        el.addEventListener('click', (e) => {
            big.forEach(el => el.classList.remove("img_active"));
            let id = el.querySelector("img").id;
            big.forEach(el => {
                if (el.classList.contains(id)){
                    el.classList.add("img_active");
                }

            })
        })
    })
})