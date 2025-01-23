import { partidaWrapper } from "../../data/index.js";
import { getAllComponentesCrime } from "../../data/componente-crime.js";
import { Jogador } from "../../model/Jogador.js";
import { TipoComponenteCrime } from "../../model/ComponenteCrime.js";
import { Partida } from "../../model/Partida.js";

/**
 * inicia uma partida do zero
 * @param {Array<Jogador>} jogadores 
 */
export function criarPartida(jogadores) {
    partidaWrapper.partida = new Partida(
        jogadores,
        getAllComponentesCrime(),
        null,
        false
    );

    return partidaWrapper.partida;
}

export function isPodeIniciarPartida() {
    // TODO validar dados
    return true;
}

/** @returns {Array<Jogador>} */
export function gerarJogadores() {
    const infosJogadores = document.querySelectorAll('.js-infos-jogador');

    return infosJogadores.$map((infosDiv, i) => {
        const jogador = new Jogador();

        infosDiv.querySelectorAll('input').$forEach((input) => {
            jogador[input.name] = input.value;
        });

        jogador.id = i;

        return jogador;
    });
}

export function popularSelectsPalpite() {
    const selectsPalpite = document.querySelectorAll('.js-select-palpite');

    selectsPalpite.$forEach((select) => {
        const docFragment = document.createDocumentFragment();

        getterSelectPalpiteData[select.dataset.palpite]()
            .forEach((optionData) => {
                const option = document.createElement('option');

                option.text = optionData.label;
                option.value = optionData.value;

                docFragment.appendChild(option);
            });

        select.appendChild(docFragment);
    });
}

const getterSelectPalpiteData = {
    JOGADOR: () => {
        return getJogadores();
    },

    ARMA: () => {
        return getComponentesCrimeDoTipo(TipoComponenteCrime.ARMA);
    },

    SUSPEITO: () => {
        return getComponentesCrimeDoTipo(TipoComponenteCrime.SUSPEITO);
    },

    LOCAL: () => {
        return getComponentesCrimeDoTipo(TipoComponenteCrime.LOCAL);
    },

    JOGADOR_RESPOSTA: () => {
        return getJogadores();
    },

    COMPONENTE_CRIME_RESPOSTA: () => {
        return getAllComponentesCrime()
            .map((componenteCrime) => {
                return { label: componenteCrime.nome, value: componenteCrime.id }
            });
    }
};

function getJogadores() {
    return partidaWrapper.partida.jogadores.map((jogador) => {
        return {
            label: jogador.nome,
            value: jogador.id
        }
    });
}

/**
 * @param {TipoComponenteCrime} tipoComponenteCrime 
 * @returns {Array<{ label: string; value: string }>}
 */
function getComponentesCrimeDoTipo(tipoComponenteCrime) {
    return partidaWrapper.partida.componentesCrime
        .filter((componenteCrime) => {
            return componenteCrime.tipo === tipoComponenteCrime;
        })
        .map((componenteCrime) => {
            return {
                label: componenteCrime.nome,
                value: componenteCrime.id
            }
        });
}
