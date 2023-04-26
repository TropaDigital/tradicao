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

  const iconsPagesMap: any = {
    Assembleias: <a />,
    Blog: <Image src={MemoIcon} alt="Abc" width={20} height={20} />,
    Contemplados: <Image src={FamilyIcon} alt="Abc" width={20} height={20} />,
    Currículos: <Image src={PaperClip} alt="Abc" width={20} height={20} />,
    Demonstrações: (
      <Image src={ChartIncreasing} alt="Abc" width={20} height={20} />
    ),
    Regulamento: <Image src={Papiro} alt="Abc" width={20} height={20} />
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
