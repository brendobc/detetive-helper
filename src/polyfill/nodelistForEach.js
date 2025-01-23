/**
 * Aplica dada função a todos os elementos da lista
 * @param {Function} callBack
 */
NodeList.prototype.$forEach = function $forEach (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
};