import * as yup from 'yup';

export const universityYupSchema = yup.object().shape({
  user: yup.string().required('Nome é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),  
});