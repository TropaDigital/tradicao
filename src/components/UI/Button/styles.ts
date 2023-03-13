import styled, { css } from 'styled-components';

type Props = {
  variant?: string;
  weight: 500 | 700;
  radius?: 'default' | 'rounded';
  color?: string;
  degrade?: boolean
};

export const ButtonContainer = styled.button<Props>`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* gap: 8px; */
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  width: 100%;

  font-weight: ${({ weight }) => weight};
  border-radius: ${({ radius = 'default' }) =>
    radius === 'default' ? '4px' : '30px'};

  ${({ color = 'primary', variant = 'default', degrade }) =>
    color &&
    variant &&
    css`
      background: ${color && variant === 'default' && `var(--${color})`};
      background: ${color === "primary" && degrade && variant === "default" && `var(--degrade-primary)`};
      background: ${color === "secondary" && degrade && variant === "default" && `var(--degrade-secondary:)`};
      background: ${variant === 'outline' && 'transparent'};

      border-width: 1px;
      border-style: solid;
      border-color: ${color && variant === 'outline' && `var(--${color})`};
      border: ${variant === 'default' && 'none'};

      color: ${variant && color && `var(--${color})`};
      color: ${variant === 'default' && 'var(--white)'};

      svg {
        path {
          stroke: ${color && `var(--${color})`};
          stroke: ${variant === 'default' && 'var(--white)'};
        }
      }
    `}
`;
