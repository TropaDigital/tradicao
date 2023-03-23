export const validateCpf = (cpf: string) => {
  const formattedCpf = cpf.replace(/\D/g, '');
  const allDigits = formattedCpf.split('');

  const sum = allDigits?.reduce((partialSum, a) => partialSum + parseInt(a), 0);
  const digito1 = Math.floor(sum / 10);
  const digito2 = sum % 10;
  return digito1 === digito2;
};
