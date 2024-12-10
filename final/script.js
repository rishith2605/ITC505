document.addEventListener("DOMContentLoaded", () => {
    const boardSize = 5; // 5x5 grid
    const gameBoard = document.getElementById("game-board");
    const resetButton = document.getElementById("reset-button");
    let board = [];

    // Create the board
    function createBoard() {
        gameBoard.innerHTML = ""; // Clear existing board
        board = []; // Reset the board array

        for (let row = 0; row < boardSize; row++) {
            let boardRow = [];
            for (let col = 0; col < boardSize; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener("click", () => toggleCell(row, col));
                gameBoard.appendChild(cell);
                boardRow.push(cell);
            }
            board.push(boardRow);
        }
        randomizeBoard();
    }

    // Toggle the clicked cell and its neighbors
    function toggleCell(row, col) {
        const positions = [
            [row, col],          // Current cell
            [row - 1, col],      // Top
            [row + 1, col],      // Bottom
            [row, col - 1],      // Left
            [row, col + 1]       // Right
        ];

        positions.forEach(([r, c]) => {
            if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
                board[r][c].classList.toggle("off");
            }
        });

        if (checkWin()) {
            setTimeout(() => alert("Congratulations! You solved the puzzle!"), 100);
        }
    }

    // Check if all cells are off
    function checkWin() {
        return board.flat().every(cell => cell.classList.contains("off"));
    }

    // Randomize the board with a solvable configuration
    function randomizeBoard() {
        for (let i = 0; i < boardSize * 2; i++) {
            const row = Math.floor(Math.random() * boardSize);
            const col = Math.floor(Math.random() * boardSize);
            toggleCell(row, col); // Simulate a click
        }
    }

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        createBoard();
    });

    // Initialize the game
    createBoard();
});
