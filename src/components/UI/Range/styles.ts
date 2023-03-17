import styled from 'styled-components'

export const RangeInput = styled.input.attrs({
  type: 'range'
})`
  -webkit-appearance: none;
  width: 100%;
  max-width: 300px;
  height: 4px;
  background: var(--gray-400);
  border-radius: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--primary);
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`
