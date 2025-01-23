/** @type {HTMLElement?} */
let boxInfosJogador = null;
const wrapperInfosJogadores = document.getElementById('infos-jogadores');

export function initCriacaoJogador() {
    const btnCriarJogador = document.getElementById('btn-criar-jogador');
    boxInfosJogador = document.querySelector('.js-infos-jogador');

    boxInfosJogador.querySelector('.js-excluir-jogador')
        .addEventListener('click', listenerRemoverCamposJogador);
    btnCriarJogador.addEventListener('click', listenerCriarCamposJogador);
}

/** @this {HTMLElement} */
function listenerCriarCamposJogador() {
    const novaBoxInfosJogador = boxInfosJogador.cloneNode(true);

    novaBoxInfosJogador.querySelectorAll('input')
        .$forEach(input => (input.value = ''));
    novaBoxInfosJogador.querySelector('.js-excluir-jogador')
        .addEventListener('click', listenerRemoverCamposJogador);

    wrapperInfosJogadores.appendChild(novaBoxInfosJogador);
}

/** @this {HTMLElement} */
function listenerRemoverCamposJogador() {
    this.parentElement.remove();
}