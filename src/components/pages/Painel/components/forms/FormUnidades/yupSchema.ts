import * as yup from 'yup';

export const UnitSchema = yup.object().shape({
  nome: yup?.string()?.required('O Nome da Unidade é obrigatório'),
  endereco: yup?.string()?.required('O Endereço da Unidade é obrigatório'),
  bairro: yup?.string()?.required('O bairro da Unidade é obrigatórios'),
  cidade: yup?.string()?.required('A cidade da Unidade é obrigatória'),
  uf: yup?.string()?.required('O estado da Unidade é obrigatório'),
  cep: yup?.string()?.required('O CEP da Unidade é obrigatório'),
  telefone: yup?.string()?.optional()
});
