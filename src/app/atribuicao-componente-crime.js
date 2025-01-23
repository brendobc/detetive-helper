import { ComponenteCrime } from "../model/ComponenteCrime.js";
import { Jogador } from "../model/Jogador.js";
import { removerSuposicaoSePossivel } from "./suposicao-componente-crime.js";

/**
 * @param {Jogador} jogador
 * @param {ComponenteCrime} componenteCrime 
 */
export function podeAtribuirComponenteCrimeAoJogador(jogador, componenteCrime) {
    return componenteCrime != null &&
        !jogador.componentesCrime.includes(componenteCrime);
}

/**
 * @param {Jogador} jogador
 * @param {ComponenteCrime} componenteCrime 
 */
export function atribuirComponenteCrimeAoJogadorSePossivel(jogador, componenteCrime, force = false) {
    if(!force && !podeAtribuirComponenteCrimeAoJogador(jogador, componenteCrime)) return;

    jogador.componentesCrime.push(componenteCrime);
    removerSuposicaoSePossivel(jogador, componenteCrime);
}
