import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px 30px;

  .work-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;
  margin-bottom: 44px;
  white-space: nowrap;

  .stage-form-button {
    height: 68px;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const TitleContainer = styled.div`
  .subtitle {
    font-weight: 400;
    color: var(--gray-500);
  }
`