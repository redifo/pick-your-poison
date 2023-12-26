const playerNameContainer = document.getElementById("player-name-container")
const gameContainer = document.getElementById("container-game")
const feedback = document.getElementById("username-feedback");
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-button");
let questionIndex = 0;
// Add a click event listener to the nav-img after page loads
document.addEventListener("DOMContentLoaded", function () {

    let navImg = document.getElementById("nav-img");
    navImg.addEventListener("click", function (event) {

        event.preventDefault();

        let userConfirm = confirm("Are you sure you want to go to Home Page? Your game score will reset");
        if (userConfirm) {
            window.location.href = "index.html";
        }
    });
}
);


/** starts/play game button- 
 * redirects to game page
 * */
function runGame() {
    // Redirect to the game.html page
    window.location.href = "game.html";
}
/** Check player name if valid show questions 
 * checks for playername length
 * shuffle the questions and call display question function
 * */
function checkName() {
    let playerName = document.getElementById("player-name-input").value;
    if (playerName.length >= 4) {
        shuffleQuestions(questions);
        playerNameContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
        displayQuestion();
    }
    else if (playerName == "") {
        feedback.textContent = "Name field cannot be left blank";
        feedback.style.color = "red";
    }
    else if (playerName.length < 4) {
        feedback.textContent = "Username should be at least 4 characters long.";
        feedback.style.color = "red";
    }
}

function CheckAnswer() {
    nextButton.classList.remove("hide")
}

function incrementScore() {

}

function ShowScore() {

}

function displayQuestion() {
    
    let curretQuestionn = questions[questionIndex]
    questionElement.innerHTML = curretQuestionn.question
    console.log(curretQuestionn.question)
}

function shuffleQuestions(array){
    array.sort(() => Math.random()-0.5);
}
const questions = [
    {
        question: "What colorless liqueur is made from cherries?",
    answers: [
        { text: "Kirsch", correct: true },
        { text: "Grand Marnier", correct: false },
        { text: "Irish Cream", correct: false },
        { text: "Kahlua", correct: false }
    ]
}
]