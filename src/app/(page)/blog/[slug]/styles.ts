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

export const BlogHeader = styled.div`
  margin: 30px 0;

  .post-category {
    padding: 5px 12px;
    background-color: var(--secondary);
    color: var(--white);
    border-radius: 20px;
    cursor: pointer;

    a {
      color: var(--white);
    }
  }

  .post-title {
    font-size: 38px;
    font-weight: 600;
    margin: 28px 0 15px;
    padding-left: 12px;
    position: relative;

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 40px;
      background-color: var(--primary-light);
    }
  }

  .post-date {
    font-size: 15px;
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

  a {
    color: var(--gray-700);
  }
`;

export const PostThumbnail = styled.div`
  aspectio-ratio: 16/9;
  width: 100%;
`;
