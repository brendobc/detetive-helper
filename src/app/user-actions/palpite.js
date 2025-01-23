import { getComponenteCrimeById } from "../../data/componente-crime.js";
import { getNextId } from "../../data/id-helper.js";
import { getJogadorById } from "../../data/jogador.js";
import { Palpite } from "../../model/Palpite.js";
import { registrarPalpite } from "../palpite.js";

const selectsPalpite = {
    JOGADOR: null,
    ARMA: null,
    SUSPEITO: null,
    LOCAL: null,
    JOGADOR_RESPOSTA: null,
    COMPONENTE_CRIME_RESPOSTA: null
};

export function initPalpiteAction() {
    const btnRegistrarPalpite = document.getElementById('btn-registrar-palpite');

    btnRegistrarPalpite.addEventListener('click', listenerRegistrarPalpite);

    document.querySelectorAll('.js-select-palpite').$forEach((select) => {
        selectsPalpite[select.dataset.palpite] = select;
    });
}

function listenerRegistrarPalpite() {
    registrarPalpite(
        new Palpite(
            getNextId(Palpite.name),
            getComponenteCrimeById(selectsPalpite.ARMA.value),
            getComponenteCrimeById(selectsPalpite.SUSPEITO.value),
            getComponenteCrimeById(selectsPalpite.LOCAL.value)
        ),
        getJogadorById(selectsPalpite.JOGADOR.value),
        getJogadorById(selectsPalpite.JOGADOR_RESPOSTA.value),
        getComponenteCrimeById(selectsPalpite.COMPONENTE_CRIME_RESPOSTA.value)
    );
}
