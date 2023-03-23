'use client'
import styled from "styled-components";

export const SearchContainer = styled.div`
    height: fit-content;

    position: relative;
`

export const SearchHeader = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;

    width: 500px;
    height: 100px;
    background: var(--background-secondary);
    border-radius: 10px;

    padding: 20px 30px;

    position: absolute;
    top: -60px;
    left: 50%;    
    transform: translateX(-50%);

    .button-search {
      max-width: 104px;     
    }

    @media (max-width: 800px) {

        .button-search {
            max-width: 20%;
        }
    }

    @media (max-width: 500px) {
        width: 90%;
        height: fit-content;

        flex-direction: column;
        align-items: center;

        .button-search {
            max-width: 100%;
        }
    }

`

export const CourseCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 22px;
    
    padding-top: 68px;
    padding-bottom: 55px;   
    
    @media (max-width: 500px) {
        padding-top: 110px;
        flex-wrap: wrap;
    }

    @media (max-width: 330px) {
        padding-top: 130px;
    }
`

export const CourseCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 268px;
    height: 248px;

    border: 1px solid var(--light);
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 180px;
        height: fit-content;
    }
`

export const CourseCardTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 178px;
    background-color: var(--primary);

    border-radius: 10px 10px 0 0;

    color: var(--white);

    font-size: var(--text-headline-sm);
    font-style: italic;
    font-weight: var(--weight-bold); 
    text-transform: uppercase;

    padding-top: 20px;

    position: relative;

    &::before {
        content: 'DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO DIÇÃO TRADIÇÃO TRADIÇÃO TRADIÇÃO';
        width: 150%;
        color: var(--white);
        opacity: 0.05;
        position: absolute;
        top: 10px;
        left: -40px;
        font-size: 18px;
    }

    .icon-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;        
        padding-bottom: 10px;
        svg {
            width: 16px;
            height: 16px;
        }

        .brushed {
            svg {
                width: 50px;
                height: 20px;                
            }
        }
    }

    @media (max-width: 800px) {
        font-size: var(--text-smal-lg);
    }

    @media (max-width: 500px) {
        padding-left: 12px;
        padding-right: 12px;

        gap: 10px;
    }
`

export const CourseCardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 70px;

    border-radius: 0 0 10px 10px;

    color: var(--primary);

    font-size: var(--text-smal-sm);
    font-weight: var(--weight-bold); 
    
    padding: 0 26px;

    @media (max-width: 800px) {
        padding: 0 18px;
    }
`