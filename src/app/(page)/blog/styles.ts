import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 30px;
  margin: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .blog-subtitle {
    color: var(--gray-500);
    font-weight: 600;
  }
`;

export const ListPostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 45px;
`;