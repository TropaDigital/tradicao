'use client';

import styled from 'styled-components';

export const PropertiesConsortiumType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1090px) {
    margin: 70px 0 40px 0;
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

  /* margin: 50px 0; */
`;

export const ConsortiumCardImage = styled.div`
  height: 155px;

  img {
    height: 100%;
  }
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
