import { ComponenteCrime } from "./ComponenteCrime.js";
import { Jogador } from "./Jogador.js";
import { Palpite } from "./Palpite.js";
import { PalpiteJogador } from "./PalpiteJogador.js";

export class Partida {
    /** @type {Array<Jogador} */
    jogadores;

    /** @type {Array<ComponenteCrime>} */
    componentesCrime;

    /** @type {Array<PalpiteJogador>} */
    palpitesFeitos = [];

    /** @type {Palpite} */
    resposta;

    /** @type {Boolean} */
    isRespostaPronta;

    /**
     * @param {Array<Jogador>} jogadores jogadores da partida em ordem
     * @param {Array<ComponenteCrime>} componentesCrime todos os componentesCrime da partida
     * @param {Palpite} resposta palpite com os componentes do crime
     * @param {Boolean} isRespostaPronta indicativo de que o palpite com os componentes do crime está completo
     */
    constructor(jogadores, componentesCrime, resposta, isRespostaPronta = false) {
        this.jogadores = jogadores;
        this.componentesCrime = componentesCrime;
        this.resposta = resposta;
        this.isRespostaPronta = isRespostaPronta;
    }

    /**
     * Adiciona um palpite ao histórico da partida
     * @param {PalpiteJogador} palpite 
     */
    adicionarPalpite(palpite) {
        this.palpitesFeitos.push(palpite);
    }
}