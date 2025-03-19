//comentario em linha
/*Comentario
em bloco
...
*/
// CTRL + ; = atalho

//Declaração de variáveis no JS
//Por questões de segurança, evitar o uso de VAR
//No escopo global, CONST não pode ser alterado
//CONST x LET x VAR
const nome = "Yago" //uma constante precisa de um valor inicial
let Nome //Permite iniciar a variável vazia
//const nome = "Pedro" -> resulta em um erro pois não posso atribuir variável novamente
//let Nome -> resulta em um erro
var cor = "Azul"
var cor = "Amarelo"
let cidade = " Registro"
cidade = "Registro" //let permite alterar o valor da variável
const message = "Hello, world! Inciando estudos em Javascript"
console.log(message)

//Typeof (esse comando exibira o tipo da variável)

const estado = "SP" //const precisa ter um valor inicial
const idade = "18"
let endereco
console.log(typeof (estado))
//ctrl + " para mostrar o terminal
//F8 para executar o codigo - o console log vai informar que a constante idade é uma string
console.log(typeof (idade))
console.log(typeof (endereco))
//O Javascript é um linguagem de tipagem dinamica (de acordo com o valor da variavel) e
//tipagem fraca (se vc declarar um numero como string, é possivel mesmo assim fazer uma soma com ele)

///////////////////////////////////q

//Tipos de funções no Javascript
function minhaFuncao() {
}

console.log(typeof (minhaFuncao))

// FUNÇÃO SIMPLES
function saudacao() {
    console.log("Olá, bem vindo")
}

saudacao()

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parametro -> é o que a função recebe
// Argumento -> é o dado que é enviado para a função.
function Saudacao(nome) {
    // console.log("Olá, bem-vindo " + nome) // ta concatenando

    //Usando Template Strings
    console.log(`Olá, bem-vindo ${nome}`)
    // ${variavel} -> placeholder
}

Saudacao('Yago') // Argumento xará

function soma(n1, n2) {
    let resultado = n1 + n2
    console.log(`A soma dos dois números foi ${resultado}.`)
}

let n1 = 1
let n2 = 1
soma(n1, n2)

// FUNÇÃO COM RETORNO
function Soma(n1, n2) {
    return n1 + n2
}

Soma(2, 6)
console.log(`A soma dos dois números foi: ${Soma(2, 6)}.`)

function parImpar(n) {
    if (n % 2 == 0) {
        return "Par"
    } else {
        return 'Impar'
    }
}

let num = 4
console.log(parImpar(num))
console.log(`O número ${num} é ${parImpar(num)}! `)

//FUNÇÃO ANÔNIMA
let dobro = function (x) {
    return x * 2
}
console.log(dobro(15))
console.log(`O dobro do número é ${dobro(15)}!`)


console.log(`Função dobro com Arrow Function. Resultado: ${dobro(20)}.`)

//ARROW FUNCTION COM MAIS DE UM PARAMETRO
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${calc(6, '*', 6)}.`)

// simplificando arrow function
const Calc = (num1, operador, num2)=> eval (`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${Calc(7, '*', 7)}.`)

//Função imediata - ultima lol
const life = (function (){
    console.log("Estou sendo executada imediatamente...")
})()
//testea