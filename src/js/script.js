
let menuHamburguer = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navBarLinks = document.querySelectorAll('header nav a');

// FUNÇÃO PARA JANELA DE NAVEGAÇÃO (NÃO FINALIZADO)
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navBarLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
           });
        }
    })
}


// FUNÇÃO MENU HAMBURGUER
menuHamburguer.onclick = () => {
    menuHamburguer.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}
