'use client'
import styled from "styled-components"

export const CarouselContainer = styled.div`
    min-height: 96px;
    max-height: 130px;
    height: fit-content;
    margin: 50px 0;

    cursor: pointer;    
    
    .slider {
        overflow: hidden;
    }
    
    .slick-track {
        display: flex;
        align-items: flex-start;
        justify-content: center;        
        
        .slick-slide {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            width: 157px !important;
        }
    }

    @media (max-width: 450px) {
        .slick-track {
            gap: 50px;

            .slick-slide {
                align-items: center;
                width: 180px !important;
            }
        }

    }
`