import ModalDefault from "@/components/shared/Modal";
import { ModalTitle, ModalWrapper, Table, TdInfo, TdTitle } from "./styles";

interface ModalProps {
    openModal: boolean,
    setOpenModal: any,
    listData: any,
}

interface ContemplatedProps {
    id: number,
    name: string,
    group: number,
    quota: number,
    typeContemplated: string,
    representative: number,    
}


export default function ContemplatedList({openModal, setOpenModal, listData}: ModalProps) {
    
    return (
        <>
            <ModalDefault openState={openModal} setOpenState={setOpenModal}>
                <ModalWrapper>
                    <ModalTitle>{listData?.dateCard} - Consorcio Tradição</ModalTitle>
                    <Table>
                        <thead>
                            <tr>
                                <TdTitle className="first">Nome</TdTitle>
                                <TdTitle>Grupo</TdTitle>
                                <TdTitle>Cota</TdTitle>
                                <TdTitle>Tipo de Contemplação</TdTitle>
                                <TdTitle>Representante</TdTitle>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                listData?.contemplated.length > 0
                                ?
                                    listData?.contemplated?.map((row: ContemplatedProps) => (
                                        <tr>
                                            <TdInfo className="first">{row?.name}</TdInfo>
                                            <TdInfo>{row?.group}</TdInfo>
                                            <TdInfo>{row?.quota}</TdInfo>
                                            <TdInfo>{row?.typeContemplated}</TdInfo>
                                            <TdInfo>{row?.representative}</TdInfo>
                                        </tr>
                                    ))
                                :   <tr>
                                        <TdInfo className="first">Sem dados</TdInfo>
                                        <TdInfo>Sem dados</TdInfo>
                                        <TdInfo>Sem dados</TdInfo>
                                        <TdInfo>Sem dados</TdInfo>
                                        <TdInfo>Sem dados</TdInfo>
                                    </tr> 
                            }
                        </tbody>
                    </Table>
                </ModalWrapper>
            </ModalDefault>
        </>
    )
}