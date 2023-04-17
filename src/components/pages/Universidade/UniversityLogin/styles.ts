'use client';
import styled from 'styled-components';

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 458px;
    height: fit-content;
    background-color: var(--primary);
    background: var(--degrade-primary);
    border-radius: 10px;

    padding: 48px;

    position: absolute;
    top: -110px;
    right: 0;

    .university-form {
      display: flex;
      flex-direction: column;
      gap: 16px;

    }

    @media (max-width: 800px) {
      top: 250px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
    }

    @media (max-width: 500px) {
      width: 100%;
      top: 0;
      left: auto;
      right: auto;
      /* display: none; */
    }
`

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