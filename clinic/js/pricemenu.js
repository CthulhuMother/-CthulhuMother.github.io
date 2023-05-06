let options = document.querySelectorAll("option"),
    prices = document.querySelectorAll(".price_wrapper"),
    input = document.querySelector(".selection__value"),
    dlist = document.getElementById("directions").childNodes;
    clearlist = document.querySelector(".clean"),
    tmp = document.querySelector(".selection__value");

    
input.addEventListener("change", () => {
    if (input.value === ""){
        prices.forEach(el => {
            el.classList.remove("active-price");//скрывает
        });
    }else{
        prices.forEach(el => {
            el.classList.add("active-price");//скрывает
        });

        for (let i = 0; i < dlist.length; i++) {
            if (dlist[i].value === input.value){
    
    
                let price = [...prices].filter(el => el.dataset["price"] === dlist[i].dataset["direction"])[0];
                
                price.classList.remove("active-price");
            }
        }
    }
})
// clearlist.addEventListener("click", () => {
//     console.log(1);
//     input.value = "";
//     prices.forEach(el => {
//         el.classList.remove("active-price");//скрывает
//     });
// })
tmp.addEventListener("click", () => {
    if(tmp.value != ""){
        tmp.value = "";

        prices.forEach(el => {
            el.classList.remove("active-price");//скрывает
        });
    }
})

