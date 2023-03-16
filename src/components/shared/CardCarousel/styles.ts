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
    box-shadow: 0 20px 20px -7px rgba(0, 0, 0, 0.4);
    
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        overflow: hidden;
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

        img {
            height: inherit;
        }
    }
`

export const CardTextSquared = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

    .title {
        font-size: 40px;
        font-weight: 700;
        color: var(--primary-mid);
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

export const CardIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0 20px;

    .icon {
        display: flex;
        align-items: center;
        gap: 10px;   
        
        font-size: 14px;
        font-weight: 400;
        color: var(--primary-mid);
    }
`