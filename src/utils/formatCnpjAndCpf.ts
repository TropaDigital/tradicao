const formatCnpjAndCpf = (value: string) => {
  if (value.length === 11) {
    value?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else if (value.length >= 14) {
    value?.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  return value;
};

export default formatCnpjAndCpf;
