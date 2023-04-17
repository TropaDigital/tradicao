export interface IGetRelatorio {
  id_relatorio: number;
  titulo: string;
  status: string;
  criado: string;
  modificado: string;
  excluido: null | string;
  pdfData: IPdfData[];
}

interface IPdfData {
  id_relatorio_PDF: number;
  id_relatorio: number;
  url_pdf: string;
  criado: string;
  modificado: string;
  excluido: null | string;
}

export interface IRelatorioBody {
  titulo: string;
  url_pdf: string[];
  status?: string;
}
