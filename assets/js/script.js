document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let navImg = document.getElementById("nav-img");
    // Add a click event listener to the nav-img
    navImg.addEventListener("click", function() {
        alert("Are you sure you want to go to Home Page? Your game score will reset");
    });
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});
function runGame(){

}

function checkName(){

}

function CheckAnswer(){

}

function incrementScore(){

}

function highScore(){
    
} 

function displayQuestions(){
    
} 