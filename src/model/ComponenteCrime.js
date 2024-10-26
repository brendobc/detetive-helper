export class ComponenteCrime {
    /** @type {Number} */
    id;

    /** @type {String} */
    nome;

    /** @type {TipoComponenteCrime} */
    tipo;
    
    /** @type {String} */
    imagemUrl;

    /**
     * @param {Number} id 
     * @param {String} nome 
     * @param {TipoComponenteCrime} tipo 
     * @param {String} imagemUrl 
     */
    constructor(id, nome, tipo, imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.imagemUrl = imagemUrl;
    }
}


/**
 * @readonly
 * @enum {String} Tipo do componente do crime cometido (parte da resposta da partida). Pode ser:
 * @property {String} ARMA
 * @property {String} SUSPEITO
 * @property {String} LOCAL
 */
export const TipoComponenteCrime = Object.freeze({
    ARMA: 'ARMA',
    SUSPEITO: 'SUSPEITO',
    LOCAL: 'LOCAL'
});
