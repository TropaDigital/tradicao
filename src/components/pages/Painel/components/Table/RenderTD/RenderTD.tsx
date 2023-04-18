import { CloseIcon, MenuIcon, PdfIcon, PencilIcon } from '@/assets/icons';
import { downloadFileFromExternalLink } from '@/utils/downloadFile';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';
import MiniModal from '../../modal/MiniModal';

import * as S from './styles';
import { IRenderTD } from './types';

export default function RenderTD({ head, item, onClickOptions }: IRenderTD) {
  const [miniModal, setMiniModal] = useState<boolean>(false);

  const labelKey: string = head.key;

  return (
    <S.Container id="td" className="td-block">
      {head.type === 'date' && (
        <span>{moment(item[labelKey]).format('DD/MM/YYYY')}</span>
      )}
      {head.type === 'options' && (
        <div
          className="buttonOptions"
          onClick={() => {
            setMiniModal(!miniModal);
          }}
        >
          <MenuIcon />
          {miniModal && (
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
        </div>
      )}
      {head.type === 'status' && (
        <span className={item?.status?.toLowerCase() as string}>
          {item?.status?.toLowerCase() === 'ativo' ? 'Ativo' : 'Inativo'}
        </span>
      )}
      {head.type === 'string' && <span>{item[labelKey] as string}</span>}
      {head.type === 'longText' && (
        <span className="longText">{item[labelKey] as string}</span>
      )}
      {head.type === 'number' && <span>{item[labelKey] as number}</span>}
      {head.type === 'file' && (
        <span
          onClick={() =>
            downloadFileFromExternalLink(
              item[head.key][0]?.url_pdf ?? item[head.key],
              item?.titulo ?? item?.nome
            )
          }
          style={{ cursor: 'pointer' }}
        >
          <PdfIcon />
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
                : 'https://via.placeholder.com/90'
            }
          />
        </div>
      )}
    </S.Container>
  );
}
