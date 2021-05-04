// 1º passo - capturar os campos
const campoNomes = document.getElementById('nomes');
const qtdResultadosInput = document.getElementById('qtdResultados');
const btnFecharResultado = document.getElementById('btnFecharResultado');
const numeroInicialInput = document.getElementById('inBetweenNumber');
const numeroFinalInput = document.getElementById('andNumber');
const buttonSortear = document.getElementById('buttonSortear');

const buttonLimpar = document.getElementById('buttonLimpar');

const painelResultado = document.getElementById('painelResultado');
const resultado = document.getElementById('resultado');


// 2º passo - fazer o sorteio baseado no valores dos campos
// a) gerar número aleatório
// b) limitar - adicionar um 'range' e gerar um numero
//    dentro de um intervalo de número

// c) fazer isso uma certa quantidade de vezes(utilizar o qtdResultadosInput)



function verificaEscolha(){
    const selecaoNome  = document.getElementById('selecaoNome').checked
    if(selecaoNome == true){
        
        sortearNomes()

    }else{
        sortearNumeros()
    }
}

function sortearNomes(){
    const listaNomes = document.getElementById('nomes').value;
    const arrayNomes = listaNomes.split(",")
    const posicaoNome =  gerarNumeroAleatorio(0,arrayNomes.length-1)
    limparResultado()
    mostrarNaTela(arrayNomes[posicaoNome])
    painelResultado.classList.add('mostrarResultado');
}

function sortearNumeros(){
    const qtdResultados = parseInt(qtdResultadosInput.value);
    const numeroInicial = parseInt(numeroInicialInput.value);
    const numeroFinal = parseInt(numeroFinalInput.value);
    
    // 3º passo - imprimir o resultado
    limparResultado()
    for(let i = 0; i < qtdResultados; i++){
        const randomNumber = gerarNumeroAleatorio(numeroInicial, numeroFinal);

        if(i < qtdResultados - 1){
            mostrarNaTela(randomNumber + '-');
        } else{
            mostrarNaTela(randomNumber);
        }
    }
    painelResultado.classList.add('mostrarResultado');
}

function mostrarNaTela(string){
    
    resultado.innerText += string
}

function gerarNumeroAleatorio(numeroInicial, numeroFinal){
    return Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
}

buttonSortear.addEventListener('click', verificaEscolha);


function limparCampos(){
    qtdResultadosInput.value = '';
    numeroInicialInput.value = '';
    numeroFinalInput.value = '';
    campoNomes.value = "";
}

function limparResultado(){
    resultado.innerText = '';
}
buttonLimpar.addEventListener('click', limparCampos);


btnFecharResultado.addEventListener('click', fecharResultado);
function fecharResultado(){
    painelResultado.classList.remove('mostrarResultado');
    
}