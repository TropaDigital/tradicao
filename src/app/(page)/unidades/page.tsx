'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import { InputDefault } from '@/components/UI/InputDefault';
import MainTitle from '@/components/UI/MainTitle';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  return (
    <>
      <SkewContainer
        size="tiny"
        imageSrc={UnidadesBg}
        imageAlt="Imagem do mapa do Brasil"
      />

      <CenterWrapper>
        <MainTitle
          title="Unidades Credenciadas"
          subtitle="Conheça nossas unidades. O Consórcio Tradição está sempre pronto em atendê-lo"
        />

        <S.SearchContainer>
          <S.CepContainer>
            <DefaultInput label="Busque pelo CEP" placeholder="CEP" />
            <div className='button-container'>
              <Button degrade>Buscar</Button>
            </div>
          </S.CepContainer>
          <S.CityStateContainer>
            <InputDefault label='ou pelo endereço' />
            <DefaultInput />
          </S.CityStateContainer>
        </S.SearchContainer>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
