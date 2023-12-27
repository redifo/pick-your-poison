const playerNameContainer = document.getElementById("player-name-container")
const gameContainer = document.getElementById("container-game")
const feedback = document.getElementById("username-feedback");
const questionElement = document.getElementById("question");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const closeButton = document.getElementById("close-button");
const rules = document.getElementById("rules");
const scoreElement = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
const timerContainer = document.getElementById("timer-container");

const timerFinish = document.getElementById("timer-container-finish")
const scoreFinish = document.getElementById("score-container-finish")
const nameFinish = document.getElementById("name-container-finish")
const timerFinishSpan = document.getElementById("timer-finish")
const scoreFinishSpan = document.getElementById("score-finish")
const nameFinishSpan = document.getElementById("name-finish")


const answerButtons = document.getElementsByClassName("answer-button");
let questionIndexElement = document.getElementById("question-index");
const questionIndexElementContainer = document.getElementById("question-index-container");
let timer;
let timeInSeconds = 0;

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let questionIndex = 0;
let score = 0;

/*questions data*/
const questions = [
    {
        question: "What is the primary ingredient in a Mojito?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Bourbon, Sweet Vermouth, and a cherry garnish?",
        answers: [
            { text: "Manhattan", correct: true },
            { text: "Old Fashioned", correct: false },
            { text: "Whiskey Sour", correct: false },
            { text: "Negroni", correct: false }
        ]
    },
    {
        question: "What is the base spirit in a Moscow Mule?",
        answers: [
            { text: "Vodka", correct: true },
            { text: "Gin", correct: false },
            { text: "Rum", correct: false },
            { text: "Tequila", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Gin, Campari, and Sweet Vermouth?",
        answers: [
            { text: "Negroni", correct: true },
            { text: "Martini", correct: false },
            { text: "Mai Tai", correct: false },
            { text: "Tom Collins", correct: false }
        ]
    },
    {
        question: "What is the key ingredient in a Margarita?",
        answers: [
            { text: "Tequila", correct: true },
            { text: "Rum", correct: false },
            { text: "Vodka", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Champagne and Orange Juice?",
        answers: [
            { text: "Mimosa", correct: true },
            { text: "Bellini", correct: false },
            { text: "French 75", correct: false },
            { text: "Bloody Mary", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in a Daiquiri?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Whiskey, Lemon Juice, and Simple Syrup?",
        answers: [
            { text: "Whiskey Sour", correct: true },
            { text: "Old Fashioned", correct: false },
            { text: "Manhattan", correct: false },
            { text: "Sazerac", correct: false }
        ]
    },
    {
        question: "What is the base spirit in a Piña Colada?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Bourbon, Mint, Simple Syrup, and Soda Water?",
        answers: [
            { text: "Mint Julep", correct: true },
            { text: "Tom Collins", correct: false },
            { text: "Moscow Mule", correct: false },
            { text: "Dark 'n' Stormy", correct: false }
        ]
    },
    {
        question: "What is the key ingredient in a Mai Tai?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Gin, Lemon Juice, Simple Syrup, and Club Soda?",
        answers: [
            { text: "Tom Collins", correct: true },
            { text: "Negroni", correct: false },
            { text: "Mojito", correct: false },
            { text: "Gin Fizz", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in a Cosmopolitan?",
        answers: [
            { text: "Vodka", correct: true },
            { text: "Gin", correct: false },
            { text: "Rum", correct: false },
            { text: "Tequila", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Whiskey, Sweet Vermouth, and Bitters?",
        answers: [
            { text: "Manhattan", correct: true },
            { text: "Old Fashioned", correct: false },
            { text: "Sazerac", correct: false },
            { text: "Whiskey Sour", correct: false }
        ]
    },
    {
        question: "What is the key ingredient in a Whiskey Sour?",
        answers: [
            { text: "Whiskey", correct: true },
            { text: "Vodka", correct: false },
            { text: "Rum", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Gin, Elderflower Liqueur, and Prosecco?",
        answers: [
            { text: "French 75", correct: true },
            { text: "Tom Collins", correct: false },
            { text: "Aperol Spritz", correct: false },
            { text: "Negroni", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in a Mojito?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Bourbon, Sweet Vermouth, and a cherry garnish?",
        answers: [
            { text: "Manhattan", correct: true },
            { text: "Old Fashioned", correct: false },
            { text: "Whiskey Sour", correct: false },
            { text: "Negroni", correct: false }
        ]
    },
    {
        question: "What is the base spirit in a Moscow Mule?",
        answers: [
            { text: "Vodka", correct: true },
            { text: "Gin", correct: false },
            { text: "Rum", correct: false },
            { text: "Tequila", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Gin, Campari, and Sweet Vermouth?",
        answers: [
            { text: "Negroni", correct: true },
            { text: "Martini", correct: false },
            { text: "Mai Tai", correct: false },
            { text: "Tom Collins", correct: false }
        ]
    },
    {
        question: "What is the key ingredient in a Margarita?",
        answers: [
            { text: "Tequila", correct: true },
            { text: "Rum", correct: false },
            { text: "Vodka", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Champagne and Orange Juice?",
        answers: [
            { text: "Mimosa", correct: true },
            { text: "Bellini", correct: false },
            { text: "French 75", correct: false },
            { text: "Bloody Mary", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in a Daiquiri?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    },
    {
        question: "Which cocktail is made with Whiskey, Lemon Juice, and Simple Syrup?",
        answers: [
            { text: "Whiskey Sour", correct: true },
            { text: "Old Fashioned", correct: false },
            { text: "Manhattan", correct: false },
            { text: "Sazerac", correct: false }
        ]
    },
    {
        question: "What is the base spirit in a Piña Colada?",
        answers: [
            { text: "Rum", correct: true },
            { text: "Vodka", correct: false },
            { text: "Tequila", correct: false },
            { text: "Gin", correct: false }
        ]
    }

]

/** Prevent accidental click on main menu/home button resetting 
 * the game with an alert on screen
 */
function preventHome() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to go to the Home Page? Your game score will reset.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#026807',
        cancelButtonColor: '#f04646',
        confirmButtonText: 'Yes, go to Home Page!'
    }).then((result) => {
        if (result.isConfirmed) {
            
            window.location.href = 'index.html';
        }
    });
}
// Add a click event listener to the nav-img after page loads to prevent accidental click resetting the game
document.addEventListener("DOMContentLoaded", function () {

    let navImg = document.getElementById("nav-img");
    navImg.addEventListener("click", function (event) {

        event.preventDefault();

        Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to go to the Home Page? Your game score will reset.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#026807',
        cancelButtonColor: '#f04646',
        confirmButtonText: 'Yes, go to Home Page!'
    }).then((result) => {
        if (result.isConfirmed) {
            
            window.location.href = 'index.html';
        }
})})});

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
    let playerName = document.getElementById("player-name-input").value.trim();
    let playerNameNotTrim = document.getElementById("player-name-input").value;
    if (playerName.length >= 4) {
        shuffle(questions);
        playerNameContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
        scoreContainer.classList.remove("hide")
        timerContainer.classList.remove("hide")
        questionIndexElementContainer.classList.remove("hide")
        displayQuestion();
        return playerNameNotTrim;

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
/**Retrieves the clicked answer
 * Reveals Next Button
 * Increases the score by 10 if the answer is correct.
 * Updates the user's score, then calls the showScore funciton
 * Disables Answer Buttons
 */
function CheckAnswer() {
    let clickedAnswer = this.innerHTML;
    nextButton.classList.remove("hide")
    /* learned from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find*/
    let correctAnswerText = questions[questionIndex].answers.find(answer => answer.correct).text;

    if (clickedAnswer === correctAnswerText) {
        this.classList.add("correct")
        score = score + 10;
        ShowScore();
        stopTimer();
    }
    else {
        this.classList.add("wrong")
        stopTimer();
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].innerHTML === correctAnswerText) {
                answerButtons[i].classList.add("correct")
            }
        }
    }
    // Disable all answer buttons to prevent further clicks
    for (let button of answerButtons) {
        button.disabled = true;

    }
}

/*Next button code- increases question index and 
checks if there are any more questions if not displays reset button*/
nextButton.addEventListener("click", function () {
    // Increment question index
    questionIndex++;
    nextButton.classList.add("hide");
    /*limit the number of questions to be shown per game to 10*/
    if (questionIndex < 10) {
        // Display the next question

        displayQuestion();

    } else {
        resetButton.classList.remove("hide")
        questionContainer.classList.add("hide")
        timerFinishSpan.textContent = timeInSeconds;
        nameFinishSpan.textContent = checkName();
        scoreFinishSpan.textContent = score;
        timerFinish.classList.remove("hide")
        nameFinish.classList.remove("hide")
        scoreFinish.classList.remove("hide")
        timerContainer.classList.add("hide")
        scoreContainer.classList.add("hide")
        questionIndexElementContainer.classList.add("hide")
    }
});

/*reset button evet listener when clicked resets question index, score and timer*/
resetButton.addEventListener("click", function () {
    questionIndex = 0;
    score = 0;
    displayQuestion();
    resetButton.classList.add("hide")
    ShowScore();
    resetTimer();
    startTimer();
    timerFinish.classList.add("hide")
    nameFinish.classList.add("hide")
    scoreFinish.classList.add("hide")
    questionContainer.classList.remove("hide")

});



function displayQuestion() {

    let curretQuestionn = questions[questionIndex]
    questionElement.innerHTML = curretQuestionn.question
    let currentAnswers = questions[questionIndex].answers
    shuffle(currentAnswers)
    answer1.innerHTML = currentAnswers[0].text
    answer2.innerHTML = currentAnswers[1].text
    answer3.innerHTML = currentAnswers[2].text
    answer4.innerHTML = currentAnswers[3].text
    /*renable buttons when displaying a new question
    remove correct and wrong classes from buttons 
    also adding an event listener to the buttons*/
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = false;
        answerButtons[i].classList.remove("correct")
        answerButtons[i].classList.remove("wrong")
        answerButtons[i].addEventListener("click", CheckAnswer);
    }
    startTimer();
    showQuestionIndex();
}

/**shuffles a given array */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function startTimer() {
    timer = setInterval(function () {
        timeInSeconds++;
        document.getElementById('timer').innerText = timeInSeconds;
    }, 1000); // Update the timer every second
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    document.getElementById('timer').innerText = timeInSeconds;
}

function showRules() {
    rules.classList.remove("hide")
}
function hideRules() {
    rules.classList.add("hide")
    
}
function ShowScore() {
    scoreElement.textContent = score;
}

function showQuestionIndex() {
    questionIndexElement.textContent = questionIndex + 1;
}