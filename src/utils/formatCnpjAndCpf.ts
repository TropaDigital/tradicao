const formatCnpjAndCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
  const formattedValue = e.target.value.replace(/\D/g, '');

  if (formattedValue.length === 11) {
    e.target.value = formattedValue?.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  } else if (formattedValue.length >= 14) {
    e.target.value = formattedValue?.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  }
};

export default formatCnpjAndCpf;
