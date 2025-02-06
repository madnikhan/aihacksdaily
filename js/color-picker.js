document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = document.getElementById('selectedColor');

    colorPicker.addEventListener('input', function () {
        selectedColor.textContent = colorPicker.value;
        document.body.style.backgroundColor = colorPicker.value;
    });
});