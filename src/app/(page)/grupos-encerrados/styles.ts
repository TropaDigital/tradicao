'use client';
import styled from "styled-components";

export const ContainerTop = styled.div`
  
  .margin {
    margin-top: 30px;
  }
`;

export const ContainerMid = styled.div`
    margin: 30px 0;
`

export const SearchField = styled.div`
    margin-bottom: 30px;
`

export const Table = styled.table`
    width: 100%;

    tr {
        .first {
            padding-left: 10px;
        }

        td {
            text-transform: uppercase;
            color: var(--gray-700);
            font-size: var(--text-smal-md);
            font-weight: var(--weight-semibold);
        }
    }
`

export const THead = styled.thead`
    
`

export const TrHead = styled.div`

`