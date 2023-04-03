import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleContainer = styled.div`
  .subtitle {
    font-weight: 400;
    color: var(--gray-600);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .relatorio-button {
    max-width: 555px;
  }
`;
