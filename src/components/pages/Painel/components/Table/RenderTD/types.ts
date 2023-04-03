export interface IRenderTD {
  onClickOptions: (e: string, product: any) => void;
  head: {
    key: 'peso' | 'status' | 'titulo' | 'produtoImagens' | 'id_produto';
    label: string;
    type: string;
  };
  item: any; //TYPAR
  openMenu?: (modal: 'edit' | 'delete') => void;
  isLoading?: boolean;
}
