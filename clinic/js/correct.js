let inputs = document.querySelectorAll(".unit__form .review"),
    corbtn = document.querySelector(".review_btn");

corbtn.addEventListener("click", (e) => {
    console.log(1);
    e.preventDefault();

    inputs.forEach(el => {
        console.log(el.value)
        if (el.value == ""){
            el.classList.add("review-none");
        }else{
            el.classList.remove("review-none");
        }
    })
})

inputs.forEach(el => {
    el.addEventListener("input", () => {
        if (el.classList.contains("review-none") && el.value != ""){
            el.classList.remove("review-none");
        }
    })
})
