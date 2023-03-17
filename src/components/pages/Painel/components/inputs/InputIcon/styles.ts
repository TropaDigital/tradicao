import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .inputContainer {
    position: relative;
    .iconWrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 18px;
    }
    .inputField {
      width: 100%;
      height: 48px;
      border-radius: 5px;
      border: 1px solid var(--gray-500);
      background-color: var(--light);
      padding: 0 50px;

      font-size: 16px;
      font-weight: 400;
      color: var(--dark);
      text-overflow: ellipsis;
    }
  }
  .validationError {
    font-weight: 500;
    font-size: 14px;
    color: var(--status-danger);
  }
`
