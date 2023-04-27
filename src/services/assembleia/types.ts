export interface IContempladoAssembleia {
  contempladoA_id: number;
  id_assembleia: number;
  nome: string;
  grupo: number;
  cota: string;
  tipo_de_contemplacao: string;
  representante: number;
  criado: string;
  modificado: string;
  excluido: string;
}

export interface IAssembleia {
  id_assembleia: number;
  titulo: string;
  criado: string;
  modificado: string;
  excluido: string;
  data: string;
  tipo: 'Contemplados' | 'Excluídos' | 'Suplência';
  contemplados: IContempladoAssembleia[];
  url_imagem: string;
  url_planilha: string;
}
