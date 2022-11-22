const switchBtn = document.querySelector('.switch-btn');
const switchSpan = document.querySelector('.switch');
const video = document.querySelector('.video-container');

switchSpanSlide();

console.log(switchBtn.firstElementChild);

function switchSpanSlide() {
    switchBtn.addEventListener('click', () => {
        switchSpan.classList.toggle('slide');
        if (switchSpan.classList.contains('slide')) {
            video.pause();
        } else {
            video.play();
        }
    });
}