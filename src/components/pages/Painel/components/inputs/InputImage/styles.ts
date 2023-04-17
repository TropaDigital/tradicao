import styled from 'styled-components';

export const Container = styled.div`
  .inputWrapper {
    position: relative;
    height: 200px;
    margin-bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-200);
    border: 1px dashed var(--dark);
    border-radius: 8px;

    .inputImage {
      position: absolute;
      background-color: transparent;
      width: 100%;
      height: 100%;
      color: transparent;
      opacity: 0;

      cursor: pointer;

      &::-webkit-file-upload-button {
        display: none;
      }
    }
    .inputContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      .inputTitle {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: var(--dark);
      }
      .inputButton {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: var(--dark);
      }
    }
  }
  .errorValidation {
    font-size: 15px;
    color: var(--status-danger);
  }
`;
