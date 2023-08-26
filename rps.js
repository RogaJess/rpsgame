const CHOICES = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5; // Setup round count with for-loop

function getComputerChoice() {
	const random = Math.floor(Math.random() * CHOICES.length);
	return CHOICES[random].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	// If user input not in choices, throw error and cycle prompt
	if (!CHOICES.includes(playerSelection)) {
		return "Invalid choice. Please choose one of: Rock, Paper, or Scissors.";
	}

	if (playerSelection === computerSelection) {
		return `Tie Game! Both chose: ${playerSelection}!`;
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < MAX_ROUNDS; i++) {
		const playerSelection = prompt(
			"Make a choice (Rock/Paper/Scissors): "
		).toLowerCase();
		const computerSelection = getComputerChoice();
		const outcome = playRound(playerSelection, computerSelection);
		console.log(outcome);

		if (outcome.includes("win!")) {
			playerScore++;
		} else if (outcome.includes("lose!")) {
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		console.log(
			`You win! Final Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`
		);
	} else if (computerScore > playerScore) {
		console.log(
			`You lose! Final Score:\nComputer: ${computerScore}\nPlayer: ${playerScore}`
		);
	} else {
		console.log(`Tie game! Final Score:\n${computerScore}-${playerScore}`);
	}
}

game();
