// React
import { useState } from "react";

// Components
import Button from "@/components/UI/Button";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";

// Styles
import { CheckboxLogin, ContainerLogin, LoginForm, LoginTitle, TextButton } from "./styles";
import { EyeIcon } from "@/assets/icons";
import { InputPassword } from "@/components/UI/Inputs/InputPassword";

interface ILoginProps {
    j_username: string,
    j_password: string,
}

export default function ClientLogin() {
    const [ checked, setChecked ] = useState<boolean>(false);
    const [ DTOLogin, setDTOLogin ] = useState<ILoginProps>({
        j_username: '',
        j_password: '',
    });

    function handleOnChange(input: any) {
        const name = input.target.name;
        const value = input.target.value;
        
        const newDTO: any = DTOLogin
        newDTO[name] = value
        setDTOLogin({ ...newDTO })

    }

    return (
        <ContainerLogin>
            <LoginTitle>Acesse sua conta</LoginTitle>

            <LoginForm
                action="http://consorciotradicao.ddns.com.br:8090/newconplus/index.asp"
                method="post"
            >
                <InputDefault
                    label='Usuário'
                    labelColor='white'
                    name="j_username"
                    type={'text'}
                    placeholder={'Nome'}
                    value={DTOLogin?.j_username}
                    onChange={handleOnChange}                    
                /> 

                <InputPassword 
                    label='Senha'
                    name="j_password"
                    placeholder={'Digite sua senha'}
                    value={DTOLogin?.j_password}
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
                    color='secondary'
                    degrade={true}
                    type={'submit'}
                >
                    Logar
                </Button>

            </LoginForm>

            <TextButton>Esqueci minha senha</TextButton>
        </ContainerLogin>
    )
}