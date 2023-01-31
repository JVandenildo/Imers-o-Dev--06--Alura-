const valor1 = document.querySelector(".valor1");
const valorTeste = document.querySelector(".valorTeste");
const feelingLucky = document.querySelector('#feelingLucky');
feelingLucky.addEventListener("click", testingLuck);
const luckyNumber = document.querySelector("#luckyNumber");
luckyNumber.addEventListener("click", luckyNumberGet);
const entrada = document.querySelector('#entrada');

function luckyNumberGet(){
    let date = new Date();
    const randomNumber = Math.round(10*(Math.random(date)));
    valorTeste.innerHTML = `${randomNumber}`;
    return randomNumber;
}

function testingLuck(){
    var luckyCount = 0;
    if(entrada.value == luckyNumberGet()){
        valor1.innerHTML = `Acertou! O número da sorte é ${luckyNumberGet()}.`
        entrada.value = "";
    }else{
        valor1.innerHTML = `Tente novamente ${luckyNumberGet()}.`;
        luckyCount++;
        entrada.value = "";
    }
}