'use client'
import styled from "styled-components"

export const CarouselContainer = styled.div`
    min-height: 96px;
    max-height: 130px;
    height: fit-content;
    margin: 50px 0;

    .content {
        .my-swiper {
            overflow: hidden;
            .swiper-wrapper {
                display: flex;
            }
        }
    }
`