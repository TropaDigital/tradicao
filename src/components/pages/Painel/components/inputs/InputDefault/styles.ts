import styled, { css } from 'styled-components'

type Props = {
  labelType?: string
}

export const Ca = styled.div`
  width: 100%;
`

export const Container = styled.div<Props>`
  width: 100%;
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
        font-weight: 600;
        background-color: var(--light);
        padding: 0 8px;
        font-size: 12px;
        position: absolute;
        top: -12px;
        left: 24px;
      }
    `}
    
  .inputField {
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid var(--gray-500);
    background-color: transparent;
    padding: 16px 24px;
    width: 100%;

    font-size: 16px;
    font-weight: 400;
  }
  .validationError {
    font-weight: 500;
    font-size: 14px;
    color: var(--status-danger);
  }
`
