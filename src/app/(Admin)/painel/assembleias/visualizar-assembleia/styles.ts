import styled from 'styled-components';

export const AssembleiaDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .assembleiaDetails {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
