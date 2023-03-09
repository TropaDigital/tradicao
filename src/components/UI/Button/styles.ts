import styled, { css } from 'styled-components';

type Props = {
  variant?: string;
  weight?: '500' | '700';
  radius?: 'default' | 'rounded';
  color?: string;
  buttonWidth?: number;
  degrade?: boolean
};

export const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 14px;
  cursor: pointer;
  width: 100%;
  max-width: ${({ buttonWidth }) =>
    buttonWidth ? `${buttonWidth}px` : 'fit-content'};

  font-weight: ${({ weight = '700' }) => weight};
  border-radius: ${({ radius = 'default' }) =>
    radius === 'default' ? '4px' : '30px'};

  ${({ color = 'primary', variant = 'default' }) =>
    color &&
    variant &&
    css`
      background-color: ${color && variant === 'default' && `var(--${color})`};
      background: ${color && variant === "default" && `var(--degrade-primary)`};
      background-color: ${variant === 'outline' && 'transparent'};

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
