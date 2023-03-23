'use client';
import styled from 'styled-components';

export const ContainerTop = styled.div`
  height: 500px;
  position: relative;

  margin-bottom: 30px;

  .margin {
    margin-top: 30px;
    position: relative;
  }
  
  @media (max-width: 1090px) {
    height: 800px;
  }

  @media (max-width: 500px) {
    height: 380px;
  }

  @media (max-width: 330px) {
    height: 420px;
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

export const LoginUniversity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: fit-content;
  height: fit-content;
  background-color: var(--primary);
  background: var(--degrade-primary);
  border-radius: 10px;

  padding: 48px;

  position: absolute;
  top: -160px;
  right: -100px;

  .input {
    width: 360px;

    .label {
      color: white;
      font-size: 14px;
      font-weight: 700;
    }

    input {
      width: 100%;
      height: 38px;

      border-radius: 5px;
      padding: 8px;
    }
  }
`;

export const LoginTitle = styled.div`
  color: var(--white);
  font-size: var(--text-headline-sm);
  font-weight: var(--weight-bold);

  text-align: center;
`;

export const CheckboxLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 16px;

  input {
    
    &:focus-visible {
      outline: none;
    }
  }

  span {
    color: var(--white);

    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
  }

` 

export const TextButton = styled.button`
  background-color: transparent;

  color: var(--white);

  font-size: var(--text-smal-sm);
  font-weight: var(--weight-regular);
  font-style: italic;

  margin-left: auto;
`
