'use client';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: var(--white);
  overflow-x: hidden;
`;

export const RightWrapper = styled.div`
  height: 100%;
  width: 600px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  .columnGreen {
    height: 100%;
    width: 300px;
    background-color: var(--primary-dark);
    align-self: flex-end;
    position: absolute;
    right: 0;
    z-index: 0;
  }
  .bgImageWrapper {
    width: 400px;
    height: 850px;
    margin-right: 52px;
    z-index: 2;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    @media (max-height: 850px) {
      height: 95%;
      margin-right: 0px;
    }
    .bgImageWithBlur {
      max-width: 100%;
      max-height: 100%;
    }
  }
  @media (max-height: 720px) {
    .bgImageWrapper {
      .bgImage {
        padding: 80px;
      }
      .logoCasaAmazonia {
        display: none;
      }
    }
  }
  @media (max-width: 1100px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: calc(100% - 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .panelAccess {
    width: 416px;
    .logoGreenCasaAmazonia {
      margin-bottom: 96px;
    }
    .welcomeBack {
      font-size: 32px;
      line-height: 32px;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 8px;
    }
    .subtitleForm {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: var(--gray-500);
      margin-bottom: 40px;
    }
    .inputWrapper {
      margin-bottom: 24px;
    }
    .textSubmitPanel {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--white);
    }
  }
  @media (max-width: 1100px) {
    width: calc(100% - 500px);
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding: 20px;
    .panelAccess {
      width: 100%;
      .logoGreenCasaAmazonia {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
