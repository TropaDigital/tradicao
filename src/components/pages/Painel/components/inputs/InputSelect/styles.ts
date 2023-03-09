import styled from 'styled-components'

type Props = {
  maxWidth?: number
}

export const Container = styled.div<Props>`
  width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  display: flex;
  flex-direction: column;
  gap: 12px;
  .inputLabel {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--dark);
  }
  .inputField {
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid var(--gray-500);
    background-color: var(--light);
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    color: var(--dark);
    width: 100%;

    option {
      font-weight: 400;
    }
  }
`
