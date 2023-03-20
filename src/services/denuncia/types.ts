export interface IDenunciaBody {
  id_denuncia?: number;
  nome?: string;
  email?: string;
  celular?: string;
  texto_denuncia: string;
  status?: string;
  criado?: string;
  modificado?: string;
  excluido?: null | unknown;
}
