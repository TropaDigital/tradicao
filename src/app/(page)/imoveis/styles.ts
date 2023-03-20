'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: 1090px) {
    height: 700px;
  }

  .margin {
    margin-top: 30px;
  }
`;

export const SubtitleTop = styled.div`
  font-size: var(--text-smal-xl);
  font-weight: var(--weight-bold);
  color: var(--gray-600);
`;

export const PropertiesConsortiumType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 1200px) and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 10px;
    padding: 40px;
  }
`;

export const ConsortiumCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 165px;
  height: 216px;

  border: 1px solid var(--light);
  border-radius: 10px;

  background: var(--white);
  box-shadow: 0px 10px 30px -14px rgba(0, 0, 0, 0.12);

  margin: 50px 0;
`;

export const ConsortiumCardImage = styled.div`
  height: 155px;
`;

export const ConsortiumCardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60px;

  color: var(--primary);
  font-size: var(--text-smal-md);
  font-weight: var(--weight-bold);
`;
