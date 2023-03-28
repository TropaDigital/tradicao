import styled, { css } from 'styled-components';

interface props {
  isOpen: boolean;
  numberOfOptions: number;
  sideBarIsOpen?: boolean;
}

export const Select = styled.nav<props>`
  .titleSelectPageWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @media (max-width: 835px) {
      position: absolute;
      top: 22px;
    }
    .titleSelectLeftSide {
      display: flex;
      gap: 11px;
      .iconMenu {
        margin-left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '0px' : '12px')};
        transition: all 0.3s;
        cursor: ${({ sideBarIsOpen }) => (sideBarIsOpen ? 'unset' : 'pointer')};
      }
      .titleSelectPage {
        font-size: 16px;
        line-height: 24px;
        color: var(--text2);
        font-weight: 500;
        transition: all 0.3s;
        opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '1' : '0')};
        display: ${({ sideBarIsOpen }) => (sideBarIsOpen ? 'block' : 'none')};
      }
    }
    .iconOpenSelect {
      transition: all 0.3s;
      background-color: var(--white);
      opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '1' : '0')};
      svg {
        transform: rotate(180deg);
        transition: all 0.3s;
        ${({ isOpen }) =>
          isOpen &&
          css`
            transform: rotate(0deg);
            transition: all 0.3s;
          `}
      }
    }
  }
  .optionsSelect {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    justify-content: center;
    overflow: hidden;
    height: 0px;
    transition: all 0.3s;
    ${({ isOpen, numberOfOptions }) =>
      isOpen &&
      numberOfOptions &&
      css`
        transition: all 0.3s;
        max-height: unset;
        height: ${(numberOfOptions * 42).toString() + 'px'};
      `}
    .cardToPage {
      border-left: 1px solid var(--base2);
      padding-left: 15px;
      margin-left: 12px;
      height: 42px;
      text-decoration: none;
      color: var(--text2);
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-left: 12px;
      transition: all 0.3s;
      &:hover {
        background-color: var(--base3);
      }
    }
  }
`;
