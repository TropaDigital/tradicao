'use client';

import { CloseIcon, LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetAllUnits } from '@/services/unidades/GET';
import { useGetUnitsByQuery } from '@/services/unidades/GET/useGetUnitsByQuery';
import { useGetUnitById } from '@/services/unidades/GET/useGetUnityById';
import { IGetUnit } from '@/services/unidades/types';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import { useEffect, useRef, useState } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  const [actualUnit, setActualUnit] = useState<IGetUnit[]>();
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [allCities, setAllCities] = useState<any>();
  const [allStates, setAllStates] = useState<string[]>();

  const { unitsByQuery } = useGetUnitsByQuery(query);

  const searchUnitByCep = (e: React.ChangeEvent) => {
    e.preventDefault();

    const form: any = document.querySelector('#cep-form');
    const formData = new FormData(form);
    const cep: any = formData.get('cep');

    if (cep.length > 0) {
      setQuery('cep=' + cep);
      return;
    }
    setQuery('');
  };

  const searchUnitByCityAndState = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form: any = document.querySelector('#city-state-form');
    const formData = new FormData(form);
    const data: any = Object.fromEntries(formData);

    let state: string;
    let city: string;

    setQuery('');
  };

  const getUnitById = (id: string | number) => {
    const unit = unitsByQuery.filter((unit) => {
      return unit.id === id;
    });

    setActualUnit(unit);
    setIsMapModalOpen(true);
  };

  useEffect(() => {
    const getAllStates = () => {
      const allStates = unitsByQuery?.map((fullUnit) => {
        return fullUnit.uf;
      });

      const uniqueStates = [...new Set(allStates)].sort();

      setAllStates(uniqueStates);
    };

    getAllStates();
  }, [unitsByQuery]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsMapModalOpen);

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
              <form onSubmit={(e: any) => searchUnitByCep(e)} id="cep-form">
                <InputDefault
                  label="Busque pelo CEP"
                  placeholder="CEP"
                  className="cep-input"
                  name="cep"
                />
                <Button degrade className="cep-button" type="submit">
                  Buscar
                </Button>
              </form>
            </S.CepContainer>
            <S.CityStateContainer>
              <form
                onSubmit={(e: any) => searchUnitByCityAndState(e)}
                id="city-state-form"
              >
                <SelectDefault
                  label="ou selecione o Estado e Cidade"
                  className="select-city-state"
                  name="select-state"
                >
                  <option selected disabled value="null">
                    Selecione o Estado
                  </option>
                  {allStates?.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </SelectDefault>
                <SelectDefault
                  label=""
                  className="select-city-state"
                  name="select-city"
                >
                  <option selected disabled value="null">
                    Selecione a Cidade
                  </option>
                  {allCities?.map((city: string) => (
                    <option value={city}>{city}</option>
                  ))}
                </SelectDefault>
                <Button degrade className="cep-button" type="submit">
                  Buscar
                </Button>
              </form>
            </S.CityStateContainer>
          </S.SearchContainer>

          <S.UnitsContainer>
            <>
              {unitsByQuery?.map((unit) => (
                <S.UnityCard key={unit.id} onClick={() => getUnitById(unit.id)}>
                  <div className="location-bg-icon">
                    <LocationIcon />
                  </div>
                  <h3 className="unity-title">{unit.titulo}</h3>
                  <p className="unity-description">
                    {unit.endereco} - {unit.bairro} {unit.cidade} -{unit.uf}
                  </p>
                  {unit.cep && (
                    <p className="unity-description">CEP: {unit.cep}</p>
                  )}
                  {unit.telefone && (
                    <p className="unity-description">Tel {unit.telefone}</p>
                  )}
                </S.UnityCard>
              ))}

              {isMapModalOpen && actualUnit && (
                <S.MapModal>
                  <div ref={wrapperRef}>
                    <div
                      onClick={() => setIsMapModalOpen(false)}
                      style={{ cursor: 'pointer', display: 'inline-block' }}
                    >
                      <CloseIcon />
                    </div>
                    <div className="map-container">
                      <iframe
                        src={`https://maps.google.com/maps?q=%20${actualUnit[0]?.cep},%20${actualUnit[0].endereco},%20${actualUnit[0]?.uf}&t=&z=18&ie=UTF8&iwloc=&output=embed`}
                        width="600"
                        height="450"
                        allowFullScreen={true}
                        style={{
                          border: 'none',
                          borderRadius: '10px',
                          margin: '15px 0'
                        }}
                      ></iframe>
                    </div>
                    <div>
                      <div className="unit-header">
                        <h2 className="unit-title">{actualUnit[0].titulo}</h2>
                        {actualUnit[0].telefone && (
                          <p className="unit-contact">
                            Contato: {actualUnit[0].telefone}
                          </p>
                        )}
                      </div>
                      <p className="unit-address">
                        {actualUnit[0].endereco} - {actualUnit[0].bairro}{' '}
                        {actualUnit[0].cidade} - {actualUnit[0].uf}
                      </p>
                      {actualUnit[0].cep && (
                        <p className="unit-address">CEP: {actualUnit[0].cep}</p>
                      )}
                    </div>
                  </div>
                </S.MapModal>
              )}
            </>
          </S.UnitsContainer>
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
