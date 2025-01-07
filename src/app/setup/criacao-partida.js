import { partidaWrapper } from "../../data/index.js";
import { getAllComponentesCrime } from "../../data/componente-crime.js";
import { Jogador } from "../../model/Jogador.js";

/**
 * inicia uma partida do zero
 * @param {Array<Jogador>} jogadores 
 */
export function criarPartida(jogadores) {
    partidaWrapper.partida = {
        jogadores,
        componentesCrime: getAllComponentesCrime(),
        resposta: null,
        isRespostaPronta: false
    };
}
