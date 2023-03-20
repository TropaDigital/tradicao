'use client';

import { CloseIcon, LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetUnitsByQuery } from '@/services/unidades/GET/useGetUnitsByQuery';
import { IGetUnit } from '@/services/unidades/types';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import { useEffect, useRef, useState } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  const [allUnits, setAllUnits] = useState<IGetUnit[]>();
  const [actualUnit, setActualUnit] = useState<IGetUnit[]>();
  const [query, setQuery] = useState<string>('');
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const [allCities, setAllCities] = useState<string[]>();
  const [allStates, setAllStates] = useState<string[]>();

  const [cep, setCep] = useState<string>();

  const { unitsByQuery } = useGetUnitsByQuery(query.trim());
  const units = useGetUnitsByQuery('');

  useEffect(() => {
    setAllUnits(units.unitsByQuery);
  }, [units]);

  useEffect(() => {
    const getAllStates = () => {
      const allStates = allUnits?.map((fullUnit: IGetUnit) => {
        return fullUnit.uf;
      });

      const uniqueStates = [...new Set(allStates)].sort();

      setAllStates(uniqueStates);
    };

    getAllStates();
  }, [allUnits]);

  useEffect(() => {
    const getAllCities = (actualFilter: IGetUnit[]) => {
      const allCities = actualFilter?.map((fullUnit: IGetUnit) => {
        return fullUnit.cidade;
      });

      const uniqueCities = [...new Set(allCities)].sort();

      if (!query?.includes('cidade')) {
        setAllCities(query?.includes('uf') ? uniqueCities : []);
      }
    };

    getAllCities(unitsByQuery);
  }, [unitsByQuery]);

  useEffect(() => {
    if (query?.includes('uf=')) {
      setCep('');
    }
  }, [query]);

  const searchUnitByCep = (e: React.ChangeEvent) => {
    e.preventDefault();

    const form: any = document.querySelector('#cep-form');
    const formData = new FormData(form);
    const cep: FormDataEntryValue | string | null = formData.get('cep');

    setQuery('');
    if (cep)
      if (cep?.length > 0) {
        setQuery('cep=' + cep);
        return;
      }
  };

  const getUnitById = (id: string | number) => {
    const unit = unitsByQuery.filter((unit) => {
      return unit.id === id;
    });

    setActualUnit(unit);
    setIsMapModalOpen(true);
  };

  const searchUnitByCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const actualQuery = query;
    const ufQuery = actualQuery?.split('&')?.shift()?.trim();

    if (!e?.target?.value && ufQuery) {
      setQuery(ufQuery);
      return;
    }

    if (!actualQuery?.includes('&cidade=')) {
      setQuery(actualQuery + '&cidade=' + e?.target?.value.trim());
      return;
    }
    setQuery(ufQuery + '&cidade=' + e.target.value.trim());
  };

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
          <S.TitleContainer>
            <MainTitle title="Unidades Credenciadas" />
            <p className="subtitle">
              Conheça nossas unidades. O Consórcio Tradição está sempre pronto
              em atendê-lo
            </p>
          </S.TitleContainer>

          <S.SearchContainer>
            <S.CepContainer>
              <form
                onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
                  searchUnitByCep(e)
                }
                className="cep-form"
                id="cep-form"
              >
                <InputDefault
                  label="Busque pelo CEP"
                  placeholder="CEP"
                  className="cep-input"
                  name="cep"
                  value={cep?.replace(/^(\d{5})(\d{3})$/, '$1-$2')}
                  maxLength={8}
                  minLength={8}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCep(e.target.value.replace(/[^0-9]/g, ''))
                  }
                />
                <Button degrade className="cep-button" type="submit">
                  Buscar
                </Button>
              </form>
            </S.CepContainer>
            <S.CityStateContainer>
              <form id="city-state-form" className="city-state-form">
                <SelectDefault
                  label="ou selecione o Estado e Cidade"
                  className="select-city-state"
                  name="select-state"
                  value={query.includes('cep') ? '' : undefined}
                  onChange={(e) =>
                    e.target.value !== ''
                      ? setQuery('uf=' + e.target.value)
                      : setQuery('')
                  }
                >
                  <option selected value="">
                    Selecione o estado
                  </option>
                  {allStates?.map((state: any) => (
                    <option value={state}>{state}</option>
                  ))}
                </SelectDefault>
                <SelectDefault
                  label=""
                  className="select-city-state"
                  name="select-city"
                  onChange={searchUnitByCity}
                >
                  <option selected value="">
                    Selecione a Cidade
                  </option>
                  {allCities?.map((city: string) => (
                    <option value={city}>{city}</option>
                  ))}
                </SelectDefault>
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
                <S.MapModal openState={isMapModalOpen}>
                  <div ref={wrapperRef}>
                    <div
                      onClick={() => setIsMapModalOpen(false)}
                      style={{ cursor: 'pointer', display: 'inline-block' }}
                    >
                      <CloseIcon />
                    </div>
                    <div className="map-container">
                      <iframe
                        src={`https://maps.google.com/maps?q=${actualUnit[0].latitude}%20${actualUnit[0].longitude}&t=&z=18&ie=UTF8&iwloc=&output=embed`}
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
