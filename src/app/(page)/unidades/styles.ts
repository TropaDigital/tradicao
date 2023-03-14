'use client';

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 43px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--light);
  border-radius: 10px;
  width: 100%;
`;

export const CepContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  max-width: 100%;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  .cep-input {
    width: 303px;
  }

  .cep-button {
    width: 104px;
  }
`;

export const CityStateContainer = styled.div`
  padding-left: 30px;
  width: 100%;
`;

export const UnitsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
`;

export const UnityCard = styled.div`
  position: relative;
  text-align: end;
  width: 270px;
  padding: 30px 20px;
  line-height: 18px;
  border: 1px solid var(--light);
  border-radius: 10px;
  box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;

  :hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.2);
    cursor: pointer;
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
