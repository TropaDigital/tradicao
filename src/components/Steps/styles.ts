'use client'
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  position: relative;

  border-bottom: 2px solid #0036C6;

  .stepButtonInner {
    display: grid;
    place-items: center;
    z-index: 2;
    flex-shrink: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    transition: all 0.35s;
    position: absolute;
    bottom: -1px;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    z-index: 1;
    background: #fff;
  }

  .stepButton {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px;
    background-color: transparent;

    span {
      font-weight: 400;
      font-size: 14px;
      color: #0036C6;
    }
  }

  .stepActive {
    span {
      font-weight: 700;
    }

    .stepButtonInner {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      background-color: #0036C6;
    }
  }
`;