window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.audio');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        'lightcoral',
        'plum',
        'lightgreen',
        'blueviolet',
        'yellowgreen',
        'chocolate'
    ];
    console.log(sounds);

    //for sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    //Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', () => {
            visual.remove(this);
        });

    }
})