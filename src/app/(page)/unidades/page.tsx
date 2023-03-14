'use client';

import { LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import ModalDefault from '@/components/shared/Modal';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllUnits } from '@/services/unidades/GET';
import { useGetUnitById } from '@/services/unidades/GET/useGetUnityById';
import { useEffect, useState } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  const [actualUnitId, setActualUnitId] = useState<string | number>(0);
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const { allUnits } = useGetAllUnits();
  const { unit } = useGetUnitById(actualUnitId);

  const getActualUnitAddress = (id: string | number) => {
    setActualUnitId(id);
    setIsMapModalOpen(true);
  };

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

          <S.UnitsContainer>
            {allUnits?.map((unit) => (
              <S.UnityCard
                key={unit.id}
                onClick={() => getActualUnitAddress(unit.id)}
              >
                <div className="location-bg-icon">
                  <LocationIcon />
                </div>
                <h3 className="unity-title">{unit.titulo}</h3>
                <p className="unity-description">
                  {unit.endereco} - {unit.bairro} {unit.cidade} -{unit.uf}
                </p>
                <p className="unity-description">CEP: {unit.cep}</p>
                <p className="unity-description">Tel {unit.telefone}</p>
              </S.UnityCard>
            ))}
            {isMapModalOpen && unit && (
              <ModalDefault>
                <div>
                  <iframe
                    src={`https://maps.google.com/maps?q=${unit[0].latitude},%20${unit[0].longitude}&t=&z=18&ie=UTF8&iwloc=&output=embed`}
                    width="600"
                    height="450"
                    style={{ border: 'none', borderRadius: '10px' }}
                  ></iframe>
                </div>
                <div>
                  <h2>{unit[0].titulo}</h2>
                  <h3>Endereço</h3>
                  <p>{unit[0].endereco} - {unit[0].bairro} {unit[0].cidade} - {unit[0].uf}</p>
                </div>
              </ModalDefault>
            )}
          </S.UnitsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
