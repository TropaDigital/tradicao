// React
import { useState } from 'react';

// Components
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';

// Styles
import {
  CheckboxLogin,
  ContainerLogin,
  LoginForm,
  LoginTitle,
  TextButton
} from './styles';
import { EyeIcon } from '@/assets/icons';
import { InputPassword } from '@/components/UI/Inputs/InputPassword';
import formatCnpjAndCpf from '@/utils/formatCnpjAndCpf';

interface ILoginProps {
  bbwCpfCnpj: string;
  bbwSenha: string;
}

export default function ClientLogin() {
  const [checked, setChecked] = useState<boolean>(false);
  const [DTOLogin, setDTOLogin] = useState<ILoginProps>({} as ILoginProps);

  function handleOnChange(input: any) {
    const name = input.target.name;
    const value = input.target.value;

    const newDTO: any = DTOLogin;
    newDTO[name] = value;
    setDTOLogin({ ...newDTO });
  }

  return (
    <ContainerLogin>
      <LoginTitle>Acesse sua conta</LoginTitle>

      <LoginForm
        action="http://consorciotradicao.ddns.com.br:8090/newconplus/conweb/identifica.asp?TipoAcesso=Login"
        method="post"
      >
        <InputDefault
          label="Usuário"
          labelColor="white"
          name="bbwCpfCnpj"
          type={'text'}
          placeholder={'Nome'}
          value={formatCnpjAndCpf(DTOLogin?.bbwCpfCnpj)}
          onChange={handleOnChange}
        />

        <InputPassword
          label="Senha"
          name="bbwSenha"
          placeholder={'Digite sua senha'}
          value={DTOLogin?.bbwSenha}
          onChange={handleOnChange}
        />

        <CheckboxLogin>
          <input
            type="checkbox"
            name=""
            id=""
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>Manter conectado</span>
        </CheckboxLogin>

        <Button
          radius="rounded"
          color="secondary"
          degrade={true}
          type={'submit'}
        >
          Logar
        </Button>
      </LoginForm>

      <TextButton>Esqueci minha senha</TextButton>
    </ContainerLogin>
  );
}
