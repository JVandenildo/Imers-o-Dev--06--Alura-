const valor1 = document.querySelector(".valor1");
const feelingLucky = document.querySelector('#feelingLucky');
feelingLucky.addEventListener("click", testingLuck);
const entrada = document.querySelector('#entrada');
const luckyTip = document.querySelector('.luckyTip');
// botão para gerar a variável aleatória
// const luckyButton = document.querySelector('#luckyButton');
// luckyButton.addEventListener("click", gettingLuck);
var luckyCount = 0;
var luckyCountMax = 10;

var min = 1;
var max = 10000;
luckyTip.innerHTML = `Seu número está de ${min} a ${max}.`;
const luckyNumber = gettingLuck();
function gettingLuck(){
    const date = new Date();
    return Math.floor(Math.random(date) * (max - min + 1)) + min;
}

// função do botão
function testingLuck(){
    valorTeste.innerHTML = `${luckyNumber}`;
    if(entrada.value == luckyNumber){
        luckyCount++;
        entrada.value = "";
        if(luckyCount == 1){
            valor1.innerHTML = `Acertou após ${luckyCount} tentativa!`;
        }else{
            valor1.innerHTML = `Acertou após ${luckyCount} tentativas!`;
        }
    }
    else if(entrada.value < luckyNumber){
        luckyCount++;
        valor1.innerHTML = `Insira um número válido e tente mais uma vez! Ainda é a ${luckyCount}ª vez que você tenta, o número é maior do que ${entrada.value}.`;
        entrada.value = "";
        if(luckyCount > luckyCountMax){
            valor1.innerHTML = `Sinto muito, suas tentativas acabaram. O número era ${luckyNumber}.`;
            feelingLucky.removeEventListener("click", testingLuck);
        }
    }
    else if(entrada.value > luckyNumber){
        luckyCount++;
        valor1.innerHTML = `Insira um número válido e tente mais uma vez! Ainda é a ${luckyCount}ª vez que você tenta, o número é menor do que ${entrada.value}.`;
        entrada.value = "";
        if(luckyCount > luckyCountMax){
            valor1.innerHTML = `Sinto muito, suas tentativas acabaram. O número era ${luckyNumber}.`;
            feelingLucky.removeEventListener("click", testingLuck);
        }
    }
}