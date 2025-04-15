let listaDeNumerosSorteados = []; // Array para armazenar os números já sorteados
let numeroLimite = 100; // Limite máximo para o número aleatório
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
// Ao invés de definir uma variável para cada elemento HTML, podemos usar uma função que recebe o seletor e o texto como parâmetros 
function exibirTextoTela(tag, texto){
    let tagHTML = document.querySelector(tag);
    tagHTML.innerHTML = texto;
}

//dessa forma, podemos reutilizar a função para definir o texto de qualquer elemento HTML
exibirTextoTela('h1', 'Jogo do Número Secreto');
exibirTextoTela('p', 'Tente adivinhar o número secreto entre 0 e 100!');

//define algumas linhas de código para serem executadas sempre que a função verificarChute() for chamada
function habilitarBotao(){
    let botao = document.querySelector('#reiniciar');
    botao.disabled = false;
}

function desabilitarBotao(){
    let botao = document.querySelector('#reiniciar');
    botao.disabled = true;
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
    // Foca o campo de input após limpar o valor, para facilitar a digitação do próximo chute.
    // Melhora a UX (experiência do usuário)
    campo.focus();
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        habilitarBotao();
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoTela('h1', 'Parabéns! Você acertou!');
        exibirTextoTela('p', mensagemTentativas);
    } else if (chute < numeroAleatorio){
        exibirTextoTela('p', 'O número secreto é maior!');
        limparCampo();
        tentativas++;
    } else {
        exibirTextoTela('p', 'O número secreto é menor!');
        limparCampo();
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroLimite){
        listaDeNumerosSorteados = []; // Reinicia a lista se todos os números já foram sorteados
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); // Chama a função novamente para gerar um novo número aleatório
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número gerado à lista
        return numeroEscolhido; // Retorna o número gerado
    }
}




function novoJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    alert('Agora quero ver adivinhar esse número aqui!');
    desabilitarBotao();
}
