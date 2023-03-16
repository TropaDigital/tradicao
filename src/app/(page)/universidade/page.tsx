'use client';

import SkewContainer from '@/components/shared/SkewContainer';
// Styles
import * as S from './styles';

// Images
import UniversityBg from '../../../../public/images/University_bg.svg'

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import MainTitle from '@/components/UI/MainTitle';
import SearchCourses from '@/components/pages/Universidade/SearchCourses';

export default function University() {
    return (
        <>
            <S.ContainerTop>
                <SkewContainer 
                    size="medium"
                    imageSrc={UniversityBg}
                    imageAlt="Imagem de um automóvel"
                />

                <CenterWrapper>
                    <div className="margin">
                        <MainTitle 
                            title="A Universidade"                            
                        />  
                    </div>

                    <S.UniversityInfo>
                        <S.InfoTitle>
                            What is Lorem Ipsum
                        </S.InfoTitle>

                        <S.TextDescription>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </S.TextDescription>
                    </S.UniversityInfo>
                </CenterWrapper>
            </S.ContainerTop>

            <S.ContainerMid>
                <CenterWrapper>
                    <S.CoursesContainer>
                        <S.CoursesTitle>
                            Cursos
                        </S.CoursesTitle>

                        <S.CoursesDescription>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </S.CoursesDescription>
                    </S.CoursesContainer>

                </CenterWrapper>
            </S.ContainerMid>

            <S.ContainerBottom>
                <CenterWrapper>
                    <SearchCourses />
                </CenterWrapper>
            </S.ContainerBottom>
        </>
    )
}