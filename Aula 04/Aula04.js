const entradaNome = document.querySelector('#entradaNome');
const entradaItem = document.querySelector('#entradaItem');
const botãoInserir = document.querySelector('#botãoInserir');
botãoInserir.addEventListener("click", inserirItem);
const vitrineItens = document.querySelector('.vitrineItens');
const botãoLimparTudo = document.querySelector('#botãoLimparTudo');
botãoLimparTudo.addEventListener("click", limparTudo);


var listaCoisas = [];
var nomeCoisas = [];

function inserirItem(){

    if(entradaItem.value == "" || entradaNome.value == "" || entradaItem.value.toLowerCase().endsWith(".jpg") == false){
        alert(`Insira valores válidos nos dois campos! Aceito imagens no formato \'.jpg\'.`);
        // reset valores dos inputs
        entradaItem.value = "";
        entradaNome.value = "";
    }
    else{
        // valores teste:
        // Matrix
        // https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG
        listaCoisas.push(entradaItem.value);
        nomeCoisas.push(entradaNome.value.toUpperCase());
        let strngNome = `${nomeCoisas[nomeCoisas.length - 1]}`;
        let imgCoisas = `<img src="${listaCoisas[listaCoisas.length - 1]}"></img>`;
        let botãoLimparItem = `<button onclick="limparItem()">REMOVER</button>`;
        vitrineItens.insertAdjacentHTML("beforeend", strngNome + imgCoisas + botãoLimparItem);

        // reset valores dos inputs
        entradaItem.value = "";
        entradaNome.value = "";
    }
    return true;
}

function limparItem(){
    listaCoisas.pop();
    nomeCoisas.pop();

    return true;
}

function limparTudo(){
    listaCoisas.length = 0;
    nomeCoisas.length = 0;

    vitrineItens.innerHTML = `Está a procura de que?`;
    entradaItem.value = "";
    entradaNome.value = "";
    
    return true;
}
