import styled, { css } from 'styled-components';
import Modal from '../../UI/Modal';

type Props = {
  showHeader?: boolean;
  isOpen?: boolean;
};

type PropsClient = {
  isHovered: boolean;
};

export const HeaderContainer = styled.header<Props>`
  position: sticky;
  top: 0;
  left: 0;
  height: 122px;
  opacity: 1;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 150px;
  background-color: var(--white);
  width: 100%;
  transition: all 0.2s;
  &.nav-up {
    top: 0;
  }
  &.nav-down {
    top: -122px;
  }
  .logo {
    padding-right: 30px;
  }
  .menu-container {
    position: relative;
    .menuHamburguerContainer {
      display: flex;
      align-items: center;
      height: 25px;
      cursor: pointer;
    }
  }

  @media (max-width: 1600px) {
    padding: 21px 43px;
  }

  @media (max-width: 425px) {
    padding: 21px;
  }

  @media (max-width: 1360px) {
    .logo {
      width: calc(100% * 0.9);
    }
  }
`;

export const HeaderNav = styled.nav`
  .header-options {
    display: flex;
    align-items: center;
    gap: 30px;

    .option-title {
      color: var(--primary);
      font-weight: 700;
      padding: 7px 12px;
      border-radius: 30px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: rgba(62, 101, 208, 0.25);
      }
    }

    .client-button-container {
      position: relative;

      .client-area-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        gap: 5px;
        position: relative;
      }
    }

    .submenu-options {
      position: relative;
    }
  }
`;

export const ClientAreaSubMenu = styled.div<PropsClient>`
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
  position: absolute;
  top: 45px;
  background: linear-gradient(77.17deg, #0036c6 -0.7%, #3e65d0 93.94%);
  padding: 10px;
  gap: 11px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  width: max-content;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ul > li > a {
    color: var(--white);
    font-size: 14px;
  }

  :hover {
    display: flex;
  }
`;

export const InfoContainer = styled.div<Props>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: linear-gradient(77.17deg, #0036c6 -0.7%, #3e65d0 93.94%);
  height: 40px;
  padding: 6px 150px;

  @media (max-width: 1600px) {
    padding: 6px 43px;
  }
  @media (max-width: 900px) {
    .blog {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .universidade {
      display: none;
    }
  }
  @media (max-width: 630px) {
    .area-do-representante {
      display: none;
    }
    .televendas {
      font-size: 14px;
    }
  }
  @media (max-width: 425px) {
    padding: 21px;
  }
  @media (max-width: 375px) {
    padding: 21px 10px;

    &:first-child {
      font-size: 12px;
      white-space: nowrap;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;

    li a {
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const BoletoButton = styled.a`
  padding: 6px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(250.88deg, #f92b60 0%, #8e0c2e 97.63%);
  border-radius: 30px;
  font-weight: 400;
  white-space: nowrap;
`;

export const MenuHamburgerContainer = styled.div<Props>`
  display: none;
  cursor: pointer;
  position: relative;
  @media (max-width: 1360px) {
    display: block;
  }

  height: 2px;
  width: 21px;
  background-color: var(--secondary);
  position: relative;
  border-radius: 1px;
  transition: 400ms;

  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 21px;
    background-color: var(--secondary);
    position: absolute;
    border-radius: 1px;
    transition: 400ms;
    left: 0;
  }

  &::before {
    top: -7px;
  }

  &::after {
    bottom: -7px;
    transition: 200ms;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-45deg);

      &::before {
        transform: rotate(90deg);
        top: 0;
      }

      &::after {
        transform: rotate(-80deg);
        opacity: 0;
        bottom: 0;
      }
    `}
`;
export const MobileMenuModal = styled.div<Props>`
  position: absolute;
  background-color: var(--white);
  top: 30px;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 210px;
  gap: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s;

  .mobile-option {
    color: var(--primary);
    font-weight: 500;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1360px) {
    display: none;
  }
  @media (max-width: 425px) {
    top: 50px;
  }
`;

export const SubMobileMenu = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ isOpen }) => (isOpen ? '14px' : '0px')};
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  .sub-submobile-option {
    color: var(--primary);
    font-weight: 400;
  }
`;

export const SubMenuOptions = styled(Modal)`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  .sub-menu-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
