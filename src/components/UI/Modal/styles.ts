import styled from 'styled-components'

type Props = {
    isOpen: boolean
}

export const Container = styled.div<Props>`
  display: ${({ isOpen }) => isOpen ? "flex" : "none"};
  flex-direction: column;
  gap: 6px;
  background: linear-gradient(77.17deg, var(--primary-dark) -0.7%, var(--primary) 93.94%);
  box-shadow: 0px 19px 14px -10px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  border-radius: 10px;

  a {
    line-height: 26px;
    text-overflow: ellipsis;
    color: var(--white);
    font-size: 14px;
    white-space: nowrap;
    svg {
      margin-right: 10px;
    }
  }
`
