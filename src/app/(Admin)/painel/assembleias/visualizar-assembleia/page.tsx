'use client';

import FormContempladoAssembleia from '@/components/pages/Painel/components/forms/FormContempladoAssembleia';
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';
import Modal from '@/components/pages/Painel/components/modal/ModalDefault';
import Table from '@/components/pages/Painel/components/Table';
import PaginationData from '@/components/shared/PaginationData';
import Button from '@/components/UI/Button';
import { useGetAllAssembleiaContemplados } from '@/services/assembleia-contemplado/GET/useGetAllAssembleiaContemplados';
import { useGetAllAssembleias } from '@/services/assembleia/GET/useGetAllAssembleia';
import React, { useEffect, useState } from 'react';
import { HeaderDashboard } from '../../styles';
import InputImage from '@/components/pages/Painel/components/inputs/InputImage';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { SelectDefault } from '@/components/UI/Inputs/SelectDefault';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { AssembleiaDetailsContainer, AssembleiaThumbnail } from './styles';
import { RemoveImageIcon } from '@/assets/icons';
import moment from 'moment';
import { useUpdateAssembleia } from '@/services/assembleia/PUT/useUpdateAssembleia';
import { toast } from 'react-toastify';
import { formatStringToDate } from '@/utils/masks';

const ViewAssembleiaPage = () => {
  const headerTable = [
    {
      key: 'data',
      label: 'Data de Criação',
      type: 'date'
    },
    {
      key: 'nome',
      label: 'Nome',
      type: 'string'
    },
    {
      key: 'grupo',
      label: 'Grupo',
      type: 'string'
    },
    {
      key: 'cota',
      label: 'Cota',
      type: 'string'
    },
    {
      key: 'tipo_de_contemplacao',
      label: 'Tipo de Contemplação',
      type: 'longText'
    },
    {
      key: 'representante',
      label: 'Representante',
      type: 'string'
    },
    {
      key: '',
      label: '',
      type: 'options'
    }
  ];

  const [query, setQuery] = useState('');
  const [actualPage, setActualPage] = useState(1);
  const [modalOpen, setModalOpen] = useState<'editar' | 'publicar' | null>(
    null
  );
  const [currentAssembleiaId, setCurrentAssembleiaId] = useState<any>();
  const [currentAssembleia, setCurrentAssembleia] = useState<any>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const actualAssembleiaId = localStorage?.getItem('id_assembleia');
      setCurrentAssembleiaId(actualAssembleiaId);
      setQuery(`?ordem=desc&id_assembleia=${actualAssembleiaId}&`);
    }
  }, []);

  const { allAssembleias } = useGetAllAssembleias(`/${currentAssembleiaId}`);
  const { updateAssembleia } = useUpdateAssembleia();

  const { allContemplados } = useGetAllAssembleiaContemplados(
    `${query}perPage=10&currentPage=${actualPage}`
  );

  useEffect(() => {
    if (allAssembleias) {
      setCurrentAssembleia(allAssembleias?.result[0]);
    }
  }, [allAssembleias]);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value);
  };

  const tiposDeAssembleias = ['Excluídos', 'Contemplados', 'Suplência'];

  return (
    <>
      {modalOpen === 'publicar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <FormContempladoAssembleia
            modalOpen={modalOpen}
            onSubmit={() => setModalOpen(null)}
          />
        </Modal>
      )}

      <HeaderDashboard>
        <HeaderPage title="Visualizar Assembleia" />

        <div className="buttonWrapper">
          <Button
            color="secondary"
            className="styledButton"
            radius="rounded"
            degrade
            onClick={() => setModalOpen('publicar')}
          >
            + Adicionar Pessoa
          </Button>
        </div>
      </HeaderDashboard>

      {currentAssembleia && (
        <Formik
          initialValues={{
            url_imagem: currentAssembleia?.url_imagem,
            titulo: currentAssembleia?.titulo,
            tipo: currentAssembleia?.tipo,
            data: currentAssembleia?.data?.split('T')[0]
          }}
          onSubmit={(values) => {
            updateAssembleia({
              id: currentAssembleiaId,
              assembleiaPutBody: values
            });
          }}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <AssembleiaDetailsContainer>
                <AssembleiaThumbnail>
                  {values?.url_imagem && (
                    <div className="imageContainer">
                      <div
                        className="removeImageOverlay"
                        onClick={() => setFieldValue('url_imagem', '')}
                      >
                        <RemoveImageIcon size={64} />
                      </div>
                      <Image
                        src={values?.url_imagem}
                        alt={`Imagem de capa da assembleia ${values?.titulo}`}
                        width={613}
                        height={200}
                      />
                    </div>
                  )}
                  {!values?.url_imagem && (
                    <InputImage
                      title="Adicionar Capa"
                      src={values?.url_imagem}
                      alt={values?.titulo}
                      name="url_imagem"
                      onPostImage={(imageUrl) =>
                        setFieldValue('url_imagem', imageUrl)
                      }
                    />
                  )}
                </AssembleiaThumbnail>

                <div className="assembleiaDetails">
                  <InputDefault
                    label="Título"
                    value={values?.titulo}
                    name="titulo"
                    onChange={handleChange}
                  />

                  <InputDefault
                    label="Data de Assembleia"
                    value={values?.data}
                    name="data"
                    type="date"
                    onChange={handleChange}
                  />

                  <SelectDefault
                    label="Tipo de Assembleia"
                    onChange={handleChange}
                    value={values?.tipo}
                    name="tipo"
                  >
                    {tiposDeAssembleias?.map((tipo) => (
                      <option value={tipo} key={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </SelectDefault>

                  <Button degrade type="submit">
                    Atualizar
                  </Button>
                </div>
              </AssembleiaDetailsContainer>
            </Form>
          )}
        </Formik>
      )}

      <Table
        data={allContemplados?.result}
        header={headerTable}
        title={`Resultado da Assembleia ${
          allAssembleias?.result[0]?.tipo &&
          `de ${allAssembleias?.result[0]?.tipo}`
        }`}
      />

      <PaginationData
        data={allContemplados}
        handlePagination={handlePageChange}
        page={actualPage}
      />
    </>
  );
};

export default ViewAssembleiaPage;
