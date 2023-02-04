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
            var table = `<table>
            <tr>
                <td>Nome: ${Jogador01.nome}</td><td>Pontos: ${Jogador01.pontos}</td><td>Acertos: ${Jogador01.acertos}</td><td>Erros: ${Jogador01.erros}</td>
            </tr>
        </table>`;
            participantes.insertAdjacentHTML("beforeend", table);
            break;
    
        case 2:
            Jogador02.nome = jogadoresNomes[1];
            var table = `<table>
            <tr>
                <td>Nome: ${Jogador01.nome}</td><td>Pontos: ${Jogador01.pontos}</td><td>Acertos: ${Jogador01.acertos}</td><td>Erros: ${Jogador01.erros}</td>
            </tr>
            <tr>
                <td>Nome: ${Jogador02.nome}</td><td>Pontos: ${Jogador02.pontos}</td><td>Acertos: ${Jogador02.acertos}</td><td>Erros: ${Jogador02.erros}</td>
            </tr>
        </table>`;
            participantes.insertAdjacentHTML("beforeend", table);
            break;
        case 3:
            Jogador03.nome = jogadoresNomes[2];
            var table = `<table>
            <tr>
                <td>Nome: ${Jogador01.nome}</td><td>Pontos: ${Jogador01.pontos}</td><td>Acertos: ${Jogador01.acertos}</td><td>Erros: ${Jogador01.erros}</td>
            </tr>
            <tr>
                <td>Nome: ${Jogador02.nome}</td><td>Pontos: ${Jogador02.pontos}</td><td>Acertos: ${Jogador02.acertos}</td><td>Erros: ${Jogador02.erros}</td>
            </tr>
            <tr>
                <td><b>Nome:</b> ${Jogador03.nome}</td><td><b>Pontos:</b> ${Jogador03.pontos}</td><td><b>Acertos:</b> ${Jogador03.acertos}</td><td><b>Erros:</b> ${Jogador03.erros}</td>
            </tr>
        </table>`;
            participantes.insertAdjacentHTML("beforeend", table);
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