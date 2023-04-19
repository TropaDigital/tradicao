import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 0;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const LineInputsWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const InitialPostWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 15px;
  align-items: center;
  margin-bottom: 30px;

  .post-thumb-container {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    height: 280px;
    width: fit-content;

    .post-thumb-overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: var(--status-danger);
      transition: all 0.7s linear;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
    }

    .post-thumb-wrapper:hover .post-thumb-overlay {
      opacity: 0.5;
      cursor: pointer;
    }
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;

  .buttonContainer {
    display: flex;
    gap: 18px;
    max-width: 500px;
  }
`;
