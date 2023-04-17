// import { CloseIcon } from '@/src/assets/icons';
import { CloseIcon } from '@/assets/icons';
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
      <div className="modalContent">
        <div className="closeModalContainer">
          <div className="closeModal" onClick={() => onClose()}>
            <CloseIcon size={30} color={`var(--status-danger)`} />
          </div>
        </div>
        {children}
      </div>
    </Container>
  );
}
