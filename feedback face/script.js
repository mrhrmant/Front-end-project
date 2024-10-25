let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");



let result = document.getElementById("result");
let save=document.getElementById("save");

let saves=false;

function saved(){
    if(saves==true){
        save.innerText="Saved!";
    }else{
        save.innerText="Save";
    }

}
save.addEventListener("click",saved);

star1.addEventListener("click",function click () {
    star1.style.color = "yellow";
    star2.style.color = "grey";
    star3.style.color = "grey";
    star4.style.color = "grey";
    star5.style.color = "grey";
    result.innerHTML = `&#128543;`;
    saves=true;
    this.disabled = true;
});

star2.addEventListener("click",function(){
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "grey";
    star4.style.color = "grey";
    star5.style.color = "grey";
    result.innerHTML = `&#128528;`;
    this.disabled = true;
    saves=true;
    
});

star3.addEventListener("click", function(){
    
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "grey";
    star5.style.color = "grey";
    result.innerHTML = `&#128512;`;
    this.disabled = true;
    saves=true;
    

})
star4.addEventListener("click", function(){
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "yellow";
    star5.style.color = "grey";
    result.innerHTML = `&#128513;`;
    this.disabled = true;
    saves=true;

});
star5.addEventListener("click",function() {
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "yellow";
    star5.style.color = "yellow";
    result.innerHTML = `&#128516;`;
    this.disabled = true;
    saves=true;

})
