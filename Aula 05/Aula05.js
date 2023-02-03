const participantes = document.querySelector('.participantes');
const player = document.querySelector('#player');
const insertPlayer = document.querySelector('#insertPlayer');
const removePlayers = document.querySelector('#removePlayers');
const aviso = document.querySelector('#aviso');

var jogadoresNomes = [];

insertPlayer.addEventListener("click", inserirJogador);
function inserirJogador(){
    if(player.value == ""){
        alert('Insira algum valor válido!');
    }else{
        jogadoresNomes.push(player.value);
        var quantidadeJogadores = jogadoresNomes.length;

        if(quantidadeJogadores == 1){
            participantes.innerHTML = `Até agora temos ${quantidadeJogadores} pessoa jogando.<br>É ela: ${jogadoresNomes}.`;
        }
        else if(quantidadeJogadores <= 4){
            var listaJogadores = "";
            for(let pessoas in jogadoresNomes){
                listaJogadores = listaJogadores + `${jogadoresNomes[pessoas]}.`;
            }
            participantes.innerHTML = `Até agora temos ${quantidadeJogadores} pessoas jogando.<br>São elas: ${listaJogadores}`;
        }
        else{
            for(let pessoas in jogadoresNomes){
                listaJogadores = listaJogadores + `${jogadoresNomes[pessoas]}.`;
            }
            participantes.innerHTML = `Já temos ${quantidadeJogadores} pessoas jogando.<br>São elas: ${listaJogadores}`;
            insertPlayer.removeEventListener("click", inserirJogador);
            insertPlayer.style.background = "#959780";
            aviso.insertAdjacentText("beforeend", " Quantidade máxima atingida.");
        }
    }

    player.value = "";
}

removePlayers.addEventListener("click", limparJogadores);
function limparJogadores(){
    jogadoresNomes.length = 0;

    player.value = "";
    participantes.innerHTML = "Jogadores removidos.";
}