const participantes = document.querySelector('.participantes');
const player = document.querySelector('#player');
const insertPlayer = document.querySelector('#insertPlayer');
const removePlayers = document.querySelector('#removePlayers');
const aviso = document.querySelector('#aviso');

var jogadoresNomes = [];

insertPlayer.addEventListener("click", inserirJogador);
function inserirJogador(){
    if(player.value == ""){
        alert('Insira um valor válido!');
    }else{
        jogadoresNomes.push(capitalLetter(player.value));
        var quantidadeJogadores = jogadoresNomes.length;

        if(quantidadeJogadores == 1){
            participantes.innerHTML = `Tem ${quantidadeJogadores} pessoa jogando.<br>É ela:<br>`;
            mostrarJogador();
        }
        else if(quantidadeJogadores == 3){
            participantes.innerHTML = `Já tem ${quantidadeJogadores} pessoas jogando.<br>São elas:<br>`;
            mostrarJogador();
            insertPlayer.removeEventListener("click", inserirJogador);
            insertPlayer.style.background = "#959780";
            
            insertPlayer.addEventListener("click", limpaValue);
        }
        else{
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
                <td><b>Nome:</b> ${Jogador01.nome}</td><td><b>Pontos:</b> ${Jogador01.pontos}</td><td><b>Acertos:</b> ${Jogador01.acertos}</td><td><b>Erros:</b> ${Jogador01.erros}</td><td><button onclick="acertei(Jogador01)">ACERTEI</button></td><td><button onclick="errei(Jogador01)">ERREI</button></td>
            </tr>
        </table>`;
            participantes.insertAdjacentHTML("beforeend", table);
            break;
    
        case 2:
            Jogador02.nome = jogadoresNomes[1];
            var table = `<table>
            <tr>
                <td><b>Nome:</b> ${Jogador01.nome}</td><td><b>Pontos:</b> ${Jogador01.pontos}</td><td><b>Acertos:</b> ${Jogador01.acertos}</td><td><b>Erros:</b> ${Jogador01.erros}</td><td><button onclick="acertei(Jogador01)">ACERTEI</button></td><td><button onclick="errei(Jogador01)">ERREI</button></td>
            </tr>
            <tr>
                <td><b>Nome:</b> ${Jogador02.nome}</td><td><b>Pontos:</b> ${Jogador02.pontos}</td><td><b>Acertos:</b> ${Jogador02.acertos}</td><td><b>Erros:</b> ${Jogador02.erros}</td><td><button onclick="acertei(Jogador02)">ACERTEI</button></td><td><button onclick="errei(Jogador02)">ERREI</button></td>
            </tr>
        </table>`;
            participantes.insertAdjacentHTML("beforeend", table);
            break;
        case 3:
            Jogador03.nome = jogadoresNomes[2];
            var table = `<table>
            <tr>
                <td><b>Nome:</b> ${Jogador01.nome}</td><td><b>Pontos:</b> ${Jogador01.pontos}</td><td><b>Acertos:</b> ${Jogador01.acertos}</td><td><b>Erros:</b> ${Jogador01.erros}</td><td><button onclick="acertei(Jogador01)">ACERTEI</button></td><td><button onclick="errei(Jogador01)">ERREI</button></td>
            </tr>
            <tr>
                <td><b>Nome:</b> ${Jogador02.nome}</td><td><b>Pontos:</b> ${Jogador02.pontos}</td><td><b>Acertos:</b> ${Jogador02.acertos}</td><td><b>Erros:</b> ${Jogador02.erros}</td><td><button onclick="acertei(Jogador02)">ACERTEI</button></td><td><button onclick="errei(Jogador02)">ERREI</button></td>
            </tr>
            <tr>
                <td><b>Nome:</b> ${Jogador03.nome}</td><td><b>Pontos:</b> ${Jogador03.pontos}</td><td><b>Acertos:</b> ${Jogador03.acertos}</td><td><b>Erros:</b> ${Jogador03.erros}</td><td><button onclick="acertei(Jogador03)">ACERTEI</button></td><td><button onclick="errei(Jogador03)">ERREI</button></td>
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
        insertPlayer.removeEventListener("click", limpaValue);
        insertPlayer.addEventListener("click", inserirJogador);
        insertPlayer.style.background = "yellow";
        jogadoresNomes.length = 0;
        return limpaValue();
    }else{
        alert("Não tem jogador para ser removido.");
        return limpaValue();
    }
}

function limpaValue(){
    return player.value = "";
}

// uppercase the first letter
function capitalLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function acertei(jogador){
    jogador.acertos = jogador.acertos + 1;
    jogador.pontos = jogador.pontos + 2;

    alert(`${jogador.nome}${jogador.acertos}`);
}

function errei(jogador){
    jogador.erros = jogador.erros + 1;

    alert(`${jogador.nome}${jogador.erros}`);
}