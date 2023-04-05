import React, { FormEvent } from 'react';

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1.$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  e.currentTarget.value = value;
  return e;
}

export function dateTimeMask(e: FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1:$2');
  // value = value.slice(0, 5);

  e.currentTarget.value = value;
  return e;
}

export function cpfMask(e: FormEvent<HTMLInputElement>) {
  let value = e?.currentTarget?.value;

  value = value?.replace(/\D-/g, '');
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  e.currentTarget.value = value;

  return e;
}

export function cnpjMask(e: FormEvent<HTMLInputElement>) {
  let value = e?.currentTarget?.value.replace(/\D/g, '');

  value = e?.currentTarget?.value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  );

  e.currentTarget.value = value;

  return e;
}

export function cepMask(e: FormEvent<HTMLInputElement>) {
  let value = e?.currentTarget?.value?.replace(/\D/g, '');

  value = value.replace(/(\d{5})(\d{3})/, '$1-$2');

  e.currentTarget.value = value;

  return e;
}

export function phoneMask(e: FormEvent<HTMLInputElement>) {
  let value = e?.currentTarget?.value?.replace(/\D/g, '');

  value = value?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return e;
}
