import * as yup from 'yup';

export const loginSchema = yup?.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  senha: yup.string().required('A senha é obrigatória.')
});
