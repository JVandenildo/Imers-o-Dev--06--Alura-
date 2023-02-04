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
        // var listaJogadores = "";

        if(quantidadeJogadores == 1){
            participantes.innerHTML = `Tem ${quantidadeJogadores} pessoa jogando.<br>É ela:<br>`;
            mostrarJogador();
        }
        else if(quantidadeJogadores == 3){
            // for(let pessoas in jogadoresNomes){
            //     listaJogadores = listaJogadores + `${jogadoresNomes[pessoas]}.`;
            // }
            participantes.innerHTML = `Já tem ${quantidadeJogadores} pessoas jogando.<br>São elas:<br>`;
            mostrarJogador();
            insertPlayer.removeEventListener("click", inserirJogador);
            insertPlayer.style.background = "#959780";
            
            insertPlayer.addEventListener("click", limpaValue);
        }
        else{
            // for(let pessoas in jogadoresNomes){
            //     listaJogadores = listaJogadores + `${jogadoresNomes[pessoas]}.`;
            // }
            participantes.innerHTML = `Tem ${quantidadeJogadores} pessoas jogando.<br>São elas:<br>`;
            mostrarJogador();
        }
    }
    return limpaValue();
}

function mostrarJogador(){
    switch (jogadoresNomes.length) {
        case 1:
            Jogador01.nome = jogadoresNomes[0];
            participantes.insertAdjacentHTML("beforeend", Jogador01.nome);
            break;
    
        case 2:
            Jogador02.nome = jogadoresNomes[1];
            participantes.insertAdjacentHTML("beforeend", Jogador02.nome);
            break;
        case 3:
            Jogador03.nome = jogadoresNomes[2];
            participantes.insertAdjacentHTML("beforeend", Jogador03.nome);
            break;
    }
}
var Jogador01 = {
    nome: jogadoresNomes[0],
    acertos: 0,
    erros: 0,
    pontos: 0
}

var Jogador02 = {
    nome: jogadoresNomes[1],
    acertos: 0,
    erros: 0,
    pontos: 0
}

var Jogador03 = {
    nome: jogadoresNomes[2],
    acertos: 0,
    erros: 0,
    pontos: 0
}


removePlayers.addEventListener("click", limparJogadores);
function limparJogadores(){
    if(jogadoresNomes.length > 0){
        participantes.innerHTML = "Jogadores removidos.";
        limpaValue();
        return jogadoresNomes.length = 0;
    }else{
        alert("Não tem jogadores para ser removido.");
        return limpaValue();
    }
}

function limpaValue(){
    return player.value = "";
}