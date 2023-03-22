import { CarIcon } from '@/assets/icons';
import { CheckboxDefault } from '@/components/pages/Painel/components/inputs/CheckboxDefault';
import {
  FieldDefault,
  FieldGroup
} from '@/components/pages/Painel/components/UiElements/styles';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import formatCnpjAndCpf from '@/utils/formatCnpjAndCpf';
import { ContentSimulation } from '../SimulationForm/styles';

interface FormProps {
  [key: string]: any;
}

interface Props {
  data: any;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: FormProps;
}

export function InfoVehicle({
  data,
  handleInputChange,
  error,
  handleOnChangeCheckbox
}: Props) {
  console.log(error);
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <CarIcon width={28.37} height={20.27} />
        <h2>Consórcio de Veiculo</h2>
      </legend>
      <FieldDefault style={{ marginBottom: '14px' }}>
        <InputDefault
          label="Nome completo"
          placeholder="Nome"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          error={error?.name}
        />
      </FieldDefault>

      <FieldDefault style={{ marginBottom: '14px' }}>
        <InputDefault
          label="E-mail"
          placeholder="E-mail"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          error={error?.email}
        />
      </FieldDefault>

      <FieldGroup>
        <FieldDefault style={{ marginBottom: '14px' }}>
          <InputDefault
            label="Celular"
            placeholder="00 00000-0000"
            name="phone"
            value={data.phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '$1 $2-$3')}
            onChange={(e) => {
              if (/^[0-9\s-]*$/.test(e.target.value)) handleInputChange(e);
            }}
            error={error?.phone}
            maxLength={13}
          />
        </FieldDefault>
        <FieldDefault style={{ marginBottom: '14px' }}>
          <InputDefault
            label="Cep"
            placeholder="00000-000"
            name="cep"
            value={data.cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')}
            onChange={(e) => {
              if (/^[0-9\s-]*$/.test(e.target.value)) handleInputChange(e);
            }}
            error={error?.cep}
            maxLength={9}
          />
        </FieldDefault>
      </FieldGroup>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="terms"
          onChange={handleOnChangeCheckbox}
          error={error?.terms}
          checked={data.terms}
        />
      </FieldDefault>
    </ContentSimulation>
  );
}

export function ConfirmVehicle({
  data,
  error,
  handleInputChange,
  handleOnChangeCheckbox
}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <CarIcon width={28.37} height={20.27} />
        <h2>Consórcio de Veiculo</h2>
      </legend>

      <aside>
        <h3>{`Olá, ${data.name ?? 'Usuário'}!`}</h3>
        <span>
          Você esta muito próximo de virar um cliente Tradição e ainda{' '}
          <strong>mais próximo do seu sonho!</strong>
        </span>
      </aside>

      <FieldDefault style={{ marginBottom: '14px' }}>
        <InputDefault
          label="CPF / CNPJ"
          placeholder="000.000.000-00"
          name="cpf"
          value={formatCnpjAndCpf(data.cpf)}
          onChange={(e) => {
            if (/^[0-9.\-/]*$/.test(e.target.value)) handleInputChange(e);
          }}
          className="cpf-cnpj-input"
          error={error?.cpf}
          maxLength={18}
        />
      </FieldDefault>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="regulation"
          onChange={handleOnChangeCheckbox}
          checked={data.regulation}
          error={error?.regulation}
        />
      </FieldDefault>
    </ContentSimulation>
  );
}

export default { InfoVehicle, ConfirmVehicle };
