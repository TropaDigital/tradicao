const formatCnpjAndCpf = (value: string) => {
  let formattedValue = value.replace(/\D/g, '');

  if (value?.length === 11) {
    formattedValue = value.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      '$1.$2.$3-$4'
    );
  } else if (value?.length >= 14) {
    formattedValue = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  return formattedValue;
};

export default formatCnpjAndCpf;
