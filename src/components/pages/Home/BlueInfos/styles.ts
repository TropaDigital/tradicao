'use client'
import styled from "styled-components";

export const BlueContainer = styled.div`
    width: 100%;
    height: 153px;   
    margin-bottom: 50px;

    overflow-x: hidden;

    position: relative;
`

export const BlueLeft = styled.div`
    width: 52%;
    height: 142px;
    background: var(--primary);
    background: var(--degrade-primary);
    transform: skewX(-18deg);
    position: absolute;
    top: 11px;
    left: -25px;
    border-bottom-right-radius: 20px;

    padding: 20px 120px 39px 0px;
`

export const BlueRight = styled.div`
    width: 55%;
    height: 142px;
    background: var(--primary);
    background: linear-gradient(77.17deg, #0036C6 -0.7%, #3E65D0 99.14%);
    transform: skewX(162deg);
    z-index: 9;
    position: absolute;
    top: 0;
    right: -25px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    padding: 20px 0px 38px 60px;
`

export const BlueLeftInfo = styled.div`
    text-align: right;
    font-size: 72px;
    font-weight: 700;
    color: var(--white);
    transform: skewX(18deg);

    .title {
        font-size: 14px;
        font-weight: 400;
    }
`

export const BlueRightInfo = styled.div`
    text-align: left;
    font-size: 72px;
    font-weight: 700;
    color: var(--white);
    transform: skewX(18deg);

    span {
        font-size: 22px;
    }

    .title {
        font-size: 14px;
        font-weight: 400;
    }
`