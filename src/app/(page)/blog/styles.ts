import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
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

export const AsideContainer = styled.aside`
  border-left: 1px solid var(--gray-300);
  padding-left: 30px;
  padding-bottom: 50px;
  height: 100%;
  margin: 30px 0;
  min-width: 255px;

  @media (max-width: 768px) {
    min-width: 0;
    border: none;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ListAsideTopics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .topic-title {
    position: relative;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
    cursor: default;

    &:hover::before {
      width: 23px;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -5px;
      width: 15px;
      height: 2px;
      transition: 300ms ease-in-out;
      background-color: var(--primary-light);
    }
  }

  .topic-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    cursor: pointer;
    line-height: 26px;
    padding: 4px 0;
    transition: 250ms linear;

    :hover {
      border-color: var(--primary-light);
      border-opacity: 0.7;
    }

    &:last-child {
      border: none;
      position: relative;

      &::before {
        content: '';
        width: 0;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.09);
        transition: 250ms linear;

        position: absolute;
        bottom: -2px;
      }

      &:hover::before {
        background-color: var(--primary-light);
        width: 15px;
      }
    }
  }
`;
