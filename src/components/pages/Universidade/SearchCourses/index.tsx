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
    bitTitle: string,
    description: string,
}

export default function SearchCourses() {

    const Courses: ICoursesProps[] = [
        {
            id: 1,
            bitTitle: 'Testes',
            description: 'sei lá.'
        }
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
                <CourseCard>
                    <CourseCardTop>
                        Integração Consórcio Tradição
                        <div className="icon-bottom">
                            <div className="brushed">
                                <BrushedIcon />
                            </div>
                            <CircleLogoIcon />
                        </div>
                    </CourseCardTop>
                    <CourseCardBottom>
                        Integração Consórcio Tradição com Sheila Cruz
                    </CourseCardBottom>
                </CourseCard>
            </CourseCardWrapper>
        </SearchContainer>
    )
}