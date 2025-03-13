const FilmesArray = [
    {
        titulo: "Rambo",
        genero: "Ação",
        ano: "6 de novembro de 1982",
        classificacao: "+14"
    },
    {
        titulo: "O Poderoso Chefão",
        genero: "Crime/Drama",
        ano: "24 de março de 1972",
        classificacao: "+16"
    },
    {
        titulo: "Interestelar",
        genero: "Ficção Científica",
        ano: "6 de novembro de 2014",
        classificacao: "+12"
    },
    {
        titulo: "Vingadores: Ultimato",
        genero: "Ação/Fantasia",
        ano: "25 de abril de 2019",
        classificacao: "+12"
    },
    {
        titulo: "Titanic",
        genero: "Romance/Drama",
        ano: "19 de dezembro de 1997",
        classificacao: "+12"
    }
];

FilmesArray.forEach((filme, indice) => {
    console.log(`${indice}: ${filme.titulo} - ${filme.genero} - 
    ${filme.ano} - Classificação: ${filme.classificacao}`);
});