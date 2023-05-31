// Next
import Link from 'next/link';

// React
import { useRef, useState } from 'react';

// Components
import Button from '@/components/UI/Button';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { InputPassword } from '@/components/UI/Inputs/InputPassword';

// Styles
import {
  CheckboxLogin,
  ContainerLogin,
  LoginForm,
  LoginTitle,
  TextButton
} from './styles';

// Utils
import formatCnpjAndCpf from '@/utils/formatCnpjAndCpf';

interface ILoginProps {
  bbwCpfCnpj: string;
  bbwSenha: string;
}

export default function ClientLogin() {
  const [checked, setChecked] = useState<boolean>(false);
  const [DTOLogin, setDTOLogin] = useState<ILoginProps>({} as ILoginProps);

  function handleOnChange(input: React.ChangeEvent<HTMLInputElement>) {
    const name = input.target.name;
    const value = input.target.value;

    const newDTO: any = DTOLogin;
    newDTO[name] = value;
    setDTOLogin({ ...newDTO });
  }

  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // formRef.current?.submit();
  }

  return (
    <ContainerLogin
      onClick={() =>
        window?.open(
          'http://consorciotradicao.ddns.com.br:8090/newconplus/conweb/',
          '_blank'
        )
      }
    >
      <LoginTitle>Acesse sua conta</LoginTitle>

      <form
        style={{ display: 'none' }}
        ref={formRef}
        // action="http://consorciotradicao.ddns.com.br:8090/newconplus/conweb/identifica.asp?TipoAcesso=Login"
        // method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <input name="bbwCpfCnpj" value={DTOLogin?.bbwCpfCnpj} />
        <input name="bbwSenha" value={DTOLogin?.bbwSenha} />
        <input type={'submit'} value="Logar" />
      </form>
      <LoginForm onSubmit={handleSubmit}>
        <InputDefault
          label="CPF ou CNPJ"
          labelColor="white"
          name="bbwCpfCnpj"
          type={'text'}
          placeholder={'Digite seu CPF ou CNPJ'}
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

      <TextButton>
        <Link
          href="http://consorciotradicao.ddns.com.br:8090/newconplus/conweb/recupera_senha.asp?TipoAcesso=Login"
          target="_blank"
        >
          Esqueci minha senha
        </Link>
      </TextButton>
    </ContainerLogin>
  );
}
