'use client'

import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    padding: 20px;
    background-color: var(--light);
    border-radius: 10px;
`

export const CepContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: flex-end;
    padding-right: 30px;
    border-right: 1px solid var(--gray-400);

    .button-container {
        max-width: 104px;
    }
` 

export const CityStateContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding-left: 30px;
`