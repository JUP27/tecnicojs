
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras 
//(um array que sempre terá exatamente três itens). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"
const mercado = {
    nome: 'Laura',
    listaMercado: ["Leite", "Ovos", "Massa"]
}
const nomeDono = mercado.nome
const listaDono = mercado.listaMercado
console.log(`Olá, ${nomeDono}. Hoje seus itens prioritários na lista de comprar são ${listaDono[0]}, ${listaDono[1]} e ${listaDono[2]}`)
// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto.
const mercadinho = {
    ...mercado,
    novaListaMercado: ["Arozz", "Feijão"]
}
const mer = mercadinho.novaListaMercado
console.log(mercadinho)

// 2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome` 2. O numero de caracteres do valor `nome` 3. O valor de `idade`
// 4. O valor de `profissão` 5. O numero de caracteres do valor `profissão`

// 3. Resolva os passos a seguir: 
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`  
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)  
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.    
//💡  Dica - Aqui você deve usar o método **push()**     
//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
let carrinho = []

const banana = {
    fruta: 'Banana',
    disponibilidade: true
}
const bananinha = banana.fruta

const carambola = {
    fruta: 'Carambola',
    disponibilidade: true
}
const carambolinha = carambola.fruta


// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

