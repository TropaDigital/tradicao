'use client';

import { CloseIcon, LocationIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import MainTitle from '@/components/UI/MainTitle';
import { useGetUnitsByQuery } from '@/services/unidades/GET/useGetUnits';
import { IGetUnit } from '@/services/unidades/types';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import { Pagination, Skeleton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import UnidadesBg from '../../../../public/images/unidades_bg.png';
import * as S from './styles';

const UnidadesPage = () => {
  const [query, setQuery] = useState<string>('');
  const [actualPage, setActualPage] = useState<number>(1);

  const [allCities, setAllCities] = useState<string[]>();
  const [allStates, setAllStates] = useState<string[]>();

  const [cep, setCep] = useState<string>();

  const { units, isLoadingUnits } = useGetUnitsByQuery(
    query.trim() + `&limit=16&page=${actualPage}`
  );

  const allUnits = useGetUnitsByQuery(query.trim());

  useEffect(() => {
    getAllCities(allUnits?.units?.dataPaginada);
    if (query?.includes('uf')) return;
    getAllStates();
  }, [allUnits]);

  useEffect(() => {
    if (query?.includes('uf=')) {
      setCep('');
    }
    if (query) {
      setActualPage(1);
    }
  }, [query]);

  const unitsSkeletons = new Array(16).fill('_');

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

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const getAllStates = () => {
    const allStates = allUnits?.units?.dataPaginada?.map(
      (fullUnit: IGetUnit) => {
        return fullUnit.uf;
      }
    );

    const uniqueStates = [...new Set(allStates)].sort();

    setAllStates(uniqueStates);
  };

  const getAllCities = (actualFilter: IGetUnit[]) => {
    const allCities = actualFilter?.map((fullUnit: IGetUnit) => {
      return fullUnit.cidade;
    });

    const uniqueCities = [...new Set(allCities)].sort();

    if (!query?.includes('cidade')) {
      setAllCities(query?.includes('uf') ? uniqueCities : []);
    }
  };

  return (
    <>
      <SkewContainer
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
                  {allStates?.map((state: string) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
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
              {isLoadingUnits && (
                <>
                  {unitsSkeletons.map(() => (
                    <Skeleton variant="rounded" height={207} animation="wave" />
                  ))}
                </>
              )}
              {units?.dataPaginada?.map((unit) => (
                <S.UnityCard key={unit.id}>
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
            </>
          </S.UnitsContainer>
          {units?.paginas > 1 && (
            <Pagination
              count={units?.paginas}
              shape="rounded"
              color="primary"
              page={actualPage}
              onChange={handlePageChange}
              size={window && window.innerWidth <= 375 ? 'small' : 'medium'}
              className="paginationComponent"
            />
          )}
        </S.Container>
      </CenterWrapper>
    </>
  );
};

export default UnidadesPage;
