import styled, { css } from 'styled-components'
import { colors } from '../../panelConfig.json'

interface propsModal {
  isOpen: boolean
}

export const Container = styled.div<propsModal>`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  .avatarPerson {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .chevronHandleLogOutVisibility {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    .avatarPerson {
      svg {
        transform: rotate(0);
      }
    }
    svg {
      transform: rotate(-180deg);
      transition: all 0.3s;
    }
    ${({ isOpen }) =>
      isOpen &&
      css`
        svg {
          transform: rotate(0deg);
          transition: all 0.3s;
        }
      `}
  }
`

export const ModalLogOut = styled.div<propsModal>`
  position: absolute;
  width: 150px;
  height: 48px;
  background-color: ${colors.white};
  top: 0;
  right: 0;
  margin-top: 34px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  display: none;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  /* display: flex; */
  align-items: center;
  justify-content: flex-start;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    gap: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  .logoutText {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: var(--status-danger);
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      transition: all 0.3s;
    `};
`
