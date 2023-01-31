const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('.valor2');
const valor3 = document.querySelector('.valor3');
const convertButton = document.querySelector('#converter');
convertButton.addEventListener("click", converter);

function converter(){
    let taxaDollar = 5.12; // USD
    let taxaEuro = 5.55; // €
    let taxaBitCoins = 0.0000086; // BTC

    let Dollar = valor1.value * taxaDollar;
    let Euro = valor1.value * taxaEuro;
    let BitCoins = valor1.value * taxaBitCoins;
    if(valor1.value == String || valor1.value < 0){
        valor2.innerHTML = `Insira um número válido.`;
    }else{
        valor2.innerHTML = `R\$${valor1.value} corresponde a USD${Dollar.toFixed(2)}, €${Euro.toFixed(2)} e BTC${BitCoins.toFixed(2)}.`;
    }
    return valor1.value = "";
}