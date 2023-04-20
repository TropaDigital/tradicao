import { useEffect, useRef, useState } from 'react';
import {
  BlueContainer,
  BlueLeft,
  BlueLeftInfo,
  BlueRight,
  BlueRightInfo
} from './styles';

import eases from 'eases';

interface IBlueInfoProps {
  quotasTotal: any;
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          iniciarContagem();
          iniciarContagem2()
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
        observer.observe(countRef.current);
      }
  
      return () => {
        observer.disconnect();
      };

    
  }, []); 

  function iniciarContagem() {
    let contador = 0;
    const timer = setInterval(() => {
      contador += 100;
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
  }

  function iniciarContagem2(){
    let contador = 0;
    const timer = setInterval(() => {
      contador += 88;
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
  }

  function formatarNumero(numero: number) {
    const regex = /(\d)(?=(\d{3})+$)/g;
    return numero.toString().replace(regex, '$1.');
  }

  const countRef = useRef(null);

  return (
    <BlueContainer ref={countRef}>
      <BlueLeft>
        <BlueLeftInfo>
          +{formatarNumero(valorCotas)}
          <div className="title">cotas contempladas</div>
        </BlueLeftInfo>
      </BlueLeft>

      <BlueRight>
        <BlueRightInfo>
          +<span>R$</span>
          {formatarNumero(valorCredito)}
          <div className="title">em créditos</div>
        </BlueRightInfo>
      </BlueRight>
    </BlueContainer>
  );
}
