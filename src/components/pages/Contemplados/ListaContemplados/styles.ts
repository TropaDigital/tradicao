'use client';
import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ModalTitle = styled.div`
    font-size: 32px;
    font-weight: 700;
    color: var(--primary);
    text-align: center;
`

export const Table = styled.table`
    display: flex;
    flex-direction: column;

    thead,
    tbody {
        tr {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
        }
    }

    thead {
        tr {
            height: fit-content;
            margin-bottom: 6px;
        }
    }

    tbody {
        max-height: 344px;
        overflow-y: auto;
        tr {
            &:nth-child(odd) {
                background: var(--background-secondary);
            }

            &:hover {
                transition: all .3s;
                background: #dfefff;
            }
        }             
    }
`

export const TdTitle = styled.td`
    height: fit-content;

    font-size: 18px;
    font-weight: 600;
    color: var(--primary-dark);

    padding: 8px 0;

    text-transform: uppercase;

    &.first {
        padding-left: 8px;
    }
`

export const TdInfo = styled.td`
    height: fit-content;

    color: var(--gray-900);

    padding: 8px 0;

    text-transform: uppercase;

    &.first {
        padding-left: 8px;
    }
` 