import { CarIcon, MovelIcon, ServiceIcon, TruckIcon } from '@/assets/icons';
import { Container } from './styles';

interface StepsProps {
  handleOnClick: (name: string, step: any) => void;
  currentStep: number;
}

export default function Steps({ currentStep, handleOnClick }: StepsProps) {

  return (
    <Container>
      <div className={`step ${currentStep === 1 ? " stepActive" : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick("carComponents", 1)}
        >
          <CarIcon />
          <span>Veiculos</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 2 ? "stepActive " : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick("imovelComponents", 2)}
        >
          <MovelIcon />
          <span>imóvel</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 3 ? "stepActive " : ""} `}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick("serviceComponents", 3)}
        >
          <ServiceIcon />
          <span>Serviços</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 4 ? "stepActive " : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick("truckComponents", 4)}
        >
          <TruckIcon />
          <span>Caminhão</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>
    </Container>
  )
}
