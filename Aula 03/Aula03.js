const inputNome = document.querySelector('#inputNome');
const inputItem = document.querySelector('#inputItem');
const buttonUser = document.querySelector('#buttonUser');
buttonUser.addEventListener("click", addItem);
const displayItems = document.querySelector('.displayItems');

function addItem(){
    var listaCoisas = [];
    var nomeCoisas = [];

    if(inputItem.value == "" || inputNome.value == "" || inputItem.value.toLowerCase().endsWith(".jpg") == false){
        alert(`Insira valores válidos nos dois campos!<br>Aceito imagens no formato \'.jpg\'.`);
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
}

