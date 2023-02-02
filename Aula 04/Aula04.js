const inputNome = document.querySelector('#inputNome');
const inputItem = document.querySelector('#inputItem');
const buttonUser = document.querySelector('#buttonUser');
buttonUser.addEventListener("click", addItem);
const displayItems = document.querySelector('.displayItems');
const clearAllButton = document.querySelector('#clearAllButton');
clearAllButton.addEventListener("click", clearAll);


var listaCoisas = [];
var nomeCoisas = [];

function addItem(){

    if(inputItem.value == "" || inputNome.value == "" || inputItem.value.toLowerCase().endsWith(".jpg") == false){
        alert(`Insira valores válidos nos dois campos! Aceito imagens no formato \'.jpg\'.`);
        // resetar valores dos inputs
        inputItem.value = "";
        inputNome.value = "";
    }
    else{
        // valores teste:
        // Matrix
        // https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG
        listaCoisas.push(inputItem.value);
        nomeCoisas.push(inputNome.value.toUpperCase());
        let strngNome = `${nomeCoisas[nomeCoisas.length - 1]}`;
        let imgCoisas = `<img src="${listaCoisas[listaCoisas.length - 1]}"></img>`;
        displayItems.insertAdjacentHTML("beforeend", strngNome + imgCoisas);

        // resetar valores dos inputs
        inputItem.value = "";
        inputNome.value = "";
    }
    return true;
}

function clearItem(listaCoisas, nomeCoisas){
    ;
}

function clearAll(listaCoisas, nomeCoisas){
    listaCoisas.length = 0;
    nomeCoisas.length = 0;

    displayItems.innerHTML = `Está a procura de que?`;
    inputItem.value = "";
    inputNome.value = "";
    
    return true;
}
