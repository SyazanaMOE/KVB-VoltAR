const ohmButton = document.getElementById("ohmButton");
const resistanceButton = document.getElementById("resistanceButton");
const arButton = document.getElementById("arButton");
const quizButton = document.getElementById("quizButton");

ohmButton.addEventListener("click", function () {
    window.location.href = "ohm.html";
});

resistanceButton.addEventListener("click", function () {
    window.location.href = "resistance.html";
});

arButton.addEventListener("click", function () {
    window.location.href = "ar.html";
});

quizButton.addEventListener("click", function () {
    window.location.href = "quiz.html";
});