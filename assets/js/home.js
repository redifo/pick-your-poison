const rules = document.getElementById("rules");

/** Shows the game rules*/
function showRules() {
    rules.classList.remove("hide");
}

/** Hides the game rules*/
function hideRules() {
    rules.classList.add("hide");
}

/** start/play game button- 
 * redirects to game page
 * */
function runGame() {
    // Redirect to the game.html page
    window.location.href = "game.html";

}