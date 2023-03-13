import { CheckboxDefault } from "@/components/pages/Painel/components/inputs/CheckboxDefault";
import Inputdefault from "@/components/pages/Painel/components/inputs/InputDefault";
import { FieldDefault, FieldGroup } from "@/components/pages/Painel/components/UiElements/styles";

interface Props {
  data: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InfoVehicle({data, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <div>
      <FieldDefault style={{marginBottom: '14px'}}>
        <Inputdefault 
          label='Nome completo'
          placeholder='Nome'
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </FieldDefault>

      <FieldDefault style={{marginBottom: '14px'}}>
        <Inputdefault 
          label='E-mail'
          placeholder='E-mail'
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </FieldDefault>

      <FieldGroup>
        <FieldDefault style={{marginBottom: '14px'}}>
          <Inputdefault 
            label='Celular'
            placeholder='(00 0 0000-000)'
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />
        </FieldDefault>
        <FieldDefault style={{marginBottom: '14px'}}>
          <Inputdefault 
            label='Cep'
            placeholder='00000-000'
            name="cep"
            value={data.cep}
            onChange={handleInputChange}
          />
        </FieldDefault>
      </FieldGroup>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="privacy"
          onChange={handleOnChangeCheckbox}
          checked={data.privacy === "true" ? true : false}
        />
      </FieldDefault>

    </div>
  )
}
