// Entre no documento HTML e pegue o elemento de id btn-click
const btnClick = document.getElementById('btn-click');
const btnHover = document.getElementById('btn-hover');
const title = document.getElementById('title');

/* Adiciono um evento de clique no botão */
btnClick.addEventListener('click', () => {
    alert("Botao clicado!");
});

/* Adoionado um evento de clique no botão */
btnHover.addEventListener('mouseover', () => {
    title.textContent = 'Titulo mudou';
})

btnHover.addEventListener('mouseout', () => {
    title.textContent = 'Este titulo vai mudar';
    title.style.color = 'red';
    title.style.fontSize = '80px';
})

/* Aqui temos que cuidar pq nao aceitam achando que é um array, ent fazer for it se quiser evento em cada um ou utilizar [0] depois pra deixar em todos e ele nao achar q é um array */
const btn = document.getElementsByClassName('btn');

btn[0].addEventListener('click', () => {
    alert('Botao da classe clicado');
})

/* querySelect retorna o PRIMEIRO elemento que ele achar
   pode ser id, class, tag */
const btn2 = document.querySelector('.btn');
btn2.addEventListener('click', () => {
    alert("Botão clicado!")
})

// Pega TODOS os elements
// Pode ser por class, id ou tag
const btns = document.querySelectorAll('button');
btns.addEventListener('click', ()=> {
    title.style.color = 'blue;'
})