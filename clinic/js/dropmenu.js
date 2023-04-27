let button = document.querySelector(".choose"),
    options = document.querySelectorAll("option"),
    modes = document.querySelectorAll(".unitmode"),
    choice = document.querySelector(".choice"),
    tmp = document.querySelector(".selection__value");

button.addEventListener("click", () => {
    let work = [...options].filter(el => el.value === tmp.value)[0];
    choice.value = work.dataset ["number"];

    for (let i = 0; i < modes.length; i++){
        modes[i].classList.remove("unitmode_active")

        console.log(modes);
        if (modes[i].dataset["mode"] == work.dataset["unit"]){
            modes[i].classList.add("unitmode_active");
            //continue;
        }
    }
})