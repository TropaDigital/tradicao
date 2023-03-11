import { JornalIcon } from '@/assets/icons';
import { Container } from './styles';

interface StepsProps {
  handleOnClick: (step: any) => void;
  currentStep: number;
}

export default function Steps({ currentStep, handleOnClick }: StepsProps) {

  return (
    <Container>
      <div className={`step ${currentStep === 1 ? " stepActive" : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick(1)}
        >
          <JornalIcon color="#0036C6" />
          <span>Veiculos</span>
        </button>

        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 2 ? "stepActive " : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick(2)}
        >
          <JornalIcon color="#0036C6" />
          <span>imóvel</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 3 ? "stepActive " : ""} `}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick(3)}
        >
          <JornalIcon color="#0036C6" />
          <span>Serviços</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>

      <div className={`step ${currentStep === 4 ? "stepActive " : ""}`}>
        <button 
          type='button' 
          className="stepButton"
          onClick={() => handleOnClick(4)}
        >
          <JornalIcon color="#0036C6" />
          <span>Caminhão</span>
        </button>
        
        <div className="stepButtonInner" />
      </div>
    </Container>
  )
}
