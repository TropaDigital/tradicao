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
  const [currentAssembleia, setCurrentAssembleia] = useState<any>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const actualAssembleia = localStorage?.getItem('id_assembleia');
      setCurrentAssembleia(actualAssembleia);
      setQuery(`?ordem=desc&id_assembleia=${actualAssembleia}&`);
    }
  }, []);

  const { allContemplados } = useGetAllAssembleiaContemplados(
    `${query}perPage=10&currentPage=${actualPage}`
  );

  const { allAssembleias } = useGetAllAssembleias(`/${currentAssembleia}`);

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

      <Formik
        initialValues={{
          capa: allAssembleias?.result[0]?.url_imagem ?? '',
          titulo: allAssembleias?.result[0]?.titulo ?? '',
          tipo: allAssembleias?.result[0]?.tipo ?? ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <InputImage
              title="Adicionar Capa"
              src={values?.capa}
              alt={values?.titulo}
              name="capa"
              onPostImage={(imageUrl) => console.log(imageUrl)}
            />
            <InputDefault
              label="Título"
              value={values?.titulo}
              name="titulo"
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

            <Button degrade radius="rounded">
              Atualizar
            </Button>
          </Form>
        )}
      </Formik>

      <Table
        data={allContemplados?.result}
        header={headerTable}
        title={`Resultado da Assembleia de ${allAssembleias?.result[0]?.tipo}`}
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
