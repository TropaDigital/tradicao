export interface IPartnerInitialValues extends IPartnerAddress {
  nome_da_empresa: string;
  cnpj: string;
  ramo_de_atividade: string;
  nome_de_contato: string;
  email_de_contato: string;
  telefone_de_contato: string;
  campo_aberto: string;
}

interface IPartnerAddress {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface IPartnerPayload {
  nome_da_empresa: string;
  cnpj: string;
  ramo_de_atividade: string;
  nome_de_contato: string;
  email_de_contato: string;
  telefone_de_contato: string;
  campo_aberto: string;
  endereco: IPartnerAddress;
}
