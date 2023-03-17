import styled, { css } from 'styled-components';

interface IPropsStyle {
  color: "primaryButton" | "darkButton" | "transparent"
}

export const Button = styled.button<IPropsStyle>`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 24px;
  border: 0;
  color: var(--light);
  cursor: pointer;
  font-weight: 600;

  ${({ color }) =>
    color === 'primaryButton' &&
    css`
      background-color: var(--primary);
    `}

  ${({ color }) =>
    color === 'darkButton' &&
    css`
      background-color: var(--primary-dark);
    `}

    ${({ color }) =>
    color === 'transparent' &&
    css`
      background-color: transparent;
      border: 1px solid var(--primary-dark);
      color: var(--primary-dark);
    `}
`;
