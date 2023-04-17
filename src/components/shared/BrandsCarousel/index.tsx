import CenterWrapper from "@/components/global/CenterWrapper";
import { ReactNode } from "react";
import { CarouselContainer } from "./styles";

interface ICarouselBrand {
    children: ReactNode,
}

export default function BrandsCarousel({children, }: ICarouselBrand) {
    return (
        <CarouselContainer>
            <CenterWrapper>
                {children}
            </CenterWrapper>
        </CarouselContainer>
    )
}