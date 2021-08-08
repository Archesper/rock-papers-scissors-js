const playerButtons = Array.from(document.querySelectorAll(".optionButton"))
playerButtons.forEach(button => {
    button.addEventListener('click', game)
})

let playerScore = 0;
let computerScore = 0;

const roundResultHeader = document.querySelector("#winOrLose");
const playerScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");
const winner = document.querySelector("#announceWinner");

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}
function playRound(playerSelection, computerSelection) {
    // Lowercase method for case-insensitiveness
    // If selections match, it's a tie
    if (playerSelection === computerSelection) { // 
        return `${playerSelection} and ${computerSelection}, it's a tie!`;
    }
    // Otherwise, check for each of rock paper and scissors
    // No need to check for a similar selection eg if player selection is rock no need to check for rock as computer selection as first if statements covers that
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You lose! Scissors beat Paper";
        }
        else {
            return "You win! Paper beats Rock"
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors";
        }
        else {
            return "You win! Scissors beat Paper"
        }
    }
}
function game(e) {
    if (playerScore < 5 && computerScore < 5) {
        const roundResult = playRound(e.target.textContent, computerPlay());
        if (roundResult.includes("win")) {
            playerScore++;
        }
        else if (roundResult.includes("lose")) {
            computerScore++;
        }
        roundResultHeader.textContent = roundResult;
        playerScoreSpan.textContent = `Player: ${playerScore}`;
        computerScoreSpan.textContent = `Computer: ${computerScore}`;
    }
    if (playerScore === 5 || computerScore === 5) {
        if (computerScore > playerScore) {
            winner.textContent = "Computer wins..."
        }
        else {
            winner.textContent = "You win!"
        }
        playerButtons.forEach((button) =>  {
            console.log('hi');
            button.disabled = true;
            button.style.cursor = 'default';
            button.style.setProperty('--hover-color', 'grey');
        });
        document.querySelector("#refresh").hidden = false;
    }
}