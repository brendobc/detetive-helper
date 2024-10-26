import { ComponenteCrime } from "./ComponenteCrime";
import { Jogador } from "./Jogador";
import { Palpite } from "./Palpite";

export class PalpiteJogador {
    /** @type {Jogador} */
    jogadorCriador;

    /** @type {Palpite} */
    palpite;

    /** @type {Jogador?} */
    jogadorResposta;

    /** @type {ComponenteCrime?} */
    componenteCrimeResposta;

    /** @type {Boolean?} */
    isPrecisaAnalisar;

    /**
     * @param {Jogador} jogadorCriador jogador que fez o palpite
     * @param {Palpite} palpite 
     * @param {Jogador} jogadorResposta jogador que mostrou uma carta em resposta ao palpite feito
     * @param {ComponenteCrime?} componenteCrimeResposta componenteCrime que foi mostrado como resposta ao palpite
     * @param {Boolean?} isPrecisaAnalisar se os três componentesCrime do palpite tiverem seus donos conhecidos, deve ser 'false'
     */
    constructor(jogadorCriador, palpite, jogadorResposta, componenteCrimeResposta, isPrecisaAnalisar) {
        this.jogadorCriador = jogadorCriador;
        this.palpite = palpite;
        this.jogadorResposta = jogadorResposta;
        this.componenteCrimeResposta = componenteCrimeResposta;
        this.isPrecisaAnalisar = isPrecisaAnalisar;
    }
}