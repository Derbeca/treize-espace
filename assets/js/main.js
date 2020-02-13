console.log('JS chargé');

var menu = document.querySelector('.test');
var fermer = document.querySelector('.fermer');
var fermer2 = document.querySelector('.fermer2');
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