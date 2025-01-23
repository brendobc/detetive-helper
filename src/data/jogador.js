import { partidaWrapper } from "./index.js";

export function getJogadorById(id) {
    return partidaWrapper.partida.jogadores
        .find((jogador) => jogador.id === id);
}