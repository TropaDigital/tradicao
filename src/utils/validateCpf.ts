export const validateCpf = (cpf: string) => {
  const formattedCpf = cpf.replace(/\D/g, '');
  const allDigits = formattedCpf.split('');

  const sum = allDigits?.reduce((partialSum, a) => partialSum + parseInt(a), 0);
  if (sum > 88 || sum < 10) return false;

  if (verifyTwoDigits(sum)) return true;
  if (verifyTwoDigits(sum - 1)) return true;
  if (verifyTwoDigits(sum + 1)) return true;

  return false;
};

const verifyTwoDigits = (number: number) => {
  const firstDigit = Math.floor(number / 10);
  const secondDigit = number % 10;

  return firstDigit === secondDigit;
};
