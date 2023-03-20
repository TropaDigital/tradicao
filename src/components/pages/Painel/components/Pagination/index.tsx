import { useState } from 'react';
// import { ArrowHead } from "../../../Svg";
import * as S from './styles';

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  // Quantia de páginas de itens
  const pages = [1, 2, 3];

  return (
    <>
      <S.Container>
        <div
          className={
            selectedPage === 1 ? 'previous button disabled' : 'previous button'
          }
          onClick={() => {
            if (selectedPage === 1) return;

            setSelectedPage(selectedPage - 1);
          }}
        >
          {/* <ArrowHead /> */}
        </div>

        <div className="paginationIndex">
          {pages.map((pageIndex, key) => {
            return (
              <div
                className={
                  pageIndex === selectedPage ? 'pageIndex active' : 'pageIndex'
                }
                key={key}
                onClick={() => {
                  setSelectedPage(pageIndex);
                  // Fazer chamada da api pelo index da página
                }}
              >
                {pageIndex}
              </div>
            );
          })}
        </div>

        <div
          className={
            selectedPage === pages.length
              ? 'next button disabled'
              : 'next button'
          }
          onClick={() => {
            if (selectedPage === pages.length) return;

            setSelectedPage(selectedPage + 1);
          }}
        >
          {/* <ArrowHead /> */}
        </div>
      </S.Container>
    </>
  );
};

export default Pagination;
