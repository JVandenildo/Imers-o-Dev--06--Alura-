const inputNome = document.querySelector('#inputNome');
const inputItem = document.querySelector('#inputItem');
const buttonUser = document.querySelector('#buttonUser');
buttonUser.addEventListener("click", addItem);
const displayItems = document.querySelector('.displayItems');

function addItem(){
    var listaCoisas = [];
    var nomeCoisas = [];

    if(inputItem.value == "" || inputNome.value == "" || inputItem.value.toLowerCase().endsWith(".jpg") == false){
        displayItems.innerHTML = `Insira valores válidos nos dois campos!<br>Aceito imagens no formato \'.jpg\'.`;
        // resetar valores dos inputs
        inputItem.value = "";
        inputNome.value = "";
    }
    else{
        listaCoisas.push(inputItem.value);
        nomeCoisas.push(inputNome.value.toUpperCase());
        displayItems.insertAdjacentHTML("beforeend", `${nomeCoisas[nomeCoisas.length - 1]}<img src="${listaCoisas[listaCoisas.length - 1]}">`);

        // resetar valores dos inputs
        inputItem.value = "";
        inputNome.value = "";
    }
}

