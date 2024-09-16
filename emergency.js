document.addEventListener('DOMContentLoaded', () => {
    // Example of setting progress bar width dynamically
    const progressBars = document.querySelectorAll('.progress');

    // Example progress data (replace with actual data)
    const progressData = [40]; // Percentage for the first campaign

    progressBars.forEach((progressBar, index) => {
        progressBar.style.width = `${progressData[index]}%`;
    });
});
