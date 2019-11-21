var nombre_aleatoire = Math.floor(Math.random()*101);
var nombre_proposer = document.getElementById('champ_nombre');
var resultat = document.getElementById('resultat_nombre');
var essaie = parseInt(document.getElementById('essaie_nombre'));
var nombre_mauvais = document.getElementById('nombre_valider');
var valider = document.getElementById('valider');

essaie = 10;
console.log(nombre_aleatoire);

function createP () {
    var p = document.createElement('p');
    nombre_mauvais.appendChild(p);
    p.innerHTML = nombre_proposer.value + ',';
}

valider.addEventListener("click", function () {

    if (nombre_proposer.value < nombre_aleatoire) {
        resultat.innerHTML = 'PLUS GRAND';
        resultat.style.color = 'blue';
        essaie--;
        document.getElementById('essaie_nombre').innerHTML = essaie;
        createP();
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
        alert('Vous avez gagner!!!');
        window.location.reload()
    }
    if (essaie === 0) {
        resultat.innerHTML = 'PERDU';
        resultat.style.color = 'red';
        createP();
        nombre_proposer.value = '';
        alert('Vous avez perdu!!!');
        window.location.reload()
    }
});