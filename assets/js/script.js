const playerNameContainer = document.getElementById("player-name-container")
const gameContainer = document.getElementById("container-game")
const feedback = document.getElementById("username-feedback");
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const closeButton = document.getElementById("close-button");
const rules = document.getElementById("rules");
const scoreElement = document.getElementById("score");

const answerButtons = document.getElementsByClassName("answer-button");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let questionIndex = 0;
let score = 0;

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
/**
 * 
 */
function CheckAnswer() {
    let clickedAnswer = this.innerHTML;
    nextButton.classList.remove("hide")
    let correctAnswerText = questions[questionIndex].answers.find(answer => answer.correct).text;
    
    if (clickedAnswer === correctAnswerText) {

        score=score+10;
        ShowScore();
    }
    else {
        console.log("yanlis amk")
    }
    // Disable all answer buttons to prevent further clicks
    for (let button of answerButtons) {
        button.disabled = true;
    }
}

/*Next button code- increases question index and checks if there are any more questions if not displays reset button*/
nextButton.addEventListener("click", function () {
    // Increment question index
    questionIndex++;
    nextButton.classList.add("hide");
    /*limit the number of questions to be shown per game to 10*/
    if (questionIndex < 11) {
        // Display the next question
        displayQuestion();
    } else {
        resetButton.classList.remove("hide")

    }
});

/*reset button evet listener when clicked resets question index, score and timer*/
resetButton.addEventListener("click", function () {
    questionIndex = 0;
    score = 0;
});

function ShowScore() {
    scoreElement.textContent = score;
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
    //Reanable buttons after showing a new question
    for (let button of answerButtons) {
        button.disabled = false;
    }

}



/**shuffles a given array */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function showRules() {
    rules.classList.remove("hide")
}
function hideRules() {
    rules.classList.add("hide")
}

