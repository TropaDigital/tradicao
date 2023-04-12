import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  transition: 150ms linear;
  position: relative;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  max-width: 270px;

  :hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.23);
  }

  .post-thumb {
    height: calc(230px * 0.65);
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .post-description-container {
    padding: 10px 10px 20px;

    .post-title {
      margin: 8px 0 15px;
      position: relative;

      ::before {
        content: '';
        position: absolute;
        bottom: -3px;
        width: 18px;
        height: 2px;
        background-color: var(--primary);
        border-radius: 2px;
      }
    }

    .post-description {
      color: var(--gray-700);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      margin-bottom: 8px;
    }

    .read-more {
      font-weight: 700;
      color: var(--primary-light);
    }
  }
`;
