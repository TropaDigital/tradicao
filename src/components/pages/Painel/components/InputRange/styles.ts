'use client'
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 20px;

  .inputRangeValues {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
    
    .values {
      font-weight: var(--weight-medium);
      font-size: var(--text-smal-xs);
      color: #152347;
    }
  }

`;