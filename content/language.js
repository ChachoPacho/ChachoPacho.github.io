const cEducation = document.getElementById('cEducation');
const cSkills = document.getElementById('cSkills');
const cInterests = document.getElementById('cInterests');
const cContact = document.getElementById('cContact');
const cWork = document.getElementById('cWork');

const Footer = document.getElementById('footer');
const langBtns = document.getElementsByClassName('lang-btn');

const langs = ['#es', '#en'];

window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    hashRead(hash);
})

window.addEventListener('load', function () {
    const hash = window.location.hash;
    if (hash == '') ChangeLanguage('es');
    else hashRead(hash);
})

function hashRead(hash) {
    if (langs.indexOf(hash) != -1) {
        ChangeLanguage(hash.replace('#', ''));
    } 
}

function ChangeLanguage(lang) {
    const CurrentCont = CONTENT[lang];
    for (let content in CurrentCont) {
        let Cont = CurrentCont[content]
        if (content == 'cEducation') {
            DisplayContent(lang);
            continue;
        };
        if (content in ['cSkills', 'cInterests', 'cEducation', 'cWork']) continue;
        for (let e in Cont) {
            let cHTML = document.getElementsByClassName(content + '_' + e)[0];
            if (cHTML != undefined) {
                cHTML.innerHTML = Cont[e];
            }
        }
    }
}

function DisplayContent(lang) {
    const CurrentCont = CONTENT[lang];

    TimeLineContent(cEducation, CurrentCont, 'cEducation');
    TimeLineContent(cWork, CurrentCont, 'cWork');

    let EditCont = '';
    for (const e in CurrentCont['cSkills']) {
        let cont = CurrentCont['cSkills'][e];
        EditCont +=
        "<div class='col-12 col-md-6 col-lg-4 pb-3 mt-3'>" +
            "<h5>" + cont['title'] + "</h5>";

        for (const subE in cont['content']) {
            let subCont = cont['content'][subE];
            EditCont +=
                "<div class='skill'>" +
                    "<div class='row'>" +
                        "<div class='col-6 text-start my-1'>" +
                            "<span>" + subE + "</span>" +
                        "</div>" +
                        "<div class='col-6 text-end my-1 p-0 skill-percent'>" + subCont + "</div>" +
                        "<div class='col-12 skillbar' style='width: " + subCont + ";'></div>" +
                    "</div>" +
                "</div>"
        };
        EditCont += "</div>"
    }
    cSkills.innerHTML = EditCont;

    cInterests.innerHTML = 
        "<div class='row px-4 pt-5 pb-3 text-center' style='color:#00385f'>" +
            "<p>" + CurrentCont['cInterests']['text'] + "</p>" +
        "</div>";
    EditCont = "<div class='row justify-content-center'>";
    i = 0;
    for (const e in CurrentCont['cInterests']['content']) {
        let cont = CurrentCont['cInterests']['content'][e];
        let special = ['#0194fe;', '#c0e4ff;']
        EditCont +=
            "<div class='col-12 col-md-4 col-lg-3 text-center py-3' style='color:" + special[i % 2] + 'background-color:' + special[(i + 1) % 2] + "'>" +
                "<div>" + 
                    cont + 
                "</div>" +
                "<span>" + e + "</span>" +
            "</div>"
        i++;
    };
    cInterests.innerHTML += EditCont + "</div>";;

    const contacto = CONTENT[lang]['cContact'];

    cContact.innerHTML = 
        "<div class='col-12 col-md-6'>" +
            "<div class='d-flex'>" +
                "<div class='my-auto thanks py-0 pb-5 py-md-5 px-2 px-md-0'>" +
                    "<p class='text-center'>" + contacto['text'] + "</p>" +
                    "<p class='text-end'>Gonzalo Bordón</p>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div class='col-12 col-md-6'>" +
            "<form class='section d-flex p-4 pt-5' id='emailForm'>" +
                "<div>" +
                    "<input type='text' name='name' placeholder='" + contacto['name'] + "' required>" +
                    "<input type='text' name='subject' placeholder='" + contacto['subject'] + "' maxlength='30' required>" +
                    "<input type='email' name='email' placeholder='" + contacto['email'] + "' required>" +
                    "<textarea name='msg' id='form-msg' cols='30' rows='10' placeholder='" + contacto['message'] + "' required></textarea>" +
                    "<button type='submit' class='btn btn-primary w-100'>" + contacto['send'] + "</button>" +
                    "<a id='emailer' style='visibility:hidden'></a>" +
                "</div>" +
            "</form>" +
        "</div>";
}

function TimeLineContent(elementToFilled, CurrentCont, category) {
    elementToFilled.innerHTML = '';
    elementToFilled.innerHTML += ('<div class="line d-none d-md-block"></div>');
    var i = 0;
    let modal = '';
    for (const e in CurrentCont[category]) {
        let cont = CurrentCont[category][e]
        let special = {
            0: ['justify-content-start', 'b-left'],
            1: ['justify-content-end', 'b-right']
        }

        let iframe = ''
        let img = ''

        if (cont['modal']) {
            modal_content = "<btn onclick=\"wakeUpModal('" + e + "')\" ><i class='fa fa-circle-o' aria-hidden='true'></i><i class='fa fa-circle-o' aria-hidden='true'></i><i class='fa fa-circle-o' aria-hidden='true'></i></btn>";
            if (cont['iframe']) iframe = "<iframe class='w-100' src='" + cont['iframe'] + "' style='height: 20em'></iframe>";
            if (cont['img']) img = "<img class='w-100' src='" + cont['img'] + "'></img>";

            modal += 
                "<div class='modal' style='background-color: rgba(0, 0, 0, 0.5);' id='" + e + "'>" +
                    "<div class='h-100 w-100 d-flex' style='oveflow-y: scroll'>" +
                        "<div class='container my-auto p-4'>" +
                            "<div class='w-100 d-flex'>" +
                                "<button class='btn ms-auto px-4 btn-danger' onclick=\"$('#" + e + "')[0].style.display = 'none'\">" +
                                    "<i class='center fa fa-times'></i>" +
                                "</button>" +
                            "</div>" +  
                            "<div class='section w-100 mt-auto p-3 p-md-5' style='margin-bottom: auto !important'>" +
                                iframe +
                                img +
                                "<p class='pt-4 px-2'>" + cont['modal'] + "</p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>";
        } else {
            modal_content = cont['content'];
        }
        let lines = [
            "<div class='col-12 col-md-5'>" +
                "<div class = 'lineText w-100 w-md-auto'>" +
                    "<div class = 'card-content' >" +
                        "<h5 class = 'timeline-title' >" + cont['title'] + "</h5> " +
                        "<div class = 'row pb-3' >" +
                            "<div class = 'timeline-info' >" +
                                "<h6><small>" + cont['where'] + "</small> </h6> " +
                                "<h6 class = 'mt-1' ><small>" + cont['when'] + "</small> </h6>" +
                            "</div> " +
                        "</div> " +
                        "<p class='text-center'>" + modal_content + "</p>" +
                        "<small>" + cont['ocupation'] + "</small >" +
                    "</div> " +
                "</div> " +
            "</div> ", "<div class='col-0 col-md-5'></div>"
        ];

        elementToFilled.innerHTML +=
        "<div class='w-100 mt-2'>" +
            "<div class = 'block-line " + special[i % 2][0] + "'>" +
                lines[i % 2] +
                "<div class='col-0 col-md-2'>" +
                    "<ball class = 'd-none d-md-flex " + special[i % 2][1] + "'>" +
                        "<p class='text-center my-auto'>" + cont['letter'] + "</p>" +
                    "</ball> " +
                "</div>" +
                lines[(i + 1) % 2] +
            "</div> " +
        "</div>";
        i++;
    };

    Footer.innerHTML = modal;
}

ChangeLanguage('es');