let inputsform = document.querySelectorAll(".popup__form .popupreg"),
    sendbtn = document.querySelector(".send"),
    freebtn = document.querySelectorAll(".free"),
    notfreebtn = document.querySelectorAll(".notfree"),
    openpopup = document.querySelector(".popup"),
    howreg = document.querySelector(".popup__info"),
    whoreg = document.querySelector(".popup__reg"),
    registration = document.querySelector(".popup__accept"),
    exit = document.querySelectorAll(".quit"),
    paymentbtn = document.querySelector(".btnpay"),
    agree = document.querySelector(".popup__form .agree");


sendbtn.addEventListener("click", (e) => {
    e.preventDefault();

    let count = 0;

    inputsform.forEach(el => {
        if (el.value == ""){
            el.classList.add("popupreg-none");
            count--;
        }else{
            el.classList.remove("popupreg-none");
            count++;
        }
    })

    if(agree.checked){
        console.log("cheked")
        count++;
    }else{
        count--;
    }

    if(count == inputsform.length+1){
        //отправляем функция

        whoreg.classList.remove("popup__reg_active");
        registration.classList.add("popup__accept_active");
    }

    
})

inputsform.forEach(el => {
    el.addEventListener("input", () => {
        if (el.classList.contains("popupreg-none") && el.value != ""){
            el.classList.remove("popupreg-none");
        }
    })
})

console.log(freebtn)

freebtn.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden";
        openpopup.classList.add("popup_active");
        if(!howreg.classList.contains("popup__accept_active")){
            howreg.classList.add("popup__info_active");
        }
    })
})

paymentbtn.addEventListener("click", (e) => {
    document.querySelector("body").style.overflow = "hidden";
    howreg.classList.remove("popup__info_active");
    whoreg.classList.add("popup__reg_active");
})

notfreebtn.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden";
        howreg.classList.remove("popup__info_active");
        whoreg.classList.add("popup__reg_active");
        openpopup.classList.add("popup_active");
    })
})


exit.forEach(el => {
    el.addEventListener("click", () => {
        openpopup.classList.remove("popup_active");
        whoreg.classList.remove("popup__reg_active");
        registration.classList.remove("popup__accept_active");
        howreg.classList.remove("popup__info_active");
        document.querySelector("body").style.overflow = "scroll";
    })
})