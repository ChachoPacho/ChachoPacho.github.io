const scrollTop = document.getElementById('scroll-top');
const visHide = document.getElementsByClassName('visHide');
const nav = $('.nav')[0];

var scrollPos = 0;

scrollTop.addEventListener('click', function () {
    scrollTop.classList.add('animate__bounce');
    window.scrollTo(0, 0);
});

scrollTop.addEventListener('animationend', function () {
    scrollTop.classList.remove('animate__bounce');
});

window.addEventListener('scroll', function () {
    console.log(scrollPos, document.body.getBoundingClientRect().top)
    if (document.body.getBoundingClientRect().top > scrollPos) {
        nav.classList.add('animate__fadeInDown');
        nav.classList.remove('animate__fadeOutUp');
    } else {
        if (!MenuIsAwake) {
            nav.classList.add('animate__fadeOutUp');
            nav.classList.remove('animate__fadeInDown');
        }
    };
    
    scrollPos = (document.body.getBoundingClientRect()).top

    for (let index = 0; index < visHide.length; index++) {
        const element = visHide[index];

        if (this.window.screen.height >= element.getBoundingClientRect().y) {
            animateElement(element, 'zoomIn', element);
        }
    }
})


function animateElement(element, animation, special) {
    if (animation == 'zoomIn') {
        special.style.display = 'block';
        element.classList.add('animate__zoomIn');
        element.style.visibility = 'visible';
    }
    if (animation == 'zoomOut') {
        element.classList.remove('animate__zoomIn');
        element.classList.add('animate__zoomOut');

        special.animate({opacity: 0}, 1000);

        element.addEventListener('animationend', function ModalCloser() {
            element.classList.remove('animate__zoomOut');
            special.style.display = 'none';
            element.removeEventListener('animationend', ModalCloser);
        })
    }
}


