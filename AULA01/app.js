/**********************************************************************************
 *Objetivo: Apresentar comandos Básico do Node.js 
 * Autor: Aline Alves de Souza
 * Data: 29/01/2025
 * Versão: 1.0.0.0
 **********************************************************************************/
/*

 //Comentário em linha
 /** 
  Comentário em bloco
  * */

/*// Permite escrever o conteúdo de uma string ou objeto no terminal
  console.log('Aula 01')

// Permite criar uma variavel
  var nome = 'Aline'

// exemplo de concatenação de conteúdos string + variável
  console.log('O nome digitado é ' + nome)

//com crase concatena usando `` para colocar a variável dentro do bloco
console.log(`O nome digitado foi ${nome}`)

//Typeof comando para descobrir qual tipo de dados de uma variável ou objeto.
console.log(typeof(nome))

*/
// interagir no terminal precisamos importar uma biblioteca readline do node.js
// require equivale ao nosso import

var readline = require('readline')
// instanciar - iniciar

var entradaDeDados = readline.createInterface({
//criar json
//cria uma interface de comunicacao com o terminal para entrada e saida de dados
//interagindo com o usuário
input: process.stdin,
output: process.stdout    
})


entradaDeDados.question('Digite seu Nome: ', function(nome){
    var nomeUsuario = nome
if(nomeUsuario == ''){
    console.log('Não foi possível processar a requisição, campo obrigatório')
}else{
    
    
    console.log('nome digitadoooo foi ' + String(nomeUsuario).toLocaleUpperCase())
}
})

