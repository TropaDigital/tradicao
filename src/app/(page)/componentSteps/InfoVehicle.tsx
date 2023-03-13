
import { CarIcon } from "@/assets/icons";
import { CheckboxDefault } from "@/components/pages/Painel/components/inputs/CheckboxDefault";
import { FieldDefault, FieldGroup } from "@/components/pages/Painel/components/UiElements/styles";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";
import { ContentSimulation } from "../styles";

interface FormProps {
  [key: string]: any
}

interface Props {
  data: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: FormProps;
}

export function InfoVehicle({data, handleInputChange, error, handleOnChangeCheckbox}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <CarIcon width={28.37} height={20.27} />
        <h2 >Consórcio de Veiculo</h2>
      </legend>
      <FieldDefault style={{marginBottom: '14px'}}>
        <InputDefault 
          label='Nome completo'
          placeholder='Nome'
          name="name"
          value={data.name}
          onChange={handleInputChange}
          error={error?.name}
        />
      </FieldDefault>

      <FieldDefault style={{marginBottom: '14px'}}>
        <InputDefault 
          label='E-mail'
          placeholder='E-mail'
          name="email"
          value={data.email}
          onChange={handleInputChange}
          error={error?.email}
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
          onChange={handleOnChangeCheckbox}
          error={error?.terms}
          checked={data.terms}
        />
      </FieldDefault>

    </ContentSimulation>
  )
}

export function ConfirmVehicle({data, error, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <ContentSimulation style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <CarIcon width={28.37} height={20.27} />
        <h2>Consórcio de Veiculo</h2>
      </legend>
      
      <aside>
        <h3>{`Olá, ${data.name ?? 'Usuário'}!`}</h3>
        <span>Você esta muito próximo de virar um cliente Tradição e ainda <strong>mais próximo do seu sonho!</strong></span>
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
          onChange={handleOnChangeCheckbox}
          checked={data.regulation}
          error={error?.regulation}
        />
      </FieldDefault>

    </ContentSimulation>
  )
}

export default { InfoVehicle, ConfirmVehicle }
