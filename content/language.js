const cEducation = document.getElementById('cEducation');
const cSkills = document.getElementById('cSkills');
const cInterests = document.getElementById('cInterests');
const cContact = document.getElementById('cContact');
const cWork = document.getElementById('cWork');
const Menu = document.getElementById('Menu');

const Footer = document.getElementById('footer');
const langBtns = document.getElementsByClassName('lang-btn');

window.addEventListener('load', function () {
    if (!['es', 'en'].includes(window.localStorage['lang'])) {
        window.localStorage['lang'] = 'es';
    }
    DisplayContent(window.localStorage['lang']);
})

function ChangeLanguage(lang) {
    window.localStorage['lang'] = lang;
    DisplayContent(lang);
}

function DisplayContent(lang) {
    const CurrentCont = CONTENT[lang];

    for (let content of ['cTitles', 'cGeneral', 'cButtons', 'cPersonalInfo']) {
        let Cont = CurrentCont[content];
        for (let e in Cont) {
            if (Array.isArray(Cont[e])) {
                for (let subE in Cont[e]) {
                    let Elem = document.getElementsByClassName(content + '_' + e + '_' + subE)[0];
                    Elem.innerHTML = Cont[e][subE];
                }
            } else {
                let Elem = document.getElementsByClassName(content + '_' + e);
                fillElem(Elem, Cont, e);
            }
            function fillElem(Elem, Cont, e) {
                for (const s of Elem) {
                    s.innerHTML = Cont[e];
                }
            }
        }
    }

    Footer.innerHTML = '';
    
    TimeLineContent(cEducation, CurrentCont, 'cEducation');
    TimeLineContent(cWork, CurrentCont, 'cWork');
    
    let EditCont = '';
    for (let element in CurrentCont['cTitles']) {
        if (['language', 'personalCard'].includes(element)) continue;
        EditCont += "<a class='menuItems' style='cursor: pointer' onclick='moveTo(\"" + element + "\")'>" + CurrentCont['cTitles'][element] + "</a>";
    }

    Menu.innerHTML = 
        "<div class='menuDiv'>" +
            "<div class='menuHeader'>" +
                "<div class='menuHeaderBorder'>" + 
                    "<div class='menuHeaderText'>CV</div>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "<div class='menuNav p-4'>" +
            EditCont +
        "</div>";

    EditCont = '';
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
            "<div class='animate__animated visHide col-12 col-md-4 col-lg-3 text-center py-3' style='color:" + special[i % 2] + 'background-color:' + special[(i + 1) % 2] + "'>" +
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
            "<form class='animate__animated visHide section d-flex p-4 pt-5' id='emailForm'>" +
                "<div>" +
                    "<input type='text' name='name' placeholder='" + contacto['name'] + "' required>" +
                    "<input type='text' name='subject' placeholder='" + contacto['subject'] + "' maxlength='30' required>" +
                    "<input type='email' name='email' placeholder='" + contacto['email'] + "' required>" +
                    "<textarea name='msg' id='form-msg' cols='30' rows='10' placeholder='" + contacto['message'] + "' required></textarea>" +
                    "<button type='submit' class='btn btn-primary w-100'>" + contacto['send'] + "</button>" +
                "</div>" +
            "</form>" +
        "</div>";

    let contactDatos = '';
    for (const object of contacto['modal']['datos']) {
        contactDatos += "<li>" + object + '</li>';
    }

    Footer.innerHTML += ModalCreator(
        "<div class='d-flex'>" + 
            "<h1 class='m-auto' style='font-size:100px;'> :( </h1>" +
        "</div>" +
        "<p class='pt-4 px-2'>" + contacto['modal']['texto'] + "</p>" + 
        "<ul class='p-0 mx-auto ms-sm-5 me-sm-auto' style='list-style: none;'>" + contactDatos + "</ul>" +
        "<p class='pt-4 px-2'>" + contacto['modal']['final'] + "</p>", 
        'contactModal');
}

function TimeLineContent(elementToFilled, CurrentCont, category) {
    elementToFilled.innerHTML = '';
    elementToFilled.innerHTML += ('<div class="line"></div>');
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

            modal = ModalCreator(iframe + img + "<p class='pt-4 px-2'>" + cont['modal'] + "</p>", e);
        } else {
            modal_content = cont['content'];
        }
        let lines = [
            "<div class='animate__animated visHide col-12 col-md-5'>" +
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
        Footer.innerHTML += modal;
    };

}

function ModalCreator(modalContent, modalId) {
    let modal =
        "<div class='modal' style='background-color: rgba(0, 0, 0, 0.5);' id='" + modalId + "'>" +
            "<div class='animate__animated h-100 w-100 d-flex'>" +
                "<div class='container my-auto p-4'>" +
                    "<div class='w-100 d-flex'>" +
                        "<button class='btn ms-auto px-4 btn-danger' onclick='goSleepModal(\"" + modalId + "\")'>" +
                            "<i class='center fa fa-times'></i>" +
                        "</button>" +
                    "</div>" +
                    "<div class='section w-100 mt-auto p-3 p-md-5' style='margin-bottom: auto !important;overflow-y: scroll'>" +
                        modalContent +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";
    return modal;
}
