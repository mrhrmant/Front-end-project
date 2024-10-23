let btn = document.getElementById("btn");
let close = document.getElementById("close");
let video = document.getElementById("video");
let trailerBox = document.querySelector(".trailer-box");



btn.addEventListener("click", () => {
    console.log("happy");
    video.play();
    trailerBox.classList.remove("action")
});

close.addEventListener("click", () => {
    trailerBox.classList.add("action");
    // video.pause();
    video.currentTime = 0;
})
