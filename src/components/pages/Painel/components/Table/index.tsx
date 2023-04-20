'use client';

import { AlertIcon } from '@/assets/icons';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useDeleteAssembleia } from '@/services/assembleia/DELETE/useDeleteAssembleia';
import { useDeletePost } from '@/services/blog/posts/DELETE/useDeletePost';
import { useDeleteContemplado } from '@/services/contemplados/DELETE/useDeleteContemplado';
import { IGetContemplados } from '@/services/contemplados/types';
import { useDeleteDemonstracoes } from '@/services/demonstracoes/DELETE/useDeleteDemonstracoes';
import { IGetDemonstrations } from '@/services/demonstracoes/interface';
import { useDeleteRelatorio } from '@/services/relatorios/DELETE/useDeleteRelatorio';
import { IGetRelatorio } from '@/services/relatorios/types';
import { useDeleteRepresentante } from '@/services/representante/DELETE/useDeleteRepresentante';
import { IGetRepresentante } from '@/services/representante/types';
import { useDeleteCurriculo } from '@/services/trabalhe-conosco/DELETE/useDeleteCurriculo';
import { useDeleteUnit } from '@/services/unidades/DELETE/useDeleteUnit';
import { IGetUnit } from '@/services/unidades/types';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
import { useDeleteAssembleiaContemplado } from '@/services/assembleia-contemplado/DELETE/useDeleteAssembleiaContemplado';

export default function Table({ title, data, search, header }: ITableProps) {
  const [dataInternal, setDataInternal] = useState<any>();
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [actualItem, setActualItem] = useState<any>();
  const [currentPage, setCurrentPage] = useState<string>('');

  const { deleteFile } = useDeleteFile();
  const { deleteContemplado } = useDeleteContemplado();
  const { deleteDemonstracao } = useDeleteDemonstracoes();
  const { deleteUnit } = useDeleteUnit();
  const { deleteRelatorio } = useDeleteRelatorio();
  const { deleteCurriculo } = useDeleteCurriculo();
  const { deleteRepresentante } = useDeleteRepresentante();
  const { deletePost } = useDeletePost();
  const { deleteAssembleia } = useDeleteAssembleia();
  const { deleteAssembleiaContemplado } = useDeleteAssembleiaContemplado();

  const pathname = usePathname();
  const router = useRouter();

  function handleModal(modalType: string, product: any) {
    setModalOpen(modalType);
  }

  const getItemType = (actualItem: any) => {
    const actualItemKeys = Object.keys(actualItem);
    const getKey = actualItemKeys?.filter((key) => key.includes('id_'));
    return {
      itemType: getKey[0]?.split('_')?.pop() as any,
      itemID: actualItem[getKey[0]] as number
    };
  };

  const removeItem = (itemToDelete: {
    itemType:
      | 'contemplado'
      | 'financeira'
      | 'unidade'
      | 'relatorio'
      | 'candidato'
      | 'representante'
      | 'postagem'
      | 'assembleia';
    itemID: number;
  }) => {
    const { itemID, itemType } = itemToDelete;

    if (itemType === 'contemplado') {
      deleteContemplado(itemID);
      deleteFile({
        endpoint: 'delete-contemplado-foto',
        id: actualItem?.contempladoImagens[0]?.id_contemplado_foto
      });
    }

    if (itemType === 'financeira') {
      deleteDemonstracao(itemID);
      deleteFile({
        endpoint: 'delete-demonstracao-pdf',
        id: actualItem?.demonstracaoPDF[0]?.id_demo_financeira_PDF
      });
    }

    if (itemType === 'candidato') {
      deleteCurriculo(itemID);
    }

    if (itemType === 'unidade') {
      deleteUnit(itemID);
    }

    if (itemType === 'relatorio') {
      deleteRelatorio(itemID);
    }

    if (itemType === 'representante') {
      deleteRepresentante(itemID);
    }

    if (itemType === 'postagem') {
      deletePost(itemID);
    }

    if (itemType === 'assembleia' && !pathname?.includes('visualizar')) {
      deleteAssembleia(itemID);
    }

    if (itemType === 'assembleia' && pathname?.includes('visualizar')) {
      deleteAssembleiaContemplado(itemID);
    }
  };

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

  function sendItemThroughPage(url: string) {
    setModalOpen('');
    router?.push(`/painel/${url}`);

    if (typeof window !== 'undefined' && url?.includes('postagem')) {
      localStorage.setItem('actualPost', JSON.stringify(actualItem));
    }

    if (typeof window !== 'undefined' && !url?.includes('postagem')) {
      localStorage?.setItem('id_assembleia', actualItem?.id_assembleia);
    }
  }

  const FORM_MAP: any = {
    contemplados: FormContemplados,
    'demonstracoes-financeiras': FormDemonstracoes,
    unidades: FormUnidades,
    'relatorio-de-ouvidoria': FormRelatories,
    representantes: FormRepresentante,
    curriculos: FormCurriculo,
    'visualizar-assembleia': FormContempladoAssembleia,
    'grupos-encerrados': FormGrupos
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
              modalOpen="editar"
              actualItem={actualItem}
              onSubmit={() => setModalOpen('')}
            />
          </Modal>
        )}

        <>
          {modalOpen === 'editar' && pathname?.includes('blog')
            ? sendItemThroughPage('blog/postagem')
            : null}

          {modalOpen === 'editar' &&
          pathname?.includes('assembleias') &&
          !pathname?.includes('visualizar')
            ? sendItemThroughPage('assembleias/visualizar-assembleia')
            : null}
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
