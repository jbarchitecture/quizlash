let front = document.querySelectorAll('.cardFront');
let back = document.querySelectorAll('.cardBack');
let letsStart = document.querySelectorAll('.getStartedBtn');
let start = document.querySelector('.getStarted');
let questionbuttons = document.querySelectorAll(".quesbutton");
let correct = document.querySelectorAll('.correct');
let wrong = document.querySelectorAll('.wrong');
let scoreElement = document.querySelector(".score");
let title = document.querySelector(".header");
let header = document.querySelector(".scoreDisplay");
let cardholder = document.querySelector("#containerWrapper");
let cardsWrapper = document.querySelectorAll("#containerWrapper .container");
let scoreDisplay = document.querySelector(".scoreContainer");
let container = document.querySelector(".container");
let finishButton = document.querySelector(".finishButton");
let resetButtons = document.querySelectorAll(".resetButton");

cardholder.style.display = "none";

let score = 0;
scoreElement.textContent = score;

function getStarted() {
    start.style.display = "none";
    scoreDisplay.style.display = "block";
    cardholder.style.display = "block";
    cardholder.style.borderRadius = "25px";
    cardholder.style.backgroundColor = "rgb(299, 198, 135)";
    cardholder.style.boxShadow = "0 8px 12px -2px rgba(0, 0, 0, 0.2), 0 4px 8px -2px rgba(0, 0, 0, 0.1)";
    cardholder.style.marginTop = "100px";
    cardholder.style.marginBottom = "30px";
    cardholder.style.width = "75%";
    cardholder.style.position = "center";
    header.style.display = "none";
}

function checkanswer(event) {
    let button = event.target;
    let name = button.className;
    let question = button.parentElement;
    let currentExplanation = question.querySelector(".explanation");
    let currentCorrect = question.querySelector(".correctBlurb");

    if (name == "quesbutton correct") {
        button.style.background = "rgb(79, 159, 73)";
        button.style.color = "white";
        score++;
        scoreElement.textContent = score;
        currentExplanation.style.display = "block";
        currentCorrect.style.display = "block";
    } else {
        button.style.background = "rgb(204, 62, 37)";
        button.style.color = "white";
        currentExplanation.style.display = "block";  
    }

    let answerButtons = question.querySelectorAll("button");

    for (let button of answerButtons) {
        button.disabled = true;
    }
}

function finalGrade() {
    container.style.display = "none";

    if (score == 4) {
        document.getElementById("grade-A").style.display = "flex";
    } else if (score > 1 && score <=3) {
        document.getElementById("grade-B").style.display = "flex";
    } else {
        document.getElementById("grade-C").style.display = "flex";
    }

}

function reset() {
    location.reload();
}

finishButton.onclick = finalGrade;

for (let button of questionbuttons) {
    button.onclick = checkanswer;
}

for (let button of letsStart) {
    button.onclick = getStarted;
}

for (let button of resetButtons) {
    button.onclick = reset;
}

for (let i = 0; i < cardsWrapper.length; i++) {
    let flipbutton = cardsWrapper[i].querySelector(".flipButton");
    let flipbuttonback = cardsWrapper[i].querySelector(".flipBackButton");
    flipbutton.onclick = function check() {
        
        front[i].classList.toggle('flipped');
        back[i].classList.toggle('flipped');
    }

    flipbuttonback.onclick = function flipBack() {
        
        front[i].classList.toggle('flipped');
        back[i].classList.toggle('flipped');
    }
}