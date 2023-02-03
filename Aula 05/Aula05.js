const participantes = document.querySelector('.participantes');
const player = document.querySelector('#player');

var jogadoresNomes = [];

function inserirJogador(){
    jogadoresNomes.push(player.value);
    var quantidadeJogadores = jogadoresNomes.length;
    if(quantidadeJogadores > 1){
        var listaJogadores = "";
        for(let pessoas in jogadoresNomes){
            listaJogadores = listaJogadores + `${jogadoresNomes[pessoas]}.`;
        }
        participantes.innerHTML = `Até agora temos ${quantidadeJogadores} pessoas jogando.<br>São elas: ${listaJogadores}`;
    }else{
        participantes.innerHTML = `Até agora temos ${quantidadeJogadores} pessoa jogando.<br>É ela: ${jogadoresNomes}.`;
    }

    player.value = "";
}

function limparJogadores(){
    jogadoresNomes.length = 0;

    player.value = "";
    participantes.innerHTML = "Jogadores removidos.";
}