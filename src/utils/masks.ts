export function cpfMask(cpf: string) {
  let value = cpf?.replace(/\D/g, '');

  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // 000.000.000-00

  return value;
}

export function cnpjMask(cnpj: string) {
  const rawValue = cnpj?.replace(/\D/g, '');
  const maskedValue = rawValue.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  ); // 00.000.000/0000-00

  return maskedValue;
}

export function cepMask(cep: string) {
  let value = cep?.replace(/\D/g, '');

  value = value.replace(/(\d{5})(\d{3})/, '$1-$2'); // 00000-000

  return value;
}

export function phoneMask(phone: string) {
  let value = phone?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // 00 00000-0000

  return value;
}

export function onlyNumbersMask(value: string) {
  return value.replace(/\D/g, ''); // 0-9
}

export function onlyLetterMask(value: string) {
  return value.replace(/[^a-zA-Záéíóúâêîôûàèìòùãõç\s]/g, '');
}
