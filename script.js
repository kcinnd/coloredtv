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
                // Turn off the TV
                tv.classList.remove('on');
                colors.forEach(color => tv.classList.remove(color)); // Remove color classes
                audio.pause(); // Pause the audio
                audio.currentTime = 0; // Reset the audio to the start
            } else {
                // Turn off all other TVs and stop their audios
                tvs.forEach((otherTv, otherIndex) => {
                    otherTv.classList.remove('on'); // Turn off the TV
                    colors.forEach(color => otherTv.classList.remove(color)); // Remove color classes
                    const otherAudio = document.querySelector(`.audio.${colors[otherIndex]}-audio`);
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                });

                // Turn on this TV
                tv.classList.add('on', colors[index]); // Add 'on' state and color class
                audio.play(); // Play the audio
            }
        });
    });
});
