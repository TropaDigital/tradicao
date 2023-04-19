import { useEffect, useState } from 'react';
import {
  BlueContainer,
  BlueLeft,
  BlueLeftInfo,
  BlueRight,
  BlueRightInfo
} from './styles';

import eases from 'eases';

interface IBlueInfoProps {
  quotasTotal: string;
  creditsTotal: string;
}

export default function BlueInfos({
  quotasTotal,
  creditsTotal
}: IBlueInfoProps) {

  const numero = parseInt(quotasTotal);
  const numero2 = parseInt(creditsTotal);

  const [valorCotas, setValorCotas] = useState(0);
  const [valorCredito, setValorCredito] = useState(0);
  const duracao = numero > 50 ? 2000 * (50 / numero) : 2000;
  const duracao2 = numero2 > 50 ? 2000 * (50 / numero2) : 2000;
  const intervalo = duracao / numero;
  const intervalo2 = duracao / numero2;

  useEffect(() => {
    let contador = 0;
    const timer = setInterval(() => {
      contador += 100
      const tempo = contador * intervalo;
      const progresso = tempo / duracao;
      const interpolacao = eases.circInOut(progresso);
      const valor = Math.round(numero * interpolacao);
      setValorCotas(valor);
      if (contador >= duracao / intervalo) {
        clearInterval(timer);
        setValorCotas(numero);
      }
    }, intervalo);
    return () => clearInterval(timer);
  }, [numero, duracao, intervalo]);

  useEffect(() => {
    let contador = 0;
    const timer = setInterval(() => {
      contador+= 88
      const tempo = contador * intervalo2;
      const progresso = tempo / duracao2;
      const interpolacao = eases.circInOut(progresso);
      const valor = Math.round(numero2 * interpolacao);
      setValorCredito(valor);
      if (contador >= duracao2 / intervalo2) {
        clearInterval(timer);
        setValorCredito(numero2);
      }
    }, intervalo2);
    return () => clearInterval(timer);
  }, [numero2, duracao2, intervalo2]);

  return (
    <BlueContainer>
      <BlueLeft>
        <BlueLeftInfo>
          +{valorCotas}
          <div className="title">cotas contempladas</div>
        </BlueLeftInfo>
      </BlueLeft>

      <BlueRight>
        <BlueRightInfo>
          +<span>R$</span>
          {valorCredito}
          <div className="title">em créditos</div>
        </BlueRightInfo>
      </BlueRight>
    </BlueContainer>
  );
}
