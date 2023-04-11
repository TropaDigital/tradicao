'use client';
import { useState } from 'react';

// Next
import Image from 'next/image';

// Styles
import * as S from './styles';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';

// Images
import ContempladoBg from '../../../../public/images/contemplados-bg.jpg';
import teste from '../../../../public/images/teste.jpg';

// Icons
import { DefaultBrasao } from '@/assets/icons';
import ContemplatedList from '@/components/pages/Contemplados/ListaContemplados';

interface contemplatedProps {
    id: number,
    titleDate: string,
    dateCard: string,
    contemplated: any,
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
                    representative: 2180,
                },
                {
                    id: 0,
                    name: 'Railton de J',
                    group: 1025,
                    quota: 379,
                    typeContemplated: 'Lance Livre',
                    representative: 1946,
                },
                {
                    id: 0,
                    name: 'Rodrigo S',
                    group: 1025,
                    quota: 692,
                    typeContemplated: 'Lance Livre',
                    representative: 1312,
                },
                {
                    id: 0,
                    name: 'Diego A',
                    group: 1026,
                    quota: 600,
                    typeContemplated: 'Lance Livre',
                    representative: 1951,
                },
                {
                    id: 0,
                    name: 'Camila D',
                    group: 1026,
                    quota: 744,
                    typeContemplated: 'Lance Livre',
                    representative: 1842,
                },
                {
                    id: 0,
                    name: 'Jardane S',
                    group: 1027,
                    quota: 1210,
                    typeContemplated: 'Lance Livre',
                    representative: 2124,
                },
            ]
        },
        {
            id: 1,
            titleDate: '23 Mar',
            dateCard: 'Excluídos - 23/03/2023',
            contemplated: [],
        },
        {
            id: 2,
            titleDate: '23 Mar',
            dateCard: 'Contemplados - 23/03/2023',
            contemplated: [],
        },
        {
            id: 3,
            titleDate: '22 Mar',
            dateCard: 'Suplência - 20/03/2023',
            contemplated: [],
        },
        {
            id: 4,
            titleDate: '20 Mar',
            dateCard: 'Excluídos - 20/03/2023',
            contemplated: [],
        },
        {
            id: 5,
            titleDate: '20 Mar',
            dateCard: 'Contemplados - 20/03/2023',
            contemplated: [],
        },
    ];
    const [ openList, setOpenList ] = useState<boolean>(false);
    const [ selectedList, setSelectedList ] = useState<contemplatedProps>();

    return (
        <>
            <S.ContainerTop>
                <SkewContainer
                    imageSrc={ContempladoBg} 
                    imageAlt="Imagem de uma família se abraçando na sala de casa"
                />

                <CenterWrapper>
                    <div className="margin">
                        <MainTitle title='Resultado das Assembleias' />
                    </div>
                </CenterWrapper>
                
            </S.ContainerTop>

            <CenterWrapper>
                <S.ContainerMid>
                    {
                        contemplatedInfos.map((row: contemplatedProps) => (
                            <S.CardContemplated 
                                key={row.id}
                                onClick={() => {console.log('log do id', row); setOpenList(true); setSelectedList(row)}}
                            >
                                <S.CardTopContemplated>
                                    <span>{row.titleDate}</span>
                                    <Image 
                                        src={teste}
                                        width={400}
                                        height={200}
                                        className='image'
                                        alt='Texto genérico'
                                    />
                                    <div className="icon">
                                        <DefaultBrasao />
                                    </div>
                                </S.CardTopContemplated>

                                <S.CardBottomContemplated>
                                    {row.dateCard}                                    
                                </S.CardBottomContemplated>
                            </S.CardContemplated>
                        ))
                    }                    
                </S.ContainerMid>
            </CenterWrapper>

            <ContemplatedList 
                openModal={openList}
                setOpenModal={setOpenList}
                listData={selectedList}
            />
        </> 

    )
}