// import { CloseIcon } from '@/src/assets/icons';
import { Container } from './styles';
import { modalProps } from './types';

export default function Modal({ onClose, setData, children }: modalProps) {
  return (
    <Container>
      <div
        className="overlayClose"
        onClick={() => {
          onClose();
        }}
      ></div>
      <body className="modalContent">
        <div className="closeModal" onClick={() => onClose()}>
          {/* <CloseIcon size={30} color={`var(--color1A)`} /> */}
        </div>
        {children}
      </body>
    </Container>
  );
}
