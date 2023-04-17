import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 380px;

  @media (max-width: 480px) {
    min-width: 280px;
  }

  @media (max-width: 370px) {
    min-width: 230px;
  }

  .complaint-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .complaint-title {
    color: var(--primary);
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

export const ConfirmModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
