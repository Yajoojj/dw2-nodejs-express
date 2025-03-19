// Arrays (Vetor ou Lista)

let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Celular", "Tablet", "Notebook"]
console.log(Produtos)

console.log("Exibindo a lista pelos índices...")
console.log(`1- ${Produtos[0]}`)
console.log(`2- ${Produtos[1]}`)
console.log(Produtos[2])
console.log(Produtos[3])

console.log ("Exibindo a lista através do FOR...")
for (let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo a lista através do forEach...")
Produtos.forEach(function(produto){
    console.log(produto)
})

console.log("Exibindo a lista através do forEach com os índices...")
Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})

//Métodos de Manipulação de Vetores
let vetor = ['Laranja', 'Maça', 'Banana']
console.log(`Nosso vetor é o: ${vetor}`)
vetor[3] = 'Morango'
console.log(`Nosso vetor agora é o: ${vetor}`)

//Método PUSH - Insere um novo elemento no final do VETOR
vetor.push('Abacaxi')
console.log(`Nosso vetor agora eh: ${vetor}`)

//Método UNSHIFT - Insere novo elemento no início do VETOR
vetor.unshift ('Pera')
console.log(`Nosso vetor no momento é: ${vetor}`)

let numeros = [6, 8, 2, 800, 200]
console.log(`Nossa lista de números é : ${numeros}`)
console.log(`O número de elementos do vetor é: ${numeros.length}.`)

//Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`)
vetor.sort()
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}.`)
console.log(`Nossa lista de frutas ordenadas é: ${vetor.sort()}.`)

//Ordenação de numeros com sort
console.log(`Nossa lista de números é: ${numeros}.`)
numeros.sort()
console.log(`Agora nossa lista de numeros ordenadas é: ${numeros}.`)


//Ordenando de forma crescente
console.log(numeros.sort((a, b)=> a-b))

//ordenando de forma descrescente
console.log(numeros.sort ((a, b) => b -a))


//////////////////////////////////////////////////////
// OBJETOS LITERAIS (NÃO SÃO DERIVADOS DE CLASSES)
// Objetos possuem Atributos e métodos
// Lado esquerdo: chaves / Lado direito: valores
const pessoa = {}
console.log(typeof(pessoa))


let carro ={
    modelo: "Gol",
    cor: "vermelho",
    // Métodos
    acelerar(){
        console.log("Acelerando ...")
    },
    frear(){
        console.log("Freando")
    },
};
console.log(`O modelo do carro é: ${carro.modelo}`)
console.log(`A cor do carro é: ${carro.cor}.`)
carro.acelerar()
carro.frear()
///////////////////////

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: "3000",
    descricao: "PC Moderno com bom desempenho.",
};
console.log(`O produto ${produto.nome} da marca ${produto.marca}, custa apenas ${produto.preco}. ${produto.descricao}`);

/////////////////////////////

//ARRAY DE OBJETOS

const listaProdutos =[{
    nome: "Computador",
    marca: "Lenovo",
    preco: "3000",
    descricao: "PC Moderno",
},
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: "2000",
        descricao: "Ótima velocidade de processamento",
    },
    {
        nome: "Celular",
        marca: "Iphone",
        preco: "12000",
        descricao: "Muito resistente. Muito barato",
    },
]

    //Exibindo array de objetos com forEach:

   listaProdutos.forEach(produto => {
     console.log(`Produto ${produto.nome}`)
     console.log(`Marca: ${produto.marca}`)
     console.log(`Preco: ${produto.preco}`)
     console.log(`Descricao: ${produto.descricao}`)
    console.log()
   })

console.table(listaProdutos);
