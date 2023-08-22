function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const random = Math.floor(Math.random() * choices.length);
	return choices[random].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	console.log(`Player: ${playerSelection}`); // Testing selections
	console.log(`Computer: ${computerSelection}`);
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
	const maxRounds = 5; // Set round total to setup loop
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < maxRounds; i++) {
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
