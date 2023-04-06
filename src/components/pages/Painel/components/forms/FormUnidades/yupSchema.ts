import * as yup from 'yup';

export const UnitSchema = yup.object().shape({
  nome: yup?.string()?.required('O Nome da Unidade é obrigatório'),
  cep: yup?.string()?.required('O CEP da Unidade é obrigatório'),
  telefone: yup?.string()?.optional()
});
