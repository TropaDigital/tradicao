import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputLabel = styled.label`
  font-weight: 700;
  color: var(--primary);
`;

export const InputWrapper = styled.div`
  appearance: none;
  width: 100%;
  height: 40px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  color: var(--gray-300);
  cursor: pointer;

  .validationError {
    font-size: 14px;
    color: var(--status-danger);
    margin-top: 5px;
    margin-left: 5px;
  }

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
