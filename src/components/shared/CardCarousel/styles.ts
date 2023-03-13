'use client'
import styled from "styled-components"

interface ICard {
    width: string,
    height: string,
    padding: string,
}

export const CardWrapper = styled.div<ICard>`
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: ${props => props.width ? `${props.width}px` : "360px"};
    height: ${props => props.height? `${props.height}px` : '300px'};
    
    background: var(--white);
    box-shadow: 0 20px 30px -14px rgba(0, 0, 0, 0.15);
    
    border-radius: 4px;

    padding: ${props => props.padding? `${props.padding}px` : '20px'};
`

export const CardImageRounded = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    .image {
         width: 110px;
        height: 110px;
        border-radius: 50%;
    }
`

export const CardImageSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .image {
        width: 260px;
        height: 260px;
        border-radius: 10px;
    }
`

export const CardTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: var(--primary-mid);

    margin-top: 4px;
`

export const CardDescription = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-mid);

    text-align: center;
`