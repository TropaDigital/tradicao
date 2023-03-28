'use client';

import { AlertIcon } from '@/assets/icons';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useDeleteContemplado } from '@/services/contemplados/DELETE/useDeleteContemplado';
import { useGetAllContemplados } from '@/services/contemplados/GET/useGetAllContemplados';
import { useGetAllDemonstrations } from '@/services/demonstracoes/GET';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ButtonDefault from '../ButtonDefault';
import FormProduct from '../forms/FormProduct';
import Modal from '../modal/ModalDefault';
import Pagination from '../Pagination';
import RenderTD from './RenderTD/RenderTD';
import { Container, ModalDeleteProduct } from './styles';
import { ITableProps } from './types';

export default function Table({ title, search, header }: ITableProps) {
  const [dataInternal, setDataInternal] = useState<any>();
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [actualItem, setActualItem] = useState<any>();

  const { deleteFile } = useDeleteFile();

  const { allContemplados, isLoadingAllDemonsrations } =
    useGetAllContemplados();
  const { deleteContemplado } = useDeleteContemplado();

  const { allDemonstrations } = useGetAllDemonstrations();

  const tablesByPage: any = {
    contemplados: allContemplados,
    'demonstracoes-financeiras': allDemonstrations
  };

  const pathname = usePathname();
  const actualPage: string | undefined = pathname?.split('/')?.pop();

  useEffect(() => {
    if (actualPage)
      if (tablesByPage[actualPage]) {
        setDataInternal([...tablesByPage[actualPage]]);
      }
  }, [allContemplados, allDemonstrations]);

  function handleModal(modalType: string, product: any) {
    setModalOpen(modalType);
  }

  const getItemType = (actualItem: any) => {
    const actualItemKeys = Object.keys(actualItem);
    const getKey = actualItemKeys?.filter((key) => key.includes('id_'));
    console.log(getKey[0].split('_').pop());
    return {
      itemType: getKey[0].split('_').pop(),
      itemID: actualItem[getKey[0]]
    };
  };

  const removeItem = (itemToDelete: {
    itemType: string | undefined;
    itemID: number;
  }) => {
    if (itemToDelete?.itemType?.includes('contemplado')) {
      deleteContemplado(itemToDelete?.itemID);
      deleteFile({
        endpoint: 'delete-contemplado-foto',
        id: actualItem?.contempladoImagens[0]?.id_contemplado_foto
      });
    }
  };

  return (
    <>
      <Container>
        {modalOpen === 'editar' && (
          <Modal
            onClose={() => {
              setModalOpen(null);
            }}
            setData={() => {}}
          >
            <FormProduct
              modalOpen="editar"
              actualItem={actualItem}
              onSubmit={() => {
                setModalOpen('');
              }}
            />
          </Modal>
        )}

        {modalOpen === 'excluir' && (
          <Modal
            onClose={() => {
              setModalOpen(null);
            }}
            setData={() => {}}
          >
            <ModalDeleteProduct>
              <AlertIcon />
              <div className="modalTitleWarning">Excluir item</div>
              <div className="modalDescription">
                Tem certeza de que deseja excluir esse item ? Essa ação não
                poderá ser desfeita
              </div>
              <span className="buttonWrapper">
                <ButtonDefault
                  color="transparent"
                  onClick={() => {
                    setModalOpen('');
                  }}
                >
                  <p className="buttonText transparentButton">Cancelar</p>
                </ButtonDefault>
                <ButtonDefault
                  color="darkButton"
                  onClick={() => {
                    const itemToDelete = getItemType(actualItem);
                    removeItem(itemToDelete);
                    setModalOpen('');
                  }}
                >
                  <p className="buttonText warningButton">Excluir</p>
                </ButtonDefault>
              </span>
            </ModalDeleteProduct>
          </Modal>
        )}

        <header className="headerTable">
          <p className="titleHeaderTable">{title}</p>
          <div className="buttonsWrapper">{search}</div>
        </header>
        <table>
          <thead>
            <tr>
              {header.map((row, key) => (
                <th align="left" key={key}>
                  {row.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataInternal?.map((row: any, key: any) => (
              <tr key={key}>
                {header?.map((head: string | any, keyHead) => (
                  <>
                    <RenderTD
                      key={keyHead}
                      head={head}
                      item={row}
                      isLoading={isLoadingAllDemonsrations}
                      onClickOptions={(modalType, product) => {
                        handleModal(modalType, product);
                        setActualItem(product);
                      }}
                    />
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <Pagination />
    </>
  );
}
