import styled from 'styled-components'

type Props = {
  width?: number
}

export const Container = styled.div<Props>`
  /* width: 300px; */
  width: ${({ width }) => (width ? `${width}px` : '120px')};
  display: flex;
  flex-direction: column;
  gap: 12px;
  .inputLabel {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--dark);
  }
`

export const InputWrapper = styled.div`
  position: relative;
  max-width: 100%;

  .inputField {
    height: 48px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--gray-500);
    background-color: var(--light);
    padding: 0 16px;

    font-size: 16px;
    font-weight: 400;
    color: var(--text1);
  }

  .innerButton,
  .outerButton {
    position: absolute;
    width: 17px;
    height: 14px;
    background-color: var(--light);
    pointer-events: none;
    z-index: 2;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .innerButton {
    top: 10px;
  }

  .outerButton {
    bottom: 10px;
  }
`

export const ToolTipContainer = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`
