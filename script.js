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

function playerWinner() {
	winingOptions.forEach(function (options) {
		let win = options.every(idx => cells[idx].innerText.trim() == currentPlayer);
		if (win) {
			document.getElementById('message').innerText = "Player " + currentPlayer + " won!";
			++none_winner;
		}
	});
}

cells.forEach(function (cell) {
	cell.addEventListener('click', function () {
		if (cell.innerText.trim() != "") return;
		cell.innerText = currentPlayer;
		++equality;
		playerWinner();
		if (equality === 9 && none_winner === 0) {
			document.getElementById('message').innerText = "Rematch";
		}
		currentPlayer = currentPlayer == "X" ? "O" : "X";
	});
});
