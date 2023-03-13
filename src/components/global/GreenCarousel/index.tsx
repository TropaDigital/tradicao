import { ReactNode } from "react";
import CenterWrapper from "../CenterWrapper";
import { CarouselWrapper, SubtitleCarousel, TitleCarousel } from "./styles";

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
            <CenterWrapper>
                <TitleCarousel>{title}</TitleCarousel>
                <SubtitleCarousel>{subtitle}</SubtitleCarousel>
                {children}               
            </CenterWrapper>
        </CarouselWrapper>
    )
}