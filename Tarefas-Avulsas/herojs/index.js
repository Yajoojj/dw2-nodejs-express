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



console.log(`///////////////HOMEM ARANHA///////////////`)

// Criando um Objeto Homem-Aranha
const homemAranha = new Heroi("Homem Aranha","150", 150)
homemAranha.teia = 0;
homemAranha.sentidoAranha= ()=>{
    return `${homemAranha.nome} detectou perigo com seu Sentido Aranha!`;
};
console.log(homemAranha.nome)
console.log(homemAranha.vida)
console.log(homemAranha.velocidade)
console.log(homemAranha.teia)
console.log(homemAranha.sentidoAranha())

console.log(`///////////////SUPER-MAN///////////////`)


// Criando um Objeto SuperMan
const superMan = new Heroi("Super Man","250", 250)
superMan.podeVoar  = 0;
superMan.visaoCalor= ()=>{
    return `${superMan.nome} Queimou alguem com a Visão de Calor!`;
};
console.log(superMan.nome)
console.log(superMan.vida)
console.log(superMan.velocidade)
console.log(superMan.atacar())
console.log(superMan.podeVoar)
console.log(superMan.visaoCalor())

console.log(`///////////////BATMAN///////////////`)

// Criando um Objeto Batman
const Batman = new Heroi("Batman","200", 200)
Batman.esconder  = 1;
Batman.investigar= ()=>{
    return `${Batman.nome} Estas a investigar alguem!`;
};
console.log(Batman.nome)
console.log(Batman.vida)
console.log(Batman.velocidade)
console.log(Batman.atacar())
console.log(Batman.esconder)
console.log(Batman.investigar())