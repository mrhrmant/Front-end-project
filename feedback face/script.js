let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");



let container=document.getElementById("container");
let result = document.getElementById("result");
let save=document.getElementById("save");

let saves="";



function saved(){
    if(saves!==""){
        save.innerText="Saved!";
        container.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${saves}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
       

    }else{
        save.innerText="NotSave";
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
    saves="oneStar";
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

    saves="twoStar";
    
});

star3.addEventListener("click", function(){
    
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "grey";
    star5.style.color = "grey";
    result.innerHTML = `&#128512;`;
    this.disabled = true;
    saves="threeStar";
    

})
star4.addEventListener("click", function(){
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "yellow";
    star5.style.color = "grey";
    result.innerHTML = `&#128513;`;
    this.disabled = true;
    saves="fourStar";

});
star5.addEventListener("click",function() {
    star1.style.color = "yellow";
    star2.style.color = "yellow";
    star3.style.color = "yellow";
    star4.style.color = "yellow";
    star5.style.color = "yellow";
    result.innerHTML = `&#128516;`;
    this.disabled = true;
    saves="fiveStar";

})
