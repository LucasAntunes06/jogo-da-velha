const posicoesVitoria = [
    ['11', '12', '13'],
    ['21', '22', '23'],
    ['31', '32', '33'],
    ['11', '21', '31'],
    ['12', '22', '32'],
    ['13', '23', '33'],
    ['11', '22', '33'],
    ['13', '22', '31'],
]

const marcarCasa = (casa) => {
    console.log(casa.id);
    casa.innerHTML = 'X';
}

const tabuleiro = [
    ['11', '12', '13'],
    ['21', '22', '23'],
    ['31', '32', '33'],
]

tabuleiro.forEach(tab => {
    tab.forEach(t => {
        // console.log(t)
        const casa = document.getElementById(t)
        console.log(casa)
        casa.addEventListener("click", () => {
            casa.innerHTML = 'X'
        })
        // casa.addEventListener('click', () => console.log('1'))
    })
})

jogadores = ['Jogador 1', 'Jogador 1'];
jogadas = [];

