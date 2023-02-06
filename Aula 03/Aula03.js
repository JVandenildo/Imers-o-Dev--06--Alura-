const entradaNome = document.querySelector('#entradaNome');
const entradaItem = document.querySelector('#entradaItem');
const botãoInserir = document.querySelector('#botãoInserir');
botãoInserir.addEventListener("click", adicionarItem);
const vitrineItens = document.querySelector('.vitrineItens');

function adicionarItem(){
    var listaCoisas = [];
    var nomeCoisas = [];

    if(!entradaItem.value || !entradaNome.value || !entradaItem.value.toLowerCase().endsWith(".jpg")){
        alert(`Insira valores válidos nos dois campos! Aceito imagens no formato \'.jpg\'.`);
        // resetar valores dos inputs
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
        vitrineItens.insertAdjacentHTML("beforeend", strngNome + imgCoisas);

        // resetar valores dos inputs
        entradaItem.value = "";
        entradaNome.value = "";
    }
}

