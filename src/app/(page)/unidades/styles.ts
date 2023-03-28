'use client';

import ModalDefault from '@/components/shared/Modal';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 43px 0;
  width: 100%;

  .paginationComponent {
    display: flex;
    align-self: flex-end;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px;
  background-color: var(--light);
  border-radius: 10px;
  width: 100%;
  margin: 30px 0;

  @media (max-width: 880px) {
    flex-wrap: wrap;
  }
`;

export const CepContainer = styled.div`
  display: block;
  width: 100%;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 880px) {
    padding-right: 0;
    padding-bottom: 30px;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .cep-form {
    display: flex;
    align-items: flex-end;
    gap: 10px;

    @media (max-width: 880px) {
      flex-wrap: wrap;
    }

    .cep-button {
      max-width: 104px;
      @media (max-width: 880px) {
        max-width: 100%;
      }
    }
  }
`;

export const CityStateContainer = styled.div`
  display: block;
  width: 100%;
  padding-left: 30px;
  @media (max-width: 880px) {
    padding-left: 0;
    padding-top: 30px;
  }
  .city-state-form {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    width: 100%;

    @media (max-width: 880px) {
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;

export const UnitsContainer = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
`;

export const UnityCard = styled.div`
  position: relative;
  text-align: end;
  min-width: 270px;
  height: 180px;
  padding: 30px 20px;
  line-height: 18px;
  border: 1px solid var(--light);
  border-radius: 10px;
  box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  background: var(--white);

  :hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.2);
  }

  .location-bg-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .unity-title {
    font-weight: 700;
    color: var(--primary);
    font-size: 14px;
  }

  .unity-description {
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
  }
`;

export const MapModal = styled(ModalDefault)`
  text-align: end;
  max-width: 640px;

  .map-container {
    text-align: center;
  }

  iframe {
    @media (max-width: 700px) {
      width: calc(0.9 * 600px);
      height: calc(0.9 * 450px);
    }
    @media (max-width: 630px) {
      width: calc(0.8 * 600px);
      height: calc(0.8 * 450px);
    }
    @media (max-width: 580px) {
      width: calc(0.7 * 600px);
      height: calc(0.7 * 450px);
    }
    @media (max-width: 500px) {
      width: calc(0.65 * 600px);
      height: calc(0.7 * 450px);
    }
    @media (max-width: 475px) {
      width: calc(0.58 * 600px);
      height: calc(0.7 * 450px);
    }
    @media (max-width: 455px) {
      width: calc(0.5 * 600px);
      height: calc(0.6 * 450px);
    }
    @media (max-height: 800px) {
      height: calc(0.6 * 600px);
    }
  }

  .unit-header {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .unit-contact {
    font-weight: 700;
    color: var(--dark);
  }
  .unit-title {
    font-weight: 700;
    color: var(--primary);
    font-size: 16px;
  }
  .unit-address {
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
  }
`;

export const TitleContainer = styled.div`
  .subtitle {
    font-weight: 400;
    color: var(--gray-500);
  }
`;
