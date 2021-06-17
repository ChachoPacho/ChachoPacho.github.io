const emailForm = document.getElementById('emailForm');
const emailer = document.getElementById('emailer');

emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const form = new FormData(this);

    emailer.setAttribute('href', `mailto:gbordonnet@gmail.com?subject=${form.get('name')} || ${form.get('email')}&body=<div style='width:100%; height:25px'>${form.get('subject')}</div> <div style='width:100%'>${form.get('msg')}</div>`);

    emailer.click();
})

window.onload = resizer;
window.onresize = resizer;

function resizer(params) {
    slant_image();
}

function slant_image() {
    const profile_imgs = document.getElementsByClassName('img-responsive');
    const profile_slants = document.getElementsByClassName('profile-slant');

    for (let index = 0; index < profile_imgs.length; index++) {
        const profile_img = profile_imgs[index];
        const profile_slant = profile_slants[index];

        profile_slant.style = "border-right: " + profile_img.width / 4 + 'px solid transparent; border-bottom: ' + (profile_img.height + 1) + 'px solid #0194fe;';
    }
};

function wakeUpModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = 'block';
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function moveToContact() {
    if(isMobile.any()) {
        window.scrollTo(0, $('#emailForm').offset().top - 50);
    } else {
        window.scrollTo(0, $('.cTitles_contact').offset().top - 50);
    }
}