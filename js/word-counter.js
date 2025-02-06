document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const sentenceCount = document.getElementById('sentenceCount');

    textInput.addEventListener('input', function () {
        const text = textInput.value;
        wordCount.textContent = text.split(/\s+/).filter(word => word.length > 0).length;
        charCount.textContent = text.length;
        sentenceCount.textContent = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
    });
});