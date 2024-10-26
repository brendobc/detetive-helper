import { ComponenteCrime, TipoComponenteCrime } from "./ComponenteCrime";

export class Palpite {
    /** @type {Number} */
    id;

    /** @type {ComponenteCrime?} */
    arma;

    /** @type {ComponenteCrime?} */
    suspeito;

    /** @type {ComponenteCrime?} */
    local;

    /**
     * @param {Number} id 
     * @param {ComponenteCrime} arma 
     * @param {ComponenteCrime} suspeito 
     * @param {ComponenteCrime} local 
     */
    constructor(id, arma, suspeito, local) {
        this.id = id;
        this.arma = arma;
        this.suspeito = suspeito;
        this.local = local;
    }

    isCompleto() {
        return this.arma && this.suspeito && this.local;
    }

    isPossuiComponenteCrime(componenteCrime) {
        return (
            this.arma === componenteCrime
            || this.local === componenteCrime
            || this.suspeito === componenteCrime
        );
    }

    /**
     * @param {Array<ComponenteCrime>} componentesCrime 
     */
    isPossuiAnyComponenteCrime(componentesCrime) {
        return componentesCrime.some(this.isPossuiComponenteCrime);
    }

    getComponentesCrime() {
        return [
            this.arma,
            this.local,
            this.suspeito
        ];
    }

    /**
     * atribui um componenteCrime ao palpite
     * @param {ComponenteCrime} componenteCrime 
     */
    atribuirComponenteCrime(componenteCrime) {
        switch(componenteCrime.tipo) {
            case TipoComponenteCrime.ARMA:
                this.arma = componenteCrime;
                break;

            case TipoComponenteCrime.LOCAL:
                this.local = componenteCrime;
                break;

            case TipoComponenteCrime.SUSPEITO:
                this.suspeito = componenteCrime;
                break;
        }
    }
}