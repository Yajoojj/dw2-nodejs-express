let salario = 2000;
console.log(salario);

let salarioDolar = salario * 0.176;
console.log(
    salarioDolar.toLocaleString("en", {style: "currency", currency: "usd"})
);

let salarioEuro = salario * 0.16;
console.log(
    salarioEuro.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
)