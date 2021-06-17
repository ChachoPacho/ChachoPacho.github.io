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

        profile_slant.style = "border-right: " + profile_img.width / 4 + 'px solid transparent; border-bottom: ' + profile_img.height + 'px solid #0194fe;';
    }
};

function wakeUpModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = 'block';
}

function moveToContact() {
    window.scrollTo(0, $('body')[0].clientHeight);
}