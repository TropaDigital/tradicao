import styled, { css, keyframes } from 'styled-components';

interface Props {
  isChecked?: boolean;
}

interface Props {
  direction?: 'column' | null;
}

const gooeyIn = keyframes`
  45% {
    transform: scaleX(1.25);
  }
`;

const gooeyOut = keyframes`
  55% {
    transform: scaleX(1.25);
  }
`;

const gooeyInAnimation = css`
  animation: ${gooeyIn} 0.35s;
`;

const gooeyOutInAnimation = css`
  animation: ${gooeyOut} 0.35s;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const StyledSwitch = styled.span`
  display: block;
  width: 34px;
  padding: 4px;
  border-radius: 50px;
  background: #e3e5ea;
  transition: all 0.35s;
`;

export const StyledKnob = styled.span<Props>`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #039be5;

  ${({ isChecked }) => !isChecked && gooeyOutInAnimation}

  transition: all 0.35s;
`;

export const StyledInput = styled.input<Props>`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledSwitch} {
    background: #039be5;
  }

  &:checked ~ ${StyledSwitch} ${StyledKnob} {
    margin-left: 14px;
    background: #fff;

    ${({ isChecked }) => isChecked && gooeyInAnimation}
  }
`;
