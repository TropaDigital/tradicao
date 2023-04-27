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

    thead {
        tr {
            .first {
                padding-left: 10px;
            }
    
            td {                
                height: 20px;
                padding: 6px 0;
                
                text-transform: uppercase;
                color: var(--gray-700);
                font-size: var(--text-smal-md);
                font-weight: var(--weight-semibold);
            }
        }
    }

    tbody {
        tr {
            height: 30px;
            &:nth-child(odd) {
                background: var(--background-secondary);
            }

            &:hover {
                transition: all .3s;
                background: #dfefff;
            }
            
            td {
                padding-left: 4px;

                color: var(--gray-500);
                font-size: var(--text-smal-sm);
                font-weight: var(--weight-medium);
            }
        }
    }

`

export const THead = styled.thead`
    height: 40px;
`