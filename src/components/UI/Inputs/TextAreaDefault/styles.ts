import styled, { css } from 'styled-components';
import Tooltip from '../../../shared/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .errorValidation {
    margin-top: 10px;
    color: var(--status-danger);
  }
`;

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  position: relative;

  border-color: #e2e8f0;
  word-wrap: break-word;

  textarea {
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    font-size: 16px;
    color: var(--dark);
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    background: var(--white);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 5rem;
    line-height: 1.375;
    vertical-align: top;
    resize: none;

    &::placeholder {
      color: var(--gray-200);
    }

    &:focus-visible {
      z-index: 1;
      border-color: rgb(49, 130, 206);
      box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
    }
  }
`;

export const Error = styled(Tooltip)`
  /* height: 20px; */
  z-index: 3;
  right: 0px;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  /* pointer-events: none; */
  svg {
    margin: 0px;
  }
  span {
    background: #e62965;
    color: #fff;
    &::before {
      border-color: #e62965 transparent;
    }
  }
`;

export const CharCount = styled.span`
  display: flex;
  align-self: flex-end;
  margin-top: 5px;
  font-size: 13px;

  &.textRed {
    color: #e62965;
  }
  &.textNormal {
    color: var(--gray-500);
  }
`;
