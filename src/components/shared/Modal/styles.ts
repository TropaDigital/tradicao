import styled from 'styled-components';

type Props = {
  isOpen?: boolean;
};

export const OverlayContainer = styled.div<Props>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ isOpen }) => (isOpen ? 'static' : 'none')};
`;

export const ModalContainer = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;
