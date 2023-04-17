import styled from 'styled-components'

type Props = {
  minHeight?: number
}

export const Container = styled.div<Props>`
  width: 100%;
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
    padding: 10px 14px;
    resize: none;
    min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : '72px')};
    font-size: 16px;
    font-weight: 400;
    color: var(--text1);
  }
`

export const ToolTipContainer = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`
