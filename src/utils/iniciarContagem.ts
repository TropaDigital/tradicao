import eases from 'eases';
import { Dispatch } from 'react';

export function iniciarContagem(
  numeroContagem: number,
  setState: Dispatch<any>,
  incrementoContador = 100
) {
  let contador = 0;
  const duracao = numeroContagem > 50 ? 2000 * (50 / numeroContagem) : 2000;
  const intervalo = duracao / numeroContagem;

  const timer = setInterval(() => {
    contador += incrementoContador;
    const tempo = contador * intervalo;
    const progresso = tempo / duracao;
    const interpolacao = eases.circInOut(progresso);
    const valor = Math.round(numeroContagem * interpolacao);
    setState(valor);
    if (contador >= duracao / intervalo) {
      clearInterval(timer);
      setState(valor);
    }
  }, intervalo);

  return () => clearInterval(timer);
}
