const ohmButton = document.getElementById("ohmButton");
const resistanceButton = document.getElementById("resistanceButton");
const arButton = document.getElementById("arButton");


const pretestButton = document.getElementById("pretestButton");
const posttestButton = document.getElementById("posttestButton");
const aboutButton = document.getElementById("aboutButton");


ohmButton.addEventListener("click", function () {
    window.location.href = "ohm.html";
});

resistanceButton.addEventListener("click", function () {
    window.location.href = "resistance.html";
});

arButton.addEventListener("click", function () {
    window.location.href = "ar.html";
});



pretestButton.addEventListener("click", function () {
    window.location.href = "pretest.html";
});

posttestButton.addEventListener("click", function () {
    window.location.href = "posttest.html";
});

aboutButton.addEventListener("click", function () {
    window.location.href = "about.html";
});