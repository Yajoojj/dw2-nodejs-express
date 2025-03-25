# 📅 Manipulação de Datas com JavaScript

Este projeto contém uma função em JavaScript que exibe uma data formatada no console com algumas modificações:

## 🚀 Funcionalidades

- Adiciona 3 dias à data atual
- Adiciona 2 meses ao mês atual
- Adiciona 1 ano ao ano atual
- Exibe a data formatada no padrão **dia/mês/ano**

## 💻 Como Usar

1. Copie o código para seu projeto:

```javascript
const dateAtual = new Date();

const dia = dateAtual.getDate();
const mes = dateAtual.getMonth();
const ano = dateAtual.getFullYear();

diaNovo = function() {
    dateAtual.setDate(dateAtual.getDate());
    dateAtual.setMonth(dateAtual.getMonth());
    dateAtual.setFullYear(dateAtual.getFullYear());  
    
    console.log(`Dia ${dia + 3}, Mês ${mes + 2}, Ano ${ano + 1}`);
}

diaNovo();
```

2. Execute o código em um ambiente JavaScript (navegador ou Node.js)

## 📌 Exemplo de Saída

Se a data atual for **25/03/2025**, a saída será:

```
Dia 28, Mês 5, Ano 2026
```

## 🛠 Tecnologias Utilizadas

- JavaScript ES6+
- Node.js (para execução no terminal, opcional)

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se à vontade para modificá-lo e usá-lo da maneira que desejar.

---
Desenvolvido com ❤️ e JS!
