// import { IGetRecipes } from '@/src/services/receitas/GET/types';
import React, { ReactNode } from 'react';
// import { IGetProduct } from '../../../../services/products/GET/types';

export interface ITableProps {
  title: string;
  search?: ReactNode;
  header: Array<{
    key: string;
    label: string | any;
    type: string;
  }>;
  data: any;
}

export interface ITableDataProps {
  type: string;
  value: any;
}

export interface IPostProduct {
  titulo: string;
  valor: number;
  descricao: string;
  peso: string;
  home: number;
  ordem: number;
  imagem: Array<string>;
  slug: string;
}
