'use client';
import styled, { css, keyframes } from 'styled-components';
import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isIcon: boolean;
}

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--text-smal-sm);
    font-weight: var(--weight-medium);
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const ContainerInput = styled.div<ContainerProps>`
  width: 100%;
  height: fit-content;
  position: relative;

  border-color: #e2e8f0;
  word-wrap: break-word;
  border-radius: 0.375rem;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e62965;
      box-shadow: rgb(229 62 62) 0px 0px 0px 1px;
    `}

  select {
    padding-inline-end: 2rem;
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    background: inherit;
    padding-bottom: 1px;
    font-size: var(--text-smal-md);
    font-weight: var(--weight-reular);
    color: var(--gray-700);
    padding-inline-start: 1rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;

    &::placeholder {
      color: #cccccc;
    }

    &:focus-visible {
      z-index: 1;
      border-color: rgb(49, 130, 206);
      box-shadow: rgb(49 130 206) 0px 0px 0px 1px;

      /* ${(props) =>
        props.isErrored &&
        css`
          border-color: #e62965;
          box-shadow: #e62965 0px 0px 0px 1px;
        `} */
    }
  }

  .rightInputElement {
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
    pointer-events: none;

    ${(props) =>
      props.isFilled &&
      css`
        svg {
          stroke: rgb(49, 130, 206);
        }
      `}

    ${(props) =>
      props.isFocused &&
      css`
        svg {
          stroke: rgb(49, 130, 206);
        }
      `}
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

export const Alert = styled(Tooltip)`
  /* z-index: 3; */
  display: grid;
  place-items: center;
  margin-bottom: 5px;
  margin-left: 5px;

  svg {
    margin: 0px;
  }
  span {
    background: #ced4da;
    color: #fff;

    left: 200%;
    &::before {
      left: 33%;
      border-color: #ced4da transparent;
    }
  }
`;

export const ErrorInputMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  animation: ${fadeInUp} 0.5s linear;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #e62965;
  }
`;
