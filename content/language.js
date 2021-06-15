const timeLine = document.getElementById('time-line');
const skillsTable = document.getElementById('skills-table');
const cInterests = document.getElementById('cInterests');

function ChangeLanguage(lang) {
    const CurrentCont = CONTENT[lang];

    for (let content in CurrentCont) {
        let Cont = CurrentCont[content]
        if (content == 'cEducation') {
            DisplayContent(lang);
            continue;
        };
        if (content in ['cSkills', 'cInterests']) continue;
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
    timeLine.innerHTML = '';
    timeLine.innerHTML += ('<div id="line"></div>');
    var i = 0;
    for (const e in CurrentCont['cEducation']) {
        let cont = CurrentCont['cEducation'][e]
        let special = {
            0: ['justify-content-start', 'b-left'],
            1: ['justify-content-end', 'b-right']
        }
        timeLine.innerHTML +=
        "<div class = 'block-line " + special[i % 2][0] + "'>" +
            "<ball class = '" + special[i % 2][1] + "'>" +
                "<p>" + cont['letter'] + "</p>" +
            "</ball> " +
            "<div class = 'line'>" +
                "<div class = 'card-content' >" +
                    "<h5 class = 'timeline-title' >" + cont['education'] + "</h5> " +
                    "<div class = 'row pb-3' >" +
                        "<div class = 'timeline-info' >" +
                            "<h6><small>" + cont['place'] + "</small> </h6> " +
                            "<h6 class = 'mt-1' ><small>" + cont['date'] + "</small> </h6>" +
                        "</div> " +
                    "</div> " +
                    "<p>" + cont['content'] + "</p>" +
                    "<small>" + cont['title'] + "</small >" +
                "</div> " +
            "</div> " +
        "</div>";
        i++;
    };

    let EditCont = '';
    for (const e in CurrentCont['cSkills']) {
        let cont = CurrentCont['cSkills'][e];
        EditCont +=
        "<div class='col-sm-12 col-md-" + 12 / Object.keys(CurrentCont['cSkills']).length + "'>" +
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
    skillsTable.innerHTML = EditCont;

    cInterests.innerHTML = 
        "<div class='row px-4 pt-5 pb-3 text-center' style='color:#00385f'>" +
            "<p>" + CurrentCont['cInterests']['text'] + "</p>" +
        "</div>";
    EditCont = "<div class='row justify-content-center'>";
    i = 0;
    for (const e in CurrentCont['cInterests']['content']) {
        let cont = CurrentCont['cInterests']['content'][e];
        let special = ['#012b7e;', 'white;']
        EditCont +=
            "<div class='col-sm-4 col-md-" + Math.floor(22 / Object.keys(CurrentCont['cInterests']['content']).length) + " text-center py-3' style='color:" + special[i % 2] + 'background-color:' + special[(i + 1) % 2] + "'>" +
                "<div>" + 
                    cont + 
                "</div>" +
                "<span>" + e + "</span>" +
            "</div>"
        i++;
    };
    cInterests.innerHTML += EditCont + "</div>";;
}