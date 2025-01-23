import { ComponenteCrime } from "../model/ComponenteCrime.js";
import { Jogador } from "../model/Jogador.js";
import { Palpite } from "../model/Palpite.js";

/**
 * @param {Jogador} jogadorRespostaPalpite 
 */
export function podeCriarSuposicao(jogadorRespostaPalpite) {
    return jogadorRespostaPalpite == null;
}

/**
 * @param {Palpite} palpite 
 * @param {Jogador} jogadorCriadorPalpite
 * @param {Jogador} jogadorRespostaPalpite
 */
export function criarSuposicaoSePossivel(palpite, jogadorCriadorPalpite, jogadorRespostaPalpite, force = false) {
    if(!force && !podeCriarSuposicao(jogadorRespostaPalpite)) return;

    // TODO pegar quais componentesCrime não têm dono

    [palpite.arma, palpite.local, palpite.suspeito]
        .forEach((componenteCrime) => {
            !jogadorCriadorPalpite.suposicoes.includes(componenteCrime) &&
                jogadorCriadorPalpite.suposicoes.push(componenteCrime);
        });
}

/**
 * Remove uma suposição de componenteCrime do jogador, caso haja
 * @param {Jogador} jogador 
 * @param {ComponenteCrime} componenteCrime 
 */
export function removerSuposicaoSePossivel(jogador, componenteCrime) {
    if(!jogador.suposicoes.includes(componenteCrime)) return;

    jogador.suposicoes.splice(
        jogador.suposicoes.indexOf(componenteCrime),
        1
    );
}
