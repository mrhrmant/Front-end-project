let start = document.getElementById("btn");
let timeValue = document.getElementById("set-second");
let stopWatch = document.getElementById("stop-watch");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset")

start.addEventListener("click", () => {
    let time = timeValue.value;
    stopWatch.textContent = time;
    let sets = setInterval(function () {
        stopWatch.textContent = time;
        time--;
        stopWatch.innerHTML = `${time}`;
        timeValue.value='0';
        
        
        if (time === 0) {
            clearInterval(sets)
        }
        
        stop.addEventListener("click", () => {
            clearInterval(sets)


        });
        reset.addEventListener("click",()=>{
            clearInterval(sets);
            stopWatch.innerHTML='0';
            timeValue.value='0';
        });
        

    }, 1000);

})