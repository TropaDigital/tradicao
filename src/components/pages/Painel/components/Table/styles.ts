import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 4px 12px rgba(25, 73, 62, 0.1);
  @media (max-width: 900px) {
    overflow-x: scroll;
  }
  .headerTable {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 28px 24px;
    background-color: var(--white);
    @media (max-width: 835px) {
      position: absolute;
      z-index: 1;
    }
    .titleHeaderTable {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: var(--primary);
    }
    .buttonsWrapper {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  }
  table {
    width: 100%;
    border-collapse: 0px;
    border-spacing: 0px;
    @media (max-width: 833px) {
      position: relative;
      top: 105px;
    }
    @media (max-width: 617px) {
      position: relative;
      top: 166px;
    }
    thead {
      tr {
        th {
          background: #f8fafa;
          border-bottom: 1px solid #e9ecef;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #495057;
          padding: 12px 24px;
        }
      }
    }
    tbody {
      overflow-x: scroll;
      tr {
        td {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          padding: 24px 0px;
          color: var(--gray-600);
          border-bottom: 1px solid var(--gray-300);
          padding: 24px;
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export const ModalDeleteProduct = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .modalTitleWarning {
    margin-top: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: var(--gray-500);
  }
  .modalDescription {
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: var(--gray-500);
  }
  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    margin-top: 42px;

    .buttonText {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .transparentButton {
      color: var(--gray-600);
    }
    .warningButton {
      color: var(--white);
    }
  }
`;
