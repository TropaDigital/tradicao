'use client';

import { LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllUnits } from '@/services/unidades/GET';
import { useEffect } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  const { allUnits } = useGetAllUnits()
  console.log(allUnits)

  return (
    <>
      <SkewContainer
        size="tiny"
        imageSrc={UnidadesBg}
        imageAlt="Imagem do mapa do Brasil"
      />

      <CenterWrapper>
        <S.Container>
          <MainTitle
            title="Unidades Credenciadas"
            subtitle="Conheça nossas unidades. O Consórcio Tradição está sempre pronto em atendê-lo"
          />

          {/* <S.SearchContainer>
            <S.CepContainer>
              <InputDefault
                label="Busque pelo CEP"
                placeholder="CEP"
                className="cep-input"
              />
              <Button degrade className="cep-button">
                Buscar
              </Button>
            </S.CepContainer>
            <S.CityStateContainer>
              <SelectDefault label='ou selecione o Estado e Cidade' className='select-city-state'/>
              <SelectDefault label="" className='select-city-state' />
            </S.CityStateContainer>
          </S.SearchContainer> */}

          {/* <S.UnitsContainer> */}
          <S.UnityCard>
            <div className="location-bg-icon">
              <LocationIcon />
            </div>
            <h3 className="unity-title">CONTEMPLACAR SERVIÇOS FINANCEIROS</h3>
            <p className="unity-description">
              AV. PROFESSOR MELO CANSADO, 1830 - BELVEDERE PARA DE MINAS - MG{' '}
            </p>
            <p className="unity-description">CEP: 99010-040</p>
            <p className="unity-description">Tel 37 999965324</p>
          </S.UnityCard>
          {/* </S.UnitsContainer> */}
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
