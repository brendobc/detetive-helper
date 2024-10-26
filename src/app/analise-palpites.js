import { partidaWrapper } from "../data";
import { ComponenteCrime } from "../model/ComponenteCrime";
import { Jogador } from "../model/Jogador";
import { PalpiteJogador } from "../model/PalpiteJogador";
import { atribuirComponenteCrimeAoJogadorSePossivel } from "./atribuicao-componente-crime";
import { gerarComponentesCrimeJogadorMap } from "./palpite";

export function analisarHistoricoPalpites() {
    const palpitesFeitos = partidaWrapper.partida.palpitesFeitos;
    const respostaPartida = partidaWrapper.partida.resposta;

    let isComponenteCrimeAtribuido = false;

    for(const palpiteJogador of palpitesFeitos) {
        if(!palpiteJogador.isPrecisaAnalisar) return;

        const componentesCrimeJogadorMap = gerarComponentesCrimeJogadorMap(palpiteJogador.palpite);
        const jogadorResposta = palpiteJogador.jogadorResposta;

        const {
            quantidadeComponentesCrimeSemDonoConhecido,
            jogadorRespostaPossuiComponenteCrimeDoPalpite,
            componenteCrimeRespostaSemDono
        } = gerarDadosComponentesCrimeDoPalpite(respostaPartida, componentesCrimeJogadorMap);

        if(quantidadeComponentesCrimeSemDonoConhecido > 0) {
            isComponenteCrimeAtribuido = tratarSuposicoesPertinentesAoPalpite(palpiteJogador);
        }

        if(
            quantidadeComponentesCrimeSemDonoConhecido === 1
            && !jogadorRespostaPossuiComponenteCrimeDoPalpite
        ) {
            atribuirComponenteCrimeAoJogadorSePossivel(jogadorResposta, componenteCrimeRespostaSemDono);
            palpiteJogador.isPrecisaAnalisar = false;
            isComponenteCrimeAtribuido = true;
        } else if(
            quantidadeComponentesCrimeSemDonoConhecido === 0
        ) {
            palpiteJogador.isPrecisaAnalisar = false;
        }

        if(isComponenteCrimeAtribuido) break;
    };
    
    if(isComponenteCrimeAtribuido) {
        analisarHistoricoPalpites();
    }
}

/**
 * @typedef {Object} DadosComponentesCrimeDoPalpite
 * @property {Number} quantidadeComponentesCrimeSemDonoConhecido quantidade de componenteCrime do palpite feito que ainda não se sabe quem os possui
 * @property {Boolean} jogadorRespostaPossuiComponenteCrimeDoPalpite indica se o jogador que respondeu ao palpite já possui um dos componentesCrime do palpite feito
 * @property {ComponenteCrime?} componenteCrimeRespostaSemDono componenteCrime, presente no palpite feito, que não se sabe quem o possui
 */
/**
 * Monta um objeto {@link DadosComponentesCrimeDoPalpite}
 * @param {ComponenteCrime} respostaPartida 
 * @param {Map<ComponenteCrime, Jogador>} componentesCrimeJogadorMap 
 * @returns {DadosComponentesCrimeDoPalpite}
 */
function gerarDadosComponentesCrimeDoPalpite(respostaPartida, componentesCrimeJogadorMap) {
    let quantidadeComponentesCrimeSemDonoConhecido = 0;
    let jogadorRespostaPossuiComponenteCrimeDoPalpite = false;
    let componenteCrimeRespostaSemDono = null;

    for(const [key, value] of componentesCrimeJogadorMap.entries()) {
        if(!value && !respostaPartida.isPossuiComponenteCrime(key)) {
            ++quantidadeComponentesCrimeSemDonoConhecido;
            componenteCrimeRespostaSemDono = key;
        }

        if(!jogadorRespostaPossuiComponenteCrimeDoPalpite && value === jogadorResposta)
            jogadorRespostaPossuiComponenteCrimeDoPalpite = true;
    }

    return {
        quantidadeComponentesCrimeSemDonoConhecido,
        jogadorRespostaPossuiComponenteCrimeDoPalpite,
        componenteCrimeRespostaSemDono
    };
}

/**
 * Monta um map de quais jogadores possuem suposições que dão match com o palpite feito,
 * mas que não mostraram carta alguma mediante ao palpite
 * @param {PalpiteJogador} palpiteJogador 
 * @returns {Map<ComponenteCrime, Jogador>}
 */
function getJogadoresSuposicoesPertinentesAoPalpiteMap(palpiteJogador) {
    const jogadores = [...partidaWrapper.partida.jogadores];
    const componentesCrimePalpite = palpiteJogador.palpite.getComponentesCrime();
    const jogadoresSuposicoesMap = new Map();
    const jogadoresEmOrdemAposPalpite = [];

    const indexJogadorCriador = jogadores.indexOf(palpiteJogador.jogadorCriador);
    const indexJogadorResposta = jogadores.indexOf(palpiteJogador.jogadorResposta);
    const isJogadorRespostaAnteriorNaLista = indexJogadorResposta < indexJogadorCriador;

    jogadoresEmOrdemAposPalpite.push(...jogadores.slice(
        indexJogadorCriador + 1,
        isJogadorRespostaAnteriorNaLista ? jogadores.length : indexJogadorResposta
    ));

    if(isJogadorRespostaAnteriorNaLista) {
        jogadoresEmOrdemAposPalpite.push(...jogadores.slice(0, indexJogadorResposta));
    }

    for(const jogador of jogadoresEmOrdemAposPalpite) {
        for(const suposicao of jogador.suposicoes) {
            if(componentesCrimePalpite.includes(suposicao)) {
                jogadoresSuposicoesMap.set(suposicao, jogador);
            }
        }
    }

    return jogadoresSuposicoesMap;
}

/**
 * @param {PalpiteJogador} palpiteJogador 
 * @returns {Boolean} indica se houve algum tratamento de suposições de jogadores
 */
function tratarSuposicoesPertinentesAoPalpite(palpiteJogador) {
    const jogadoresSuposicoesMap = getJogadoresSuposicoesPertinentesAoPalpiteMap(palpiteJogador);

    if(jogadoresSuposicoesMap.size === 0) return false;

    for(const [suposicao, jogador] of jogadoresSuposicoesMap.entries()) {
        partidaWrapper.partida.resposta.atribuirComponenteCrime(suposicao);
        jogador.suposicoes.splice(jogador.suposicoes.indexOf(suposicao, 1));
    }

    return true;
}
