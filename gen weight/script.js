let err = document.getElementById("error");
let result = document.getElementById("result");
let feet = document.getElementById("feet");

let errorTime;
let resultTime;


function weightFinder(number) {
    let feetValue = feet.value;
    if (feetValue <= 0 || isNaN(feetValue)) {
        err.innerHTML = `Please Enter Valid Number`;
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {

            err.innerHTML = "";
            // feet.value = "";

        }, 2000)
    }else{
        let num = parseFloat(feet.value)
    // let man = 50;
    let totalInches = (num) * 12;
    let over50 = totalInches - 60;
    let cal=over50*2.3;
    let totalWeight=50+cal;
    result.innerHTML=`${totalWeight}`;
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
        result.innerHTML = "";
        // feet.value="";
    }, 2000)

    }
    

}

feet.addEventListener("input", weightFinder)


