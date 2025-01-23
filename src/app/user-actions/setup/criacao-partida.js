import { criarPartida, gerarJogadores, isPodeIniciarPartida, popularSelectsPalpite } from "../../setup/criacao-partida.js";

export function initCriacaoPartida() {
    const btnIniciarPartida = document.getElementById('btn-iniciar-partida');

    btnIniciarPartida.addEventListener('click', listenerIniciarPartida);
}

function listenerIniciarPartida() {
    if(!isPodeIniciarPartida()) {
        // TODO tratar erros
        return;
    }

    const partida = criarPartida(gerarJogadores());

    popularSelectsPalpite(partida);
}
