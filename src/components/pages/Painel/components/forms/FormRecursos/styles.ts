import styled from 'styled-components';

export const InputWrapper = styled.div`
  appearance: none;
  width: 100%;
  height: 40px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  color: var(--gray-300);
  cursor: pointer;

  label {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    p {
      padding: 16px 15px;
    }

    button {
      height: 100%;
      width: 82px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: none;
      color: var(--gray-600);
      background-color: var(--gray-200);
      transition: all 0.3s;
    }
  }

  input {
    display: none;
  }
`;
