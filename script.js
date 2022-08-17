function newElement() {
    var li = document.createElement("li");
    var TheInput = document.getElementById("txtinp").value;
    var inp = document.createTextNode(TheInput);
    li.appendChild(inp);
    if (TheInput === '') {
        alert("Kolom Input Kosong!");
    } else {
        document.getElementById("thelist").appendChild(li);
    }
    document.getElementById("txtinp").value = "";

    var span = document.createElement("SPAN");
    var tanda = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(tanda);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var daftar = this.parentElement;
            daftar.style.display = "none";
        }
    }
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var tanda = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(tanda);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var daftar = this.parentElement;
        daftar.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);