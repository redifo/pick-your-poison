const playerNameContainer = document.getElementById("player-name-container")
const gameContainer = document.getElementById("container-game")
const feedback = document.getElementById("username-feedback");
// Add a click event listener to the nav-img
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

function checkName() {
    let playerName = document.getElementById("player-name-input").value;
    if (playerName.length >= 4) {
        displayQuestions();
        playerNameContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
    }
    else if(playerName==""){
        feedback.textContent = "Username cannot be left blank";
        feedback.style.color = "red";
    }
    else if(playerName.length<4){
        feedback.textContent = "Username should be at least 4 characters long.";
        feedback.style.color = "red";
    }
}

function CheckAnswer() {

}

function incrementScore() {

}

function ShowScore() {

}

function displayQuestions() {

} 