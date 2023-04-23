import styled from 'styled-components';

export const Container = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  transition: 150ms linear;
  position: relative;

  :hover {
    box-shadow: var(--shadow);

    .post-date {
      background-color: var(--secondary);
      color: var(--white);
    }
  }

  .post-date {
    position: absolute;
    top: 15px;
    right: -11px;
    width: 80px;
    height: 40px;
    padding: 5px;
    border: 2px solid var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 2px;
    gap: 5px;
    font-size: 14px;
    font-weight: 700;
    color: var(--secondary);
    transition: 150ms linear;
    border-radius: 10px;

    .post-day {
      font-size: 16px;
    }
  }

  .post-thumb {
    width: 100%;
    max-height: 230px;
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
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .read-more {
      font-weight: 700;
      color: var(--primary-light);
    }
  }
`;
