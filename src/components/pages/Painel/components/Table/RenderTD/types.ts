export interface IRenderTD {
  onClickOptions: (e: string, product: any) => void;
  head: {
    key: string;
    label: string;
    type: string;
  };
  item: any;
  openMenu?: (modal: 'edit' | 'delete') => void;
  isLoading?: boolean;
}
