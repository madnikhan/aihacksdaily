let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Time is up!');
            }
        }, 1000);
    }
});

document.getElementById('pauseButton').addEventListener('click', function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('resetButton').addEventListener('click', function () {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
});

// Initialize timer display
updateTimerDisplay();