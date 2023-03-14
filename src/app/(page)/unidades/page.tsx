'use client';

import { CloseIcon, LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllUnits } from '@/services/unidades/GET/useGetAllUnits';
import { useEffect, useRef, useState } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import Link from 'next/link';
import * as S from './styles';
import { useGetUnitBydId } from '@/services/unidades/GET/useGetUnityById';
import ModalDefault from '@/components/shared/Modal';

const UnidadesPage = () => {
  const [actualAddressId, setActualAddressId] = useState<string | number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { allUnits } = useGetAllUnits();
  const { unit } = useGetUnitBydId(actualAddressId ? actualAddressId : '');

  const getUnitAddress = (id: string | number) => {
    setActualAddressId(id);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'scroll';
  }, [isModalOpen]);

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

          <S.SearchContainer>
            <S.CepContainer>
              <InputDefault label="Busque pelo CEP" placeholder='CEP' className='cep-input' />
              <Button degrade className='cep-button'>Buscar</Button>
            </S.CepContainer>
            <S.CityStateContainer>
              <InputDefault label='ou selecione o Estado e Cidade'/>
              <InputDefault label=""/>
            </S.CityStateContainer>
          </S.SearchContainer>

          <S.UnitsContainer>
            <>
              {allUnits?.map((unit) => (
                <S.UnityCard
                  key={unit.id}
                  onClick={() => getUnitAddress(unit.id)}
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

              {console.log(unit)}

              {isModalOpen && unit && (
                <ModalDefault className="mapModal">
                  <div
                    className="close-modal"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <CloseIcon />
                  </div>
                  <div>
                    <iframe
                      src={`https://maps.google.com/maps?q=${unit[0].latitude},%20${unit[0].longitude}&t&z=18&ie=UTF8&iwloc=&output=embed`}
                      width="600"
                      height="450"
                      style={{
                        border: 'none',
                        marginBottom: '30px',
                        borderRadius: '10px'
                      }}
                      className="map-iframe"
                    ></iframe>
                  </div>
                  <div className="unit-address">
                    <h2 className="unit-title">{unit[0]?.titulo}</h2>
                    <Link href="tel: 11980174431" className="unit-phone-number">
                      Tel: {unit[0]?.telefone}
                    </Link>
                    <p>Endereço: {unit[0]?.endereco}</p>
                    <p>Bairro: {unit[0]?.bairro}</p>
                    <p>Cidade: {unit[0]?.cidade}</p>
                    <p>UF: {unit[0]?.uf}</p>
                  </div>
                </ModalDefault>
              )}
            </>
          </S.UnitsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
