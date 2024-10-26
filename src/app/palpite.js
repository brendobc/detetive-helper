import { partidaWrapper } from "../data";
import { ComponenteCrime } from "../model/ComponenteCrime";
import { Jogador } from "../model/Jogador";
import { Palpite } from "../model/Palpite";
import { PalpiteJogador } from "../model/PalpiteJogador";
import { analisarHistoricoPalpites } from "./analise-palpites";
import { atribuirComponenteCrimeAoJogadorSePossivel, podeAtribuirComponenteCrimeAoJogador } from "./atribuicao-componente-crime";
import { criarSuposicaoSePossivel, podeCriarSuposicao } from "./suposicao-componente-crime";

export function registrarPalpite(palpite, jogadorCriador, jogadorResposta, componenteCrimeResposta) {
    const componentesCrimeJogadorMap = gerarComponentesCrimeJogadorMap(palpite);

    const isPrecisaAnalisarPalpite = precisaComputarPalpite(componentesCrimeJogadorMap);
    const isPodeAtribuirComponenteCrimeAoJogador = podeAtribuirComponenteCrimeAoJogador(jogadorResposta, componenteCrimeResposta);
    const isPodeCriarSuposicao = podeCriarSuposicao(jogadorResposta);
    const isPodeAnalisarHistoricoPalpites = isPodeAtribuirComponenteCrimeAoJogador;

    const palpiteJogador = new PalpiteJogador(
        jogadorCriador,
        palpite,
        jogadorResposta,
        componenteCrimeResposta,
        isPrecisaAnalisarPalpite
    );

    partidaWrapper.partida.adicionarPalpite(palpiteJogador);

    atribuirComponenteCrimeAoJogadorSePossivel(jogadorResposta, componenteCrimeResposta, isPodeAtribuirComponenteCrimeAoJogador);
    criarSuposicaoSePossivel(palpite, jogadorCriador, jogadorResposta, isPodeCriarSuposicao);

    isPodeAnalisarHistoricoPalpites &&
        analisarHistoricoPalpites();
    
    console.log('pós palpite', partidaWrapper.partida);
}

/**
 * Gera a relação ComponenteCrime<>Jogador
 * @param {Palpite} palpite 
 * @returns {Map<ComponenteCrime, Jogador>}
 */
export function gerarComponentesCrimeJogadorMap(palpite) {
    const componentesCrimePalpite = [palpite.arma, palpite.local, palpite.suspeito];
    const componentesCrimeJogadorMap = new Map();

    componentesCrimePalpite.forEach((componenteCrime) => {
        componentesCrimeJogadorMap.set(
            componenteCrime,
            partidaWrapper.partida.jogadores.find((jogador) => {
                return jogador.componentesCrime.includes(componenteCrime)
            })
        );
    });

    return componentesCrimeJogadorMap;
}

/**
 * Se os componentesCrime do palpite tiverem seus donos conhecidos,
 * indica-se que não é preciso entrar na análise do histórico
 * @param {Map<ComponenteCrime, Jogador>} componentesCrimeJogadorMap
 * @returns {Boolean}
 */
function precisaComputarPalpite(componentesCrimeJogadorMap) {
    for(const value of componentesCrimeJogadorMap.values()) {
        if(!value) return true;
    }

    return false;
}
