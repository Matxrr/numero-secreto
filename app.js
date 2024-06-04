let numeroSecreto = geraNumeroAleatorio(100);
let tentativas  = 1;
let novoJogoButton = document.getElementById("reiniciar");
mensagemInicial();

function mensagemInicial () {
    manipula ("h1", "Advinha número 3000");
    manipula (".texto__paragrafo", "Digite um número de 1 a 100");
  }
  
function verificarChute (){
    let chute = document.querySelector(".container__input").value;
    let tentativaPlural = tentativas > 1 ? "tentativas" : "tentativa";
    let textoH = "Parabéns! Você ganhou";
    let textoP = `O número era: ${numeroSecreto}, e você acertou em ${tentativas} ${tentativaPlural}`;

    if (chute == numeroSecreto){
        manipula("h1", textoH);
        manipula(".texto__paragrafo", textoP);
        novoJogoButton.removeAttribute('disabled');
    }
    else {
        manipula(".texto__paragrafo", dicasNumero());
        tentativas++;
        limparChute();
    }  
};

function manipula (tag, texto){
    let selecionaTag = document.querySelector(tag);
    selecionaTag.innerHTML = texto;
}

function geraNumeroAleatorio (numMax){
    let numeroEscolhido = parseInt(Math.random() * numMax + 1);
    let listaDeNumerosSorteados = [];
    let quantidadeNumeros = listaDeNumerosSorteados.length;
    if (quantidadeNumeros == numMax){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function dicasNumero(){
    let chute = document.querySelector(".container__input").value;

    if(chute < numeroSecreto ){
        return(`o numero secreto é maior que ${chute}`)
    }else{
        return(`o numero secreto é menor que ${chute}`)
    }
}

function limparChute(){
    let chute = document.querySelector(".container__input");
    chute.value = "";
}

function zerarJogo() { 
    mensagemInicial();
    limparChute();
    numeroSecreto = geraNumeroAleatorio(10);
    novoJogoButton.setAttribute('disabled', true);
    tentativas = 1;
}
