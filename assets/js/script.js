const playerNameContainer = document.getElementById("player-name-container")
const gameContainer = document.getElementById("container-game")
const feedback = document.getElementById("username-feedback");
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const closeButton =document.getElementById("close-button");
const rules = document.getElementById("rules");


const answerButtons = document.getElementsByClassName("answer-button");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let questionIndex = 0;
let score = 0;

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

// Add a click event listener to the nav-img after page loads to prevent accidental click resetting the game
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


/** start/play game button- 
 * redirects to game page
 * */
function runGame() {
    // Redirect to the game.html page
    window.location.href = "game.html";

}

/** Checks player name for playername length if valid 
 * shuffle the questions and call display question function
 * shows questions hides name box
 * */
function checkName() {
    let playerName = document.getElementById("player-name-input").value;
    if (playerName.length >= 4) {
        shuffle(questions);
        playerNameContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
        displayQuestion();
    }
    else if (playerName == "") {
        feedback.textContent = "Name field cannot be left blank";
        feedback.style.color = "red";
    }
    else if (playerName.length < 4) {
        feedback.textContent = "Name should be at least 4 characters long.";
        feedback.style.color = "red";
    }
}

function CheckAnswer() {
    let clickedAnswer = this.innerHTML;
    nextButton.classList.remove("hide")
    let correctAnswerText = questions[questionIndex].answers.find(answer => answer.correct).text;
    if (clickedAnswer === correctAnswerText) {

        score++;
    }
    else {
        console.log("yanlis amk")
    }
}
/*Next button code- increases question index and checks if there are any more questions if not displays reset button*/
nextButton.addEventListener("click", function () {
    // Increment question index
    questionIndex++;
    nextButton.classList.add("hide");
    if (questionIndex < questions.length) {
        // Display the next question
        displayQuestion();
    } else {
        resetButton.classList.remove("hide")
        alert(`Game Over!`);
    }
});
/*reset button evet listener when clicked resets question index score and timer*/
resetButton.addEventListener("click", function () {
    questionIndex = 0;
    score = 0;
});

function ShowScore() {

    }

function displayQuestion() {

        let curretQuestionn = questions[questionIndex]
        questionElement.innerHTML = curretQuestionn.question
        let currentAnswers = questions[questionIndex].answers
        shuffle(currentAnswers)
        answer1.innerHTML = currentAnswers[0].text
        answer2.innerHTML = currentAnswers[1].text
        answer3.innerHTML = currentAnswers[2].text
        answer4.innerHTML = currentAnswers[3].text

        for (let i = 0; i < answerButtons.length; i++) {
            if (currentAnswers[i].correct) {
                console.log("Correct answer found!");
            }
            answerButtons[i].addEventListener("click", CheckAnswer);
        }

    }



/**shuffles a given array */
function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

function showRules(){
    rules.classList.remove("hide")
}
function hideRules(){
    rules.classList.add("hide")
}

