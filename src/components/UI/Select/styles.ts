import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  select {
    padding: 10px 16px;
    font-size: 16px;
    background-color: var(--white);
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    color: var(--gray-400);

    option {
      color: var(--dark);
    }
    option:disabled {
      color: var(--gray-400);
    }
  }

  .svgWrapper {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 8px;
    right: 2px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
