const valor1 = document.querySelector(".valor1");
const testeSorteBtn = document.querySelector('#testeSorteBtn');
testeSorteBtn.addEventListener("click", testandoSorte);
var entrada = document.querySelector('#entrada');
const dicaDaSorte = document.querySelector('.dicaDaSorte');
var contadorSorte = 0;
const contadorSorteMax = 5;

var min = 1;
var max = 5;
dicaDaSorte.innerHTML = `Seu número é no mínimo ${min} e no máximo ${max}.`;
function gerandoNúmero(){
    const date = new Date();
    return Math.floor(Math.random(date) * (max - min + 1)) + min;
}
const númeroDaSorte = gerandoNúmero();

// função do botão
function testandoSorte(){
    if(entrada.value == númeroDaSorte){
        contadorSorte++;
        switch (contadorSorte) {
            case 1:
                valor1.innerHTML = `Acertou após ${contadorSorte} tentativa!`;

                break;            
            default:
                valor1.innerHTML = `Acertou após ${contadorSorte} tentativas!`;

                break;
        }
        valor1.insertAdjacentText("beforeend", ` O número da sorte é ${númeroDaSorte}.`);
        testeSorteBtn.removeEventListener("click", testandoSorte);
    }
    else if(entrada.value !== númeroDaSorte){
        valor1.innerHTML = `Insira um NÚMERO válido e tente mais uma vez! Esta vez não valeu.`;
    }
    else{
        contadorSorte++;
        if(entrada.value < númeroDaSorte){
            valor1.innerHTML = `Insira um número válido e tente mais uma vez! É a ${contadorSorte}ª vez que você tenta, o número é maior do que ${entrada.value}.`;
        }
        else{
            valor1.innerHTML = `Insira um número válido e tente mais uma vez! É a ${contadorSorte}ª vez que você tenta, o número é menor do que ${entrada.value}.`;
        }
        if(contadorSorte > contadorSorteMax){
            valor1.innerHTML = `Sinto muito, suas tentativas acabaram. O número era ${númeroDaSorte}.`;
            testeSorteBtn.removeEventListener("click", testandoSorte);
            testeSorteBtn.style.background = "gray";
        }
    }
    entrada.value = "";
}

// vale salientar que o Switch já avalia o tipo (===)