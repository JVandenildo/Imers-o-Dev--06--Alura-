const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('.valor2');
const valor3 = document.querySelector('.valor3');
const convertCurr = document.querySelector('#converter');
convertCurr.addEventListener("click", converterCurr);

function converterCurr(){
    let taxaDollar = 5.12; // USD
    let taxaEuro = 5.55; // €
    let taxaBitCoins = 0.0000086; // BTC

    const Dollar = parseInt(valor1.value) * taxaDollar;
    const Euro = parseInt(valor1.value) * taxaEuro;
    const BitCoins = valor1.value * taxaBitCoins;
    if(valor1.value == String || valor1.value < 0){
        valor2.innerHTML = `Insira um número válido.`;
    }else{
        valor2.innerHTML = `R\$${valor1.value} corresponde a USD${Dollar.toFixed(2)}, €${Euro.toFixed(2)} e BTC${BitCoins.toFixed(2)}.`;
    }
    return valor1.value = "";
}

const valorTemp = document.querySelector('#valorTemp');
const temp2 = document.querySelector('.temp2');
const temp3 = document.querySelector('.temp3');
const convertTemp = document.querySelector('#convertemp');
convertTemp.addEventListener("click", converterTemp);
function converterTemp(){
    const CemFah = (parseInt(valorTemp.value) * 1.8) + 32;
    const CemK = parseInt(valorTemp.value) + 273;

    if(valorTemp.value == String){
        temp2.innerHTML = `Retorne um valor em número.`;
        valorTemp.value = "";
    }
    else{
        temp2.innerHTML = `${valorTemp.value}°C equivale a ${CemFah} °F.`;
        temp3.innerHTML = `${valorTemp.value}°C equivale a ${CemK} K.`;
        valorTemp.value = "";
    }
}