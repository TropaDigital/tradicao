import { Pagination } from '@mui/material';
import * as S from './styles';
import React from 'react';

interface IPaginationData {
  data: any;
  page: number;
  handlePagination: (e: React.ChangeEvent<unknown>, value: number) => void;
  defaultPage?: number;
}

const PaginationData = ({
  data,
  page,
  handlePagination,
  defaultPage = 1
}: IPaginationData) => {
  return (
    <S.Container>
      {data?.paginas > 1 && (
        <Pagination
          page={page}
          onChange={handlePagination}
          count={data?.paginas}
          defaultPage={defaultPage}
          color="primary"
          shape="rounded"
        />
      )}

      {data?.pagination?.lastPage > 1 && (
        <Pagination
          page={data?.pagination?.currentPage}
          onChange={handlePagination}
          count={data?.pagination?.lastPage}
          defaultPage={defaultPage}
          color="primary"
          shape="rounded"
        />
      )}
    </S.Container>
  );
};

export default PaginationData;
