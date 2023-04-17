import styled from 'styled-components'

type Props = {
  width?: number
  height?: number
}

export const TextAreaContainer = styled.textarea<Props>`
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  resize: none;
  font-size: 16px;
  color: var(--dark);
  width: 100%;
  height: 100%;
  max-width: ${({ width }) => (width ? width + 'px' : '450px')};
  max-height: ${({ height }) => (height ? height + 'px' : '300px')};
  padding: 10px 8px;

  &:placeholder {
    color: var(--gray-300);
    text-overflow: ellipsis;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-500);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-700);
  }
`
