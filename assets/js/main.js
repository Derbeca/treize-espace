console.log('JS chargé');

var menu = document.querySelector('.test');
var fermer = document.querySelector('.fermer');
var fermer2 = document.querySelector('.fermer2');
var fermer3 = document.querySelector('.fermer3');
var fermer4 = document.querySelector('.fermer4');
var login = document.querySelector('.monLogin');

menu.addEventListener('click', function() {
    console.log('tu as clické');
    var monMenu = document.querySelector('#monMenu');
    monMenu.style.display = 'block';
    monMenu.classList.add('montrer');
});

fermer.addEventListener('click', function() {
    console.log('tu as clické');
    var monMenu = document.querySelector('#monMenu');
    monMenu.style.display = 'none';
});

login.addEventListener('click', function() {
    console.log('tu as clické');
    var subMenu = document.querySelector('#subMenu');
    subMenu.style.display = 'block';
    subMenu.classList.add('montrer');
});

fermer2.addEventListener('click', function() {
    console.log('tu as clické');
    var subMenu = document.querySelector('#subMenu');
    subMenu.style.display = 'none';
});

/* MODALS LOGIN */

var btn_connexion = document.querySelector('#btn-connexion');
var btn_inscription = document.querySelector('#btn-inscription');

btn_connexion.addEventListener('click', function() {
    console.log('tu as clické');
    var modal_connexion = document.querySelector('#modal-connexion');
    modal_connexion.style.display = 'block';
    subMenu.style.display = 'none';
    modal_connexion.classList.add('montrer');
})

fermer3.addEventListener('click', function() {
    console.log('tu as clické');
    var modal_connexion = document.querySelector('#modal-connexion');
    modal_connexion.style.display = 'none';
});

btn_inscription.addEventListener('click', function() {
    console.log('tu as clické');
    var modal_inscription = document.querySelector('#modal-inscription');
    modal_inscription.style.display = 'block';
    subMenu.style.display = 'none';
    modal_inscription.classList.add('montrer');
})

fermer4.addEventListener('click', function() {
    console.log('tu as clické');
    var modal_inscription = document.querySelector('#modal-inscription');
    modal_inscription.style.display = 'none';
});