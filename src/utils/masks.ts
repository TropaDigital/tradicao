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

  value = value?.replace(/(\d{5})(\d{3})/, '$1-$2'); // 00000-000

  return value;
}

export function phoneMask(phone: string) {
  let value = phone?.replace(/[^\d\s()-]/g, '');

  value = value?.replace(/(\d{2})(\d{5})(\d{4})/, '$1 $2-$3'); // 00 00000-0000

  return value;
}

export function onlyNumbersMask(value: string) {
  return value.replace(/\D/g, ''); // 0-9
}

export function onlyLetterMask(value: string) {
  return value.replace(/[^a-zA-Záéíóúâêîôûàèìòùãõç\s]/g, '');
}

export function formatStringToDate(date_string: string) {
  // Extrai o dia, mês e ano da string de data
  const day: string = date_string?.substring(0, 2);
  const month: string = date_string?.substring(2, 4);
  const year: string = date_string?.substring(4, 8);

  // Cria um objeto Date com a data formatada corretamente
  const formatted_date: Date = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );

  // Retorna a data formatada como uma string no formato "DD/MM/YYYY"
  if (date_string?.length === 8) {
    return formatted_date.toLocaleDateString('pt-BR');
  }
}

export function toISODate(date_string: string): string {
  // Extrai o dia, mês e ano da string de data
  const date_parts = date_string.split('/');
  const day = date_parts[0];
  const month = date_parts[1];
  const year = date_parts[2];

  // Cria um objeto Date com a data formatada corretamente
  const formatted_date = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );

  // Retorna a data formatada como uma string no formato ISO 8601
  return formatted_date.toISOString().split('T')[0];
}

export function formatISOToDate(date_string: string): string {
  // Verifica se a string de entrada é um formato válido de data ISO 8601
  const iso_regex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(-|\+)(\d{2}:?\d{2}|Z)$/;
  if (!iso_regex.test(date_string)) {
    return '';
  }

  // Extrai o dia, mês e ano da string de data
  const date_parts = date_string.split('T')[0].split('-');
  const day = date_parts[2];
  const month = date_parts[1];
  const year = date_parts[0];

  // Retorna a data formatada como uma string no formato "DD/MM/YYYY"
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
}

export function formatDate(data: string) {
  if (data?.length === 7) {
    // Remove todos os caracteres que não são números
    const onlyNumbers = data.replace(/[^\d]/g, '');

    // Aplica a máscara de data
    const formatted = onlyNumbers;

    return formatted;
  }

  // Ex: data = YYYY-MM-DD
  if (data?.includes('-') && data?.length > 8) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear().toString().padStart(4, '0');

    return `${dia}/${mes}/${ano}`;
  }
}

export function toSlug(str: string) {
  str = str.trim().toLowerCase();
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return str;
}
