let price = document.getElementById("mini");
let rangePrice = document.getElementById("rangeIdMin");

let maxiPrice = document.getElementById("maxi");
let maxiRange = document.getElementById("rangeIdMax");

let saveBtn=document.getElementById("save");
let filterPrice=document.getElementById("filterPrice");

rangePrice.addEventListener("click", (event) => {
    let silderValue = event.target.value;
    price.value = silderValue;
});
maxiRange.addEventListener("click", (event) => {
    let silderValueMax = event.target.value;
    maxiPrice.value = silderValueMax;
});

saveBtn.addEventListener("click",()=>{
    filterPrice.innerHTML=`Minimum Price${price.value} and your maximum price is${maxiPrice.value} `;
})