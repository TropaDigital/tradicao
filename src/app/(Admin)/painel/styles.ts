import styled, { css } from 'styled-components';

interface ISideBarProps {
  sideBarIsOpen: boolean;
}

export const Container = styled.div<ISideBarProps>`
  height: 100vh;
  .headerLayoutDashboard {
    transition: all 0.3s;
    width: 100%;
    height: 64px;
    display: flex;
    position: fixed;
    z-index: 2;
    @media (max-width: 835px) {
      width: 100%;
    }
    .leftSideWithLogo {
      transition: all 0.3s;
      width: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '216px' : '80px')};
      height: 100%;
      background-color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 835px) {
        display: none;
      }
    }
    .rigthSideWithAvatar {
      transition: all 0.3s;
      width: ${({ sideBarIsOpen }) =>
        sideBarIsOpen ? 'calc(100% - 216px)' : 'calc(100% - 80px)'};
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 30px;
      background-color: var(--primary);
      color: var(--white);
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      .sideBarMenuWrapper {
        display: none;
        position: relative;
        @media (max-width: 835px) {
          display: block;
        }
        .menuHamburger {
          height: 2.5px;
          width: 25px;
          border-radius: 3px;
          background-color: var(--white);
          transition: 250ms;
          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 2.5px;
            border-radius: 3px;
            background-color: var(--white);
            transition: 200ms ease-in;
          }
          &.opened {
            background-color: transparent;
          }
          &::before {
            top: -8px;
          }
          &::after {
            bottom: -8px;
          }
          &.opened::before {
            top: 0;
            transform: rotate(45deg);
          }
          &.opened::after {
            bottom: 0;
            transform: rotate(-45deg);
          }
        }
        .sideBarMenu {
          position: fixed;
          top: 65px;
          left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '0' : '-100%')};
          width: 40%;
          background-color: var(--white);
          height: calc(100vh - 65px);
          transition: 0.75s linear;
          box-shadow: 0px 4px 12px rgba(25, 73, 62, 0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 60px 20px;
          a {
            color: var(--gray-500);
            font-weight: 500;
          }
          @media (max-width: 450px) {
            width: 50%;
          }
        }
      }
      .congratsUser {
        color: var(--white);
      }
      @media (max-width: 835px) {
        width: 100%;
        .congratsUser {
          display: none;
        }
        .optionsSelect {
          margin: 0;
          position: relative;
          top: 116px;
          background-color: var(--white);
          border-bottom-right-radius: 12px;
          .cardToPage {
            padding: 12px;
          }
        }
      }
    }
  }
  .mainWrapper {
    display: flex;
    .sideBarWithContent {
      transition: all 0.3s;
      position: fixed;
      margin-top: 64px;
      background-color: var(--white);
      border-right: 1px solid var(--gray-300);
      width: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '216px' : '80px')};
      height: calc(100vh - 64px);
      display: flex;
      padding: 40px 16px;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 835px) {
        display: none;
      }
      .navigateOptions {
        flex-direction: column;
        width: 100%;
        display: flex;
        gap: 12px;
      }
      .handleCloseSideBar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.3s;
        overflow: hidden;
        width: 100%;
        background-color: var(--white);
        .textHandleCloseSideBar {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          color: var(--primary);
          white-space: nowrap;
          visibility: hidden;
          ${({ sideBarIsOpen }) =>
            sideBarIsOpen &&
            css`
              visibility: visible;
            `}
        }
        svg {
          transition: all 0.3s;
          position: absolute;
          left: 0;
          margin-left: 26px;
          transform: rotate(180deg);
        }
        ${({ sideBarIsOpen }) =>
          sideBarIsOpen &&
          css`
            svg {
              position: absolute;
              left: 0;
              margin-left: 18px;
              transition: all 0.3s;
              transform: rotate(0deg);
            }
          `}
      }
    }
    .mainWrapperWithChildren {
      margin-left: ${({ sideBarIsOpen }) => (sideBarIsOpen ? '216px' : '80px')};
      margin-top: 65px;
      transition: all 0.3s;
      width: ${({ sideBarIsOpen }) =>
        sideBarIsOpen ? 'calc(100% - 216px)' : 'calc(100% - 80px)'};
      padding: 40px 30px;
      @media (max-width: 835px) {
        width: 100%;
        margin-left: 0;
      }
    }
  }
`;

export const HeaderDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .buttonWrapper {
    display: flex;

    .styledButton {
      padding: 10px 30px;
    }
  }
`;
