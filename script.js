document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'red-orange', 'orange', 'orange-yellow', 'yellow', 'yellow-green', 'green', 'green-blue', 'blue', 'blue-purple', 'purple', 'purple-red'];
    const tvs = document.querySelectorAll('.tv');

    // Shuffle colors array
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    tvs.forEach((tv, index) => {
        tv.addEventListener('click', () => {
            if (tv.classList.contains('on')) {
                tv.className = 'tv'; // Turn off
            } else {
                tv.className = 'tv on ' + colors[index]; // Turn on with color
            }
        });
    });
});
