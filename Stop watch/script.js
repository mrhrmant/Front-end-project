let start = document.getElementById("btn");
let timeValue = document.getElementById("set-second");
let stopWatch = document.getElementById("stop-watch");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");
// let ten=document.getElementById("ten");
// let twenty=document.getElementById("twenty");
// let minute=document.getElementById("minute");
// let twoMin=document.getElementById("twomin");
// testing
let hidden = timeValue.getAttribute("hidden");
function toggle() {

    // let hidden2=start.getAnimations("hidden2")
    if (hidden) {
        timeValue.removeAttribute("hidden");

    } else {
        timeValue.setAttribute("hidden", "hidden")
    }


}



start.addEventListener("click", () => {

    let time = timeValue.value;

    stopWatch.textContent = time;
    let sets = setInterval(function () {
        stopWatch.textContent = time;
        time--;
        stopWatch.innerHTML = `${time}`;
        timeValue.value = '0';


        if (time === 0) {
            clearInterval(sets)
        }

        stop.addEventListener("click", () => {
            clearInterval(sets);
            timeValue.removeAttribute("hidden");




        });
        clear.addEventListener("click", () => {
            clearInterval(sets);
            stopWatch.textContent = '0';
            timeValue.value = '0';
            
            


        });



    }, 1000);

})