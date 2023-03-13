import styled, { css } from 'styled-components';
import Tooltip from '../../../shared/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isIcon: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 14px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
  }
`;

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  position: relative;

  border-color: #e2e8f0;
  word-wrap: break-word;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #E62965;
    `}

  input {
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    /* position: relative; */
    appearance: none;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    font-size: 14px;
    color: var(--dark);
    padding-inline-start: ${(props) => (props.isIcon ? '2.5rem' : '1rem')};
    padding-inline-end: ${(props) => (props.isErrored ? '2.5rem' : '1rem')};
    height: 2.667rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    background: var(--white);

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
      border-color: #E62965;
      box-shadow: #E62965 0px 0px 0px 1px;
    `} */

    }



  ::-webkit-calendar-picker-indicator {
    background-color: #cecece;
    cursor: pointer;
    border-radius: 3px;
    position: absolute;
    left: 0px;
    opacity: 0;
  }

  }

  .leftInputElement {
    left: 0px;
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
          fill: rgb(49, 130, 206);
          /* stroke: rgb(49, 130, 206); */
        }
      `}

    ${(props) =>
      props.isFocused &&
      css`
        svg {
          fill: rgb(49, 130, 206);
          /* stroke: rgb(49, 130, 206); */
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
    background: #E62965;
    color: #fff;
    &::before {
      border-color: #E62965 transparent;
    }
  }
`;

export const Alert = styled(Tooltip)`
  z-index: 3;
  display: grid;
  place-items: center;
  margin-bottom: 5px;
  margin-left: 5px;

  svg {
    margin: 0px;
  }
  span {
    background: #CED4DA;
    color: #fff;
    &::before {
      border-color: #CED4DA transparent;
    }
  }
`