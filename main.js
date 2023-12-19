playGame();

function playGame() {
  let computerCounter = 0;
  let playerCounter = 0;
  while (computerCounter < 5 && playerCounter < 5) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Rock, Paper or Scissors?");
    let result = playRound(playerChoice, computerChoice);
    if (result === 0) {
      console.log("This round was a tie! Let's go again!");
      continue;
    }
    if (result === 1) {
      playerCounter = playerCounter + 1;
    } else {
      computerCounter = computerCounter + 1;
    }
    console.log(`Player: ${playerCounter} Computer: ${computerCounter}!`);
  }
  console.log(
    `Game Over! Your score was ${playerCounter} and the computers score was ${computerCounter}!`
  );
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  if (computerChoice === playerChoice) {
    return 0;
  }

  if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      console.log("You win! Rock crushes Scissors.");
      return 1;
    } else {
      console.log("You lose! Paper covers Rock.");
      return 2;
    }
  }

  if (playerChoice === "SCISSORS") {
    if (computerChoice === "PAPER") {
      console.log("You win! Scissors cuts Paper.");
      return 1;
    } else {
      console.log("You lose! Rock crushes Scissors.");
      return 2;
    }
  }

  if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      console.log("You win! Paper covers Rock.");
      return 1;
    } else {
      console.log("You lose! Scissors cuts Paper.");
      return 2;
    }
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}
