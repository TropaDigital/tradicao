'use client';

import brasaoImg from '../../../../public/images/Brasao.png';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  margin-left: 1.5rem;

  /* padding: 2.5rem 0 2rem; */
  height: 260px;
  position: relative;

  .backgroundImage {
    pointer-events: none;
    object-position: center;
    object-fit: cover;

    position: absolute;
    right: -10%;
    bottom: -150%;
    z-index: -1;

    @media (max-width: 600px) {
      bottom: -120%;
    }

    @media (max-width: 530px) {
      bottom: -85%;
    }

    @media (max-width: 350px) {
      bottom: -60%;
    }
  }
`;

export const GroupLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  justify-content: center;

  @media(max-width: 800px){
    flex-direction: column;
  }

  .logos {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    h3 {
      font-weight: var(--weight-bold);
      font-size: var(--text-smal-sm);
      line-height: 18px;
      text-align: center;

      color: var(--primary-mid);
    }
  }
`;
