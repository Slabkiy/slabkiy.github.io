if (window.location.href.split('#')[1] === undefined) {
    openSection('main');
} else {
    openSection(window.location.href.split('#')[1]);
}
var a = document.getElementsByClassName('nav')[0].getElementsByTagName('a');
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function(e) {
        var id = e.target.parentElement.href.split('#')[1];
        openSection(id);
    });
}

function openSection(id) {

    section = document.getElementsByTagName('section');
    for (var i = 0; i < section.length; i++) {
        section[i].classList.remove('active');
        if (section[i].getAttribute('class') === id) {
            section[i].classList.add('active');
        }
    }

}
var moduleTitle = document.getElementsByClassName('moduleTitle');
for (var k = 0; k < moduleTitle.length; k++) {
    var p = moduleTitle[k].getAttribute('data').split('\\');
    for (var i = 0; i < p.length; i++) {
        var span = p[i].split('');
        var pr = document.createElement('p');
        for (var j = 0; j < span.length; j++) {
            var w = document.createElement('span');
            w.innerText = span[j];
            pr.appendChild(w);
        }
        moduleTitle[k].appendChild(pr);

    }
}
var moduleParagraphs = document.getElementsByClassName('moduleParagraphs');
for (var k = 0; k < moduleParagraphs.length; k++) {
    var p = moduleParagraphs[k].getAttribute('data').split('\\');
    for (var i = 0; i < p.length; i++) {
        var span = p[i].split(' ');
        var pr = document.createElement('p');
        for (var j = 0; j < span.length; j++) {
            var w = document.createElement('span');
            w.innerText = " " + span[j];
            pr.appendChild(w);
        }
        moduleParagraphs[k].appendChild(pr);

    }
}

var black = true;
document.getElementsByClassName('invert-color')[0].addEventListener('click', function(){
    black = !black;
    if(black){
        document.getElementById('invert_color').href="assets/css/black.css";
    }else{
        document.getElementById('invert_color').href="assets/css/white.css";
    }
    
});