import { ComponenteCrime } from "./ComponenteCrime";
import { Jogador } from "./Jogador";
import { Palpite } from "./Palpite";
import { PalpiteJogador } from "./PalpiteJogador";

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