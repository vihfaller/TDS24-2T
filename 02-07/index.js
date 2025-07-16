const nav = document.querySelector('nav');
const menu = document.querySelector('span');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
    nav.classList.toggle('showNav');  // adiciona estilo
    nav.classList.toggle('ativo');    // ativa animação
});

menu.addEventListener('scroll', function() {
    console.log('A página foi rolada. Posição de scroll: ' + window.scrollY);
});


window.addEventListener('scroll', () => {
    if (window.scrolly > 0) {
        header.classList.add('change');
    }else {
        header.classList.remove('change')
    }
})


//Seleciona o elemnento que sera observado ao rolar a pagina
const box = document.querySelector('.box');

// Criar uma instancia do intersectionObserver
// Essa funçao sera executada sempre que o elemento entrar ou sair da tela (viewport)
// Ele retorna uma instancia de intersectionObserver, ou seja, um objeto que tem método como .observe(), .unobserve(), .disconnect()
const observer = new IntersectionObserver((entries, observer) => {

    // O 'entries' é uma lista de elementos observados (pode ter mais de um)
    entries.forEach(entry => {

        //Verifica se o elemento esta visivel na tela (intersectando com a viewport)
        if (entry.isIntersecting){

            //Se estiuver visivel, adiciona a classe que ativa a animaçao
            entry.target.classList.add('visible');

            // Interrompe a observaçao do elemento apos a primeira vez (animaçao so 1 vez)
            observer.unobserve(entry.target);
        }
    });
});

// Começa a obser o elemento selecionado (.box)
// Observar significa pedir ao navegador para monitorar quando um determinado elemento entra ou sai da tela (viewport)
observer.observe(box);
