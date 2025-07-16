const btnClick = document.getElementById('btn-click');
const btnDbclick = document.getElementById('btn-dbclick');
const btnMouseDown = document.getElementById('btn-mousedown');
const btnMouseUp = document.getElementById('btn-mouseup');
const btnContextMenu = document.getElementById('btn-contextmenu');


function mensagem(texto){
    alert("Evento disparado");
}

btnClick.addEventListener('click', mensagem)
btndbClick.addEventListener('dblclick', mensagem)
btnMouseDown.addEventListener('mousedown', mensagem)
btnContextMenu.addEventListener('contextmenu', mensagem)

// Mostra quando voce clicou na página
document.addEventListener('click', ()=> {
    alert("Voce clicou na pagina!")
})

// Mostra a tecla pressionada
document.addEventListener('keyup', function(event) {
    alert("Tecla pressionada: " + event.key)
})

// Mostra a tecla pressionada
document.addEventListener('keydown', function(event) {
    alert("Tecla pressionada: " + event.key)
})

document.addEventListener('keydown', function(event) {
    if (event.key == 'w'){
        alert("Tecla pressionada: " + event.key)
    }

})

// Quando clicado para recarregar o site, documento
document.addEventListener('DOMContentLoaded', () => {
    alert("Página carregada");
})

// Quando tu modifica o tamanho da janela do app que esta visualizando
document.addEventListener('resize', () =>{
    alert("Modifiquei o tamanhoi da janela");
})

// Evento de rolagem na tela, aplicamos quando o header ter troca de cor, conseguir ver oq tem atras e coisas assim
window.addEventListener('', () => {
    alert ("Scrollei com o mouse!");
})
