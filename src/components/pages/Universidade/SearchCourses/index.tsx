'use client';
import { BrushedIcon, CircleLogoIcon } from "@/assets/icons";
import Button from "@/components/UI/Button";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";
import { useMemo, useState } from "react";

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
    [x: string]: any;
    id: number,
    courseName: string,
    description: string,
}

export default function SearchCourses() {
    const [ filterCourse, setFilterCourse ] = useState<string>('');
    const [ search, setSearch ] = useState<string | any>('');

    const Courses: ICoursesProps[] = [
        {
            id: 1,
            courseName: 'Integração Consórcio Tradição',
            description: 'Integração Consórcio Tradição com Sheila Cruz'
        },
        {
            id: 2,
            courseName: 'Treinamento sobre a Lei Geral de Proteção de dados',
            description: 'Treinamento sobre a Lei Geral de Proteção de dados'
        },
        {
            id: 3,
            courseName: 'Treinamento Código de Conduta Ética',
            description: 'Treinamento Código de Conduta Ética'
        },
        {
            id: 4,
            courseName: 'Regulamento Interno',
            description: 'Regulamento Interno'
        },
    ]

    const filteredCourses = useMemo(() => {
        const searchLowercase = search?.toLowerCase();

        return Courses.filter((course) => course.courseName.toLowerCase().includes(searchLowercase))

    }, [search]);

    return (
        <SearchContainer>
            <SearchHeader>
                <form action="">
                    <InputDefault 
                        label="Buscar Curso"
                        placeholder="Digite o nome do curso"
                        value={filterCourse}
                        onChange={(e: any) => setFilterCourse(e.target.value)}
                    />
                    {
                        !search &&
                        <Button 
                            degrade 
                            className="button-search" 
                            type="submit"
                            onClick={() => setSearch(filterCourse)}
                        >
                            Buscar
                        </Button>
                    }
                    {
                        search &&
                        <Button 
                            degrade 
                            className="button-search" 
                            type="submit"
                            onClick={() => {setSearch(''); setFilterCourse('')}}
                        >
                            Limpar
                        </Button>
                    }
                </form>
            </SearchHeader>

            <CourseCardWrapper>
                {
                    filteredCourses.map((row: any) => (
                        <CourseCard key={row.id}>
                            <CourseCardTop>
                                {row.courseName}
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