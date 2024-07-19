let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);
let currentPlayer = "X";
let equality = 0;
let none_winner = 0;
let win = false;

//there are multiple options to win
var winingOptions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];


function resetGame() {
	document.location.reload(); // This already resets the game state
	// Optionally, if you implement a more granular reset logic, ensure to reset the moves count here as well
}

function playerWinner() {
	let winnerFound = false;
	winingOptions.forEach(function (options) {
		if (options.every(idx => cells[idx].innerText.trim() === currentPlayer)) {
			winnerFound = true;
			none_winner = 1; // Update none_winner to reflect a winner has been found
			// Highlight winning cells
			options.forEach(idx => {
				cells[idx].classList.add('win-highlight');
			});
		}
	});
	return winnerFound;
}

cells.forEach(function (cell) {
	cell.addEventListener('click', function() {
		if (cell.innerText.trim() != "") {
			return;
		}
		cell.innerText = currentPlayer;
		++equality;
		if (playerWinner()) {
			document.getElementById('message').innerText = "Player " + currentPlayer + " won!";
		} else if (equality === 9 && none_winner === 0) {
			document.getElementById('message').innerText = "Rematch";
		} else {
			currentPlayer = currentPlayer == "X" ? "O" : "X";
		}
		document.getElementById('movesCount').innerText = "Moves: " + equality; // Update moves count display
	});
});
