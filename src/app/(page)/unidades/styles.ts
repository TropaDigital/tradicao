'use client';

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 43px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 101px;
  background: var(--light);
  border-radius: 10px;
  margin-top: 30px;
  padding: 20px;
  display: flex;
`

export const CepContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, .2);

  .cep-input {
    width: 303px;
  }
  
  .cep-button {
    width: 104px;
  }
`

export const CityStateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 30px;
  gap: 10px;
`

export const UnitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 40px;

  .mapModal {
    border-radius: 15px;
    color: var(--dark);
    box-shadow: var(--shadow);
    transition: all .3s;
    
    .close-modal {
      display: inline-block;
      text-align: end;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .unit-title {
      font-weight: 700;
      color: var(--primary);
      position: relative;
      margin-bottom: 15px;

      ::before {
        content: '';
        height: 2px;
        width: 15px;
        position: absolute;
        left: 0;
        bottom: -5px;
        background-color: var(--primary);
        transition: all 0.3s;
        border-radius: 3px;
      }

      :hover::before {
        width: 25px;
      }
    }

    .unit-phone-number {
      color: var(--dark);
      font-weight: 600;
      font-size: 16px;
    }

    .unit-address {
      display: flex;
      flex-direction: column;
      gap: 5px;
      
      .title {
        color: var(--primary);
        font-weight: 700;
        margin-top: 20px;
        font-size: 18px;
      }
    }

    .map-iframe {
      aspect-ratio: 1.33/1;
      @media(max-width: 670px) {
        width: 500px;
      }
      @media(max-width: 570px) {
        width: 450px;
      }
      @media(max-width: 530px) {
        width: 400px;
      }
      @media(max-width: 470px) {
        width: 320px;
        height: 300px;
      }
      @media(max-width: 370px) {
        width: 280px;
      }
      @media(max-width: 340px) {
        width: 240px;
      }
    }
  }
`;

export const UnityCard = styled.div`
  position: relative;
  text-align: end;
  width: 275px;
  padding: 30px 20px;
  line-height: 18px;
  border: 1px solid var(--light);
  border-radius: 10px;
  box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 30px -14px rgba(0, 0, 0, 0.2);
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
