/** @typedef {any} T retorno da função callback passada para $map */
/**
 * Aplica dada função a todos os elementos da lista
 * e retorna uma lista com todos os retornos da função callback
 * @param {Function<T>} callbackFn
 * @returns {Array<T>}
 */
NodeList.prototype.$map = function $map(callbackFn) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
        arr.push(callbackFn(this[i], i, this));
    }

    return arr;
}