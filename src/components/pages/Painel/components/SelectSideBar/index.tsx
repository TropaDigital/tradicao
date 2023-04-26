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

  const iconsPagesMap: any = {
    Assembleias: createImageTag({ src: WhitePaper, alt: 'Abc' }),
    Blog: createImageTag({ src: MemoIcon, alt: 'Abc' }),
    Contemplados: createImageTag({ src: FamilyIcon, alt: 'Abc' }),
    Currículos: createImageTag({ src: PaperClip, alt: 'Abc' }),
    Demonstrações: createImageTag({
      src: ChartIncreasing,
      alt: 'Abc'
    }),
    Regulamento: createImageTag({ src: Papiro, alt: 'Abc' }),
    Recursos: createImageTag({ src: MagnifyngGlass, alt: 'Abc' }),
    'Gp. Encerrados': createImageTag({ src: Paper, alt: 'Abc' }),
    Relatórios: createImageTag({ src: ChartBar, alt: 'Abc' }),
    Representantes: createImageTag({
      src: PersonInSmoking,
      alt: 'Abc'
    }),
    Unidades: createImageTag({ src: OfficeBuilding, alt: 'Abc' })
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
            {iconsPagesMap[row.name]}
            {'  '}
            {row.name}
          </Link>
        ))}
      </div>
    </Select>
  );
}
