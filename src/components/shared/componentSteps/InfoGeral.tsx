import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import InputRange from '@/components/pages/Painel/components/InputRange';
import { ContentSimulation } from '../SimulationForm/styles';

interface Props {
  simulatorPlan: string;
  setSimulatorPlan: (value: string) => void;
  styleButtonPlan: any;
  handleOnChangeValue: (value: number[]) => void;
  defaultValue: number;
  selectedType: string;
}

export default function InfoGeral({
  simulatorPlan,
  setSimulatorPlan,
  styleButtonPlan,
  handleOnChangeValue,
  defaultValue,
  selectedType
}: Props) {
  return (
    <div>
      <ContentSimulation>
        <legend>
          <h2>Simular plano por</h2>
        </legend>

        <div className="field-group" style={{ display: 'flex' }}>
          <ButtonDefault
            type="button"
            className={`buttonSimulatorPlan ${
              simulatorPlan === 'parcela' ? 'planActive' : ''
            }`}
            onClick={() => setSimulatorPlan('parcela')}
            color={`${
              simulatorPlan === 'parcela' ? 'primaryButton' : 'transparent'
            }`}
            style={{
              ...styleButtonPlan,
              borderRadius: '5px 0 0 5px',
              borderRightColor: '#0036C6',
              color: `${simulatorPlan === 'parcela' ? '#fff' : '#0036C6'}`
            }}
          >
            Parcela
          </ButtonDefault>
          <ButtonDefault
            type="button"
            className={`buttonSimulatorPlan ${
              simulatorPlan === 'credito' ? 'planActive' : ''
            }`}
            onClick={() => setSimulatorPlan('credito')}
            color={`${
              simulatorPlan === 'credito' ? 'primaryButton' : 'transparent'
            }`}
            style={{
              ...styleButtonPlan,
              borderRadius: '0 5px 5px 0',
              borderLeftColor: '#0036C6',
              color: `${simulatorPlan === 'credito' ? '#fff' : '#0036C6'}`
            }}
          >
            Crédito
          </ButtonDefault>
        </div>
      </ContentSimulation>

      <ContentSimulation>
        {
          simulatorPlan === 'parcela' &&
            <legend>
              <h2>Escolha o valor da parcela</h2>
            </legend>
        }

        {
          simulatorPlan === 'credito' &&
          <legend>
            <h2>Escolha o valor do crédito</h2>
          </legend>
        }
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(defaultValue ?? 0)}
        </strong>

        {
          selectedType === 'veiculo' &&
          simulatorPlan === 'parcela' &&
          <InputRange
            defaultValue={defaultValue !== 700 ? 700 : defaultValue}
            maxValue={1000}
            minValue={400}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'veiculo' &&
          simulatorPlan === 'credito' &&
          <InputRange
            defaultValue={defaultValue !== 215000 ? 215000 : defaultValue}
            maxValue={400000}
            minValue={20000}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'imovel' &&
          simulatorPlan === 'parcela' &&
          <InputRange
            defaultValue={defaultValue !== 1750 ? 1750 : defaultValue}
            maxValue={3000}
            minValue={500}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'imovel' &&
          simulatorPlan === 'credito' &&
          <InputRange
            defaultValue={defaultValue !== 165000 ? 165000 : defaultValue}
            maxValue={276000}
            minValue={56000}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'servicos' &&
          simulatorPlan === 'parcela' &&
          <InputRange
            defaultValue={defaultValue !== 500 ? 500 : defaultValue}
            maxValue={800}
            minValue={200}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'servicos' &&
          simulatorPlan === 'credito' &&
          <InputRange
            defaultValue={defaultValue !== 10000 ? 10000 : defaultValue}
            maxValue={20000}
            minValue={0}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'caminhao' &&
          simulatorPlan === 'parcela' &&
          <InputRange
            defaultValue={defaultValue !== 3850 ? 3850 : defaultValue}
            maxValue={6700}
            minValue={1000}
            handleOnChange={handleOnChangeValue}
          />
        }
        {
          selectedType === 'caminhao' &&
          simulatorPlan === 'credito' &&
          <InputRange
            defaultValue={defaultValue !== 170000 ? 170000 : defaultValue}
            maxValue={340000}
            minValue={0}
            handleOnChange={handleOnChangeValue}
          />
        }
      </ContentSimulation>
    </div>
  );
}
