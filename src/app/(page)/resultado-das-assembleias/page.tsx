'use client';

// React
import { useState } from 'react';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import ContemplatedList from '@/components/pages/Contemplados/ListaContemplados';

// Images
import ContempladoBg from '../../../../public/images/contemplados-bg.jpg';
import teste from '../../../../public/images/teste.jpg';

// Icons
import { DefaultBrasao } from '@/assets/icons';
import { useGetAllAssembleias } from '@/services/assembleia/GET/useGetAllAssembleia';

// Moment
import moment from 'moment';
import 'moment/locale/pt-br';
import { IAssembleia } from '@/services/assembleia/types';
import PaginationData from '@/components/shared/PaginationData';

interface contemplatedProps {
  id: number;
  titleDate: string;
  dateCard: string;
  contemplated: any;
}

export default function Contemplated() {
  const [openList, setOpenList] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<IAssembleia>();
  const [actualPage, setActualPage] = useState<number>(1);

  const { allAssembleias } = useGetAllAssembleias(
    `?ordem_tipo=data&currentPage=${actualPage}&perPage=10`
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  return (
    <>
      <S.ContainerTop>
        <SkewContainer
          imageSrc={ContempladoBg}
          imageAlt="Imagem de uma família se abraçando na sala de casa"
        />

        <CenterWrapper>
          <div className="margin">
            <MainTitle title="Resultado das Assembleias" />
          </div>
        </CenterWrapper>
      </S.ContainerTop>

      <CenterWrapper>
        <S.ContainerMid>
          {allAssembleias?.result?.map((row: IAssembleia) => (
            <S.CardContemplated
              key={row.id_assembleia}
              onClick={() => {
                setOpenList(true);
                setSelectedList(row);
              }}
            >
              <S.CardTopContemplated>
                <span>{moment(row.criado).format('DD MMM')}</span>
                <Image
                  src={row?.url_imagem ? row?.url_imagem : teste}
                  width={400}
                  height={200}
                  className="image"
                  alt="Texto genérico"
                />
                <div className="icon">
                  <DefaultBrasao />
                </div>
              </S.CardTopContemplated>

              <S.CardBottomContemplated>{row.titulo}</S.CardBottomContemplated>
            </S.CardContemplated>
          ))}
        </S.ContainerMid>
        <div style={{ marginBottom: '32px', marginRight: '220px' }}>
          <PaginationData
            data={allAssembleias}
            handlePagination={handlePageChange}
            page={actualPage}
          />
        </div>
      </CenterWrapper>

      <ContemplatedList
        openModal={openList}
        setOpenModal={setOpenList}
        listData={selectedList}
      />
    </>
  );
}
