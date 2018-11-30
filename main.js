// Global variabel, der tæller det samlede antal.
var total = 0;
// Lægger value til totalværdien.
function add() {
    if (document.getElementById('addValue').value == "1") {
        total = total + 1;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('addValue').value == "2") {
        total = total + 2;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('addValue').value == "5") {
        total = total + 5;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('addValue').value == "10") {
        total = total + 10;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('addValue').value == "50") {
        total = total + 50;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('addValue').value == "100") {
        total = total + 100;
        document.getElementById("total").innerHTML = total;
    }
    else {
        alert("Der skete en fejl.");
    }
}
// Trækker value fra totalværdien.
function subtract() {
    if (document.getElementById('subtractValue').value == "-1") {
        total = total - 1;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('subtractValue').value == "-2") {
        total = total - 2;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('subtractValue').value == "-5") {
        total = total - 5;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('subtractValue').value == "-10") {
        total = total - 10;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('subtractValue').value == "-50") {
        total = total - 50;
        document.getElementById("total").innerHTML = total;
    }
    else if (document.getElementById('subtractValue').value == "-100") {
        total = total - 100;
        document.getElementById("total").innerHTML = total;
    }
    else {
        alert("Der skete en fejl.");
    }
}
// Nulstiller totalværdien.
function reset() {
    total = 0;
    document.getElementById("total").innerHTML = total;
}
// Let's go Leet.
function leet() {
    total = 1337;
    document.getElementById("total").innerHTML = total;
}
// Afspiller lyd, når der lægges til totalværdien.
var addSound = document.getElementById("addSound");
function playAddSound() {
    addSound.play();
}
// Afspiller lyd, når der trækkes fra totalværdien.
var subtractSound = document.getElementById("subtractSound");
function playSubtractSound() {
    subtractSound.play();
}
// Afspiller lyd, når totalværdien nulstilles.
var resetSound = document.getElementById("resetSound");
function playResetSound() {
    resetSound.play();
}
// Afspiller lyd, når der klikkes på leet-ikonet.
var leetSound = document.getElementById("leetSound");
function playLeetSound() {
    leetSound.play();
}