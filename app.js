"use strict"

//busca os heróis por meio da url
const buscarHerois = async function(id){
    //variável para guardar o caminho
    let endPoint = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
    //faz a buca no navegador
    let response = await fetch(endPoint)
    //pega só json resposta
    let data = await response.json()

    console.log(data)
    return data
}

//função para fazer o loop
const fazerLoop = function(valor1, valor2){

    //recebendo variáveis
    let inicio  = Number(valor1)
    let fim     = Number(valor2)
    let numeros = []

    //inicio do loop
    let contador = Number(inicio)
    while(contador <= fim){
        numeros.pop(contador)
        console.log(contador)
        contador = contador+1
    }

    return console.log(numeros)
}

fazerLoop("0","30")