'use client';
import { BrushedIcon, CircleLogoIcon } from "@/assets/icons";
import Button from "@/components/UI/Button";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";

// Styles
import { 
    CourseCard, 
    CourseCardBottom, 
    CourseCardTop, 
    CourseCardWrapper, 
    SearchContainer, 
    SearchHeader 
} from "./styles";

interface ICoursesProps {
    id: number,
    bigTitle: string,
    description: string,
}

export default function SearchCourses() {

    const Courses: ICoursesProps[] = [
        {
            id: 1,
            bigTitle: 'Integração Consórcio Tradição',
            description: 'Integração Consórcio Tradição com Sheila Cruz'
        },
        {
            id: 2,
            bigTitle: 'Treinamento sobre a Lei Geral de Proteção de dados',
            description: 'Treinamento sobre a Lei Geral de Proteção de dados'
        },
        {
            id: 3,
            bigTitle: 'Treinamento Código de Conduta Ética',
            description: 'Treinamento Código de Conduta Ética'
        },
        {
            id: 4,
            bigTitle: 'Regulamento Interno',
            description: 'Regulamento Interno'
        },
    ]

    return (
        <SearchContainer>
            <SearchHeader>
                <InputDefault 
                    label="Buscar Curso"
                />
                <Button degrade className="button-search" type="submit">
                  Buscar
                </Button>
            </SearchHeader>

            <CourseCardWrapper>
                {
                    Courses.map((row: any) => (
                        <CourseCard key={row.id}>
                            <CourseCardTop>
                                {row.bigTitle}
                                <div className="icon-bottom">
                                    <div className="brushed">
                                        <BrushedIcon />
                                    </div>
                                    <CircleLogoIcon />
                                </div>
                            </CourseCardTop>
                            <CourseCardBottom>
                                {row.description}
                            </CourseCardBottom>
                        </CourseCard>
                    ))
                }
            </CourseCardWrapper>
        </SearchContainer>
    )
}