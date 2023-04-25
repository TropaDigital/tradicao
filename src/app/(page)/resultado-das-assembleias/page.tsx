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

interface contemplatedProps {
  id: number;
  titleDate: string;
  dateCard: string;
  contemplated: any;
}

export default function Contemplated() {
  const contemplatedInfos: contemplatedProps[] = [
    {
      id: 0,
      titleDate: '28 Mar',
      dateCard: 'Suplência - 23/03/2023',
      contemplated: [
        {
          id: 0,
          name: 'Cristina L',
          group: 1023,
          quota: 938,
          typeContemplated: 'Lance Livre',
          representative: 2180
        },
        {
          id: 1,
          name: 'Railton de J',
          group: 1025,
          quota: 379,
          typeContemplated: 'Lance Livre',
          representative: 1946
        },
        {
          id: 2,
          name: 'Rodrigo S',
          group: 1025,
          quota: 692,
          typeContemplated: 'Lance Livre',
          representative: 1312
        },
        {
          id: 3,
          name: 'Diego A',
          group: 1026,
          quota: 600,
          typeContemplated: 'Lance Livre',
          representative: 1951
        },
        {
          id: 4,
          name: 'Camila D',
          group: 1026,
          quota: 744,
          typeContemplated: 'Lance Livre',
          representative: 1842
        },
        {
          id: 5,
          name: 'Jardane S',
          group: 1027,
          quota: 1210,
          typeContemplated: 'Lance Livre',
          representative: 2124
        },
        {
          id: 6,
          name: 'Elicelia S',
          group: 1026,
          quota: 1452,
          typeContemplated: 'Lance Livre',
          representative: 1577
        },
        {
          id: 7,
          name: 'Lucena V',
          group: 1029,
          quota: 8517,
          typeContemplated: 'Lance Livre',
          representative: 2061
        },
        {
          id: 8,
          name: 'Geneci F',
          group: 1029,
          quota: 8533,
          typeContemplated: 'Lance Livre',
          representative: 1590
        },
        {
          id: 9,
          name: 'Jairo J',
          group: 1026,
          quota: 1115,
          typeContemplated: 'Lance Livre',
          representative: 1842
        }
      ]
    },
    {
      id: 1,
      titleDate: '23 Mar',
      dateCard: 'Excluídos - 23/03/2023',
      contemplated: []
    },
    {
      id: 2,
      titleDate: '23 Mar',
      dateCard: 'Contemplados - 23/03/2023',
      contemplated: []
    },
    {
      id: 3,
      titleDate: '22 Mar',
      dateCard: 'Suplência - 20/03/2023',
      contemplated: []
    },
    {
      id: 4,
      titleDate: '20 Mar',
      dateCard: 'Excluídos - 20/03/2023',
      contemplated: []
    },
    {
      id: 5,
      titleDate: '20 Mar',
      dateCard: 'Contemplados - 20/03/2023',
      contemplated: []
    }
  ];
  const [openList, setOpenList] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<IAssembleia>();

  const { allAssembleias } = useGetAllAssembleias('');

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
      </CenterWrapper>

      <ContemplatedList
        openModal={openList}
        setOpenModal={setOpenList}
        listData={selectedList}
      />
    </>
  );
}
