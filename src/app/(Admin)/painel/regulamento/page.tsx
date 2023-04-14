'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Button from '@/components/UI/Button';
import UploadFile from '@/components/UI/UploadFile';
import { useUpdateRegulamento } from '@/services/regulamento/PUT/useUpdateRegulamento';
import Link from 'next/link';
import React, { useState } from 'react';
import * as S from './styles';

const RegulamentoPanel = () => {
  const { updateRegulamento } = useUpdateRegulamento();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fileName, setFileName] = useState('');

  return (
    <>
      <HeaderPage title="Regulamento Geral" />

      <CenterWrapper>
        <S.ObjectWrapper>
          <object
            data="https://bucket.backendtropa.com.br/file/098b994c-e5ee-4fa9-84e3-b1793deadc85"
            type="application/pdf"
            height="800px"
            width="100%"
            style={{ margin: '30px 0px' }}
          >
            <p>
              Não foi possível mostrar o Regulamento, faça o{' '}
              <Link
                href="https://bucket.backendtropa.com.br/file/098b994c-e5ee-4fa9-84e3-b1793deadc85"
                download="Regulamento-Geral"
              >
                download{' '}
              </Link>
              ao invés.
            </p>
          </object>
        </S.ObjectWrapper>

        <Button
          degrade
          color="secondary"
          type="button"
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Editar
        </Button>

        {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)} setData={() => {}}>
            <S.ModalWrapper>
              <S.ModalTitle>Atualizar Regulamento</S.ModalTitle>
              <UploadFile
                filename={fileName}
                onPostFile={(fileUrl, e) => {
                  updateRegulamento(fileUrl);
                  setFileName(e?.target?.value);
                }}
              />
              <Button
                degrade
                radius="rounded"
                onClick={() => setIsOpenModal(false)}
              >
                Atualizar
              </Button>
            </S.ModalWrapper>
          </Modal>
        )}
      </CenterWrapper>
    </>
  );
};

export default RegulamentoPanel;
