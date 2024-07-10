/*Teste Utilização JSON e FETCH com API Gratuita*/
/*
Objetivo: Testar utilização de Json e Fetch com base em uma chamada
			GET para a randonmuser.me
Essa API retorna dados de usuarios aleatorios no formato JSON.
*/

const url = 'https://randomuser.me/api/?results=10';

async function getUsers(lista) {
    const resp = await fetch(url);
    const objeto = await resp.json();
    let itens = "";

    for (let pessoa of objeto.results) {
        itens += `<li>${pessoa.name.first} ${pessoa.name.last}</li>`;
    }

    document.getElementById(lista).innerHTML = itens;
}

// Chamada da função para ilustrar o uso (substitua 'lista' pelo ID real do elemento HTML)
// getUsers('lista');
