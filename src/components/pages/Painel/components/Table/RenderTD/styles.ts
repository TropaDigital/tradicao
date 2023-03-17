import styled from 'styled-components'
// import { colors, fonts } from "../../../../../assets/styles/mixin";

export const Container = styled.td`
  position: relative;

  span {
    white-space: nowrap;
    img {
      border-radius: 4px;
    }
  }
  .ativo,
  .Ativo {
    color: var(--dark);
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
    color: var(--dark);
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
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      transition: all 0.4s;
      background-color: var(--gray-200);
    }
  }
`
