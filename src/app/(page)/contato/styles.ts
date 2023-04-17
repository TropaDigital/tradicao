'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .titleContactPage {
    margin-top: 43px;
    font-family: var(--bodyfont);
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: -0.02em;
    color: #213365;
  }

  .titleContactPage::before {
    content: '| ';
    font-weight: 800;
    color: #213365;
  }
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 30px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(50% - 15px);

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const MapsContainer = styled.div`
  position: relative;
  width: calc(50% - 15px);

  .mapsWrapper {
    height: 100%;
    margin-top: 20px;
  }

  iframe {
    border-radius: 10px;
    height: calc(100% - 40px - 13px);
    width: 100%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    iframe{
        height: 400px;
    }
  }
`;

export const ContactSubtitle = styled.h2`
  font-family: var(--bodyfont);
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  color: var(--primary);
`;

export const ContactText = styled.p`
  font-family: var(--bodyfont);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: var(--text-color-light);
`;

export const ServiceCard = styled.span`
  margin-top: 22px;
  background-color: var(--background-secondary);
  padding: 20px 18px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
    width: clamp(200px, 100%, 550px);

  .titleCard {
    font-family: var(--bodyfont);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: var(--primary-dark);
  }
  .textCard {
    margin-top: 10px;
    font-family: var(--bodyfont);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: var(--gray-600);
  }

  
`;
