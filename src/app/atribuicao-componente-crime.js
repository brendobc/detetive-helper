import { ComponenteCrime } from "../model/ComponenteCrime";
import { Jogador } from "../model/Jogador";
import { removerSuposicaoSePossivel } from "./suposicao-componente-crime";

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
