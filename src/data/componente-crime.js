import { ComponenteCrime, TipoComponenteCrime } from "../model/ComponenteCrime.js";
import { getNextId } from "./id-helper.js";

let locais, armas, suspeitos;

function criarComponenteCrime(nome, tipo, imagemUrl = '') {
    return new ComponenteCrime(
        getNextId(ComponenteCrime.name),
        nome,
        tipo,
        imagemUrl
    );
}

function gerarArmas() {
    armas = [
        criarComponenteCrime('arma a', TipoComponenteCrime.ARMA),
        criarComponenteCrime('arma b', TipoComponenteCrime.ARMA),
        criarComponenteCrime('arma c', TipoComponenteCrime.ARMA),
    ];

    return armas;
}

function gerarLocais() {
    locais = [
        criarComponenteCrime('local a', TipoComponenteCrime.LOCAL),
        criarComponenteCrime('local b', TipoComponenteCrime.LOCAL),
        criarComponenteCrime('local c', TipoComponenteCrime.LOCAL),
    ];

    return locais;
}

function gerarSuspeitos() {
    suspeitos = [
        criarComponenteCrime('suspeito a', TipoComponenteCrime.SUSPEITO),
        criarComponenteCrime('suspeito b', TipoComponenteCrime.SUSPEITO),
        criarComponenteCrime('suspeito c', TipoComponenteCrime.SUSPEITO),
    ];

    return suspeitos;
}


/** @returns {Array<ComponenteCrime>} */
export function getAllComponentesCrime() {
    return getArmas().concat(
        getLocais(),
        getSuspeitos()
    );
}

/** @returns {Array<ComponenteCrime>} */
export function getArmas() {
    return armas ?? gerarArmas();
}

/** @returns {Array<ComponenteCrime>} */
export function getLocais() {
    return locais ?? gerarLocais();
}

/** @returns {Array<ComponenteCrime>} */
export function getSuspeitos() {
    return suspeitos ?? gerarSuspeitos();
}

export function getComponenteCrimeById(id) {
    return getAllComponentesCrime()
        .find((componenteCrime) => componenteCrime.id === id);
}
