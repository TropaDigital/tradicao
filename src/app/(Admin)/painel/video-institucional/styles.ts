import styled, { css } from 'styled-components';

interface IVideoWrapper {
  videoIsRunning: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1365px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    align-items: unset;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const MediaContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const VideoContainer = styled.div`
  max-width: 900px;
  max-height: 510px;
  width: 100%;
  height: 100%;
`;

export const PreviewVideoTitle = styled.h3`
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
`;

export const VideoWrapper = styled.div<IVideoWrapper>`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;

  video {
    border-radius: 10px;
  }

  .bgHomeVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlayPlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    transition: all 0.3s;

    @media (min-width: 769px) {
      &:hover {
        transition: all 0.3s;
        opacity: 1;
      }
    }

    ${({ videoIsRunning }) =>
      !videoIsRunning &&
      css`
        opacity: 1;
        transition: all 0.3s;
      `}

    .videoButtonWrapper {
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
    }

    .thirdColor,
    .secondColor,
    .primaryColor {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .thirdColor {
      cursor: pointer;
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background: linear-gradient(
        97.17deg,
        rgba(0, 54, 198, 1) -10.7%,
        rgba(62, 101, 208, 0.3) 13.94%
      );

      &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
      }

      transition: all 0.5s;

      .secondColor {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        background: linear-gradient(
          77.17deg,
          rgba(0, 54, 198, 1) -0.7%,
          rgba(62, 101, 208, 0.1) 93.94%
        );
        box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.85);
        .primaryColor {
          width: 5.625rem;
          height: 5.625rem;
          border-radius: 50%;
          background-color: var(--primary);
        }
      }

      @media (max-width: 1024px) {
        transform: scale(0.8);
        &:hover {
          transform: scale(0.85);
        }
      }

      @media (max-width: 769px) {
        transform: scale(0.45);
        &:hover {
          transform: scale(0.5);
        }
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 250px;

        .secondColor {
          width: 200px;
          height: 200px;
          .primaryColor {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
  }
`;

export const InputWrapper = styled.div`
  appearance: none;
  width: 100%;
  height: 40px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  color: var(--gray-300);
  cursor: pointer;

  .validationError {
    font-size: 14px;
    color: var(--status-danger);
    margin-top: 5px;
    margin-left: 5px;
  }

  label {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    p {
      padding: 16px 15px;
    }

    button {
      height: 100%;
      width: 82px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: none;
      color: var(--gray-600);
      background-color: var(--gray-200);
      transition: all 0.3s;
    }
  }

  input {
    display: none;
  }
`;
