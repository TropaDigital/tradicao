'use client'
import styled from "styled-components"

interface ICarousel {
    height: string,
    marginBottom: string,
}

export const CarouselWrapper = styled.div<ICarousel>`
    height: fit-content;
    max-height: 350px;
    height: ${props => props.height ? `${props.height}px` : "350px"};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : "350px"};

    background: var(--secondary);
    background: var(--degrade-secondary);
    padding-top: 40px;

    position: relative;   
    
    .slider {
        overflow: hidden;
        padding-bottom: 40px;
    }
    
    .slick-track {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;        
        
        .slick-slide {
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
    }
`

export const TitleCentralize = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`

export const TitleCarousel = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-headline-lgx);
    font-weight: var(--weight-bold);
    color: var(--white);

    margin-bottom: 30px;
`

export const SubtitleCarousel = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
    color: var(--white);

    margin-top: -24px;
    margin-bottom: 26px;
`