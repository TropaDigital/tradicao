'use client';
import styled from "styled-components";

export const ContainerTop = styled.div`
  
  .margin {
    margin-top: 30px;
  }
`;

export const SubtitleTop = styled.div`
  font-size: var(--text-smal-md);
  font-weight: var(--weight-bold);
  color: var(--gray-600);
`;

export const ContainerMid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 1000px;
    margin-top: 60px;

    padding-bottom: 60px;
`

export const TitleMid = styled.h2`
    color: var(--gray-700);
    font-size: var(--text-smal-xl);
    font-weight: var(--weight-semibold);
`

export const SubtitleMid = styled.h3`
    color: var(--gray-600);
    font-size: var(--text-smal-md);
`

export const SearchBar = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;

    height: fit-content;
    background: var(--background-secondary);
    border-radius: 10px;
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.2);

    padding: 12px;

    .button-search {
      max-width: 140px;     
    }
`