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
        {simulatorPlan === 'parcela' && (
          <legend>
            <h2>Escolha o valor da parcela</h2>
          </legend>
        )}

        {simulatorPlan === 'credito' && (
          <legend>
            <h2>Escolha o valor do crédito</h2>
          </legend>
        )}
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(defaultValue ?? 0)}
        </strong>

        {selectedType === 'veiculo' && simulatorPlan === 'parcela' && (
          <InputRange
            defaultValue={defaultValue !== 1366.58 ? 1366.58 : defaultValue}
            maxValue={2326.43}
            minValue={406.73}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'veiculo' && simulatorPlan === 'credito' && (
          <InputRange
            defaultValue={defaultValue !== 71984.96 ? 71984.96 : defaultValue}
            maxValue={118969.93}
            minValue={25000}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'imovel' && simulatorPlan === 'parcela' && (
          <InputRange
            defaultValue={defaultValue !== 1313.84 ? 1313.84 : defaultValue}
            maxValue={1998.93}
            minValue={628.75}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'imovel' && simulatorPlan === 'credito' && (
          <InputRange
            defaultValue={defaultValue !== 155954.88 ? 155954.88 : defaultValue}
            maxValue={239930.59}
            minValue={71979.18}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'servicos' && simulatorPlan === 'parcela' && (
          <InputRange
            defaultValue={defaultValue !== 382.92 ? 382.92 : defaultValue}
            maxValue={510.56}
            minValue={255.28}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'servicos' && simulatorPlan === 'credito' && (
          <InputRange
            defaultValue={defaultValue !== 15000 ? 15000 : defaultValue}
            maxValue={20000}
            minValue={10000}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'caminhao' && simulatorPlan === 'parcela' && (
          <InputRange
            defaultValue={defaultValue !== 5236.25 ? 5236.25 : defaultValue}
            maxValue={6320.48}
            minValue={4152.02}
            handleOnChange={handleOnChangeValue}
          />
        )}
        {selectedType === 'caminhao' && simulatorPlan === 'credito' && (
          <InputRange
            defaultValue={defaultValue !== 303373.32 ? 303373.32 : defaultValue}
            maxValue={404497.76}
            minValue={202248.88}
            handleOnChange={handleOnChangeValue}
          />
        )}
      </ContentSimulation>
    </div>
  );
}
