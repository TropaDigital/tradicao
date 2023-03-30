import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -40px;
  width: 150px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin-left: -145px;
  button {
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: var(--white);
  }
  .normalText {
    color: var(--gray-700);
  }
  .redText {
    color: var(--status-danger);
  }
`;
