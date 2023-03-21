import styled from 'styled-components';

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999999;
  background-color: var(--white);

  .loading-ball {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #0036c6;
    animation: motion 3s ease-in-out;
    opacity: 0.7;
  }

  .icon-container {
    opacity: 0.7;
  }

  @keyframes motion {
    0% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-70px) scale(0.3);
    }
    50% {
      transform: translateX(0) scale(1);
    }
    75% {
      transform: translateX(70px) scale(0.3);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }
`;
