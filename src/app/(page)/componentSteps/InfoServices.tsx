import { ServiceIcon } from "@/assets/icons";
import { CheckboxDefault } from "@/components/pages/Painel/components/inputs/CheckboxDefault";
import Inputdefault from "@/components/pages/Painel/components/inputs/InputDefault";
import { SelectDefault } from "@/components/pages/Painel/components/inputs/SelectDefault";
import { FieldDefault, FieldGroup } from "@/components/pages/Painel/components/UiElements/styles";

interface Props {
  data: any;
  handleOnChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export function InfoService({data, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <fieldset style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <ServiceIcon />
        <h2>Consórcio de Veiculo</h2>
      </legend>
      <FieldDefault style={{marginBottom: '14px'}}>
        <Inputdefault 
          label='Nome do Serviço'
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

    </fieldset>
  )
}

export function ConfirmService({data, handleInputChange, handleOnChangeCheckbox}: Props) {
  return (
    <fieldset style={{ marginTop: '0px' }}>
      <legend className="isSubInfo">
        <ServiceIcon />
        <h2>Consórcio de Veiculo</h2>
      </legend>
      
      <aside>
        <h3>Olá, Gabriel!</h3>
        <span>Você esta muito próximo de virar um cliente Tradição e ainda mais próximo do seu sonho!</span>
      </aside>

      <FieldDefault style={{marginBottom: '14px'}}>
        <Inputdefault 
          label='Nome completo'
          placeholder='Nome'
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </FieldDefault>

      <FieldDefault style={{ marginBottom: '8px' }}>
        <CheckboxDefault
          label="Aceito o termo de privacidade"
          name="privacy"
          onChange={handleOnChangeCheckbox}
          checked={data.privacy === "true" ? true : false}
        />
      </FieldDefault>

    </fieldset>
  )
}

export default { InfoService, ConfirmService }
