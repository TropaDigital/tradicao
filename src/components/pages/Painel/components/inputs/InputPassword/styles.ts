import styled, { css } from 'styled-components'

type Props = {
  labelType?: string
  icon?: any
}

export const Container = styled.div<Props>`
  width: 100%;
  position: relative;
  ${({ labelType }) =>
    labelType === 'default' &&
    css`
      display: flex;
      flex-direction: column;
      gap: 12px;
      .inputLabel {
        font-size: 16px;
        line-height: 24px;
      }
    `}

  ${({ labelType }) =>
    labelType === 'inner' &&
    css`
      position: relative;
      .inputLabel {
        font-size: 16px;
        line-height: 24px;
        background-color: var(--secondary-dark);
        padding: 0 8px;
        font-size: 12px;
        position: absolute;
        top: -12px;
        left: 24px;
      }
    `}
  .iconWrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 18px;
  }
  .inputContainer {
    position: relative;
  }
  .inputField {
    border-radius: 8px;
    border: 1px solid var(--gray-500);
    background-color: transparent;
    width: 100%;
    height: 48px;
    padding: ${({ icon }) => icon ? "0 50px" : "10px 16px"};

    font-size: 16px;
    font-weight: 400;
  }
  button {
    height: 24px;
    width: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
  .validationError {
    font-size: 14px;
    font-weight: 500;
    color: var(--status-danger);
  }
`
