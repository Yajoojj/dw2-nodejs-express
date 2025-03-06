# 📊 Função anônima

Este projeto contém uma função JavaScript que verifica a aprovação de um aluno com base na média de duas notas.

## 🚀 Funcionalidades

- Recebe duas notas como parâmetros
- Calcula a média aritmética
- Retorna "Aprovado" (média > 5) ou "Reprovado" (média ≤ 5)
- Exibe múltiplos resultados no console

## 📜 Fórmula Utilizada

média = (nota1 + nota2) / 2
Resultado = média > 5 ? "Aprovado" : "Reprovado"


## 💻 Como Usar

1. Copie a função para seu projeto:
```javascript
const resultado = (nota1, nota2) => {
    const media = (nota1 + nota2) / 2;
    return media <= 5 ? "Reprovado" : "Aprovado";
};
````
2. Teste com diferentes valores:

console.log(resultado(10, 9)); // Aprovado
console.log(resultado(3, 5));  // Reprovado

## 📌 Exemplo de Saída
Aprovado
Reprovado

## 🛠 Tecnologias Utilizadas

- JavaScript ES6+
- Webstorm
- Node.js (para execução no terminal)

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se à vontade para modificá-lo e usá-lo da maneira que desejar.

---
Desenvolvido com ❤️ e JS!
