export interface IProduct {
  descricao: string;
  peso: string;
  preco: string;
  titulo: string;
  status: string;
  slug: string;
}

export interface IActualItemProduct {
  descricao: string;
  id_produto: number;
  peso: string;
  produtoImagens: any[];
  slug: string;
  status: string;
  titulo: string;
  valor: string;
}

export interface IInitialValuesProduct {
  images: string[];
  titulo: string;
  preco: string;
  sku: string;
  estoque: string;
  status: string;
  slug: string;
}
