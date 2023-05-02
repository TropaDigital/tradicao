import {
  CloseIcon,
  MenuIcon,
  PdfIcon,
  PencilIcon,
  SpreadsheetFileIcon
} from '@/assets/icons';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';
import MiniModal from '../../modal/MiniModal';

import * as S from './styles';
import { IRenderTD } from './types';

// Utils
import formatCnpjAndCpf from '@/utils/formatCnpjAndCpf';
import { formatCurrency } from '@/utils/formatCurrency';
import { usePathname } from 'next/navigation';

export default function RenderTD({ head, item, onClickOptions }: IRenderTD) {
  const [miniModal, setMiniModal] = useState<boolean>(false);

  const pathName = usePathname();

  const labelKey: string = head.key;

  return (
    <S.Container id="td" className="td-block">
      {head.type === 'date' && (
        <span>
          {moment(item[labelKey]?.split('T')[0]).format('DD/MM/YYYY')}
        </span>
      )}
      {head.type === 'options' && (
        <div
          className="buttonOptions"
          onClick={() => {
            setMiniModal(!miniModal);
          }}
        >
          <MenuIcon />
          {miniModal && !pathName?.includes('blog') && (
            <MiniModal
              onClick={(modalType) => {
                onClickOptions(modalType, item);
              }}
              closeModal={() => {
                setMiniModal(false);
              }}
              options={[
                {
                  label: 'Editar',
                  value: 'editar',
                  icon: <PencilIcon />
                },
                {
                  label: 'Excluir',
                  value: 'excluir',
                  icon: <CloseIcon />
                }
              ]}
            />
          )}
          {miniModal && pathName?.includes('blog') && (
            <MiniModal
              onClick={(modalType) => {
                onClickOptions(modalType, item);
              }}
              closeModal={() => {
                setMiniModal(false);
              }}
              options={[
                {
                  label: 'Editar',
                  value: 'editar',
                  icon: <PencilIcon />
                },
                {
                  label: 'Comentários',
                  value: 'comentarios',
                  icon: <PencilIcon />
                },
                {
                  label: 'Excluir',
                  value: 'excluir',
                  icon: <CloseIcon />
                }
              ]}
            />
          )}
        </div>
      )}
      {head.type === 'status' && (
        <span className={item?.status?.toLowerCase() as string}>
          {item?.status?.toLowerCase() === 'ativo' ? 'Ativo' : 'Inativo'}
        </span>
      )}
      {head.type === 'string' && <span>{item[labelKey] as string}</span>}
      {head.type === 'cpf' && <span>{formatCnpjAndCpf(item[labelKey])}</span>}
      {head.type === 'currency' && (
        <span>{formatCurrency(parseInt(item[labelKey]))}</span>
      )}
      {head.type === 'longText' && (
        <span className="longText">{item[labelKey] as string}</span>
      )}
      {head.type === 'number' && <span>{item[labelKey] as number}</span>}
      {head.type?.includes('file') && (
        <span
          onClick={() =>
            downloadFileFromExternalLink(
              item[head.key][0]?.url_pdf ?? item[head.key],
              item?.titulo ?? item?.nome
            )
          }
          style={{ cursor: 'pointer' }}
        >
          {head.type?.includes('pdf') && <PdfIcon />}
          {head.type?.includes('csv') && <SpreadsheetFileIcon />}
        </span>
      )}
      {head.type === 'image' && (
        <div className="imageWrapper">
          <Image
            alt={head?.label}
            width={90}
            height={90}
            src={
              item?.[head.key][0]?.url_foto
                ? item?.[head.key][0]?.url_foto
                : item?.[head.key]
                ? item?.[head.key]
                : 'https://bucket.backendtropa.com.br/file/78090df2-8d1d-4ccd-a324-1140b2fe2a59'
            }
          />
        </div>
      )}
    </S.Container>
  );
}
