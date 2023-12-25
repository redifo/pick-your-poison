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
/* Run the checkName function when the game.html page loads.*/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("game.html")) {
        checkName();
    }
});

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