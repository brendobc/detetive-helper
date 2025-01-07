import { Jogador } from "../../../model/Jogador.js";
import { criarPartida } from "../../setup/criacao-partida.js";

export function initCriacaoPartida() {
    const btnIniciarPartida = document.getElementById('btn-iniciar-partida');

    btnIniciarPartida.addEventListener('click', listenerIniciarPartida);
}

function listenerIniciarPartida() {
    criarPartida([
        new Jogador(1, 'Jogador 1', 3, [], []),
        new Jogador(1, 'Jogador 2', 3, [], []),
        new Jogador(1, 'Jogador 3', 3, [], [])
    ]);
}
