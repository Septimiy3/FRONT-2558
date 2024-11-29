
const animateButton = document.getElementById('animateButton');
const stretchButton = document.getElementById('stretchButton');

animateButton.addEventListener('click', () => {
    animateButton.classList.toggle('animate');
});

stretchButton.addEventListener('click', () => {
    stretchButton.classList.toggle('animateStretch');
});
