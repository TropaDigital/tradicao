import styled from 'styled-components'

type Props = {
  isOpen: boolean
}

export const Menu = styled.div<Props>`
  height: 2.5px;
  width: 25px;
  border-radius: 3px;
  background-color: var(--light);
  transition: 250ms;
  position: relative;
  display: none;
  min-width: 12px;

  &::before,
  &::after {
    content: '';
    height: 2.5px;
    width: 25px;
    border-radius: 3px;
    background-color: var(--light);
    position: absolute;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }

  @media (max-width: 835px) {
    display: block;
  }
`

export const MobileMenuContainer = styled.div<Props>`
  position: fixed;
  top: 64px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 40%;
  background-color: var(--light);
  height: calc(100vh - 65px);
  transition: 0.75s linear;
  box-shadow: 0px 4px 12px rgba(25, 73, 62, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  a {
    color: var(--dark);
    font-weight: 500;
  }
  @media (max-width: 450px) {
    width: 50%;
  }

  .sideBarMenuHeader {
    background-color: var(--gray-700)};
    display: flex;
    justify-content: center;
    padding: 18px;
    width: 100%;
  }

  .menuContainer {
    padding: 20px 10px;
  }

  @media (min-width: 835px) {
    left: -100%;
  }
`
