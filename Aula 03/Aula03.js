const inputNome = document.querySelector('#inputNome');
const inputItem = document.querySelector('#inputItem');
const buttonUser = document.querySelector('#buttonUser');
buttonUser.addEventListener("click", addItem);
const displayItems = document.querySelector('.displayItems');

function addItem(){
    if(inputItem.value == "" || inputNome.value == ""){
        displayItems.innerHTML = `Insira valores válidos nos dois campos!`;
    }
    else{
        displayItems.innerHTML = `Insira valores válidos nos dois campos!`;
    }
}

