import { ServiceIcon } from "@/assets/icons";
import { CheckboxDefault } from "@/components/pages/Painel/components/inputs/CheckboxDefault";
import { SelectDefault } from "@/components/pages/Painel/components/inputs/SelectDefault";
import { FieldDefault, FieldGroup } from "@/components/pages/Painel/components/UiElements/styles";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";
import { ContentSimulation } from "../styles";

interface FormProps {
  [key: string]: any
}

interface Props {
  data: any;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  error: FormProps;
}

export function InfoService({data, error, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <ServiceIcon width={23} height={22} />
        <h2>Consórcio de Serviços</h2>
      </legend>
      <FieldDefault style={{marginBottom: '14px'}}>
        <InputDefault 
          label='Nome do Serviço'
          placeholder='Nome'
          name="name"
          value={data.name}
          onChange={handleInputChange}
          error={error?.name}
        />
      </FieldDefault>

      <FieldGroup>
        <FieldDefault style={{marginBottom: '14px'}}>
          <InputDefault 
            label='Celular'
            placeholder='(00 0 0000-000)'
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
            error={error?.phone}
          />
        </FieldDefault>
        <FieldDefault style={{marginBottom: '14px'}}>
          <InputDefault 
            label='Cep'
            placeholder='00000-000'
            name="cep"
            value={data.cep}
            onChange={handleInputChange}
            error={error?.cep}
          />
        </FieldDefault>
      </FieldGroup>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="terms"
          checked={data.terms}
          onChange={handleOnChangeCheckbox}
          error={error?.terms}
        />
      </FieldDefault>

    </ContentSimulation>
  )
}

export function ConfirmService({data, error, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <ServiceIcon width={23} height={22} />
        <h2>Consórcio de Serviços</h2>
      </legend>
      
      <aside>
        <h3>{`Olá, ${data.name ?? 'Usuário'}!`}</h3>
        <span>Você esta muito próximo de virar um cliente Tradição e ainda mais próximo do seu sonho!</span>
      </aside>

      <FieldDefault style={{marginBottom: '14px'}}>
        <InputDefault 
          label='CPF / CNPJ'
          placeholder='000.000.000/00'
          name="cpf"
          value={data.cpf}
          onChange={handleInputChange}
          error={error?.cpf}
        />
      </FieldDefault>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="regulation"
          checked={data.regulation}
          onChange={handleOnChangeCheckbox}
          error={error?.regulation}
        />
      </FieldDefault>

    </ContentSimulation>
  )
}

export default { InfoService, ConfirmService }
