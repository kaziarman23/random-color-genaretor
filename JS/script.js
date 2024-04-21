const reloadEl = document.querySelector(".reloadBtn");
const conteinerEl = document.querySelector(".conteiner");

reloadEl.addEventListener("click", function () {
    window.location.reload();
});

for (let index = 0; index < 32; index++) {
    const conteinerDiv = document.createElement("div");
    conteinerDiv.classList.add("box");
    conteinerEl.appendChild(conteinerDiv);
}
generateColor();

function generateColor() {
    const conteinerDivEl = document.querySelectorAll(".box");

    conteinerDivEl.forEach(function (box) {
        const newColorCode = randomColors();
        box.style.backgroundColor = "#" + newColorCode;
        let h1El = document.createElement("h1");
        h1El.innerText = "#" + newColorCode;
        h1El.classList.add("text");
        box.appendChild(h1El);
    });
}

function randomColors() {
    const charaters = "0123456789abcdef";
    const charatersLength = 6;
    let colorCode = "";
    for (let index = 0; index < charatersLength; index++) {
        const randomNum = Math.ceil(Math.random() * charaters.length);
        colorCode += charaters.substring(randomNum, randomNum + 1);
        console.log(colorCode);
    }
    return colorCode;
}
