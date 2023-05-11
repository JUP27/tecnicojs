
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idade = Number[prompt("Me diga sua idade: ")]
if(idade < 18){
    console.log("Que pena você não pode dirigir :(")
}else{
    console.log("Parabéns você já pode dirigir.")
}

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
const turno = prompt("Qual turno você estuda?")

if(turno == "M"){
    console.log("Bom dia!")
}else if(turno == "V"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite!")
}
// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
let filme = 'Fantasia'
let ingresso = 15 
function cinema(filme, ingresso){
    if(filme === Fantasia && ingresso < 15){
        console.log("Bom Filme!")
    }else{
        console.log("Escolha outro filme :(")
    }
}
cinema(filme, ingresso)
// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
//pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e 
//imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
let genero = prompt("Qual o genero do filme?")
let ingresso2 = prompt("Qual o valor do ingresso?")
let lanche = prompt("Qual lanchinho? ")
function cineminha(genero, ingresso2, lanche){
    if(genero === 'Fantasia' && ingresso2 < 15){
        console.log(`Aproveite o filme e seu ${lanche}!`)
    }else{
        console.log("Escolha outro filme :(")
    }
}
cineminha(genero, ingresso2, lanche)
