import { CloseIcon, MenuIcon, PencilIcon } from '@/assets/icons';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';
import MiniModal from '../../modal/MiniModal';

import * as S from './styles';
import { IRenderTD } from './types';

export default function RenderTD({ head, item, onClickOptions }: IRenderTD) {
  const [miniModal, setMiniModal] = useState<boolean>(false);

  const labelKey:
    | 'peso'
    | 'status'
    | 'titulo'
    | 'produtoImagens'
    | 'id_produto'
    | 'criado' = head.key;

  return (
    <S.Container id="td" className="td-block">
      {head.type === 'date' && (
        <span>{moment(item.criado).format('DD/MM/YYYY')}</span>
      )}
      {head.type === 'options' && (
        <button
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
        </button>
      )}
      {head.type === 'status' && (
        <span className={item.status.toLowerCase() as string}>
          {item.status.toLowerCase() === 'ativo' ? 'Ativo' : 'Inativo'}
        </span>
      )}
      {head.type === 'string' && <span>{item[labelKey] as string}</span>}
      {head.type === 'number' && <span>{item[labelKey] as number}</span>}
      {head.type === 'image' && (
        <div className="imageWrapper">
          <Image
            alt={head?.label}
            width={90}
            height={90}
            src={
              item?.contempladoImagens
                ? item?.contempladoImagens[0]?.url_foto
                : 'https://via.placeholder.com/90'
            }
          />
        </div>
      )}
    </S.Container>
  );
}
