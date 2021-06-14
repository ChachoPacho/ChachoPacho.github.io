
window.onload = resizer;
window.onresize = resizer;

function resizer(params) {
    personal_card();
    slant_image();
}

function slant_image() {
    const profile_img = document.getElementById('profile-image');
    const profile_slant = document.getElementById('profile-slant');

    let height = profile_img.height;
    let width = profile_img.width;

    profile_slant.style = "border-right: " + width / 4 + 'px solid transparent; border-bottom: ' + height + 'px solid #0194fe;';
};

function personal_card() {
    const pci = document.getElementById('personal-card-information');
    const pcimg = document.getElementById('personal-card-image');

    pcimg.style = 'height: ' + (pci.clientHeight + 1) + 'px;';
};