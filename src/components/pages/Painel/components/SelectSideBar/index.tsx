import { propsPage } from '../../interface';
import React, { ReactNode, useEffect, useState } from 'react';
import { Select } from './styles';
import { ChevronTopIcon } from '@/assets/icons';
import Link from 'next/link';

interface ISelectProps {
  pages: Array<propsPage>;
  title: string;
  icon: ReactNode;
  openSideBar: () => void;
  sideBarIsOpen?: boolean;
}

export default function SelectSideBar({
  icon,
  pages,
  title,
  sideBarIsOpen,
  openSideBar,
  ...rest
}: ISelectProps) {
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(true);

  type IconsPagesMap = {
    [key: string]: string;
  };

  const iconsPagesMap: IconsPagesMap = {
    Assembleias: '&#128196;',
    Blog: '&#128221;',
    Contemplados: '&#128106;',
    Currículos: '&#128206;',
    Demonstrações: '&#128200;',
    Regulamento: '&#128220;',
    Recursos: '&#128269;',
    'Gp. Encerrados': '&#128195;',
    Parceiros: '&#129309;',
    Relatórios: '&#128202;',
    Representantes: '&#129333;',
    ['Simulações Site']: '&#9997;',
    Unidades: '&#127970;',
    ['Vídeo Institucional']: '&#127902;'
  };

  function handleToogleSideBar() {
    if (!sideBarIsOpen) {
      openSideBar();
    }
  }

  useEffect(() => {
    if (!sideBarIsOpen) {
      setSelectIsOpen(false);
    } else {
      setSelectIsOpen(true);
    }
  }, [sideBarIsOpen]);

  return (
    <Select
      {...rest}
      isOpen={selectIsOpen}
      numberOfOptions={pages.length}
      onClick={() => {
        handleToogleSideBar();
      }}
      sideBarIsOpen={sideBarIsOpen}
    >
      <div
        className="titleSelectPageWrapper"
        onClick={() => setSelectIsOpen(!selectIsOpen)}
      >
        <div className="titleSelectLeftSide">
          <div className="iconMenu">{icon}</div>
          <p className="titleSelectPage">{title}</p>
        </div>
        <button
          className="handleOpenSelect"
          onClick={() => {
            setSelectIsOpen(!selectIsOpen);
          }}
        >
          <div className="iconOpenSelect">
            <ChevronTopIcon />
          </div>
        </button>
      </div>
      <div className="optionsSelect">
        {pages.map((row: propsPage, key: number) => (
          <Link href={`/painel/${row.path}`} className="cardToPage" key={key}>
            <span
              dangerouslySetInnerHTML={{ __html: iconsPagesMap[row.name] }}
            />
            {'  '}
            {row.name}
          </Link>
        ))}
      </div>
    </Select>
  );
}
