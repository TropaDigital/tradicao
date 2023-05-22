'use client';

import styled from 'styled-components';
import ModalDefault from '@/components/shared/Modal';

type TableTypes = {
  tableWidth: number;
};

export const ModalTable = styled(ModalDefault)`
  max-width: 1281px;
  width: 100%;
  overflow: hidden;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ModalTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
  text-align: center;

  @media (max-width: 425px) {
    font-size: 26px;
  }
`;

export const Table = styled.table<TableTypes>`
  display: flex;
  flex-direction: column;
  overflow-x: auto;

  thead,
  tbody {
    tr {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(5, 1fr);

      @media (max-width: 650px) {
        grid-template-columns: repeat(5, 142px);
      }
    }
  }

  thead {
    /* margin-right: 22px; */

    tr {
      height: fit-content;
      margin-bottom: 6px;
    }
  }

  tbody {
    max-height: 344px;

    @media (max-width: 650px) {
      width: fit-content;
    }

    tr {
      &:nth-child(odd) {
        background: var(--background-secondary);
      }

      &:hover {
        transition: all 0.3s;
        background: #dfefff;
      }
    }
  }
`;

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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 14px;
  }
`;

export const TdInfo = styled.td`
  height: fit-content;

  color: var(--gray-900);

  padding: 8px 0;

  text-transform: uppercase;

  &.first {
    padding-left: 8px;
  }
`;
