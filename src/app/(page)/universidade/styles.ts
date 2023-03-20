'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: 1090px) {
    height: 800px;
  }

  margin-bottom: 30px;
  .margin {
    margin-top: 30px;
  }
`;

export const UniversityInfo = styled.div`
  max-width: 650px;
  max-height: 145px;

  margin-top: 30px;
`;

export const InfoTitle = styled.div`
  color: var(--primary);

  font-size: 2rem;
  font-weight: var(--weight-bold);
`;

export const TextDescription = styled.div`
  margin-top: 10px;

  color: var(--gray-600);

  font-size: var(--text-smal-sm);
  font-weight: var(--weight-regular);
`;

export const ContainerMid = styled.div`
  height: 200px;
  background: var(--secondary);
  background: var(--degrade-secondary);

  padding-top: 40px;
`;
export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoursesTitle = styled.div`
  color: var(--white);

  font-size: var(--text-headline-lgx);
  font-weight: var(--weight-bold);

  &::before {
    content: '';
    border-left: 7px solid var(--white);
    margin-right: 10px;
  }
`;

export const CoursesDescription = styled.div`
  color: var(--white);

  font-size: var(--text-smal-sm);
  font-weight: var(--weight-regular);

  margin-top: 15px;
`;

export const ContainerBottom = styled.div`
  /* background-color: lightblue; */
`;
