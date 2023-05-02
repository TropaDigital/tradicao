import { propsPage } from '../../interface';
import React, { ReactNode, useEffect, useState } from 'react';
import { Select } from './styles';
import { AnalyticsIcon, ChevronTopIcon, ClipFileIcon } from '@/assets/icons';
import Link from 'next/link';

// Icons

import MemoIcon from '@/../public/images/memo.svg';
import PaperClip from '@/../public/images/paperclip.svg';
import FamilyIcon from '@/../public/images/familyIcon.svg';
import ChartIncreasing from '@/../public/images/chartIncreasing.svg';
import Papiro from '@/../public/images/papiro.svg';
import Paper from '@/../public/images/paper.svg';
import WhitePaper from '@/../public/images/white-paper.svg';
import MagnifyngGlass from '@/../public/images/magnifying-glass.svg';
import ChartBar from '@/../public/images/chart-bar.svg';
import PersonInSmoking from '@/../public/images/person-in-smoking.svg';
import OfficeBuilding from '@/../public/images/office-building.svg';
import HandShake from '@/../public/images/handshake.svg';

// Componentes
import Image from 'next/image';

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

  type IconInfo = {
    src: string;
    alt: string;
  };

  type IconsPagesMap = {
    [key: string]: IconInfo;
  };

  const createImageTag = ({ src, alt }: IconInfo) => (
    <Image src={src} alt={alt} width={20} height={20} />
  );

  const iconsPagesMap: { [key: string]: string } = {
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
    ['Simulação']: '&#9997;',
    Unidades: '&#127970;'
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
