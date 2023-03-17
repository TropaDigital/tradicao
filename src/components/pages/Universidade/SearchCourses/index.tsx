'use client';
import Button from "@/components/UI/Button";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";
// Styles
import { CourseCard, CourseCardBottom, CourseCardTop, CourseCardWrapper, SearchContainer, SearchHeader } from "./styles";

export default function SearchCourses() {
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
                        
                    </CourseCardTop>
                    <CourseCardBottom>
                        Integração Consórcio Tradição com Sheila Cruz
                    </CourseCardBottom>
                </CourseCard>
            </CourseCardWrapper>
        </SearchContainer>
    )
}