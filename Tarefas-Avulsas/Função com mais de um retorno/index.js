function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}


const idade = 8;
console.log(verificarIdade(idade));