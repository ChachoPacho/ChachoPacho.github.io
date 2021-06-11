let links = document.getElementsByClassName('btn-floating');


for (var i = 0; i < links.length; i++) {
    const element = links[i];
    element.addEventListener("mouseover", function (event) {
        element.classList += 'shadowplus ';
    }, false);
    
    element.addEventListener("mouseout", function (event) {
        element.classList[-1].replace('')
    }, false);
}

