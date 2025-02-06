document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        const text = document.getElementById('textToCheck').value.trim();
        if (text === '') {
            result.textContent = 'Please enter some text to check.';
            return;
        }

        // Simulate plagiarism check (replace with API call if needed)
        const randomPercentage = Math.floor(Math.random() * 101); // Random percentage
        result.textContent = `Plagiarism detected: ${randomPercentage}%`;
    });
});