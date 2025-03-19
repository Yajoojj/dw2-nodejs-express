# 🦸‍♂️ Sistema de Heróis em JavaScript

Este projeto contém uma implementação simples de um sistema de heróis em JavaScript, utilizando classes para representar personagens com habilidades distintas.

## 🚀 Funcionalidades

- Criar heróis com nome, vida, velocidade e força
- Métodos para correr, andar, atacar e defender
- Adição de habilidades específicas para cada herói

## 📜 Estrutura do Código

A classe `Heroi` possui os seguintes atributos e métodos:

```javascript
class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return `${this.nome} está correndo.`;
    }

    andar() {
        return `${this.nome} está andando.`;
    }

    atacar() {
        return `${this.nome} está atacando.`;
    }

    defender() {
        return `${this.nome} está se defendendo.`;
    }
}
```

## 🔥 Exemplos de Heróis Criados

### 🕷️ Homem-Aranha
```javascript
const homemAranha = new Heroi("Homem Aranha", 150, 150);
homemAranha.teia = 0;
homemAranha.sentidoAranha = () => {
    return `${homemAranha.nome} detectou perigo com seu Sentido Aranha!`;
};
console.log(homemAranha.sentidoAranha());
```

### 🦸‍♂️ Super-Man
```javascript
const superMan = new Heroi("Super Man", 250, 250);
superMan.podeVoar = true;
superMan.visaoCalor = () => {
    return `${superMan.nome} queimou alguém com a Visão de Calor!`;
};
console.log(superMan.visaoCalor());
```

### 🦇 Batman
```javascript
const Batman = new Heroi("Batman", 200, 200);
Batman.esconder = true;
Batman.investigar = () => {
    return `${Batman.nome} está investigando alguém!`;
};
console.log(Batman.investigar());
```

## 🛠 Tecnologias Utilizadas

- JavaScript ES6+
- Node.js (para execução no terminal)

## 📌 Como Executar

1. Clone este repositório:
```sh
git clone https://github.com/seuusuario/seurepositorio.git
```
2. Entre no diretório do projeto:
```sh
cd seurepositorio
```
3. Execute o código em um ambiente Node.js:
```sh
node herois.js
```

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se à vontade para modificá-lo e usá-lo da maneira que desejar.

---
Desenvolvido com ❤️ e JS!
