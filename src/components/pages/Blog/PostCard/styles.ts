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
      background-color: var(--primary);
      color: var(--white);
    }
  }

  .post-date {
    position: absolute;
    top: 15px;
    left: -8px;
    width: 80px;
    height: 40px;
    padding: 5px;
    border: 2px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 2px;
    gap: 5px;
    font-size: 14px;
    font-weight: 700;
    color: var(--primary);
    transition: 150ms linear;

    .post-day {
      font-size: 16px;
    }
  }

  .post-thumb {
    width: 100%;
    height: 100%;
  }

  .post-description-container {
    padding: 10px;

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
  }
`;
