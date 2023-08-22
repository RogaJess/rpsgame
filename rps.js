function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const random = Math.floor(Math.random() * choices.length);
	return choices[random].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log(`Tie Game! Both chose: ${playerSelection}!`);
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
	}
}