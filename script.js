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
	document.location.reload();
}

function playerWinner() {
	winingOptions.forEach(function (options) {
		if (options.every(idx => cells[idx].innerText.trim() == currentPlayer)) {
			win = options.every(idx => cells[idx].innerText.trim() == currentPlayer);
		}
	});
	return win;
}

cells.forEach(function (cell) {
	cell.addEventListener('click', function() {
		if (cell.innerText.trim() != "") {
			 return;
		}
		cell.innerText = currentPlayer;
		++equality;
		playerWinner();
		if (playerWinner()) {
			document.getElementById('message').innerText = "Player " + currentPlayer + " won!";
		}
		if (equality === 9 && none_winner === 0) {
			document.getElementById('message').innerText = "Rematch";
		}
		currentPlayer = currentPlayer == "X" ? "O" : "X";
	});
});
