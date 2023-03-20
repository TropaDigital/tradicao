import styled from 'styled-components';
// import { colors, fonts } from "../../../../assets/styles/mixin";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 24px;
  justify-content: flex-end;

  .button,
  .pageIndex {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 4/4;
    background-color: var(--secondary-light);
    border-radius: 6px;
    cursor: pointer;
    transition: 0.4s;

    &.next {
      svg {
        transform: rotate(180deg);
      }
    }

    &.disabled {
      background-color: transparent;
    }
  }

  .paginationIndex {
    display: flex;
    gap: 5px;
    align-items: center;

    .pageIndex {
      font-weight: 500;
      font-size: 14px;
      background-color: transparent;
      transition: 0.7s;
      &:hover {
        background-color: var(--secondary-light);
      }
      &.active {
        background-color: var(--secondary-dark);
        color: var(--light);
      }
    }
  }
`;
