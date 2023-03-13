import { CheckboxDefault } from "@/components/pages/Painel/components/inputs/CheckboxDefault";
import Inputdefault from "@/components/pages/Painel/components/inputs/InputDefault";
import { SelectDefault } from "@/components/pages/Painel/components/inputs/SelectDefault";
import { FieldDefault, FieldGroup } from "@/components/pages/Painel/components/UiElements/styles";

interface Props {
  data: any;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InfoTruck({data, handleInputChange, handleOnChangeCheckbox}: Props) {
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
        <SelectDefault
          label='Selecione um Imovel'
          placeholder='imovel'
          name="imovel"
          value={data.imovel}
          onChange={handleInputChange}
        >
          <option value="1">opção 1</option>
          <option value="2">opção 2</option>
          <option value="3">opção 3</option>
        </SelectDefault>
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
