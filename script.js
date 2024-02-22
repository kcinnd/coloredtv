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
            const audio = document.querySelector(`.audio.${colors[index]}-audio`); // Select the corresponding audio element

            if (tv.classList.contains('on')) {
                tv.className = 'tv'; // Turn off
                audio.pause(); // Pause the audio
                audio.currentTime = 0; // Reset the audio to the start
            } else {
                // Ensure all other TVs are turned off and their audios are stopped
                tvs.forEach((otherTv, otherIndex) => {
                    if (otherTv !== tv) {
                        otherTv.className = 'tv';
                        const otherAudio = document.querySelector(`.audio.${colors[otherIndex]}-audio`);
                        otherAudio.pause();
                        otherAudio.currentTime = 0;
                    }
                });

                tv.className = 'tv on ' + colors[index]; // Turn on with color
                audio.play(); // Play the audio
            }
        });
    });
});
