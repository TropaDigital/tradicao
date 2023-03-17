import * as yup from 'yup';

const phoneNumberRegex: RegExp = /^(\d{2})\s(\d{5})-(\d{4})$/;

export const complaintYupSchema = yup.object().shape({
  nome: yup.string().when(['email', 'celular'], {
    is: (email: string, celular: string) => email || celular,
    then: () => yup.string().required('É necessário um nome para contato.')
  }),
  email: yup.string().email('E-mail inválido'),
  celular: yup
    .string()
    .matches(phoneNumberRegex, 'Número de telefone inválido'),
  denuncia: yup.string().required('A denúncia é obrigatória')
});
