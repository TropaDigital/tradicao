'use client';

// Styles
import * as S from './styles';

// Images
import closedGroups_bg from '../../../../public/images/nao_procurados_bg.jpg';

// Components
import SkewContainer from '@/components/shared/SkewContainer';
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import { useMemo, useState } from 'react';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { useGetAllGrupos } from '@/services/grupos-encerrados/GET/useGetAllGrupos';

interface IGroupsProps {
    groupdId: string,
    closeDate: any,
    firstApportionment: string,
    lastApportionment: string,
}

export default function ClosedGroups() {
    const [ searchGroups, setSearchGroups ] = useState<any>('');

    const groups: IGroupsProps[] = [
        {
            groupdId: '0001',
            closeDate: '01/01/2021',
            firstApportionment: '31/12/2011',
            lastApportionment: '31/12/2011',
        },
        {
            groupdId: '0002',
            closeDate: '01/01/2021',
            firstApportionment: '31/12/2011',
            lastApportionment: '31/12/2011',
        },
        {
            groupdId: '0003',
            closeDate: '01/01/2021',
            firstApportionment: '31/12/2011',
            lastApportionment: '31/12/2011',
        },
        {
            groupdId: '0004',
            closeDate: '01/01/2021',
            firstApportionment: '31/12/2011',
            lastApportionment: '31/12/2011',
        },
        {
            groupdId: '0005',
            closeDate: '01/01/2021',
            firstApportionment: '31/12/2011',
            lastApportionment: '31/12/2011',
        },
    ]

    const { allGrupos } = useGetAllGrupos('');

    console.log('log do groups', allGrupos)

    const filteredGroups = useMemo(() => {

        return groups.filter((obj: any) => obj.groupdId.includes(searchGroups))
        
    }, [searchGroups]);


    criado: "2023-04-17T15:51:37.000Z"
    data_encerramento: "2022-04-17T00:00:00.000Z"
    grupo: 554
    id_grupo: 25
    modificado: "2023-04-18T15:55:42.000Z"
    primeiro_rateio: "2025-04-17T00:00:00.000Z"
    ultimo_rateio: "2025-04-17T00:00:00.000Z"


    return (
        <>
            <S.ContainerTop>
                <SkewContainer
                    imageSrc={closedGroups_bg}
                    imageAlt="Imagem mostrando plantas crescendo em moedas"
                />

                <CenterWrapper>
                    <div className="margin">
                        <MainTitle title='Lista de grupos encerrados' />
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
                            onChange={(e: any) => setSearchGroups(e.target.value)}                        
                        />
                    </S.SearchField>

                    <S.Table>
                        <S.THead>
                            <tr>
                                <td className='first'>Grupo</td>
                                <td>Data encerramento</td>
                                <td>1º Rateio</td>
                                <td>Ultimo Rateio</td>
                            </tr>
                        </S.THead>
                        <tbody>
                            {
                                filteredGroups.map((row: IGroupsProps) => (
                                    <tr key={row.groupdId}>
                                        <td>{row.groupdId}</td>
                                        <td>{row.closeDate}</td>
                                        <td>{row.firstApportionment}</td>
                                        <td>{row.lastApportionment}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </S.Table>
                </CenterWrapper>
            </S.ContainerMid>
        </>
    )
}