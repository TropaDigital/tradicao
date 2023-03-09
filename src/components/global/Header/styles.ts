import styled, { css } from 'styled-components'
import Modal from '../../UI/Modal'

type Props = {
  showHeader: boolean
}

interface IMobileMenu {
  isOpen: boolean
}

export const HeaderContainer = styled.header<Props>`
  ${({ showHeader }) =>
    showHeader &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      height: 0px;
      opacity: 0;
    `}

  ${({ showHeader }) =>
    !showHeader &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      height: 122px;
      opacity: 1;
      z-index: 99;
    `}
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 21px 30px;
  background-color: var(--white);
  width: 100%;
  transition: all 0.3s;
  .logo {
    padding-right: 30px;
  }
  .menu-container {
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 1320px) {
    justify-content: space-between;

    .logo svg {
      width: 200px;
    }
  }
`

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 30px;

    li a {
      color: var(--primary);
      font-weight: 700;
      padding: 7px 12px;
      border-radius: 30px;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(62, 101, 208, 0.25);
      }
    }
  }

  @media (max-width: 1320px) {
    display: none;
  }
`

export const InfoContainer = styled.div<Props>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: linear-gradient(
    77.17deg,
    var(--primary-dark) -0.7%,
    var(--primary) 93.94%
  );
  height: 40px;
  padding: 6px 130px;

  @media (max-width: 1320px) {
    padding: 6px 20px;
    justify-content: space-around;
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
`

export const BoletoButton = styled.a`
  padding: 6px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(250.88deg, #f92b60 0%, #8e0c2e 97.63%);
  border-radius: 30px;
  font-weight: 400;
  white-space: nowrap;
`

export const MenuHamburgerContainer = styled.div<IMobileMenu>`
  display: none;
  cursor: pointer;
  position: relative;
  @media (max-width: 1320px) {
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
`
export const MobileMenuModal = styled(Modal)`
  position: absolute;
  right: 0;
  top: 30px;
  height: 0px;
  opacity: 0;
  z-index: 99;
  transition: height 300ms ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 202px;
      max-height: unset;
      opacity: 1;
    `}

  @media(min-width: 1319px) {
    display: none;
  }
`
