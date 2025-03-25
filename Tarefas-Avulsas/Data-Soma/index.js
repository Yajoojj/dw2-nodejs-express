const dateAtual = new Date();

const dia = dateAtual.getDate();
const mes = dateAtual.getMonth();
const ano = dateAtual.getFullYear();


diaNovo = function() {
    dateAtual.setDate(dateAtual.getDate());
    dateAtual.setMonth(dateAtual.getMonth());
    dateAtual.setFullYear(dateAtual.getFullYear());

    console.log(`Dia ${dia + 3}, Mês ${mes + 3}, Ano ${ano + 1}`);
}

diaNovo();