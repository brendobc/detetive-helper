import { partidaWrapper } from "../../data";
import { getAllComponentesCrime } from "../../data/componente-crime";

export function criarPartida(jogadores) {
    partidaWrapper.partida = {
        jogadores,
        componentesCrime: getAllComponentesCrime(),
        resposta: null,
        isRespostaPronta: false
    };
}
