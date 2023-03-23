// React
import { useState } from "react";

// Components
import Button from "@/components/UI/Button";
import { InputDefault } from "@/components/UI/Inputs/InputDefault";

// Styles
import { CheckboxLogin, ContainerLogin, LoginTitle, TextButton } from "./styles";
import { Form, Formik } from "formik";
import { universityYupSchema } from "./yupSchema";

interface IUniversityProps {
    
}

export default function UniversityLogin() {
    const [ checked, setChecked ] = useState<boolean>(false);

    function formSubmit(values: any, actions: any) {
        console.log('log do submit login university values', values)
        console.log('log do submit login university actions', actions)
    }

    return (
        <ContainerLogin>
            <LoginTitle>Área do Estudante</LoginTitle>
            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validationSchema={universityYupSchema}
                onSubmit={formSubmit}
            >   
            {({
                errors,
                values,
                touched,
                handleChange,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit} className="university-form">
                    <InputDefault 
                        label='Usuário'
                        labelColor='white'
                        name="user"
                        type={'text'}
                        placeholder={'Nome'}
                        value={values.user}
                        onChange={handleChange}
                        error={touched.user && errors.user}
                    />                          

                    <InputDefault 
                        label={'Senha'}
                        labelColor={'white'}
                        name='password'
                        type={'password'}
                        placeholder={'Senha'}
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && errors.password}
                    /> 

                    <CheckboxLogin>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
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
                </Form>
            )}
            </Formik>

            <TextButton>Esqueci minha senha</TextButton>
        </ContainerLogin>
    )
}