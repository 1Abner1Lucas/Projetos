/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
    - passo 1 -  dar um jeito de pegar o elemento HTML da seta avancar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta avancar
    - passo 3 - fazer aparecer o proximo cartao da lista
    - passo 4 - buscar o cartao que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartao que esta selecionado e esconder
*/
    //Passo 2
//    OBJ1 - passo 1 -  dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
//    OBJ2 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar")

//    - passo 2 - dar um jeito de identificar o clique do usuario na seta avancar
btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length -1) return;

    //Passo 4

    esconderCartaoSelecionado();

    //Passo 3

    cartaoAtual++;
    mostrarCartao();

});
//- passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
btnVoltar.addEventListener("click", function(){

    if (cartaoAtual === 0) return;

    //Passo 4

    /* const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado")*/

    esconderCartaoSelecionado()

    //Passo 3

    cartaoAtual--;
    mostrarCartao()
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
