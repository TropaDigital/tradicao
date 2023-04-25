import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-weight: 400;
    }
  }
`;

export const CheckRemember = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  cursor: pointer;
  aspect-ratio: 4/4;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid var(--dark);
  background: none;
  position: relative;

  &:checked {
    background-color: var(--secondary);
    border: 1.5px solid var(--secondary);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6668 1.49976L4.25016 7.91642L1.3335 4.99976' stroke='white' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
