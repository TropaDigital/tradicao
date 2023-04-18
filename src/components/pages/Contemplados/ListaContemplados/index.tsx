import ModalDefault from '@/components/shared/Modal';
import {
  IAssembleia,
  IContempladoAssembleia
} from '@/services/assembleia/types';
import { ModalTitle, ModalWrapper, Table, TdInfo, TdTitle } from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';

interface ModalProps {
  openModal: boolean;
  setOpenModal: any;
  listData: any;
}

interface ContemplatedProps {
  id: number;
  name: string;
  group: number;
  quota: number;
  typeContemplated: string;
  representative: number;
}

export default function ContemplatedList({
  openModal,
  setOpenModal,
  listData
}: ModalProps) {
  return (
    <>
      <ModalDefault openState={openModal} setOpenState={setOpenModal}>
        <ModalWrapper>
          <ModalTitle>
            {moment(listData?.dateCard).format('DD MMM')} - Consorcio Tradição
          </ModalTitle>
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
              {listData?.contemplados.length > 0 ? (
                listData?.contemplados?.map((row: IContempladoAssembleia) => (
                  <tr>
                    <TdInfo className="first">{row?.nome}</TdInfo>
                    <TdInfo>{row?.grupo}</TdInfo>
                    <TdInfo>{row?.cota}</TdInfo>
                    <TdInfo>{row?.['tipo_de_contemplacao']}</TdInfo>
                    <TdInfo>{row?.representante}</TdInfo>
                  </tr>
                ))
              ) : (
                <tr>
                  <TdInfo className="first">Sem dados</TdInfo>
                  <TdInfo>Sem dados</TdInfo>
                  <TdInfo>Sem dados</TdInfo>
                  <TdInfo>Sem dados</TdInfo>
                  <TdInfo>Sem dados</TdInfo>
                </tr>
              )}
            </tbody>
          </Table>
        </ModalWrapper>
      </ModalDefault>
    </>
  );
}
