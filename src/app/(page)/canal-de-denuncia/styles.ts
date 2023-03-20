import styled from 'styled-components';

export const Container = styled.div`
  margin: 43px 0;
`;

export const TextContainer = styled.div`
  .compliance-text {
    font-weight: 400;
    color: var(--gray-600);
    margin-bottom: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 730px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;
