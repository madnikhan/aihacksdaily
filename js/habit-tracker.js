document.addEventListener('DOMContentLoaded', function () {
    const habitInput = document.getElementById('habitInput');
    const addHabitButton = document.getElementById('addHabitButton');
    const habitList = document.getElementById('habitList');

    // Add Habit
    addHabitButton.addEventListener('click', function () {
        const habitText = habitInput.value.trim();
        if (habitText !== '') {
            const li = document.createElement('li');
            li.textContent = habitText;

            // Add Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    li.style.textDecoration = 'line-through';
                } else {
                    li.style.textDecoration = 'none';
                }
            });

            li.prepend(checkbox);
            habitList.appendChild(li);

            // Clear Input
            habitInput.value = '';
        }
    });
});