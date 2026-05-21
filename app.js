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
        numeros.push(contador)
        contador = contador+1
    }

    return numeros
}

//função para popular o container com os heróis
const popularContainer = async function(){

    //primeiro passo é chamar a função do loop para gerar um array com os ids que eu quero
    let id = await fazerLoop("1", "24")

    //passando os ids para a função de buscar heróis
    let herois = await buscarHerois(id[1])

    return herois
}

popularContainer()