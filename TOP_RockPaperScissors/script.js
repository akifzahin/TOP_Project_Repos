function askHuman() {
    let hInput = prompt("Choose! Rock, Paper, or Scissors?");
    return hInput;
}

function askComputer() {
    let index = Math.floor(Math.random() * 3);
    return index;
}

function humanInput() {
    let lowerHInput = askHuman().toLowerCase();
    console.log("Human - " + lowerHInput);
    return lowerHInput;
}

function computerInput() {
    let cInput = ["rock", "paper", "scissors"];
    let index = askComputer();
    let finalCInput = cInput[index];
    console.log("Computer - " + finalCInput);
    return finalCInput;
}

function gameRound() {
    let human = humanInput();
    let computer = computerInput();

    if ((human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")) {
        console.log("Computer wins this round!");
        return "computer";
    } else if ((human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")) {
        console.log("Human wins this round!");
        return "human";
    } else {
        console.log("Draw this round!");
        return "draw";
    }
}

function playFiveRounds() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = gameRound();
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        console.log(`Round ${i + 1} result: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("Final Score\n" + "You - " + humanScore + "\n" + "Computer - " + computerScore);

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a draw!");
    }
}

