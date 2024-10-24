let info = document.getElementById("info");
let profile = document.getElementById("profile");
let usr = document.getElementById("username");

let list = [
    {
        name: "prret",
        photourl: "1.jpg",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
    {
        name: "rahul",
        photourl: "2.jpg",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
        name: "john",
        photourl: "3.jpg",
        text: "Happy birthday to do john you deserve a beautyful party at your home and you don't like it how can it possisle",
    },

];

let idx = 0;


updateInfo();

function updateInfo() {
    const { name, photourl, text } = list[idx];
    usr.innerText = name;
    profile.src = photourl;
    info.innerText = text;
    idx++;
    if (idx == list.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateInfo()
    }, 5000)

}

