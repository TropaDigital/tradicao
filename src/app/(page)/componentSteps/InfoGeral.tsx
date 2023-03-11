import ButtonDefault from '@/components/pages/Painel/components/ButtonDefault';
import InputRange from '@/components/pages/Painel/components/InputRange';

interface Props {
  simulatorPlan: string;
  setSimulatorPlan: (value: string) => void;
  styleButtonPlan: any;
}

export default function InfoGeral({
  simulatorPlan,
  setSimulatorPlan,
  styleButtonPlan
}: Props) {
  return (
    <div>
      <fieldset>
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
      </fieldset>

      <fieldset>
        <legend>
          <h2>Escolha o valor da parcela</h2>
        </legend>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(1250)}
        </strong>
        <InputRange
          defaultValue={1500}
          maxValue={3000}
          minValue={200}
          handleOnChange={(value) => console.log('VALUE', value[0])}
        />
      </fieldset>
    </div>
  );
}
