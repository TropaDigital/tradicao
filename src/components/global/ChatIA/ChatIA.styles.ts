import styled from 'styled-components';
import { IPropsChatIA } from './ChatIA';

export const ContainerChatIA = styled.div<IPropsChatIA>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999999999;
  display: flex;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: fadeIn;
  animation-duration: 0.1s;
  .head {
    width: 500px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    button {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      h2,
      p {
        color: #fff;
      }
    }
  }
  .chat {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    max-width: 90%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .messages {
      box-sizing: border-box;
      overflow: auto;
      flex: 1;
      gap: 10px;
      display: flex;
      flex-direction: column;
      scroll-behavior: smooth;
      .message {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .right {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        &.sent {
          .right {
            align-items: flex-end;
          }
        }
        .photo {
          min-width: 60px;
          max-width: 60px;
          width: 60px;
          height: 60px;
          min-height: 60px;
          max-height: 60px;
          border-radius: 100px;
          /*tradicao*/
          background-size: auto 60px;
          background-position-x: -12px;
          margin-right: 10px;
        }
        &.sent {
          .photo {
            display: none;
          }
        }
        .text {
          background: rgba(0, 0, 0, 0.1);
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.8);
          display: flex;
          flex-wrap: wrap;
          gap: 0px 4px;
          align-items: center;
          .text-with {
            display: inline-block;
          }
          .btn-link {
            display: flex;
            border-radius: 5px;
            align-items: center;
            justify-content: center;
            gap: 6px;
            color: #02cb5e;
            font-weight: bold;
          }
          svg {
            width: 20px;
            height: 20px;
            display: inline-block;
            color: #02cb5e;
          }
        }
        .date {
          font-size: 11px;
          margin-top: 5px;
        }
      }
    }
    .sent {
      display: flex;
      padding: 10px;
      width: 100%;
      height: 70px;
      min-height: 70px;
      box-sizing: border-box;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        background: #eaeaea;
        border: none;
        padding: 0px 10px;
        border-radius: 8px;
        outline: none;
        padding-right: 50px;
      }
      button {
        background: transparent;
        border: none;
        position: absolute;
        right: 20px;
        top: 23px;
        &.loading {
          color: #00cb5e;
        }
      }
    }
  }
`;
