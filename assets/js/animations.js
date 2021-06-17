const scrollTop = document.getElementById('scroll-top');
const visHide = document.getElementsByClassName('visHide');

scrollTop.addEventListener('click', function () {
    scrollTop.classList.add('animate__bounce');
    window.scrollTo(0, 0);
});

scrollTop.addEventListener('animationend', function () {
    scrollTop.classList.remove('animate__bounce');
});

window.addEventListener('scroll', function () {
    for (let index = 0; index < visHide.length; index++) {
        const element = visHide[index];

        if (this.window.screen.height >= element.getBoundingClientRect().y) {
            element.classList.remove('animate__zoomOut');
            element.classList.add('animate__animated', 'animate__zoomIn');
            element.style.visibility = 'visible';
        }
    }
})
