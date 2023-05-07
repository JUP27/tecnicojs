// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) 
//de um retângulo e imprime no console a área do retângulo.
const altura = prompt("Indique a altura do retângulo:");
const largura = prompt("Indique a altura do retângulo:");

function area(altura,largura){
    return altura * largura
};

console.log(area(altura,largura));

// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento 
//e imprima no console sua idade.

const anoAtual = prompt("Em que ano estamos?");
const anoNasc = prompt("Em que ano você nasceu?");

function idade(anoAtual, anoNasc){
    return anoAtual - anoNasc
};
console.log(idade(anoAtual,anoNasc));

// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa 
//e retorna o seu IMC (Índice de Massa Corpórea).

const pesoKg = Number(prompt("Me diga seu peso:"))
const altMetro = Number(prompt("Me diga sua altura:"))

function calc (pesoKg, altMetro){
    const calc = pesoKg / (altMetro * altMetro)
    console.log(calc)
}

calc(pesoKg, altMetro)

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) 
//indicando se elas possuem o mesmo tamanho.

const srt1 = prompt("Me diga uma palavra:")
const srt2 = prompt("Me diga outra palavra:")

const x = srt1.length
const y = srt2.length

function strings(x, y){

    if(x == y){
        console.log("As plavaras tem o mesmo tamanho")
    }

    else{
        console.log("As palavras não possuem o mesmo tamanho")
    }

}

strings(x, y)

// Condicionais com números 
let s1 = prompt("Me diga um número:")
let s2 = prompt("Me diga um número:")

function comparando(s1, s2){
    if(s1 === s2){
        console.log("Os números são iguais")
    }

    else if(s1 > s2){
        console.log("O primeiro número é maior. Yei!")
    }

    else {
        console.log("O segundo número é maior")
    }
}

// Sempre devemos "chamar" a função pelo seu nome 

comparando(s1,s2)


// 5. Escreva uma função que recebe um array e retorna o último elemento.

const lista = ["Maça", "Banana", "Iogurte", "Manteiga"]

function mercado(lista){
    console.log(lista[3])

}

mercado(lista) 

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) 
//indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.
let entrada1 = 'Copo'
let entrada2 = 'água'
function comparar(entrada1, entrada2){
    ent1 = entrada1.length
    ent2 = entrada2.length
    if(ent1 === ent2){
        console.log("As entradas são iguais")
    }else{
        console.log("Desculpe, as entradas são diferentes.")
    }
}

comparar(entrada1, entrada2, ent1, ent2)

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, 
//e o ano em que sua carteira de identidade foi emitida (nessa ordem). 
//A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. 
//A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

const atual = prompt("Em que ano estamos?");
const nasc = prompt("Em que ano você nasceu?");
const identidade = prompt("Em que ano você fez sua carteira de identidade?");
const idade = Number
const identidade2 = Number

function renovar(atual, nasc, identidade, identidade2, idade){
    idade = atual - nasc
    identidade2 = atual - identidade

    if(idade <= 20 && identidade2 >= 5){
        console.log("Você deve renoavar sua identidade, pois já se passaram 5 anos.")
    }

    else if(idade > 20 && idade <= 50 && identidade2 >= 10){
        console.log("Você deve renoavar sua identidade, pois já se passaram 10 anos.")
    }

    else{
        console.log("Você tem mais de 50 anos, então deve renovar sua identidade de 15 em 15 anos.")
    }
};

renovar(atual, nasc, identidade, identidade2, idade)

//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console

const tarefasArray = []
const tarefaum = prompt("Me diga 1 tarefa da sua rotina:")
const tarefadois = prompt("Me diga 1 tarefa da sua rotina:")
const tarefastres = prompt("Me diga 1 tarefa da sua rotina:")
tarefasArray.push(tarefaum, tarefadois, tarefastres)
console.log(tarefasArray)

const indice = prompt("Me diga o índice de uma tarefa já realizada:")
tarefasArray.splice(indice)
console.log(tarefasArray)


//Fim