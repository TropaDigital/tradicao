'use client';

// React
import { useState } from 'react';

// Styles
import * as S from './styles';

// Images
import closedGroups_bg from '../../../../public/images/grupos-encerrados.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllGrupos } from '@/services/grupos-encerrados/GET/useGetAllGrupos';
import moment from 'moment';
import PaginationData from '@/components/shared/PaginationData';

interface IGroupsProps {
  grupo: number;
  data_encerramento: any;
  primeiro_rateio: string;
  ultimo_rateio: string;
}

export default function ClosedGroups() {
  const [searchGroups, setSearchGroups] = useState<any>('');
  const [actualPage, setActualPage] = useState<number>(1);
  const { allGrupos } = useGetAllGrupos(
    `?pesquisa=${searchGroups}&perPage=10&currentPage=${actualPage}&ordem=desc`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={closedGroups_bg}
          imageAlt="Imagem mostrando plantas crescendo em moedas"
        />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Lista de grupos encerrados" />
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <S.ContainerMid>
        <CenterWrapper>
          <S.SearchField>
            <InputDefault
              label="Buscar"
              placeholder="Digite o número do seu grupo"
              value={searchGroups}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchGroups(e.target.value)
              }
            />
          </S.SearchField>

          <S.Table>
            <S.THead>
              <tr>
                <td className="first">Grupo</td>
                <td>Data encerramento</td>
              </tr>
            </S.THead>
            <tbody>
              {allGrupos?.result.map((row: IGroupsProps) => (
                <tr key={row.grupo}>
                  <td>{row.grupo}</td>
                  <td>
                    {moment(row.data_encerramento?.split('T')[0]).format(
                      'DD/MM/YYYY'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </S.Table>

          <S.KnowMore>
            Para maiores informações entre em contato pelo Whatsapp: (11)
            2928-4804
          </S.KnowMore>

          <PaginationData
            data={allGrupos}
            page={actualPage}
            handlePagination={handlePageChange}
          />
        </CenterWrapper>
      </S.ContainerMid>
    </>
  );
}
