const emailForm = document.getElementById('emailForm');
const emailer = document.getElementById('emailer');

emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const form = new FormData(this);

    emailer.setAttribute('href', `mailto:gbordonnet@gmail.com?subject=${form.get('name')} || ${form.get('email')}&body=<div style='width:100%; height:25px'>${form.get('subject')}</div> <div style='width:100%'>${form.get('msg')}</div>`);

    emailer.click();

    wakeUpModal('contactModal')
})

window.onload = slant_image();
window.onresize = slant_image();

function slant_image() {
    const profile_img = document.getElementsByClassName('img-responsive')[0];
    const profile_slant = document.getElementsByClassName('profile-slant')[0];

    profile_slant.style = "border-right: " + profile_img.width / 4 + 'px solid transparent; border-bottom: ' + (profile_img.height + 1) + 'px solid #0194fe;';
};

function wakeUpModal(id) {
    animateElement($('#' + id + ' > div')[0], 'zoomIn', $('#' + id)[0]);
}

function goSleepModal(id) {
    animateElement($('#' + id + ' > div')[0], 'zoomOut', $('#' + id)[0]);
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