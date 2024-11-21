let button = document.querySelector('#botao');
const url = 'https://picsum.photos/300';

function PegarImagemAleatoria() {
    let img = document.querySelector('#imagem');
    img.setAttribute('src', url + '?random=' + new Date().getTime());
}

button.addEventListener('click', PegarImagemAleatoria);
