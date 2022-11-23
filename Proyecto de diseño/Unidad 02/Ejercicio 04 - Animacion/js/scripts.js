const esDispositivoMovil = () => window.innerWidth <= 768;
console.log(esDispositivoMovil());
const botones = document.querySelector('.contenedor-botones');
botones.innerHTML = `<h1>Titulo de la página</h1> ${botones.innerHTML}`;

const navegacion = document.querySelector('.contenedor-nav-enlaces');

if(esDispositivoMovil()) {
    const menu = document.querySelector('.abrir-menu');

    menu.addEventListener('click', () => {
        
        if(navegacion.classList.contains('activo')) {
            navegacion.classList.remove('transform');
            navegacion.classList.remove('activo');
            navegacion.classList.remove('animate__fadeInRight');

            navegacion.classList.add('animate__animated','animate__fadeOutRight');
            document.querySelector('body').style.overflow = 'visible';
        } else {
            navegacion.classList.add('activo');
            navegacion.classList.add('animate__animated', 'animate__fadeInRight');

            navegacion.classList.remove('animate__fadeOutRight');
            navegacion.classList.remove('transform');
            document.querySelector('body').style.overflow = 'hidden';
        }
        
    }); 
} else {
    navegacion.classList.remove('transform');
}

function quitarEfectos(widtPag) {
    if(widtPag > 768) {  
        navegacion.classList.remove('transform');
        navegacion.classList.remove('animate__animated');
        navegacion.classList.remove('animate__fadeOutRight');
    }else {
        navegacion.classList.add('transform');
    }
}

window.onload = () => {
    window.onresize = () => {
        quitarEfectos(window.innerWidth);
    }
}