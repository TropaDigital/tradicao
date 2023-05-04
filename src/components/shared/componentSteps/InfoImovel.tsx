import { MovelIcon } from '@/assets/icons';
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
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  error: FormProps;
}

export function InfoImovel({
  data,
  error,
  handleInputChange,
  handleOnChangeCheckbox
}: Props) {
  function formatCep(cep: string) {
    const onlyNumbers = cep.replace(/\D/g, '');
    const cepWithoutMask = onlyNumbers.slice(0, 8);
    const cepParts = cepWithoutMask.match(/^(\d{5})(\d{3})$/);
    const formattedCep = cepParts
      ? `${cepParts[1]}-${cepParts[2]}`
      : onlyNumbers;
    return formattedCep;
  }

  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <MovelIcon width={23} height={20} />
        <h2>Consórcio de Imóveis</h2>
      </legend>
      <FieldDefault style={{ marginBottom: '14px' }}>
        <InputDefault
          label="Nome completo"
          placeholder="Nome"
          name="name"
          value={data.name}
          onChange={(e) => {
            handleInputChange(e);
          }}
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
      {/* <FieldDefault style={{ marginBottom: '14px' }}>
        <SelectDefault
          label="Selecione um Imovel"
          placeholder="imovel"
          name="imovel"
          value={data.imovel}
          onChange={handleInputChange}
          error={error?.imovel}
        >
          <option value="1">opção 1</option>
          <option value="2">opção 2</option>
          <option value="3">opção 3</option>
        </SelectDefault>
      </FieldDefault> */}

      <FieldGroup>
        <FieldDefault style={{ marginBottom: '14px' }}>
          <InputDefault
            label="Celular"
            placeholder="00 00000-0000"
            name="phone"
            maxLength={13}
            value={data.phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '$1 $2-$3')}
            onChange={(e) => {
              if (/^[0-9\s-]*$/.test(e.target.value)) {
                handleInputChange(e);
              }
            }}
            // maxLength={13}
            error={error?.phone}
          />
        </FieldDefault>
        <FieldDefault style={{ marginBottom: '14px' }}>
          <InputDefault
            label="Cep"
            placeholder="00000-000"
            name="cep"
            value={formatCep(data.cep)}
            onChange={(e) => {
              if (/^[0-9\s-]*$/.test(e.target.value)) handleInputChange(e);
            }}
            error={error?.cep}
          />
        </FieldDefault>
      </FieldGroup>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label={
            <>
              Aceito o{' '}
              <a href="/termos-de-privacidade" target="_blank">
                termo de privacidade
              </a>
            </>
          }
          name="terms"
          checked={data.terms}
          onChange={handleOnChangeCheckbox}
          error={error?.terms}
        />
      </FieldDefault>
    </ContentSimulation>
  );
}

export function ConfirmImovel({
  data,
  error,
  handleInputChange,
  handleOnChangeCheckbox
}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <MovelIcon width={23} height={20} />

        <h2>Consórcio de Imovel</h2>
      </legend>

      <aside>
        <h3>{`Olá, ${data.name ?? 'Usuário'}!`}</h3>
        <span>
          Você esta muito próximo de virar um cliente Tradição e ainda mais
          próximo do seu sonho!
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
          error={error?.cpf}
          maxLength={18}
        />
      </FieldDefault>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label={
            <>
              Aceito o{' '}
              <a href="/termos-de-privacidade" target="_blank">
                termo de privacidade
              </a>
            </>
          }
          name="regulation"
          checked={data.regulation}
          onChange={handleOnChangeCheckbox}
          error={error?.regulation}
        />
      </FieldDefault>
    </ContentSimulation>
  );
}

export default { InfoImovel, ConfirmImovel };
