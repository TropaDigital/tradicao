'use client';

// React
import { useState } from "react";

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


export default function NotReceived() {
    const [ cpfSearch, setCpfSearch ] = useState<string>('');

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
                            onClick={() => console.log('loguei na busca do cpf', cpfSearch)}
                        >
                            Buscar
                        </Button>
                    </S.SearchBar>

                </S.ContainerMid>
            </CenterWrapper>
        </>
    )
}
