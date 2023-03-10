import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  .skewImageWrapper {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .chidrenWrapper{
    position: absolute;
    bottom: 0;
    margin-bottom: -80px;
    min-width: 642px;
  }
`;

export const BackgroundSection = styled.span`
  width: 100%;
  background: var(--degrade-blue);
  opacity: 0.2;
  height: 386px;
`;
