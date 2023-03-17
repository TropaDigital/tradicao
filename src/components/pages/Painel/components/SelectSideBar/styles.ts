import styled, { css } from 'styled-components'
// import { colors, fonts } from "../../../../assets/styles/mixin";

interface SelectProps {
  isOpen: boolean
  numberOfOptions: number
  sideBarIsOpen?: boolean
}

type SubSelectProps = {
  isOpen: boolean
  numberOfOptions: number
  row?: any
}

export const Select = styled.nav<SelectProps>`
  .titleSelectPageWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
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
        color: var(--dark);
        font-weight: 500;
        transition: all 0.3s;
        /* opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '1' : '0')}; */
      }
    }
    .handleOpenSelect {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
    }
    .iconOpenSelect {
      transition: all 0.3s;

      opacity: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '1' : '0')};

      display: flex;
      justify-content: center;
      align-items: center;

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
        transition: all 0.3s ease-in;
        max-height: unset;
        height: ${(numberOfOptions * 42).toString() + 'px'};
      `}

    .cardToPage {
      border-left: 1px solid var(--gray-200);
      padding-left: 15px;
      margin-left: 12px;
      height: 42px;
      text-decoration: none;
      color: var(--dark);
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-left: 12px;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(231, 234, 238, 0.7);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`

export const SubSelect = styled.div<SubSelectProps>`
  display: flex;
  flex-direction: column;
  height: 42px;

  .subMenusCard {
    position: relative;
    cursor: pointer;

    .cardToPage {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 0;
      border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '8px' : '0')};
    }

    svg {
      position: absolute;
      right: 5px;
      transition: all 0.3s;
      top: 50%;
      transform: translateY(-50%)
        ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : '')};
    }
  }

  ${({ isOpen, numberOfOptions }) =>
    isOpen &&
    numberOfOptions &&
    css`
      transition: height 0.3s;
      max-height: unset;
      height: ${(numberOfOptions * 46).toString() + 'px'};

      @media (max-width: 835px) {
        height: ${(numberOfOptions * 40).toString() + 'px'};
      }
    `}

  a {
    font-weight: 500;
    text-decoration: none;
    color: var(--dark);
    padding: 5px 15px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    margin-left: 40px;
    border-left: 1px solid var(--gray-200);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    &:hover {
      background-color: rgba(231, 234, 238, 0.7);
    }
  }
`
