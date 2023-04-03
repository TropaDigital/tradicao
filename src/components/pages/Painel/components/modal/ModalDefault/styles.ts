import styled from 'styled-components';
// import { colors } from '../../../../../assets/styles/mixin'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlayClose {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 37, 41, 0.5);
    backdrop-filter: blur(5px);
  }
  .closeModalContainer {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    .closeModal {
      cursor: pointer;
    }
  }
  .modalContent {
    position: relative;
    background-color: var(--white);
    max-width: 528px;
    width: 100%;
    max-height: 80%;
    height: auto;
    padding: 24px;
    border-radius: 12px;
    overflow-y: auto;
    margin: 0 20px;
    @media (max-width: 450px) {
      border-radius: 8px;
      padding: 16px;

      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb,
      &::-webkit-scrollbar-thumb:hover {
        border-radius: 8px;
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: var(--light);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--dark);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--secondary-dark);
      border-radius: 12px;
    }
  }
`;
