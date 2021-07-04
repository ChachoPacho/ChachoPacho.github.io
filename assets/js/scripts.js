const menuDiv = $('#Menu')[0];
const menuBtn = $('#menuButton')[0];
const langBtn = $('#langBtn')[0];

const AnimeTime = 250;
let MenuIsAwake = false;

window.onload = function() {
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const form = new FormData(emailForm);
        
	const body = `Tema: ${form.get('subject')} \n Mensaje: ${form.get('msg')}`

	window.location.href = `mailto:gbordonnet@gmail.com?subject=${form.get('name')} || ${form.get('email')}&body=${encodeURIComponent(body)}`

        wakeUpModal('contactModal')
    });
    slant_image();
}

window.onresize = slant_image();

function slant_image() {
    const profile_img = document.getElementsByClassName('img-responsive')[0];
    const profile_slant = document.getElementsByClassName('profile-slant')[0];

    profile_slant.style = "border-right: " + profile_img.width / 4 + 'px solid transparent; border-bottom: ' + (profile_img.height * 2) + 'px solid #0194fe;';
};

function wakeUpModal(id) {
    animateElement($('#' + id + ' > div')[0], 'zoomIn', $('#' + id)[0]);
}

function goSleepModal(id) {
    animateElement($('#' + id + ' > div')[0], 'zoomOut', $('#' + id)[0]);
}

function menuWakeUp() {
    MenuIsAwake = true;
    if (isMobile.any()) {
        langBtn.classList.remove('animate__animated', 'animate__fadeIn');
        langBtn.classList.add('animate__animated', 'animate__fadeOut');
    }

    let menuBtnIcon = $('#menuButton > i')[0];
    menuDiv.style.display = 'block';
    nav.style.position = 'fixed';

    menuBtnIcon.classList.add('animate__animated', 'animate__fadeOut');

    menuDiv.animate({left: 0}, AnimeTime);
    menuBtn.animate({left: '30vh'}, AnimeTime);

    menuBtnIcon.addEventListener('animationend', function MenuFunction() {
        if (isMobile.any()) langBtn.style.right = '-100%';
        menuBtn.innerHTML = '<i class="fa fa-times"></i>'
        menuBtn.onclick = function () {
            menuGoSleep();
        }

        menuDiv.style.left = 0;
        menuBtn.style.left = '30vh';
        
        menuBtnIcon.classList.remove('animate__animated', 'animate__fadeOut');
        
        menuBtnIcon.removeEventListener('animationend', MenuFunction);
    })
}


function menuGoSleep() {
    MenuIsAwake = false;
    langBtn.style.right = '0';

    let menuBtnIcon = $('#menuButton > i')[0];

    if (isMobile.any()) {
        langBtn.classList.remove('animate__animated', 'animate__fadeOut');
        langBtn.classList.add('animate__animated', 'animate__fadeIn');
    }
    menuBtnIcon.classList.add('animate__animated', 'animate__fadeOut');
    
    menuDiv.animate({left: '-30vh'}, AnimeTime);
    menuBtn.animate({left: 0}, AnimeTime);
    
    menuBtnIcon.addEventListener('animationend', function MenuFunction() {
        menuBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
        menuBtn.onclick = function () {
            menuWakeUp();
        }
        
        menuDiv.style.left = '-30vh';
        menuBtn.style.left = 0;
        
        menuBtnIcon.classList.remove('animate__animated', 'animate__fadeOut');
        
        menuDiv.style.display = 'none';

        menuBtnIcon.removeEventListener('animationend', MenuFunction);
    })
}

function moveToContact() {
    if(isMobile.any()) {
        window.scrollTo(0, $('#emailForm').offset().top - 50);
    } else {
        window.scrollTo(0, $('.cTitles_contact').offset().top - 50);
    }
}

function moveTo(id) {
    if(id == 'contact') {
        moveToContact();
    } else if (id == 'home') {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, $('#' + id).offset().top - 100);
    }
}
