let listaDenumerosSorteados = [];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
exibirTextoNatela('h1', 'jogo do número secreto');
exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNatela('h1', 'acertou');
        let palavraTentativa = tentativas >1 ? 'tentativas': 'tentativa';
        let mensagemTentativas= `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNatela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute >numeroSecreto){
            exibirTextoNatela('p','o número secreto é menor ');
        } else{
            exibirTextoNatela('p', 'o número secreto é maior');
        }
    }   tentativas++
        limparcampo();

}

function gerarNumeroAleatorio(){
     let NumeroEscolhido = parseInt(Math.random() *  numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDenumerosSorteados.length;

    if (quantidadeDeElementosNaLista ==3){
        listaDenumerosSorteados =[];
    }






     if (listaDenumerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
     }else {
        listaDenumerosSorteados.push(NumeroEscolhido)
        console.log(listaDenumerosSorteados)
        return NumeroEscolhido;
     }
}
function limparcampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas=1;
    exibirMensagemInicial();
}
