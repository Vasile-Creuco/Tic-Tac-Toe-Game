let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);
var currentPlayer = "X";
var equality = 0;
var none_winner = 0;

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
	document.location.reload();
}

function displayMessage(player) {
	document.getElementById('message').innerText = "Player " + player + " won!";
}

function playerWinner() {
	winingOptions.forEach(function(options) {
		let win = options.every(idx => cells[idx].innerText.trim() == currentPlayer);
		if (win) {
			displayMessage(currentPlayer);
			++none_winner;
		}
	});
}

function rematch() {
	document.getElementById('message').innerText = "Rematch";
}

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (cell.innerText.trim() != "") return;
		cell.innerText = currentPlayer;
		++equality;
		playerWinner();
		if (equality === 9 && none_winner === 0) {
			rematch();
		}
		currentPlayer = currentPlayer == "X" ? "O" : "X";
	});
});
