import { initCriacaoPartida } from './app/user-actions/criacao-partida.js';
import { initPalpiteAction } from './app/user-actions/palpite.js';
import './data/index.js';

(function init() {
    initCriacaoPartida();
    initPalpiteAction();
})();