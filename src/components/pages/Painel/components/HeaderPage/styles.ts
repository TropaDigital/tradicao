import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  .titleWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (max-width: 595px) {
      margin-bottom: 20px;
    }
    .titleProductPage {
      font-size: 32px;
      line-height: 40px;
      font-weight: 600;
      color: var(--dark);
    }
    .pathComponent {
    }
  }
  .buttonWrapper {
    max-width: 100%;
    @media (max-width: 835px) {
      p {
        display: none;
      }
    }
    .buttonContentWrapper {
      display: flex;
      gap: 10px;
      align-items: center;
      min-width: max-content;
      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--dark);
      }
    }
  }
`;
