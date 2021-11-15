// Timer

let count = new Date("jan 1,2022 00:00:00").getTime();
let timer = setInterval(() => {
    let now = new Date().getTime();
    let diff = count - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000)





// Stars

function star() {
    const container = document.getElementById("container");
    const starBox = document.createElement("div");
    const starImg = document.createElement("img");

    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    let randomStar = Math.floor((Math.random() * 6) + 1);
    let randomBox = Math.floor((Math.random() * 6) + 1);
    let randomWidth = Math.floor((Math.random() * windowW) - 150);
    let randomHeight = Math.floor((Math.random() * windowH) - 150);

    starImg.src = "img/star.png";
    starImg.style.marginRight = "10px";

    starBox.style.width = "100px";
    starBox.style.height = "100px";
    starBox.style.position = "absolute";
    starBox.style.top = `${randomHeight}px`;
    starBox.style.left = `${randomWidth}px`;
    starBox.style.transform = "rotate(90deg)";
    starBox.className = "starBox";
    // starBox.style.backgroundColor = "red";

    for (let i = 1; i <= randomStar; i++) {
        starBox.appendChild(starImg.cloneNode(true));
    }

    for (let j = 1; j <= randomBox; j++) {
        container.appendChild(starBox.cloneNode(true));
    }
}

star();
