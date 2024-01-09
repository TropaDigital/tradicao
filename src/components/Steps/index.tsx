import {
  CarIcon,
  MotorcycleIcon,
  MovelIcon,
  ServiceIcon,
  TruckIcon
} from '@/assets/icons';
import { Container } from './styles';

interface StepsProps {
  handleOnClick: (name: string, step: any) => void;
  currentStep: number;
}

export default function Steps({ currentStep, handleOnClick }: StepsProps) {
  return (
    <Container>
      <div className={`step ${currentStep === 1 ? ' stepActive' : ''}`}>
        <button
          type="button"
          className="stepButton"
          onClick={() => handleOnClick('Veículos', 1)}
        >
          <div className={'iconWrapper'}>
            <CarIcon />
          </div>
          <span className="option-text">Veículos</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 2 ? 'stepActive ' : ''}`}>
        <button
          type="button"
          className="stepButton"
          onClick={() => handleOnClick('Imóveis', 2)}
        >
          <div className={'iconWrapper'}>
            <MovelIcon />
          </div>
          <span className="option-text">Imóveis</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 3 ? 'stepActive ' : ''} `}>
        <button
          type="button"
          className="stepButton"
          onClick={() => handleOnClick('Serviços', 3)}
        >
          <div className={'iconWrapper'}>
            <ServiceIcon />
          </div>
          <span className="option-text">Serviços</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 4 ? 'stepActive ' : ''}`}>
        <button
          type="button"
          className="stepButton"
          onClick={() => handleOnClick('Pesados', 4)}
        >
          <div className={'iconWrapper'}>
            <TruckIcon />
          </div>
          <span className="option-text">Pesados</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 5 ? 'stepActive ' : ''}`}>
        <button
          type="button"
          className="stepButton"
          onClick={() => handleOnClick('Motos', 5)}
        >
          <div className={'iconWrapper'}>
            <MotorcycleIcon />
          </div>
          <span className="option-text">Motos</span>
        </button>

        <div className="stepButtonInner" />
      </div>
    </Container>
  );
}
