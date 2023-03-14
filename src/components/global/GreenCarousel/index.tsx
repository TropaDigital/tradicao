import { ReactNode } from "react";
import CenterWrapper from "../CenterWrapper";
import { CarouselWrapper, SubtitleCarousel, TitleCarousel, TitleCentralize } from "./styles";

interface ICarouselWrapper {
    children: ReactNode,
    title: string,
    subtitle?: string,
    height: string,
    marginBottom: string,
}

export default function GreenCarousel({ children, title, height, marginBottom, subtitle }: ICarouselWrapper) {
    return (
        <CarouselWrapper
            height={height}
            marginBottom={marginBottom}
        >   
            <TitleCentralize>
                <TitleCarousel>{title}</TitleCarousel>
                <SubtitleCarousel>{subtitle}</SubtitleCarousel>
            </TitleCentralize>
            
            <CenterWrapper>
                {children}               
            </CenterWrapper>
        </CarouselWrapper>
    )
}