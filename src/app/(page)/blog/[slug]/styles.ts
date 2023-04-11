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

export const BlogContent = styled.article`
  padding: 30px 0;

  p {
    line-height: 26px;
    font-size: 19px;
    margin-bottom: 16px;
    color: var(--gray-600);
  }
`;

export const PostThumbnail = styled.div`
  aspectio-ratio: 16/9;
  width: 100%;
`;
