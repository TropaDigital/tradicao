'use client';

// React
import { useEffect, useMemo, useState } from 'react';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import SkewContainer from '@/components/shared/SkewContainer';

// Styles
import * as S from './styles';

// Images
import notReceived from '../../../../public/images/recursos-nao-procurados.jpg';

// Utils
import formatCnpjAndCpf from '@/utils/formatCnpjAndCpf';
import { useGetAllRecursos } from '@/services/recursos/GET/useGetAllRecursos';
import { CloseIcon } from '@/assets/icons';

interface IReceiveProps {
  id: number;
  cpf: string;
  value: string;
}

export default function NotReceived() {
  const [cpfSearch, setCpfSearch] = useState<string>('');
  const [startSearch, setStartSearch] = useState<any>('');

  const { getRecursos } = useGetAllRecursos(`?pesquisa=${startSearch}`);

  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={notReceived}
          imageAlt="Imagem mostrando plantas crescendo em moedas"
        />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Recursos não procurados" />
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <S.ContainerMid>
          <S.TitleMid>
            Olá, digite seu CPF ou CNPJ abaixo para saber se tem recursos a
            receber.
          </S.TitleMid>

          <S.SubtitleMid>
            Caso tenha alguma duvida, entre em contato pelo telefone 4003-5090
            ou pelo WhatsApp (11) 2928-4804
          </S.SubtitleMid>

          <S.SearchBar>
            <InputDefault
              label="Buscar CPF"
              placeholder="Digite seu CPF ou CNPJ"
              value={formatCnpjAndCpf(cpfSearch)}
              onChange={(e: any) => setCpfSearch(e.target.value)}
              // maxLength={11}
              // onKeyDown={(e: any) => onKeyPressed(e)}
            />

            {cpfSearch && (
              <S.ClearButton
                onClick={() => {
                  setCpfSearch('');
                  setStartSearch('');
                }}
              >
                <CloseIcon />
              </S.ClearButton>
            )}

            <Button
              degrade
              className="button-search"
              type="button"
              disabled={!cpfSearch}
              onClick={() => setStartSearch(cpfSearch)}
            >
              Buscar
            </Button>
          </S.SearchBar>
        </S.ContainerMid>
        {cpfSearch && startSearch && (
          <S.ContainerResult>
            {cpfSearch && startSearch && getRecursos.result.length > 0 ? (
              <div className="valid">Você tem recursos a receber!</div>
            ) : (
              <div className="invalid">Você não tem recurso a receber!</div>
            )}
          </S.ContainerResult>
        )}
      </CenterWrapper>
    </>
  );
}
