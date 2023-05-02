import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: var(--primary);
`;

export const FinalText = styled.p`
  font-size: 16px;
  color: var(--primary);
`;
