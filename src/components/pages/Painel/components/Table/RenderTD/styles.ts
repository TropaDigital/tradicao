import styled from 'styled-components';

export const Container = styled.td`
  position: relative;
  max-width: 250px;
  text-overflow: ellipsis;
  text-align: justify;
  .ativo,
  .Ativo {
    color: var(--secondary);
    font-weight: 500;
    &::before {
      content: '.';
      font-size: 40px;
      margin-right: 5px;
      position: absolute;
      margin-top: -10px;
      margin-left: -12px;
    }
  }
  .inativo,
  .Inativo {
    color: var(--status-danger);
    font-weight: 500;
    &::before {
      content: '.';
      font-size: 40px;
      margin-right: 5px;
      position: absolute;
      margin-top: -10px;
      margin-left: -12px;
    }
  }
  .buttonOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: all 0.4s;
    background-color: var(--white);
    &:hover {
      transition: all 0.4s;
      background-color: var(--gray-200);
    }
  }
  .imageWrapper {
    overflow: hidden;
    height: 90px;
    width: 90px;
    border-radius: 8px;
  }
`;
