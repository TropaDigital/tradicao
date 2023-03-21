const formatCnpjAndCpf = (value: string) => {
  value.replace(/\D/g, '');

  if (value?.length === 11) {
    // Formata CPF: 000.000.000-00
    value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  } else if (value?.length === 14) {
    // Formata CNPJ: 00.000.000/0000-00
    value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$3.$3/$4-$5');
  }

  return value;
};

export default formatCnpjAndCpf;
