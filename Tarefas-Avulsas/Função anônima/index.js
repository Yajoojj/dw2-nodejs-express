const resultado = (nota1, nota2) => {
    const media = (nota1 + nota2) / 2;
    return media <= 5 ? "Reprovado" : "Aprovado";
};


console.log(resultado(10, 9));
console.log(resultado(3, 5));