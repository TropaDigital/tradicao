import * as yup from 'yup';

export const AssembleiaContempladoSchema = yup.object().shape({
  nome: yup?.string().required('O nome é obrigatório.'),
  grupo: yup?.string().required('O grupo é obrigatório.'),
  cota: yup?.string().required('A cota é obrigatória'),
  representante: yup?.string().required('O representante é obrigatório'),
  tipo_de_contemplacao: yup
    ?.string()
    .required('O tipo de contemplação é obrigatório')
});
