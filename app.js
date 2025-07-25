let amigos = []

let inputAmigos = document.querySelector('#amigo')

let listaAmigos = document.querySelector('#listaAmigos')

let resultado = document.querySelector('#resultado')

function adicionarAmigo(){
    let amigo = inputAmigos.value
    if (amigo == ''){
        alert('Por favor, insira um nome')
    } else {
        amigos.push(amigo)
        console.log(amigos)
        mostrandoAmigos(amigos)
    }
    inputAmigos.value = ''
}

function mostrandoAmigos(lista){
    console.log(listaAmigos)
    listaAmigos.innerHTML = ''
    for(let i = 0; i < lista.length; i++){
        listaAmigos.innerHTML += `<li>${lista[i]}</li>`;
    }
}

function sortearAmigo(){

    if(amigos.length == 0){
        alert("Não há pessoas suficientes para sortear, insira um nome.")
    } else {
        let numeroLimite = amigos.length
        let numeroSorteado = parseInt(Math.random() * numeroLimite)
        console.log(amigos[numeroSorteado])
        console.log(numeroSorteado)
        resultado.innerHTML = `${amigos[numeroSorteado]}`
    }

}