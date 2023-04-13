import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 0;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LineInputsWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const InitialPostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
