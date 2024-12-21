const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const customizeButton = document.getElementById('customizeButton');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameInterval;

canvas.width = 400;
canvas.height = 600;

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameInterval = setInterval(updateGame, 1000);
    setTimeout(() => {
        window.open('https://example.com', '_blank');
    }, 15000);
}

function updateGame() {
    // Game logic here
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

startButton.addEventListener('click', startGame);

customizeButton.addEventListener('click', () => {
    const newTitle = prompt('Enter new game title:');
    if (newTitle) {
        document.getElementById('game-title').textContent = newTitle;
    }
});
