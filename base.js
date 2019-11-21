var nombre_aleatoire = Math.floor(Math.random()*101);
var nombre_proposer = document.getElementById('champ_nombre');
var resultat = document.getElementById('resultat_nombre');
var essaie = parseInt(document.getElementById('essaie_nombre'));
var nombre_petit = document.getElementById('nombre_petit');
var nombre_grand = document.getElementById('nombre_grand');
var valider = document.getElementById('valider');
var rejouer = document.getElementById('rejouer');
var gagner = document.getElementById('gagner');
var felicitation = document.getElementById('felicitation');
var jeux = document.getElementById('jeux');

essaie = 10;
console.log(nombre_aleatoire);

function createG() {
    var p = document.createElement('p');
    nombre_grand.appendChild(p);
    p.innerHTML = nombre_proposer.value + ',';
}

function createP () {
    var p = document.createElement('p');
    nombre_petit.appendChild(p);
    p.innerHTML = nombre_proposer.value + ',';
}

valider.addEventListener("click", function () {

    if (nombre_proposer.value < nombre_aleatoire) {
        resultat.innerHTML = 'PLUS GRAND';
        resultat.style.color = 'blue';
        essaie--;
        document.getElementById('essaie_nombre').innerHTML = essaie;
        createG();
        nombre_proposer.value = '';
        nombre_proposer.focus()
    } else if (nombre_proposer.value > nombre_aleatoire) {
        resultat.innerHTML = 'PLUS PETIT';
        resultat.style.color = 'orange';
        essaie--;
        document.getElementById('essaie_nombre').innerHTML = essaie;
        createP();
        nombre_proposer.value = '';
        nombre_proposer.focus()
    } else if (nombre_proposer.value !== nombre_aleatoire) {
        resultat.innerHTML = 'GAGNER';
        resultat.style.color = 'green';
        document.getElementById('essaie_nombre').innerHTML = essaie;
        createP();
        nombre_proposer.value = '';
        jeux.style.filter = 'blur(15px)';
        gagner.style.display = 'flex';
        felicitation.innerHTML = 'FÉLICITATION, VOUS AVEZ GAGNER!!!'
    }
    if (essaie === 0) {
        resultat.innerHTML = 'PERDU';
        resultat.style.color = 'red';
        createP();
        nombre_proposer.value = '';
        jeux.style.filter = 'blur(15px)';
        gagner.style.display = 'flex';
        felicitation.innerHTML = 'DÉSOLER, VOUS AVEZ PERDU'
    }
});

rejouer.addEventListener("click", function () {
    window.location.reload();
});