import { initCriacaoPartida } from './app/user-actions/setup/criacao-partida.js';
import { initPalpiteAction } from './app/user-actions/palpite.js';
import { initCriacaoJogador } from './app/user-actions/setup/criacao-jogador.js';
import './polyfill/index.js';
import './data/index.js';

(function init() {
    initCriacaoPartida();
    initCriacaoJogador();
    initPalpiteAction();
})();