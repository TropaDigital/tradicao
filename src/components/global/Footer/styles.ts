'use client'
import styled from "styled-components";

export const Container = styled.div`
    /* width: 100vw; */
    height: fit-content;
    background: var(--primary);    
`

export const FooterWrapper = styled.div`
    background: linear-gradient(77deg, var(--primary) 0.7%, var(--primary-light) 93.94%);
    padding: 44px 150px 17px 150px;
`

export const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 30px;
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 33px;
`

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .correct {
        margin-bottom: -26px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const MidFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;    
    margin: 0 auto;
`

export const Column =styled.div`
    width: 262px;
    height: fit-content;    
`

export const TitleColumns = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
`

export const TextButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-height: 31px;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    color: var(--white);
`

export const TextField = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: var(--white);

    span {
        font-weight: 700;
    }
`

export const GreenButton = styled.div`
    display: flex;
    width: 262px;
    height: 52px;
    position: relative; 
    transition: ease-in-out .3s;    

    cursor: pointer;

    .absolute {
        position: absolute;
        left: 0;
        top: 0;
        
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 52px;
            position: relative;
            z-index: 9;
    
            svg {
                z-index: 99;
            }
    
            &::before {
                content: '';
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, var(--secondary) 28.3%, #00BB53 90.57%);
                border-radius: 10px;
                position: absolute;
                transform: skew(-15deg);
            }
        }
    }


    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 52px;        
        position: relative;
        margin-left: auto;
        

        &::before {
            content: '';
            width: 100%;
            height: 47px;
            transform: skew(-15deg);
            position: absolute;
            right: 0;
            background: linear-gradient(180deg, #00BB53 0%, var(--secondary) 100%);
            border-radius: 0 10px 10px 0;
        }

        .text {
            color: var(--white);
            font-size: 1rem;
            font-weight: 700;
            z-index: 9;
        }        
    }

    &:hover {
        transform: scale(1.05);
    }
`

export const Divider = styled.div`
    border: 1px solid #456FE2;
    margin-top: 18px;
    margin-bottom: 20px;
`

export const BottomFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    max-width: 1344px;
    margin: 0 auto;

    .text {
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
    }
`

export const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: fit-content;
    
    background: var(--primary-light);
    background: linear-gradient(77deg, var(--primary-light) 0.7%, var(--primary) 99.14%);
    
    padding: 30px 150px;

    .text {
        font-size: 14px;
        font-weight: 400;
        color: var(--white);
        text-align: center;

        margin-bottom: 14px;
    }

    .developed {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
                
        font-size: 14px;
        font-weight: 400;
        color: var(--white);
        text-align: center;        
    }
`
 