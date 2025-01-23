/**
 * @file Mantém as referências dos dados utilizados na partida
 */

import { Partida } from "../model/Partida.js";


/**
 * Referência universal para acessar os dados da partida em andamento
 * @type { { partida?: Partida } }
 */
export const partidaWrapper = {
    partida: null
};
