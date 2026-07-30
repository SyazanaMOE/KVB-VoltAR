const ohmButton = document.getElementById("ohmButton");
const resistanceButton = document.getElementById("resistanceButton");
const arButton = document.getElementById("arButton");
const pretestButton = document.getElementById("pretestButton");
const posttestButton = document.getElementById("posttestButton");
const aboutButton = document.getElementById("aboutButton");

if (ohmButton) {
    ohmButton.addEventListener("click", function () {
        window.location.href = "ohm.html";
    });
}

if (resistanceButton) {
    resistanceButton.addEventListener("click", function () {
        window.location.href = "resistance.html";
    });
}

if (arButton) {
    arButton.addEventListener("click", function () {
        window.location.href = "ar.html";
    });
}

if (pretestButton) {
    pretestButton.addEventListener("click", function () {
        window.location.href = "pretest.html";
    });
}

if (posttestButton) {
    posttestButton.addEventListener("click", function () {
        window.location.href = "posttest.html";
    });
}

if (aboutButton) {
    aboutButton.addEventListener("click", function () {
        window.location.href = "about.html";
    });
}
