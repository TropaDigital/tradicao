'use client';

// React
import { useState } from "react";

// Components
import HeaderPage from "@/components/pages/Painel/components/HeaderPage";
import { HeaderDashboard } from "../styles";
import Button from "@/components/UI/Button";
import Table from "@/components/pages/Painel/components/Table";
import { useGetAllRecursos } from "@/services/recursos/GET/useGetAllRecursos";
import PaginationData from "@/components/shared/PaginationData";
import Modal from "@/components/pages/Painel/components/modal/ModalDefault";
import FormRecursos from "@/components/pages/Painel/components/forms/FormRecursos";

const NotReceivedPanel = () => {
    const headerTable = [
        {
            key: 'data',
            label: 'Data do Recurso',
            type: 'date'
        },
        {
            key: 'titulo',
            label: 'CPF/CNPJ',
            type: 'string'
        },
        {
            key: '',
            label: '',
            type: 'options'
        }
    ];

    const [ modalOpen, setModalOpen ] = useState<boolean>();
    const [ actualPage, setActualPage ] = useState<number>(1);
    const [ search, setSearch ] = useState('');

    const { getRecursos } = useGetAllRecursos(
        `?ordem=desc&pesquisa=${search}&perPage=10&currentPage=${actualPage}`
    );

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setActualPage(value);
    };

    return (
        <>
            <HeaderDashboard>
                <HeaderPage title="Recursos Não Procurados" />
                <div className="buttonWrapper">
                    <Button
                        degrade
                        color="secondary"
                        radius="rounded"
                        className="styledButton"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        + Atualizar recursos
                    </Button>
                </div>
            </HeaderDashboard>
            
            <Table 
                data={getRecursos?.result}
                header={headerTable}
                title="Clientes com valores a receber"
            />

            <PaginationData
                data={getRecursos}
                page={actualPage}
                handlePagination={handlePageChange}
            />


            {modalOpen  && (
                <Modal
                    onClose={() => {
                        setModalOpen(false);
                    }}
                    setData={() => { }}
                >
                    <FormRecursos 
                        onSubmit={() => setModalOpen(false)} 
                        modalOpen={""}                    
                    />
                </Modal>
            )}
        </>
    )
}

export default NotReceivedPanel;