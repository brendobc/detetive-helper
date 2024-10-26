import { ComponenteCrime } from "./ComponenteCrime";

export class Jogador {
    /** @type {Number} */
    id;

    /** @type {String} */
    nome;
    
    /** @type {Number} */
    quantidadeComponentesCrime;

    /** @type {Array<ComponenteCrime>} */
    componentesCrime;

    /** @type {Array<ComponenteCrime>} */
    suposicoes;

    /**
     * @param {Number} id 
     * @param {String} nome 
     * @param {Number} quantidadeComponentesCrime 
     * @param {Array<ComponenteCrime>?} componentesCrime 
     * @param {Array<ComponenteCrime>} suposicoes 
     */
    constructor(id, nome, quantidadeComponentesCrime, componentesCrime = [], suposicoes = []) {
        this.id = id;
        this.nome = nome;
        this.componentesCrime = componentesCrime;
        this.quantidadeComponentesCrime = quantidadeComponentesCrime;
        this.suposicoes = suposicoes;
    }
}