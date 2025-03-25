# 💰 Conversor de Salário

Este projeto contém um script em JavaScript que converte um valor de salário em reais para dólares e euros.

## 🚀 Funcionalidades

- Converte um salário fixo (em reais) para:
  - Dólares americanos (USD)
  - Euros (EUR)
- Formata os valores de acordo com as convenções monetárias dos respectivos países
- Exibe os resultados no console

## 📜 Cálculo Utilizado

O script considera as seguintes taxas de conversão:
- **1 BRL = 0.176 USD**
- **1 BRL = 0.16 EUR**

## 💻 Como Usar

1. Copie o código abaixo para seu projeto:

```javascript
let salario = 2000;
console.log(salario);

let salarioDolar = salario * 0.176;
console.log(
    salarioDolar.toLocaleString("en", {style: "currency", currency: "USD"})
);

let salarioEuro = salario * 0.16;
console.log(
    salarioEuro.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
);
```

2. Execute o código em um ambiente compatível com JavaScript, como um navegador ou Node.js.

## 📌 Exemplo de Saída

```
2000
$352.00
160,00 €
```

## 🛠 Tecnologias Utilizadas

- JavaScript ES6+
- Node.js ou Console do Navegador

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se à vontade para modificá-lo e usá-lo da maneira que desejar.

---
Desenvolvido com ❤️ e JS!

