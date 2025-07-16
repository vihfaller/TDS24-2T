// 1- cria elemento 2- defina onde ele ira no documento 3- defina texto  4- defina onde ficara com a tag local  

// como ja pegamos o document na const, nao precisa pegar document ou body, direto o id do container que quiser
div.appendChild(paragrafo)
//document.body.appendChild(paragrafo)

document.addEventListener('click', () =>{
    const paragrafo = document.createElement('p');
    const div = document.getElementById('container');
    paragrafo.textContent = "Este paragrafo foi criado via javascript!"
})



const paragrafo = document.querySelector('p')
document.addEventListener('keydown', () => {
    const paragrafo =  document.querySelector('p')
    paragrafo.remove();
})


const form = document.getElementById('formulario')
form.addEventListener('submit', (event) => {
    event.preventDefault(); // nao vai enviar as infos e nem apagar oq escreveu no campo. usamos so para testes
    alert('formulario enviado')
})
