'use client';

// Libraries
import React, { useEffect, useState } from 'react';

// Next
import { usePathname, useRouter } from 'next/navigation';

// Components
import ButtonDefault from '../ButtonDefault';
import FormContempladoAssembleia from '../forms/FormContempladoAssembleia';
import FormContemplados from '../forms/FormContemplados';
import FormCurriculo from '../forms/FormCurriculo';
import FormDemonstracoes from '../forms/FormDemonstracoes';
import FormRelatories from '../forms/FormRelatories';
import FormRepresentante from '../forms/FormRepresentante';
import FormGrupos from '../forms/FormGrupos';
import FormUnidades from '../forms/FormUnidades';
import Modal from '../modal/ModalDefault';
import RenderTD from './RenderTD/RenderTD';
import { Container, ModalDeleteProduct } from './styles';
import { ITableProps } from './types';
import FormParceiros from '../forms/FormParceiros';
import FormSimulacao from '../forms/FormSimulacao';

// Services
import { useDeleteAssembleia } from '@/services/assembleia/DELETE/useDeleteAssembleia';
import { useDeletePost } from '@/services/blog/posts/DELETE/useDeletePost';
import { useDeleteContemplado } from '@/services/contemplados/DELETE/useDeleteContemplado';
import { useDeleteDemonstracoes } from '@/services/demonstracoes/DELETE/useDeleteDemonstracoes';
import { useDeleteRelatorio } from '@/services/relatorios/DELETE/useDeleteRelatorio';
import { useDeleteRepresentante } from '@/services/representante/DELETE/useDeleteRepresentante';
import { useDeleteCurriculo } from '@/services/trabalhe-conosco/DELETE/useDeleteCurriculo';
import { useDeleteUnit } from '@/services/unidades/DELETE/useDeleteUnit';
import { useDeleteAssembleiaContemplado } from '@/services/assembleia-contemplado/DELETE/useDeleteAssembleiaContemplado';
import { useDeleteParceiro } from '@/services/seja-um-parceiro/DELETE/useDeleteParceiro';
import { useDeleteGrupo } from '@/services/grupos-encerrados/DELETE/useDeleteGrupo';
import { useDeleteSimulacao } from '@/services/simulacao/DELETE/useDeleteSimulacao';

// Types
import { AxiosResponse } from 'axios';
import { IForm } from '../forms/types';
import { UseMutateAsyncFunction } from 'react-query';

// Icons
import { AlertIcon } from '@/assets/icons';

export default function Table({ title, data, search, header }: ITableProps) {
  const [dataInternal, setDataInternal] = useState<any>();
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [actualItem, setActualItem] = useState<any>();
  const [currentPage, setCurrentPage] = useState<string>('');

  const { deleteContemplado } = useDeleteContemplado();
  const { deleteDemonstracao } = useDeleteDemonstracoes();
  const { deleteUnit } = useDeleteUnit();
  const { deleteRelatorio } = useDeleteRelatorio();
  const { deleteCurriculo } = useDeleteCurriculo();
  const { deleteRepresentante } = useDeleteRepresentante();
  const { deletePost } = useDeletePost();
  const { deleteAssembleia } = useDeleteAssembleia();
  const { deleteAssembleiaContemplado } = useDeleteAssembleiaContemplado();
  const { deleteParceiro } = useDeleteParceiro();
  const { deleteSimulacao } = useDeleteSimulacao();
  const { deleteGrupo } = useDeleteGrupo();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setDataInternal([...data]);
    }
  }, [data]);

  useEffect(() => {
    if (pathname) {
      const pathName: string | undefined = pathname?.split('/')?.pop();
      setCurrentPage(pathName ? pathName : '');
    }
  }, [pathname]);

  function handleModal(modalType: string, product: any) {
    setModalOpen(modalType);
  }

  const getItemType = (actualItem: any) => {
    const actualItemKeys = Object.keys(actualItem);
    const getKey = actualItemKeys?.filter((key) => key.includes('id_'));
    return {
      itemType: getKey[0]?.split('_')?.pop() as string,
      itemID: actualItem[getKey[0]] as number
    };
  };

  function sendItemThroughPage(url: string) {
    setModalOpen('');
    router?.push(`/painel/${url}`);

    const isWindowDefined = typeof window !== undefined;

    if (isWindowDefined && url?.includes('postagem')) {
      localStorage.removeItem('postSlug');
      localStorage.setItem('postSlug', actualItem?.slug);
    }

    if (isWindowDefined && !url?.includes('postagem')) {
      localStorage?.setItem('id_assembleia', actualItem?.id_assembleia);
    }
  }

  const deleteFunctions: {
    [key: string]: UseMutateAsyncFunction<
      AxiosResponse<any, any>,
      unknown,
      number,
      unknown
    >;
  } = {
    contemplados: deleteContemplado,
    'demonstracoes-financeiras': deleteDemonstracao,
    curriculos: deleteCurriculo,
    unidades: deleteUnit,
    'relatorios-de-ouvidoria': deleteRelatorio,
    representantes: deleteRepresentante,
    blog: deletePost,
    'visualizar-assembleia': deleteAssembleiaContemplado,
    assembleias: deleteAssembleia,
    parceiros: deleteParceiro,
    simulacao: deleteSimulacao,
    'grupos-encerrados': deleteGrupo
  };

  const removeItem = (itemToDelete: { itemID: number }) => {
    const { itemID } = itemToDelete;
    const deleteFunction = deleteFunctions[currentPage];

    if (!deleteFunction) {
      console.error(
        `Não foi encontrada nenhuma função para deletar o item da página ${currentPage}`
      );
    }

    deleteFunction(itemID);
  };

  const FORM_MAP: {
    [key: string]: ({ modalOpen, actualItem, onSubmit }: IForm) => JSX.Element;
  } = {
    contemplados: FormContemplados,
    'demonstracoes-financeiras': FormDemonstracoes,
    unidades: FormUnidades,
    'relatorios-de-ouvidoria': FormRelatories,
    representantes: FormRepresentante,
    curriculos: FormCurriculo,
    'visualizar-assembleia': FormContempladoAssembleia,
    'grupos-encerrados': FormGrupos,
    parceiros: FormParceiros,
    simulacao: FormSimulacao
  };

  const FormComponent = FORM_MAP[currentPage];

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
            <FormComponent
              modalOpen={modalOpen}
              actualItem={actualItem}
              onSubmit={() => setModalOpen('')}
            />
          </Modal>
        )}

        <>
          {modalOpen === 'editar' &&
            pathname?.includes('blog') &&
            sendItemThroughPage('blog/postagem')}

          {modalOpen === 'editar' &&
            pathname?.includes('assembleias') &&
            !pathname?.includes('visualizar') &&
            sendItemThroughPage('assembleias/visualizar-assembleia')}

          {modalOpen === 'comentarios' &&
            pathname?.includes('blog') &&
            sendItemThroughPage('blog/postagem/comentarios')}
        </>

        {modalOpen === 'excluir' && (
          <Modal
            onClose={() => {
              setModalOpen(null);
            }}
            setData={() => {}}
          >
            <ModalDeleteProduct>
              <AlertIcon />
              <div className="modalTitleWarning">
                Excluir {getItemType(actualItem)?.itemType ?? 'item'}
              </div>
              <div className="modalDescription">
                Tem certeza de que deseja excluir essa{' '}
                {getItemType(actualItem)?.itemType ?? 'item'}? Essa ação não
                poderá ser desfeita.
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
                    const idKey = Object.keys(actualItem)[0];

                    removeItem({
                      itemID: actualItem[idKey]
                    });
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
                  <React.Fragment key={keyHead}>
                    <RenderTD
                      head={head}
                      item={row}
                      onClickOptions={(modalType, product) => {
                        handleModal(modalType, product);
                        setActualItem(product);
                      }}
                    />
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      {dataInternal?.length === 0 && (
        <h3
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Nenhum item foi encontrado!
        </h3>
      )}
    </>
  );
}
