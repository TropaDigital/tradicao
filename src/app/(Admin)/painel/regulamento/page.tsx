'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Button from '@/components/UI/Button';
import UploadFile from '@/components/UI/UploadFile';
import { useGetRegulamento } from '@/services/regulamento/GET/useGetRegulamento';
import { useUpdateRegulamento } from '@/services/regulamento/PUT/useUpdateRegulamento';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

const RegulamentoPanel = () => {
  const { updateRegulamento } = useUpdateRegulamento();
  const { regulamento } = useGetRegulamento();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fileName, setFileName] = useState('');
  const [regulamentoUrl, setRegulamentoUrl] = useState<string>('');

  useEffect(() => {
    if (regulamento) {
      setRegulamentoUrl(regulamento);
    }
  }, [regulamento]);

  return (
    <>
      <HeaderPage title="Regulamento Geral" />

      <CenterWrapper>
        <S.ObjectWrapper>
          <object
            data={regulamentoUrl}
            type="application/pdf"
            height="800px"
            width="100%"
            style={{ margin: '30px 0px' }}
          >
            <p>
              Não foi possível mostrar o Regulamento, faça o{' '}
              <Link href={regulamentoUrl} download="Regulamento-Geral">
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
