export interface IGetDemonstrations {
  demonstracaoPDF: IDemonstracaoPDF[];
  id_demo_financeira: number;
  status: string;
  titulo: string;
}

interface IDemonstracaoPDF {
  id_demo_financeira_PDF: number;
  id_demo_financeira: number;
  url_pdf: string;
  criado: string;
  modificado: string;
  excluido: null | string;
}

export interface IDemonstracaoBody {
  titulo: string;
  url_pdf: string[];
  status: 'Ativo' | 'Inativo' | string;
}
