'use client';

// React
import { useMemo, useState } from "react";

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import SkewContainer from "@/components/shared/SkewContainer";

// Styles
import * as S from './styles';

// Images
import notReceived from '../../../../public/images/nao_procurados_bg.jpg';

interface IReceiveProps {
    id: number,
    cpf: string,
    value: string,
}


export default function NotReceived() {
    const [ cpfSearch, setCpfSearch ] = useState<string>('');
    const [ startSearch, setStartSearch ] = useState<any>('');

    const listReceive: IReceiveProps[] = [
        {
            id: 0,
            cpf: '999.999.999-99',
            value: 'R$ 375,00'
        },
        {
            id: 1,
            cpf: '888.888.888-88',
            value: 'R$ 375,00'
        },
        {
            id: 2,
            cpf: '777.777.777-77',
            value: 'R$ 375,00'
        },
        {
            id: 3,
            cpf: '666.666.666-66',
            value: 'R$ 375,00'
        },
        {
            id: 4,
            cpf: '555.555.555-55',
            value: 'R$ 375,00'
        },
        {
            id: 5,
            cpf: '444.444.444-44',
            value: 'R$ 375,00'
        },
        {
            id: 6,
            cpf: '333.333.333-33',
            value: 'R$ 375,00'
        },
        {
            id: 7,
            cpf: '222.222.222-22',
            value: 'R$ 375,00'
        },
        {
            id: 8,
            cpf: '111.111.111-11',
            value: 'R$ 375,00'
        },
        {
            id: 9,
            cpf: '000.000.000-00',
            value: 'R$ 375,00'
        },
    ]

    const filteredCpfs = useMemo(() => {
        const searchLowercase = cpfSearch?.toLowerCase();

        return listReceive.filter((obj) => obj.cpf.toLowerCase().includes(searchLowercase))

    }, [startSearch]);

    return (
        <>
            <S.ContainerTop>
                <SkewContainer
                    imageSrc={notReceived} 
                    imageAlt="Imagem mostrando plantas crescendo em moedas"
                />

                <CenterWrapper>
                    <div className="margin">
                        <MainTitle 
                            title='Recursos não procurados'
                        />  
                        <S.SubtitleTop>Consulte valores a receber</S.SubtitleTop>                      
                    </div>
                </CenterWrapper>
            </S.ContainerTop>

            <CenterWrapper>
                <S.ContainerMid>

                    <S.TitleMid>Olá, digite seu CPF abaixo para saber se tem recursos a receber.</S.TitleMid>
                    
                    <S.SubtitleMid>
                        Caso tenha alguma duvida, entre em contato pelo telefone 4003-5090 ou pelo WhatsApp (11) 98917-8189
                    </S.SubtitleMid>

                    <S.SearchBar>
                        <InputDefault
                            label="Buscar CPF"
                            placeholder="Digite seu CPF"
                            value={cpfSearch}
                            onChange={(e: any) => setCpfSearch(e.target.value)}
                            // maxLength={11}
                            // onKeyDown={(e: any) => onKeyPressed(e)}
                        />

                        <Button
                            degrade
                            className="button-search"
                            type="button"
                            onClick={() => {console.log('loguei na busca do cpf', cpfSearch); setStartSearch(new Date())}}
                        >
                            Buscar
                        </Button>
                    </S.SearchBar>

                </S.ContainerMid>

                <S.ContainerResult>
                    {
                        cpfSearch &&
                        startSearch &&
                        filteredCpfs
                        ?   filteredCpfs.map((row: IReceiveProps) => (
                                <div className="result">{row.cpf}</div>
                            ))
                        :   'nada'

                    }                    
                </S.ContainerResult>
            </CenterWrapper>
        </>
    )
}
