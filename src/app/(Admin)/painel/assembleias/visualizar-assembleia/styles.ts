import styled from 'styled-components';

export const AssembleiaDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .assembleiaDetails {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export const AssembleiaThumbnail = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  width: fit-content;
  overflow: hidden;
  position: relative;

  .inputWrapper {
    width: 613px;
    height: 280px;
  }

  .removeImageOverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--status-danger);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    opacity: 0;

    :hover {
      opacity: 0.5;
    }
  }
`;
