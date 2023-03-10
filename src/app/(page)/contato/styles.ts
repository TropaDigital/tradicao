'use client'
import styled from "styled-components";

export const Container = styled.div`
.heroTextWrapper{
    width: 642px;
    height: 74px;
    transform: skew(-18deg);
    background-color: var(--Green);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    .heroText{
        transform: skew(18deg);
    }
}
`;